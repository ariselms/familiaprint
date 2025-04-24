const ServiceBanner = ({ category, imgUrl }: { category: string, imgUrl?: string }) => {
  return (
		<div
			className="relative w-full py-32 text-center text-black dark:text-white bg-white dark:bg-gray-950 border-y border-gray-200 dark:border-gray-800 overflow-hidden"
			style={{ backgroundImage: `url(${imgUrl})` }}>
			<div className="absolute inset-0 bg-white dark:bg-black opacity-75"></div>
			{/* The overlay */}
			<div className="relative z-10">
				{/* Keeps text above the overlay */}
				<h2 className="text-4xl font-bold"> {category}</h2>
			</div>
		</div>
	);
};

export default ServiceBanner;
