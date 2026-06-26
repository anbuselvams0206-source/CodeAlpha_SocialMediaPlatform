const express = require("express");

const router = express.Router();


router.get("/",(req,res)=>{
    res.json("All posts");
});


router.post("/",(req,res)=>{
    res.json("Post created");
});


router.post("/:id/like",(req,res)=>{
    res.json("Post liked");
});


module.exports = router;
