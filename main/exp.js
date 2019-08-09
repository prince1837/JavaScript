const fs=require("fs")
const express = require('express');
const app = express();
app.use(express.json());
app.get("/course",(req,res)=>{
   fs.readFile(__dirname + "/data.json",(err,data)=>{
      if (err){
         console.log(err);
      }else{
         var mydata = JSON.parse(data);
         res.send(mydata);
      };
   });
});
app.post("/post",(req,res)=>{
   fs.readFile(__dirname + "/data.json",(err,data)=>{
      var my_data=JSON.parse(data)
      var DATA={
         "id":my_data.length+1,
         "name":req.body.name,
         "age":req.body.age
     };
     my_data.push(DATA)
     fs.writeFileSync(__dirname+"/data.json",JSON.stringify(my_data,null,2))
     res.send("sucessfull")
   });
})
app.get("/get/:id",(req,res)=>{
   fs.readFile(__dirname+"/data.json",(err,data)=>{
      var parse=JSON.parse(data)
      for (i of parse){
         if(i.id==req.params.id){
            res.send(i)
         }
      }
   })
})
app.put("/put/:id",(req,res)=>{
   fs.readFile(__dirname+"/data.json",(err,data)=>{
      var m_data=JSON.parse(data)
      var dic={
         "id":req.params.id,
         "name":req.body.name,
         "age":req.body.age
      }
      for (i of m_data){
         if(i.id==req.params.id){
            console.log("chal raha hai");
            var num=m_data.indexOf(i)
         }
      }
      m_data[num]=dic
      res.send(m_data)
      fs.writeFileSync(__dirname+"/data.json",JSON.stringify(m_data,null,2))
   })
})
app.listen(3000,function(){
   console.log("server started......   ")
});



