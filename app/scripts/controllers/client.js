'use strict';

/**
 * @ngdoc function
 * @name amberApp.controller:ClientCtrl
 * @description
 * # ClientCtrl
 * Controller of the amberApp
 */
angular.module('amberApp')
        .controller('ClientCtrl', function($scope, Client) {
          $scope.search = function() {
            $scope.clients = Client.query({sort: $scope.sort_order, direction: $scope.direction, limit: $scope.limit});
          };
          $scope.sort_order = 'client_name';
          $scope.direction = 'desc';
          $scope.arrow = 'down';
          $scope.sort = function(col) {

            if ($scope.sort_order === col) {
              $scope.direction = ($scope.direction === 'desc') ? 'asc' : 'desc';
              $scope.arrow = ($scope.direction === 'desc') ? 'down' : 'up';
            }
            else {
              $scope.direction = 'desc';
              $scope.arrow = 'down';
            }

            $scope.sort_order = col;
            $scope.search();
          };
          $scope.show_arrow = function(col) {
            return ($scope.sort_order == col);
          }
          $scope.limit = 100;
          $scope.search();
        });

angular.module('amberApp').factory('Client', function($resource) {
  return $resource('http://amberapi.ambercouch.local/api/v1/client/', {}, {query: {method: 'GET'}});
});