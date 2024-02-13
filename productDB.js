require("dotenv").config();
const connectDB=require("./db/connect");
const Product=require("./models/products");

const ProductsJson=require("./product.json");

const start=async()=>{
    try{
        await connectDB(process.env.MONGODB_URI);
        await Product.create(ProductsJson);
        console.log("Success")
    }
    catch(error){
        console.log(error);
    }
};
start();