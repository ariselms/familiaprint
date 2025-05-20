"use client";
import { useLanguageContext } from "@/context/languageContext";
import { languageOptions } from "@/static";
import { useMaterialsContext } from "@/context/materialsContext";
import type { MaterialsType } from "@/types/materials";
import Link from "next/link";
import Spinner from "@/components/Spinner";
import { useEffect } from "react";
import MainFull from "@/components/layout/ContainerFull";
import SectionHeader from "./SectionHeader";


const ServiceMaterialsHeader = () => {

	return (
		<SectionHeader
			enTitle="Materials"
			spTitle="Materiales"
			enDescription="We offer materials for every budget. If you want to learn more about our materials, click on the button learn more for more information including samples and photos. If you know what you want, click the Get a quote button below and let us know, we will get back to you as soon as you need it. We have what you are looking for."
			spDescription="Ofrecemos materiales para todo tipo de presupuesto. Si quieres aprender más sobre los materiales que ofrecemos, oprime el botón Aprender más para información adicional y fotos. Si sabes lo que quieres, haz click en el botón de cotización y déjanos saber, nos pondremos en contacto contigo lo antes posible. Tenemos lo que buscas."
		/>
	);
};

const ServicesMaterialsCard = ({material}: {material: MaterialsType}) => {

	const { language } = useLanguageContext();

  const { id, enname, spname, endescription, spdescription } = material;

	return (
		<div className="h-auto max-w-full rounded-lg">
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
				<div className="flex-col mt-auto">
					<Link
						href={`/materials/${id}`}
						className="flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 transition-all mb-3 lg:inline-flex">
						<svg
							className="w-6 h-6 text-white dark:text-white mr-1"
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
						className="flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-gray-700 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-900 transition-all lg:inline-flex xl:ms-3">
						<svg
							className="w-6 h-6 mr-1"
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
	const { materials, loadingMaterials, getAllMaterials } =
		useMaterialsContext();

	useEffect(() => {
		getAllMaterials();
	}, []);

	if (loadingMaterials) {
		return <Spinner />;
	}

	return (
		<section className="pb-32 bg-gray-200 dark:bg-gray-900">
			<MainFull>
				<ServiceMaterialsHeader />
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{materials?.map((material: MaterialsType) => (
						<ServicesMaterialsCard key={material?.id} material={material} />
					))}
				</div>
			</MainFull>
		</section>
	);
};

export default ServicesMaterialsList;
