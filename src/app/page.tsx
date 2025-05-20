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
			{/* <SectionHeader
				enTitle="Products and Materials"
				spTitle="Productos y Materiales"
				enDescription="We offer a wide range of products and services that you can choose frombased on your budget and needs. Keep reading if you need more information. If you know what you want, click the Get a quote button below and send us a message with the required information. We will get back to you as soon as you need it."
				spDescription="Ofrecemos una gran variedad de productos y servicios que puedes elegir basado en tu presupuesto y necesidades. Continua leyendo si necesitas mas información. Si sabes lo que quieres, haz click en el botón de cotización y envíanos un mensaje con la información necesaria. Nos pondremos en contacto contigo lo antes posible."
			/> */}
      <ServicesList />
			<ServicesMaterialsList />
		</>
	);
}
