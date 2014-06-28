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
