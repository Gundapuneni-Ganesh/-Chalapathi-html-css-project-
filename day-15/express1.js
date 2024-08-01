var express= require('express');
var app=express();
app.get('/ganesh', function(req,res){
	res.send("welcome to express js world testing my balaji")
});
app.listen(3000);