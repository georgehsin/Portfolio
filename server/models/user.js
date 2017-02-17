var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    items: [{type: ObjectId, ref: "Item"}]
})

mongoose.model('User', UserSchema);
