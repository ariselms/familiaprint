import {NextResponse} from "next/server";
import {sql} from "@vercel/postgres";
import { Params } from "next/dist/server/request/params";

export async function GET(
	request: Request,
	{ params }: { params: Promise<{ id: string }> }
) {
	const { id } = await params;

	try {
		const { rows: category } =
			await sql`SELECT * FROM categories WHERE id = ${id}`;

		return NextResponse.json({
			success: true,
			category: category
		});
	} catch (error) {
		console.error(error);
	}
}