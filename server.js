/*
MongoClient is never use in this project but still here for integration 
*/

var express = require("express");
var bodyParser = require("body-parser");
var path = require('path'); 

var app = express();
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended:true}));


app.set("PORT", (process.env.PORT || 8005));
app.use(express.static(path.resolve(__dirname, "docs")));

// require("./api")(app);
app.get("*", function(req, res){
 
 
})

app.listen(app.get("PORT"), function () {
  if (process.env.NODE_ENV !== "production") {
    console.log("app listent on", app.get("PORT"));
  }
});
