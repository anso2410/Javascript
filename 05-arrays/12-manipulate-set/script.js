/* becode/javascript
 *
 * /05-arrays/12-manipulate-set/script.js - 5.12: manipulation d'un Set
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const fruits = new Set([
        "apple",
        "pear",
        "strawberry",
        "tomato",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grape",
        "cherry",
    ]);
    document.getElementById('run').addEventListener('click', function(){

    fruits.add('banana').add('kiwi');
    
   // console.log(fruits);
    // your code here});
    //  fruits.forEach((elem) => {
    //          if (elem == 'pomme' || elem == 'cerise') {
    //             fruits.delete(elem);
    //         }
     fruits.delete('apple');
     fruits.delete('cherry');
     console.log(fruits);
// });
    });
})();


