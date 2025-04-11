"use client";

import MainContainer from "@/components/layout/Container";
import Image from "next/image";
import { useLanguageContext } from "@/context/languageContext";
import AuthForm from "@/forms/AuthForm";
const RegisterPage = () => {
	const {language} = useLanguageContext();

	const onFormSubmit = () => {
		console.log("Form submitted");
	};
	return (
		<MainContainer>
			<section className="py-32">
				<div className="flex min-h-full">
					<div className="flex w-full md:w-1/2 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
						<div className="mx-auto w-full max-w-sm lg:w-96">
							<div>
								<h2 className="mt-8 text-2xl/9 font-bold tracking-tight text-blue-200">
									{language === "en"
										? "Sign in to your account"
										: "Inicia sesión en tu cuenta"}
								</h2>
							</div>

							<div className="mt-10">
								<div>
									<AuthForm onFormSubmit={onFormSubmit} />
								</div>
							</div>
						</div>
					</div>
					<div className="relative w-3/6 hidden md:block">
						<Image
							width={100}
							height={100}
							alt=""
							src="https://images.pexels.com/photos/191429/pexels-photo-191429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
							className="absolute rounded-xl inset-0 size-full object-cover"
						/>
					</div>
				</div>
			</section>
		</MainContainer>
	);
};

export default RegisterPage;
