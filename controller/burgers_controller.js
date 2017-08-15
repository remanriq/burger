var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burgers = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.

router.get('/', function(req, res) {
  res.redirect('/burgers');
}); 

router.get("/burgers", function(req, res) {
  burgers.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/burgers/insertOne", function(req, res) {
  burgers.insertOne(["burger_name"],
   "req.body.burger_name", function(data) {
    res.redirect("/burgers");
  });
});

router.put("/burgers/updateOne/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burgers.updateOne({
    devoured: true
     }, 
    condition, function(data) {
    res.redirect("/burgers");
  });
});




// Export routes for server.js to use.
module.exports = router;