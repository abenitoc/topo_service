 var express    = require('express');        // call express
 var app        = express();                 // define our app using express
 var bodyParser = require('body-parser');
 var topojson = require("topojson");

 app.use(bodyParser.urlencoded({ extended: true }));
 app.use(bodyParser.json());

 var port = process.env.PORT || 8080;        // set our port
 var router = express.Router();              // get an instance of the express Router
 
 router.get('/', function(req, res) {
	 res.json({ message: 'hooray! welcome to our api!' });   
 });

 //		API: MERGE TOPO-JSON
 router.post("/convert", function(req,res){
 	var topology = topojson.topology({collection: req.body.geoJson});
 	res.json({"topojson": topology});
 });

 app.use('/api', router);
 app.listen(port);
 console.log('Magic happens on port ' + port);
