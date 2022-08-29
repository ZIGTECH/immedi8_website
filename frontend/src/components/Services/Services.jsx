import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import { Boxes } from "../Boxes/Boxes";
// import { HiCurrencyDollar } from "react-icons/hi";
// import { BsBank } from "react-icons/bs";
import { MdAccountBalance, MdMoney, MdOutlinePayments } from "react-icons/md";
import { MdSendToMobile } from "react-icons/md";

const style = {
	background: "#2f2f2f",
	// border: "1px solid #222121",
};

export const Services = () => {
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

	const data = [
		{
			id: 1,
			title: "Bank Deposit Online",
			content: "We Can Deposit in to Over 1,000 Banks Around The World",
			icon: <MdAccountBalance size={84} />,
		},
		{
			id: 2,
			title: "Mobile-Money",
			content:
				"We Provide Payments to our mobile Wallet and in to our  Integrated E-Wallet Partners.",
			icon: <MdSendToMobile size={84} />,
		},
		{
			id: 3,
			title: "Cash",
			content: "Fast Cash Pickup from our Large Network of Locations",
			icon: <MdMoney size={84} />,
		},
		{
			id: 4,
			title: "Payment Services",
			content:
				"Our E-Payment Solution and Integrated Serfvices, Offers Quick Online Payment for Goods& Services, Utility Bills, Mobile Top-Ups.",
			icon: <MdOutlinePayments size={84} />,
		},
	];

	return (
		<>
			<div className="container mx-auto text-white p-32 pt-20 pb-20">
				<p className="text-2xl text-blue-700 mb-5 ">What We Do</p>

				{/*  */}
				<div className="grid grid-cols-2 gap-10 items-center">
					<div>
						<h2 className="font-bold">
							We Ensure Best Financial <br /> Service For Our
							Client.
						</h2>
					</div>

					{/*  */}
					<div>
						<p className="text-justify">
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Neque accusantium veniam reiciendis facere rem
							aperiam quisquam ipsum in porro, optio debitis,
							deserunt repellat aliquid saepe, eius fuga dolorem!
							Iusto, necessitatibus!
						</p>
					</div>
				</div>

				<div
					className="grid grid-cols-4 gap-10 mt-20"
					data-aos="fade-up"
					data-aos-duration="3000">
					{data.map((d, i) => (
						<>
							<div
								style={style}
								key={i}
								className="group shadow-2xl w-full h-96 p-10 mt-14 transition duration-500 ease-in-out transform sm:hover:scale-105 hover:z-50 hover:border hover:border-blue-800 rounded-sm cursor-pointer ">
								<p className="group-hover:text-slate-200 text-xl font-extrabold mb-3">
									<div
										style={style}
										className="group-hover:text-red-700 w-24 mb-5 shadow-2xl items-center">
										<p
											className=""
											data-aos="fade-down"
											data-aos-duration="3000">
											{d.icon}
										</p>
									</div>
									{d.title}
								</p>
								<span className="text-justify">
									{d.content}
								</span>
							</div>

							{/* <div className="shadow-2xl w-full h-96 p-10 mt-14 transition duration-500 ease-in-out transorm sm:hover:scale-105 hover:z-50 hover:border rounded-sm cursor-pointer ">
								<Boxes
									// style={style}
									// className="bg-black"
									key={i}
									icon={d.icon}
									title={d.title}
									content={d.content}
								/>
							</div> */}
						</>
					))}
				</div>
			</div>
		</>
	);
};
