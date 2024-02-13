const products = require("../models/products");

const getAllProducts=async (req,res)=>{
    const producter=await products.find({});
    res.status(200).json({producter});
};
const getAllProductsTesting=async (req,res)=>{
    res.status(200).json({producter});
};

module.exports={getAllProducts,getAllProductsTesting}