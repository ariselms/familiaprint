"use client";
import { useLanguageContext } from "@/context/languageContext";
import { useServicesContext } from "@/context/servicesContext";
import { useMaterialsContext } from "@/context/materialsContext";
import { Spinner } from "flowbite-react";
import { languageOptions } from "@/static";
import { useState, useEffect } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import Link from "next/link";
import { toast } from "react-toastify";
// only import what you want to use
import {
	Button,
	Checkbox,
	Label,
	Radio,
	Textarea,
	TextInput
} from "flowbite-react";

export default function LeadForm() {
	const { language } = useLanguageContext();
  const { services, getAllServices } = useServicesContext();
	const { materials, getAllMaterials } = useMaterialsContext();
	const [loading, setLoading] = useState(false);
	let [isOpen, setIsOpen] = useState(false);
	const [projectService, setProjectService] = useState<string[]>([]);
	const [projectMaterial, setProjectMaterial] = useState<string[]>([]);
	const [errors, setErrors] = useState<any>({});
	const [candidate, setCandidate] = useState<any>({
		First: "",
		Last: "",
		Email: "",
		Phone: "",
		Street: "",
		City: "",
		State: "",
		Zip: "",
		ProjectService: projectService,
		ProjectMaterial: projectMaterial,
		ProjectEstimateTimeframe: "",
		Comments: ""
	});

	useEffect(() => {
    getAllServices();
		getAllMaterials();
	}, []);

	const handleProjectServiceChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		if (e.target.checked) {
			setProjectService([...projectService, e.target.value]);
		} else {
			setProjectService(
				projectService.filter((item) => item !== e.target.value)
			);
		}
	};

	const handleProjectMaterialChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.checked) {
			setProjectMaterial([...projectMaterial, e.target.value]);
		} else {
			setProjectMaterial(
				projectMaterial.filter((item) => item !== e.target.value)
			);
		}
    console.log("projectMaterial");
    console.log(projectMaterial);
	};

	const handleChange = (e: any) => {
		setCandidate({
			...candidate,
			[e.target.name]: e.target.value
		});
	};

	const validateForm = () => {
		let tempErrors: any = {};
		if (candidate.First === "")
			tempErrors.First =
				language === languageOptions.english ? "First name" : "Nombre";
		if (candidate.Last === "")
			tempErrors.Last =
				language === languageOptions.english ? "Last name" : "Apellido";
		if (candidate.Email === "")
			tempErrors.Email =
				language === languageOptions.english ? "Email" : "Correo electrónico";
		if (candidate.Phone === "")
			tempErrors.Phone =
				language === languageOptions.english ? "Phone" : "Teléfono";
		if (candidate.Street === "")
			tempErrors.Street =
				language === languageOptions.english ? "Street" : "Calle";
		if (candidate.City === "")
			tempErrors.City =
				language === languageOptions.english ? "City" : "Ciudad";
		if (candidate.State === "")
			tempErrors.State =
				language === languageOptions.english ? "State" : "Estado";
		if (candidate.Zip === "")
			tempErrors.Zip =
				language === languageOptions.english ? "Zip" : "Código postal";
		if (projectService.length === 0)
			tempErrors.ProjectService =
				language === languageOptions.english
					? "Project service"
					: "Servicio de proyecto";
		if (projectMaterial.length === 0)
			tempErrors.ProjectMaterial =
				language === languageOptions.english
					? "Project type"
					: "Tipo de proyecto";
		if (candidate.ProjectEstimateTimeframe === "")
			tempErrors.ProjectEstimateTimeframe =
				language === languageOptions.english
					? "Project estimate timeframe"
					: "Tiempo estimado del proyecto";

		setErrors(tempErrors);

		return tempErrors;
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		setLoading(true);

		try {
			const validationErrors = validateForm();

			// candidate.ProjectMaterial = projectMaterial.toString();
			// convert the array to a string for the email
      let projectServiceString: string = projectService.toString();
			let projectMaterialString: string = projectMaterial.toString();

			if (Object.keys(validationErrors).length === 0) {
				const quote = {
					First: candidate.First,
					Last: candidate.Last,
					Email: candidate.Email,
					Phone: candidate.Phone,
					Street: candidate.Street,
					City: candidate.City,
					State: candidate.State,
					Zip: candidate.Zip,
          ProjectService: projectServiceString.toString(),
					ProjectMaterial: projectMaterialString.toString(),
					ProjectEstimateTimeframe: candidate.ProjectEstimateTimeframe,
					Comments: candidate.Comments,
					Language: language
				};

				// send the request
				const request = await fetch(`/api/quote`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(quote)
				});

				const response = await request.json();

				if (response.success) {
					document.querySelectorAll("input").forEach((input) => {
						if (input.type === "checkbox" || input.type === "radio") {
							input.checked = false;
							input.classList.remove("ring-2", "ring-red-500");
						} else {
							input.value = "";
							input.classList.remove("ring-2", "ring-red-500");
						}
					});

          setProjectService([]);
					setProjectMaterial([]);

					setCandidate({
						First: "",
						Last: "",
						Email: "",
						Phone: "",
						Street: "",
						City: "",
						State: "",
						Zip: "",
            ProjectService: projectService,
						ProjectMaterial: projectMaterial,
						ProjectEstimateTimeframe: "",
						Comments: ""
					});

					const toastMessage =
						language === languageOptions.english
							? "Your information has been submitted successfully. You will hear from us soon."
							: "Su información ha sido enviada con éxito. Nos pondremos en contacto con usted pronto.";

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
			} else {
				window.scrollTo(0, 0);

				setIsOpen(true);

				document.querySelectorAll("input").forEach((input) => {
					if (input.type === "checkbox" || input.type === "radio") {
						if (!input.checked && input.value === "") {
							input.classList.add("ring-2", "ring-red-500");
						} else {
							input.classList.remove("ring-2", "ring-red-500");
						}
					} else {
						if (input.value === "") {
							input.classList.add("ring-2", "ring-red-500");
						} else {
							input.classList.remove("ring-2", "ring-red-500");
						}
					}
				});

				// Additional validation for ProjectMaterial
				if (projectMaterial.length === 0) {
					document
						.querySelectorAll("input[name='ProjectMaterial']")
						.forEach((input) => {
							input.classList.add("ring-2", "ring-red-500");
						});
				}
				// Additional validation for ProjectEstimateTimeframe
				if (candidate.ProjectEstimateTimeframe === "") {
					document
						.querySelectorAll("input[name='ProjectEstimateTimeframe']")
						.forEach((input) => {
							input.classList.add("ring-2", "ring-red-500");
						});
				}

				return;
			}
		} catch (error) {
			console.error(error);
			const errorMessage =
				error instanceof Error ? error.message : "An error occurred";
			toast.error(errorMessage);
		} finally {
			setLoading(false);
			window.scrollTo(0, 0);
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit} className="bg-transparent p-8 rounded-2xl">
				<div>
					<div className="border-gray-900/10 dark:border-gray-700 pb-16">
						<h2 className="text-base font-semibold leading-7 text-gray-900 dark:text-gray-100">
							{language === languageOptions.english
								? "Contact Information"
								: "Información de contacto"}
						</h2>
						<p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-200">
							{language === languageOptions.english
								? "Please fill out the form below."
								: "Por favor, complete el siguiente formulario."}
						</p>

						<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
							<div className="sm:col-span-3">
								<Label
									htmlFor="first-name"
									className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">
									{language === languageOptions.english
										? "First name"
										: "Nombre"}
								</Label>
								<div className="mt-2">
									<TextInput
										id="first-name"
										name="First"
										type="text"
										autoComplete="given-name"
										className="block w-full rounded-md border-0 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-inset focus:ring-red -600 sm:text-sm sm:leading-6"
										value={candidate.First}
										onChange={handleChange}
									/>
								</div>
							</div>

							<div className="sm:col-span-3">
								<Label
									htmlFor="last-name"
									className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">
									{language === languageOptions.english
										? "Last name"
										: "Apellido"}
								</Label>
								<div className="mt-2">
									<TextInput
										id="last-name"
										name="Last"
										type="text"
										autoComplete="family-name"
										className="block w-full rounded-md border-0 text-gray-900 dark:text-gray-100  focus:ring-2 focus:ring-inset focus:ring-red  -600 sm:text-sm sm:leading-6"
										value={candidate.Last}
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
										name="Email"
										type="email"
										autoComplete="email"
										className="block w-full rounded-md border-0 text-gray-900 dark:text-gray-100  focus:ring-2 focus:ring-inset focus:ring-red  -600 sm:text-sm sm:leading-6"
										value={candidate.Email}
										onChange={handleChange}
									/>
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
										name="Phone"
										type="phone"
										autoComplete="phone"
										className="block w-full rounded-md border-0 text-gray-900 dark:text-gray-100  focus:ring-2 focus:ring-inset focus:ring-red  -600 sm:text-sm sm:leading-6"
										value={candidate.Phone}
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
										name="Street"
										type="text"
										autoComplete="street-address"
										className="block w-full rounded-md border-0 text-gray-900 dark:text-gray-100  focus:ring-2 focus:ring-inset focus:ring-red  -600 sm:text-sm sm:leading-6"
										value={candidate.Street}
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
										name="City"
										type="text"
										autoComplete="address-level2"
										className="block w-full rounded-md border-0 text-gray-900 dark:text-gray-100  focus:ring-2 focus:ring-inset focus:ring-red  -600 sm:text-sm sm:leading-6"
										value={candidate.City}
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
										name="State"
										type="text"
										autoComplete="address-level1"
										className="block w-full rounded-md border-0 text-gray-900 dark:text-gray-100  focus:ring-2 focus:ring-inset focus:ring-red  -600 sm:text-sm sm:leading-6"
										value={candidate.State}
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
										name="Zip"
										type="text"
										autoComplete="postal-code"
										className="block w-full rounded-md border-0 text-gray-900 dark:text-gray-100  focus:ring-2 focus:ring-inset focus:ring-red  -600 sm:text-sm sm:leading-6"
										value={candidate.Zip}
										onChange={handleChange}
									/>
								</div>
							</div>
						</div>
					</div>

					<div className="border-gray-900/10 dark:border-gray-700 pb-12">
						<h2 className="text-base font-semibold leading-7 text-gray-900 dark:text-gray-100">
							{language === languageOptions.english
								? "Project Information"
								: "Información del proyecto"}
						</h2>
						<p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-200">
							{language === languageOptions.english
								? "Please describe your project in as much detail as possible."
								: "Por favor, describe tu proyecto de la manera mas detallada posible."}
						</p>

						<div className="mt-10 space-y-10">
							<div className="project-information p-4 border border-gray-900/10 dark:border-gray-700 rounded-2xl">
								<fieldset>
									<legend className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">
										{language === languageOptions.english
											? "Service"
											: "Servicio"}
									</legend>
									<p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-200">
										{language === languageOptions.english
											? "Select all that apply to your project. Select other if unsure and add your needs in the comments."
											: "Selecciona todos los que apliquen a tu proyecto. Selecciona otro si no estas seguro y agrega tus necesidades en los comentarios."}
									</p>
									<div className="mt-6 space-y-6">
										<div className="relative flex gap-x-3">
											<div className="flex h-6 items-center">
												<Checkbox
													id="OtherService"
													name="ProjectService"
													className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-600"
													value={
														language === languageOptions.english
															? "Other"
															: "Otro"
													}
													onChange={handleProjectServiceChange}
												/>
											</div>
											<div className="text-sm leading-6">
												<Label
													htmlFor="OtherService"
													className="font-medium text-gray-900 dark:text-gray-100">
													{language === languageOptions.english
														? "Other"
														: "Otro"}
												</Label>
											</div>
										</div>
										{services?.map((service) => (
											<div key={service.id} className="relative flex gap-x-3">
												<div className="flex h-6 items-center">
													<Checkbox
														id={
															language === languageOptions.english
																? service.enname
																: service.spname
														}
														name="ProjectService"
														className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-600"
														value={
															language === languageOptions.english
																? service.enname
																: service.spname
														}
														onChange={handleProjectServiceChange}
													/>
												</div>
												<div className="text-sm leading-6">
													<Label
														htmlFor={
															language === languageOptions.english
																? service.enname
																: service.spname
														}
														className="font-medium text-gray-900 dark:text-gray-100">
														{language === languageOptions.english
															? service.enname
															: service.spname}
													</Label>
												</div>
											</div>
										))}
									</div>
								</fieldset>
							</div>

							<div className="project-information p-4 border border-gray-900/10 dark:border-gray-700 rounded-2xl">
								<fieldset>
									<legend className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">
										{language === languageOptions.english
											? "Project Material"
											: "Material del proyecto"}
									</legend>
									<p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-200">
										{language === languageOptions.english
											? "Select all that apply to your project. Select other if unsure and add your needs in the comments."
											: "Selecciona todos los que apliquen a tu proyecto. Selecciona otro si no estas seguro y agrega tus necesidades en los comentarios."}
									</p>
									<div className="mt-6 space-y-6">
										<div className="relative flex gap-x-3">
											<div className="flex h-6 items-center">
												<Checkbox
													id="OtherMaterial"
													name="ProjectMaterial"
													className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-600"
													value={
														language === languageOptions.english
															? "Other"
															: "Otro"
													}
													onChange={handleProjectMaterialChange}
												/>
											</div>
											<div className="text-sm leading-6">
												<Label
													htmlFor="OtherMaterial"
													className="font-medium text-gray-900 dark:text-gray-100">
													{language === languageOptions.english
														? "Other"
														: "Otro"}
												</Label>
											</div>
										</div>
										{materials?.map((material) => (
											<div key={material.id} className="relative flex gap-x-3">
												<div className="flex h-6 items-center">
													<Checkbox
														id={
															language === languageOptions.english
																? material.enname
																: material.spname
														}
														name="ProjectMaterial"
														className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-600"
														value={
															language === languageOptions.english
																? material.enname
																: material.spname
														}
														onChange={handleProjectMaterialChange}
													/>
												</div>
												<div className="text-sm leading-6">
													<Label
														htmlFor={
															language === languageOptions.english
																? material.enname
																: material.spname
														}
														className="font-medium text-gray-900 dark:text-gray-100">
														{language === languageOptions.english
															? material.enname
															: material.spname}
													</Label>
												</div>
											</div>
										))}
									</div>
								</fieldset>
							</div>

							<div className="project-information p-4 border border-gray-900/10 dark:border-gray-700 rounded-2xl">
								<fieldset>
									<legend className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">
										{language === languageOptions.english
											? "Project Estimate Timeframe"
											: "Tiempo estimado del proyecto"}
									</legend>
									<p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-200">
										{language === languageOptions.english
											? "Let us know when do you want this project to be completed."
											: "Déjanos saber cuando quieres que este proyecto se complete."}
									</p>
									<div className="mt-6 space-y-6">
										<div className="flex items-center gap-x-3">
											<Radio
												id="push-everything"
												name="ProjectEstimateTimeframe"
												className="h-4 w-4 border-gray-300 text-red-600 focus:ring-red-600"
												value="1-2 weeks"
												onChange={handleChange}
											/>
											<Label
												htmlFor="push-everything"
												className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">
												{language === languageOptions.english
													? "1-2 weeks"
													: "1-2 semanas"}
											</Label>
										</div>
										<div className="flex items-center gap-x-3">
											<Radio
												id="push-email"
												name="ProjectEstimateTimeframe"
												className="h-4 w-4 border-gray-300 text-red-600 focus:ring-red-600"
												value="2-3 weeks"
												onChange={handleChange}
											/>
											<Label
												htmlFor="push-email"
												className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">
												{language === languageOptions.english
													? "2-3 weeks"
													: "2-3 semanas"}
											</Label>
										</div>
										<div className="flex items-center gap-x-3">
											<Radio
												id="push-nothing"
												name="ProjectEstimateTimeframe"
												className="h-4 w-4 border-gray-300 text-red-600 focus:ring-red-600"
												value="1 month or later"
												onChange={handleChange}
											/>
											<Label
												htmlFor="push-nothing"
												className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">
												{language === languageOptions.english
													? "1 month or later"
													: "1 mes o más"}
											</Label>
										</div>
									</div>
								</fieldset>
							</div>
							<fieldset>
								<legend className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">
									{language === languageOptions.english
										? "Comments"
										: "Comentarios"}
								</legend>
								<p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-200">
									{language === languageOptions.english
										? "Do you have any comments about your project that we need to know?"
										: "Tienes algún comentario sobre tu proyecto que necesitamos saber?"}
								</p>
								<div className="mt-6 space-y-6">
									<div className="gap-x-3">
										<Textarea
											rows={6}
											id="comments"
											name="Comments"
											className="w-full border border-gray-900/10 dark:border-gray-700  rounded-2xl p-3 text-black"
											value={candidate.Comments}
											onChange={handleChange}
										/>
									</div>
								</div>
							</fieldset>
						</div>
					</div>
				</div>

				<div className="mt-6 flex items-center justify-end gap-x-6">
					<Link
						href="/"
						className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">
						{language === languageOptions.english ? "Cancel" : "Cancelar"}
					</Link>
					<Button
						color={"red"}
						type="submit"
						className="h-auto flex justify-center px-3 py-2 text-sm font-semibold focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-red-800 transition-all">
						{loading && (
							<>
								<Spinner size="sm" className="mr-2" light />
								{language === languageOptions.english
									? "Processing..."
									: "Procesando..."}
							</>
						)}
						{language === languageOptions.english ? "Send" : "Enviar"}
					</Button>
				</div>
			</form>
			<Dialog
				open={isOpen}
				as="div"
				className="relative z-10 focus:outline-none"
				onClose={() => setIsOpen(false)}>
				<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
					<div className="flex min-h-full items-center justify-center p-4">
						<DialogPanel
							transition
							className="border border-red-500 w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0">
							<DialogTitle
								as="h3"
								className="text-base/7 font-medium text-black">
								<strong>
									{language === languageOptions.english
										? "Missing required fields..."
										: "Campos obligatorios faltantes..."}
								</strong>
							</DialogTitle>
							<ul className="mt-2 text-sm/6 text-black">
								{Object.keys(errors).map((key) => {
									return (
										<li key={key} className="text-sm text-red-500">
											{errors[key]}
										</li>
									);
								})}
							</ul>
							<div className="mt-4">
								<Button
									color={"red"}
									className="inline-flex items-center gap-2 py-1.5 px-3 text-sm/6 font-semibold focus:outline-none data-[hover]:bg-red  -800 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-red -800 cursor-pointer transition-all"
									onClick={() => setIsOpen(false)}>
									Ok
								</Button>
							</div>
						</DialogPanel>
					</div>
				</div>
			</Dialog>
		</>
	);
}
