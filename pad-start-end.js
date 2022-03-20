//JS-ES8 Feature
//PadStart(), PadEnd() function

let fname = "Aysha";
console.log(fname.length);
//PadStart()
console.log(fname.padStart(10, 'S'));
console.log(fname.padStart(10));
console.log(fname.padStart(1));  // will return fname
console.log(fname.padStart(10, 'Sufieh'));  // it will not print h bz length of string is to be 10
console.log(fname.padStart(10, 'Shsh'));



//PadEnd

console.log(fname.padEnd(10, 'S'));

console.log(fname.padEnd(10));
console.log(fname.padEnd(4, 'S'));  // original string length is 5, so it will print that
console.log(fname.padEnd(7, 'Sh')); 

