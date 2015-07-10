'use strict';

/* App Module */

angular.module('website', ['websiteFilters', 'gamecatServices']).
	config(['$routeProvider', function($routeProvider){
		$routeProvider.
			when('/dev', {templateUrl: 'partials/home.html'}).
			when('/programming', {templateUrl: 'partials/dev.html', controller: ProgrammingCtrl}).
      when('/ravemau5_iframe', {templateUrl: 'partials/ravemau5_iframe.html', controller: ProgrammingCtrl}).
			when('/artwork', {templateUrl: 'partials/art.html', controller: ArtCtrl}).
			otherwise({redirectTo: '/dev'});
	}]);