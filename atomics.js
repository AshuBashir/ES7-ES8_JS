// create a SharedArrayBuffer
var buffer = new SharedArrayBuffer(50);

// creates an unsigned integer 8-bit array
var a = new Uint8Array(buffer);

// Initialising element at zeroth position of array with 9 
a[0] = 9;
console.log(Atomics.load(a, 0)); 

// Displaying the return value of the Atomics.store() method
console.log(Atomics.store(a, 0, 3)); 

// Displaying the updated SharedArrayBuffer 
console.log(Atomics.load(a, 0));     


// // new code
// const buffer = new SharedArrayBuffer(2048);
// console.log(buffer)
// const ta = new Uint8Array(buffer);

// ta[0]; // 0

// ta[0] = 5; // 5

// Atomics.add(ta, 0, 12); // 5

// Atomics.load(ta, 0);	 // 17

// Atomics.and(ta, 0, 1); // 17

// Atomics.load(ta, 0); // 1

// Atomics.exchange(ta, 0, 12); // 1

// Atomics.load(ta, 0); // 12

// Atomics.compareExchange(ta, 0, 5, 12); // 1

// Atomics.load(ta, 0); // 1

// Atomics.isLockFree(1); // true

// Atomics.isLockFree(2); // true

// Atomics.or(ta, 0, 1); // 12

// Atomics.load(ta, 0); // 13

// Atomics.store(ta, 0, 12); // 12

// Atomics.sub(ta, 0, 2); // 12

// Atomics.load(ta, 0); // 10

// Atomics.xor(ta, 0, 1); // 10

// Atomics.load(ta, 0); // 11
