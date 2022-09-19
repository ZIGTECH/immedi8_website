import React from "react";

const style = {
	background: "white",
	// border: "1px solid #222121",
};

export const Boxes = ({ icon, title, content }) => {
	// console.log("testtt");
	// console.log(icon);
	return (
		<div className="">
			<div className="group" data-aos="slide-up" data-aos-duration="3000">
				<>
					<div
						style={style}
						className="mb-5 group-hover:bg-slate-100 rounded-xl shadow-2xl h-80 p-10 group cursor-pointer border-b-4 border-blue-900">
						<div className="flex group-hover:animate-pulse group-hover:text-blue-700 transition duration-500 ease-in mb-5">
							<p
								// src={icon}
								className="mx-auto"
								data-aos="fade-right"
								data-aos-duration="3000"
								alt={title}>
								{icon}
							</p>
						</div>
						<p className="text-xl font-extrabold mb-3 group-hover:text-blue-700 text-center">
							{title}
						</p>
						<div className="text-center">
							<span className="text-center">{content}</span>
						</div>
					</div>
				</>
			</div>
		</div>
	);
};
