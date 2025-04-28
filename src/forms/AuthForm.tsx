"use client";
import React from "react";
import { useLanguageContext } from "@/context/languageContext";
import { Button, Label, TextInput } from "flowbite-react";
import { languageOptions } from "@/static";
import { Spinner } from "flowbite-react";

const AuthForm = ({
	onEmailChange,
	onFormSubmit,
  loading
}: {
	onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  loading: boolean
}) => {

	const { language } = useLanguageContext();

	return (
		<form
			onSubmit={onFormSubmit}
			className="w-full md:w-xl flex flex-col gap-4">
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
					onChange={onEmailChange}
				/>
			</div>
			<Button color={"red"} type="submit">
        {loading ? (
          <>
            <Spinner size="sm" className="mr-2" light />
            {language === languageOptions.english
              ? "Processing..."
              : "Procesando..."}
          </>
        ) : languageOptions.english ? (
          "Send"
        ) : (
          "Enviar"
        )}
			</Button>
		</form>
	);
};

export default AuthForm;
