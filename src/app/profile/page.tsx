"use server";
import { cookies } from "next/headers";
import MainContainer from "@/components/layout/Container";
import { languageOptions } from "@/static";
import { Badge, TabItem, Tabs } from "flowbite-react";
import UserProfileForm from "@/components/forms/UserProfile";
import { sql } from "@vercel/postgres";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
	const cookie = (await cookies()).get("sessiontoken");
	const language = (await cookies()).get("language");
  	let value: string | undefined;

	if (cookie) {
		value = cookie.value;
	}

	let user;

	const { rows: userDb } =
		await sql`SELECT * FROM users WHERE sessiontoken = ${value}`;

	user = userDb[0];

	return (
		<section>
			<nav className="bg-white dark:bg-gray-950 py-16">
				<MainContainer>
					<h3 className="text-3xl mb-2 dark:text-white flex items-center">
						{language?.value === languageOptions?.english
							? "Profile"
							: "Perfil"}

						<Badge color="info" className="ms-2">
							{user.role}
						</Badge>
					</h3>
					{user.role === "admin" && (
						<Link
							href="/profile/admin"
							className="text-sm text-cyan-500 dark:text-cyan-400 hover:underline">
							{language?.value === languageOptions?.english ? (
								<>
									Go to Admin Dashboard
									<span className="ms-1" aria-hidden="true">&rarr;</span>
								</>
							) : (
								"Ir al Panel de Administración"
							)}
						</Link>
					)}
				</MainContainer>
			</nav>
			<div className="bg-gray-200 dark:bg-gray-900">
				<MainContainer>
					<Tabs
						aria-label="Default tabs"
						variant="underline"
						className="text-black dark:text-white">
						<TabItem
							className="text-black dark:text-white"
							title={
								language?.value === languageOptions.english
									? "Edit Profile"
									: "Editar Perfil"
							}>
							<UserProfileForm user={user} />
						</TabItem>
						<TabItem
							title={
								language?.value === languageOptions.english
									? "Orders"
									: "Pedidos"
							}>
							{language?.value === languageOptions.english
								? "This feature is under development, come back soon to manage your online orders."
								: "Esta funcionalidad se encuentra bajo desarrollo, regresa pronto para administrar tus órdenes en línea."}
						</TabItem>
					</Tabs>
				</MainContainer>
			</div>
		</section>
	);
}
