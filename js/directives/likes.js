//like-btn

/**
*
* Permet d'ajouter un like
*
*/
app.directive('likebtn',function($http){
  return{
    restrict: "C",
    controller : function(){

      this.test = function(){
        console.log('lool');
      };

      this.addLike = function(index){

        $http({
          url: "api/likes-api.php",
          method: "POST",
          data: {"id":index}
        }).success(function(data, status, headers, config) {
          if(data == "true"){
            console.log("succes like");
            var likenum = parseInt($('.likebtn .initial').find('span').text());
            $('.likebtn .initial').find('span').text(likenum+1);
          }else{
            console.log("Deja vote");
            $('.like-error').addClass('u-show');
            setTimeout(function(){
              $('.like-error').removeClass('u-show');
            },1500);
          }
        }).error(function(data, status, headers, config) {
          //$scope.status = status;
        });

      };


    },
    controllerAs : "likeCtrl",

  };
});
