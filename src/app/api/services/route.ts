// app/api/services/route.ts
export const dynamic = "force-dynamic"; // Ensures the route is not cached
import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

// Helper function to sanitize and build WHERE clause from filter
// This is a simplified example. For complex filters (e.g., gt, lt),
// you'd need a more sophisticated parser.
function buildWhereClause(filter: any): { clause: string; values: any[] } {
  let conditions: string[] = [];
  let values: any[] = [];
  let paramIndex = 1; // Start index for SQL parameters ($1, $2, etc.)

  for (const key in filter) {
    if (filter.hasOwnProperty(key)) {
      const value = filter[key];

      // Handle 'q' (global search) filter
      if (key === 'q') {
        // Apply a case-insensitive LIKE across relevant text fields in the 'services' table
        conditions.push(`(
          endescription ILIKE $${paramIndex} OR
          spdescription ILIKE $${paramIndex} OR
          enname ILIKE $${paramIndex} OR
          spname ILIKE $${paramIndex} OR
          entitle ILIKE $${paramIndex} OR
          sptitle ILIKE $${paramIndex} OR
          ensummary ILIKE $${paramIndex} OR
          spsummary ILIKE $${paramIndex}
        )`);
        values.push(`%${value}%`);
        paramIndex++;
      }
      // Handle array filters (e.g., for 'id' from getMany or multi-select filters)
      else if (Array.isArray(value)) {
        if (value.length > 0) {
          const placeholders = value.map(() => `$${paramIndex++}`).join(',');
          conditions.push(`"${key}" IN (${placeholders})`);
          values.push(...value);
        }
      }
      // Handle exact match filters for other fields
      else {
        conditions.push(`"${key}" = $${paramIndex}`);
        values.push(value);
        paramIndex++;
      }
    }
  }

  const clause = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';
  return { clause, values };
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    // 1. Parse Filter Parameter
    const filterStr = searchParams.get('filter') || '{}';
    const filter = JSON.parse(decodeURIComponent(filterStr));

    // 2. Parse Range Parameter for Pagination
    const rangeStr = searchParams.get('range');
    let offset = 0;
    let limit = 10; // Default limit
    if (rangeStr) {
      const range = JSON.parse(decodeURIComponent(rangeStr));
      const start = parseInt(range[0], 10);
      const end = parseInt(range[1], 10);
      offset = start;
      limit = end - start + 1;
    }

    // 3. Parse Sort Parameter
    const sortStr = searchParams.get('sort');
    let sortField = 'id'; // Default sort field
    let sortOrder = 'ASC'; // Default sort order
    if (sortStr) {
      const sort = JSON.parse(decodeURIComponent(sortStr));
      sortField = sort[0];
      sortOrder = sort[1];

      // Basic Whitelisting for Sort Field to prevent SQL Injection
      // IMPORTANT: Add all your actual column names from the 'services' table that you allow sorting by
      const allowedSortFields = [
        'id', 'endescription', 'spdescription', 'enname', 'spname',
        'imgurl', 'reachcapacity', 'entitle', 'sptitle', 'spsummary', 'ensummary'
      ];
      if (!allowedSortFields.includes(sortField)) {
        console.warn(`Attempted to sort by disallowed field: ${sortField}`);
        sortField = 'id'; // Fallback to a safe default
      }
      if (!['ASC', 'DESC'].includes(sortOrder.toUpperCase())) {
        console.warn(`Attempted to sort with disallowed order: ${sortOrder}`);
        sortOrder = 'ASC'; // Fallback to a safe default
      }
    }

    // Build the WHERE clause
    const { clause: whereClause, values: whereValues } = buildWhereClause(filter);

    // --- First Query: Get Total Count (with filters, but no pagination) ---
    const countQuery = `SELECT COUNT(*) FROM services ${whereClause};`;
    const { rows: countRows } = await sql.query(countQuery, whereValues);
    const totalCount = parseInt(countRows[0].count, 10);

    // --- Second Query: Get Paginated and Sorted Data (with filters, sort, limit, offset) ---
    const dataQuery = `
      SELECT * FROM services
      ${whereClause}
      ORDER BY "${sortField}" ${sortOrder}
      LIMIT $${whereValues.length + 1} OFFSET $${whereValues.length + 2};
    `;
    const { rows: services } = await sql.query(dataQuery, [...whereValues, limit, offset]);

    // --- Construct Content-Range header ---
    const startIndex = offset;
    const endIndex = offset + services.length - 1;
    const finalEndIndex = services.length > 0 ? endIndex : offset;

    const contentRangeHeader = `items ${startIndex}-${finalEndIndex}/${totalCount}`;

    return NextResponse.json(
      {
        success: true,
        message: "Services fetched successfully",
        data: services,
        total: totalCount
      },
      {
        status: 200,
        headers: {
          'Content-Range': contentRangeHeader,
        }
      }
    );

  } catch (error) {
    console.error("Error fetching services:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Error fetching services",
        data: [],
        total: 0
      },
      { status: 500 }
    );
  }
}