import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import videoBg from "../../assets/video/immedi8Video.mp4";
// import "./hero-section.css";

const buttonStyle = {
	background: "#b90000",
};

const textStyle = {
	fontSize: "4rem",
	fontWeight: "bold",
};

const videoWrapperStyle = {
	width: "100%",
	height: "100%",
	overflow: "hidden",
};

const videoStyle = {
	width: "100%",
};

const HeroSection = () => {
	return (
		<>
			<div className="hero__slider ">
				<div className="slider__item slider__item-01 mt-0">
					<div className="relative top-0 left-0 h-full">
						<div style={videoWrapperStyle} className="vid">
							<video
								style={videoStyle}
								id="myVideo"
								autoPlay
								loop
								muted>
								<source
									// src="https://youtu.be/KXpSd8Qk2LU"
									src={videoBg}
									type="video/mp4"
								/>
							</video>
						</div>
						{/*  */}
						<div className="content absolute h-full w-full left-0 top-0 z-10 bg-gray-900 opacity-70">
							<div className="container absolute top-1/4 left-48">
								<div
									className="slider__content text-center"
									data-aos="fade-up"
									data-aos-easing="linear"
									data-aos-duration="1000">
									<div className="text-white">
										<p className="text-blue-300 text-extrabold text-3xl">
											FINANCE CONSULTING
										</p>
										<h1 style={textStyle} className="mt-10">
											Business Consulting <br /> For
											Finance.
										</h1>

										<div className="flex justify-center align-center pt-10">
											<button
												style={buttonStyle}
												className="btn reserve__btn bg-blue-900 px-10 py-3 text-bold text-slate-50 rounded hover:animate-bounce font-bold">
												<Link to="#">Discover</Link>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						;{/*  */}
					</div>
				</div>
			</div>
		</>
	);
};
export default HeroSection;
