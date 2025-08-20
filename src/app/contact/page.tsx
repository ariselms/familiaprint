"use client";

import ContactBlock from "@/components/ContactBlock";
import MainContainer from "@/components/layout/Container";
import { useLanguageContext } from "@/context/languageContext";
import { languageOptions } from "@/static";

export default function ContactPage() {
	const { language } = useLanguageContext();
	return (
		<MainContainer>
			<div className="p-6 sm:p-8 lg:p-10">
				<h1 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-2">
					{language === languageOptions.english ? "Contact us" : "Contáctanos"}
				</h1>

				<ContactBlock />
			</div>
		</MainContainer>
	);
}
