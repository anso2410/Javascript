/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    
            document.getElementById("run").addEventListener('click', function(){
                let date = new Date();
                // let nomMois =[];
                let optionFormat = {
                    month : "long",
                    weekday: "long",
                    day: "numeric"      // pour l'affichage
                };
              date.setFullYear( new Number(document.getElementById("year").value));// reset l'année qui est entrée dans l'input + céer un objet nombre
             
             for (let mois= 0; mois < 12; mois++) {
                 for (let dayNumber = 1; dayNumber <= 31; dayNumber ++){
                   date.setMonth(mois, dayNumber);
                  if (date.getDay() == 5 && date.getDate() == 13 ){           // renvoi jour de la semaine 0= dimanche
                                                                                  // renvoi le jour du mois 1-31
                            console.log( date.getMonth()+1);                                           
                    }
                 }
                {
                   
                }
               
               
             }
            });
})();
