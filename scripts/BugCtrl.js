angular.module('rutasApp')
.controller('BugCtrl', ['$scope', '$http', function ($scope, $http) {
	var servidor = 'http://olimpiadas.herokuapp.com/api/';
 
	$http.get(servidor + 'bug/')
	.success(function(datos){
		$scope.Buges = datos;
	});   

	$scope.nivelNuevo  = {};
	$scope.btCrearMostrar = true;
	$scope.mostrarForm = false;
 


	$scope.saveNewNivel = function(){


		$http.post(servidor + 'bug/', $.param($scope.bugNuevo) )
		.success(function(r){
			console.log('Nivel guardado.');
			console.log(r);
			$scope.Buges.push(r);
		}).error(function(r){
			console.log('No se creó el Nivel.');
			console.log(r);
		});
	}

	

	$scope.eliminarNivel = function (Bug, key) {

		$http.delete(servidor + 'bug/' + Bug.id + '/').
			success(function () {
				console.log(key);
				console.log($scope.Buges);
				$scope.Buges.splice(key, 1);
			}). 
			error(function () {
				console.log('No se pudo eliminar el usuario.')
			})
	}

	$scope.mostrar = function() {
		$scope.mostrarForm = true; 
		$scope.btCrearMostrar = false;
		console.log("Se muestra! Joder Si! " + $scope.btCrearMostrar);
	}

	$scope.ocultarForm = function() {
		$scope.mostrarForm=false; 
		$scope.btCrearMostrar=true;
	};

}])