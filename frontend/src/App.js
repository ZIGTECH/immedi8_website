import React from "react";
import { Home } from "./Pages/Home/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer } from 'react-toastify';

function App () {
	return (
		<>
			<Home />
			<ToastContainer />
		</>
	)
}

export default App;
