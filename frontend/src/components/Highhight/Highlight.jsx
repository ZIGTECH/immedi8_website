import React from "react";
import { HiCurrencyDollar } from "react-icons/hi";
import { MdBusinessCenter, MdOutlineMoney } from "react-icons/md";
import { GoGlobe } from "react-icons/go";
import { Boxes } from "../Boxes/Boxes";

const iconStyle = {
	size: "70px",
	color: "blue",
};

export const Highlight = () => {
	const data = [
		{
			id: 2,
			title: "Money Transfer",
			content:
				"Fast Cash Pickup from our Large Network of Locations, bank Account Deposits, Wallet Payment and payments to our Integrated E-Wallet Partners.",
			icon: <MdOutlineMoney size={84} />,
		},
		{
			id: 3,
			title: "Loans & Lending",
			content:
				"Quick Small Loans for your every day need (Africa), Product Leasing & BNLP Services.",
			icon: <GoGlobe size={84} />,
		},
		{
			id: 3,
			title: "Foreign Exchange & Currency",
			content: "Foreign Currency FX Services (Africa).",
			icon: <HiCurrencyDollar size={84} />,
		},
	];

	return (
		<>
			<div className="container mx-auto p-10 lg:p-20" id="highlight">
				<h2 className="text-center text-blue-900 mb-10">
					Meet Our Products
				</h2>
				<div className="md:grid md:grid-cols-2 md:gap-10 lg:grid-cols-3 p-0">
					{data.map((d, i) => (
						<Boxes
							key={i}
							icon={d.icon}
							title={d.title}
							content={d.content}
						/>
					))}
				</div>
			</div>
		</>
	);
};
