"use client";

import MainContainer from "@/components/layout/Container";
import Jumbotron from "@/components/Jumbotron";
import QuoteForm from "@/components/forms/QuoteForm";

export default function QuotePage() {
	return (
		<>
			<Jumbotron
				propsData={{
					enHeader: "Request a free quote",
					spHeader: "Solicita un cotización gratis",
					enDescription:
						"Choose between the following options and we will contact you as soon as possible.",
					spDescription:
						"Escoge entre las siguientes opciones y nos pondremos en contacto contigo lo antes posible.",
					hasButtons: false,
					enFirstButtonText: "Check our services",
					enFirstButtonLink: "#services",
					spFirstButtonText: "Explora servicios",
					enSecondButtonText: "Free quotes",
					enSecondButtonLink: "/quote",
					spSecondButtonText: "Cotización gratis"
				}}
			/>
			<section className="py-16 bg-gray-200 dark:bg-gray-900">
				<MainContainer>
          <QuoteForm />
				</MainContainer>
			</section>
		</>
	);
}
