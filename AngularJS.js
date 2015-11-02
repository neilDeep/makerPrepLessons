angular.module("AngularJS", []);

myApp.controller("prepController", function($scope) {
  $scope.people = [{name: "tom", age: 30}, {name: "Ellie", age: 24}];
  $scope.tree = "Big";
  $scope.addPerson = function() {
    var name = $scope.newPerson;
    var age = $scope.newAge;
    $scope.people.push({name: name, age: age});
    $scope.newPerson = "";
    $scope.newAge = "";
  };
});
