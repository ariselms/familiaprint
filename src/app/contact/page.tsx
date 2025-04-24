"use client";

import MainContainer from "@/components/layout/Container";
import { useLanguageContext } from "@/context/languageContext";

export default function ContactPage() {
	const { language } = useLanguageContext();
	return (
		<MainContainer>
			<h1 className="text-black dark:text-white text-4xl font-bold">
				{language === "en" ? "Contact Us" : "Contáctanos"}
			</h1>
		</MainContainer>
	);
}
