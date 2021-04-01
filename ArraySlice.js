let array1 = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

console.log(array1.slice(3));

console.log(array1.slice(3, 6));   // this will not print the 6th element, that will be avoided and before values will be printed.

console.log(array1.slice(-2));  //  this will print the last two elements of array.

console.log(array1.slice(1,-1));       // this will print the value from index 1 to second last index.
 
console.log(array1.slice());        //  to copy the array into another array.

console.log([...array1]);       //  this is also used to create copy of array.