// MODULE
// Lec.3 Sec.14 3a. When putting any extra dependencies into your app, 
// then all you have to do is add them into the array declared in your app.
var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

// CONTROLLERS
// Lec.2 Sec.7 1. This is a place to put the code that is used in the part that controls the main app.
// Lec.3 Sec.11 1. When beginning with $scope there is nothing called to make 
// anything happen. It's just there.
// Lec.3 Sec.11 2. Scope provides the communication between the model and the view.
// Lec.3 Sec.14 5. All the dependencies must be called as a parameter first before 
// calling it within the function.
// Lec.3 Sec.14 6. It is very easy to use all the services that angularjs has making
// testing very much nicer for you.

myApp.controller('mainController', function ($scope, $log, $filter, $http) {

	// Lec.2 Sec.9 1. We will connect the view to the model within this.
	// Lec.2 Sec.9 2. Dependency Injection: giving a function an object, 
	// which doesn't create the object inside, but passes it into the function.
	// Lec.3 Sec.13 1. Now when we add anything within the function that 
	// calls from the $scope it will call it as an object.
	// Lec.3 Sec.14 1. Any Angular services can be used as dependency injection. 
	// Lec.3 Sec.14 4. Each one of these services is a part of what angular provides
	// for persons to make the functions easier when developing.
	console.log($scope);
	console.log($log);
	console.log($filter);
	console.log($http);

	$log.log("Hi all.");
	$log.info("This is some information");
	$log.warn("Warning");
	$log.debug("some debug information while writing my code.");
	$log.error("This was an error!!!");

	// Lec.3 Sec.14 2. There are many service functions that can be used within Angular to help you
	// do many different things within the way you code.

	$scope.name = "Abby";
	$scope.formattedname = $filter('uppercase')($scope.name);

	$log.info($scope.name);
	$log.info($scope.formattedname);
   
});

// Lec.3 Sec.12 1.So I can place this function string on the console if I console.log the function name.
function searchPeople (firstname, $scope, height, age, occupation) {
	// Lec.3 Sec.12 2. So also the whole parameter of the function is also a string 
	// which could be parsed and called separately.
	return 'Abby Hartman';
}

console.log(angular.injector().annotate(searchPeople));
