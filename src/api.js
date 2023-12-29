export const geoApiUrl = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';
export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '453666df1dmsh2e69c09d174659dp1e7f77jsna0177af99897',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

/*try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}*/