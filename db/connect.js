const mongoose=require("mongoose");
uri="mongodb+srv://saksham796:YtjYpaZ6yyDNYhZB@cluster0.5bjbxvp.mongodb.net/CompanyDB?retryWrites=true&w=majority";
const connectDB=()=>{
    console.log("connect db")
    return mongoose.connect(uri,
        // {
    //     useNewUrlParser:true,
    //     useUnifiedTopology:true,
    // }
    );
}

module.exports=connectDB;