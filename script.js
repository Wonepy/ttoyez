const cubes = document.querySelectorAll('.cube')
const cube1 = document.querySelector('#cube1')
const cube2 = document.querySelector('#cube2')
const cube3 = document.querySelector('#cube3')
const cube4 = document.querySelector('#cube4')
const cube5 = document.querySelector('#cube5')
const cube6 = document.querySelector('#cube6')
const cube7 = document.querySelector('#cube7')
const cube8 = document.querySelector('#cube8')
const cube9 = document.querySelector('#cube9')
const currentPlayerContainer = document.querySelector('.current-player-container')

const xHTML = '<span class="cross">x</span>'
const oHTML = '<span class="round">o</span>'

let currentSigne = xHTML;
let coups = 0
let winnerH = undefined;

const restartGame = () => {
     document.querySelector('.end-screen-container').remove()
     cubes.forEach(cube => {
          cube.innerText = "";
          cube.setAttribute("statut", "notUsed")
     });
     coups = 0
     currentSigne = xHTML;
     winnerH = undefined;
	 currentPlayerContainer.innerHTML = `c'est à ${currentSigne} de jouer`;
}


const createEndScreen = (para) => {
     const endScreenContainer = document.createElement('div')
     endScreenContainer.classList.add('end-screen-container');

     const endScreen = document.createElement('div')
     endScreen.classList.add('end-screen');

     const endScreenTitle = document.createElement('div');
     endScreenTitle.innerText = "Tic Tac Ouyez !";
     endScreenTitle.classList.add('end-screen-title');

     const winPara = document.createElement('div')
     winPara.classList.add('winPara');
     winPara.innerHTML = para;

     const restartButton = document.createElement('div');
     restartButton.classList.add('restart-button');
     restartButton.innerText = "RESTART"

     endScreen.appendChild(endScreenTitle)
     endScreen.appendChild(winPara)
     endScreen.appendChild(restartButton)

     endScreenContainer.appendChild(endScreen)

     restartButton.addEventListener('click', () => {
          restartGame()
     });


     return endScreenContainer;
}

const dislayEndScreen = (winner) => {
     document.body.appendChild(createEndScreen(winner))
}

cubes.forEach(cube => {
     cube.addEventListener('click', () => {

          //vérif disponibilité
          if (cube.getAttribute("statut") == "notUsed") {
               cube.innerHTML = currentSigne;
               cube.setAttribute("statut", "used")
               coups = coups + 1

          //////////////////////////change signe//////////////////////////////               
          if (currentSigne == xHTML) {
               currentSigne = oHTML
               currentPlayerContainer.innerHTML = `c'est à <span class="round">${currentSigne}</span> de jouer`;

          } else {
               currentSigne = xHTML
               currentPlayerContainer.innerHTML = `c'est à <span class="cross">${currentSigne}</span> de jouer`;

               }
          /****************************************/
          }



          //Vérifie qui gagne
          //Si c'est x QUI GAGNE
          if(currentSigne == oHTML){
               if (cube1.innerText == cube5.innerText && cube9.innerText == cube5.innerText && cube1.innerText != "" ||
               cube3.innerText == cube5.innerText && cube7.innerText == cube5.innerText && cube3.innerText!= "") {
                    dislayEndScreen("le gagnant est : " +xHTML)
                    winnerH = "x"
                    console.log("diago cross")
                    
               }
               else if(cube1.innerText == cube2.innerText && cube2.innerText == cube3.innerText && cube1.innerText != "" ||
                    cube4.innerText == cube5.innerText && cube5.innerText == cube6.innerText && cube4.innerText != "" ||
                    cube7.innerText == cube8.innerText && cube8.innerText == cube9.innerText && cube7.innerText != "") {
                    dislayEndScreen("le gagnant est : " +xHTML)
                    winnerH = "x"
                    console.log("ligne cross")

                    }
               else if(cube1.innerText == cube4.innerText && cube4.innerText == cube7.innerText && cube1.innerText != "" ||
                    cube2.innerText == cube5.innerText && cube5.innerText == cube8.innerText && cube2.innerText != "" ||
                    cube3.innerText == cube6.innerText && cube6.innerText == cube9.innerText && cube3.innerText != "") {
                    dislayEndScreen("le gagnant est : " +xHTML)
                    console.log("colonne cross")
                    winnerH = "x"

                    }
     
               
          }
                    //Si c'est O QUI GAGNE

          if(currentSigne == xHTML){
               if (cube1.innerText == cube5.innerText && cube9.innerText == cube5.innerText && cube1.innerText != "" ||
               cube3.innerText == cube5.innerText && cube7.innerText == cube5.innerText && cube3.innerText!= "") {
                    dislayEndScreen("le gagnant est : " + oHTML)
                    console.log("diago r")
                    winnerH = "o"
                    
               }
               else if(cube1.innerText == cube2.innerText && cube2.innerText == cube3.innerText && cube1.innerText != "" ||
                    cube4.innerText == cube5.innerText && cube5.innerText == cube6.innerText && cube4.innerText != "" ||
                    cube7.innerText == cube8.innerText && cube8.innerText == cube9.innerText && cube7.innerText != "") {
                    dislayEndScreen("le gagnant est : " + oHTML)
                    winnerH = "o"
                    console.log("ligne r")

                    }
               else if(cube1.innerText == cube4.innerText && cube4.innerText == cube7.innerText && cube1.innerText != "" ||
                    cube2.innerText == cube5.innerText && cube5.innerText == cube8.innerText && cube2.innerText != "" ||
                    cube3.innerText == cube6.innerText && cube6.innerText == cube9.innerText && cube3.innerText != "") {
                    dislayEndScreen("le gagnant est : " + oHTML)
                    console.log("colnne r")
                    winnerH = "o"

                    }
     
               
          }
          //Si aucun vainceur n'est sélectionné alors, il y a égalité :
          if (coups >= 9 && winnerH == undefined) {
               dislayEndScreen("égalité !")
          }
          
          

     })

     
     }
);


document.querySelector('button').addEventListener('click', () => {
     cssColorLink = document.querySelector('link.color-css')
     if (cssColorLink.getAttribute("href") == "colorStyles/colorStyleLight.css") {
          cssColorLink.setAttribute("href", "colorStyles/colorStyleDark.css")
     }else {cssColorLink.setAttribute("href", "colorStyles/colorStyleLight.css")}

});