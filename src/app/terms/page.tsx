"use client";

import ContactBlock from "@/components/ContactBlock";
import MainContainer from "@/components/layout/Container";
import { useLanguageContext } from "@/context/languageContext";
import { languageOptions } from "@/static";

export default function TermsPage() {
	const { language } = useLanguageContext();
	return (
		<>
			<MainContainer>
				<h1 className="text-black dark:text-white text-4xl font-bold">
					{language === languageOptions.english ? (
						<EnglishTerms />
					) : (
						<SpanishTerms />
					)}
				</h1>
			</MainContainer>
		</>
	);
}

const EnglishTerms = () => {
	return (
		<>
			<div className="p-6 sm:p-8 lg:p-10">
				<h1 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-2">
					Terms and Conditions
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
							Welcome to Familia Print. These Terms and Conditions ("Terms")
							govern your access to and use of our website located at
							https://www.familiaprint.com (the "Site") and the services
							offered therein (the "Services"). By accessing or using our Site
							and Services, you agree to be bound by these Terms. If you do not
							agree to these Terms, please do not use our Site or Services.
						</p>
					</div>

					<div>
						<h2 className="text-xl font-semibold text-black dark:text-white mb-2">
							2. Use of the Site and Services
						</h2>
						<p className="text-base text-black dark:text-white">
							You agree to use the Site and Services only for lawful purposes
							and in accordance with these Terms. You are granted a
							non-exclusive, non-transferable, and revocable license to access
							and use the Site strictly in accordance with these Terms.
						</p>
					</div>

					<div>
						<h2 className="text-xl font-semibold text-black dark:text-white mb-2">
							3. User Accounts
						</h2>
						<p className="text-base text-black dark:text-white">
							To access certain features of the Site, you may be required to
							create an account. You are responsible for maintaining the
							confidentiality of your account information, including your
							password, and for all activities that occur under your account.
							You agree to notify us immediately of any unauthorized use of your
							account or password.
						</p>
					</div>

					<div>
						<h2 className="text-xl font-semibold text-black dark:text-white mb-2">
							4. Intellectual Property Rights
						</h2>
						<p className="text-base text-black dark:text-white">
							All content included as part of the Service, such as text,
							graphics, logos, images, as well as the compilation thereof, is
							the property of Familia Print or its suppliers and is
							protected by copyright and other laws. You agree not to copy,
							distribute, modify, or create derivative works from any content on
							the Site without our express written permission.
						</p>
					</div>

					<div>
						<h2 className="text-xl font-semibold text-black dark:text-white mb-2">
							5. Prohibited Activities
						</h2>
						<p className="text-base text-black dark:text-white">
							You are prohibited from using the site or its content:
						</p>
						<ul className="list-disc list-inside mt-2 pl-4 space-y-1 text-base text-black dark:text-white">
							<li>For any unlawful purpose.</li>
							<li>
								To solicit others to perform or participate in any unlawful
								acts.
							</li>
							<li>
								To infringe upon or violate our intellectual property rights or
								the intellectual property rights of others.
							</li>
							<li>
								To harass, abuse, insult, harm, defame, slander, disparage,
								intimidate, or discriminate.
							</li>
							<li>To submit false or misleading information.</li>
							<li>
								To upload or transmit viruses or any other type of malicious
								code.
							</li>
							<li>To collect or track the personal information of others.</li>
						</ul>
					</div>

					<div>
						<h2 className="text-xl font-semibold text-black dark:text-white mb-2">
							6. Disclaimer of Warranties
						</h2>
						<p className="text-base text-black dark:text-white">
							The Site and Services are provided "as is" and "as available". Familia Print makes no representations or warranties of any kind,
							express or implied, as to the operation of its site or the
							information, content, materials, or products included on this
							site. You expressly agree that your use of this site is at your
							sole risk.
						</p>
					</div>

					<div>
						<h2 className="text-xl font-semibold text-black dark:text-white mb-2">
							7. Limitation of Liability
						</h2>
						<p className="text-base text-black dark:text-white">
							In no event shall Familia Print, nor its directors, employees,
							partners, agents, suppliers, or affiliates, be liable for any
							indirect, incidental, special, consequential, or punitive damages,
							resulting from your access to or use of or inability to access or
							use the Service.
						</p>
					</div>

					<div>
						<h2 className="text-xl font-semibold text-black dark:text-white mb-2">
							8. Indemnification
						</h2>
						<p className="text-base text-black dark:text-white">
							You agree to indemnify, defend and hold harmless Familia Print
							and its officers, directors, employees, agents, and third parties,
							for any losses, costs, liabilities, and expenses related to or
							arising out of your use of or inability to use the Site or
							services, or your violation of any of the terms of this Agreement.
						</p>
					</div>

					<div>
						<h2 className="text-xl font-semibold text-black dark:text-white mb-2">
							9. Governing Law
						</h2>
						<p className="text-base text-black dark:text-white">
							These Terms shall be governed and construed in accordance with the
							laws of Maryland, U.S.A. without regard to its conflict of law
							provisions.
						</p>
					</div>

					<div>
						<h2 className="text-xl font-semibold text-black dark:text-white mb-2">
							10. Changes to Terms
						</h2>
						<p className="text-base text-black dark:text-white">
							Familia Print reserves the right, in its sole discretion, to
							change the Terms under which the Site is offered. The most current
							version of the Terms will supersede all previous versions. We
							encourage you to periodically review the Terms to stay informed of
							our updates.
						</p>
					</div>

					<div>
						<h2 className="text-xl font-semibold text-black dark:text-white mb-2">
							11. Contact Us
						</h2>
						<p className="text-base text-black dark:text-white">
							Familia Print welcomes your questions or comments regarding
							the Terms.
						</p>
						<ContactBlock />
					</div>
				</div>
			</div>
		</>
	);
};

const SpanishTerms = () => {
	return (
		<>
			<div className="p-6 sm:p-8 lg:p-10">
				<h1 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-2">
					Términos y Condiciones
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
							Bienvenido/a a Familia Print. Estos Términos y Condiciones
							("Términos") rigen su acceso y uso de nuestro sitio web ubicado en
							https://www.familiaprint.com (el "Sitio") y los servicios
							ofrecidos en él (los "Servicios"). Al acceder o utilizar nuestro
							Sitio y Servicios, usted acepta estar sujeto a estos Términos. Si
							no está de acuerdo con estos Términos, por favor, no utilice
							nuestro Sitio o Servicios.
						</p>
					</div>

					<div>
						<h2 className="text-xl font-semibold text-black dark:text-white mb-2">
							2. Uso del Sitio y de los Servicios
						</h2>
						<p className="text-base text-black dark:text-white">
							Usted se compromete a utilizar el Sitio y los Servicios únicamente
							para fines lícitos y de conformidad con estos Términos. Se le
							concede una licencia no exclusiva, no transferible y revocable
							para acceder y utilizar el Sitio estrictamente de acuerdo con
							estos Términos.
						</p>
					</div>

					<div>
						<h2 className="text-xl font-semibold text-black dark:text-white mb-2">
							3. Cuentas de Usuario
						</h2>
						<p className="text-base text-black dark:text-white">
							Para acceder a ciertas funciones del Sitio, es posible que deba
							crear una cuenta. Usted es responsable de mantener la
							confidencialidad de la información de su cuenta, incluida su
							contraseña, y de todas las actividades que ocurran bajo su cuenta.
							Usted se compromete a notificarnos inmediatamente cualquier uso no
							autorizado de su cuenta o contraseña.
						</p>
					</div>

					<div>
						<h2 className="text-xl font-semibold text-black dark:text-white mb-2">
							4. Derechos de Propiedad Intelectual
						</h2>
						<p className="text-base text-black dark:text-white">
							Todo el contenido incluido como parte del Servicio, como texto,
							gráficos, logotipos, imágenes, así como la compilación de los
							mismos, es propiedad de Familia Print o sus proveedores y está
							protegido por derechos de autor y otras leyes. Usted se compromete
							a no copiar, distribuir, modificar o crear trabajos derivados de
							ningún contenido del Sitio sin nuestro permiso expreso por
							escrito.
						</p>
					</div>

					<div>
						<h2 className="text-xl font-semibold text-black dark:text-white mb-2">
							5. Actividades Prohibidas
						</h2>
						<p className="text-base text-black dark:text-white">
							Se le prohíbe usar el sitio o su contenido:
						</p>
						<ul className="list-disc list-inside mt-2 pl-4 space-y-1 text-base text-black dark:text-white">
							<li>Para cualquier propósito ilegal.</li>
							<li>
								Para solicitar a otros que realicen o participen en actos
								ilegales.
							</li>
							<li>
								Para infringir o violar nuestros derechos de propiedad
								intelectual o los derechos de propiedad intelectual de otros.
							</li>
							<li>
								Para acosar, abusar, insultar, dañar, difamar, calumniar,
								menospreciar, intimidar o discriminar.
							</li>
							<li>Para presentar información falsa o engañosa.</li>
							<li>
								Para cargar o transmitir virus o cualquier otro tipo de código
								malicioso.
							</li>
							<li>
								Para recopilar o rastrear la información personal de otros.
							</li>
						</ul>
					</div>

					<div>
						<h2 className="text-xl font-semibold text-black dark:text-white mb-2">
							6. Exclusión de Garantías
						</h2>
						<p className="text-base text-black dark:text-white">
							El Sitio y los Servicios se proporcionan "tal cual" y "según
							disponibilidad". Familia Print no hace representaciones ni
							garantías de ningún tipo, expresas o implícitas, en cuanto al
							funcionamiento de su sitio o la información, contenido, materiales
							o productos incluidos en este sitio. Usted acepta expresamente que
							el uso de este sitio es bajo su propio riesgo.
						</p>
					</div>

					<div>
						<h2 className="text-xl font-semibold text-black dark:text-white mb-2">
							7. Limitación de Responsabilidad
						</h2>
						<p className="text-base text-black dark:text-white">
							En ningún caso Familia Print, ni sus directores, empleados,
							socios, agentes, proveedores o afiliados, serán responsables de
							daños indirectos, incidentales, especiales, consecuentes o
							punitivos, resultantes de su acceso o uso o incapacidad de acceder
							o usar el Servicio.
						</p>
					</div>

					<div>
						<h2 className="text-xl font-semibold text-black dark:text-white mb-2">
							8. Indemnización
						</h2>
						<p className="text-base text-black dark:text-white">
							Usted acepta indemnizar, defender y eximir de responsabilidad a
							Familia Print y a sus funcionarios, directores, empleados,
							agentes y terceros, por cualquier pérdida, costo, responsabilidad
							y gasto relacionados con o que surjan de su uso o incapacidad para
							usar el Sitio o los servicios, o su violación de cualquiera de los
							términos de este Acuerdo.
						</p>
					</div>

					<div>
						<h2 className="text-xl font-semibold text-black dark:text-white mb-2">
							9. Ley Aplicable
						</h2>
						<p className="text-base text-black dark:text-white">
							Estos Términos se regirán e interpretarán de acuerdo con las leyes
							de Maryland, U.S.A. sin tener en cuenta sus disposiciones sobre
							conflictos de leyes.
						</p>
					</div>

					<div>
						<h2 className="text-xl font-semibold text-black dark:text-white mb-2">
							10. Cambios en los Términos
						</h2>
						<p className="text-base text-black dark:text-white">
							Familia Print se reserva el derecho, a su entera discreción,
							de cambiar los Términos bajo los cuales se ofrece el Sitio. La
							versión más actual de los Términos reemplazará todas las versiones
							anteriores. Le recomendamos que revise periódicamente los Términos
							para mantenerse informado de nuestras actualizaciones.
						</p>
					</div>

					<div>
						<h2 className="text-xl font-semibold text-black dark:text-white mb-2">
							11. Contáctenos
						</h2>
						<p className="text-base text-black dark:text-white">
							Familia Print agradece sus preguntas o comentarios sobre los
							Términos.
						</p>
						<ContactBlock />
					</div>
				</div>
			</div>
		</>
	);
};
