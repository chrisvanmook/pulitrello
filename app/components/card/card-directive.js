/**
 * @ngdoc directive
 * @name list
 * @restrict EA
 * @require list
 *
 * @example
 * <card list-id="" board-id=""></card>
 */

(function () {
  'use strict';

  angular.module('puliTrello.components').directive('card',
    function card($document, apiService) {

      return {
        transclude: true,
        restrict: "EA",
        require: '^list',
        scope: {
          listId: "=",
          boardId: "=",
          listEdit: "="
        },
        templateUrl: 'components/card/card-directive.html',
        link: function (scope, elem, attr, listCtrl) {

          scope.listCtrl = listCtrl;
          scope.cards = apiService.cards(scope.boardId, scope.listId);

          /**
           * If clicked outside the element, cancel edit mode
           */
          $document.on("click", function () {
            scope.$apply(function () {
              listCtrl.cancel(scope.cards);
            });
          });

        }

      };
    }
  );
})();
