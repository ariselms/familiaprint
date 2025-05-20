import styles from "./ServicesContent.module.css";

export default function ServicesContent({
	language,
	languageOptions,
	service
}: {
	language: string;
	languageOptions: any;
	service: any;
}) {
	return (
		<>
			<div
        className={styles.contentWrapper}
				dangerouslySetInnerHTML={{
					__html:
						language === languageOptions.english
							? service?.endescription!
							: service?.spdescription!
				}}
			/>
		</>
	);
}
