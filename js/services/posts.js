app.factory('Post', function ($http, $q){
  var factory = {
    posts : false,
    getPosts: function(){
      var deferred = $q.defer();
      if (factory.posts !== false){
        deferred.resolve(factory.posts);
      }else{
        $http.get('songs-api.php')
        .success(function(data,status){

          factory.posts = data;

          //console.log(data);
          deferred.resolve(factory.posts);
        }).error(function(data,status){
          deferred.reject('Impossible de recupérer les DATAS');
        });
      }
      return deferred.promise;
    },
    getPost: function(id){
      var deferred = $q.defer();
      posts = {};
      var posts = factory.getPosts().then(function(posts){
        posts = posts[id];
        deferred.resolve(posts);
      }, function(msg){
        deferred.reject(msg);
      });
      return deferred.promise;
    },
  };

  return factory;
});
