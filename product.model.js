const mongoose = require('mongoose');
//including the mongoose method Schema
const Schema = mongoose.Schema;

//defining the product schema
let ProductSchema = new Schema({
    name:{type: String, required: true, max: 100},
    price:{type: Number, required: true}
});
//exporting the model for others to access it
module.exports=mongoose.model('Product', ProductSchema);