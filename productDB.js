require("dotenv").config();
const connectDB=require("./db/connect");
const products = require("./models/products");
const Product=require("./models/products");

const ProductsJson=require("./product.json");

const start=async()=>{
    try{
        await connectDB(process.env.MONGODB_URI);
        await products.deleteMany();  // delete the prvious data after again calling it 
        await Product.create(ProductsJson);
        console.log("Success")
    }catch(error){
        console.log(error);
    }
};
start();