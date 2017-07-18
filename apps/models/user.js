var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
var UserSchema = mongoose.model('User', new Schema({ 
    name: String, 
    emailfield:String,
    pass: String, 
    occupation:String,
    freelancercheck:Boolean,
    favoritefood:String,
    userImage:String
    /*admin: Boolean ,
    tutorials_id: Array*/
}));

//export that module outside
module.exports = mongoose.model('User', UserSchema);

console.log('user.js');