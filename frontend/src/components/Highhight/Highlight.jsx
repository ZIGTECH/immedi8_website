import React, { useEffect, useState } from "react";
import { HiCurrencyDollar } from "react-icons/hi";
import { MdBusinessCenter, MdOutlineMoney } from "react-icons/md";
import { GoGlobe } from "react-icons/go";
import { Boxes } from "../Boxes/Boxes";
import { getProductsData1 } from "../../services/apiServices";

const iconStyle = {
	size: "70px",
	color: "blue",
};

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

export const Highlight = () => {
	const [product1, setproduct1] = useState([]);
	const [product2, setproduct2] = useState([]);
	const [product3, setproduct3] = useState([]);

	const [product1img, setproduct1Img] = useState("");

	const productData = async () => {
		const data = await getProductsData1();
		// console.log(
		// 	"http://localhost:1337/api" +
		// 		data.data[0].attributes.icon.data.attributes.url
		// );

		// setproduct1Img(
		// 	"http://localhost:1337/api" +
		// 		data.data[0].attributes.icon.data.attributes.url
		// );
		setproduct1(data.data[0].attributes);
		setproduct2(data.data[1].attributes);
		setproduct3(data.data[2].attributes);
	};

	useEffect(() => {
		productData();
	}, []);

	return (
		<>
			<div className="container mx-auto p-10 lg:p-20" id="highlight">
				<h2 className="text-center text-blue-900 mb-10">
					Meet Our Products
				</h2>
				<div className="md:grid md:grid-cols-2 md:gap-10 lg:grid-cols-3 p-0">
					<Boxes
						icon={<MdOutlineMoney size={84} />}
						title={product1?.title}
						content={product1?.content}
					/>
					<Boxes
						icon={<GoGlobe size={84} />}
						title={product2?.title}
						content={product2?.content}
					/>
					<Boxes
						icon={<HiCurrencyDollar size={84} />}
						title={product3?.title}
						content={product3?.content}
					/>
				</div>
			</div>
		</>
	);
};
