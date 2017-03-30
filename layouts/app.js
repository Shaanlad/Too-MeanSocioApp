var app = angular.module('app', [
	'ngRoute','ui.router'
])

angular.module('app')
.controller('ApplicationCtrl', function ($scope) {
	$scope.$on('login', function (_, user) {
		$scope.currrentUser = user
	})
})
angular.module('app',[])
.controller('LoginCtrl', function ($scope, UserSvc) {
	$scope.login = function(username, password) {
		UserSvc.login(username, password)
		.then(function (response) {
			console.log(user)
			$scope.emit('login', response.data)
		})
	}
})
angular.module('app')
.controller('PostsCtrl', function($scope, PostsSvc) {
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
}
angular.module('app')
.service('PostsSvc', function ($http) {
	this.fetch = function () {
		return $http.get('/api/posts')
	}
	this.create = function (post) {
		return	$http.get('/api/posts', post)	
	}
})
angular.module('app')
.config(function ($routeProvider) {
	$routeProvider
	.when('*', {controller: 'PostsCtrl', templateURL:'posts.html'})
	.when('/register', {controller: 'RegisterCtrl', templateURL: 'register.html'})
	.when('/login', {controller: 'LoginCtrl', templateURL: 'login.html'})
})
$locationProvider.html5Mode(true)
angular.module('app')
.service('UserSvc', function ($http) {
	var svc = this
	svc.getUser = function (){
		return $http.get('api/users/')
	}
	svc.login = function (username, password) {
		return $http.post('api/sessions', {
			username: username, password: password
		}).then(function (val) {
			svc.token = val.data
			$http.defaults.headers.common['X-Auth'] = val.data
			return svc.getUser()
			console.log(svc.getUser())	
		})
	}
})