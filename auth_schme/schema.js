
const mongoose =require("mongoose");

const ShemaProduct = new mongoose.Schema({

    name:{
        type:String,
        required:true,
        
    },
    price:{
        type:Number,
        required:true,
    },
    company:{
        type:String,
    
    },
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    featured:{
        type:String,
    
    },
    colors:{
        type:Array
    }

});

const productModel = mongoose.model( "products", ShemaProduct);

module.exports=productModel;

