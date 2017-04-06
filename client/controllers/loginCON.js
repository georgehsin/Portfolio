myApp.controller('loginCON', function($scope, $location, $rootScope, usersFactory, $route) {

    // $scope.login = function (){
    //     console.log($scope.user.name)
    //     $rootScope.loggedUser = $scope.user.name
    //     console.log($rootScope.loggedUser)
    //     $location.url('/index')
    // }
    $scope.submit = function(){
    	console.log($scope.login)
    	usersFactory.create($scope.login, function(){
    		$scope.login = {}
    	})
    }
});
