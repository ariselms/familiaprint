export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { sendEmail } from "@/helpers/server";
import { languageOptions } from "@/static";

export async function POST(req: Request) {
	try {
		const body = await req.json(); // Parse the request body

		const {
			First,
			Last,
			Email,
			Phone,
			Street,
			City,
			State,
			Zip,
			ProjectType,
			ProjectEstimateTimeframe,
			Comments,
			Language
		} = body;

		const htmlBody = `
      <h1>${Language === languageOptions.english
        ? "You have requested a quote with the following information:"
        : "Ha solicitado una cotización con la siguiente información:"}</h1>

      <p>
        <strong>
        ${Language === languageOptions.english ? "Name" : "Nombre"}:
        </strong>
        ${First} ${Last}
      </p>

      <p>
        <strong>
        ${
					Language === languageOptions.english ? "Email" : "Correo Electrónico"
				}:
        </strong>
        ${Email}
      </p>

      <p>
        <strong>
          ${Language === languageOptions.english ? "Phone" : "Teléfono"}:
        </strong>
        ${Phone}
      </p>

      <p>
        <strong>
          ${Language === languageOptions.english ? "Address" : "Dirección"}:
        </strong>
        ${Street} ${City} ${State} ${Zip}
      </p>

      <p>
        <strong>
          ${
						Language === languageOptions.english
							? "Project type"
							: "Tipo de proyecto"
					}:
        </strong>
        ${ProjectType}
      </p>

      <p>
        <strong>
        ${
					Language === languageOptions.english
						? "When do you want the quote done"
						: "¿Cuándo necesitas la cotización?"
				}
        </strong>
        ${ProjectEstimateTimeframe}
      </p>

      <p>
        <strong>
        ${Language === languageOptions.english ? "Comments" : "Comentarios"}:
        </strong>${Comments}
      </p>

      <hr />

      <p>
        ${
					Language === languageOptions.english
						? "Thank you for your interest in Familia Print services, we will contact you shortly using the provided information."
						: "Gracias por tu interés en Familia Print services, nos pondremos en contacto contigo usando la información proporcionada."
				}
      </p>

      <p>
        ${
					Language === languageOptions.english
						? "You can also visit our website at"
						: "Puedes visitar nuestro sitio web en"
				} <a href="https://familiaprint.com">https://familiaprint.com</a>,
        ${
					Language === languageOptions.english
						? "for more information and services"
						: "para obtener más información y servicios"
				}.
      </p>
    `;

		const emailSubject =
			Language === languageOptions.english
				? "Thank you for your interest in Familia Print services."
				: "Gracias por tu interés en los servicios de Familia Print.";

		// Send an email to the user
		await sendEmail(
			[Email, "rnavedojr@gmail.com", "oyola57@gmail.com"],
			emailSubject,
			htmlBody
		);

		const responseMessage =
			Language === languageOptions.english
				? "Quote request sent successfully"
				: "Solicitud de cotización enviada con éxito";

		return NextResponse.json(
			{
				success: true,
				message: responseMessage,
				data: null
			},
			{ status: 200 }
		);
	} catch (error: any) {
		console.error("Error message:", error.message);
		console.error("Error stack:", error.stack);
		console.error(
			"Error response:",
			error.response ? error.response.data : "No response data"
		);

		return NextResponse.json(
			{
        success: false,
        message: error.message,
        data: null
    },
			{ status: 500 }
		);
	}
}

export async function GET() {
	return NextResponse.json({ message: "GET leads" });
}
