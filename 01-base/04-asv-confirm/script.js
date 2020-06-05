/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let age = Number( prompt('whats your age ?'));
let gender = prompt('what\'s your gender ?');
let place = prompt('where do you live ?');
alert('you are a ' + gender + ' you have ' + age + ' years old '+ ' you live in ' + place);
 if (confirm('are this informations correct ?')) {
    alert('welcome to our house !');
 }
 else{
    let age = Number( prompt('whats your age ?'));
    let gender = prompt('what\'s your gender ?');
    let place = prompt('where do you live ?');
 }

})();
