import { Button, Label, TextInput } from "flowbite-react";
import { useLanguageContext } from "@/context/languageContext";
import { languageOptions } from "@/static";

export default function CodeForm({ onCodeSubmit }: { onCodeSubmit: () => void }) {
	const { language } = useLanguageContext();

	return (
		<form  onSubmit={onCodeSubmit} className="w-full md:w-xl flex flex-col gap-4">
			<div>
				<div className="mb-2 block">
					<Label htmlFor="email1">
						{language === languageOptions.english ? "Your code" : "Tu código"}
					</Label>
				</div>
				<TextInput
					id="email1"
					type="email"
					placeholder={
						language === languageOptions.english
							? "xxx-xxx"
							: "xxx-xxx"
					}
					required
				/>
			</div>
			<Button color={"red"} type="submit">
				{language === languageOptions.english ? "Verify Code" : "Verificar Código"}
			</Button>
		</form>
	);
}
