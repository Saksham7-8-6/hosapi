const products = require("../models/products");


const getAllProducts=async (req,res)=>{
    // console.log(req.query);
    const {company,name,featured,sort}=req.query;
    const queryObj={};
    
    if(company){
        queryObj.company=company;
    
    }
    if(featured){
        queryObj.featured=featured;
    }
    if(name){
        queryObj.name={ $regex: name, $options: "i" };
       
    }
    let apidata=products.find(queryObj)
    if(sort){
        let sortfix=sort.replace(","," ");
        apidata=apidata.sort(sortfix);

    }
    const producter=await apidata;
    res.status(200).json({producter});
};
const getAllProductsTesting=async (req,res)=>{
   const {company,name,featured}=req.query;
    const queryObj={};
    
    if(company){
        queryObj.company=company;
    
    }
    if(featured){
        queryObj.featured=featured;
    }
    if(name){
        queryObj.name={$regex : name,$options : "i" };
       
    }
    const producter=await products.find(queryObj);
    res.status(200).json({producter});
};

module.exports={getAllProducts,getAllProductsTesting}