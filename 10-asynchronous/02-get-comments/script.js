/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    function callback (error, array) {
        if (error){
            console.log('rrr');
        }
        else {
            array.forEach(article =>{
                window.lib.getComments(article.id, (error,array2)=>{
                    if(error){
                       console.log('rrr');
                    }
                    else {
                        article.comments = array2;
                    }
                }

                );
                
            });
        }
        return(array);
    }
    document.getElementById('run').addEventListener('click', function(){
        window.lib.getPosts(callback);
    });
})();
