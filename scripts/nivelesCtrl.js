angular.module('grupouno')
.controller('nivelesCtrl', ['$scope', '$http', function ($scope, $http) {
	var servidor = 'http://olimpiadas.herokuapp.com/api/';

	$http.get(servidor + 'niveles/')
	.success(function(datos){
		$scope.niveles = datos;
		
	});
	$scope.nivelNuevo = {};
	$scope.mostrando = false;
	$scope.btCrearMostrar = true;

	$scope.GuardarNuevoNivel = function(){
			

		$http.post(servidor + 'niveles/', $.param($scope.nivelNuevo) )
		.success(function(r){
			console.log('Nivel guardado.');
			console.log(r);
			$scope.niveles.push(r);
			
		}).error(function(r){
			console.log('No se creó el nivel.');
			console.log(r);
			
		});

	}


	$scope.editNivel = function(mater){
		
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
	$scope.DeleteNivel = function (nivel, key) {
		$http.delete(servidor + 'niveles/' + nivel.id + '/').
			success(function () {
				console.log(key);
				console.log($scope.niveles);
				$scope.niveles.splice(key, 1);
			}).
			error(function () {
				console.log('No se pudo eliminar la nivel.')
			})

	}
	$scope.editNivel = function (nivel) {
		angular.copy(nivel, $scope.niveles)
		console.log($scope.niveles);
		$scope.GuardarNuevoNivel = false;
		$location.hash('frmNewUser');

		};
	}
])