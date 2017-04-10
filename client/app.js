var myApp = angular.module('myApp', ['ngRoute', 'ui.materialize', 'infinite-scroll'])
    
myApp.config(function ($routeProvider) {
    $routeProvider
    .when('/',{
        templateUrl: 'partials/home.html',
    })
    .when('/blog',{
        templateUrl: 'partials/blog.html',
        controller: 'blogCON',
    })
    .when('/post/:blog_id',{
        templateUrl: '/partials/post.html',
        controller: 'postCON',
    })
    .when('/resume',{
        templateUrl: 'partials/resume.html',
    })
    .when('/login',{
        templateUrl: 'partials/login.html',
        controller: 'loginCON',
    })
    .otherwise({
      redirectTo: '/'
    });
});



// myApp.run(function($rootScope, $location) {

//     // register listener to watch route changes
//     $rootScope.$on( "$locationChangeStart", function(event, next, current) {
//         if ( $rootScope.Admin == null ) {
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
