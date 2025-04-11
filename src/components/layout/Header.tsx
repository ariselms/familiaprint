"use client";

import { useState, useEffect } from "react";
import { Birthstone } from "next/font/google";
import Link from "next/link";
import { Cog, XClose } from "@/components/svg/Icons";
import { useLanguageContext } from "@/context/languageContext";
import { useAuthContext } from "@/context/authContext";
import { USFlag, PRFlag } from "@/components/svg/Icons";
import Image from "next/image";

const birthstone = Birthstone({
	variable: "--font-birthstone",
	weight: "400",
	subsets: ["latin"]
});

const MainHeader = () => {
	const languageContext = useLanguageContext();

	const authContext = useAuthContext();

	const [showSideBar, setShowSideBar] = useState<boolean>(false);

	useEffect(() => {
		const currentLanguage = languageContext?.verifyLanguageFromLocalStorage();
		languageContext?.setLanguage(currentLanguage);
	}, []);

	const handleLanguageChange = (lang: string) => {
		const selectedLanguage = languageContext?.setLanguageAndLocalStorage(lang);
		languageContext?.setLanguage(selectedLanguage);
		setShowSideBar(false);
	};

	return (
		<header className="relative">
			<nav>
				<div className="flex justify-between items-start px-4 pb-4 pt-8">
					<Link
						href="/"
						className={`${birthstone.className} text-5xl md:text-6xl font-bold text-blue-200 hover:text-blue-300 transition-all`}>
						<Image
							width={300}
							height={100}
							src="/logos/horizontal-gradient.svg"
							alt="Familia Print by Leonidas"
              className="inline-block relative"
						/>
						<span className="text-4xl text-white inline-block absolute bottom-[.555rem]">
							&nbsp; {languageContext.language === "en" ? "by" : "por"} Leónidas
						</span>
					</Link>
					<Cog onClick={() => setShowSideBar(true)} />
				</div>
			</nav>
			{showSideBar && (
				<>
					<aside className="absolute right-0 top-0 w-10/12 md:w-3/6 bg-blue-950 h-screen z-30 transition-all ease-in-out p-4">
						<XClose onClick={() => setShowSideBar(false)} />
						<form>
							<div className="flex flex-col">
								<label htmlFor="language" className="text-base mb-1">
									{languageContext.language === "en"
										? "Select Language"
										: "Seleccione Idioma"}
								</label>
								<div className="flex items-center">
									<select
										onChange={(e) => handleLanguageChange(e.target.value)}
										value={languageContext.language}
										className="w-fit rounded rounded-lg text-base md:text-xl font-bold text-blue-950 cursor-pointer">
										<option
											className="flex items-center cursor-pointer"
											value="en">
											English
										</option>
										<option
											className="flex items-center cursor-pointer"
											value="es">
											Español
										</option>
									</select>
									{languageContext.language === "en" ? <USFlag /> : <PRFlag />}
								</div>
							</div>
						</form>
						<nav className="relative py-8">
							<ul>
								<li className="mb-4">
									{authContext?.user ? (
										<Link
											onClick={() => setShowSideBar(false)}
											className="text-2xl md:text-3xl font-bold text-blue-100 hover:text-blue-200 transition-all"
											href="/admin">
											User
										</Link>
									) : (
										<Link
                      onClick={() => setShowSideBar(false)}
											className="text-2xl md:text-3xl font-bold text-blue-100 hover:text-blue-200 transition-all"
											href="/login">
											Login
										</Link>
									)}
								</li>
								{/* <li className="mb-4">
									<Link
										onClick={() => setShowSideBar(false)}
										href="/"
										className="text-2xl md:text-3xl font-bold text-blue-100 hover:text-blue-200 transition-all">
										{languageContext.language === "en" ? "Home" : "Inicio"}
									</Link>
								</li> */}
								<li className="mb-4">
									<Link
										onClick={() => setShowSideBar(false)}
										href="/"
										className="text-2xl md:text-3xl font-bold text-blue-100 hover:text-blue-200 transition-all">
										{languageContext.language === "en"
											? "Get a quote"
											: "Solicitar cotización"}
									</Link>
								</li>
								<li className="mb-4">
									<Link
										onClick={() => setShowSideBar(false)}
										href="/"
										className="text-2xl md:text-3xl font-bold text-blue-100 hover:text-blue-200 transition-all">
										{languageContext.language === "en"
											? "About"
											: "Sobre Nosotros"}
									</Link>
								</li>
								{/* <li className="mb-4">
									<Link
                    onClick={() => setShowSideBar(false)}
										href="/"
										className="text-2xl md:text-3xl font-bold text-blue-100 hover:text-blue-200 transition-all">
										{languageContext.language === "en" ? "Contact" : "Contacto"}
									</Link>
								</li> */}
							</ul>
						</nav>
					</aside>
					<div
						onClick={() => setShowSideBar(false)}
						className="absolute right-0 top-0 w-screen bg-black/50 h-screen z-20 transition-all ease-in-out"
					/>
				</>
			)}
		</header>
	);
};

export default MainHeader;
