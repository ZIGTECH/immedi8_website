import React from "react";

const style = {
	background: "white",
	// border: "1px solid #222121",
};

export const Boxes = ({ icon, title, content }) => {
	return (
		<div className="">
			<div className="group" data-aos="fade-up" data-aos-duration="3000">
				<>
					<div
						style={style}
						className="group-hover:bg-slate-100 rounded shadow-2xl h-80 p-10 mt-14 group cursor-pointer ">
						<div className="group-hover:animate-pulse group-hover:text-blue-700 transition duration-500 ease-in mb-5 items-center">
							<p
								className=""
								data-aos="fade-right"
								data-aos-duration="3000">
								{icon}
							</p>
						</div>
						<p className="text-xl font-extrabold mb-3 group-hover:text-blue-700">
							{title}
						</p>
						<span className="text-justify">{content}</span>
					</div>
				</>
			</div>
		</div>
	);
};
