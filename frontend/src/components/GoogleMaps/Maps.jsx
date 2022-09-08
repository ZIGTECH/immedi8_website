import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import env from "react-dotenv";

const Maps = props => {
	return (
		<div className="h-full">
			<Map
				google={props.google}
				style={{ width: "100%", height: "70%" }}
				zoom={15}
				initialCenter={{
					lat: 13.4596,
					lng: -16.68583,
				}}
			/>
		</div>
	);
};

export default GoogleApiWrapper({
	apiKey: process.env.GOOGLE_MAP_API_KEY,
})(Maps);
