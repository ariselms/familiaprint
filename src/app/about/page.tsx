"use client";

import MainContainer from "@/components/layout/Container";
import { useLanguageContext } from "@/context/languageContext";
import { languageOptions } from "@/static";
import Jumbotron from "@/components/Jumbotron";

export default function AboutUsPage() {
	const { language } = useLanguageContext();

	return (
		<>
			<Jumbotron
				propsData={{
					enHeader: "About us",
					spHeader: "Nosotros",
					enDescription:
						"We have history. We want to share with you. Our valuable customers.",
					spDescription:
						"Tenemos historia. Queremos compartir contigo. Nuestros valiosos clientes.",
					hasButtons: true,
					enFirstButtonText: "Check our services",
					enFirstButtonLink: "#services",
					spFirstButtonText: "Explora servicios",
					enSecondButtonText: "Free quotes",
					enSecondButtonLink: "/quote",
					spSecondButtonText: "Cotización gratis"
				}}
			/>
        <section className="py-24 bg-gray-200 dark:bg-gray-900 text-black dark:text-white">
          <MainContainer>
            {language === languageOptions.english ? (
              <p className="text-lg lg:text-xl">
                Familia Print is a 100% Puerto Rican company. Founded in the mountains of Naranjito, Puerto Rico since 2016. Leónidas had a vision and worked hard over the years along with his family to develop a company that would offer visual solutions for ads, signs, websites and much more.
              </p>
            ) : (
              <p className="text-lg lg:text-xl">
                Familia Print es una compañía 100% Puertorriqueña. Fundada en las montañas del Pueblo de Naranjito, Puerto Rico desde el 2016. Leónidas tuvo una visión y trabajó duro durante muchos años junto a su familia para desarrollar una empresa que ofreciera soluciones visuales para anuncios, letreros, websites y mucho más.
              </p>
            )}
          </MainContainer>
        </section>
		</>
	);
}
