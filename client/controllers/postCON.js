myApp.controller('postCON', function($scope, $location, $route, $routeParams, blogsFactory, commentsFactory) {

	var index = function(){
		blogsFactory.show($routeParams.blog_id, function(data){
            data.created_at = dateParser.dateformat(data.created_at)
			$scope.blog = data
		})
	}()

	// --------------------------------------------------
// -------------------- COMMENTS --------------------
// --------------------------------------------------
    var indexComm = function(){
        commentsFactory.index(function(data){
            $scope.comments = data;
        })
    }()
    $scope.submitComment = function(id, comment){
        commentsFactory.create(id, comment, function(){
            comment.name = ''
            comment.post = ''
            indexComm()
        })
    }
    $scope.deleteComm = function(id){
        commentsFactory.delete(id, function(){
        indexComm()
        })
    }
})