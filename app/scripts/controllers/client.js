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
          $scope.clients = Client.query();
        });

angular.module('amberApp').factory('Client', function($resource) {
  return $resource('http://amberapi.ambercouch.local/api/v1/client', {}, {query: {method: 'GET'}});
});