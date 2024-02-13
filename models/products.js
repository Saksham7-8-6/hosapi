const mongoose=require("mongoose");
const productSchema=new mongoose.Schema({
    name:{
       type:String,
       required:true,
    },
    price:{
        type:Number,
        required:[true,"price must be provided"],
    },
    featured:{
        type:Boolean,
        default:false, 
    },
    rating:{
        type:Number,
       default:4.7, 
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    company:{
        type:String,
        enum:{
            values:['apple','samsung','dell','mi'],
            message:`{Value} is not supported`
        }
    },
})

module.exports=mongoose.model('Product',productSchema);


// name:"iphone",
//     price:154,
//     featured:false,
//     rating:3.5,
//     createdAt:"2012-23-2424-23.242.4242",
//     company:"Apple",