const mongoose = require('mongoose');
//const Schema = mongoose.Schema;
const { Schema } = mongoose;

const userSchema  = new Schema({
    name: String,
	email: String,
	password: String,
	admin: { type: Boolean, default: false}
});

module.exports = userSchema;
