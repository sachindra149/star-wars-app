let defaultState = {}

const starWarAppReducer = (state = [], action) => {
	switch(action.type) {
		
		case 'SEARCH_PERSON':
			return {
				...state,
				data: action.data.data.results
			}

		case 'GET_PLANETS_LIST':
			return {
				...state,
				data: action.data
			}

		case 'GET_PLANETS_DETAILS':
			return {
				...state,
				data: action.data
			}
		
		default:
			return state
	}

}

export default starWarAppReducer;