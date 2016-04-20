(function() {
  'use strict';
  angular.module('app')
    .controller('ComicController', ComicController);

  ComicController.$inject = ["comicData", "$http", "$log"];

  function ComicController(comicData, $http, $log) {
    $log.info("ComicController linked!");
    var vm = this;
    //show the comics function on pageload
    vm.getComics = function() {
      comicData
      .show()
      .then(function(comics){
        $log.info(comics.data);
        vm.comics = comics.data;
      });
    }
    vm.getComics();

    vm.yearIncludes = [];
    vm.includeYear = function(year) {
        // var i = vm.yearIncludes.indexOf(year);
        var i = $.inArray(year, vm.yearIncludes);
        //laymans expl of below: according to array.indexOf MDN Docs, if the year is present
        //in the array, itll return its index #, if not, returns -1  -  <3 nelson
        if (i > -1) {
            //if its there, take it out!
            vm.yearIncludes.splice(i, 1);
        } else {
            //if not, put it in :)
            vm.yearIncludes.push(year);
        }
    }
    vm.yearFilter = function(comic) {
        if (vm.yearIncludes.length > 0) {
          // if (vm.yearIncludes.indexOf(year))
          if ($.inArray(comic.year, vm.yearIncludes) < 0)
              return;
        }
        return comic;
    }


    //upvote functionality
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
