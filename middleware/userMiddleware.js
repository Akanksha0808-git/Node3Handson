const validate=(req,res,next)=>{
    console.log('specific level middleware')
    next()
    // const age =req.query.age;
    // if(age>=18){
    //     next();
    // }else{
    //     res.send({msg:"user not allowed"})
    // }
}
module.exports=validate;