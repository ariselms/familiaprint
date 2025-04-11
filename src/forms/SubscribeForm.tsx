import React from "react";
import { useLanguageContext } from "../context/languageContext";

const SubscribeForm = () => {
  const {language} = useLanguageContext();

  return (
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
  );
};

export default SubscribeForm;
