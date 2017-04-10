myApp.controller('loginCON', function($scope, $location, $rootScope, usersFactory, $route) {

    console.log($rootScope.Admin)
    $scope.submit = function(){
    	// console.log($scope.register)
    	// var info = $scope.register

    	// $scope.name = validation(info.name)
    	// console.log($scope.name)
    	// // if (Boolean(info.name) === false){
    	// // 	$scope.name = true
    	// // }
    	// if (info.pass !== info.confirm){
    	// 	$scope.nomatch = true
    	// }
    	// if (false){
    		usersFactory.create($scope.register, function(){
	    		$rootScope.Admin = $scope.register.name
	    		console.log($rootScope.Admin)
	    		$scope.register = {}
	    	})
    	// }
    }
});
