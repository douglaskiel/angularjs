// Lec.3 Sec.15 1. Aside on arrays and functions: 
// Lec.3 Sec.15 2. functions "can" be put into arrays in javascript
var things = [1,2,3,'string', 
function() {
	alert('Hello!');
}];

things[2](); // This is calling the function within the array.

console.log(things);

// START OF ANGULARJS APP EXAMPLE:
var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);
// Lec.3 Sec.14 7. Having the dependencies and being able to use them within the parameters
// as apart of the controllers to make services available is a clean way to have all you need for you app.

myApp.controller('mainController', function($scope, $log, $filter, $resource){

console.log($scope);
console.log($resource);
});

console.log('*--------------------------------------------------------------------------*');
// Lec.3 Sec.12 3. The function below can be turned into a string, 
// which can be parsed, so that you can understand each part of the string(function),
// and make better decisions by what you see in the code. This is 
// what angular does for you through $scope, controllers, etc...

var searchPeople = function(firstName, lastName, $scope, height, age, occupation){
	return 'jane doe';
}

// var searchPeopleString = searchPeople.toString();
console.log(angular.injector().annotate(searchPeople));

console.log('*--------------------------------------------------------------------------*');

// THIS IS ALL JQUERY BELOW
// // console.log($("h1").attr("reply"));
// var person = "Abby";

// // stevesApp.person = person;
// stevesApp.logPerson();