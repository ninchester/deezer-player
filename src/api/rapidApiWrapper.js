class RapidApiWrapper {

	findTracksByTitle(title) {
		return fetch("https://rapidapi.p.rapidapi.com/search?q=" + title, {
			"method": "GET",
			"headers": {
				"x-rapidapi-key": `${process.env.REACT_APP_RAPID_API_KEY}`,
				"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
			}
		});
		
	}
}

export default new RapidApiWrapper();