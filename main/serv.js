const fs=require("fs")
const express = require('express');
const app = express();
app.use(express.json())

// ==========================================================================================

app.get('/get',function(req,res){
   var jsondata = fs.readFileSync('courses1.json');
   var data = JSON.parse(jsondata);
   res.send(data)
})
// =====================================================================================================

app.get("/get/:id",(req,res)=>{
   var js_data=fs.readFileSync('courses1.json');
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

// ======================================================================================================

app.get("/get/:id1/exercises",(req,res)=>{
    var get_data=fs.readFileSync("courses1.json");
    var got_data=JSON.parse(get_data);
    var id1=req.params.id1
    if (id1<got_data.length+1){
      for (i of got_data){
         if (id1==i.id){
            res.send(i)
         }
      }
    }else{
      res.send("your id1 is in-valid please check your id...")
   }

})

// =====================================================================================================================

app.get("/get/:id1/exercises/:id2",(req,res)=>{
   var get_data=fs.readFileSync("courses1.json");
   var got_data=JSON.parse(get_data);
   var id1=req.params.id1
   var id2=req.params.id2
   if (id1<got_data.length+1){
     for (i of got_data){
        if (id1==i.id){
          if (id2<i.exercises.length+1){
            for (j of i.exercises){
               if (id2==j.id){
                  res.send(j)
               }
            }
          }else{
            res.send("your id2 is in-valid please check your id...")
         }
        }
     }
   }else{
     res.send("your id1 is in-valid please check your id...")
    }

})

// =========================================================================================

app.get("/get/:id1/exercises/:id2/submission/:id3",(req,res)=>{
   var get_data=fs.readFileSync("courses1.json");
   var got_data=JSON.parse(get_data);
   var id1=req.params.id1
   var id2=req.params.id2
   var id3=req.params.id3
   if (id1<got_data.length+1){
     for (i of got_data){
        if (id1==i.id){
          if (id2<i.exercises.length+1){
            for (j of i.exercises){
               if (id2==j.id){
                  if(id3<j.submission.length+1){
                     for (k of j.submission){
                        if (id3==k.id){
                           res.send(k)
                        }
                     }
                  }else{
                     res.send("your id3 is in-valid please check your id...")
                  }
               }
            }
          }else{
            res.send("your id2 is in-valid please check your id...")
          }
        }
     }
   }else{
     res.send("your id1 is in-valid please check your id...")
    }

})
// ==================================================================================================

app.post('/post',function(req,res){
   let js_data = fs.readFileSync('courses1.json');
   let data_ = JSON.parse(js_data);
   let data_dic = {
      "id":data_.length+1,
      "name":req.body.name,
      "exercises":[]
   }
   data_.push(data_dic)
   fs.writeFileSync(__dirname+"/courses1.json",JSON.stringify(data_,null,2))
   res.send(data_)
})

// =====================================================================================================

app.post("/post/:id1/exercises",(req,res)=>{
   var get_data=fs.readFileSync('courses1.json');
   var got_data=JSON.parse(get_data);
   var id1=req.params.id1
   if (id1<got_data.length+1){
      for (i of got_data){
         if (id1==i.id){
            let data_dic = {
               "id":i.data.length+1,
               "name":req.body.name,
               "detail":req.body.detail,
               "submission":[]
            }
            i.exercises.push(data_dic)
            res.send(i.exercises)
            fs.writeFileSync(__dirname+"/courses1.json",JSON.stringify(got_data,null,2))
         }
      }
   }else{
      res.send("your id is in-valid please check your id...")
   }
})

// ================================================================================================================

app.post("/post/:id1/exercises/:id2/submission",(req,res)=>{
   var get_data=fs.readFileSync('courses1.json');
   var got_data=JSON.parse(get_data);
   var id1=req.params.id1
   var id2=req.params.id2
   if (id1<got_data.length+1){
      for (i of got_data){
         if (id1==i.id){
            if (id2<i.exercises.length+1){
               for (j of i.exercises){
                  if (id2==j.id){
                     let data_dic = {
                        "id":j.submission.length+1,
                        "name":req.body.name,
                        "detail":req.body.detail,
                        "content":req.body.content
                     }
                     j.submission.push(data_dic)
                     res.send(j.submission)
                     fs.writeFileSync(__dirname+"/courses1.json",JSON.stringify(got_data,null,2))
                  }
               }
            }else{
               res.send("your id2 is in-valid please check your id...")
            }
         }    
      }
   }else{
      res.send("your id1 is in-valid please check your id...")
   }
})

// =================================================================================================

app.put('/put/:id',(req,res)=>{
   var js_data= fs.readFileSync('courses1.json');
   var data=JSON.parse(js_data);
   if(req.params.id<data.length+1){
      for (i of data){
         var exercise=i.exercises
         if(i.id==req.params.id){
            dic={
               "id":req.params.id,
               "name":req.body.name,
               "exercises":exercise
            }
            var num=data.indexOf(i);
         }
      }
   }else{
      res.send("your id is in-valid")
   }
   data[num]=dic;
   fs.writeFileSync(__dirname+"/courses1.json",JSON.stringify(data,null,2));
   res.send(data[num])
})

// ==========================================================================================

app.put("/put/:id1/exercises/:id2",(req,res)=>{
   var get_data=fs.readFileSync('courses1.json');
   var got_data=JSON.parse(get_data)
   var id1=req.params.id1;
   var id2=req.params.id2;
   if (id1<got_data.length+1){
      for(i of got_data){
         if (id1==i.id){
            if (id2<i.exercises.length+1){
               for (j of i.exercises){
                  var sub_data=j.submission
                  let data_dic = {
                     "id":id2,
                     "name":req.body.name,
                     "detail":req.body.detail,
                     "submission":sub_data
                  }
                  if (id2==j.id){
                     var num=i.exercises.indexOf(j)
                     i.exercises[num]=data_dic;
                     fs.writeFileSync(__dirname+"/courses1.json",JSON.stringify(got_data,null,2));
                     res.send(sub_data)
                  }
               }
            }else{
               res.send("your exercises id2 not valid in file please check your exercise id..  ")
            }
         }
      }
   }else{
      res.send("your id1 is in-valid please check your id...")
   }
})

// =======================================================================================================

app.put("/put/:id1/exercises/:id2/submission/:id3",(req,res)=>{
   var get_data=fs.readFileSync('courses1.json');
   var got_data=JSON.parse(get_data)
   var id1=req.params.id1;
   var id2=req.params.id2;
   var id3=req.params.id3;
   if (id1<got_data.length+1){
      for(i of got_data){
         if (id1==i.id){
            if (id2<i.exercises.length+1){
               for (j of i.exercises){
                  if (id3<j.submission.length+1){
                     for (k of j.submission){
                        let data_dic = {
                           "id":id3,
                           "name":req.body.name,
                           "detail":req.body.detail,
                           "content":req.body.content
                        }
                        if (id3==k.id){
                           var num=j.submission.indexOf(k)
                           j.submission[num]=data_dic;
                           fs.writeFileSync(__dirname+"/courses1.json",JSON.stringify(got_data,null,2));
                           res.send(j.submission)
                        }
                     }
                  }else{
                     res.send("your exercises id3 not valid in file please check your exercise id..  ")
                  }
               }
            }else{
               res.send("your exercises id2 not valid in file please check your exercise id..  ")
            }
         }
      }
   }else{
      res.send("your id1 is in-valid please check your id...")
   }
})

// ====================================================================================================================

app.delete("/delete/:id",(req,res)=>{
   var js_data=fs.readFileSync('courses1.json');
   var data4=JSON.parse(js_data);
   if(req.params.id<data4.length+1){
      for(i of data4){
         if (i.id==req.params.id){
            var num=data4.indexOf(i);
            data4.pop(num);
         }
      }
      fs.writeFileSync(__dirname+"/courses1.json",JSON.stringify(data4,null,2));
      res.send(data4)
   }else{
      res.send("your id is in-valid please check your id...")
   }
})

// ==================================================================================================================

app.delete("/delete/:id1/exercises/:id2",(req,res)=>{
   var get_data=fs.readFileSync('courses1.json');
   var got_data=JSON.parse(get_data)
   var id1=req.params.id1;
   var id2=req.params.id2;
   if (id1<got_data.length+1){
      for(i of got_data){
         if (id1==i.id){
            if (id2<i.exercises.length+1){
               for (j of i.exercises){
                  if (id2==j.id){
                     var num=i.exercises.indexOf(j)
                     i.exercises.pop(num)
                     fs.writeFileSync(__dirname+"/courses1.json",JSON.stringify(got_data,null,2));
                     res.send(j)
                  }
               }
            }
            else{
               res.send("your id2 is in-valid please check your id...")
            }
         }
      }
   }else{
      res.send("your id1 is in-valid please check your id...")
   }
})

// ========================================================================================================

app.delete("/delete/:id1/exercises/:id2/submission/:id3",(req,res)=>{
   var get_data=fs.readFileSync('courses1.json');
   var got_data=JSON.parse(get_data)
   var id1=req.params.id1;
   var id2=req.params.id2;
   var id3=req.params.id3;
   if (id1<got_data.length+1){
      for(i of got_data){
         if (id1==i.id){
            if (id2<i.exercises.length+1){
               for (j of i.exercises){
                  if (id2==j.id){
                     if(id3<j.submission.length+1){
                        for (k of j.submission){
                           if (id3==k.id){
                              var num=j.submission.indexOf(k)
                              j.submission.pop(num)
                              fs.writeFileSync(__dirname+"/courses1.json",JSON.stringify(got_data,null,2))
                              res.send(k)
                           }
                        }
                     } else{
                        res.send("your id3 is in-valid please check your id...")
                     }
                  }
               }
            } else{
               res.send("your id2 is in-valid please check your id...")
            }
         }
      }
   } else{
      res.send("your id1 is in-valid please check your id...")
   }
})

app.listen(3000,function(){
   console.log("server started......   ")
})
