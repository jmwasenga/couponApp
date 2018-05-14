import React, { Component} from 'react';
import { connect } from 'react-redux';
//import * as actions from '../actions';

class ViewProduct extends Component {
	renderProducts() {
		var arr = {listing: []};
		arr.listing = this.props.load;
		console.log(arr);
		return (JSON.stringify(arr));
    
	}
	
	render() {
	    return (
	       <div>{this.renderProducts()}</div>
	    );
		
	}
	
}

/*
const mapStateToProps = state => {	
   return { myProducts: state.prod};
};
*/
const mapStateToProps = state => {
	return { load: state.load}
}
export default connect(mapStateToProps)(ViewProduct);