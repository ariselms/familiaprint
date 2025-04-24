"use client";
import { useLanguageContext } from "@/context/languageContext";
import { useCategoriesContext } from "@/context/categoriesContext";
import { useNavigationData } from "@/hooks/navigation";
import { languageOptions } from "@/static";
import { useEffect } from "react";
import { DarkThemeToggle } from "flowbite-react";
import {
	Dropdown,
	DropdownItem,
	Navbar,
	NavbarCollapse,
	NavbarToggle
} from "flowbite-react";
import Link from "next/link";
import LanguageHandler from "@/components/forms/LanguageHandler";

export default function HeaderWithDropDown() {
	const languageContext = useLanguageContext();
	const { language } = useLanguageContext();
	const categoriesContext = useCategoriesContext();
	const { categories, loadingCategories, getAllCategories } = useCategoriesContext(); // useCategoriesContext() desestructured
	const navigation = useNavigationData();

	useEffect(() => {
		const currentLanguage = languageContext?.verifyLanguageFromLocalStorage();
		languageContext?.setLanguage(currentLanguage);

    getAllCategories();
	}, []);

	const handleLanguageChange = (lang: string) => {
		const selectedLanguage = languageContext?.setLanguageAndLocalStorage(lang);
		languageContext?.setLanguage(selectedLanguage);
	};

	return (
		<header>
			<Navbar className="p-4 rounded-none bg-white dark:bg-gray-950" fluid rounded>
				<Link className="flex items-center" href="/">
					<img
						src="/logos/horizontal-black.svg"
						className="mr-3 h-6 sm:h-9 inline-block dark:hidden"
						alt="Familia Print Logo"
					/>
					<img
						src="/logos/horizontal-white.svg"
						className="mr-3 h-6 sm:h-9 hidden dark:inline-block"
						alt="Familia Print Logo"
					/>
				</Link>
				<div className="flex items-center md:order-2">
					<div className="flex items-center">
            <LanguageHandler
              handleLanguageChange={handleLanguageChange}
              languageContext={languageContext}
              languageOptions={languageOptions}
            />
						<DarkThemeToggle />
					</div>
					<NavbarToggle />
				</div>
				<NavbarCollapse className="text-black dark:text-white cursor-pointer">
					<Dropdown
						arrowIcon={true}
						inline
						label={
							language === languageOptions.english ? "Services" : "Servicios"
						}>
						{categories.map((item:any) => (
							<DropdownItem
								key={item.id}
								className="flex items-center justify-center gap-x-2.5">
								<Link href={`/services/${item.id}`}>
									{language === languageOptions.english
										? item.enname
										: item.spname}
								</Link>
							</DropdownItem>
						))}
					</Dropdown>
					<Dropdown
						arrowIcon={true}
						inline
						label={
							language === languageOptions.english ? "Company" : "Empresa"
						}>
						{navigation.company.map((item) => (
							<DropdownItem
								key={item.href}
								className="flex items-center justify-center gap-x-2.5">
								<Link href={item.href}>{item.name}</Link>
							</DropdownItem>
						))}
					</Dropdown>
					<Link className="text-black dark:text-white" href="/login">
						{language === languageOptions.english ? "Login" : "Sessión"}
					</Link>
				</NavbarCollapse>
			</Navbar>
		</header>
	);
}
