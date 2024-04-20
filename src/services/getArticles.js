const getArticles = async (URL) => {

	try {
		const response = await fetch(URL);

		if (response.ok) {
			const data = await response.json();
			return data;
		} else {
			throw new Error (`Something went wrong... ${response.status}`)
		}

	} catch (error) {
		console.error(error);
		return {};
	}


	

}

export default getArticles;