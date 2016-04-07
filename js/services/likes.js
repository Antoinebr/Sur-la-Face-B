
app.factory('LikeService', function ($http,$q) {

  var factory = {

    likes : false,
    idLike : null,

    getLikes: function(idLike){

      var deferred = $q.defer();

      // si on a deja requeté les likes pour ce même id on renvoit juste la data
      if (factory.likes !== false && factory.idLike == idLike){

        deferred.resolve(factory.likes);

      // Sinon on requête
      }else{
        $http.get('api/likes-api.php?id='+idLike)
        .success(function(data,status){

          factory.likes = data;

          //console.log(data);
          deferred.resolve(factory.likes);
        }).error(function(data,status){
          deferred.reject('Impossible de recupérer les DATAS');
        });
      }
      return deferred.promise;
    }

  };

  return factory;
});
