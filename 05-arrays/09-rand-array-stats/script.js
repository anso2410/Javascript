/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
document.getElementById('run').addEventListener('click', function(){



  function random (min, max)
{
    let rand = Math.random() * (min-max);
    numbers = rand -(rand*2);
    return Math.floor (numbers);
 } 
   const tabNumber = [
       random(1, 100),
       random(1, 100),
       random(1, 100),
       random(1, 100),
       random(1, 100),
       random(1, 100),
       random(1, 100),
       random(1, 100),
       random(1, 100),
       random(1, 100),
  ];
   document.getElementById('n-1').innerHTML= tabNumber[0];
   document.getElementById('n-2').innerHTML= tabNumber[1];
   document.getElementById('n-3').innerHTML = tabNumber[2];
   document.getElementById('n-4').innerHTML = tabNumber[3];
   document.getElementById('n-5').innerHTML = tabNumber[4];
   document.getElementById('n-6').innerHTML = tabNumber[5];
   document.getElementById('n-7').innerHTML = tabNumber[6];
   document.getElementById('n-8').innerHTML = tabNumber[7];
   document.getElementById('n-9').innerHTML = tabNumber[8];
   document.getElementById('n-10').innerHTML = tabNumber[9];

   const min = tabNumber.reduce((a, b) => Math.min(a, b))
   document.getElementById('min').innerHTML = min;

   const max = tabNumber.reduce((a, b) => Math.max(a,b)) //(function(a, b) {
    document.getElementById('max').innerHTML = max;

    const sum = tabNumber. reduce(function(a, b){
        return a + b;
    }, 0)
    document.getElementById('sum').innerHTML = sum;
   
   
    document.getElementById('average').innerHTML = sum/10;
}) 

})();
