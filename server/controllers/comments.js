var mongoose = require('mongoose');
var Blog = mongoose.model('Blog');
var Comment = mongoose.model('Comment');
function CommentsController(){
  this.index = function(req,res){
    //your code here
    Comment.find({}, function(err, results){

      res.json(results);
    })
  };

  this.create = function(req,res){
    Blog.findOne({_id: req.params.id}, function(err, post){
        var comment = new Comment({name: req.body.name, post: req.body.post});
        comment._poster = post._id
        post.comments.push(comment);
        comment.save(function(err){
          post.save(function(err){
            if(err){
              console.log(err)  
              }
            else {
              res.redirect('/')
              }
          })
        })
    })
  };
  this.delete = function(req,res){
    Comment.remove({_id: req.params.id}, function(err){
      if(err){
        console.log(err);
      }else{
        res.json({message: "Comment post removed!"});
      }
    })
  };
}

module.exports = new CommentsController();