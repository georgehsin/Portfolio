console.log('routes');

// var mongoose = require('mongoose');
var blog = require('../controllers/blog.js');
var comments = require('../controllers/comments.js');

module.exports = function(app){
  app.get('/blog', blog.index);
  // app.get('/blog/:id', blog.show);
  app.post('/blog', blog.create);
  // app.put('/blog/:id', blog.update);
  app.delete('/blog/:id', blog.delete);
}