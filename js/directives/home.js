/**
*
* Renvoie une phrase de l'array au hasard
*
*/
app.directive('phrase',function(){
  return{
    restrict: "C", // restriction sur un element

    link: function(scope,element, attrs){

      phraseArray = [
        "une larme de gin et une rivière de tonic",
        "Tour à tour finaud, tour à tour polisson"
      ];

      var phrase = phraseArray[Math.floor(Math.random()*phraseArray.length)];

      $(element).text(phrase);


    }
  };
});


/**
*
* Renvoie un nombre aléatoire
*
*/
app.directive('randnum',function(){
  return{
    restrict: "E", // restriction sur un element

    link: function(scope,element, attrs){

      var randNum = Math.floor((Math.random() * 9) + 1);

      $(element).text(randNum);


    }
  };
});



/**
*
* Blurr une image
*
*/
app.directive('blur',function(){
  return{
    restrict: "C", // restriction sur un element

    link: function(scope,element, attrs){

      $(element).blurjs({
        customClass: 'blurjs',
        radius: 5,
        persist: false
      });

    }
  };
});
