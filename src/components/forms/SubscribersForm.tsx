import { useContext } from "react";
import { useLanguageContext } from "@/context/languageContext";

export default function SubscribersForm() {
  const { language } = useLanguageContext();
  return (
    <form className="w-full">
    <label
      htmlFor="email"
      className="text-small mb-1 font-bold text-gray-700 block"
    >
      {language === "en" ? "Email" : "Correo Electronico"}
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
  );
}