var app = angular.module('OutboxApp', ['ngRoute']);
app.config(function($routeProvider) {
			$routeProvider
				.when('/outbox', {
					controller: 'HomeController',
					templateURL: 'views/home.html'
				})
				.when('/outbox/:id', {
						controller: 'EmailController',
						templateURL: 'views/email.html'
					})
				.otherwise({
					redirectTo: '/outbox'
				});

			}); 