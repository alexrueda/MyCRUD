angular.module('grupouno')
.controller('entidadesCtrl', ['$scope', '$http', function ($scope, $http) {
	var servidor = 'http://olimpiadas.herokuapp.com/api/';

	$http.get(servidor + 'entidades/')
	.success(function(datos){
		$scope.entidades = datos;
		
	});
	$scope.entidadNueva = {};
	$scope.mostrando = false;
	$scope.btCrearMostrar = true;

	$scope.GuardarNuevaEntidad = function(){
		

		$http.post(servidor + 'entidades/', $.param($scope.entidadNueva) )
		.success(function(r){
			console.log('Entidad Guardada.');
			console.log(r);
			$scope.entidades.push(r);
			
		}).error(function(r){
			console.log('No se creó la entidad.');
			console.log(r);
		});

	}


	$scope.editEntidad = function(mater){
		
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
	$scope.DeleteEntidad = function (entidad, key) {
		$http.delete(servidor + 'entidades/' + entidad.id + '/').
			success(function () {
				console.log(key);
				console.log($scope.entidades);
				$scope.entidades.splice(key, 1);
			}).
			error(function () {
				console.log('No se pudo eliminar la entidad.')
			})

	}
	$scope.editEntidad = function (entidad) {
		angular.copy(entidad, $scope.entidades)
		console.log($scope.entidades);
		$scope.GuardarNuevaEntidad = false;
		$location.hash('frmNewUser');

		};
	}
])	
//}])