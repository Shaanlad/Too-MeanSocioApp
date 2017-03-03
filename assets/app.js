angular.module('app',[
'ngRoute','ui.router'
])


.config(function ($routeProvider) {
	$routeProvider
	.when('/', {controller: 'PostsCtrl', templateUrl:'posts.html'})
	.when('/register', {controller: 'RegisterCtrl', templateUrl: 'register.html'})
	.when('/login', {controller: 'LoginCtrl', templateUrl: 'login.html'})
})


.controller('PostsCtrl', function($scope, PostsSvc, $http) {
	$scope.addPost = function() {
		if ($scope.postBody) {
			PostsSvc.create ({username: 'Kirk', body: $scope.postBody}).success(function (post) {
				$scope.posts.unshift(post)
				$scope.postBody = null;
			})
		}
	}

	PostsSvc.fetch().success(function (posts) {
		$scope.posts = posts
	})

	// $http.get('/api/posts').success(function (posts) { 
	// 	$scope.posts = posts	
	// })
	console.log("In this")
})

.controller('LoginCtrl', function ($scope, UserSvc) {
	$scope.login = function(username, password) {
		UserSvc.login(username, password)
		.then(function (user) {
			console.log(user)
		})
	}
})

.service('PostsSvc', function ($http) {
	this.fetch = function () {
		return $http.get('/api/posts')
	}
	this.create = function (post) {
		return	$http.post('/api/posts', post)	
	}
})

.service('UserSvc', function ($http) {
	var svc = this
	svc.getUser = function (){
		return $http.get('api/users/', { 
			headers: {'X-auth':this.token}
		})
	}
	svc.login = function (username, password) {
		return $http.post('api/sessions', {
			username: username, password: password
		}).then(function (val) {
			svc.token = val.data
			return svc.getUser()
			console.log(svc.getUser())	
		})
	}
})

