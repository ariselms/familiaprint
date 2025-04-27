"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { serverBaseUrl } from "@/static";
import Link from "next/link";
import MainContainer from "@/components/layout/Container";
import {languageOptions} from "@/static";
import { Button, TabItem, Tabs } from "flowbite-react";
import UserProfileForm from "@/components/forms/UserProfile";

export default async function AuthenticatedLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	const cookie = (await cookies()).get("sessiontoken");
	const language = (await cookies()).get("language");

	if (!cookie) {
		redirect("/login");
	}

	const request = await fetch(`${serverBaseUrl}/api/validate`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({ cookie })
	});

	const response = await request.json();

	if (!response.success) {
		redirect("/login");
	}

	return (
		<main>
			<section>
				<nav className="bg-gray-200 dark:bg-gray-900 py-16">
					<MainContainer>
						<h3 className="text-3xl mb-2 dark:text-white">
							{language?.value === languageOptions.english
								? "Profile"
								: "Perfil"}
						</h3>
						<div className="flex items-center mb-8">
							<span className="me-2 dark:text-gray-200">
								{language?.value === languageOptions.english ? (
									<strong>Name</strong>
								) : (
									<strong>Nombre</strong>
								)}
								: {response?.data?.name || language?.value === languageOptions.english ? "Not set yet" : "Sin establecer aún"}
							</span>
							<span className="me-2 dark:text-gray-200">
								{language?.value === languageOptions.english ? (
									<strong>Email</strong>
								) : (
									<strong>Correo electrónico</strong>
								)}
								: {response?.data?.email || language?.value === languageOptions.english ? "Not set yet" : "Sin establecer aún"}
							</span>
						</div>
					</MainContainer>
				</nav>
				<MainContainer>
					<Tabs aria-label="Default tabs" variant="underline" className="text-black dark:text-white">
						<TabItem
							className="text-black dark:text-white"
							title={
								language?.value === languageOptions.english
									? "Edit Profile"
									: "Editar Perfil"
							}>
							<UserProfileForm user={response?.data} />
						</TabItem>
						<TabItem
							title={
								language?.value === languageOptions.english
									? "Orders"
									: "Pedidos"
							}>
							Esta funcionalidad se encuentra bajo desarrollo, regresa pronto
							para administrar tus órdenes en línea.
						</TabItem>
					</Tabs>
				</MainContainer>
			</section>
			{children}
		</main>
	);
}
