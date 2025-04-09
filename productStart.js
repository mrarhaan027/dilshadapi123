require("dotenv").config()

const connectdb =require("./connetDatabase.js");
const products=require("./auth_schme/schema.js");
const productjson=require("./ecommerce_api.json");




const Start=async()=>{
    try {
        await connectdb(process.env.API_KEYS)
        await products.deleteMany()
        await products.create(productjson)
        console.log("success")
    } catch (error) {
        console.log("try again" , error)
    }
}
Start();