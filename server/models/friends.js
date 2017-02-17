console.log('friends model');
var mongoose = require('mongoose');

var FriendsSchema = new mongoose.Schema({
  name: String,
},
{
	timestamps: true
})
// register the schema as a model
var Friends = mongoose.model('Friends', FriendsSchema);