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