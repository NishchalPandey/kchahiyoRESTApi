var mongoose = require('mongoose');
var postSchema = new mongoose.Schema({
    title: String,
    content: String,
    owner: String
});

var postModel = mongoose.model('Post', postSchema);
module.exports = postModel;
