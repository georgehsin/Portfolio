var mongoose = require('mongoose');
var User = mongoose.model('User')

function UsersController(){
  this.create = function(req,res){
    User.create(req.body, function(err, result){
      if(err){
        console.log(err)
      }else{
        console.log('blog post successful')
        res.json(result)
      }
    })
  };
}

module.exports = new UsersController();