import { PhoneIcon, PlayCircleIcon } from "@heroicons/react/20/solid";

export const languageOptions = Object.freeze({
	english: "en",
	spanish: "es"
});

export const generalLanguage = Object.freeze({
	esWebsiteName: "Familia Print por Leonidas",
	enWebsiteName: "Familia Print by Leonidas",
	esAccessibilityMenu: "Open main menu",
	enAccessibilityMenu: "Abrir menu principal",
	esAccessibilityCloseMenu: "Close menu",
	enAccessibilityCloseMenu: "Cerrar menú",
	esMenuSpecialties: "Especialidades",
	enMenuSpecialties: "Specialties",
	esMenuCompany: "Empresa",
	enMenuCompany: "Company",
	esMenuSupport: "Soporte",
	enMenuSupport: "Support",
  esMenuLogin: "Sesión",
  enMenuLogin: "Login",
});

export const moreActions = [
	{
		id: 1,
		spName: "Videos",
		enName: "Videos",
		href: "/videos",
		icon: PlayCircleIcon
	},
	{
		id: 2,
		spName: "Contacto",
		enName: "Contact",
		href: "/contact",
		icon: PhoneIcon
	}
];
