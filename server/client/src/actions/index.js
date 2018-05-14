import axios from 'axios';
import  {LOAD_PRODUCTS} from './types';

export const fetchProduct = () => dispatch => 
   axios.get('/api/products')
      .then(products => {
		     //console.log(products.data);
		     dispatch({type: LOAD_PRODUCTS, payload: products.data});
		  });
		 