var express= require('express');
var app=express();
app.get('/:id',function(req,res){
	res.send("the id is specified is"+req.params.id);
});
app.listen(4000);