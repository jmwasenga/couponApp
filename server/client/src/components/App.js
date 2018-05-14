import React, { Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import ViewProduct from './ViewProduct';



class App extends Component {
    componentDidMount() {
       this.props.fetchProduct();  
       
    }
	
    render () {
		return (
		   <ViewProduct /> 
    );
  }
}

export default connect(null, actions)(App);