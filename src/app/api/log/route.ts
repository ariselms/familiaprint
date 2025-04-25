import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { generateVerificationCodeWithExpirationTime } from "@/helpers/server";
import { v4 as uuidv4 } from "uuid";
import { languageOptions } from "@/static";

export async function POST(request: Request) {
	// get the email
	const { email, language } = await request.json();

	// generate the code
	const { code, codeExpirationTime, sessionTokenExpirationTime } =
		await generateVerificationCodeWithExpirationTime();

	const existingUser = await sql`SELECT * FROM users WHERE email = ${email}`;

	// if the user doesn't exist, create it
	if (existingUser.rows.length === 0) {
		try {
			const { rows: newUser } = await sql`INSERT INTO users
        (email, emailcodenumber, emailcodeexpiry, sessiontoken, sessiontokenexpiry)
        VALUES
        ( ${email},
          ${btoa(code.toString())},
          ${codeExpirationTime.toLocaleString()},
          ${uuidv4()},
          ${sessionTokenExpirationTime.toLocaleString()}) RETURNING *`;

			if (newUser.length > 0) {
				return NextResponse.json({
					success: true,
					message:
						language === languageOptions.english
							? "A code has been sent to your email."
							: "Se ha enviado un código a tu correo.",
					data: null
				}, { status: 200 });
			}
		} catch (dbError) {
			return NextResponse.json(
				{
					success: false,
					message: "Error creating user: " + dbError,
					data: null
				},
				{ status: 500 }
			);
		}
	} else {
		try {
			const updatedUser = await sql`UPDATE users
        SET
          emailcodenumber = ${btoa(code.toString())},
          emailcodeexpiry = ${codeExpirationTime.toISOString()},
          sessiontoken = ${uuidv4()},
          sessiontokenexpiry = ${sessionTokenExpirationTime.toISOString()}
        WHERE email = ${email}
        RETURNING *`;

			if (updatedUser) {
				return NextResponse.json({
					success: true,
					message:
						language === languageOptions.english
							? "A code has been sent to your email."
							: "Se ha enviado un código a tu correo.",
					data: updatedUser
				}, { status: 200 });
			}
		} catch (dbError) {
			return NextResponse.json(
				{
					// Ensure you are returning NextResponse here
					success: false,
					message: "Error updating user: " + dbError,
					data: null
				},
				{ status: 500 }
			);
		}
	}
}
