//
//
// // Inclure des ordres JQuery dans une directive
// app.directive('playsong',function(){
//   return{
//     restrict: "C", // restriction sur une classe
//     controller : function($scope){
//
//
//
//
//
//       /**
//       *
//       * Si un son est deja en lecture on le destroy
//       *
//       */
//       // if(wavesurfer !== null){
//       //   wavesurfer.destroy();
//       // }
//
//
//       /**
//       *
//       *	Créer la WAVE
//       *
//       */
//
//       // wavesurfer = WaveSurfer.create({
//       //   container: '#waveform',
//       //   waveColor: 'rgba(0, 0, 0, 0.68)',
//       //   progressColor: '#337ab7',
//       //   height : 30,
//       //   barWidth: 2
//       // });
//
//
//
//
//
//
//       /**
//       *
//       * Met à jour le timer
//       *
//       */
//       // setInterval(function(){
//       //
//       //   var currentTime = wavesurfer.getCurrentTime();
//       //   var minutes = Math.floor(currentTime / 60);
//       //   minutes = Math.round(minutes);
//       //   if(minutes < 10) minutes = '0'+minutes; // on ajoute un zero initial
//       //
//       //   var seconds = currentTime % 60;
//       //   seconds = Math.round(seconds); // on ajoute un zero initial
//       //   if(seconds < 10) seconds = '0'+seconds;
//       //
//       //   $('player .curent-time').text(minutes+' : '+seconds);
//       //
//       // },1000);
//
//
//       /**
//       *
//       * Affiche la durée total en m:s
//       *
//       */
//       // wavesurfer.on('ready', function () {
//       //   var duration = wavesurfer.getDuration();
//       //   $('player .duration').text( Math.round((duration/60)*100) /100);
//       // });
//
//
//
//
//
//
//     },
//     controllerAs : "player"
//   };
// });
//
//
//
//
//
// app.directive('player',function(){
//   return{
//     restrict: "E", // restriction sur un element
//
//     link: function(scope,element, attrs){
//
//       $(element).hide();
//
//       $(window).scroll(function(){
//         if($(window).scrollTop() > $(window).height()/3){
//           $(element).fadeIn();
//         }else{
//           $(element).fadeOut();
//         }
//       });
//
//       element.click(function(e){
//         e.preventDefault();
//
//       }); // click
//
//
//     }
//   };
// });
//
//
// /**
// *
// * Permet de mettre en pause le mp3
// *
// */
// app.directive('pausesong',function(){
//   return{
//     restrict: "E",
//
//     link: function(scope,element, attrs){
//
//       element.click(function(e){
//         e.preventDefault();
//
//         if(wavesurfer !== null){
//           wavesurfer.pause();
//         }
//
//       }); // click
//     }
//   };
// });
//
//
// /**
// *
// * Permet de repredre la lecture du mp3
// *
// */
// app.directive('playsong',function(){
//   return{
//     restrict: "E",
//     link: function(scope,element, attrs){
//       ///console.log(scope);
//       element.click(function(e){
//         e.preventDefault();
//
//         if(wavesurfer !== null){
//           wavesurfer.play();
//         }
//
//       }); // click
//     }
//   };
// });
