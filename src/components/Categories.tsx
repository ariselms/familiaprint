"use client";
import { useLanguageContext } from "@/context/languageContext";
import type { MaterialsType } from "@/types/categories";
import Link from "next/link";
import Spinner from "@/components/Spinner";
import { languageOptions } from "@/static";
import { useEffect } from "react";
import { useCategoriesContext } from "@/context/categoriesContext";
import MainFull from "@/components/layout/ContainerFull";
import { Button, Card } from "flowbite-react";


const ServiceMaterialsHeader = () => {

	const { language } = useLanguageContext();

	return (
		<>
			<h2 className="text-3xl md:text-4xl mb-12 font-bold text-black dark:text-white text-center">
				{language === languageOptions?.spanish
					? "Materiales y Servicios"
					: "Materials and Services"}
			</h2>
			<p className="mb-16 text-lg font-normal text-gray-700 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-300 text-center">
				{language === languageOptions.english
					? "We offer a wide range of services and products that you can choose from a variety of materials for your needs. Keep reading and learning if you need more information. If you know what you want, click the Get a quote button below and let use know, we will get back to you as soon as you need it."
					: "Ofrecemos una gran variedad de productos y servicios que puedes elegir de la variedad de materiales que ofrecemos. Continúa leyendo y aprendiendo si necesitas mas información. Si sabes lo que quieres, haz click en el botón de cotización déjanos saber, nos pondremos en contacto contigo lo antes posible."}
			</p>
		</>
	);
};

const ServicesMaterialsCard = ({category}: {category: MaterialsType}) => {

	const { language } = useLanguageContext();

  const { id, enname, spname, endescription, spdescription } = category;

	return (
		<div className="h-auto max-w-full rounded-lg transition-all">
			<div className="p-6 h-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex flex-col">
				{/* <svg
					className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 20">
					<path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
				</svg> */}
				<a href="#">
					<h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
						{language === languageOptions.english ? enname : spname}
					</h5>
				</a>
				<p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
					{language === languageOptions.english ? endescription : spdescription}
				</p>
				<div className="mt-auto">
					<Link
						href={`/materials/${id}`}
						className="inline-flex items-center mb-3 mr-3 py-3 px-5 text-sm font-medium text-white bg-blue-700 focus:outline-none rounded-lg border border-black focus:z-10 focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-700 dark:text-blue-200 text-center">
						<svg
							className="w-[16px] h-[16px] text-white dark:text-white mr-1"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="currentColor"
							viewBox="0 0 24 24">
							<path
								fillRule="evenodd"
								d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z"
								clipRule="evenodd"
							/>
						</svg>
						{language === languageOptions.english
							? "Read more"
							: "Aprender más"}
					</Link>

					<Link
						href={`/quote?material=${language === languageOptions.english ? enname : spname}`}
						className="inline-flex items-center py-3 px-5 text-sm font-medium text-black bg-gray-200 focus:outline-none rounded-lg border border-black focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-200 text-center">
						<svg
							className="w-[16px] h-[16px] text-black dark:text-white mr-1"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="none"
							viewBox="0 0 24 24">
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M8 17.345a4.76 4.76 0 0 0 2.558 1.618c2.274.589 4.512-.446 4.999-2.31.487-1.866-1.273-3.9-3.546-4.49-2.273-.59-4.034-2.623-3.547-4.488.486-1.865 2.724-2.899 4.998-2.31.982.236 1.87.793 2.538 1.592m-3.879 12.171V21m0-18v2.2"
							/>
						</svg>
						{language === languageOptions.english
							? "Get a quote"
							: "Obtener cotización"}
					</Link>
				</div>
			</div>
		</div>
	);
};

const ServicesMaterialsList = () => {
	const { categories, loadingCategories, getAllMaterials } =
		useCategoriesContext();

	useEffect(() => {
		getAllMaterials();
	}, []);

	if (loadingCategories) {
		return <Spinner />;
	}

	return (
		<section className="py-24 bg-gray-200 dark:bg-gray-900" id="services">
			<MainFull>
				<ServiceMaterialsHeader />
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
					{categories?.map((category: MaterialsType) => (
							<ServicesMaterialsCard key={category.id} category={category} />
					))}
				</div>
			</MainFull>
		</section>
	);
};

export default ServicesMaterialsList;
