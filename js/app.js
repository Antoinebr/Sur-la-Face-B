var app = angular.module('myApp', ['ngRoute']);



app.config(function($routeProvider){

  $routeProvider

  .when('/',{templateUrl: 'partials/home.html', controller: 'PostsCtrl'})

  .when('/volume/:id' , {templateUrl: 'partials/albums.html', controller: 'SongsCtrl'})

  .when('/likes' , {templateUrl: 'partials/likes.html', controller: 'LikesCtrl'})

  .otherwise({redirectTo : '/'});

});
