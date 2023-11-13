/*
//Hoisting
//With Functions
calculateAge(1990);
function calculateAge(year) {
    console.log(2016 - year);
}


retirement(1965);
var retirement = function(year) {
    console.log(65 - (2016 - year));
}

//Hoisting Works with function declaration not with function Expression


//With Variables
console.log(age);
var age = 23;


function foo() {
   
    var age = 65;
    console.log(age);
}
foo();
console.log(age);


//Scoping
var a = 'Hello';
first();

function first() {
    var b = 'Hi';
    second();

    function second() {
        var c = 'Hey';
        console.log(a + b + c);
    }
}
*/

/*
var a = 'Hello';
first();

function first() {
    var b = 'Hi';
    second();
    
    function second() {
        var c = 'Hey';
        third();
    }
}

function third() {
    var d = 'John';
    //console.log(c);
    console.log(a+d); 
}
*/
//The this keyword
/*
calculateAge(2000);
function calculateAge(year) {
    console.log(2016 - year);
    console.log(this);
}
*/
var john = {
    name: "John",
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2016-this.yearOfBirth)
        /*
        function innerFunction() {
            console.log(this);
        }
        innerFunction();
        */
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
}

mike.calculateAge = john.calculateAge;
mike.calculateAge();







