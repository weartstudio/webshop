import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const api = new WooCommerceRestApi({
  url: "https://app.boomi.hu",
  consumerKey: process.env.CK,
  consumerSecret: process.env.CS,
  version: "wc/v3",
	axiosConfig:{
		headers:{
			"Content-Type": "application/json;charset=UTF-8"
			}
	}
});

export default api;