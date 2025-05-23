"use client";
import { useLanguageContext } from "@/context/languageContext";
import { useMaterialsContext } from "@/context/materialsContext";
import { useServicesContext } from "@/context/servicesContext";
import { useEffect } from "react";
import { useNavigationData } from "@/hooks/navigation";
import Image from "next/image";
import { languageOptions } from "@/static";
import Link from "next/link";
import { MaterialsType } from "@/types/materials";
import { ServiceType } from "@/types/services";

export default function Footer() {
	const { language } = useLanguageContext();
  const navigation = useNavigationData();
  const {materials, getAllMaterials} = useMaterialsContext();
  const {services, getAllServices} = useServicesContext();

  useEffect(() => {
    getAllMaterials();
    getAllServices();
  }, []);

	return (
		<footer className="bg-black border border-t border-gray-300 dark:border-gray-900 z-20">
			<div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
				<div className="xl:grid xl:grid-cols-3 xl:gap-8">
					<Image
						width={100}
						height={100}
						alt="Familia Print Logo"
						src="/logos/logo-gradient-squared.svg"
						className="h-40 w-auto"
					/>

					<div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
						<div className="md:grid md:grid-cols-2 md:gap-8">
							<div>
								<h3 className="text-sm/6 font-semibold text-white">
									{language === languageOptions.spanish
										? "Servicios"
										: "Services"}
								</h3>
								<ul role="list" className="mt-6 space-y-4 text-white">
									{services?.map((item: ServiceType) => (
										<li key={item.id}>
											<Link
												href={"/services/" + item.id}
												className="text-sm/6 text-white hover:underline">
												{language === languageOptions.spanish
													? item.spname
													: item.enname}
											</Link>
										</li>
									))}
								</ul>
							</div>
							<div>
								<h3 className="text-sm/6 font-semibold text-white">
									{language === languageOptions.spanish
										? "Materiales"
										: "Materials"}
								</h3>
								<ul role="list" className="mt-6 space-y-4 text-white">
									{materials?.map((item: MaterialsType) => (
										<li key={item.id}>
											<Link
												href={"/services/" + item.id}
												className="text-sm/6 text-white hover:underline">
												{language === languageOptions.spanish
													? item.spname
													: item.enname}
											</Link>
										</li>
									))}
								</ul>
							</div>
							<div className="mt-10 md:mt-0">
								<h3 className="text-sm/6 font-semibold text-white">Legal</h3>
								<ul role="list" className="mt-6 space-y-4">
									{navigation.legal.map((item) => (
										<li key={item.name}>
											<Link
												href={item.href}
												className="text-sm/6 text-white hover:underline">
												{item.name}
											</Link>
										</li>
									))}
								</ul>
							</div>
						</div>
						<div className="md:grid md:grid-cols-2 md:gap-8">
							<div>
								<h3 className="text-sm/6 font-semibold text-white">
									{language === languageOptions?.spanish
										? "Empresa"
										: "Company"}
								</h3>
								<ul role="list" className="mt-6 space-y-4">
									{navigation.company.map((item) => (
										<li key={item.name}>
											<Link
												href={item.href}
												className="text-sm/6 text-white hover:underline">
												{item.name}
											</Link>
										</li>
									))}
								</ul>
							</div>
							<div className="mt-10 md:mt-0">
								<h3 className="text-sm/6 font-semibold text-white dark:text-white">
									{language === languageOptions.spanish ? "Soporte" : "Support"}
								</h3>
								<ul role="list" className="mt-6 space-y-4">
									{navigation.support.map((item) => (
										<li key={item.name}>
											<Link
												href={item.href}
												className="text-sm/6 text-white hover:underline">
												{item.name}
											</Link>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-8 border-t border-white/10 pt-8 md:flex md:items-center md:justify-between">
					<div className="flex gap-x-6 md:order-2">
						{navigation.social.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className="text-gray-100 hover:text-gray-300">
								<span className="sr-only">{item.name}</span>
								<item.icon aria-hidden="true" className="size-6" />
							</a>
						))}
					</div>
					<p className="mt-8 text-sm/6 text-gray-100 md:order-1 md:mt-0">
						&copy; {new Date().getFullYear()} Familia Print by Leonidas, LLC.
						{language === languageOptions.spanish
							? " Todos los derechos reservados."
							: " All rights reserved."}
					</p>
				</div>
			</div>
		</footer>
	);
}
