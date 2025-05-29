export const dynamic = "force-dynamic";
import {NextResponse} from "next/server";
import {sql} from "@vercel/postgres";

export async function GET(
	request: Request,
	{ params }: { params: Promise<{ id: string }> }
) {
	const { id } = await params;

	try {
		const { rows: category } =
			await sql`SELECT * FROM services WHERE id = ${id}`;

		return NextResponse.json({
			success: true,
      message: "Services fetched successfully",
      data: category
		}, { status: 200 });
	} catch (error) {
		console.error(error);

    return NextResponse.json({
      success: false,
      message: "Error fetching services",
      data: null
    }, { status: 500 });
	}
}

// PUT (UPDATE) a single service
export async function PUT(
    request: Request,
    { params }: { params: { id: string } }
) {
    const { id } = params; // The ID of the record to update

    try {
        // Parse the request body to get the updated data
        const body = await request.json();

        // Dynamically build the SET clause for the SQL UPDATE statement
        // This ensures flexibility as fields can vary
        const updateFields: string[] = [];
        const updateValues: any[] = [];
        let paramIndex = 1; // Start parameters from $1

        for (const key in body) {
            // Exclude the 'id' from the SET clause if it's part of the body
            // as it's used in the WHERE clause instead
            if (body.hasOwnProperty(key) && key !== 'id') {
                updateFields.push(`"${key}" = $${paramIndex}`);
                updateValues.push(body[key]);
                paramIndex++;
            }
        }

        if (updateFields.length === 0) {
            return NextResponse.json({
                success: false,
                message: "No fields provided for update."
            }, { status: 400 });
        }

        // Add the ID for the WHERE clause as the last parameter
        updateValues.push(id);

        // Construct the UPDATE query
        // RETURNING * will return the updated row, which is perfect for React-admin
        const updateQuery = `
            UPDATE services
            SET ${updateFields.join(', ')}
            WHERE id = $${paramIndex}
            RETURNING *;
        `;

        const { rows: updatedServiceRows } = await sql.query(updateQuery, updateValues);

        if (updatedServiceRows.length === 0) {
            return NextResponse.json({
                success: false,
                message: `Service with ID ${id} not found.`
            }, { status: 404 });
        }

        const updatedService = updatedServiceRows[0];

        // If your database returns a primary key column other than 'id',
        // make sure to map it to 'id' before returning to React-admin
        // Example if your DB uses 'service_id' as PK:
        // if (updatedService && !updatedService.id && updatedService.service_id) {
        //     updatedService.id = updatedService.service_id;
        // }


        return NextResponse.json({
            success: true,
            message: "Service updated successfully",
            data: updatedService // React-admin expects the updated record here
        }, { status: 200 });

    } catch (error) {
        console.error(`Error updating service with ID ${id}:`, error);

        return NextResponse.json({
            success: false,
            message: "Error updating service",
            data: null
        }, { status: 500 });
    }
}

// DELETE a single service
export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
) {
    const { id } = params; // The ID of the record to delete

    try {
        // Execute the DELETE query
        // RETURNING id is sufficient, as React-admin primarily needs the ID of the deleted record.
        const { rows: deletedServiceRows } = await sql`
            DELETE FROM services
            WHERE id = ${id}
            RETURNING id;
        `;

        if (deletedServiceRows.length === 0) {
            return NextResponse.json({
                success: false,
                message: `Service with ID ${id} not found.`,
                data: null
            }, { status: 404 });
        }

        // React-admin expects { data: { id: deletedId } } for delete success
        return NextResponse.json({
            success: true,
            message: "Service deleted successfully",
            data: { id: deletedServiceRows[0].id }
        }, { status: 200 });

    } catch (error) {
        console.error(`Error deleting service with ID ${id}:`, error);

        return NextResponse.json({
            success: false,
            message: "Error deleting service",
            data: null
        }, { status: 500 });
    }
}