"use client";
import { useLanguageContext } from "@/context/languageContext";
import type { CategoriesType } from "@/types/categories";
import Link from "next/link";
import Spinner from "@/components/Spinner";
import { languageOptions } from "@/static";
import { useEffect } from "react";
import { useCategoriesContext } from "@/context/categoriesContext";
import MainFull from "@/components/layout/ContainerFull";
import { Button, Card } from "flowbite-react";


const ServiceCategoriesHeader = () => {
	const { language } = useLanguageContext();

	return (
		<>
			<h2 className="text-3xl md:text-4xl mb-12 font-bold text-black dark:text-white text-center">
				{language === languageOptions?.spanish
					? "Especializaciones"
					: "Specialties"}
			</h2>
			<p className="mb-16 text-lg font-normal text-gray-700 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-300 text-center">
				{language === languageOptions.english
					? "We offer a wide range of services within the following categories. Choose the one that best fits what you are looking for and discover all the varieties we offer. If you need it, we have it."
					: "Ofrecemos una gran variedad de servicio dentro de las siguientes categorías. Escoge la que mejor se adapte a lo que estás buscando y descubre todas las variedades que ofrecemos. Si lo necesitas, lo tenemos."}
			</p>
		</>
	);
};

const ServicesCategoriesCard = ({category}: {category: CategoriesType}) => {
	const { language } = useLanguageContext();

  const { id, enname, spname, endescription, spdescription, imgurl } = category;

	return (
		<Link
			href={`/services/${id}`}
			className="h-full hover:scale-105 focus:scale-105 transition-all">
			<Card
				imgAlt="Meaningful alt text for an image that is not purely decorative"
				imgSrc={imgurl}
				className="h-full flex flex-col" // Removed justify-between
			>
				<div className="flex-grow">
					<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						{language === languageOptions.english ? enname : spname}
					</h5>
					<p className="font-normal text-gray-700 dark:text-gray-400">
						{language === languageOptions.english
							? endescription
							: spdescription}
					</p>
				</div>

				<Button className="cursor-pointer" color={"red"}>
					Explore and order
				</Button>
			</Card>
		</Link>
	);
};

const ServicesCategoriesList = () => {
	const { categories, loadingCategories, getAllCategories } =
		useCategoriesContext();

	useEffect(() => {
		getAllCategories();
	}, []);

	if (loadingCategories) {
		return <Spinner />;
	}

	return (
		<section className="py-24 bg-gray-200 dark:bg-gray-900" id="services">
			<MainFull>
				<ServiceCategoriesHeader />
				<div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
					{categories?.map((category: CategoriesType) => (
						<div key={category.id} className="flex">
							<ServicesCategoriesCard category={category} />
						</div>
					))}
				</div>
			</MainFull>
		</section>
	);
};

export default ServicesCategoriesList;
