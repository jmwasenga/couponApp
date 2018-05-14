const mongoose = require('mongoose');
//const Schema = mongoose.Schema;
const { Schema } = mongoose;
const ProductSchema = require('./Product');

const customerSchema  = new Schema({
    phone: String,
    products: [ProductSchema]
	});

module.exports = customerSchema;
