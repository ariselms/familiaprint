import React from "react";

const Spinner = () => {
	return (
		<div className="py-32">
			<div className="flex items-center justify-center">
				<div className="w-16 h-16 border-b-4 border-blue-400 rounded-full animate-spin transform-origin-center"></div>
			</div>
		</div>
	);
};

export default Spinner;