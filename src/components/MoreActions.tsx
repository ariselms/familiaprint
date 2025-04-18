import { moreActions, languageOptions } from "@/static";
import Link from "next/link";
import { useLanguageContext } from "@/context/languageContext";

export default function MoreActions () {
  const { language } = useLanguageContext();
  return (
		<div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
			{moreActions.map((action) => (
				<Link
					key={action.id}
					href={action.href}
					className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100">
					<action.icon
						aria-hidden="true"
						className="size-5 flex-none text-gray-400"
					/>
					{language === languageOptions.english ? action.enName : action.spName}
				</Link>
			))}
		</div>
	);
}