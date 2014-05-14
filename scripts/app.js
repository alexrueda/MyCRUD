angular.module('rutasApp', [
	'ui.router',
	'ui.bootstrap',
	'ngAnimate'
])
.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $httpProvider) {
	
	// Para permitir el CORS
	$httpProvider.defaults.useXDomain = true;
	//delete $httpProvider.defaults.headers.common['X-Requested-With'];
	//provider.defaults.headers.post["X-CSRFToken"] = $cookies.csrftoken; // Requiere ngCookies
	$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
	$httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

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
		})
		.state('usuarios', {
			url: '/usuarios',
			templateUrl: 'views/usuarios.tpl.html',
			controller: 'UsuariosCtrl'
		});



}])
.run(function($rootScope, $state) {
      $rootScope.$state = $state;
    });