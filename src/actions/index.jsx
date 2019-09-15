const SEARCH_PERSON = 'SEARCH_PERSON';
const GET_PLANETS_LIST = 'GET_PLANETS_LIST';
const SHOW_LOADER = 'SHOW_LOADER';
const HIDE_LOADER = 'HIDE_LOADER';

import axios from 'axios';

export function getPerson(id) {
	return(dispatch) => {
		return axios.get('https://swapi.co/api/people/?search='+id)
			.then((response) => {
				dispatch(searchPerson(response));
			})
	}
}

export function getPlanets() {
	return(dispatch) => {
		return axios.get('https://swapi.co/api/planets')
			.then((response) => {
				dispatch(getPlanetsList(response))
			})
	}
}

export function showLoader() {
	return {
		type: 'SHOW_LOADER'
	}
}

export function hideLoader() {
	return {
		type: 'HIDE_LOADER'
	}
}

export function searchPerson(data) {
	return {
		type: 'SEARCH_PERSON',
		data: data
	}
}

export function getPlanetsList(data) {
	console.log("data: ", data);
	return {
		type: 'GET_PLANETS_LIST',
		data: data.data.results
	}
}