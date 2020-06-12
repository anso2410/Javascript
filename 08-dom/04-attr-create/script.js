/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let value = document.getElementById('source');
    let img = value.getAttribute("data-image");
    let monImage = document.createElement('img');
    
   
monImage.setAttribute('src', value);
document.getElementById('target').append(img);
// document.getElementById('source').remove();
})();



// (function() {

//     let x = document.getElementById("source");
//     let y = x.getAttribute("data-image");

//     document.getElementById("source").remove();
//     document.getElementById("target").innerHTML = "<img src='"+y+"'>";

// })();    
// let linkatt = document.getElementById("source").getAttribute("data-image");
// let imgelem = document.createElement("img");
// imgelem.setAttribute('src', linkatt);
// document.getElementById("target").append(imgelem);
// document.getElementsByClassName('material').item(0).removeChild(document.getElementById("source"));