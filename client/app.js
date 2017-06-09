(function() {
  'use strict';

  var app = angular.module('contactsApp', []);

  app.controller('contactsController', function($scope, $http) {

    $http.get('http://localhost:3001/api/contacts')
      .then(function(response) {
        $scope.contacts = response.data;
      });
    
    $scope.saveContact = function(contact) {
      // $scope.first_name = 'peter';
      // $scope.last_name = 'haviar';
      // $scope.email = 'one4u2@gmail.com';
      // $scope.web = 'www.surfkemp.sk';
      $http.post('http://localhost:3001/api/contacts', contact)
        .then(function(response) {
          $scope.contacts.push(response.data);
      });
    };

  });
})();

