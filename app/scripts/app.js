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
    'ngSanitize',
    'ngTouch',
    'uuid',
    'ui.router'
  ]).config(function($stateProvider,$urlRouterProvider,$locationProvider){
  $stateProvider.state('main',{
	  url: '/',
	  controller:'MainCtrl',
	  templateUrl:'views/main.html'
	  }).state('about',{
		  url: '/about',
		  controller:'AboutCtrl',
		  templateUrl:'views/about.html'
	  }).state('tarinat',{
//		  url: '/q?&otsikko&aihe',
		  url: '/q/:otsikko/:aihe',
		  controller:'TarinatCtrl',
		  templateUrl:'views/tarinat.html'
	  });
  
  
  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode(false).hashPrefix('!');  	
  
           
  }).run(function($rootScope) {
	  
	  $rootScope.htmlReady = function(page) {
          $rootScope.$evalAsync(function() { // fire after $digest
              setTimeout(function() { // fire after DOM rendering
                  if (typeof window.callPhantom === 'function') { 
                      window.callPhantom({hello: page });
                  }
              }, 0);
          });
      };
	
	});
