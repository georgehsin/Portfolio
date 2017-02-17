myApp.controller('loginCON', function($scope, $location, $rootScope) {

    $scope.login = function (){
        console.log($scope.user.name)
        $rootScope.loggedUser = $scope.user.name
        console.log($rootScope.loggedUser)
        $location.url('/index')
    }

});
