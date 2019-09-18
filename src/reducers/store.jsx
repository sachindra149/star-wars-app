import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import starWarAppReducer from './index.jsx';
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const store = createStoreWithMiddleware(
	starWarAppReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;