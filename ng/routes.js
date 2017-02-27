angular.module('app')
.config(function ($routeProvider) {
	$routeProvider
	.when('/', {controller: 'PostsCtrl', templateURL:'posts.html'})
	.when('/register', {controller: 'RegisterCtrl', templateURL: 'register.html'})
	.when('/login', {controller: 'LoginCtrl', templateURL: 'login.html'})
})