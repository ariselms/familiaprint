"use client";
import { useLanguageContext } from "@/context/languageContext";
import { useStorageContext } from "@/context/storageContext";
import { useNavigationData } from "@/hooks/navigation";
import { useState, useEffect } from "react";
import {
	Dialog,
	DialogPanel,
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
	Popover,
	PopoverButton,
	PopoverGroup,
	PopoverPanel
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { languageOptions, generalLanguage } from "@/static";
import Link from "next/link";
import MoreActions from "@/components/MoreActions";
import Image from "next/image";
import LanguageSelection from "../LanguageSelection";

export default function HeaderWithDropDown() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const languageContext = useLanguageContext();
	const { language } = useLanguageContext();
	const storageContext = useStorageContext();
	const { categories } = storageContext; // useStorageContext() desestructured
	const navigation = useNavigationData();

	useEffect(() => {
		const currentLanguage = languageContext?.verifyLanguageFromLocalStorage();
		languageContext?.setLanguage(currentLanguage);
	}, []);

	const handleLanguageChange = (lang: string) => {
		const selectedLanguage = languageContext?.setLanguageAndLocalStorage(lang);
		languageContext?.setLanguage(selectedLanguage);
	};

	return (
		<header className="bg-white py-8 px-4 2xl:px-0">
			<nav
				aria-label="Global"
				className="mx-auto flex max-w-7xl items-center justify-between">
				<div className="flex lg:flex-1">
					<Link href="/" className="-m-1.5 p-1.5">
						<span className="sr-only">
							{language === "en"
								? generalLanguage.enWebsiteName
								: generalLanguage.enWebsiteName}
						</span>
						<Image
							width={50}
							height={50}
							alt="Logo"
							src="/logos/horizontal-gradient.svg"
							className="h-8 w-auto"
						/>
					</Link>
				</div>
				<div className="flex lg:hidden">
					<button
						type="button"
						onClick={() => setMobileMenuOpen(true)}
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
						<span className="sr-only">
							{language === languageOptions.english
								? generalLanguage.enAccessibilityMenu
								: generalLanguage.esAccessibilityMenu}
						</span>
						<Bars3Icon aria-hidden="true" className="size-6" />
					</button>
				</div>
				<PopoverGroup className="hidden lg:flex lg:gap-x-10">
					<Popover className="relative">
						<PopoverButton className="flex items-center gap-x-1 text-base font-semibold text-gray-900">
							{language === languageOptions.english
								? generalLanguage.enMenuSpecialties
								: generalLanguage.esMenuSpecialties}
							<ChevronDownIcon
								aria-hidden="true"
								className="size-5 flex-none text-gray-400"
							/>
						</PopoverButton>

						<PopoverPanel
							transition
							className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-blue-500/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in">
							<div className="p-4">
								{categories.map((category) => (
									<div
										key={category.id}
										className="group relative flex items-center gap-x-6 rounded-lg p-4 text-base hover:bg-gray-50">
										<div className="flex-auto">
											<a
												href={"/services/" + category.id}
												className="block font-semibold text-gray-900">
												{language === languageOptions.english
													? category.enName
													: category.spName}
												<span className="absolute inset-0" />
											</a>
										</div>
									</div>
								))}
							</div>
							<MoreActions />
						</PopoverPanel>
					</Popover>

					<Popover className="relative">
						<PopoverButton className="flex items-center gap-x-1 text-base font-semibold text-gray-900">
							{language === languageOptions.english
								? generalLanguage.enMenuCompany
								: generalLanguage.esMenuCompany}
							<ChevronDownIcon
								aria-hidden="true"
								className="size-5 flex-none text-gray-400"
							/>
						</PopoverButton>

						<PopoverPanel
							transition
							className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-blue-500/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in">
							<div className="p-4">
								{navigation.company.map((company) => (
									<div
										key={company.name}
										className="group relative flex items-center gap-x-6 rounded-lg p-4 text-base hover:bg-gray-50">
										<div className="flex-auto">
											<a
												href={company.href}
												className="block font-semibold text-gray-900">
												{language === languageOptions.english
													? company.name
													: company.name}
												<span className="absolute inset-0" />
											</a>
										</div>
									</div>
								))}
							</div>
						</PopoverPanel>
					</Popover>

					<Popover className="relative">
						<PopoverButton className="flex items-center gap-x-1 text-base font-semibold text-gray-900">
							{language === languageOptions.english
								? generalLanguage.enMenuSupport
								: generalLanguage.esMenuSupport}
							<ChevronDownIcon
								aria-hidden="true"
								className="size-5 flex-none text-gray-400"
							/>
						</PopoverButton>

						<PopoverPanel
							transition
							className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-blue-500/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in">
							<div className="p-4">
								{navigation.support.map((support) => (
									<div
										key={support.name}
										className="group relative flex items-center gap-x-6 rounded-lg p-4 text-base hover:bg-gray-50">
										<div className="flex-auto">
											<a
												href={support.href}
												className="block font-semibold text-gray-900">
												{language === languageOptions.english
													? support.name
													: support.name}
												<span className="absolute inset-0" />
											</a>
										</div>
									</div>
								))}
							</div>
						</PopoverPanel>
					</Popover>

					<Popover className="relative">
						<PopoverButton className="flex items-center gap-x-1 text-base font-semibold text-gray-900">
							Legal
							<ChevronDownIcon
								aria-hidden="true"
								className="size-5 flex-none text-gray-400"
							/>
						</PopoverButton>

						<PopoverPanel
							transition
							className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-blue-500/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in">
							<div className="p-4">
								{navigation.legal.map((legal) => (
									<div
										key={legal.name}
										className="group relative flex items-center gap-x-6 rounded-lg p-4 text-base hover:bg-gray-50">
										<div className="flex-auto">
											<a
												href={legal.href}
												className="block font-semibold text-gray-900">
												{language === languageOptions.english
													? legal.name
													: legal.name}
												<span className="absolute inset-0" />
											</a>
										</div>
									</div>
								))}
							</div>
						</PopoverPanel>
					</Popover>
				</PopoverGroup>
				<div className="hidden lg:flex lg:flex-1 items-center lg:justify-end gap-x-12">
					<Link href="/login" className="text-base font-semibold text-gray-900">
						{language === languageOptions.english
							? generalLanguage.enMenuLogin
							: generalLanguage.esMenuLogin}
						<span aria-hidden="true">&rarr;</span>
					</Link>
          <LanguageSelection
            handleLanguageChange={handleLanguageChange}
            languageContext={languageContext}
          />
				</div>
			</nav>
			<Dialog
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}
				className="lg:hidden">
				<div className="fixed inset-0 z-10" />
				<DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-blue-500/10">
					<div className="flex items-center justify-between">
						<Link href="/" className="-m-1.5 p-1.5">
							<span className="sr-only">
								{language === "en"
									? generalLanguage.enWebsiteName
									: generalLanguage.enWebsiteName}
							</span>
							<Image
								width={50}
								height={50}
								alt="Logo"
								src="/logos/horizontal-gradient.svg"
								className="h-8 w-auto"
							/>
						</Link>
						<button
							type="button"
							onClick={() => setMobileMenuOpen(false)}
							className="-m-2.5 rounded-md p-2.5 text-gray-700">
							<span className="sr-only">
								{language === "en"
									? generalLanguage.enAccessibilityCloseMenu
									: generalLanguage.esAccessibilityCloseMenu}
							</span>
							<XMarkIcon aria-hidden="true" className="size-6" />
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/10">
							<div className="space-y-2 py-6">
								<Disclosure as="div" className="-mx-3">
									<DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
										{language === languageOptions.english
											? generalLanguage.enMenuSpecialties
											: generalLanguage.esMenuSpecialties}
										<ChevronDownIcon
											aria-hidden="true"
											className="size-5 flex-none group-data-[open]:rotate-180"
										/>
									</DisclosureButton>
									<DisclosurePanel className="mt-2 space-y-2">
										{categories.map((item, i) => (
											<DisclosureButton
												key={item.id}
												as="a"
												href={"/services/" + item.id}
												className="block rounded-lg py-2 pl-6 pr-3 text-base font-semibold text-gray-900 hover:bg-gray-50">
												{language === languageOptions.english
													? item.enName
													: item.spName}
											</DisclosureButton>
										))}
										<MoreActions />
									</DisclosurePanel>
								</Disclosure>
								<Disclosure as="div" className="-mx-3">
									<DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
										{language === languageOptions.english
											? generalLanguage.enMenuCompany
											: generalLanguage.esMenuCompany}
										<ChevronDownIcon
											aria-hidden="true"
											className="size-5 flex-none group-data-[open]:rotate-180"
										/>
									</DisclosureButton>
									<DisclosurePanel className="mt-2 space-y-2">
										{navigation.company.map((company, i) => (
											<DisclosureButton
												key={company.name}
												as="a"
												href={company.href}
												className="block rounded-lg py-2 pl-6 pr-3 text-base font-semibold text-gray-900 hover:bg-gray-50">
												{company.name}
											</DisclosureButton>
										))}
									</DisclosurePanel>
								</Disclosure>
								<Disclosure as="div" className="-mx-3">
									<DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
										{language === languageOptions.english
											? generalLanguage.enMenuSupport
											: generalLanguage.esMenuSupport}
										<ChevronDownIcon
											aria-hidden="true"
											className="size-5 flex-none group-data-[open]:rotate-180"
										/>
									</DisclosureButton>
									<DisclosurePanel className="mt-2 space-y-2">
										{navigation.support.map((support) => (
											<DisclosureButton
												key={support.name}
												as="a"
												href={support.href}
												className="block rounded-lg py-2 pl-6 pr-3 text-base font-semibold text-gray-900 hover:bg-gray-50">
												{support.name}
											</DisclosureButton>
										))}
									</DisclosurePanel>
								</Disclosure>
								<Disclosure as="div" className="-mx-3">
									<DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
										Legal
										<ChevronDownIcon
											aria-hidden="true"
											className="size-5 flex-none group-data-[open]:rotate-180"
										/>
									</DisclosureButton>
									<DisclosurePanel className="mt-2 space-y-2">
										{navigation.legal.map((legal, i) => (
											<DisclosureButton
												key={legal.name}
												as="a"
												href={legal.href}
												className="block rounded-lg py-2 pl-6 pr-3 text-base font-semibold text-gray-900 hover:bg-gray-50">
												{legal.name}
											</DisclosureButton>
										))}
									</DisclosurePanel>
								</Disclosure>
							</div>
							<div className="py-6">
								<Link
									href="/login"
									className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
									{language === languageOptions.english
										? generalLanguage.enMenuLogin
										: generalLanguage.esMenuLogin}
								</Link>
                <LanguageSelection
                  handleLanguageChange={handleLanguageChange}
                  languageContext={languageContext}
                />
							</div>
						</div>
					</div>
				</DialogPanel>
			</Dialog>
		</header>
	);
}
