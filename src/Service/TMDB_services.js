const ApiKey = '3a74798a8674fd5cf79df9dffa47e3e2';
const PathApi = 'https://api.themoviedb.org/3/';
const langue = 'FR-fr';

export const getPopular = async (page) => {
	return await fetch(
		PathApi +
			'movie/popular?api_key=' +
			ApiKey +
			'&language=' +
			langue +
			'&page=' +
			page
	)
		.then((response) => response.json())
		.catch((error) => console.error(error));
};

export const searchMovie = async (recherche) => {
	return await fetch(
		PathApi + 'search/movie?api_key=' + ApiKey + '&query=' + recherche
	)
		.then((response) => response.json())
		.catch((error) => console.error(error));
};

export const searchMovieById = async (id) => {
	return await fetch(
		PathApi+'movie/'+id+'?api_key='+ApiKey+'&language=en-US'
	)
		.then((response) => response.json())
		.catch((error) => console.error(error));
};

export const getUpComing = async (page) => {
	return await fetch(
		PathApi +
			'movie/upcoming?api_key=' +
			ApiKey +
			'&language=' +
			langue +
			'&page=' +
			page
	)
		.then((response) => response.json())
		.catch((error) => console.error(error));
};
