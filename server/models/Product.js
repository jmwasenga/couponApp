const mongoose = require('mongoose');
//const Schema = mongoose.Schema;
const { Schema } = mongoose;

const productSchema  = new Schema({
    name: String,
    reserved: { type: Boolean, default: false},
	image: String
});
module.exports = productSchema;
