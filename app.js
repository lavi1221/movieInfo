const express=require("express");
const ejs=require("ejs");
const fs = require('fs');

const app=express();
app.use(express.static("public"));
app.set('view engine','ejs');


app.get("/",function(req,res){
  fs.readFile('movie.json',function(error,data){
    if(error){
      res.status(500).end();
    }else{
      var movies = JSON.parse(data);

      res.render('index.ejs', {
       movies : movies
      });
    }
  });
});

app.get("/:customId",function(req,res){
    fs.readFile('movie.json',function(error,data){
      if(error){
        res.status(500).end();
      }else{
        var val=req.params.customId;
        var movie = JSON.parse(data);
        for (var i = 0; i < movie.length; i++){
            if (movie[i].id == val){
            break;
            }
        }

        res.render('movie.ejs',{
          movie : movie[i]
        })
      }
    });
  });



let port=process.env.PORT;
if( port == null || port=="" ){
  port=3000;
}
app.listen(port,function(){
  console.log("Server is started");
});
