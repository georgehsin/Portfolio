myApp.controller('blogCON', function($scope, $location, $rootScope, blogsFactory, $route) {

	// sc.users = [];
    var index = function(){
        blogsFactory.index(function(data){
            for(var i = 0;i<data.length;i++){
                data[i].created_at = dateformat(data[i].created_at)
            }
            $scope.post = data;
        })
    }
    index()
    $scope.submit = function(){
      blogsFactory.create($scope.blogPost, function(){
	 	$scope.blogPost = {}
	 	index()
        })
 	}

 	$scope.delete = function(id){
 		blogsFactory.delete(id, function(){
	 	index()
        })
 	}
    $scope.reverse = function(array) {
        var copy = [].concat(array);
        return copy.reverse();
    }

    $scope.limit = 5
    $scope.loadMore = function() {
        $scope.limit += 5
    }

    var dateformat = function(string){
        dict = {
            '01':'January',
            '02':'February',
            '03':'March',
            '04':'April',
            '05':'May',
            '06':'June',
            '07':'July',
            '08':'August',
            '09':'September',
            '10':'October',
            '11':'November',
            '12':'December',
        }
        month = dict[string.slice(5,7)]

        return month + ' ' + string.slice(8,10) + ', ' + string.slice(0,4)
    }



});