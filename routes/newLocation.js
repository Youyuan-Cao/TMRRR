
/*
 * GET home page.
 */
var data = require('../data_location.json');

exports.view = function(req, res){
	console.log(data);
	var newLocation = {
		"name": req.query.name
	};

	data.locations.push(newLocation);
    res.render('newLocation', data);
};
