"use client";

import { useLanguageContext } from "@/context/languageContext";
import { useStorageContext } from "@/context/storageContext";
import type { CategoriesType } from "@/types/categories";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Spinner from "@/components/Spinner";

const ServiceCategoriesHeader = () => {

  const {language} = useLanguageContext();

	return (
		<h3 className="text-3xl font-bold text-blue-200 my-8">
			{language === "es" ? "Servicios" : "Services"}
		</h3>
	);
};

const ServicesCategoriesCard = ({
	id,
	spName,
	enName
}: CategoriesType) => {
	const {language} = useLanguageContext();
	return (
		<Link href={`/services/${id}`}>
			<div className="rounded-xl p-4 bg-gradient-to-r from-blue-500 to-cyan-500 overflow-hidden h-auto border-2 border-blue-900 cursor-pointer">
				<div className="h-20">
					<h4 className="font-bold text-2xl text-blue-950 mb-2">
						{language === "es" ? spName : enName}
					</h4>
				</div>
				<div className="mt-4 h-80 md:h-96 overflow-hidden rounded-xl">
					<Image
						src="https://images.pexels.com/photos/1058276/pexels-photo-1058276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						className="w-full h-auto h-full rounded-xl object-cover hover:scale-125 transition duration-300 ease-in"
						alt={language === "es" ? spName : enName}
						width={200}
						height={200}
						onError={(e) => {
							e.currentTarget.src = "/favicon-32x32.png";
						}}
					/>
				</div>
			</div>
		</Link>
	);
};

const ServicesCategoriesList = () => {
	const storageContext = useStorageContext();

	useEffect(() => {
		storageContext?.getAllCategories();
	}, []);

  if(storageContext?.loadingCategories){
    return (
      <Spinner />
    )
  }

	return (
		<section className="py-16">
			<ServiceCategoriesHeader />
			<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
				{storageContext?.categories.map((category) => (
					<div key={category.id}>
						<ServicesCategoriesCard {...category} />
					</div>
				))}
			</div>
		</section>
	);
};

export default ServicesCategoriesList;
