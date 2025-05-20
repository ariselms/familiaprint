"use client";

import { useEffect } from "react";
import { useMaterialsContext } from "@/context/materialsContext";
import { useLanguageContext } from "@/context/languageContext";
import { useParams } from "next/navigation";
import ServiceBanner from "@/components/MaterialBanner";
import Container from "@/components/layout/Container";
import Spinner from "@/components/Spinner";
import { languageOptions } from "@/static";

const ServicesPage = () => {
	const { id } = useParams();

	const { material, loadingMaterials, getMaterialById } =
		useMaterialsContext();

  const { language } = useLanguageContext();

	useEffect(() => {
		getMaterialById(String(id));
	}, [id]);

	if (loadingMaterials) {
		return <Spinner />;
	}

	return (
		<main>
			<ServiceBanner
        imgUrl={material?.imgurl}
				material={
					language === languageOptions.spanish
						? (material?.spname ?? "")
						: (material?.enname ?? "")
				}
			/>

			<section className="py-16 text-black dark:text-white bg-gray-200 dark:bg-gray-900">
				<Container>
					<h2 className="text-2xl font-bold mb-8 text-center mx-auto">
						{language === "es"
							? `¿Qué son ${material?.spname}?`
							: `What are ${material?.enname}?`}
					</h2>
					<p className="text-lg max-w-[80ch] mx-auto">
						{language === "es"
							? material?.spdescription
							: material?.endescription}
					</p>
				</Container>
			</section>
		</main>
	);
};

export default ServicesPage;
