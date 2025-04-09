
require("dotenv").config()
const express=require("express");
const app=express();

const connectdb =require("./connetDatabase");
const port=process.env.PORT || 3000;

const router=require("./router");
app.use("/ecommerce" , router)

app.get("/",(req , res)=>{
    res.status(200).send(" this is home page")
});

connectdb().then(()=>{
    app.listen( port, ()=>{
        console.log(`server is running on port ${port}`)
    }) 
})
