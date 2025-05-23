"use client";

import ServicesMaterialsList from "@/components/Materials";
import Jumbotron from "@/components/Jumbotron";
import ServicesList from "@/components/Services";

// TODO: Move the materials here so I can pass them to the Jumbotron and the ServicesList

export default function Home() {
  return (
		<>
			<Jumbotron
				propsData={{
					enHeader: "Welcome to Familia Print",
					spHeader: "Bienvenido a Familia Print",
					enDescription:
						"Crafting visual solutions for ads, signs, graphic design, websites and much more. Discover our platform all in one, made in Puerto Rico. We have the solution to meet your business needs.",
					spDescription:
						"Confeccionando soluciones visuales de anuncios, letreros, diseño gráfico, websites y más. Descubre nuestra plataforma todo en uno, hecho en Puerto Rico. Tenemos la solución medida a tus necesidades de negocio.",
					hasButtons: true,
					enFirstButtonText: "Explore our services",
					enFirstButtonLink: "#services",
					spFirstButtonText: "Explora servicios",
					enSecondButtonText: "Free quotes",
					enSecondButtonLink: "/quote",
					spSecondButtonText: "Cotización gratis"
				}}
			/>
      <ServicesList />
			<ServicesMaterialsList />
		</>
	);
}
