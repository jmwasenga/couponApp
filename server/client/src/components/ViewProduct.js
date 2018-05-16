import React, { Component} from 'react';
import { connect } from 'react-redux';
//import * as actions from '../actions';

class ViewProduct extends Component {
	renderProducts() {
		/* Below code works perfectly
		for ( var i in this.props.load) {
				 console.log(this.props.load[i].name);
		}
	    */
		console.log(this.props.load);
		var display = [{}];
		for ( var i in this.props.load) {
			 display.push(this.props.load[i]);
             console.log(i);
		}
		
		return display.map((data) => {
			return <div key={data._id}>product_name: {data.name}</div>;
		});
		
	}
	
	
	render() {
	    return (
	       <div>{this.renderProducts()}</div>
	    );
		
	}
	
}

const mapStateToProps = state => {
	return { load: state.load}
}
export default connect(mapStateToProps)(ViewProduct);