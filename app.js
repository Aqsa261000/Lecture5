const express=require('express');
const bodyParser=require('body-parser');
const mongoose = require('mongoose');
//include the router(connection of app with router)
const productrouter = require('./routes/product.route');
//const { Mongoose } = require('mongoose');

const app=express();

//--------------------Connecting it with Mongoose Database------------------------------------
mongoose.connect("mongodb://localhost/productsDb",{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>
{
console.log("Connected to the database");
})
.catch(err =>
{
console.log("Cannot connect to the database", err);
process.exit();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//http://localhost:3000/products
app.use('/products',productrouter);

app.listen(3000,(res,req)=>
{
console.log("Server is running at port 3000");
});