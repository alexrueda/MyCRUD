angular.module('grupouno', [
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
		.state('usuarios', {
			url: '/usuarios',
			templateUrl: 'views/usuarios.tpl.html',
			controller: 'UsuariosCtrl'
		})
		.state('disciplinas', {
			url: '/disciplinas',
			templateUrl: 'views/disciplinas.tpl.html',
			controller: 'disciplinasCtrl'
		})
		.state('idiomas', {
			url: '/idiomas',
			templateUrl: 'views/idiomas.tpl.html',
			controller: 'idiomasCtrl'
		})
		.state('niveles', {
			url: '/niveles',
			templateUrl: 'views/niveles.tpl.html',
			controller: 'nivelesCtrl'
		})
		.state('test', {
			url: '/test',
			templateUrl: 'views/test.tpl.html',
			controller: 'TestCtrl'
		})
		.state('inscripciones', {
			url: '/inscri',
			templateUrl: 'views/inscripciones.tpl.html',
			controller: 'InscripcionesCtrl'
		})
		.state('entidades', {
			url: '/entidades',
			templateUrl: 'views/entidades.tpl.html',
			controller: 'entidadesCtrl'
		})
		.state('categoria', {
			url: '/categoria',
			templateUrl: 'views/categorias.tpl.html',
			controller: 'CategoriasCtrl'
		})
		.state('examen', {
			url: '/examen',
			templateUrl: 'views/examen.tpl.html',
			controller: 'ExamenCtrl'
		})
		.state('preguntas', {
			url: '/preguntas',
			templateUrl: 'views/preguntas.tpl.html',
			controller: 'preguntasCtrl'
		})
		.state('respuestas', {
			url: '/respuestas',
			templateUrl: 'views/respuestas.tpl.html',
			controller: 'RespuestasCtrl'
		})
		.state('bug', {
			url: '/bug',
			templateUrl: 'views/bug.tpl.html',
			controller: 'BugCtrl'
		});



}])
.run(function($rootScope, $state) {
      $rootScope.$state = $state;
    });