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
			templateUrl: 'scripts/Alumnos.html',
			controller: 'AlumnosCtrl'
		})
		.state('usuarios', {
			url: '/users',
			template: '<h2>Modificación de usuarios</h2><a ui-sref="usuarios.listado">Ir al usuarios</a><div ui-view>Aqui el listado</div>'
		});
		$stateProvider
		.state('Grupos', {
			url: '/Grupos',
			template: '<h2>Buuul</h2><p>Este es el grupo</p>' 
		})
		.state('preguntas', {
			url: '/preguntas',
			template: '<h2>Preguntas</h2>'+
				'<p>Aqui veremos y modificaremos las preguntas</p>' +
				'<ul class="nav nav-pills">' +
					'<li ui-sref-active="active"><a ui-sref="preguntas.matematicas">Matemáticas</a></li>' +
					'<li ui-sref-active="active"><a ui-sref="preguntas.espaniol">Español</a></li>' +
				'</ul>' +
				'<div ui-view></div>',
			controller: function($scope, $state){
				$scope.$state = $state;
				console.log("A las preguntas");
			}
		})
		.state('preguntas.matematicas', {
			url: '/mat',
			template: '<h2>Matemáticas</h2>'+
				'<p>Numeritos para los malvados</p>'
		})
		.state('preguntas.espaniol', {
			url: '/esp',
			template: '<h2>Español</h2>'+
				'<p>Para los bien hablados '+
				'<button class="btn btn-default" popover="Este es el contenido del popover ;)"'+
				' popover-title="Aqui el titulo">Presioname para un popover</button><button popover="{{dynamicPopover}}" popover-title="{{dynamicPopoverTitle}}" class="btn btn-default">Dynamic Popover</button><button popover-title="Hola mundo" popover-placement="left" popover="On the Top!" class="btn btn-default">Top</button></p>',
			controller: function($scope){
				$scope.dynamicPopover = "Hello, World!";
  				$scope.dynamicPopoverTitle = "Title";
			}
		});



}])
.run(function($rootScope, $state) {
      $rootScope.$state = $state;
    });