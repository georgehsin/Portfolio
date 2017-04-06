var mongoose = require('mongoose')
var Blog = mongoose.model('Blog');

function BlogsController(){
  this.index = function(req,res){
    //your code here
    Blog.find({}, function(err, results){

      res.json(results);
    })
  };

  this.create = function(req,res){
    Blog.create(req.body, function(err, result){
      if(err){
        console.log(err)
      }else{
        console.log('blog post successful')
        res.json(result)
      }
    })
  };
  this.show = function(req,res){
    Blog.findOne({_id: req.params.id}, function(err, result){

      res.json(result);
    })
  };
  this.delete = function(req,res){
    Blog.remove({_id: req.params.id}, function(err){
      if(err){
        console.log(err);
      }else{
        res.json({message: "Blog post removed!"});
      }
    })
  };
}

module.exports = new BlogsController();