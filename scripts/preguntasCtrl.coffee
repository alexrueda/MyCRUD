'use strict';

angular.module('grupouno').controller 'PreguntasCtrl', ['$scope','$http','$location', ($scope, $http,$location) ->
	
	$scope.NuevaPreg = {}
	$scope.NuevaPreg.duracion = 12
	$scope.editando = false
	$scope.guardando = true
	$http.get('http://olimpiadas.herokuapp.com/api/preguntas/').
		success (pregs)->
			$scope.questions = pregs
		.error (r)->
			console.log "No se pudo conectar a nuestro servidor"
			console.log (r)
	$scope.CrearPregunta = ->

		$scope.NuevaPreg.event = 1
		$scope.NuevaPreg.created_by = 1

		console.log ($scope.NuevaPreg)

		if $scope.guardar
			$http.post('http://olimpiadas.herokuapp.com/api/preguntas', $param($scope.NuevaPreg))
				.success (pr)->
					$scope.questions.push(pr)
				.error (r)->
					console.log "No se pudo escribir la pregunta."
					console.log (r)

			$http.post('http://olimpiadas.herokuapp.com/api/questiontrans', $.param($scope.opcionA),$.param($scope.opcionB))
					.success (answer)->
						console.log answer
						$scope.answer.push(answer)
					.error (r)->
						console.log r
						console.log "No se pudo conectar al servidor"
		else
			$http.put('http://olimpiadas.herokuapp.com/api/preguntas' + $scope.NuevaPreg.id + "/", $.param($scope.NuevaPreg))
				.success ->
					console.log "Pregunta Creada!!!"
					$http.get('http://olimpiadas.herokuapp.com/api/preguntas' + $scope.NuevaPreg.id + "/")
				.error (resp)->
					console.log "No pude editar."
					console.log (resp)

	$scope.DeleteQuestion = (preg,key)->
	$http.delete 'http://olimpiadas.herokuapp.com/api/preguntas' + preg.id + "/"

		.success ->
			console.log (key)
			console.log ($scope.questions)
			$scope.questions.splice(key, 1)
		.error ->
			console.log "No se pudo eliminar la preugnta."

	$scope.EditQuestion = (preg) ->
		angular.copy(preg, $scope,NuevaPreg)
		console.log ($scope.NuevaPreg)
		$scope.guardar = false
		$location.hash('frmPreguntas')
]

















