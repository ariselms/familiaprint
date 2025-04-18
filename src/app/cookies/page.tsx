"use client";

import MainContainer from "@/components/layout/Container";
import { useLanguageContext } from "@/context/languageContext";

export default function CookiesPage() {
  const {language} = useLanguageContext();
  return (
    <MainContainer>
      <h1 className="text-black text-4xl font-bold">
        {language === "en" ? "Cookies Policy" : "Política de cookies"}
      </h1>
    </MainContainer>
  );
}
