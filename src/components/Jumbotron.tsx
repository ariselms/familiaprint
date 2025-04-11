"use client";

import { useLanguageContext } from "@/context/languageContext";
import Image from "next/image";
import SubscribeForm from "@/forms/SubscribeForm";

const Jumbotron: React.FC = () => {
  const {language} = useLanguageContext();

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div className="rounded-xl h-80 bg-gradient-to-r from-blue-500 to-cyan-500 lg:col-span-2 flex flex-col items-start justify-between px-4 py-10 md:px-8 md:py-12 border border-blue-400 border-2 relative">
        <Image
          className="absolute top-4 right-4 rotate-12 opacity-25 z-0"
          width={200}
          height={200}
          src="/hecho-in-pr.svg"
          alt="Hecho en Puerto Rico"
        />

        <h1 className="text-5xl md:text-6xl font-bold text-white z-10">
          {language === "en" ? (
            <JumbotronSpan
              classes="text-blue-950"
              text="Visual solutions for ads and signs"
            />
          ) : (
            <JumbotronSpan
              classes="text-blue-950"
              text="Soluciones visuales de anuncios y letreros"
            />
          )}
        </h1>

        <h2 className="text-lg md:text-2xl font-bold text-white">
          {language === "en" ? (
            <JumbotronSpan
              classes="text-blue-100 font-bold"
              text="Your all in one platform, made in Puerto Rico"
            />
          ) : (
            <JumbotronSpan
              classes="text-blue-100 font-bold"
              text="Tu plataforma todo en uno, hecho en Puerto Rico"
            />
          )}
        </h2>
      </div>

      <div className="lg:col-span-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl px-4 py-4 md:py-8 xl:py-12 border border-blue-400 border-2 flex flex-col items-start justify-between">
        <div>
          <h3 className="text-2xl font-bold text-white">
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
                classes="text-blue-100 trcking-wide font-bold"
                text="Get the latest updates and offers"
              />
            ) : (
              <JumbotronSpan
                classes="text-blue-100 trcking-wide font-bold"
                text="Obtén las últimas actualizaciones y ofertas"
              />
            )}
          </p>
        </div>

        <form className="w-full">
          <input
            type="email"
            className="w-full md:w-2/3 lg:w-full p-2 rounded-xl text-blue-950 mb-2 bg-blue-100/50"
          />

          <div className="w-full mt-2">
            <button className="px-4 py-2 rounded-xl font-bold text-blue-100 cursor-pointer bg-blue-950 hover:bg-blue-900 transition-all">
              {language === "en" ? "Subscribe" : "Suscribirse"}
            </button>
          </div>
        </form>
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
