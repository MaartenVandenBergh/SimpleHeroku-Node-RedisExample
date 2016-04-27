var redis = require("redis"),
redis_url = process.env.REDIS_URL || '',
client = redis.createClient(redis_url),
express = require("express"),
app = express(),
path = require("path");



var port = process.env.PORT || 8080;

client.on("error", function(error){
    console.log("Error" + error);
});

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.render("index");
});

app.get("/nmsc", function(req, res){
   var doneMessage = "responded to get on /nmsc";
   client.get("user:username1", function(error, result){
       var nmscData = result;
       if(!nmscData){
           nmscData = "{'nmsc':'aeaeae'}";
           client.set("user:username1", nmscData);
           res.send(nmscData);
       }

       res.send(nmscData);
       console.log(doneMessage);
   });
});

app.listen(port, function(){
    console.log('Our app is running on http://localhost:' + port);
});