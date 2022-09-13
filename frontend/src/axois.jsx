import axios from "axios";

export const http = axios.create({
	baseUrl: "http://localhost:1337/api/",
	headers: {
		"content-type": "application/json",
	},
});
