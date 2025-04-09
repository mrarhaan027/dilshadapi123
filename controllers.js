const schemaproduct =require("./auth_schme/schema");


const api=async(req, res)=>{
        

        const productdata=await schemaproduct.find({});  
           res.status(200).json({productdata , totalProduct:productdata.length})
        
        
        
        // res.status(200).send("this is controller page here")
    
}

module.exports = api;