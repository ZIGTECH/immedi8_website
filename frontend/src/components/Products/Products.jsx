import React from "react";
import Slider from "react-slick";
import {
	icar,
	icards,
	ievents,
	ifund,
	ifx,
	iwallet,
	igift,
	iloan,
	imoney,
	isure,
	itravel,
} from "../../assets/main";

export const Products = () => {
	const settings = {
		dots: true,
		infinite: true,
		// speed: 500,
		// fade: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 5000,
		cssEase: "linear",
		pauseOnHover: true,
		// fade: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	const productImages = [
		{
			id: 1,
			image: icar,
		},
		{
			id: 1,
			image: icards,
		},
		{
			id: 1,
			image: ievents,
		},
		{
			id: 1,
			image: ifund,
		},
		{
			id: 1,
			image: ifx,
		},
		{
			id: 1,
			image: iwallet,
		},
		{
			id: 1,
			image: igift,
		},
		{
			id: 1,
			image: iloan,
		},
		{
			id: 1,
			image: isure,
		},
		{
			id: 1,
			image: imoney,
		},
		{
			id: 1,
			image: itravel,
		},
	];

	return (
		<>
			<div className="container mx-auto mt-32">
				{/* ---------------------jjhdh------------------------ */}
				<div className="text-center">
					<p className="text-2xl text-blue-700 mb-5">Our Products</p>
					<div>
						<h2 className="font-bold">
							We Ensure Best and Easy Financial <br /> Service For
							Our Client.
						</h2>
					</div>
				</div>

				<div className="p-16 mx-auto">
					<div
						className="w-2/4 mx-auto"
						data-aos="fade-down-left"
						data-aos-duration="3000">
						<Slider {...settings} className="mx-auto my-10 h-44">
							{productImages.map((image, index) => (
								<>
									<div className="cursor-pointer">
										<img
											key={index}
											src={image.image}
											alt=""
											className="w-32 mx-auto"
										/>
									</div>
								</>
							))}
						</Slider>
					</div>
				</div>
			</div>
		</>
	);
};
