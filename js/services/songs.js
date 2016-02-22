app.controller('SongsCtrl', function ($scope, Post, $routeParams) {
  //console.log($routeParams);
  $scope.newSong = {};
  Post.getPost($routeParams.id).then(function(post){
    $scope.title = post.name;
    $scope.comments = post.comments;
  }, function (msg){
    alert(msg);
  });


});
