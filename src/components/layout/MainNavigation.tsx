// TODO: This navigation menu will have drop downs as the application grows
"use client";
import { useLanguageContext } from "@/context/languageContext";
import { languageOptions } from "@/static";
import { useEffect, useState } from "react";
import { DarkThemeToggle } from "flowbite-react";
import { MenuIcon } from "@/components/svg/Icons";
import Link from "next/link";
import LanguageHandler from "@/components/forms/LanguageHandler";
import { useAuthContext } from "@/context/authContext";
import { usePathname } from "next/navigation";

export default function MainNavigation() {
	const [showMenu, setShowMenu] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const languageContext = useLanguageContext();
	const { language } = useLanguageContext();
	const { user, persistUser, signOutUser } = useAuthContext();
  const pathname = usePathname();

  useEffect(() => {

    persistUser();

  }, [pathname]);

	useEffect(() => {
		const currentLanguage = languageContext?.verifyLanguageFromLocalStorage();
		languageContext?.setLanguage(currentLanguage);

		const handleResize = () => {
			const windowWidth = window?.innerWidth;
			const isDesktop = windowWidth >= 768;
			setShowMenu(isDesktop);
			setIsMobile(!isDesktop);
		};

		// Initial check on mount
		handleResize();

		// Add event listener for resize
		window?.addEventListener("resize", handleResize);

		// Clean up the event listener
		return () => {

			window?.removeEventListener("resize", handleResize);
		};
	}, [languageContext]); // Add languageContext to the dependency array if it can change

	const handleLanguageChange = (lang: string) => {
		const selectedLanguage = languageContext?.setLanguageAndLocalStorage(lang);
		languageContext?.setLanguage(selectedLanguage);
	};

	const handleMenu = () => {
		setShowMenu(!showMenu);
	};

  const isActiveLink = (path: string) => {
		return pathname === path;
	};

	return (
		<header>
			<nav className="px-4 py-8 rounded-none bg-white dark:bg-gray-950 flex items-center justify-between relative border-b border-gray-200 dark:border-gray-800">
				{/* logo */}
				<Link
					onClick={() => {
						isMobile && setShowMenu(false);
					}}
					className="flex items-center"
					href="/">
					<img
						src="/logos/horizontal-gradient.svg"
						className="mr-3 h-6 sm:h-9 inline-block dark:hidden"
						alt="Familia Print Logo"
					/>
					<img
						src="/logos/horizontal-gradient.svg"
						className="mr-3 h-6 sm:h-9 hidden dark:inline-block"
						alt="Familia Print Logo"
					/>
				</Link>

				{/* language handler and dark theme toggle */}
				<div className="flex items-center order-3">
					<div className="flex items-center">
						<LanguageHandler
							handleLanguageChange={handleLanguageChange}
							languageContext={languageContext}
							languageOptions={languageOptions}
						/>
						<DarkThemeToggle />
					</div>
					<MenuIcon onClick={handleMenu} />
				</div>

				{/* menu links */}
				{showMenu && (
					<ul
						id="menu"
						className="flex flex-col md:flex-row md:items-center absolute md:static right-0 top-16 z-20 gap-x-8 order-2 bg-gray-200 dark:bg-gray-800 md:dark:bg-transparent md:bg-transparent w-full md:w-auto">
						<li className="md:p-0 text-center cursor-pointer hover:bg-gray-300 md:hover:bg-transparent hover:dark:bg-gray-700 md:dark:hover:bg-transparent trastition-all">
							<Link
								onClick={() => {
									isMobile && setShowMenu(false);
								}}
								className={`${isActiveLink("/") && "border-b-2 border-red-600"} text-black dark:text-white hover:border-b-2 hover:border-red-600`}
								href="/">
								{language === languageOptions.spanish ? "Inicio" : "Home"}
							</Link>
						</li>
						<li className="md:p-0 text-center cursor-pointer hover:bg-gray-300 md:hover:bg-transparent hover:dark:bg-gray-700 md:dark:hover:bg-transparent trastition-all">
							<Link
								onClick={() => {
									isMobile && setShowMenu(false);
								}}
								className={`${isActiveLink("/about") && "border-b-2 border-red-600"} text-black dark:text-white hover:border-b-2 hover:border-red-600`}
								href="/about">
								{language === languageOptions.spanish ? "Nosotros" : "About"}
							</Link>
						</li>
						<li className="md:p-0 text-center cursor-pointer hover:bg-gray-300 md:hover:bg-transparent hover:dark:bg-gray-700 md:dark:hover:bg-transparent trastition-all">
							<Link
								onClick={() => {
									isMobile && setShowMenu(false);
								}}
								className={`${isActiveLink("/quote") && "border-b-2 border-red-600"} text-black dark:text-white hover:border-b-2 hover:border-red-600`}
								href="/quote">
								{language === languageOptions.spanish
									? "Cotización Gratis"
									: "Free Quote"}
							</Link>
						</li>
						{user ? (
							<li className="md:p-0 text-center cursor-pointer hover:bg-gray-300 md:hover:bg-transparent hover:dark:bg-gray-700 md:dark:hover:bg-transparent trastition-all">
								{" "}
								<Link
									onClick={() => {
										isMobile && setShowMenu(false);
									}}
									className={`${isActiveLink("/profile") && "border-b-2 border-red-600"} text-black dark:text-white hover:border-b-2 hover:border-red-600`}
									href="/profile">
									{language === languageOptions.spanish ? "Perfil" : "Profile"}
								</Link>
							</li>
						) : (
							<li className="md:p-0 text-center cursor-pointer hover:bg-gray-300 md:hover:bg-transparent hover:dark:bg-gray-700 md:dark:hover:bg-transparent trastition-all">
								{" "}
								<Link
									onClick={() => {
										isMobile && setShowMenu(false);
									}}
									className={`${isActiveLink("/login") && "border-b-2 border-red-600"} text-black dark:text-white hover:border-b-2 hover:border-red-600`}
									href="/login">
									{language === languageOptions.spanish ? "Ingresar" : "Login"}
								</Link>
							</li>
						)}
						{user && (
							<li className="md:p-0 text-center cursor-pointer hover:bg-gray-300 md:hover:bg-transparent hover:dark:bg-gray-700 md:dark:hover:bg-transparent trastition-all">
								{" "}
								<Link
									onClick={() => {
										isMobile && setShowMenu(false);
										signOutUser();
									}}
									className={`${isActiveLink("/login") && "border-b-2 border-red-600"} text-red-600 dark:text-red-500 hover:border-b-2 hover:border-red-600`}
									href="/login">
									{language === languageOptions.spanish ? "Salir" : "Logout"}
								</Link>
							</li>
						)}
					</ul>
				)}
			</nav>
		</header>
	);
}
