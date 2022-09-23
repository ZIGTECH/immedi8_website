import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const TestimonialSlider = ({ image, name, title, content }) => {
	useEffect(() => {
		AOS.init({
			offset: 120,
			delay: 0,
			duration: 400,
			easing: "ease",
			once: false,
			mirror: false,
			anchorPlacement: "top-bottom",
		});
	}, []);


	return (
		<>
			<div
				// key={i}
				className="bg-white hover:bg-slate-100 lg:hover:scale-75 md:transform-none h-80 mb-32 lg:mb-32 p-5 shadow-xl mx-5 rounded-xl cursor-pointer">
				<svg
					class="h-12 mx-auto mt-5 mb-3 text-blue-400 dark:text-gray-600"
					viewBox="0 0 24 27"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
						fill="currentColor"
					/>
				</svg>
				<p className="text-center lg:mb-10">{content}</p>
				<div className="mt-14 md:mt-5 lg:mb-2 lg:mt-10">
					<img
						data-aos="zoom-in-left" data-aos-duration="3000"
						src={image}
						alt={name}
						className="lg:w-[120px] w-[80px] mx-auto rounded-[50%]"
					/>
				</div>
				<div className="text-center"
					data-aos="slide-up" data-aos-duration="1500"
				>
					<span className="font-extrabold mb-3">{name}</span>
					<p className="mb-20 font-sans">{title}</p>
				</div>
			</div>

			{/* <section class="bg-white dark:bg-gray-900">
				<div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6 cursor-pointer mr-5">
					<figure class="max-w-screen-md mx-auto">
						<svg
							class="h-12 mx-auto  mb-3 text-gray-400 dark:text-gray-600"
							viewBox="0 0 24 27"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
								fill="currentColor"
							/>
						</svg>
						<blockquote>
							<p class="text-lg font-medium text-gray-900 dark:text-white">
								{content}
							</p>
						</blockquote>
						{/* <svg
							class="h-12 mx-auto  mb-3 text-gray-400 dark:text-gray-600"
							viewBox="0 0 24 27"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
								fill="currentColor"
							/>
						</svg> */}

			{/* <figcaption class="flex items-center justify-center mt-6 space-x-3">
				<img
					class="w-12 h-12 rounded-full"
					src={image}
					alt="profile picture"
				/>
				<div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
					<div class="pr-3 font-medium text-gray-900 dark:text-white">
						{name}
					</div>
					<div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
						{title}
					</div>
				</div>
			</figcaption>
		</figure>
				</div >
			</section > * /} */}
		</>
	);
};
