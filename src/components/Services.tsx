"use client";

import { useLanguageContext } from "@/context/languageContext";
import { languageOptions } from "@/static";
import { useServicesContext } from "@/context/servicesContext";
import type { ServiceType } from "@/types/services";
import Link from "next/link";
import Spinner from "@/components/Spinner";
import { useEffect } from "react";
import MainFull from "@/components/layout/ContainerFull";
import SectionHeader from "./SectionHeader";
import {
	DesignIcon,
	BannerIconTheme,
	PrintIcon,
	WebsiteIcon,
	WallArtIcon,
  CarWrapIcon,
  GlassArtIcon
} from "@/components/svg/Icons";

const ServicesHeader = () => {
	return (
		<SectionHeader
			enTitle="Services"
			spTitle="Servicios"
			enDescription="We offer a wide variety of services. Select from the following options to view more information related to specific services. You can also click the Get a quote button below and let us know, we will get back to you as soon as you need it. We have what you are looking for."
			spDescription="Ofrecemos una gran variedad de servicios. Escoge entre las siguientes opciones y aprenda mas sobre los servicios que ofrecemos. Tambien puedes hacer click en el botón de cotización y dejanos saber, nos pondremos en contacto contigo lo antes posible. Tenemos lo que buscas."
		/>
	);
};

const ServicesCard = ({ service }: { service: ServiceType }) => {
	const { language } = useLanguageContext();

	const { enname, spname, entitle, sptitle, ensummary, spsummary } = service;

	return (
		<div className="flex flex-col h-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
			<CardIcon service={service} />
			<h3 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
				{language === languageOptions.english ? entitle : sptitle}
			</h3>
			<p className="text-lg font-normal text-gray-500 dark:text-gray-300 mb-8">
				{language === languageOptions.english ? ensummary : spsummary}
			</p>
			<div className="flex-col mt-auto">
				<Link
					href={`/services/${service?.id}`}
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
					{language === languageOptions.english ? "Learn more" : "Aprender más"}
				</Link>
				<Link
					href={`/quote?material=${language === languageOptions.english ? enname : spname}`}
					className="flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-black hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 dark:bg-white dark:text-black dark:hover:bg-gray-200  dark:focus:ring-gray-900 transition-all lg:inline-flex 2xl:ms-3">
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
	);
};

const CardIcon = ({ service }: { service: ServiceType }) => {
	const renderIcon = () => {
		switch (service.enname) {
			case "Banner":
				return <BannerIconTheme key={service.id} />;
			case "Graphic Design":
				return <DesignIcon key={service.id} />;
			case "Prints":
				return <PrintIcon key={service.id} />;
			case "Websites":
				return <WebsiteIcon key={service.id} />;
			case "Wall Graphics":
				return <WallArtIcon key={service.id} />;
      case "Car Wrapping":
        return <CarWrapIcon key={service.id} />;
      case "Glass Graphics":
        return <GlassArtIcon key={service.id} />;
			default:
				return <div className="text-white ">{service.enname}</div>;
		}
	};

	return renderIcon();
};

const ServicesList = () => {
	const { services, loadingServices, getAllServices } = useServicesContext();

	useEffect(() => {
		getAllServices();
	}, []);

	if (loadingServices) {
		return <Spinner />;
	}

	return (
		<section className="pb-32 bg-gray-200 dark:bg-gray-900" id="services">
			<MainFull>
				<ServicesHeader />
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services?.map((service: ServiceType) => (
						<ServicesCard key={service?.id} service={service} />
					))}
				</div>
			</MainFull>
		</section>
	);
};

export default ServicesList;
