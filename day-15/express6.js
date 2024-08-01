var express=require('express');
var bodyparser=require('body-parser');
var multer=require('multer');
var upload=require('upload');
var app=require('express');

app.get('/',function(re,res){
	res.render('index');

});
app.set('view engine','ejs');
app.set('views','./views');

app.use(bodyparser.urlencode({extended:true}));
app.use(upload.array());


app.use(express.static('public'));

app.post('/',function(req,res){
	console.log(req.body);
	res.send("Received your request!");

});
app.listen(5000);





