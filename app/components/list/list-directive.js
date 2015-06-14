/**
 * @ngdoc directive
 * @name list
 * @restrict E
 *
 * @description
 * Creates lists with cards
 *
 * @example
 * <list board-id=""></list>
 */

(function () {
  'use strict';

  angular.module('puliTrello.components').directive('list',
    function list($document) {

      return {
        transclude: true,
        restrict: "E",
        scope: {
          "boardId": "="
        },
        templateUrl: "components/list/list-directive.html",
        controller: 'ListController as listCtrl',
        link: function (scope, elem, attr, listCtrl) {

          elem.on("click", function (e) {
            e.stopPropagation();
          });

          /**
           * If clicked outside the element, cancel edit mode
           */
          $document.on("click", function () {
            scope.$apply(function () {
              listCtrl.cancel(scope.lists);
            });
          });
        }
      };
    }
  );
})();
