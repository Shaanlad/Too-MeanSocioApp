//mongodb
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/social', function() {
	console.log('Mongo Online!')
})
module.exports = mongoose
