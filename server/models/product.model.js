import mongoose from 'mongoose'
//const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({

name: {
type: String,
trim: true,
unique: 'Name already exists',
required: 'Name is required'
},

description: {
type: String,
trim: true,
required: 'Description is required'
},

price: {
type: Number,
default: 0
 },

 quantity: {
type: Number,
default: 0
},

category: {
    type: String,
    trim: true,
    required: 'Category is required'
    }

}, null);
//module.exports = mongoose.model('User', UserSchema);

export default mongoose.model('Product', ProductSchema);
