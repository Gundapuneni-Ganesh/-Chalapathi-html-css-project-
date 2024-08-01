var express= require('Express');
var router=express.Router();
router.get('/', function(req,res){
	res.send("GET rote on this page");
});

router.post('/', function(req,res){
	res.send("POST route on things");
});
module.exports=router;
