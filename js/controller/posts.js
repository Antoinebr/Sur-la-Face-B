app.controller('PostsCtrl', function($scope, Post){
  $scope.loading = true;
  Post.getPosts().then(function(posts){
    $scope.loading = false;
    $scope.posts = JSON.parse(JSON.stringify(posts));
  },function(msg){
    alert(msg);
  });
});
