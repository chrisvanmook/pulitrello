/**
 * @ngdoc controller
 * @name boardController
 *
 *
 */

(function () {
  'use strict';

  angular.module('puliTrello.sections').controller('BoardController',
    function BoardController($scope, $state, apiService) {
      var boardCtrl = this;
      boardCtrl.boardId = $state.params.id;
      boardCtrl.boardInfo = apiService.getBoardInfo(boardCtrl.boardId);
    }
  );
})();
