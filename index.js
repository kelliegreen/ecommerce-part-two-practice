var express = require('express'), 
	bodyParser = require('body-parser'),
	cors = require('cors'),
	mongoose = require('mongoose'),
	app = express(),
	port = 9000,
	mongoUri = 'mongodb://localhost:27017/jewelry';
	
	
app.use(bodyParser.json());
app.use(cors());










app.listen(port, function() {
	console.log('Listening on port ' + port);
});



mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
	console.log("Connected to MongoDB");
});