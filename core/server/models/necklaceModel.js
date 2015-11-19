var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var Necklace = Schema({
	lengthInInches: {type: Number, required: true},
	jewelType: [{type: String, required: true}],
	inStock: {type: Boolean, default: false}
	 
});

module.exports = mongoose.model('Necklace', Necklace);