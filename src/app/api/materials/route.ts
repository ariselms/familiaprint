// app/api/materials/route.ts
export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

// TODO:
// check parameters from the server console to ensure all table functionalities are working as expected
// create the update and delete routes for materials

export async function GET(request: Request) {
	// Added 'request: Request' for consistency
	try {
		const { rows: materials } = await sql`SELECT * FROM materials`;

		// --- Calculate values for Content-Range header ---
		const totalCount = materials.length;
		const startIndex = 0;
		const endIndex = totalCount > 0 ? totalCount - 1 : 0;

		// Construct the Content-Range header string
		const contentRangeHeader = `items ${startIndex}-${endIndex}/${totalCount}`;

		return NextResponse.json(
			{
				success: true,
				message: "Materials fetched successfully",
				data: materials, // This matches what your frontend customDataProvider expects (response.data.data)
				total: totalCount // This matches what your frontend customDataProvider expects (response.data.total)
			},
			{
				status: 200,
				headers: {
					"Content-Range": contentRangeHeader // Add the Content-Range header here
					// As mentioned before, 'Access-Control-Expose-Headers' is typically not needed
					// for same-origin Next.js deployments.
				}
			}
		);
	} catch (error) {
		console.error("Error fetching materials:", error); // More descriptive logging
		return NextResponse.json(
			// Ensure to return NextResponse.json for error cases too
			{
				success: false,
				message: "Error fetching materials",
				data: [], // Return empty array for data consistency on error
				total: 0
			},
			{ status: 500 }
		);
	}
}
