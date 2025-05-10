import ServicesCategoriesList from "@/components/Categories";
import Jumbotron from "@/components/Jumbotron";

export default async function Home() {

  return (
		<>
			<Jumbotron
        propsData={{
          enHeader: "Welcome to Familia Print",
          spHeader: "Bienvenido a Familia Print",
          enDescription: "Offering visual solutions for ads, signs, websites and much more. Discover our all-in-one platform, made in Puerto Rico. We have your solution tailor made for your business needs.",
          spDescription: "Ofrecemos soluciones visuales de anuncios, letreros, websites y mucho más. Descubre nuestra plataforma todo en uno, hecho en Puerto Rico. Tenemos la solución medida a tus necesidades de negocio.",
          hasButtons: true,
          enFirstButtonText: "Check our services",
          enFirstButtonLink: "#services",
          spFirstButtonText: "Explora servicios",
          enSecondButtonText: "Free quotes",
          enSecondButtonLink: "/quote",
          spSecondButtonText: "Cotización gratis",

        }}
      />
      <ServicesCategoriesList/>
		</>
	);
}
