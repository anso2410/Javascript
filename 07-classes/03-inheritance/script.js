/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    
    // your code here
    class cat extends Animal {
        constructor(name){
               super() ;
               this.name = name; 
                            // Lorsqu'il est utilisé dans un constructeur, le mot-clé super est utilisé seul et doit apparaître avant le mot-clé this.
}
   static get greeting() {
       return "meuuuh !";  // stack overflow https://stackoverflow.com/questions/42884751/whats-the-
   };
}

    class dog extends Animal {
        constructor(name){
            super(); // appelle le constructor de la classe parent
            this.name = name;
        }
        static get greeting(){
            return "bêêêêh !";
        };
}
        
        
    
    document.getElementById('run').addEventListener('click', function(){
let cat2 = new cat ('gribouille');
let dog2 = new dog ('rex');

console.log (cat2.sayHello());
console.log (dog2.sayHello());

    });
   
})();
