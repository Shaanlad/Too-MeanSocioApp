angular.module('app',[
'ngRoute','ui.router'
])

angular.module('app')
.controller('PostsCtrl', function($scope) {
	$scope.addPost = function() {
		if ($scope.postBody) {
			PostsSvc.create ({ username: 'Kirk', body: $scope.postBody}).success(function (post) {
				$scope.posts.unshift(post)
				$scope.postBody = null;
			})
		}
	}

	PostsSvc.fetch().success(function (posts) {
		$scope.posts = posts
	})

	$http.get('/api/posts').success(function (posts) { 
		$scope.posts = posts	
	})
	console.log("In this")
})
angular.module('app')
.service('PostsSvc', function ($http) {
	this.fetch = function () {
		return $http.get('/api/posts')
	}
	this.create = function (post) {
		return	$http.get('/api/posts', post)	
	}
})