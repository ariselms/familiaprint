"use client";

import { useState } from "react";
import MainContainer from "@/components/layout/Container";
import AuthForm from "@/forms/AuthForm";
import { useLanguageContext } from "@/context/languageContext";
import { languageOptions } from "@/static";
import CodeForm from "@/forms/CodeForm";

const LoginPage = () => {
	const { language } = useLanguageContext();
	const [email, setEmail] = useState<string>("");
	const [code, setCode] = useState<string>("");
	const [codeSent, setCodeSent] = useState<boolean>(false);

	const onFormSubmit = () => {
		console.log("Form submitted");
	};

	const onCodeSubmit = () => {
		console.log("Code submitted");
	};

	return (
		<MainContainer>
			<div className="w-full flex flex-col items-center justify-center py-32">
				{!codeSent && (
					<>
						<h3 className="text-2xl/9 font-bold tracking-tight  text-black dark:text-white mb-4">
							{language === languageOptions.english
								? "Sign in to your account"
								: "Inicia sesión en tu cuenta"}
						</h3>
						<p className="leading-7 font-normal text-gray-700 dark:text-gray-400 mb-8">
							{language === languageOptions.english
								? "Submit your email and we will send you a code to be able to access your account."
								: "Ingresa tu correo y te enviaremos un codigo para poder acceder a tu cuenta."}
						</p>
						<AuthForm onFormSubmit={onFormSubmit} />
					</>
				)}
				{codeSent && (
					<>
						<h3 className="text-2xl/9 font-bold tracking-tight  text-black dark:text-white mb-4">
							{language === languageOptions.english
								? "Verify your email"
								: "Verifica tu correo electrónico"}
						</h3>
						<p className="leading-7 font-normal text-gray-700 dark:text-gray-400 mb-8">
							{language === languageOptions.english
								? "We have sent you an email with a code to verify your account and login."
								: "Te hemos enviado un correo con un codigo para verificar tu cuenta e iniciar sesión."}
						</p>
						<CodeForm onCodeSubmit={onCodeSubmit} />
					</>
				)}
			</div>
		</MainContainer>
	);
};

export default LoginPage;
