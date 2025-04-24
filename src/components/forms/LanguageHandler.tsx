import { USFlag, PRFlag } from "@/components/svg/Icons";
import { Label, Select } from "flowbite-react";

export default function LanguageHandler({
	handleLanguageChange,
	languageContext,
	languageOptions
}: any) {
	return (
		<div className="me-1 flex flex-col">
			<Label htmlFor="language" className="mb-1 sr-only">
				{languageContext.language === "en"
					? "Select Language"
					: "Seleccione Idioma"}
			</Label>
			<div className="flex items-center">
				<Select
          style={{paddingRight: "2rem", backgroundColor: "transparent", border: "none"}}
          id="language"
					onChange={(e) => handleLanguageChange(e.target.value)}
					value={languageContext.language}
					className="w-fit rounded rounded-lg cursor-pointer">
					<option className="text-black dark:text-white" value="en">
						English
					</option>
					<option className="text-black dark:text-white" value="es">
						Español
					</option>
				</Select>
				{languageContext.language === languageOptions.english ? (
					<USFlag />
				) : (
					<PRFlag />
				)}
			</div>
		</div>
	);
}
