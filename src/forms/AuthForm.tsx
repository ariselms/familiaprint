"use client";
import React from "react";
import { useLanguageContext } from "@/context/languageContext";
import { usePathname } from "next/navigation";
import Link from "next/link";
import path from "path";

const AuthForm = ({ onFormSubmit }: { onFormSubmit: () => void }) => {
	const {language} = useLanguageContext();
	const pathname = usePathname();

	return (
		<form onSubmit={onFormSubmit} className="space-y-6">
			{pathname === "/register" && (
				<div>
					<label
						htmlFor="displayName"
						className="block text-sm/6 font-medium text-blue-200">
						{language === "en"
							? "Full name"
							: "Nombre completo"}
					</label>
					<div className="mt-2">
						<input
							id="displayName"
							name="displayName"
							type="displayName"
							required
							autoComplete="displayName"
							className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-blue-200 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
						/>
					</div>
				</div>
			)}

			<div>
				<label
					htmlFor="email"
					className="block text-sm/6 font-medium text-blue-200">
					{language === "en"
						? "Email address"
						: "Correo electrónico"}
				</label>
				<div className="mt-2">
					<input
						id="email"
						name="email"
						type="email"
						required
						autoComplete="email"
						className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-blue-200 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
					/>
				</div>
			</div>

			<div>
				<label
					htmlFor="password"
					className="block text-sm/6 font-medium text-blue-200">
					{language === "en" ? "Password" : "Contraseña"}
				</label>
				<div className="mt-2">
					<input
						id="password"
						name="password"
						type="password"
						required
						autoComplete="current-password"
						className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-blue-200 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
					/>
				</div>
			</div>

			<div className="flex items-center justify-between">
				{pathname === "/login" ? (
					<>
						<div className="text-sm/6">
							<Link
								href="/forgot-password"
								className="font-semibold text-blue-100 underline hover:text-blue-200 transition-colors">
								{language === "en"
									? "Forgot your password?"
									: "¿Olvidaste tu contraseña?"}
							</Link>
						</div>
						<div className="text-sm/6">
							<Link
								href="/register"
								className="font-semibold text-blue-100 underline hover:text-blue-200 transition-colors">
								{language === "en"
									? "Create an account"
									: "Crea una cuenta"}
							</Link>
						</div>
					</>
				) : (
					<div className="text-sm/6">
						<Link
							href="/login"
							className="font-semibold text-blue-100 underline hover:text-blue-200 transition-colors">
							{language === "en"
								? "I have an account"
								: "Tengo una cuenta"}
						</Link>
					</div>
				)}
			</div>

			<div>
				<button
					type="submit"
					className="flex w-full justify-center rounded-md bg-white px-3 py-1.5 text-sm/6 text-blue-900 font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
					{pathname === "/register"
						? language === "en"
							? "Sign up"
							: "Registrarse"
						: language === "en"
						? "Sign in"
						: "Iniciar sesión"}
				</button>
			</div>
		</form>
	);
};

export default AuthForm;
