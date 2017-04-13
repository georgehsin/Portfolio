myApp.controller('postCON', function($scope, $location, $rootScope, $route, $routeParams, blogsFactory, commentsFactory, usersFactory) {

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
            console.log(data)
            $scope.comments = data;
        })
    }
    indexComm()
    $scope.submitComment = function(id, comment){
        if(!$rootScope.User){
            $scope.loginRequired = true
        }
        else{
            comment.name = {
                name: $rootScope.User,
                _id: $rootScope._id
            }
            commentsFactory.create(id, comment, function(){
                comment.post = ''
                indexComm()
            })
        }
    }
    $scope.deleteComm = function(id){
        commentsFactory.delete(id, function(){
        indexComm()
        })
    }


// --------------------------------------------------
// --------------- LOGIN/REGISTRATION ---------------
// --------------------------------------------------
    
    $scope.submit = function(){
        var info = $scope.register
        $scope.empty = false
        if (info == undefined){
            $scope.empty = true;
            return;
        }
        $scope.name = validate.name(info.name);
        $scope.email = validate.email(info.email);
        $scope.password = validate.password(info.password);
        $scope.confirm = validate.confirm(info.password, info.confirm);
        var isValid = function(){
            for (var x in info){
                if ($scope[x]){
                    return false;
                }
            }
            return true;
        }()
        if (isValid){
            usersFactory.create($scope.register, function(){
                $rootScope.User = $scope.register.name;
                $scope.register = {};
            });
        }
    }
    $scope.loginForm = function(){
        console.log($scope.login)
        usersFactory.login($scope.login, function(data){
            if(data.invalid){
                $scope.invalid = true;
            }
            else{
                if (data.admin){
                    $rootScope.Admin = data.name
                }
                $rootScope.User = data.name;
                $rootScope._id = data._id
                $scope.invalid = false;
            }
        });
    }
})