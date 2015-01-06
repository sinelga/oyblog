'use strict';

/**
 * @ngdoc filter
 * @name oyblogApp.filter:filters
 * @function
 * @description
 * # filters
 * Filter in the oyblogApp.
 */
angular.module('oyblogApp')
  .filter('convert_to_url', function () {
    return function (input) {
    	
//    	return input.toLowerCase().replace(/s+/g, '-').replace(/[^a-z0-9-]/ig,'');
        return encodeURI(input);     
           
      
    };
  });

angular.module('oyblogApp').filter('thumb_w110shadow6_bff0000',
		function() {

			return function(input) {

				return input.replace('thumb', 'w110shadow6_bff0000');
			};

		});

angular.module('oyblogApp').filter('thumb_w300shadow',
		function() {

			return function(input) {

				return input.replace('thumb', 'w300shadow');
			};

		});
