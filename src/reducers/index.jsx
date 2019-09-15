let defaultState = {}

const starWarAppReducer = (state = defaultState, action) => {
	console.log("action: ", action);
	switch(action.type) {
		
		case 'SEARCH_PERSON':
			return {
				...state,
				data: action.data.data.results
			}

		case 'SHOW_LOADER':
			return {
				...state,
				data: action.payload
			}

		case 'HIDE_LOADER':
			return {
				...state,
				data: action.payload
			}

		case 'GET_PLANETS_LIST':
			return {
				...state,
				data: action.payload
			}
		
		default:
			return state
	}

}

export default starWarAppReducer;