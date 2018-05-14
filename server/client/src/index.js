import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware  } from 'redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import 'materialize-css/dist/css/materialize.min.css';

import App from './components/App';
import reducers from './reducers';

//below is for testing send mail
import axios from 'axios';
window.axios = axios;


const store = createStore(reducers, {}, composeWithDevTools(
  applyMiddleware(reduxThunk),
  // other store enhancers if any
));


ReactDOM.render(
     <Provider store={store}>
         <App />
     </Provider>,
     document.querySelector('#root')
);