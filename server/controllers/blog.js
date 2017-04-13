var mongoose = require('mongoose')
var Blog = mongoose.model('Blog');

module.exports = {
  index: function(req,res){
    Blog.find({}, function(err, results){

      res.json(results);
    });
  },
  create: function(req,res){
    Blog.create(req.body, function(err, result){
      if(err){
        console.log(err)
      }else{
        console.log('blog post successful')
        res.json(result)
      }
    });
  },
  update: function(req,res){
    Blog.findById({_id: req.params.id}, function(err, blog){
      if(err){
        console.log(err);
      }else{
        blog.title = req.body.title;
        blog.post = req.body.post;
        blog.save(function(err, updatedPost){
          if (err){
            console.log(err);
          }else{
            res.json(updatedPost);
          }
        });
      }
    });
  },
  show: function(req,res){
    Blog.findOne({_id: req.params.id}, function(err, result){

      res.json(result);
    });
  },
  delete: function(req,res){
    Blog.remove({_id: req.params.id}, function(err){
      if(err){
        console.log(err);
      }else{
        res.json({message: "Blog post removed!"});
      }
    });
  }
}

// function BlogsController(){
//   this.index = function(req,res){
//     //your code here
//     Blog.find({}, function(err, results){

//       res.json(results);
//     })
//   };

//   this.create = function(req,res){
//     Blog.create(req.body, function(err, result){
//       if(err){
//         console.log(err)
//       }else{
//         console.log('blog post successful')
//         res.json(result)
//       }
//     })
//   };
//   this.show = function(req,res){
//     Blog.findOne({_id: req.params.id}, function(err, result){

//       res.json(result);
//     })
//   };
//   this.delete = function(req,res){
//     Blog.remove({_id: req.params.id}, function(err){
//       if(err){
//         console.log(err);
//       }else{
//         res.json({message: "Blog post removed!"});
//       }
//     })
//   };
// }

// module.exports = new BlogsController();