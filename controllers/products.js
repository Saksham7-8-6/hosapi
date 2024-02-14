const products = require("../models/products");


const getAllProducts=async (req,res)=>{
    // console.log(req.query);
    const {company,name,featured,sort,select}=req.query;
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
    if(select){
        let sortfix=select.split(",").join(" ");
        apidata=apidata.select(sortfix);
        
    }
    let page=Number(req.query.page)||2;
    let limit=Number(req.query.limit)||1;
    let skip=(page-1)*limit;
    
    apidata=apidata.skip(skip).limit(limit);
    console.log(queryObj);
    const products=await apidata;
    res.status(200).json({products,nbHits:products.length});
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