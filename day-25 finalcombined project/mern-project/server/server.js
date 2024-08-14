const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const app=express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/merncrud");

const itemschema=new mongoose.Schema({name:String});

const Item=mongoose.model('Item',itemschema);

app.get('/items',async(req,res)=>{
	const items=await Item.find()
	res.send(items);
});

app.get('/items/:id',async(req,res)=>{
	const items=await Item.findOne({_id:req.params.id});
	res.send(items);
});

app.post('/items',async(req,res)=>{
	const item=new Item({name:req.body.name});
	await item.save();
	res.send(item);
});

app.put('/items/:id',async(req,res)=>{
	const item=await Item.findByIdAndUpdate(req.params.id,req.body,{new:true});
	res.send(item);
});

app.delete('/items/:id',async(req,res)=>{
	await Item.findByIdAndDelete({_id:req.params.id});
	res.send({message:'Item deleted'});
});

app.listen(5000,()=>{
	console.log('sever is running on port 5000');
});
