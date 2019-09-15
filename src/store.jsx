import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import starWarAppReducer from './reducers/index.jsx';

let store = createStore(starWarAppReducer, applyMiddleware(thunk));

export default store;