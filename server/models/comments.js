var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var commentSchema = new mongoose.Schema({
    name: {type: Object, required: true},
    // userId: {type: String, required: true},
    post: {type: String, required: true},
    likes: { type: Number},
    _post: {type: ObjectId, ref: 'Blog'},
    created_at: { type: Date, required: true, default: Date.now }
})

var Comment = mongoose.model('Comment', commentSchema);