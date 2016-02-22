var audio = null;

// Inclure des ordres JQuery dans une directive
app.directive('playsong',function(){
  return{
    restrict: "C", // restriction sur une classe
    link: function(scope,element, attrs){
      ///console.log(scope);
      element.click(function(e){
        e.preventDefault();

        // On récupère l'url
        var songUrl = $(element).data('url');

        // On récupère le nom
        var songName = $(element).text();

        // On injecte le nom dans la page
        $('player h2').text(songName);

        /**
        *
        * Si un son est deja en lecture on le pause
        *
        */
        if(audio !== null){
          audio.pause();
        }

        /**
        *
        * Créer l'objet audio et joue le mp3
        *
        */
        audio = new Audio(songUrl);
        audio.play();


        /**
        *
        * Met à jour le timer
        *
        */
        setInterval(function(){

          var minutes = Math.floor(audio.currentTime / 60);
          minutes = Math.round(minutes);
          if(minutes < 10) minutes = '0'+minutes; // on ajoute un zero initial

          var seconds = audio.currentTime % 60;
          seconds = Math.round(seconds); // on ajoute un zero initial
          if(seconds < 10) seconds = '0'+seconds;

          $('player .curent-time').text(minutes+' : '+seconds);

        },1000);


        /**
        *
        * Affiche la durée total en m:s
        *
        */
        audio.addEventListener("loadeddata", function() {
          console.log(audio.duration);
          $('player .duration').text( Math.round((audio.duration/60)*100) /100);
        });





      }); // click
    }
  };
});





app.directive('player',function(){
  return{
    restrict: "E", // restriction sur un element

    link: function(scope,element, attrs){

      element.click(function(e){
        e.preventDefault();

      }); // click


    }
  };
});


/**
*
* Permet de mettre en pause le mp3
*
*/
app.directive('pausesong',function(){
  return{
    restrict: "E",

    link: function(scope,element, attrs){

      element.click(function(e){
        e.preventDefault();

        if(audio !== null){
          audio.pause();
        }

      }); // click
    }
  };
});


/**
*
* Permet de repredre la lecture du mp3
*
*/
app.directive('playsong',function(){
  return{
    restrict: "E",
    link: function(scope,element, attrs){
      ///console.log(scope);
      element.click(function(e){
        e.preventDefault();

        if(audio !== null){
          audio.play();
        }

      }); // click
    }
  };
});
