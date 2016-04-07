(function() {
  'use strict';

  angular.module('app')
  .factory('comicData', comicData);

  comicData.$inject = ['$log', '$http']

  function comicData($log, $http) {




    var service = {};

    return service;


  };

})();
