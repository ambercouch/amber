'use strict';

/**
 * @ngdoc function
 * @name amberApp.controller:ClientCtrl
 * @description
 * # ClientCtrl
 * Controller of the amberApp
 */
angular.module('amberApp').factory('Client', function($resource) {
  return $resource('http://amberapi.ambercouch.local/api/v1/client/:id', {id: '@id'}, {query: {method: 'GET', isArray: false}, update: {method: 'PUT'}});
});

angular.module('amberApp')
        .controller('ClientCtrl', function($scope, Client) {
          $scope.search = function() {
            Client.query({
              q: $scope.query,
              sort: $scope.sort_order,
              direction: $scope.direction,
              limit: $scope.limit,
              page: $scope.page},
            function(obj) {
              $scope.more = obj.clients.data.length === $scope.limit;
              $scope.clients = $scope.clients.concat(obj.clients.data);
            });
          };

          //sort the cols
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
            $scope.reset();
          };

          //show the arrows
          $scope.show_arrow = function(col) {
            return ($scope.sort_order == col);
          };

          //show more
          $scope.show_more = function() {
            $scope.page += 1;
            $scope.search();
          };
          $scope.has_more = function() {
            return $scope.more;
          };

          //reset
          $scope.reset = function() {
            $scope.limit = 2;
            $scope.page = 1;
            $scope.more = true;
            $scope.clients = [];
            $scope.search();
          };

          //delete
          $scope.delete = function() {
            var id = this.client.id;
            Client.delete({id: id});
          };

          $scope.sort_order = '';
          $scope.direction = 'asc';
          $scope.arrow = 'down';

          $scope.reset();
        });

