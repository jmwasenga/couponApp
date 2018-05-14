import { FETCH_PRODUCT} from '../actions/types';

var stateDefault = {
	isFetching: false,
	url: undefined,
	
}
export default function(state = stateDefault, action) {
    //console.log(action);
  switch (action.type) {
     case START_LOCATION_FETCH:
	   return {
		   isFetching: true,
		   url: undefined
	   };
	  
	   case COMPLETE_LOCATION_FETCH:
	     return {
			 isFetching: false,
			 url: action.url
		 };
	      
     default: 
         return state;
   }
}