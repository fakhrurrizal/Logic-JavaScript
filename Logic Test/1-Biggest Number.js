/*Description:
Create a function that takes one positive three digit integer and rearranges its digits to get the maximum possible number. Assume that the argument is an integer.

Returm null if the argument is invalid.*/


// maxRedigit(123) --> 321
const num = 123;
const digit = function(num) {
   if(num < 100 || num > 350)
      return null
   return +num
   .toString()
   .split('')
   .sort((a, b) => b - a)
   .join('')
};
console.log(digit(num));


// maxRedigit(231) --> 321
const nomer = 231;
const maxdigit = function(nomer) {
   if(nomer < 100 || nomer > 350)
      return null
   return +nomer
   .toString()
   .split('')
   .sort((a, b) => b - a)
   .join('')
};
console.log(maxdigit(nomer));


// maxRedigit(321) --> 321

const nomor = 321;
const maxRedigit = function(nomor) {
   if(nomor < 100 || nomor > 350)
      return null
   return +nomor
   .toString()
   .split('')
   .sort((a, b) => b - a)
   .join('')
};
console.log(maxRedigit(nomor));

// maxRedigit(-1)  --> null
const num1 = -1;
const digit3 = function(num1) {
   if(num1 < 100 || num1 > 350)
      return null
   return +num1
   .toString()
   .split('')
   .sort((a, b) => b - a)
   .join('')
};
console.log(digit3(num1));


//maxRedigit(0)   --> null
const num4 = 0;
const digit5 = function(num4) {
   if(num4 < 100 || num4 > 350)
      return null
   return +num4
   .toString()
   .split('')
   .sort((a, b) => b - a)
   .join('')
};
console.log(digit5(num4));

//maxRedigit(99)  --> null
const num5 = 99;
const digit6 = function(num5) {
   if(num5 < 100 || num5 > 350)
      return null
   return +num5
   .toString()
   .split('')
   .sort((a, b) => b - a)
   .join('')
};
console.log(digit6(num5));


//maxRedigit(1000) --> null
const num6 = 1000;
const digit7 = function(num6) {
   if(num6 < 100 || num6 > 350)
      return null
   return +num6
   .toString()
   .split('')
   .sort((a, b) => b - a)
   .join('')
};
console.log(digit7(num6));