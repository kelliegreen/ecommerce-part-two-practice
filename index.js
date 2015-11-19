var express = require('express'), 
	bodyParser = require('body-parser'),
	cors = require('cors'),
	mongoose = require('mongoose'),
	necklacesCtrl = require('./core/server/controllers/necklacesCtrl'),
	app = express(),
	port = 9000,
	mongoUri = 'mongodb://localhost:27017/jewelry';
	
	
app.use(bodyParser.json());
app.use(cors());





app.post('/api/necklaces', necklacesCtrl.addNecklace);
app.get('/api/necklaces', necklacesCtrl.getNecklaces);
app.get('/api/necklaces/getById', necklacesCtrl.getOneNecklace);
app.delete('/api/necklaces/getById', necklacesCtrl.removeNecklace);
app.put('/api/necklaces/getById', necklacesCtrl.updateNecklace);





mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
	console.log("Connected to MongoDB");
});

app.use(express.static('./core/public'));

app.listen(port, function() {
	console.log('Listening on port ' + port);
});