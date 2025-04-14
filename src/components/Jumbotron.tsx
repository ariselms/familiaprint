"use client";

import { useLanguageContext } from "@/context/languageContext";
import Image from "next/image";
import SubscribeForm from "@/forms/SubscribeForm";

const Jumbotron: React.FC = () => {
  const {language} = useLanguageContext();

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      <div className="rounded-xl h-80 bg-gradient-to-b from-blue-200/40 to-sky-200/40 lg:col-span-2 flex flex-col items-start justify-between px-4 py-10 md:px-8 md:py-12 border border-blue-200 backdrop-blur-md
 border-2 relative">
        <Image
          className="absolute top-4 right-4 rotate-12 opacity-50 z-0"
          width={200}
          height={200}
          src="/hecho-in-pr.svg"
          alt="Hecho en Puerto Rico"
        />

        <h1 className="text-5xl md:text-6xl font-bold z-10">
          {language === "en" ? (
            <JumbotronSpan
              classes="text-marinedark font-bold"
              text="Visual solutions for ads and signs"
            />
          ) : (
            <JumbotronSpan
              classes="text-marinedark font-bold"
              text="Soluciones visuales de anuncios y letreros"
            />
          )}
        </h1>

        <h2 className="text-lg md:text-2xl font-bold ">
          {language === "en" ? (
            <JumbotronSpan
              classes="text-gray-800 font-bold"
              text="Your all in one platform, made in Puerto Rico"
            />
          ) : (
            <JumbotronSpan
              classes="text-gray-800 font-bold"
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
                classes="text-marinedark font-bold"
                text="Subscribe to our newsletter"
              />
            ) : (
              <JumbotronSpan
                classes="text-marinedark font-bold"
                text="Suscríbete a nuestro boletín"
              />
            )}
          </h3>

          <p>
            {language === "en" ? (
              <JumbotronSpan
                classes="text-gray-800 trcking-wide font-bold"
                text="Get the latest updates and offers"
              />
            ) : (
              <JumbotronSpan
                classes="text-gray-800 trcking-wide font-bold"
                text="Obtén las últimas actualizaciones y ofertas"
              />
            )}
          </p>
        </div>

        <form className="w-full">
          <label
            htmlFor="email"
            className="text-small mb-1 font-bold text-gray-700 block"
          >
            {language === "en" ? "Email" : "Correo Electrónico"}
          </label>
          <input
            type="email"
            className="w-full md:w-2/3 lg:w-full p-2 rounded-xl text-blue-950 mb-2 bg-white/50 border border-passiondark focus:outline-none focus:ring-2 focus:ring-passiondark focus:border-transparent"
          />

          <div className="w-full mt-2">
            <button className="px-4 py-2 rounded-xl font-bold text-blue-100 cursor-pointer bg-passiondark hover:bg-red-700 transition-all focus:outline-none focus:ring-2 focus:ring-passionlight focus:border-transparent">
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
