"use client";

import MainContainer from "@/components/layout/Container";
import { useLanguageContext } from "@/context/languageContext";

const ForgotPasswordPage = () => {
	const {language} = useLanguageContext();

	return (
		<MainContainer>
			<section className="py-32">
				<div>
					<h2 className="mt-8 text-2xl/9 font-bold tracking-tight text-blue-200">
						{language === "en"
							? "Recover your password"
							: "Recupera tu contraseña"}
					</h2>
          <p className="my-4 text-lg text-blue-100">
            {language === "en"
              ? "Enter your email address and if you have an account, we'll send you a link to reset your password."
              : "Ingrese su dirección de correo electrónico y si tiene una cuenta, le enviaremos un enlace para restablecer su contraseña."}
          </p>
				</div>
				<form className="space-y-6">
					<div>
						<label
							htmlFor="email"
							className="block text-sm/6 font-medium text-blue-200">
							{language === "en"
								? "Email"
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
				</form>
			</section>
		</MainContainer>
	);
};

export default ForgotPasswordPage;
