"use client";

import MainContainer from "@/components/layout/Container";
import { useLanguageContext } from "@/context/languageContext";

export default function FaqsPage() {
	const { language } = useLanguageContext();
	return (
		<MainContainer>
			<h1 className="text-black text-4xl font-bold">
				{language === "en" ? "FAQ's" : "Preguntas frecuentes"}
			</h1>
		</MainContainer>
	);
}
