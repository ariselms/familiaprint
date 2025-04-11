import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import { LanguageContextProvider } from "@/context/languageContext";
import { StorageContextProvider } from "@/context/storageContext";
import Head from "next/head";
import MainHeader from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { AuthContextProvider } from "@/context/authContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Familia Print by Leonidas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
		<>
			<Head>
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
				<link rel="manifest" href="/site.webmanifest" />
			</Head>
			<html lang="en" className="bg-gray-900 text-gray-50">
				<body
					className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
					<AuthContextProvider>
						<StorageContextProvider>
							<LanguageContextProvider>
								<MainHeader />
								{children}
								<Footer />
							</LanguageContextProvider>
						</StorageContextProvider>
					</AuthContextProvider>
				</body>
			</html>
		</>
	);
}
