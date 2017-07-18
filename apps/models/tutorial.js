var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
var TutorialSchema = mongoose.model('Tutorial', new Schema({ 
    title: String, 
    content: String, 
    author: String,
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    //created: Date
}) );

//export that module outside
module.exports = mongoose.model('Tutorial', TutorialSchema);