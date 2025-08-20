"use client";

import ContactBlock from "@/components/ContactBlock";
import MainContainer from "@/components/layout/Container";
import { useLanguageContext } from "@/context/languageContext";
import { languageOptions } from "@/static";

export default function CookiesPage() {
	const { language } = useLanguageContext();
	return (
		<>
			<MainContainer>
				<h1 className="text-black dark:text-white text-4xl font-bold">
					{language === languageOptions.english ? (
						<EnglishCookies />
					) : (
						<SpanishCookies />
					)}
				</h1>
			</MainContainer>
		</>
	);
}

const EnglishCookies = () => {
	return (
		// This component's content has been updated to a Cookie Policy in English.
		<div className="p-6 sm:p-8 lg:p-10">
			<h1 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-2">
				Cookie Policy
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
						This Cookie Policy explains our current position on the use of
						cookies on the Familia Print website (the "Site"). We want to be
						transparent about any technology we use.
					</p>
				</div>

				<div>
					<h2 className="text-xl font-semibold text-black dark:text-white mb-2">
						2. Our Current Use of Cookies
					</h2>
					<p className="text-base text-black dark:text-white">
						Currently, we do not use cookies for tracking, analytics, or
						advertising. Our use of cookies is strictly limited to those that
						are essential for security purposes and to ensure the basic
						functionality of the site. These cookies do not collect personal
						information.
					</p>
				</div>

				<div>
					<h2 className="text-xl font-semibold text-black dark:text-white mb-2">
						3. Future Use of Cookies
					</h2>
					<p className="text-base text-black dark:text-white">
						It is possible that in the future we may decide to use additional
						cookies to improve the user experience, such as analytics or
						personalization cookies. If this occurs, we will update this policy
						and notify our users of the changes, providing the option to manage
						their cookie preferences.
					</p>
				</div>

				<div>
					<h2 className="text-xl font-semibold text-black dark:text-white mb-2">
						4. How to Manage Cookies
					</h2>
					<p className="text-base text-black dark:text-white">
						Although we do not currently use tracking cookies, you can control
						and manage cookies in your browser. Most web browsers allow you to
						see what cookies you have, delete them, and block cookies from
						specific sites or all websites.
					</p>
				</div>

				<div>
					<h2 className="text-xl font-semibold text-black dark:text-white mb-2">
						5. Changes to This Cookie Policy
					</h2>
					<p className="text-base text-black dark:text-white">
						We may update this Cookie Policy from time to time. The most current
						version of the policy will govern our use of cookie technology and
						will always be available on the Site. We encourage you to
						periodically review this policy to stay informed.
					</p>
				</div>

				<div>
					<h2 className="text-xl font-semibold text-black dark:text-white mb-2">
						6. Contact Us
					</h2>
					<p className="text-base text-black dark:text-white">
						Familia Print welcomes your questions or comments regarding this
						Cookie Policy.
					</p>
					<ContactBlock />
				</div>
			</div>
		</div>
	);
};

const SpanishCookies = () => {
	return (
		// This component's content has been updated to a Cookie Policy in Spanish.
		<div className="p-6 sm:p-8 lg:p-10">
			<h1 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-2">
				Política de Cookies
			</h1>
			<p className="text-sm text-gray-800 dark:text-gray-300 mb-8">
				<strong>Fecha de Entrada en Vigor:</strong> 19 de agosto de 2025
			</p>

			<div className="space-y-6 text-gray-700 leading-relaxed">
				<div>
					<h2 className="text-xl font-semibold text-black dark:text-white mb-2">
						1. Introducción
					</h2>
					<p className="text-base text-black dark:text-white">
						Esta Política de Cookies explica nuestra posición actual sobre el
						uso de cookies en el sitio web de Familia Print (el "Sitio").
						Queremos ser transparentes sobre cualquier tecnología que
						utilicemos.
					</p>
				</div>

				<div>
					<h2 className="text-xl font-semibold text-black dark:text-white mb-2">
						2. Nuestro Uso Actual de Cookies
					</h2>
					<p className="text-base text-black dark:text-white">
						Actualmente, no utilizamos cookies para seguimiento, análisis o
						publicidad. Nuestro uso de cookies se limita estrictamente a
						aquellas que son esenciales para propósitos de seguridad y para
						garantizar la funcionalidad básica del sitio. Estas cookies no
						recopilan información personal.
					</p>
				</div>

				<div>
					<h2 className="text-xl font-semibold text-black dark:text-white mb-2">
						3. Uso Futuro de Cookies
					</h2>
					<p className="text-base text-black dark:text-white">
						Es posible que en el futuro decidamos utilizar cookies adicionales
						para mejorar la experiencia del usuario, como cookies analíticas o
						de personalización. Si esto ocurre, actualizaremos esta política y
						notificaremos a nuestros usuarios sobre los cambios, proporcionando
						la opción de gestionar sus preferencias de cookies.
					</p>
				</div>

				<div>
					<h2 className="text-xl font-semibold text-black dark:text-white mb-2">
						4. Cómo Gestionar las Cookies
					</h2>
					<p className="text-base text-black dark:text-white">
						Aunque actualmente no utilizamos cookies de seguimiento, usted puede
						controlar y gestionar las cookies en su navegador. La mayoría de los
						navegadores web le permiten ver qué cookies tiene, eliminarlas y
						bloquear cookies de sitios específicos o de todos los sitios web.
					</p>
				</div>

				<div>
					<h2 className="text-xl font-semibold text-black dark:text-white mb-2">
						5. Cambios a Esta Política de Cookies
					</h2>
					<p className="text-base text-black dark:text-white">
						Podemos actualizar esta Política de Cookies de vez en cuando. La
						versión más actual de la política regirá nuestro uso de la
						tecnología de cookies y siempre estará disponible en el Sitio. Le
						recomendamos que revise periódicamente esta política para mantenerse
						informado.
					</p>
				</div>

				<div>
					<h2 className="text-xl font-semibold text-black dark:text-white mb-2">
						6. Contáctenos
					</h2>
					<p className="text-base text-black dark:text-white">
						Familia Print agradece sus preguntas o comentarios sobre esta
						Política de Cookies.
					</p>
					<ContactBlock />
				</div>
			</div>
		</div>
	);
};
