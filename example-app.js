console.log($("h1").attr("data-reply"));
// ------------------------------------------
// $(document).ready(function() {

// 	var currentStep = 0;

// 	$(#step1).hide();
// 	$(#step2).hide();
	
// 	$("#btnStep1").click(function() {

// 		$(#step1).show();
// 		$(#step2).hide();

// 		currentStep = 1;
// 		// update the database...
// 	});

// 	$("#btnStep2").click(function() {

// 		$(#step1).hide();
// 		$(#step2).show();

// 		currentStep = 2;
// 	});

// });

// --------------------------------------------------
var person = function(firstname, lastname) {
	this.firstname = firstname;
	this.lastname = lastname;
}

function logPerson() {
	var john = new Person('John', 'Doe');
	console.log(john);
}

logPerson();




