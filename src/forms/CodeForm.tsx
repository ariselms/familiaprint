import { Button, Label, TextInput } from "flowbite-react";
import { useLanguageContext } from "@/context/languageContext";
import { languageOptions } from "@/static";

export default function CodeForm({
  onCodeChange,
	onCodeSubmit
}: {
	onCodeChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	onCodeSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}) {
	const { language } = useLanguageContext();

	return (
		<form
			onSubmit={onCodeSubmit}
			className="w-full md:w-xl flex flex-col gap-4">
			<div>
				<div className="mb-2 block">
					<Label htmlFor="text">
						{language === languageOptions.english ? "Your code" : "Tu código"}
					</Label>
				</div>
				<TextInput
					id="text"
					type="text"
					placeholder={
						language === languageOptions.english ? "xxx-xxx" : "xxx-xxx"
					}
          maxLength={6}
					onChange={onCodeChange}
				/>
			</div>
			<Button color={"red"} type="submit">
				{language === languageOptions.english
					? "Verify Code"
					: "Verificar Código"}
			</Button>
		</form>
	);
}
