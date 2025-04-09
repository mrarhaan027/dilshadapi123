

const mongoose=require("mongoose");


const URI=process.env.API_KEYS;
mongoose.connect(URI)

const connectionDB=async()=>{
    try {
        console.log("server is connet with database")
        await mongoose.connect(URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
} catch (error) {
    console.log("database connetion  is crashed", error)
}
};
module.exports=connectionDB;