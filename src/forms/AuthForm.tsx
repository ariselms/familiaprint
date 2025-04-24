"use client";
import React from "react";
import { useLanguageContext } from "@/context/languageContext";
import { usePathname } from "next/navigation";
import { Button, Label, TextInput } from "flowbite-react";
import { languageOptions } from "@/static";


const AuthForm = ({ onFormSubmit }: { onFormSubmit: () => void }) => {
	const {language} = useLanguageContext();
	const pathname = usePathname();

	return (

		<form onSubmit={onFormSubmit} className="w-full md:w-xl flex flex-col gap-4">
			<div>
				<div className="mb-2 block">
					<Label htmlFor="email1">
						{language === languageOptions.english ? "Your email" : "Tu correo"}
					</Label>
				</div>
				<TextInput
					id="email1"
					type="email"
					placeholder={
						language === languageOptions.english
							? "myemail@email.com"
							: "micorreo@correo.com"
					}
					required
				/>
			</div>
			<Button color={"red"} type="submit">
				{language === languageOptions.english ? "Send Code" : "Enviar Código"}
			</Button>
		</form>
	);
};

export default AuthForm;
