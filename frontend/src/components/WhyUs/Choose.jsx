import React, { useEffect, useState } from "react";
import {
	payment,
	rates,
	realtime,
	reliable,
	instantcash,
} from "../../assets/main";
import AOS from "aos";
import "aos/dist/aos.css";
import { getChooseData } from "../../services/apiServices";
import { ChooseBoxes } from "./ChooseBoxes";

const style = {
	background: "white",
	// border: "1px solid #222121",
};

export const Choose = () => {
	const [reliableTrans, setreliableTrans] = useState([]);
	const [instant, setinstant] = useState([]);
	const [secure, setsecure] = useState([]);
	const [tracking, settracking] = useState([]);
	const [lowrates, setlowrates] = useState([]);

	// Get Data
	const chooseData = async () => {
		const data = await getChooseData();
		// console.log(data);

		setreliableTrans(data.data[0].attributes);
		setinstant(data.data[1].attributes);
		setsecure(data.data[2].attributes);
		settracking(data.data[3].attributes);
		setlowrates(data.data[4].attributes);
	};

	useEffect(() => {
		chooseData();
	}, []);

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
			<div className="container mx-auto ">
				<div className="p-14 lg:p-32 lg:pt-20">
					<p
						className="lg:mb-10 text-center lg:text-start text-2xl text-blue-700 mb-5 font-bold"
						data-aos="zoom-in-down"
						data-aos-duration="3000">
						Why Choose Us
					</p>

					<div
						className="md:grid md:grid-cols-2 md:gap-10 lg:grid-cols-3"
						data-aos="zoom-in-up"
						data-aos-duration="3000">
						<ChooseBoxes
							icon={reliable}
							title={reliableTrans?.title}
							content={reliableTrans?.content}
						/>
						<ChooseBoxes
							icon={instantcash}
							title={instant?.title}
							content={instant?.content}
						/>
						<ChooseBoxes
							icon={payment}
							title={secure?.title}
							content={secure?.content}
						/>
						<ChooseBoxes
							icon={realtime}
							title={tracking?.title}
							content={tracking?.content}
						/>
						<ChooseBoxes
							icon={rates}
							title={lowrates?.title}
							content={lowrates?.content}
						/>
					</div>
				</div>
			</div>
		</>
	);
};
