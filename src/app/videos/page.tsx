"use client";

import MainContainer from "@/components/layout/Container";
import { useLanguageContext } from "@/context/languageContext";

export default function VideosPage() {
	const { language } = useLanguageContext();
	return (
		<MainContainer>
			<h1 className="text-black dark:text-white text-4xl font-bold">Videos</h1>
		</MainContainer>
	);
}
