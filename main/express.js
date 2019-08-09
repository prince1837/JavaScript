const fs=require("fs")
const express = require('express');
const app = express();
app.use(express.json())


app.get('/get',function(req,res){
   var jsondata = fs.readFileSync('data.json');
   var data = JSON.parse(jsondata);
   res.send(data)
})

app.get("/get/:id",(req,res)=>{
   var js_data=fs.readFileSync('data.json');
   var datta=JSON.parse(js_data);
   if (req.params.id<datta.length+1){
      for (i of datta){
         if (i.id==req.params.id){
            res.send(i)
         }
      }
   }else{
      res.send("your id is in-valid please check your id...")
   }
})

app.post('/post',function(req,res){
   let js_data = fs.readFileSync('data.json');
   let data_ = JSON.parse(js_data);
   let data_dic = {
      "id":data_.length+1,
      "name":req.body.name,
      "age":req.body.age
      
   }
   data_.push(data_dic)
   fs.writeFileSync(__dirname+"/data.json",JSON.stringify(data_,null,2))
   res.send(data_)
})

app.put('/put/:id',(req,res)=>{
   var js_data= fs.readFileSync('data.json');
   var data=JSON.parse(js_data);
   dic={
      "id":req.params.id,
      "name":req.body.name,
      "age":req.body.age
   }
   if(req.params.id<data.length+1){
      for (i of data){
         if(i.id==req.params.id){
            var num=data.indexOf(i);
         }
      }
   }else{
      res.send("your id is in-valid")
   }
   data[num]=dic;
   fs.writeFileSync(__dirname+"/data.json",JSON.stringify(data,null,2));
   res.send(data)
})

app.delete("/delete/:id",(req,res)=>{
   var js_data=fs.readFileSync('data.json');
   var data4=JSON.parse(js_data);
   if(req.params.id<data4.length+1){
      for(i of data4){
         if (i.id==req.params.id){
            var num=data4.indexOf(i);
            console.log(num)
            data4.pop(num);
         }
      }
      fs.writeFileSync(__dirname+"/data.json",JSON.stringify(data4,null,2));
      res.send(data4)
   }else{
      res.send("your id is in-valid please check your id...")
   }
})

app.listen(3000,function(){
   console.log("server started......   ")
})
