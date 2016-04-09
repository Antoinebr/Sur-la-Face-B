app.controller('LikesCtrl', function($scope,LikeService, $routeParams){
  $scope.loading = true;

  LikeService.getLikes($routeParams.id).then(function(datas){

    $scope.loading = false;
    $scope.likesNum = datas;
  },function(msg){
    alert(msg);
  });





});
