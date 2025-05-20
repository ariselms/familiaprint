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