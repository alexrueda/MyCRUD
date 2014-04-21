angular.module('rutasApp')
.controller('MateriasCtrl', ['$scope', '$http', function ($scope, $http) {
	$scope.Materias = [
		{nombre: 'Informatica', grupo: '10'},
		{nombre: 'Matematicas', grupo: '10'},
		{nombre: 'Español', grupo: '11'},
		{nombre: 'Inglés', grupo: '11'},
		{nombre: 'Informatica', grupo: '9'}
	];
}])