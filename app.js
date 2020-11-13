var express = require('express');
var cors = require('cors');

var app=express();
app.use(cors());
var port=3500;
var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/bdd");

var coursSchema=mongoose.Schema({
    titre: String,
    date:{
    	type:String,
    	format:Date,
    },
    description:String,
    coeff:Number,
});

var cours=mongoose.model("cours", coursSchema);

var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var handleCORS = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With,Content-Type,Accept');
  next();
}
app.use(handleCORS);

app.get("/cours",function(req,res){
	cours.find({})
		.exec(function(err,cours){
			if(err){
				console.log("erreur")
			}else{
				res.json(cours);
			}
		})
});

app.get("/cours/:id",function(req,res){
	cours.findById(req.params.id)
		.exec(function(err,cours){
			if(err){
				console.log("erreur")
			}else{
				res.json(cours);
			}
		})
});

app.post("/addCours",function(req,res){
	var c=new cours();
	c.titre=req.body.titre;
	c.date=req.body.date;
	c.description=req.body.description;
	c.coeff=req.body.coeff;
	
	c.save(function(err,insertedCours){
	if(err){
				console.log("erreur")
			}else{
				res.json(insertedCours);
				console.log("insere")
			}
	});
});

app.put("/updateCours/:id",function(req,res){
	cours.findByIdAndUpdate(req.params.id,
	{
		$set:{titre:req.body.titre,date:req.body.date,description:req.body.description,coeff:req.body.coeff
	}
	},
	{	
		new:true
	},
	function(err,updatedCours){
		if(err){
				console.log("erreur")
			}else{
				res.json(updatedCours);
				console.log("updated")
			}
	})	
});

app.delete("/deleteCours/:id",function(req,res){
	cours.findByIdAndRemove(req.params.id,
		function(err,deletedCours){
			if(err){
				res.send("erreur")
			}else{
				res.json(deletedCours);
				console.log("deleted")
			}
		});
});

app.listen(port,()=>{
	console.log("server launched on "+ port);
})