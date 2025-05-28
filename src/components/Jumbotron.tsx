"use client";

import { useLanguageContext } from "@/context/languageContext";
import { languageOptions } from "@/static";
import Link from "next/link";
import { BannerIconTheme } from "@/components/svg/Icons";
import { ServiceListType } from "@/types/services";

interface JumbotronProps {
	enHeader: string;
	spHeader: string;
	enDescription: string;
	spDescription: string;
	hasButtons: boolean;
	enFirstButtonText: string;
	enFirstButtonLink: string;
	spFirstButtonText: string;
	enSecondButtonText: string;
	enSecondButtonLink: string;
	spSecondButtonText: string;
}

export default function Jumbotron({
	propsData
}: {
	propsData: JumbotronProps;
}) {
	const { language } = useLanguageContext();

	return (
		<section className="bg-white dark:bg-gray-950 relative">
			{/* <JumbotronIcons services={services} /> */}
			<div className="py-32 px-4 mx-auto max-w-screen-xl text-center lg:py-40">
				<h1 className="mb-12 text-4xl md:text-5xl font-extrabold tracking-tight leading-none text-gray-900 lg:text-6xl dark:text-white">
					{language === languageOptions.english
						? propsData.enHeader
						: propsData.spHeader}
				</h1>
				<p className={`${propsData.hasButtons && "mb-12"} text-lg font-normal text-gray-700 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-300 mx-auto`}>
					{language === languageOptions.english
						? propsData.enDescription
						: propsData.spDescription}
				</p>
				{propsData.hasButtons && (
					<div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
						<Link
							href={propsData.enFirstButtonLink}
							className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 me-2">
							{language === languageOptions.english
								? propsData.enFirstButtonText
								: propsData.spFirstButtonText}
						</Link>

						<Link
							href={propsData.enSecondButtonLink}
							className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-black hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 dark:bg-white dark:text-black dark:hover:bg-gray-200  dark:focus:ring-gray-900 ms-2">
							{language === languageOptions.english
								? propsData.enSecondButtonText
								: propsData.spSecondButtonText}

							<svg
								className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 14 10">
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M1 5h12m0 0L9 1m4 4L9 9"
								/>
							</svg>
						</Link>
					</div>
				)}
			</div>
		</section>
	);
}

const JumbotronIcons = ({services}:{services: ServiceListType}) => {

  return (
    services.map((service) => {
      switch (service.enname) {
        case "Banner":
          return <BannerIconTheme key={service.id}/>
        default:
          return <div key={service.id} className="text-white ">{service.enname}</div>
      }
    })
  )
};
