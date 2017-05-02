myApp.controller('blogCON', function($scope, $location, $rootScope, blogsFactory, commentsFactory, $route) {

    console.log($rootScope.Admin, $rootScope.User)
    var index = function(){
        blogsFactory.index(function(data){
            for(var i = 0;i<data.length;i++){
                console.log(data[i])
                console.log(data[i].created_at)
                data[i].created_at = moment.parseZone(data[i].created_at).local().format("MMMM Do, YYYY")
                console.log(data[i].created_at)
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

    $scope.updatePost = function(blog){
        $scope.updatingBlogID = blog._id
        $scope.postUpdate = blog
        $scope.update = true
    }
    $scope.submitUpdate = function(id, updatedPost){
        $scope.update = false
        blogsFactory.update(id, updatedPost, function(){
            $scope.blogUpdate = {}
            $scope.updatingBlogID = null 
        })
        index()
    }
// --------------------------------------------------
// -------------------- COMMENTS --------------------
// --------------------------------------------------
    var indexComm = function(){
        commentsFactory.index(function(data){
            $scope.comments = data;
        })
    }
    indexComm()
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

});