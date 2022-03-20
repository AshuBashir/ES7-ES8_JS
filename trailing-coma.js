// ES8 Feature
//Trailing comma

//trailing commas are allowed in array,object and function parameters


//arrays
const number = [1,2,4,5,];  //trailling comma
console.log(number);

let marks = [100,90,80,,]
   console.log(marks.length)
   console.log(marks)
   marks.forEach(function(e){ //ignores empty value in array 
    //Trailing commas in arrays are skipped while using Array.prototype.forEach loop.
      console.log(e)
   })

//function
function add(a,b,){          //trailling comma
    return a+b;
}

 ans = add(5,7);
 console.log(ans);




 function sumOfMarks(marks,){ // trailing commas are ignored
    let sum=0;
    marks.forEach(function(e){
       sum+=e;
    })
    return sum;
 }

 console.log(sumOfMarks([10,20,30]))
 console.log(sumOfMarks([1,2,3],))// trailing comma is ignored  

 //objects
const obj = {
    fname : "Ashu",
    lname : "sufieh",
    age :23,
    gender : "female" ,         //trailling comma
   };

   console.log(obj);


//throws error in such scenario in functi0ns when no arg is passed and just a tailing comma

//    function test(,){} // SyntaxError: missing formal parameter
// (,)=>{}; //SyntaxError: expected expression, got ','
// test(,) //SyntaxError: expected expression, got ','



//Trailing commas cannot be used with rest parameters.


// function test(...arg1,){} // SyntaxError: parameter after rest parameter
// (...arg1,)=>{} // SyntaxError: expected closing parenthesis, got ','