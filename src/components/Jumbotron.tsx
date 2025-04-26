"use client";

import { useLanguageContext } from "@/context/languageContext";
import { languageOptions } from "@/static";
import Link from "next/link";

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

const Jumbotron = ({ propsData }: { propsData: JumbotronProps }) => {
	const { language } = useLanguageContext();

	return (
		<section className="bg-white dark:bg-gray-950">
			<div className="py-16 px-4 mx-auto max-w-screen-xl text-center lg:py-32">
				<h1 className="mb-12 text-4xl md:text-5xl font-extrabold tracking-tight leading-none text-gray-900 lg:text-6xl dark:text-white">
					{language === languageOptions.english
						? propsData.enHeader
						: propsData.spHeader}
				</h1>
				<p className="mb-16 text-lg font-normal text-gray-700 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-300">
					{language === languageOptions.english
						? propsData.enDescription
						: propsData.spDescription}
				</p>
        {propsData.hasButtons && (
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <Link
              href={propsData.enFirstButtonLink}
              className="py-3 px-5 sm:ms-2 text-sm font-medium text-white bg-red-600 focus:outline-none rounded-lg border border-black focus:z-10 focus:ring-4 focus:ring-red-100 dark:focus:ring-red-700 dark:text-red-200 text-center">
              {language === languageOptions.english
                ? propsData.enFirstButtonText
                : propsData.spFirstButtonText}
            </Link>
            <Link
              href={propsData.enSecondButtonLink}
              className="py-3 px-5 sm:ms-2 text-sm font-medium text-black bg-gray-200 focus:outline-none rounded-lg border border-black focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-200 text-center">
              {language === languageOptions.english
                ? propsData.spSecondButtonText
                : propsData.spSecondButtonText}
            </Link>
          </div>
        )}
			</div>
		</section>
	);
};

export default Jumbotron;
