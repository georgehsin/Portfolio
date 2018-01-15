myApp.controller('loginCON', function($scope, $location, $rootScope, usersFactory, $route) {
    
    console.log($rootScope.User, $rootScope.Admin)
    $scope.submit = function(){
    	var info = $scope.register
    	$scope.empty = false
    	$scope.name = validate.name(info.name);
    	$scope.email = validate.email(info.email);
    	$scope.password = validate.password(info.password);
    	$scope.confirm = validate.confirm(info.password, info.confirm);
        if (info == undefined){
            $scope.empty = true;
            return;
        }
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
	    	$location.url('/blog');
    	}
    }
    $scope.loginForm = function(){
    	usersFactory.login($scope.login, function(data){
            if(data.invalid){
                $scope.invalid = true;
            }
            else{
            	if (data.admin){
            		$rootScope.Admin = data.name
            	}
                $rootScope.User = data.name;
                $scope.invalid = false;
                $location.url('/blog');
            }
    	});
    }

});
