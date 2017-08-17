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

router.post("/insertOne", function(req, res) {

  burgers.insertOne("burger_name",
    [req.body.burger_name], function(data) {
    res.redirect("/burgers");
  });

});

router.put("/burgers/updateOne", function(req, res) {
burgers.updateOne(req.body.burger_id, function(result){
  console.log(result);
  res.redirect("/burgers");
});
});

// router.put("/burgers/update", function(req, res) {
//   burger.update(req.body.burger_id, function(result) {
//     // wrapper for orm.js that using MySQL update callback will return a log to console,
//     // render back to index with handle
//     console.log(result);
//     res.redirect("/");
//   });
// });




// Export routes for server.js to use.
module.exports = router;