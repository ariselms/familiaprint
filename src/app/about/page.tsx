"use client";

import MainContainer from "@/components/layout/Container";
import { useLanguageContext } from "@/context/languageContext";

export default function AboutUsPage() {
	const { language } = useLanguageContext();
	return (
		<MainContainer>
			<h1 className="text-black text-4xl font-bold">
				{language === "en" ? "About Us" : "Nosotros"}
			</h1>
		</MainContainer>
	);
}
