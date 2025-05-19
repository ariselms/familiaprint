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
  enProfile: "Profile",
  esProfile: "Perfil",
  enLogout: "Logout",
  esLogout: "Cerrar sesión",
});

let baseUrl;

if(process.env.NEXT_PUBLIC_VERCEL_ENV === "development") {
  baseUrl = "http://localhost:3000";
}

if(process.env.NEXT_PUBLIC_VERCEL_ENV === "preview") {
  baseUrl = "https://familiaprint-dev.vercel.app";
}

if(process.env.NEXT_PUBLIC_VERCEL_ENV === "production") {
  baseUrl = "https://www.familiaprint.com";
}

export const serverBaseUrl = baseUrl;
