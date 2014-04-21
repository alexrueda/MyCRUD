angular.module('rutasApp', [
	'ui.router',
	'ui.bootstrap',
	'ngAnimate'
])
.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $httpProvider) {
	
	// Para permitir el CORS
	$httpProvider.defaults.useXDomain = true;
	//delete $httpProvider.defaults.headers.common['X-Requested-With'];
	$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
	$httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';



	$urlRouterProvider.otherwise('/')

	$stateProvider
		.state('main', {
			url: '/main',
			templateUrl: 'views/main.tpl.html'
		})
		.state('materias', {
			url: '/materias',
			templateUrl: 'views/materias.tpl.html',
			controller: 'MateriasCtrl'
		});



}])
.run(function($rootScope, $state) {
      $rootScope.$state = $state;
    });