const ServiceBanner = ({ category, imgUrl }: { category: string, imgUrl?: string }) => {
  return (
		<div
			className="w-full py-32 overflow-hidden text-center h-120 flex flex-col items-center justify-center"
			style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}>
			<h2 className="text-4xl font-bold inline-block px-4 py-2 rounded-2xl backdrop-blur-md text-white dark:text-gray-950">
				{category}
			</h2>
		</div>
	);
};

export default ServiceBanner;
