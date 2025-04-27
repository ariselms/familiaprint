import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { languageOptions } from "@/static";
import { cookies } from "next/headers";

export async function POST(request: Request) {

  const { email, code, language } = await request.json();

  const genericErrorMessage = language === languageOptions.english ? "An error occurred in our end. Try again later." : "Ha ocurrido un error en nuestro lado. Intenta de nuevo mas tarde.";

  try {
    // lookup the user with email
    const { rows: userExist } = await sql`SELECT * FROM users WHERE email = ${email}`;
    // check if the user exists
    if (userExist.length > 0) {

      let user = userExist[0];

      // check if the code is expired
      if(user.emailcodeexpiry < new Date()) {

        const codeExpiredMessage = language === languageOptions.english ? "Code has expired" : "El código ha expirado";

        return NextResponse.json({
          success: false,
          message: codeExpiredMessage,
          data: null
        });
      }

      const decodedCode = atob(user.emailcodenumber);

      if (decodedCode !== code) {

        const invalidCodeMessage = language === languageOptions.english ? "Invalid code" : "Código inválido";

        return NextResponse.json({
          success: false,
          message: invalidCodeMessage,
          data: null
        });
      }

      if (decodedCode === code) {

        const authenticationSuccessMessage = language === languageOptions.english ? "User authenticated successfully." : "Usuario autenticado exitosamente.";

        const serverResponse = NextResponse.json({
					success: true,
					message: authenticationSuccessMessage,
					data: user
				});

        serverResponse.cookies.set("sessiontoken", user.sessiontoken);
        serverResponse.cookies.set("language", language);

        return serverResponse;

			} else {

        return NextResponse.json({
					success: false,
					message: genericErrorMessage,
					data: null
				});
      }
    }

    throw new Error(genericErrorMessage);

  } catch (error) {
    console.error(error);
  }
}

export async function GET() {

  const cookieStore = cookies();
  const authCookie = (await cookieStore).get("sessiontoken");

  try {
    const { rows: userExist } =
			await sql`SELECT * FROM users WHERE sessiontoken = ${authCookie?.value}`;

    if (userExist.length > 0) {
			const user = userExist[0];

      if (user.sessiontokenexpiration < new Date()) {
        return NextResponse.json({
          success: false,
          message: "Session token has expired",
          data: null
        });
      }

      if (user.sessiontoken !== authCookie?.value) {
        return NextResponse.json({
          success: false,
          message: "Invalid session token",
          data: null
        });
      }

			return NextResponse.json(
				{
					success: true,
					message: "User fetched successfully",
					data: user
				},
				{ status: 200 }
			);
		}

    throw new Error("User not found");

  } catch (error) {
    console.error(error);

    return NextResponse.json({
      success: false,
      message: "Error fetching user",
      data: null
    }, { status: 500 });
  }
}

export async function DELETE(request: Request) {

  const cookieStore = cookies();
  (await cookieStore).delete("sessiontoken");

  return NextResponse.json({
    success: true,
    message: "User logged out successfully",
    data: null
  }, { status: 200 });
}

// TODO:
// 1. set email credentials in namecheap DONE
// 2. complete workflow by persisting the user
// 3. double check the workflow and refactor as necessary
// 4. test the workflow several times
// 5. start working in the quote page
// 6. start working in the subscription emails
// 10.set up sub categories and everything that it implies
// 9. set up orders functionality with cart and checkout
// 7. complete the products for sale functionaltiy
// 8. start working in react admin  to implement crud operations for super admins
// 11. start working in an upgrade that will allow users to preview certain products before buying them