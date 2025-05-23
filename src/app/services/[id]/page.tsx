"use client";

import { useEffect } from "react";
import { useServicesContext } from "@/context/servicesContext";
import { useLanguageContext } from "@/context/languageContext";
import { useParams } from "next/navigation";
import Container from "@/components/layout/Container";
import Spinner from "@/components/Spinner";
import { languageOptions } from "@/static";
import ServicesContent from "@/components/ServicesContent";
import Link from "next/link";

const ServicesPage = () => {
	const { id } = useParams();

	const { service, loadingServices, getServiceById } = useServicesContext();

	const { language } = useLanguageContext();

	useEffect(() => {
		getServiceById(String(id));
	}, [id]);

	if (loadingServices) {
		return <Spinner />;
	}

  console.log(loadingServices)

	return (
		<main>
			<span className="text-red-600">{loadingServices}</span>
			<section className="py-16 px-4 text-black dark:text-white bg-gray-200 dark:bg-gray-900">
				<ServicesContent
					language={language}
					languageOptions={languageOptions}
					service={service}
				/>
				<div className="flex items-center justify-center">
					<Link
						href={`/quote?material=${language === languageOptions.english ? service?.enname : service?.spname}`}
						className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 ms-2">
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
			</section>
		</main>
	);
};

export default ServicesPage;
