/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    document.getElementById('run').addEventListener("click", function(){
        let day = document.getElementById("dob-day").value ;
        let month =Number( document.getElementById("dob-month").value) -1;
       
        let year = document.getElementById("dob-year").value;
        let birthday = new Date(year, month, day);
           alert(birthday);
       
       function getAge (date){
           let diff = Date.now()- date.getTime();
           let age = new Date(diff);
           return Math.abs(age.getFullYear() - 1970);
       }

       alert(getAge(new Date(birthday)));
    });
   
    // your code here

})();
