const mongoose = require('mongoose');
const Prod = require('../models/Product');
const express  = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

module.exports = (app) => {
   var Product  = mongoose.model('Product', Prod);
   app.post('/api/products', (req, res) => {
       var newProd = new Product({
		   name: req.body.name
	   });
             
	//save the product  
     newProd.save(function(err) {
		 if(err)  console.log("Save Error");
	        console.log("Huray , Prodcut saved");
	 });
	 
	
     
    });
	
	//Fetch products
	app.get('/api/products', (req, res) => {
		Product.find({}, function(err, data) {
			if(err) 
				console.log("There is an error: "+ err);
			else { 
			    res.json(data);
			  
			}		
		});
	});
	
};
	
	