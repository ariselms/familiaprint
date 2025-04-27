import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { cookies } from "next/headers";

export async function POST(req: Request) {
	try {
		const body = await req.json();

		const {
			cookie: { name, value }
		} = body;

		if (!name || !value) {
			return NextResponse.json({
				success: false,
				message: "Invalid cookie, please try again...",
        data: null
			}, { status: 300 });
		} else {
			const { rows: userDb } =
				await sql`SELECT * FROM users WHERE sessiontoken = ${value}`;

      const user = userDb[0];

			if (!user) {
				return NextResponse.json({
					success: false,
					message: "Invalid cookie, please try again...",
          data: null
				}, { status: 300 });
			}

			if (user.sessiontokenexpiration < new Date()) {
				return NextResponse.json({
					success: false,
					message: "Session expired, please login again...",
          data: null
				}, { status: 300 });
			}

			return NextResponse.json({
				success: true,
				message: "User validated successfully...",
				data: user
			}, { status: 200 });
		}
	} catch (error) {
		return NextResponse.json({
			success: false,
			message: "Internal Server Error",
      data: null
		}, { status: 500 });
	}
}

export const dynamic = "force-dynamic";