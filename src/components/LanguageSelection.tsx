import { USFlag, PRFlag } from "@/components/svg/Icons";
export default function LanguageSelection({
	handleLanguageChange,
	languageContext
}: any) {
	return (
		<div className="flex items-center">
			<label htmlFor="language" className="sr-only text-sm text-black mb-1">
				{languageContext.language === "en"
					? "Select Language"
					: "Seleccione Idioma"}
			</label>
			<div className="flex items-center justify-center">
				<select
					onChange={(e) => handleLanguageChange(e.target.value)}
					value={languageContext.language}
					className="w-fit rounded rounded-lg text-base/7 font-semibold text-gray-900 cursor-pointer -ms-1">
					<option className="flex items-center cursor-pointer" value="en">
						English
					</option>
					<option className="flex items-center cursor-pointer" value="es">
						Español
					</option>
				</select>
				{languageContext.language === "en" ? <USFlag /> : <PRFlag />}
			</div>
		</div>
	);
}
