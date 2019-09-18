const SEARCH_PERSON = 'SEARCH_PERSON';
const GET_PLANETS_LIST = 'GET_PLANETS_LIST';
const GET_PLANETS_DETAILS = 'GET_PLANETS_DETAILS';

import store from '../reducers/store.jsx';
import axios from 'axios';

export function getPerson(id) {
	console.log("id: ", id);
	return axios.get('https://swapi.co/api/people/?search='+id)
		.then((response) => {
			store.dispatch(searchPerson(response));
		})
}

export function getPlanets() {
	return axios.get('https://swapi.co/api/planets')
		.then((response) => {
			store.dispatch(getPlanetsList(response))
		})
}

export function getPlanetsDetails(name) {
	return axios.get('https://swapi.co/api/planets/?search='+name)
		.then((response) => {
			store.dispatch(getPlanetsDetailedDesc(response))
		})
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
	console.log("data: ", data);
	return {
		type: 'SEARCH_PERSON',
		data: data
	}
}

export function getPlanetsList(data) {
	return {
		type: 'GET_PLANETS_LIST',
		data: data.data.results
	}
}

export function getPlanetsDetailedDesc(data) {
	return {
		type: 'GET_PLANETS_DETAILS',
		data: data.data.results
	}
}