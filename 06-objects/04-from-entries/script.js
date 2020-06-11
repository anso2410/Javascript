/* becode/javascript
 *
 * /06-objects/04-from-entries/script.js - 6.4: fromEntries
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];
    // your code here
    document.getElementById('run').addEventListener('click',function (){
    //creer un nouvel objet
    let newObject = new Map();
    console.log(newObject);
    //parcourir le tableau keys
    keys.forEach (function(element, index) {//pour chaque index de keys
     newObject.set (element, values[index]);// gr&ceà set j'ajoute à chaque index des elemnt parcouru dans keys l index du tableau values
    
    });
    console.table(Object.fromEntries(newObject)); //grace à object.fromEntries j'associe les index de keys et values en objet cle /valeur
    });
})();
