const express = require('express');
const router = express.Router();

// Get all posts
router.get('/heroes', (req, res) => {  // Get posts from the mock api, This should ideally be replaced with a service that connects to MongoDB
  var collection = req.app.db.collection('heroes');
  collection.find({}).toArray(function(err, docs) {
    res.status(200).json(docs);
  });
});

router.route('/heroes/:id')
.get((req, res) => {  // Get posts from the mock api, This should ideally be replaced with a service that connects to MongoDB
  var collection = req.app.db.collection('heroes');
  console.log(typeof req.params.id);
  collection.findOne({id: parseInt(req.params.id)}, function(err, doc) {
    console.log(doc);
    res.status(200).json(doc);
  });
})
.put((req, res)=> {
  console.log('from put method' + req.params.id);  
  console.log('body' + JSON.stringify( req.body));
  var collection = req.app.db.collection('heroes');
  collection.update({id:parseInt(req.params.id)}, {$set: {name: req.body.name}} ) 
  res.send({"staus":"success"});
})


module.exports = router;
