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
            Client.query({
              sort: $scope.sort_order,
              direction: $scope.direction,
              limit: $scope.limit,
              page: $scope.page},
            function(obj) {
              $scope.more = obj.clients.data.length === $scope.limit;
              $scope.clients = $scope.clients.concat(obj.clients.data);
            });
          };
          $scope.sort_order = 'client_name';
          $scope.direction = 'desc';
          $scope.arrow = 'down';


          $scope.sort_by = function(col) {

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
          };

          $scope.show_more = function() {
            $scope.page += 1;

            $scope.search();
          };

          $scope.limit = 2;
          $scope.page = 1;
          $scope.has_more = function() {
            return $scope.more;
          };
          $scope.more = true;
          $scope.clients = [];
          $scope.search();
        });

angular.module('amberApp').factory('Client', function($resource) {
  return $resource('http://amberapi.ambercouch.local/api/v1/client/', {}, {query: {method: 'GET'}});
});