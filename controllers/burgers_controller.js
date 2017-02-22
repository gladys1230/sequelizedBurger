var express = require("express");
var router = express.Router();

//data model
var db = require("../models");

//get using seq findAll method
router.get("/", function(req, res){
	db.Burger.findAll({
		order: "burger_name DESC",
	}).then(function (data){
		var burgerObj = {
			burgers: data
		};
		res.render("index", burgerObj);
	});
});

//Post seq create with name
router.post("/burgers/create", function(req, res){
	console.log(req.body);
	var burgerName = req.body.burger_name;
	db.Burger.create({
		burger_name: burgerName
	}).then(function (){
		res.redirect("/");
	});
});

//put route -->back to index
router.put("/burgers/update", function(req, res){
	console.log("Request Body Below");
	console.log(req.body);
	db.Burger.update({
		devoured: true,
	},{
		where: {
			id: req.body.burger_id
		}
	}).then(function(){
		res.redirect("/");
	});
});


//export routes for server.js
module.exports = router;