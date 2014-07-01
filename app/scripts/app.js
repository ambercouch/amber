'use strict';

/**
 * @ngdoc overview
 * @name amberApp
 * @description
 * # amberApp
 *
 * Main module of the application.
 */
angular
        .module('amberApp', [
          'ngAnimate',
          'ngCookies',
          'ngResource',
          'ngRoute',
          'ngSanitize',
          'ngTouch'
        ])
        .config(function($routeProvider) {
          $routeProvider
                  .when('/', {
                    templateUrl: 'views/main.html',
                    controller: 'MainCtrl'
                  })
                  .when('/client', {
                    templateUrl: 'views/client.html',
                    controller: 'ClientCtrl'
                  })
                  .when('/about', {
                    templateUrl: 'views/about.html',
                    controller: 'AboutCtrl'
                  })
                  .otherwise({
                    redirectTo: '/'
                  });
        });

angular.module('amberApp').directive('sorted', function() {
  return{
    scope: true,
    transclude: true,
    template: '<a ng-click="do_sort()" ng-transclude></a>' +
            ' <i ng-show="show_arrow()" class="glyphicon glyphicon-arrow-{{arrow}}"></i>',
    controller: function($scope, $element, $attrs) {

      $scope.sort = $attrs.sorted;
      $scope.do_sort = function() {
        $scope.sort_by($scope.sort);
      };

      $scope.do_show = function(asc) {
        return (asc != $scope.sort_desc) && ($scope.sort_order == $scope.sort);
      };
    }
  };
});
