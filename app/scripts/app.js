'use strict';

/**
 * @ngdoc overview
 * @name amberambercouchcoukApp
 * @description
 * # amberambercouchcoukApp
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
