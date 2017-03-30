myApp.factory('commentsFactory', ['$http', function($http) {
	function commentsFactory(){
		this.index = function(callback){
  		$http.get('/comment').then(function(returned_data){
    		if(typeof(callback)=='function'){
          	callback(returned_data.data);
    		}
  		});
    }
		this.create = function(id, comment, callback){
  		$http.post('/comment/' +id, comment).then(function(returned_data){
        if(typeof(callback)=='function'){
          	comment = returned_data.data;
          	callback(comment);
    		}
  		});
    } 
    this.delete = function(id, callback){
        $http.delete('/comment/'+id).then(function(returned_data){
            if (typeof(callback) == 'function'){
                callback(returned_data.data);
            }
        })
    };

	}
	return new commentsFactory();
}])