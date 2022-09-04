//Alternate each case of each of string given

//alternateCase("abc")            => "ABC"
let alternateCase = function (s) {
   let chars = s.toUpperCase().split("");
   return chars.join("");
 };
 let txt = "abc";
 console.log(alternateCase(txt));
 
 // alternateCase("ABC")            => "abc"
 let alternate = function (s) {
   let karakter = s.toLowerCase().split("");
   return karakter.join("");
 };
 let text = "ABC";
 console.log(alternate(text));

 
 //alternateCase("Hello World")    => "hELLO wORLD"
 const kata = 'Hello Word';
 const isUpperCase = char => char.charCodeAt(0) >= 65 && char.charCodeAt(0)<= 90;
 const isLowerCase = char => char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122;
 const flipCase = kata => {
 let newStr = '';
 const margin = 32;
  for(let i = 0; i < kata.length; i++){
     const hasil = kata[i];
     if(isLowerCase(hasil)){
        newStr += String.fromCharCode(hasil.charCodeAt(0) - margin);
     }else if(isUpperCase(hasil)){
        newStr += String.fromCharCode(hasil.charCodeAt(0) + margin);
     }else{
        newStr += hasil;
     };
   };
   return newStr;
  };
 console.log(flipCase(kata));

 