'use strict';

/* Services */
angular.module('gamecatServices', ['ngResource']).
	factory('Game', function($resource){
		return $resource('json/:gameId.json', {}, {
			query: {method:'GET', params:{gameId:'games'}, isArray:true}
		});
});
