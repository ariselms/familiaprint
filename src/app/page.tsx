"use client";

import ServicesMaterialsList from "@/components/Materials";
import Jumbotron from "@/components/Jumbotron";
import SectionHeader from "@/components/SectionHeader";
import ServicesList from "@/components/Services";

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
			<SectionHeader
				enTitle="Materials and Services"
				spTitle="Materiales y Servicios"
				enDescription="We offer a wide range of services and products that you can choose from a variety of materials for your needs. Keep reading and learning if you need more information. If you know what you want, click the Get a quote button below and let use know, we will get back to you as soon as you need it."
				spDescription="Ofrecemos una gran variedad de productos y servicios que puedes elegir de la variedad de materiales que ofrecemos. Continúa leyendo y aprendiendo si necesitas mas información. Si sabes lo que quieres, haz click en el botón de cotización déjanos saber, nos pondremos en contacto contigo lo antes posible."
			/>
      <ServicesList />
			<ServicesMaterialsList />
		</>
	);
}
