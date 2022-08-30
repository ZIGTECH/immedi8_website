import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const Maps = props => {
	return (
		<div className="">
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
	apiKey: "AIzaSyCsUyashaHsw4wrntQ_QCbFLHSn2BK2yS0",
})(Maps);
