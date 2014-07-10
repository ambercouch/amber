'use strict';

/**
 * @ngdoc function
 * @name amberApp.controller:ClientCtrl
 * @description
 * # ClientCtrl
 * Controller of the amberApp
 */
angular.module('amberApp')
        .controller('ClientEditCtrl', function($scope, $location, $routeParams, Client) {
          var id = $routeParams.clientId;

          Client.get({id: id}, function(obj) {
            $scope.item = obj.clients[0];
          });

          //console.log($scope.item);
          $scope.action = 'UPDATE';
          $scope.save = function() {
            Client.update({id: id}, $scope.item, function() {
              $location.path('/clients');
            });
          };
        });