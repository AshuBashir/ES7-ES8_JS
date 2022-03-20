//ES8 Feature
//Object.getOwnPropertyDescriptor() method

function Student()
{
    this.name = "Ashu";
    this.hello = function()
    {
        alert("Hello babe");
    }
}

var student = new Student();   // creating object of the function



console.log(Object.getOwnPropertyDescriptor(student, "name"));
student.name = "Sufieh";
alert(student.name);  // // will change the name 


// setting writable as false. // o/p: it wont change the name now
console.log(Object.defineProperty(student, "name", {writable : false}))
alert(student.name);



// // setting enumerable now as false


var result = Object.keys(student);
alert(result); // will display name and hello   

// setting enumerable to false now will restrict name in the output ie it will not be shown 
Object.defineProperty(student, "name" ,{enumerable: false});
var demo = Object.keys(student);
alert(demo);



var result1 = Object.keys(student);
alert(result1); // will display name and hello   

// setting configurable to false 
Object.defineProperty(student, "name" ,{configurable: false});
var demo1 = Object.keys(student);
alert(demo1);




