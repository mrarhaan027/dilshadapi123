const express = require('express');
const router=express.Router()

const api =require("./controllers")


router.route("/api").get(api)

module.exports=router;
