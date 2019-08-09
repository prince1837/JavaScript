const express=require("express");
const jwt=require("jsonwebtoken");
var app=(express());
app.use(express.json())

app.post("/login",function(req,res){
    var Dic={
        id:1,
        user_name:"prince",
        password:"shivansh"
    };
    jwt.sign({Dic},"secretkey",(err,token)=>{
        res.json(token)
    });
});
function checktoken(req,res,next){
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(403).send("you dont have token...");
    };
};
app.post("/signup",(req,res)=>{
    const 
})
app.post("/next",checktoken,(req,res)=>{
    jwt.verify(req.token,"secretkey",(err,acc)=>{
        console.log(acc["Dic"],req.body)
        if (acc["Dic"].user_name==req.body.user_name){
            if(acc["Dic"].password==req.body.password){
                res.send("you have token")
            }else{
                res.send("wrong password")
            };
        }else{
            res.send("you don't have token  ")
        };
    });
});
app.listen(5000,()=>{console.log("server started...........  ")})
