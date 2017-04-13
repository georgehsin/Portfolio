myApp.factory('blogsFactory', ['$http', function($http) {

	function blogsFactory(){
		this.index = function(callback){
  		$http.get('/blog').then(function(returned_data){
    		if(typeof(callback)=='function'){
          	callback(returned_data.data);
    		}
  		});
    }
		this.create = function(blogpost, callback){
  		$http.post('/blog', blogpost).then(function(returned_data){
    		if(typeof(callback)=='function'){
          	blogpost = returned_data.data;
          	callback(blogpost);
    		}
  		});
    }
    this.update = function(id, blogpost, callback){
      $http.post('/blog/'+id, blogpost).then(function(returned_data){
        if(typeof(callback)=='function'){
            blogpost = returned_data.data;
            callback(blogpost);
        }
      });
    }
    this.show = function(id, callback){
      $http.get('/blog/' +id).then(function(returned_data){
          if (typeof(callback) == 'function'){
              callback(returned_data.data);
          }
      });
    }
    this.delete = function(id, callback){
        $http.delete('/blog/'+id).then(function(returned_data){
            if (typeof(callback) == 'function'){
                callback(returned_data.data);
            }
        })
    };    
	}
	return new blogsFactory();
}])