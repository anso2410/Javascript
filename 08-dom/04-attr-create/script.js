/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// (function() {

//      // your code here
//     let valeurImg = document.getElementById('source');
//      let image = valeurImg.getAttribute("data-image");
//     let monImage = document.createElement('img');
//     document.getElementById('source').remove();
//      document.getElementsById('target').innerHtML ="<img src= '" + image +"'>"; 
//  })();

(function() {

     let valueImg = document.getElementById("source");
     let monImage = valueImg.getAttribute("data-image");
 
     document.getElementById("source").remove();
     document.getElementById("target").innerHTML = "<img src='"+monImage+"'>";
 })();