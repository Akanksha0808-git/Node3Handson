// const express=require("express")
// const route=express.Router()

const route=require("express").Router()

const{ login}=require("../controller/userController")
const validate=require("../middleware/userMiddleware")
route.get("/login",(req,res)=>{
res.send("this is login")
});
route.get("/signup",(req,res)=>{
    res.send("this is signup")
    });
route.get("/logout",(req,res)=>{
        res.send("this is logout")
        });
//Routing level middleware
route.get("/api/login",validate,login)
module.exports=route;