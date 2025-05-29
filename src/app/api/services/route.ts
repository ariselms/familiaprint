// app/api/services/route.ts
export const dynamic = "force-dynamic"; // Ensures the route is not cached
import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function GET(request: Request) {
	// Added 'request: Request' to access URL params if needed in future
	try {
		const { rows: services } = await sql`SELECT * FROM services`; // Renamed 'materials' to 'services' for clarity as per path

		// --- Calculate values for Content-Range header ---
		const totalCount = services.length;
		// For simple, non-paginated lists like this, the range is 0 to (totalCount - 1)
		const startIndex = 0;
		const endIndex = totalCount > 0 ? totalCount - 1 : 0; // Ensure endIndex is not -1 for empty lists

		// Construct the Content-Range header string
		const contentRangeHeader = `items ${startIndex}-${endIndex}/${totalCount}`;

		return NextResponse.json(
			{
				success: true,
				message: "Services fetched successfully",
				data: services, // This matches what your frontend customDataProvider expects (response.data.data)
				total: totalCount // This matches what your frontend customDataProvider expects (response.data.total)
			},
			{
				status: 200,
				headers: {
					"Content-Range": contentRangeHeader // Add the Content-Range header here
					// You might also need 'Access-Control-Expose-Headers' if your frontend is on a different domain/port
					// but for Next.js API routes used by a Next.js frontend, this is usually handled automatically.
					// If you *do* encounter CORS issues specific to headers, add:
					// 'Access-Control-Expose-Headers': 'Content-Range',
				}
			}
		);
	} catch (error) {
		console.error("Error fetching services:", error); // More descriptive logging
		return NextResponse.json(
			// Ensure to return NextResponse.json for error cases too
			{
				success: false,
				message: "Error fetching services",
				data: [], // Return empty array for data consistency on error
				total: 0
			},
			{ status: 500 }
		);
	}
}
