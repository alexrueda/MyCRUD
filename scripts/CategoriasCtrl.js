angular.module('rutasApp')
.controller('CategoriasCtrl', ['$scope', '$http', function ($scope, $http) {
	var servidor = 'http://olimpiadas.herokuapp.com/api/';
	$http.get(servidor + 'categorias/')
	.success(function(datos){
		$scope.Categorias = datos;
	}); 

	$scope.categoriasNueva = {};
	$scope.mostrarForm = false; 
	$scope.btCrearMostrar = true;
 	$scope.editarCategoria = false;

  
	$scope.saveNewMateria = function(){


		$http.post(servidor + 'categorias/', $.param($scope.cateNueva) )
		.success(function(r){
			console.log('Materia guardada.');
			console.log(r);
			$scope.Categorias.push(r);
		}).error(function(r){
			console.log('No se creó la materia.');
			console.log(r);
		}); splice
	} 

	$scope.editarCategoria = function(mater){
			$scope.editarCategoria = false;
			$scope.categoriaActual = alum;
	}

	$scope.eliminarCategoria = function(categoria, key) {
		$http.delete(servidor + 'categorias/' + categoria.id + '/').
				success(function () {
					console.log(key);
					console.log($scope.categorias);
					return $scope.categorias.splice(key, 1);
				}).
				error(function () {
					return console.log('No se pudo eliminar la categoria.')
				})
	}


	$scope.mostrar = function() {
		$scope.mostrarForm=true; 
		$scope.btCrearMostrar=false;
		console.log("Se muestra! Joder! " + $scope.btCrearMostrar);
	}

	$scope.ocultarForm = function() {
		$scope.mostrarForm=false; 
		$scope.btCrearMostrar=true;
	}
}])