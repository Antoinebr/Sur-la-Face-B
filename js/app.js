var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/',{templateUrl: 'partials/home.html', controller: 'PostsCtrl'})
  .when('/volume/:id' , {templateUrl: 'partials/comments.html', controller: 'SongsCtrl'})
  .otherwise({redirectTo : '/'});
});
