import { combineReducers } from 'redux';
import prodReducer from './prodReducer';
import loadReducer from './loadReducer';
import { reducer as reduxForm } from 'redux-form';

console.log(prodReducer);
export default combineReducers({
	prod: prodReducer,
	form: reduxForm,
	load: loadReducer
});
