app.controller('SongsCtrl', function ($scope, Post, $routeParams) {
  //console.log($routeParams);
  $scope.newSong = {};
  Post.getPost($routeParams.id).then(function(post){
    $scope.cover = post.cover;
    $scope.songs = post.song;
    $scope.title = post.title;
    $scope.volnum = post.volnum;
  }, function (msg){
    alert(msg);
  });


});
