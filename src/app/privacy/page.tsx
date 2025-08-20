"use client";

import ContactBlock from "@/components/ContactBlock";
import MainContainer from "@/components/layout/Container";
import { useLanguageContext } from "@/context/languageContext";
import { languageOptions } from "@/static";

export default function PrivacyPage() {
	const { language } = useLanguageContext();
	return (
		<>
			<MainContainer>
				<h1 className="text-black  dark:text-white text-4xl font-bold">
					{language === languageOptions.english ? (
						<PrivacyEnglish />
					) : (
						<PrivacySpanish />
					)}
				</h1>
			</MainContainer>
		</>
	);
}

const PrivacySpanish = () => {
	return (
		// This component's content has been updated to a Privacy Policy in Spanish.
		<div className="p-6 sm:p-8 lg:p-10">
			<h1 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-2">
				Política de Privacidad
			</h1>
			<p className="text-sm text-gray-800 dark:text-gray-300 mb-8">
				<strong>Fecha de Entrada en Vigor:</strong> August 19, 2025
			</p>

			<div className="space-y-6 text-gray-700 leading-relaxed">
				<div>
					<h2 className="text-xl font-semibold text-black dark:text-white mb-2">
						1. Introducción
					</h2>
					<p className="text-base text-black dark:text-white">
						Bienvenido/a a Familia Print. Estamos comprometidos a proteger
						su privacidad. Esta Política de Privacidad explica cómo recopilamos,
						usamos, divulgamos y protegemos su información cuando utiliza
						nuestro sitio web (el "Sitio") y nuestros servicios (los
						"Servicios"). Al utilizar nuestro Sitio y Servicios, usted acepta
						las prácticas de datos descritas en esta política.
					</p>
				</div>

				<div>
					<h2 className="text-xl font-semibold text-black dark:text-white mb-2">
						2. Información que Recopilamos
					</h2>
					<p className="text-base text-black dark:text-white">
						Recopilamos la información que usted nos proporciona directamente
						para fines laborales. Esto puede incluir información personal y
						profesional como su nombre, datos de contacto, currículum, historial
						de empleo, habilidades y cualificaciones.
					</p>
				</div>

				<div>
					<h2 className="text-xl font-semibold text-black dark:text-white mb-2">
						3. Cómo Utilizamos Su Información
					</h2>
					<p className="text-base text-black dark:text-white">
						Utilizamos la información que recopilamos únicamente para nuestros
						fines laborales. Esto incluye: conectarlo con posibles oportunidades
						de trabajo, comunicarnos con usted sobre sus solicitudes, facilitar
						el proceso de contratación con los empleadores y gestionar tareas
						administrativas relacionadas con su empleo a través de nosotros.
					</p>
				</div>

				<div>
					<h2 className="text-xl font-semibold text-black dark:text-white mb-2">
						4. Intercambio y Divulgación de Información
					</h2>
					<p className="text-base text-black dark:text-white">
						Su privacidad es importante para nosotros. Podemos compartir su
						información profesional con posibles empleadores con el fin de
						evaluar su candidatura para un puesto, pero solo con su
						consentimiento. **No vendemos ni venderemos su información personal
						a terceros.**
					</p>
				</div>

				<div>
					<h2 className="text-xl font-semibold text-black dark:text-white mb-2">
						5. Seguridad de los Datos
					</h2>
					<p className="text-base text-black dark:text-white">
						Implementamos medidas de seguridad razonables para mantener la
						seguridad de su información personal. Sin embargo, tenga en cuenta
						que ninguna medida de seguridad es perfecta o impenetrable, y no
						podemos garantizar una seguridad completa.
					</p>
				</div>

				<div>
					<h2 className="text-xl font-semibold text-black dark:text-white mb-2">
						6. Sus Derechos
					</h2>
					<p className="text-base text-black dark:text-white">
						Usted tiene derecho a revisar, actualizar o solicitar la eliminación
						de su información personal en cualquier momento poniéndose en
						contacto con nosotros. Responderemos a su solicitud de manera
						oportuna.
					</p>
				</div>

				<div>
					<h2 className="text-xl font-semibold text-black dark:text-white mb-2">
						7. Cambios a Esta Política de Privacidad
					</h2>
					<p className="text-base text-black dark:text-white">
						Podemos actualizar esta Política de Privacidad de vez en cuando. La
						versión más actual de la política regirá nuestro uso de su
						información y siempre estará disponible en el Sitio. Le recomendamos
						que revise periódicamente esta política para mantenerse informado de
						nuestras actualizaciones.
					</p>
				</div>

				<div>
					<h2 className="text-xl font-semibold text-black dark:text-white mb-2">
						8. Contáctenos
					</h2>
					<p className="text-base text-black dark:text-white">
						Familia Print agradece sus preguntas o comentarios sobre esta
						Política de Privacidad.
					</p>
					<ContactBlock />
				</div>
			</div>
		</div>
	);
};

const PrivacyEnglish = () => {
	return (
		<div className="p-6 sm:p-8 lg:p-10">
			<h1 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-2">
				Privacy Policy
			</h1>
			<p className="text-sm text-gray-800 dark:text-gray-300 mb-8">
				<strong>Effective Date:</strong> August 19, 2025
			</p>

			<div className="space-y-6 text-gray-700 leading-relaxed">
				<div>
					<h2 className="text-xl font-semibold text-black dark:text-white mb-2">
						1. Introduction
					</h2>
					<p className="text-base text-black dark:text-white">
						Welcome to Familia Print. We are committed to protecting your
						privacy. This Privacy Policy explains how we collect, use, disclose,
						and safeguard your information when you use our website (the "Site")
						and our services (the "Services"). By using our Site and Services,
						you consent to the data practices described in this policy.
					</p>
				</div>

				<div>
					<h2 className="text-xl font-semibold text-black dark:text-white mb-2">
						2. Information We Collect
					</h2>
					<p className="text-base text-black dark:text-white">
						We collect information that you provide directly to us for job
						purposes. This may include personal and professional information
						such as your name, contact details, resume, employment history,
						skills, and qualifications.
					</p>
				</div>

				<div>
					<h2 className="text-xl font-semibold text-black dark:text-white mb-2">
						3. How We Use Your Information
					</h2>
					<p className="text-base text-black dark:text-white">
						We use the information we collect solely for our job purposes. This
						includes: matching you with potential job opportunities,
						communicating with you about your applications, facilitating the
						hiring process with employers, and managing administrative tasks
						related to your employment through us.
					</p>
				</div>

				<div>
					<h2 className="text-xl font-semibold text-black dark:text-white mb-2">
						4. Information Sharing and Disclosure
					</h2>
					<p className="text-base text-black dark:text-white">
						Your privacy is important to us. We may share your professional
						information with prospective employers for the purpose of evaluating
						your candidacy for a position, but only with your consent. **We do
						not and will not sell your personal information to any third
						parties.**
					</p>
				</div>

				<div>
					<h2 className="text-xl font-semibold text-black dark:text-white mb-2">
						5. Data Security
					</h2>
					<p className="text-base text-black dark:text-white">
						We implement reasonable security measures to maintain the safety of
						your personal information. However, please be aware that no security
						measures are perfect or impenetrable, and we cannot guarantee
						complete security.
					</p>
				</div>

				<div>
					<h2 className="text-xl font-semibold text-black dark:text-white mb-2">
						6. Your Rights
					</h2>
					<p className="text-base text-black dark:text-white">
						You have the right to review, update, or request the deletion of
						your personal information at any time by contacting us. We will
						respond to your request in a timely manner.
					</p>
				</div>

				<div>
					<h2 className="text-xl font-semibold text-black dark:text-white mb-2">
						7. Changes to This Privacy Policy
					</h2>
					<p className="text-base text-black dark:text-white">
						We may update this Privacy Policy from time to time. The most
						current version of the policy will govern our use of your
						information and will always be available on the Site. We encourage
						you to periodically review this policy to stay informed of our
						updates.
					</p>
				</div>

				<div>
					<h2 className="text-xl font-semibold text-black dark:text-white mb-2">
						8. Contact Us
					</h2>
					<p className="text-base text-black dark:text-white">
						Familia Print welcomes your questions or comments regarding this
						Privacy Policy.
					</p>
					<ContactBlock />
				</div>
			</div>
		</div>
	);
};
