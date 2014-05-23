angular.module('grupouno')
.controller('idiomasCtrl', ['$scope', '$http', function ($scope, $http) {
	var servidor = 'http://olimpiadas.herokuapp.com/api/';

	$http.get(servidor + 'idiomas/')
	.success(function(datos){
		$scope.idiomas = datos;
		
	});
	$scope.idiomaNuevo = {};
	$scope.mostrando = false;
	$scope.btCrearMostrar = true;

	$scope.GuardarNuevoIdioma = function(){
			

		$http.post(servidor + 'idiomas/', $.param($scope.idiomaNuevo) )
		.success(function(r){
			console.log('Eso guardado.');
			console.log(r);
			$scope.idiomas.push(r);
			
		}).error(function(r){
			console.log('No se guardo nada.');
			console.log(r);
			
		});

	}


	$scope.editIdioma = function(mater){
		
	}
	$scope.mostrarForm = function() {
		$scope.mostrando=true; 
		$scope.btCrearMostrar=false;
		console.log("A mostrar el form. " + $scope.btCrearMostrar);
	}
	$scope.ocultarForm = function() {
		$scope.mostrando=false; 
		$scope.btCrearMostrar=true;
	}
	$scope.DeleteIdioma = function (idioma, key) {
		$http.delete(servidor + 'idiomas/' + idioma.id + '/').
			success(function () {
				console.log(key);
				console.log($scope.idiomas);
				$scope.idiomas.splice(key, 1);
			}).
			error(function () {
				console.log('No se eliminó nada.')
			})

	}
	$scope.editIdioma = function (idioma) {
		angular.copy(idioma, $scope.idiomas)
		console.log($scope.idiomas);
		$scope.GuardarNuevoIdioma = false;
		$location.hash('frmNewUser');

		};
	}
])	