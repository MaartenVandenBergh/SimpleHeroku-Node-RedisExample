var redis = require("redis"),
client = redis.createClient(),
express = require("express"),
app = express();

client.on("error", function(error){
    console.log("Error" + error);
});


app.get("/", function(req, res){
   client.get("user:username1", function(error, result){
       if(!result){
           var nmscData = "{'nmsc':'aeaeae'}";
           client.set("user:username1", nmscData);
           res.send(nmscData);
           console.log("responded to get on /");
       }
       else{
           res.send(result);
           console.log("responded to get on /");
       }
   });
});

app.listen("3000", function(){
    console.log("listening on port 3000");
});