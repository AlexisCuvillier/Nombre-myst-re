/**
 * L'ordinateur choisit un nombre aleatoire entre 1 et 10
 * nous avons 3 essaie pour trouver le nombre mystere
 * si tu trouve la bonne reponse alors afficher "Felicitation" + numero mystere "
 * sinon afficher "pas de chance tu as perdu le numero etait" et laisser recommencer la partie ou non 
 */
 function find(max) {
    return Math.floor(Math.random() * max);
  }
var find = (find(10));

let reponse =[3, 6, 9];


 for( let i=0; i<3; i++) {
        if(reponse[i] === find  ){
            console.log(`Gagné le nombre etait ${find} `)
            break;
        }
        else{
            console.log(`Perdu essaie encore`)
        }
        
    };


  

   


 