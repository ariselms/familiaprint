const ServiceBanner = ({ category }: { category: string }) => {
  return (
    <div className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 h-60 mt-8 flex items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-950"> {category}</h1>
    </div>
  );
};

export default ServiceBanner;
