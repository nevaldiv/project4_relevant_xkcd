(function() {
  'use strict';

  angular.module('app')
    .controller('MainController', MainController);

  MainController.$inject = ["comicData", "$http", "$log"];

  function MainController(comicData, $http, $log) {
    $log.info("ComicController linked!");
    var vm = this;

    vm.getComics = function() {
      comicData
      .show()
      .then(function(comics){
        $log.info(comics.data);
        vm.comics = comics.data;
      });
    }

    vm.getComics();

    vm.updateComic = function(comic, votecountBoolean){
      if (votecountBoolean === false) {
        comic.votecount--;
      } else if (votecountBoolean === true) {
        comic.votecount++;
      }
      $http.put(`/api/comics/${comic._id}`, comic)
        .then(function(resp){
          $log.info(resp);
          vm.getComics();
        }, function(err){
          $log.info(err);
        })
    }

  }

})();
