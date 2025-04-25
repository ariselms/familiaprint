import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { languageOptions } from "@/static";

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

        const authenticationSuccessMessage = language === languageOptions.english ? "User authenticated successfully." : "Usuario autenticado conxito.";

        const serverResponse = NextResponse.json({
					success: true,
					message: authenticationSuccessMessage,
					data: user
				});

        serverResponse.cookies.set("sessiontoken", user.sessiontoken);

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