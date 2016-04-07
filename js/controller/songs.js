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




  $rootScope.initWaveSurfer = function(){


    console.log("WS nexite pas !");
    $rootScope.wavesurfer = WaveSurfer.create({
      container: '#waveform',
      waveColor: 'rgba(0, 0, 0, 0.68)',
      progressColor: '#337ab7',
      height : 30,
      barWidth: 2
    });

    $rootScope.isPlayerBuilt = true;

  };



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
    var url = $scope.songs[index].url;
    $rootScope.wavesurfer.load(url);

    $rootScope.runSong();

    $rootScope.wavesurfer.on('finish', function () {
      $rootScope.destroyOrCreate();
      var url = $scope.songs[index+1].url;
      $rootScope.wavesurfer.load(url);
      $rootScope.runSong();

    });
  };


  $rootScope.runSong = function(){
    $rootScope.wavesurfer.on('ready', function () {
      $rootScope.wavesurfer.play();
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
  *  Play song
  *
  */
  $rootScope.resumeSong = function(){
    if($rootScope.isPlayerBuilt === true ) $rootScope.wavesurfer.play();
  };





});
