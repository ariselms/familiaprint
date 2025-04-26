"use client";

import { useEffect } from "react";
import { useCategoriesContext } from "@/context/categoriesContext";
import { useLanguageContext } from "@/context/languageContext";
import { useParams } from "next/navigation";
import ServiceBanner from "@/components/ServiceBanner";
import Container from "@/components/layout/Container";
import Spinner from "@/components/Spinner";
import { languageOptions } from "@/static";

const ServicesPage = () => {
	const { id } = useParams();

	const { category, loadingCategories, getCategoryById } =
		useCategoriesContext();

  const { language } = useLanguageContext();

	useEffect(() => {
		getCategoryById(String(id));
	}, [id]);

	if (loadingCategories) {
		return <Spinner />;
	}

	return (
		<main>
			<ServiceBanner
        imgUrl={category?.imgurl}
				category={
					language === languageOptions.spanish
						? (category?.spname ?? "")
						: (category?.enname ?? "")
				}
			/>

			<section className="py-16 text-black dark:text-white bg-gray-200 dark:bg-gray-900">
				<Container>
					<h2 className="text-2xl font-bold mb-8 text-center mx-auto">
						{language === "es"
							? `¿Qué son ${category?.spname}?`
							: `What are ${category?.enname}?`}
					</h2>
					<p className="text-lg max-w-[80ch] mx-auto">
						{language === "es"
							? category?.spdescription
							: category?.endescription}
					</p>
				</Container>
			</section>
		</main>
	);
};

export default ServicesPage;
