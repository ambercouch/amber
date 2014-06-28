'use strict';

/**
 * @ngdoc function
 * @name amberApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the amberApp
 */
angular.module('amberApp')
        .controller('AboutCtrl', function($scope) {
          $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
          ];
        });
