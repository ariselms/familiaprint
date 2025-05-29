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
			await sql`SELECT * FROM materials WHERE id = ${id}`;

		return NextResponse.json({
			success: true,
      message: "Materials fetched successfully",
      data: category
		}, { status: 200 });
	} catch (error) {
		console.error(error);

    return NextResponse.json({
      success: false,
      message: "Error fetching material",
      data: null
    }, { status: 500 });
	}
}