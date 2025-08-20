import { useLanguageContext } from "@/context/languageContext";
import { languageOptions } from "@/static";

export default function ContactBlock() {
	const { language } = useLanguageContext();

	return (
		<div className="text-base p-4 rounded-md border border-gray-800 text-black dark:text-white mt-8">
			<h3 className="text-xl">Familia Print</h3>
			<br />
			{/* <p className="text-sm rounded py-1">
				{language === languageOptions.english ? "Address: " : "Dirección: "}
				Mail Address: 300 Shipley Avenue, Glen Burnie, MD 21061
			</p> */}
			<p className="text-sm rounded py-1">
				{language === languageOptions.english
					? "Email address: "
					: "Correo electrónico: "}
				oyola57@gmail.com
			</p>
			<p className=" text-sm rounded py-1">
				{language === languageOptions.english
          ? "Phone: "
          : "Teléfono: "}
				(787) 450-3645
			</p>
		</div>
	);
}
