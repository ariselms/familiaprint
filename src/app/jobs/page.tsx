"use client";

import MainContainer from "@/components/layout/Container";
import { useLanguageContext } from "@/context/languageContext";

export default function JobsPage() {
	const { language } = useLanguageContext();
	return (
		<MainContainer>
			<h1 className="text-black text-4xl font-bold">
				{language === "en" ? "Jobs" : "Vacantes"}
			</h1>
		</MainContainer>
	);
}
