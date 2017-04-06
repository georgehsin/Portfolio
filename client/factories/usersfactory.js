myApp.factory('usersFactory', ['$http', function($http) {

	function usersFactory(){
		this.create = function(user, callback){
  		$http.post('/user', user).then(function(returned_data){
    		if(typeof(callback)=='function'){
          	blogpost = returned_data.data;
          	callback(blogpost);
    		}
  		});
    } 
	}
	return new usersFactory();
}])