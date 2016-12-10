var express = require('express');
var app = express();

var bodyParser = require("body-parser");
///////req.body is undefined here
//extended: false means you are parsing strings only (not parsing images/videos..etc)
app.use(bodyParser.urlencoded({extended: true}));

//Directory that i want to be made statiic
app.use(express.static('../APP'));


//Tube form
app.post('/tube', function(req,res){
res.send('You typed in '+req.body.tube);
});



app.listen(80);
