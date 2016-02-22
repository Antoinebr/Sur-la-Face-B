
// Inclure des ordres JQuery dans une directive
app.directive('playsong',function(){
  return{
    restrict: "C", // restriction sur une classe

    link: function(scope,element, attrs){
      ///console.log(scope);
      element.click(function(e){
        e.preventDefault();

        var songUrl = $(element).data('url');

        var audio = new Audio(songUrl);
        audio.play();

      }); // click
    }
  };
});
