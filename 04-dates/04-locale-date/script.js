/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let theDate = new Date();

let tabAffichage = {
     year :"numeric", 
     month : "long",
     weekday : "long",
    day :"2-digit",
    hour : "2-digit",
    minute : "2-digit"
};

  document.getElementById("target").innerHTML = theDate.toLocaleString("en-CA", tabAffichage);
    
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
 
 
    // your code here

})();
