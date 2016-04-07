(function() {
  'use strict';

  angular.module('app')
  .factory('comicData', comicData);

  comicData.$inject = ['$log', '$http']

  function comicData($log, $http) {

    //Hits the backend API and gets me my comics for SHOW
    function getComics(){
      var  promise = $http({
        method: 'GET',
        url: '/api/comics'
      });
      return promise;
    }


    var service = {
      show:  getComics
    };
    return service;
  };
})();
