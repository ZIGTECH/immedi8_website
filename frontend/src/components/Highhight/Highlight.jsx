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
			title: "Money Transfer / International Remittance",
			content:
				"Fast Cash Pickup from our Large Network of Locations, We Provide Payments to our mobile Wallet and in to our  Integrated E-Wallet Partners.",
			icon: <MdOutlineMoney size={84} />,
		},
		{
			id: 3,
			title: "Loans & Lending",
			content: "Fast Cash Pickup from our Large Network of Locations",
			icon: <GoGlobe size={84} />,
		},
		{
			id: 3,
			title: "Foreign Exchange & Currency",
			content: "Fast Cash Pickup from our Large Network of Locations",
			icon: <HiCurrencyDollar size={84} />,
		},
	];

	return (
		<>
			<div className="container mx-auto p-32" id="highlight">
				<div className="grid grid-cols-3 gap-10">
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
