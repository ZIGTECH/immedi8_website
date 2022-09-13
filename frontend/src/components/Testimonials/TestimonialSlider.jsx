import React from "react";

export const TestimonialSlider = ({ image, name, title, content }) => {
	return (
		<>
			<div
				// key={i}
				className="group-hover:bg-slate-100 lg:group-hover:scale-75  md:transform-none h-96 p-5 shadow-xl mx-5 rounded-xl cursor-pointer">
				<p className="text-center lg:mb-20">{content}</p>
				<div className=" mt-5 md:mt-5 lg:mb-5">
					<img
						src={image}
						alt=""
						width="100px"
						className="mx-auto rounded-[50%]"
					/>
				</div>
				<div className="text-center mt-5 lg:mb-20">
					<span className="font-extrabold mb-3">{name}</span>
					<p className="mb-20 font-sans">{title}</p>
				</div>
			</div>
		</>
	);
};
