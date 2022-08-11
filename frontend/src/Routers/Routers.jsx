import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../Pages/Home/Home";

const Routers = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Navigate to="/home" />} />
				<Route path="/home" element={<Home />} />
				{/* <Route path="/about" element={<About />} />
				<Route path="/service" element={<Service />} />
				<Route path="/portfolio" element={<Portfolio />} />
				<Route path="/products" element={<Products />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<NotFound />} /> */}
			</Routes>
		</div>
	);
};

export default Routers;
