import React from "react";
import Slider from "react-slick";
import {
	banner1,
	banner2,
	banner3,
	banner4,
	banner5,
	banner6,
	banner7,
} from "../../assets/main";

export const Banner = () => {
	// Slider Settings
	const settings = {
		// dots: true,
		infinite: true,
		// speed: 500,
		// fade: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 5000,
		cssEase: "linear",
		pauseOnHover: true,
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

	// SLIDER DATA
	const data = [
		{
			id: 1,
			photo: banner1,
		},
		{
			id: 2,
			photo: banner2,
		},
		{
			id: 3,
			photo: banner3,
		},
		{
			id: 4,
			photo: banner4,
		},
		{
			id: 5,
			photo: banner5,
		},
		{
			id: 6,
			photo: banner6,
		},
	];

	return (
		<>
			<div className="container bg-black mx-auto border rounded-xl my-10">
				<Slider {...settings}>
					<div className="w-full py-10 mx-auto">
						<img
							src={banner1}
							alt="banner image"
							className="w-full h-[400px]"
						/>
					</div>

					<div className="w-full py-10 mx-auto">
						<img
							src={banner3}
							alt="banner image"
							className="w-full h-[400px]"
						/>
					</div>

					<div className="w-full py-10 mx-auto">
						<img
							src={banner2}
							alt="banner image"
							className="w-full h-[400px]"
						/>
					</div>

					<div className="w-full py-10 mx-auto">
						<img
							src={banner4}
							alt="banner image"
							className="w-full h-[400px]"
						/>
					</div>

					<div className="w-full py-10 mx-auto">
						<img
							src={banner5}
							alt="banner image"
							className="w-full h-[400px]"
						/>
					</div>

					<div className="w-full py-10 mx-auto">
						<img
							src={banner6}
							alt="banner image"
							className="w-full h-[400px]"
						/>
					</div>

					<div className="w-full py-10 mx-auto">
						<img
							src={banner7}
							alt="banner image"
							className="w-full h-[450px]"
						/>
					</div>
				</Slider>
			</div>
		</>
	);
};
