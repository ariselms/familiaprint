export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
// import { sendEmail } from "@/helpers/server";
// import { languageOptions } from "@/static";
import { sql } from "@vercel/postgres";

// update user
export async function PUT(req: Request) {
	try {
		const body = await req.json(); // Parse the request body

		const {
			namefirst,
			namelast,
			email,
			tel,
			addressstreet,
			addresscity,
			addressstate,
			addresszip
		} = body;

		// update user information in the database
		const { rows: userDb } =
			await sql`UPDATE users
        SET
          namefirst = ${namefirst},
          namelast = ${namelast},
          email = ${email},
          tel = ${tel},
          addressstreet = ${addressstreet},
          addresscity = ${addresscity},
          addressstate = ${addressstate},
          addresszip = ${addresszip}
        WHERE email = ${email} RETURNING *`;

		const user = userDb[0];

    if (!user) {
      return NextResponse.json({
        success: false,
        message: "User not found",
        data: null
      }, { status: 404 });
    }

    if (user) {
      return NextResponse.json({
        success: true,
        message: "User updated successfully",
        data: user
      }, { status: 200 });
    }

	} catch (error) {
		console.error(error);
	}

	return NextResponse.json({ message: "GET leads" });
}
