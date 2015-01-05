'use strict';

/**
 * @ngdoc service
 * @name 0FiFipornoDeskApp.Jsonpservice
 * @description
 * # Jsonpservice
 * Service in the 0FiFipornoDeskApp.
 */
angular.module('0FiFipornoDeskApp')
  .service('jsonpService', function ($http) {
	  	  
	  return {
	  	  
	  getJSONP: function(url) {
	  	  
	  		return $http.jsonp(url).success(function(data){

	  			return data;
		  	
	  		});
	  
	  	}
	  	  	  
	  
	  };
	  	  	  
	  
  });
