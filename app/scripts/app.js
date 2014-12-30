'use strict';

/**
 * @ngdoc overview
 * @name oyblogApp
 * @description
 * # oyblogApp
 *
 * Main module of the application.
 */
angular
  .module('oyblogApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ]).config(function($stateProvider,$urlRouterProvider){
  $stateProvider.state('main',{
	  url: '/',
	  controller:'MainCtrl',
	  templateUrl:'views/main.html'
	  }).state('about',{
		  url: '/about',
		  controller:'AboutCtrl',
		  templateUrl:'views/about.html'
	  });
  $urlRouterProvider.otherwise('/');
  
  
//  .config(function ($routeProvider) {
//    $routeProvider
//      .when('/', {
//        templateUrl: 'views/main.html',
//        controller: 'MainCtrl'
//      })
//      .when('/about', {
//        templateUrl: 'views/about.html',
//        controller: 'AboutCtrl'
//      })
//      .otherwise({
//        redirectTo: '/'
//      });
    
       
    
  });
