!function(){"use strict";angular.module("portalApp",[]);console.log("Está Funfando..")}(),function(){"use strict";function cadastrarAlunoController($scope,$http){var vm=this;vm.init=function(){vm.listaAlunos()},vm.index=-1,vm.aluno={},vm.alunos=[],vm.adicionarAlunos=function(){console.log(vm.aluno),-1===vm.index?(vm.alunos.push(vm.aluno),$http.post("http://localhost:3001/aluno/",vm.aluno).then(function(response){console.log(response)},function(err){console.log(err)})):vm.editarAlunoBase(),vm.aluno={},vm.index=-1},vm.editarAluno=function(item){vm.aluno=angular.copy(vm.alunos[item]),vm.index=item},vm.deletarAluno=function(item){vm.alunos.splice(item,1)},vm.limparAluno=function(item){vm.produto={},vm.index=-1},vm.listaAlunos=function(){$http.get("http://localhost:3001/aluno").then(function(response){console.log(response),vm.alunos=response.data.cadastrarAluno},function(err){console.log(err)})},vm.editarAlunoBase=function(){$http.put("http://localhost:3001/aluno/"+vm.alunos[vm.index]._id,vm.aluno).then(function(response){vm.cadastrarAluno[vm.index]=vm.aluno,vm.limparCampos()},function(err){console.log(err)})},vm.deletarProduto=function(item){$http.delete("http://localhost:3001/aluno/"+vm.alunos[item]._id).then(function(response){vm.alunos=response.data.cadastrarAluno,vm.alunos.splice(item,1)},function(err){console.log(err)})},vm.adicionarAlunoBase=function(){$http.post("http://localhost:3001/aluno/",vm.aluno).then(function(response){vm.alunos.push(vm.aluno),vm.limparCampos(),console.log(response)},function(err){console.log(err)})}}angular.module("portalApp").controller("cadastrarAlunoController",cadastrarAlunoController),cadastrarAlunoController.$inject=["$scope","$http"]}();