import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { generateVerificationCodeWithExpirationTime } from "@/helpers/server";
import { v4 as uuidv4 } from "uuid";
import { languageOptions } from "@/static";
import { sendEmail } from "@/helpers/server";

export async function POST(request: Request) {
	// get the email
	const { email, language } = await request.json();

	// generate the code
	const { code, codeExpirationTime, sessionTokenExpirationTime } =
		await generateVerificationCodeWithExpirationTime();

	const existingUser = await sql`SELECT * FROM users WHERE email = ${email}`;

  console.log(existingUser.rows);

	const emaillSubject =
		language === languageOptions.english
			? "Verification Code"
			: "Código de verificación";

	const htmlBody = `
    <h1>${
      language === languageOptions.english
        ? "Verification Code for Familia Print login"
        : "Código de verificación para ingresar a Familia Print"
    }
    </h1>

    <p>${
      language === languageOptions.english
        ? "Your verification code is:"
        : "Tu código de verificación es:"
    }
      <strong>${code}</strong>
    </p>

    <p>${
      language === languageOptions.english
        ? "If you did not request this code, please check your email password is not compromised."
        : "Si no solicitaste este código, por favor verifica que tu contraseña de correo no haya sido comprometida."
    }
    </p>

    <p>${
      language === languageOptions.english
        ? "Thank you for using Familia Print."
        : "Gracias por usar Familia Print."
    }
    </p>`;

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
				await sendEmail(
					[email, "rnavedojr@gmail.com", "oyola57@gmail.com"],
					emaillSubject,
					htmlBody
				);

				return NextResponse.json(
					{
						success: true,
						message:
							language === languageOptions.english
								? "A code has been sent to your email."
								: "Se ha enviado un código a tu correo.",
						data: null
					},
					{ status: 200 }
				);
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
				await sendEmail(
					[email, "rnavedojr@gmail.com", "oyola57@gmail.com"],
					emaillSubject,
					htmlBody
				);

				return NextResponse.json(
					{
						success: true,
						message:
							language === languageOptions.english
								? "A code has been sent to your email."
								: "Se ha enviado un código a tu correo.",
						data: null
					},
					{ status: 200 }
				);
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
