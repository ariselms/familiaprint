"use client";

import { useState } from "react";
import { useLanguageContext } from "@/context/languageContext";
import { languageOptions } from "@/static";
import { Label, TextInput } from "flowbite-react";
import { Button, Spinner } from "flowbite-react";
import { User } from "@/types/user";
import { toast } from "react-toastify";

export default function UserProfileForm({ user }: { user: any }) {
	const { language } = useLanguageContext();

	const [loading, setLoading] = useState(false);

	const [candidate, setCandidate] = useState<User>({
		id: user?.id || null,
		namefirst: user?.namefirst || "",
		namelast: user?.namelast || "",
		email: user?.email || "",
		tel: user?.tel || "",
		addressstreet: user?.addressstreet || "",
		addresscity: user?.addresscity || "",
		addressstate: user?.addressstate || "",
		addresszip: user?.addresszip || ""
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setCandidate((prev) => ({
			...prev,
			[name]: value
		}));
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		setLoading(true);

    console.log(candidate);

    // TODO:
    // Validate the form data before sending it to the server


		try {
			const request = await fetch("/api/user", {
				method: "PUT",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(candidate)
			});

      const response = await request.json();

      if (response.success) {

        const toastMessage =
					language === languageOptions.english
						? "Your information has been updated successfully."
						: "Su información ha sido actualizada con éxito.";

				toast.success(toastMessage, {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined
				});
      } else {
        throw new Error(response.message);
      }
			setLoading(false);
		} catch (error) {
			console.error(error);

      const errorMessage =
				error instanceof Error ? error.message : "An error occurred";

			toast.error(errorMessage);
		} finally {

      setLoading(false);

    }
	};

	return (
		<div className="border-gray-900/10 dark:border-gray-700 pb-16">
			<h2 className="text-base font-semibold leading-7 text-gray-900 dark:text-gray-100">
				{language === languageOptions.english
					? "User Information"
					: "Información de usuario"}
			</h2>
			<p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-200">
				{language === languageOptions.english
					? "Verify and update your profile information."
					: "Verifica y actualiza la información de tu perfil."}
			</p>

			<form
				onSubmit={handleSubmit}
				className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
				<div className="sm:col-span-3">
					<Label
						htmlFor="first-name"
						className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">
						{language === languageOptions.english ? "First name" : "Nombre"}
					</Label>
					<div className="mt-2">
						<TextInput
							id="first-name"
							name="namefirst"
							type="text"
							autoComplete="given-name"
							className="block w-full rounded-md border-0 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-inset focus:ring-red -600 sm:text-sm sm:leading-6"
							value={candidate.namefirst}
							onChange={handleChange}
						/>
					</div>
				</div>

				<div className="sm:col-span-3">
					<Label
						htmlFor="last-name"
						className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">
						{language === languageOptions.english ? "Last name" : "Apellido"}
					</Label>
					<div className="mt-2">
						<TextInput
							id="last-name"
							name="namelast"
							type="text"
							autoComplete="family-name"
							className="block w-full rounded-md border-0 text-gray-900 dark:text-gray-100  focus:ring-2 focus:ring-inset focus:ring-red  -600 sm:text-sm sm:leading-6"
							value={candidate.namelast}
							onChange={handleChange}
						/>
					</div>
				</div>

				<div className="sm:col-span-4">
					<Label
						htmlFor="email"
						className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">
						{language === languageOptions.english
							? "Email"
							: "Correo electrónico"}
					</Label>
					<div className="mt-2">
						<TextInput
							id="email"
							name="email"
							type="email"
							autoComplete="email"
							className="block w-full rounded-md border-0 text-gray-900 dark:text-gray-100  focus:ring-2 focus:ring-inset focus:ring-red  -600 sm:text-sm sm:leading-6"
							value={candidate.email}
							onChange={handleChange}
							disabled
						/>
						<small className="p-1 text-gray-800 dark:text-gray-300">
							{language === languageOptions.english
								? "This field is not editable. Your email is your personal identification. Therefore, you cannot change it."
								: "Este campo no es editable. Tu correo electrónico es tu identificación personal. Por lo tanto, no puedes cambiarlo."}
						</small>
					</div>
				</div>

				<div className="sm:col-span-4">
					<Label
						htmlFor="phone"
						className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">
						{language === languageOptions.english ? "Phone" : "Teléfono"}
					</Label>
					<div className="mt-2">
						<TextInput
							id="phone"
							name="tel"
							type="phone"
							autoComplete="phone"
							className="block w-full rounded-md border-0 text-gray-900 dark:text-gray-100  focus:ring-2 focus:ring-inset focus:ring-red  -600 sm:text-sm sm:leading-6"
							value={candidate.tel}
							onChange={handleChange}
						/>
					</div>
				</div>

				<div className="col-span-full">
					<Label
						htmlFor="street-address"
						className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">
						{language === languageOptions.english
							? "Street address"
							: "Dirección"}
					</Label>
					<div className="mt-2">
						<TextInput
							id="street-address"
							name="addressstreet"
							type="text"
							autoComplete="street-address"
							className="block w-full rounded-md border-0 text-gray-900 dark:text-gray-100  focus:ring-2 focus:ring-inset focus:ring-red  -600 sm:text-sm sm:leading-6"
							value={candidate.addressstreet}
							onChange={handleChange}
						/>
					</div>
				</div>

				<div className="sm:col-span-2 sm:col-start-1">
					<Label
						htmlFor="city"
						className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">
						{language === languageOptions.english ? "City" : "Ciudad"}
					</Label>
					<div className="mt-2">
						<TextInput
							id="city"
							name="addresscity"
							type="text"
							autoComplete="address-level2"
							className="block w-full rounded-md border-0 text-gray-900 dark:text-gray-100  focus:ring-2 focus:ring-inset focus:ring-red  -600 sm:text-sm sm:leading-6"
							value={candidate.addresscity}
							onChange={handleChange}
						/>
					</div>
				</div>

				<div className="sm:col-span-2">
					<Label
						htmlFor="region"
						className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">
						{language === languageOptions.english
							? "State / Province"
							: "Estado / Provincia"}
					</Label>
					<div className="mt-2">
						<TextInput
							id="region"
							name="addressstate"
							type="text"
							autoComplete="address-level1"
							className="block w-full rounded-md border-0 text-gray-900 dark:text-gray-100  focus:ring-2 focus:ring-inset focus:ring-red  -600 sm:text-sm sm:leading-6"
							value={candidate.addressstate}
							onChange={handleChange}
						/>
					</div>
				</div>

				<div className="sm:col-span-2">
					<Label
						htmlFor="postal-code"
						className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">
						{language === languageOptions.english
							? "ZIP / Postal code"
							: "Código postal"}
					</Label>
					<div className="mt-2">
						<TextInput
							id="postal-code"
							name="addresszip"
							type="text"
							autoComplete="postal-code"
							className="block w-full rounded-md border-0 text-gray-900 dark:text-gray-100  focus:ring-2 focus:ring-inset focus:ring-red  -600 sm:text-sm sm:leading-6"
							maxLength={5}
							value={candidate.addresszip}
							onChange={handleChange}
						/>
					</div>
				</div>
				<Button className="mt-6 cursor-pointer" color={"red"} type="submit">
					{loading ? (
						<>
							<Spinner size="sm" className="mr-2" light />
							{language === languageOptions.english
								? "Processing..."
								: "Procesando..."}
						</>
					) : language === languageOptions.english ? (
						"Update"
					) : (
						"Actualizar"
					)}
				</Button>
			</form>
		</div>
	);
}
