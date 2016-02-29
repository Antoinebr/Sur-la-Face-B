//like-btn

/**
*
* Permet d'ajouter un like
*
*/
app.directive('likebtn',function($http){
  return{
    restrict: "C",

    link: function(scope,element, attrs){

      element.click(function(e){
        e.preventDefault();


        $http({
          url: "api/likes-api.php",
          method: "POST",
          data: {"id":scope.volnum}
        }).success(function(data, status, headers, config) {
          if(data == "true"){
            var likenum = parseInt($(element).find('span').text());
            $(element).find('span').text(likenum+1);
          }else{
            if($('.like-error').length !== 0) return;
            $(element).after('<p class="error like-error">Vous avez déja voté </p>');
            setTimeout(function(){
              $('.like-error').fadeOut(1000).remove();
            },1500);
          }
        }).error(function(data, status, headers, config) {
          //$scope.status = status;
        });


      }); // click
    }
  };
});
