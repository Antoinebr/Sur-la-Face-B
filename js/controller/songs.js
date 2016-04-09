app.controller('SongsCtrl', function ($scope,$rootScope, Post, $routeParams) {
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


  /**
  *
  *  Variable declaration
  *
  */
  if(!$rootScope.isPlayerBuilt){
    $rootScope.curentlyPlayingName = "";
    $rootScope.curentltySongDuration = " ";
    $rootScope.curentSongTime = " ";
  }


  /**
  *
  *  Créer la vague
  *
  */
  $rootScope.initWaveSurfer = function(){

    $rootScope.wavesurfer = WaveSurfer.create({
      container: '#waveform',
      waveColor: 'rgba(0, 0, 0, 0.68)',
      progressColor: '#337ab7',
      height : 30,
      barWidth: 2
    });

    $rootScope.isPlayerBuilt = true;

  };


  /**
  *
  *  Détruit ou créer la vague
  *
  */
  $rootScope.destroyOrCreate = function(){

    if($rootScope.isPlayerBuilt !== true ) {
      $rootScope.initWaveSurfer();
    }else{
      $rootScope.wavesurfer.destroy();
      $rootScope.initWaveSurfer();
    }

  };


  /**
  *
  *  Playsong
  *
  */
  $rootScope.playSong = function (index){

    $rootScope.destroyOrCreate();

    console.log("crash "+index);
    $rootScope.songs = $scope.songs;
    var url = $rootScope.songs[index].url;
    $rootScope.wavesurfer.load(url);
    $rootScope.displayArtist(index);
    $rootScope.setDuration();
    $rootScope.setSongTime();
    $rootScope.runSong();


    $rootScope.wavesurfer.on('finish', function () {
      $rootScope.destroyOrCreate();
      index = $rootScope.getNewSongIndex(index);
      url = $scope.songs[index].url;
      $rootScope.wavesurfer.load(url);
      $rootScope.displayArtist(index);
      $rootScope.setDuration();
      $rootScope.setSongTime();
      $rootScope.runSong();

    });
  };


  /**
  *
  *  runSong
  *  Lance la lecture après chargement de l'url
  *
  */
  $rootScope.runSong = function(){
    $rootScope.wavesurfer.on('ready', function () {
      $rootScope.wavesurfer.play();
      $rootScope.setSongTime();
    });

  };


  /**
  *
  *  Pause song
  *
  */
  $rootScope.pauseSong = function(){
    if($rootScope.isPlayerBuilt === true ) $rootScope.wavesurfer.pause();
  };


  /**
  *
  *  Resume song
  *
  */
  $rootScope.resumeSong = function(){
    if($rootScope.isPlayerBuilt === true ) $rootScope.wavesurfer.play();
  };


  /**
  *
  * Play nextSong
  *
  */
  $rootScope.getNewSongIndex = function(index){
    console.log('THIS SONG INDEX '+index);
    console.log("TOTAL INDEX " + $rootScope.songs.length);
    if(index+1 == ($rootScope.songs.length)){
      return 0;
    }else{
      return index+1;
    }

  };


  /**
  *
  *  Affiche l'artiste
  *
  */
  $rootScope.displayArtist = function(index){
    if($rootScope.curentlyPlayingName !== " ") return $rootScope.curentlyPlayingName;
    $rootScope.curentlyPlayingName = $scope.songs[index].name;
  };


  /**
  *
  *  Affiche l'artiste
  *
  */
  $rootScope.displayArtist = function(index){
    $rootScope.curentlyPlayingName = $rootScope.songs[index].name;
  };



  /**
  *
  * Affiche la durée total en m:s
  *
  */
  $rootScope.setDuration = function(){
    $rootScope.wavesurfer.on('ready', function () {
      var duration = $rootScope.wavesurfer.getDuration();
      $rootScope.curentltySongDuration  =  Math.round((duration/60)*100) /100;
      console.log('DUR '+  $rootScope.curentltySongDuration);
    });
  };


  /**
  *
  * Met à jour le timer
  *
  */
  $rootScope.setSongTime = function(){

    var that = $rootScope;
    setInterval(function(){
      var currentTime = $rootScope.wavesurfer.getCurrentTime();
      var minutes = Math.floor(currentTime / 60);
      minutes = Math.round(minutes);
      if(minutes < 10) minutes = '0'+minutes; // on ajoute un zero initial

      var seconds = currentTime % 60;
      seconds = Math.round(seconds); // on ajoute un zero initial
      if(seconds < 10) seconds = '0'+seconds;

      that.curentSongTime = minutes+' : '+seconds;
      that.$apply();

    },1000);

  };




});
