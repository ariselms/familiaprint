"use client";

import "./globals.css";
import { ThemeModeScript } from "flowbite-react";
import { Geist, Geist_Mono } from "next/font/google";
// import type { Metadata } from "next";
import { LanguageContextProvider } from "@/context/languageContext";
import { MaterialsContextProvider } from "@/context/materialsContext";
import { ToastContainer } from "react-toastify";
import MainNavigation from "@/components/layout/MainNavigation";
import Footer from "@/components/layout/Footer";
import { AuthContextProvider } from "@/context/authContext";
import { ServicesContextProvider } from "@/context/servicesContext";
import { usePathname } from "next/navigation"; // Import usePathname
import Image from "next/image";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"]
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"]
});

// export const metadata: Metadata = {
// 	title: "Familia Print"
// };

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	const pathname = usePathname(); // Get the current pathname

	const isAdminPage = pathname.startsWith("/profile/admin"); // Check if the current page is an admin page

  return (
		<html>
			<body>
				<section
					className={`flex min-h-screen flex-col items-center justify-center bg-white px-4 py-8 dark:bg-gray-900 ${geistSans.variable} ${geistMono.variable}`}
					suppressHydrationWarning>
					<Image
						src="/logos/horizontal-gradient.svg"
						alt="Logo"
						width={300}
						height={300}
						sizes="100vw"
						className="my-10"
					/>
					<h1 className="text-4xl font-bold">Muy Pronto / Coming Soon</h1>
					<p>Disponible en español e inglés</p>
					<p>Available in Spanish and English</p>
					<p className="text-lg mt-4 max-w-[80ch]">
						Confeccionando soluciones visuales de anuncios, letreros, diseño
						gráfico, websites y más. Descubre nuestra plataforma todo en uno,
						hecho en Puerto Rico. Tenemos la solución medida a tus necesidades
						de negocio.
					</p>
					<p className="text-lg mt-4 max-w-[80ch]">
						Crafting visual solutions for ads, signs, graphic design, websites
						and much more. Discover our platform all in one, made in Puerto
						Rico. We have the solution to meet your business needs.
					</p>
				</section>
			</body>
		</html>
	);

	return (
		<>
			<html className="scroll-smooth dark:bg-black" suppressHydrationWarning>
				<head>
					<ThemeModeScript />
					<link rel="icon" href="/favicon.ico" />
					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="/apple-touch-icon.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="/favicon-32x32.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="/favicon-16x16.png"
					/>
					<link rel="manifest" href="/manifest.json" />
				</head>
				<body
					className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
					<ToastContainer />
					<AuthContextProvider>
						<ServicesContextProvider>
							<MaterialsContextProvider>
								<LanguageContextProvider>
									{isAdminPage ? (
										// If it's an admin page, just render the children (your React Admin page)
										// without the main navigation and footer
										children
									) : (
										// Otherwise, render the main navigation, children, and footer
										<>
											<MainNavigation />
											{/* It's good practice to wrap your main content */}
											{children}
											<Footer />
										</>
									)}
								</LanguageContextProvider>
							</MaterialsContextProvider>
						</ServicesContextProvider>
					</AuthContextProvider>
					<script src="/js/flowbite.js"></script>
				</body>
			</html>
		</>
	);
}
