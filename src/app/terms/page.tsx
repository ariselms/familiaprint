"use client";

import MainContainer from "@/components/layout/Container";
import { useLanguageContext } from "@/context/languageContext";

export default function TermsPage() {
  const {language} = useLanguageContext();
  return (
		<MainContainer>
			<h1 className="text-black text-4xl font-bold">
        {language === "en" ? "Terms and Conditions" : "Términos y condiciones"}
      </h1>
		</MainContainer>
	);
}