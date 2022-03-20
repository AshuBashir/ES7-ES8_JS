// ES8 Feature
//Async / Await
// they can be used in synchronous functionality in js
//when a async fxn is called, they return a promise, and when an async fxn returns a value, the promise will be resolved with the return value

//when a async fxn is called, they return a exception, and when an async fxn returns a value, the promise will be resolved with the thrown  value

//async fxn works on top of the promises and they use promises to return the results

// async and await works together and we use await inside the async fxn, if used outside it will throw error
//await allows us to pause async function and wait until promise is resolved


//Normal fxn

// function myFunc(){
//     console.log("Hello World! My name is Aysha");
// }

// myFunc();

//async fxn
 async function myFunc(){
    console.log("Hello World! My name is Aysha");
}

myFunc();


// //using arrow fxn
// const myFunc1 = async ()=>{
//     //function body
//     //await
// }


// // we can use multiple awaits
// async function myFunc2(){
//     let asyncResult1 = await ourAsyncFunction();
//     let asyncResult2= await ourAsyncFunction();
//     let asyncResult3= await ourAsyncFunction();

//     return asyncResult + asyncResult2 + asyncResult3;

// }

function myPromise(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve('Promise is resolved');
        }, 3000);
    });
}

async function ourMsg(){
    const message = await myPromise();
    console.log(`Message : ${message}`);
}



//new pgm

function firstPromise(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve('First Promise fulfilled after 3 seconds')
        }, 3000)

    });
}

function secondPromise(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve('Second Promise fulfilled after 4 seconds')
        },4000)

    });
}

function thirdPromise(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve('Third Promise fulfilled after 5 seconds')
        }, 5000)

    });
}

async function message(){
    const first = await firstPromise();
    const second = await secondPromise();
    const third = await thirdPromise();

    console.log(`${first} , ${second} , ${third}`);
    
}

message();



// new pgm

async function getUser(name){
    let response = await fetch(`https://api.github.com/users/${name}`);
    let data = await response.json();
    return data;
}

getUser("Ashu").then(data => console.log(data));


// promise chaining using async/ await

function add_positivenos_async(n1, n2) {
    let p = new Promise(function (resolve, reject) {
       if (n1 >= 0 && n2 >= 0) {
          resolve(n1 + n2)
       } else
          reject('NOT_Postive_Number_Passed')
    })
    return p;
 }
 async function addInSequence() {
    let r1 = await add_positivenos_async(10, 20)
    console.log("first result", r1);
    let r2 = await add_positivenos_async(r1, r1);
    console.log("second result", r2)
    let r3 = await add_positivenos_async(r2, r2);
    console.log("third result", r3)
    return "Done Sequence"
 }
 addInSequence().then((r)=>console.log("Async :",r));
 console.log('end')


