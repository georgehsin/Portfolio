var myApp = angular.module('myApp', ['ngRoute', 'ui.materialize', 'infinite-scroll'])
    
myApp.config(function ($routeProvider) {
    $routeProvider
    .when('/',{
        templateUrl: 'partials/home.html',
        controller: 'loginCON'
    })
    .when('/blog',{
        templateUrl: 'partials/blog.html',
        controller: 'blogCON',
    })
    .when('/resume',{
        templateUrl: 'partials/resume.html',
    })
    .otherwise({
      redirectTo: '/'
    });
});



// myApp.run( function($rootScope, $location) {

//     // register listener to watch route changes
//     $rootScope.$on( "$locationChangeStart", function(event, next, current) {
//         if ( $rootScope.loggedUser == null ) {
//             console.log('please log in');
//             $location.url( "/" );
//         }
//         // else if ( next.templateUrl == "partials/login.html" && $rootScope.loggedUser != null) {
//         //             console.log('already logged in');
//         //             $location.url( "/new" );
//         // }
//         // else {
//         //         // not going to #login, we should redirect now
//         //             console.log('pass');
//         // }
//     })
// })
