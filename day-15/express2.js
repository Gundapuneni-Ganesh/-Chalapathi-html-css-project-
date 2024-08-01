var express= require('Express');
var app=express();
app.get('/home', function(req,res){
	res.send("welcome to home page,ganesh g")
});

app.post('/contact', function(req,res){
	res.send("you just called the post method at'/contact\n")
});

app.all('/test', function(req,res){
	res.send("http method doesnt have any effect on this route!")
});
app.listen(3000);