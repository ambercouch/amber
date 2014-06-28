'use strict';

/**
 * @ngdoc function
 * @name amberApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the amberApp
 */
angular.module('amberApp')
        .controller('MainCtrl', function($scope) {
          $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
          ];
        });
