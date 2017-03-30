var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var blogSchema = new mongoose.Schema({
    title: {type: String, required: true},
    post: {type: String, required: true},
    likes: { type: Number},
    comments: [{type: ObjectId, ref: "Comment"}],
    created_at: { type: Date, required: true, default: Date.now }
})

var Blog = mongoose.model('Blog', blogSchema);
