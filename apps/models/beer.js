var mongoose     = require('mongoose');
var Schema       = mongoose.Schema; 

var BeerSchema   = new Schema({		//make new db collection is like table in mySQL
    name: String
});


//export that module outside
module.exports = mongoose.model('Beer', BeerSchema);