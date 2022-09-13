import React from "react";

// Custom Styles
const style = {
	background: "#2f2f2f",
	// border: "1px solid #222121",
};

export const ServiceBox = ({ icon, title, content }) => {
	return (
		<>
			<div
				style={style}
				// key={i}
				className="group shadow-2xl w-full h-[530px] p-10 mt-8 md:mt-14 transition duration-500 ease-in-out transform sm:hover:scale-105 hover:z-50 hover:border hover:border-blue-800 rounded-sm cursor-pointer ">
				<div
					style={style}
					className="flex mx-auto w-32 rounded-full mb-10 shadow-2xl md:flex-none md:mx-0">
					<img
						src={icon}
						alt=""
						className="group-hover:transition ease-in-out delay-150 group-hover:-translate-y-1 group-hover:scale-110 duration-300 w-full  h-32 rounded-full object-fill"
					/>
				</div>
				<p className="group-hover:text-slate-200 text-center md:text-start text-2xl font-extrabold mb-5 font-sans">
					{title}
				</p>
				<p className="text-center md:text-justify text-xl">{content}</p>
			</div>
		</>
	);
};
