var redis = require("redis"),
client = redis.createClient(process.env.REDIS_URL),
express = require("express"),
app = express(),
path = require("path");



var port = process.env.PORT || 8080;

client.on("error", function(error){
    console.log("Error" + error);
});

app.use(express.static(__dirname + '/views'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.get("/redis", function(req, res){
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

app.listen(port, function(){
    console.log('Our app is running on http://localhost:' + port);
});