"use client";

import MainContainer from "@/components/layout/Container";
import { useLanguageContext } from "@/context/languageContext";

export default function PrivacyPage() {
  const {language} = useLanguageContext();
  return (
    <MainContainer>
      <h1 className="text-black text-4xl font-bold">
        {language === "en" ? "Privacy Policy" : "Política de privacidad"}
      </h1>
    </MainContainer>
  );
}