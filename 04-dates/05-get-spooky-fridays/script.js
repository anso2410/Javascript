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

    // your code here
    // document.getElementById("run").addEventListener("click", () => {
    //     let mydate = new Date();

    //     let options = {
    //         month: 'long'
    //     };
    //     mydate.setFullYear(new Number(document.getElementById("year").value));
    //     for (let index = 0; index < 12; index++) {
    //         for (let ind = 1; ind <= 31; ind++) {
    //             mydate.setMonth(index, ind);
    //             if (mydate.getDay() == 5 && mydate.getDate() == 13) {
    //                 console.log(new Intl.DateTimeFormat('fr-FR', options).format(mydate));
    //             }
    //         }
    //     }
    // });
            document.getElementById("run").addEventListener('click', function(){
                let date = new Date();
                let optionFormat = {
                    month : "long"
                };
              date.setFullYear( new Number(document.getElementById("year").value));
             
             for (let mois= 0; mois < 12; mois++) {
                 for (let)
                if (date.getDay() === 5 && date.getDate() === 13 ){
                   
                }
                console.log(new Intl.DateTimeFormat('fr-FR', optionFormat).format(date));// Intl.DateTimeFormat.prototype.format()
             }
            });
})();
