//including model in controller(connection of controller with model)
const Product = require('../models/product.model');

//http://localhost:3000/products/test
exports.test=(req,res)=>
{
res.send("Greetings from Test Controller")
};

exports.product_create=(req,res)=>
{
    let product = new Product(
    {
        name: req.body.name,
        price: req.body.price
    });
    product.save((err)=>
    {
        if(err) {
            return next(err);  
        } 
        res.send("Product is Created Successfully!")
    });
}
exports.product_details=(req,res)=>
{
     Product.findById(req.params.id, (err,product)=>{
    if(err) return next(err);
    res.send(product);
})
}

exports.product_update=(req,res)=>
{
   Product.findByIdAndUpdate(req.params.id, {$set: req.body}, (err, product)=> 
   {
    if(err) return next(err);
    res.send("Product is Updated Successfully!")
   }); 
}

exports.product_delete=(req,res)=>
{
    Product.findByIdAndDelete(req.params.id,(err)=> 
    {
        if(err) return next(err);
        res.send("Product is Deleted Successfully!")
    }); 
}



