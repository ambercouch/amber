'use strict';

/**
 * @ngdoc function
 * @name amberApp.controller:ClientCtrl
 * @description
 * # ClientCtrl
 * Controller of the amberApp
 */
angular.module('amberApp')
        .controller('ClientNewCtrl', function($scope, $location, Client) {
          $scope.save = function() {
            Client.save($scope.item, function() {
              $location.path('/clients');
            });
          };
        });