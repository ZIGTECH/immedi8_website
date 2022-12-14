import React from "react";

// Custom Styles
const style = {
	// background: "#2f2f2f",
	background: "white",
	color: 'black'	// border: "1px solid #222121",
};

export const ServiceBox = ({ icon, title, content }) => {
	return (
		<>
			<div
				style={style}
				// key={i}
				className="group shadow-lg w-full h-[530px] md:h-[550px] p-10 mt-8 md:mt-14 md:-mb-12 transition duration-500 ease-in-out transform sm:hover:scale-105 hover:z-50 hover:border hover:border-blue-800 rounded-sm cursor-pointer ">
				<div
					style={style}
					className="flex mx-auto w-32 rounded-full mb-10 shadow-2xl md:flex-none md:mx-0">
					<img
						src={icon}
						alt=""
						className="group-hover:transition ease-in-out delay-150 group-hover:-translate-y-1 group-hover:scale-110 duration-300 w-full  h-32 rounded-full object-fill"
					/>
				</div>
				<p className="group-hover:text-red-700 text-center md:text-start text-2xl text-gray-700 font-bold mb-5 font-sans">
					{title}
				</p>
				<p className="text-center md:text-justify text-xl text-gray-500">{content}</p>
			</div>
		</>
	);
};
