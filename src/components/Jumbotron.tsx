"use client";

import { useLanguageContext } from "@/context/languageContext";
import Image from "next/image";
import SubscribeForm from "@/forms/SubscribeForm";

const Jumbotron: React.FC = () => {
  const {language} = useLanguageContext();

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      <div className="rounded-xl h-80 bg-gradient-to-b from-blue-200/40 to-sky-200/40 lg:col-span-2 flex flex-col items-start px-4 py-10 md:px-8 md:py-12 border border-blue-200 backdrop-blur-md border-2 relative">
        <Image
          className="absolute bottom-4 right-4 rotate-12 opacity-50 z-0"
          width={200}
          height={200}
          src="/hecho-in-pr.svg"
          alt="Hecho en Puerto Rico"
        />

        <h1 className="text-5xl md:text-6xl font-bold mb-6 z-10">
          {language === "en" ? (
            <JumbotronSpan
              classes="text-blue-950 font-bold"
              text="Visual solutions for ads and signs"
            />
          ) : (
            <JumbotronSpan
              classes="text-blue-950 font-bold"
              text="Soluciones visuales de anuncios y letreros"
            />
          )}
        </h1>

        <h2 className="text-lg md:text-2xl font-bold ">
          {language === "en" ? (
            <JumbotronSpan
              classes="text-blue-950 font-bold"
              text="Your all in one platform, made in Puerto Rico"
            />
          ) : (
            <JumbotronSpan
              classes="text-blue-950 font-bold"
              text="Tu plataforma todo en uno, hecho en Puerto Rico"
            />
          )}
        </h2>
      </div>

      <div className="lg:col-span-1 bg-gradient-to-t from-blue-200/40 to-sky-200/40 rounded-xl px-4 py-4 md:py-8 xl:py-12 border border-blue-200 backdrop-blur-lg
 border-2 flex flex-col items-start justify-between">
        <div className="mb-4">
          <h3 className="text-2xl font-bold ">
            {language === "en" ? (
              <JumbotronSpan
                classes="text-blue-950 font-bold"
                text="Subscribe to our newsletter"
              />
            ) : (
              <JumbotronSpan
                classes="text-blue-950 font-bold"
                text="Suscríbete a nuestro boletín"
              />
            )}
          </h3>

          <p>
            {language === "en" ? (
              <JumbotronSpan
                classes="text-blue-950 trcking-wide font-bold"
                text="Get the latest updates and offers"
              />
            ) : (
              <JumbotronSpan
                classes="text-blue-950 trcking-wide font-bold"
                text="Obtén las últimas actualizaciones y ofertas"
              />
            )}
          </p>
        </div>
        <SubscribeForm />
      </div>
    </div>
  );
};

export default Jumbotron;

export interface JumbotronInterface {
  classes: string;
  text: string;
}

const JumbotronSpan = ({ classes, text }: JumbotronInterface) => {
  return <span className={classes}>{text}</span>;
};
