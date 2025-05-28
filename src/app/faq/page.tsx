"use client";

import { useLanguageContext } from "@/context/languageContext";
import Jumbotron from "@/components/Jumbotron";
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";
import MainContainer from "@/components/layout/Container";
import { languageOptions } from "@/static";
import Link from "next/link";

export default function FaqsPage() {
	const { language } = useLanguageContext();
	return (
		<>
			<Jumbotron
				propsData={{
					enHeader: "FAQ's",
					spHeader: "Preguntas frecuentes",
					enDescription:
						"Have a question? Check our FAQ's or contact us for more information.",
					spDescription:
						"¿Tienes una pregunta? Revisa nuestras preguntas frecuentes o contáctanos para más información.",
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
					<Accordion>
						<AccordionPanel>
							<AccordionTitle className="bg-gray-300 dark:bg-gray-800 cursor-pointer">
								{language === languageOptions.english
									? "What is Familia Print?"
									: "¿Que es Familia Print?"}
							</AccordionTitle>
							<AccordionContent>
								<p className="mb-2 text-gray-500 dark:text-gray-400">
									{language === languageOptions.english
										? "Familia Print is a family-owned business that specializes in providing high-quality printing services. We are dedicated to delivering exceptional results and ensuring customer satisfaction."
										: "Familia Print es un negocio familiar que se especializa en ofrecer servicios de impresión de alta calidad. Estamos dedicados a entregar resultados excepcionales y asegurar la satisfacción del cliente."}
								</p>
								{language === languageOptions.english ? (
									<p className="text-gray-500 dark:text-gray-400">
										Learn more about our{" "}
										<Link
											href="/#services"
											className="text-cyan-600 hover:underline dark:text-cyan-500">
											printing services{" "}
										</Link>{" "}
										and how we can help you achieve stunning results.
									</p>
								) : (
									<p className="text-gray-500 dark:text-gray-400">
										Aprende sobre nuestros{" "}
										<Link
											href="/#services"
											className="text-cyan-600 hover:underline dark:text-cyan-500">
											servicios de impresión{" "}
										</Link>{" "}
										y cómo podemos ayudarte a obtener resultados impresionantes.
									</p>
								)}
							</AccordionContent>
						</AccordionPanel>
					</Accordion>
				</MainContainer>
			</section>
		</>
	);
}
