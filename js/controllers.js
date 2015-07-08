/* globals angular */
'use strict';

function ArtCtrl($scope, $http){
	$http.get('json/galleries.json').success(function(data) {
   	$scope.galleries = data;
   	$scope.gallery = $scope.galleries[0];
   	$scope.setImage($scope.gallery.collection[0]);
 	});
	$scope.partialChoice = "UV";
	$scope.aboutChoice = 1;

	$scope.chooseAbout = function(event, part){
		event.preventDefault();
		$scope.aboutChoice = part;
	};

	$scope.whichAbout = function(part){
		return $scope.aboutChoice == part;
	};

	$scope.setImage = function(imageUrl){
		$scope.showImage = imageUrl;
	};

	$scope.getGallery = function(){
		var found = false;
		angular.forEach($scope.galleries, function(gall, index){
			if(gall.galleryType == $scope.partialChoice && !found){
				$scope.gallery = gall;
				$scope.setImage(gall.collection[0]);
				found = true;
				return;
			}
		});
	};

	$scope.choosePartial = function(event, part){
		event.preventDefault();
		$scope.partialChoice = part;
		$scope.getGallery();
	};

	$scope.SelectGallery = function(gallery){
		$scope.gallery = gallery;
		$scope.setImage(gallery.collection[0]);
	};

	$scope.whichPartial = function(part){
		return $scope.partialChoice == part;
	};
}

function ProgrammingCtrl($scope){

	$scope.partialChoice = 1;

	$scope.choosePartial = function(event, part){
		event.preventDefault();
		$scope.partialChoice = part;
	};

	$scope.whichPartial = function(part){
		return $scope.partialChoice == part;
	};
}
