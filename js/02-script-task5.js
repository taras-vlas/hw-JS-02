function checkForSpam (str) { 
   'use strict';
   // Write code under this line
   str.toLowerCase();
 
   if (str.toLowerCase().includes('spam') || str.toLowerCase().includes('sale')) {
      console.log(str.toLowerCase());
      return true;
   } 
   console.log(str.toLowerCase());
   return false;
     
 }
 
console.log(checkForSpam('Latest technology news')); // false
 
console.log(checkForSpam('JavaScript weekly newsletter')); // false
 
console.log(checkForSpam('Get best sale offers now!')); // true
 
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true