/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    for (let a = 0; a < 101 && a>1 ; a++) {
       if (a %3 === 0) {
           console.log('fizz');
       }
       if (a% 5 ===0) {
           console.log('buzz');
       } if (a% 5 ===0 && a%3 ===0) {  //a% 15 ===0;
           console.log('fizzbuz'); 
       }
       else{
           console.log(a);
       }
        
    }

})();
