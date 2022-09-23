import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import AOS from "aos";
import "aos/dist/aos.css";
import { Loading } from "../Contact/Loading";

const style = {
	background: "#1c1b1b",
	color: "white",
};

const style2 = {
	background: "#2f2f2f",
	color: "white",
};

export const Newsletter = () => {
	const [subscriber, setSubscriber] = useState('');
	const [loading, setloading] = useState(false);

	const handleChange = e => {
		setSubscriber(e.target.value)
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

	const handleResetForm = e => {
		setSubscriber("")
	}

	const successMessage = () => toast("Thank you for subscribing to our newsletter!")
	const failMessage = () => toast("Something Went Wrong!")

	const handleSubmit = e => {
		e.preventDefault();

		if (subscriber === "") {
			toast("Please enter your email address")
		} else {
			setloading(true);
			emailjs.sendForm("service_dstfuvq", "template_4s8tea8", e.target, "bR8O-aRORw9F78uWN")
				.then(response => {
					if (response.status === 200) {
						console.log("SUCCESS!", response.status, response.text);
						successMessage();
						handleResetForm()
						setloading(false)

					} else {
						failMessage();
						setloading(false);
					}
					handleResetForm()
				})
				.catch(err => {
					console.log("FAILED...", err.message);
				});
		}


	};



	return (
		<>
			{console.log(subscriber)}
			<div style={style} className="">
				<div className="container mx-auto my-auto p-8">
					<div className="lg:grid lg:grid-cols-2 lg:gap-10 lg:mt-10 lg:items-center">
						<div className="flex items-center">
							<img
								data-aos="zoom-in-down"
								data-aos-duration="3000"
								src={logo}
								alt="The zigtech logo"
								className="hidden lg:block"
								width={100}
							/>
							<div className="ml-5 mb-5 md:w-full">
								<h2 className="md:text-center">
									Newsletter Subscriber
								</h2>
							</div>
						</div>

						{/* form  */}
						<div>
							<form onSubmit={handleSubmit}>
								<div class="relative">
									<input
										name="subscriber"
										value={subscriber}
										type="email"
										class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
										placeholder="Your email address"
										onChange={handleChange}
										required
									/>
									<button
										type="submit"
										class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
										{loading ? (
											<Loading className="mx-auto" />
										) : (
											<span>Subscribe</span>
										)}
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
