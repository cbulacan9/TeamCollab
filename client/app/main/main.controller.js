'use strict';

angular.module('teamCollabAngularApp')
  .controller('MainCtrl', function ($scope, $http, socket) {
    $scope.awesomeProjects = [];

    $http.get('/api/projects').success(function(awesomeProjects) {
      $scope.awesomeProjects = awesomeProjects;
      socket.syncUpdates('project', $scope.awesomeProjects);
    });

    $scope.addProject = function() {
      if($scope.newProject === '') {
        return;
      }
      $http.post('/api/projects', { 
        name: $scope.projectName,
        number: $scope.projectNumber,
        description: $scope.projectDescription,
      });

      console.log('Hey!')
      $scope.projectName = '';
      $scope.projectNumber = '';
      $scope.projectDescription = '';
    };

    $scope.deleteProject = function(project) {
      $http.delete('/api/projects/' + project._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('project');
    });

  });
