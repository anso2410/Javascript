/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    
    // to get the value of an input: document.getElementById("element-id").value

    // document.getElementById("run").addEventListener("click", function() {

    //     // your code here
    //   let nbr = document.getElementById('number').value;
    //     function factorisation(nbr) {
    //         if (nbr ===0){
    //             return 1;
    //         }
    //         else{
    //             return (nbr * factorisation(nbr-1));
    //         }
            
            
    //     }
    //     alert(factorisation)(nbr);
    // });
    document.getElementById("run").addEventListener("click", () => {
    
       
        function factorialize(num) {
            
            if (num < 0) // si nombre plus petit que 0 rejette le
                return -1;

            
             if (num == 0) //si le nombre = 0 retourne resultat 1
                return 1;
            
               

            
            else {
                return (num * factorialize(num - 1)); // sinon execute 
            }
        }
        
       alert (factorialize(document.getElementById("number").value));
    });

})();
