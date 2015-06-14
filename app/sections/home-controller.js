/**
 * @ngdoc controller
 * @name homeController
 *
 *
 */

(function () {
  'use strict';

  angular.module('puliTrello.sections').controller('HomeController',
    function HomeController($scope, apiService) {
      var homeCtrl = this;
      homeCtrl.boards = apiService.boards();
      homeCtrl.createBoard = function(){
        // Todo: CRUD features for boards
      };
    }
  );
})();
