var http=require('http');
var uc=require('upper-case');
http.createServer(function(req,res) {
	
		res.writeHead(200,{'content-type':'text/html'});
		res.write(uc.upperCase("wish you all success"));
		return res.end();
	
}).listen(8080);