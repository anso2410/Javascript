/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    
    class person  {
        constructor (firstname, lastname){
            this.firstname = firstname;
            this.lastname = lastname;
        };
        get name() {
             return `${this.firstname}  ${this.lastname}`;
            
        }
        set name(result) {
            let tabName = result.split(' ');
            this.firstname = tabName[0];
             this.lastname = tabName[1];
        } 
    }
  
    document.getElementById("run").addEventListener('click', () => {
        let person2 = new person('victor', 'Hugo');
        console.log(person2.name);
        let person3 = new person('Barba','Papa');
        console.log(person3.name);
        console.log(person3 instanceof person);
    })



 


})();
