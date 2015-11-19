var Necklace = require('../models/necklaceModel');

module.exports = {
	addNecklace: function (req, res) {
		new Necklace(req.body).save(function (err, necklace) {
			if (err) {
				res.status(500).send(err);
			} else {
				res.send(necklace);
			}
		});
	},


	getNecklaces: function (req, res) {
		Necklace.find().then(function (necklaces) {
			res.send(necklaces);
		});
	},

	getOneNecklace: function (req, res) {
		Necklace.findById(req.query.id, function (err, necklaces) {
			if (err) {
				res.status(500).send(err);
			} else {
				res.send(necklaces);
			}
		});
	},

	removeNecklace: function (req, res) {
		Necklace.findByIdAndRemove(req.query.id, function (err, necklaces) {
			if (err) {
				res.status(500).send(err);
			} else {
				res.send(necklaces);
			}
		});
	},

	updateNecklace: function (req, res) {
        Necklace.update(req.query.id, req.body, function (err, doc) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(doc);
            }
        });
		}
};


