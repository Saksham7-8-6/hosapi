const products = require("../models/products");


const getAllProducts=async (req,res)=>{
    // console.log(req.query);
    const {company,name}=req.query;
    const queryObj={};
    if(company){
        queryObj.company=company
        console.log(queryObj);
    }
    const producter=await products.find(queryObj);
    res.status(200).json({producter});
};
const getAllProductsTesting=async (req,res)=>{
    const {company}=req.query;
    const queryObj={};
    if(company){
        queryObj.company=company
        console.log(queryObj);
    }
    const producter=await products.find(queryObj);
    res.status(200).json({producter});
};

module.exports={getAllProducts,getAllProductsTesting}