var balaji= require('http');
balaji.createServer(function(req,res){
	res.writeHead(200,{'content-type':'text/html'});
	res.write('Hello worlds!');
	res.write(req.url);
	res.end();

}).listen(8080);
 