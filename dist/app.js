!function(){"use strict";angular.module("portalApp",[])}(),function(){"use strict";function cadastrarAlunoController($scope){var vm=this;vm.index=-1,vm.nome={},vm.cpf={},vm.endereco={},vm.matricula={},vm.email={},vm.alunos=[],vm.adicionarAlunos=function(){-1===vm.index?vm.alunos.push(vm.aluno):vm.alunos[vm.index]=vm.aluno,vm.aluno={},vm.index=-1}}angular.module("portalApp").controller("cadastrarAlunoController",cadastrarAlunoController),cadastrarAlunoController.$inject=["$scope"]}();