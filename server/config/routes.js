console.log('routes');

var blog = require('../controllers/blog.js');
var comments = require('../controllers/comments.js');

module.exports = function(app){
  app.get('/blog', blog.index);
  app.post('/blog', blog.create);
  // app.put('/blog/:id', blog.update);
  app.delete('/blog/:id', blog.delete);

  app.get('/comment', comments.index);
  app.delete('/comment/:id', comments.delete);
  app.post('/comment/:id', comments.create);
}