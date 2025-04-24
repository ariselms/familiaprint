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
	NavbarLink,
	NavbarCollapse,
	NavbarToggle
} from "flowbite-react";
import Link from "next/link";
import LanguageHandler from "@/components/forms/LanguageHandler";
import Spinner from "@/components/Spinner";

export default function HeaderWithDropDown() {
	const languageContext = useLanguageContext();
	const { language } = useLanguageContext();

	useEffect(() => {
		const currentLanguage = languageContext?.verifyLanguageFromLocalStorage();
		languageContext?.setLanguage(currentLanguage);
	}, []);

	const handleLanguageChange = (lang: string) => {
		const selectedLanguage = languageContext?.setLanguageAndLocalStorage(lang);
		languageContext?.setLanguage(selectedLanguage);
	};

	return (
		<header>
			<Navbar
				className="p-4 rounded-none bg-white dark:bg-gray-950"
				fluid
				rounded>
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
				</div>
				<NavbarToggle />
				<NavbarCollapse className="cursor-pointer">
					<NavbarLink className="text-black hover:none dark:text-white" href="/#services">
						{language === languageOptions.english ? "Services" : "Servicios"}
					</NavbarLink>
					<NavbarLink className="text-black dark:text-white" href="/about">
						{language === languageOptions.english ? "About us" : "Nosotros"}
					</NavbarLink>
					<NavbarLink className="text-black dark:text-white" href="/quote">
						{language === languageOptions.english ? "Get a quote" : "Estimados"}
					</NavbarLink>
					<NavbarLink className="text-black dark:text-white" href="/login">
						{language === languageOptions.english ? "Login" : "Sesión"}
					</NavbarLink>
				</NavbarCollapse>
			</Navbar>
		</header>
	);
}
