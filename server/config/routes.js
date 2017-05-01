var blog = require('../controllers/blog.js');
var comments = require('../controllers/comments.js');
var user = require('../controllers/user.js');

module.exports = function(app){
  app.get('/blog', blog.index);
  app.post('/blog', blog.create);
  app.get('/blog/:id', blog.show);
  app.post('/blog/:id', blog.update);
  app.delete('/blog/:id', blog.delete);

  app.get('/comment', comments.index);
  app.delete('/comment/:id', comments.delete);
  app.post('/comment/:id', comments.create);

  app.post('/user', user.create);
  app.post('/userLogin', user.login);
}