import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../../assets/images/testimonials.jpg";
import { kjaw1 } from "../../assets/main";
import Slider from "react-slick";
import { TestimonialSlider } from "./TestimonialSlider";
import { getTestimonialData } from "../../services/apiServices";

const style = {
	background: "#2f2f2f",
	// border: "1px solid #222121",
};

export const Testimonials = () => {
	const [testimonial1, settestimonial1] = useState([]);
	const [testimonial2, settestimonial2] = useState([]);
	const [testimonial3, settestimonial3] = useState([]);

	const testimonialData = async () => {
		const data = await getTestimonialData();
		// console.log(data);
		settestimonial1(data.data[0].attributes);
		settestimonial2(data.data[1].attributes);
		settestimonial3(data.data[2].attributes);
	};

	useEffect(() => {
		testimonialData();
	}, []);

	const settings = {
		dots: true,
		infinite: true,
		// speed: 500,
		// fade: true,
		slidesToShow: 3,
		slidesToScroll: 3,
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
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
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
			<div className="container mx-auto p-10 lg:p-32 lg:pt-20 lg:pb-20">
				<p
					className="text-center lg:text-start text-2xl text-blue-700 mb-5 font-bold"
					data-aos="zoom-in-down"
					data-aos-duration="3000">
					Testimonials
				</p>

				{/*  */}
				<div className="lg:grid lg:grid-cols-2 lg:gap-10 items-center">
					<div
						className="text-center lg:text-start mb-5"
						data-aos="zoom-in-down"
						data-aos-duration="3000">
						<h2 className="font-bold">
							What Our Clients says About <br /> Immedi8 Finance.
						</h2>
					</div>

					{/*  */}
					<div data-aos="fade-left" data-aos-duration="3000">
						<p className="text-center">
							We became the preferred choice for our customers because we emphasized reliability, affordability, and prompt delivery of transactions at the core of our services.
						</p>
					</div>
				</div>

				<Slider
					{...settings}
					className="mx-auto my-10 md:my-20 lg:my-20"
					data-aos="zoom-out-up"
					data-aos-duration="1500"
				>
					<TestimonialSlider
						image={kjaw1}
						name={testimonial1?.name}
						title={testimonial1?.title}
						content={testimonial1?.content}

					/>
					<TestimonialSlider
						image={img1}
						name={testimonial2?.name}
						title={testimonial2?.title}
						content={testimonial2?.content}
					/>
					<TestimonialSlider
						image={img1}
						name={testimonial2?.name}
						title={testimonial2?.title}
						content={testimonial2?.content}
					/>
					<TestimonialSlider
						image={img1}
						name={testimonial2?.name}
						title={testimonial2?.title}
						content={testimonial2?.content}
					/>{" "}
					<TestimonialSlider
						image={img1}
						name={testimonial2?.name}
						title={testimonial2?.title}
						content={testimonial2?.content}
					/>
					{/* </div> */}
				</Slider>
			</div>
		</>
	);
};
