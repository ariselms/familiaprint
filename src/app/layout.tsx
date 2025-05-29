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
