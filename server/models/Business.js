const mongoose = require('mongoose');
//const Schema = mongoose.Schema;
const { Schema } = mongoose;
const ProductSchema = require('./Product');
const userSchema = require('./User');

const businessSchema  = new Schema({
    name: String,
    products: [ProductSchema],
	location: {
		lat: Number,
		long: Number
	},
	users: [userSchema]
});

module.exports = businessSchema;
