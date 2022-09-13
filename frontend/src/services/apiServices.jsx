import axios from "axios";

// Function to get all our API Data.
const getApiData = async url => {
	const data = await axios
		.get(`http://localhost:1337/api/${url}`)
		.then(res => {
			return res.data;
		})
		.catch(err => {
			return err.message;
		});

	return data;
};

// Get HeroSection Title
export const getHeroTitle = async () => {
	return getApiData("hero-titile");
};

export const getAboutSectionsData = async () => {
	return getApiData("about-sections");
};

export const getProductsData1 = async () => {
	return getApiData("product-sections?populate=*");
};

export const getServiceData = async () => {
	return getApiData("service-sections?populate=*");
};

export const getChooseData = async () => {
	return getApiData("choose-sections?populate=*");
};
export const getTestimonialData = async () => {
	return getApiData("testimonial-sections?populate=*");
};
