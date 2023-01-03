let playerX = 'X'
let playerO = 'O'
let lap = 1
let gameOver = false
let winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]
let random
let cpuMode = true
function play(elem) {
    if (gameOver == false) {
        if (elem.innerHTML == "") {
            if (lap % 2 != 0) {
                elem.innerHTML = playerX
            } else {
                elem.innerHTML = playerO
            }
            checkWin()
            equal()
            lap++
            if (cpuMode == true && gameOver == false) {
                cpuPlay()
    
    
            }
        }
    }
   
}

function checkWin() {
    let cells = document.querySelectorAll(".cell")
    for (let i = 0; i < winCondition.length; i++) {
        if (cells[winCondition[i][0]].innerHTML != "") {
            if (cells[winCondition[i][0]].innerHTML == cells[winCondition[i][1]].innerHTML && cells[winCondition[i][1]].innerHTML == cells[winCondition[i][2]].innerHTML) {
                if (cells[winCondition[i][0]].innerHTML == playerX) {
                    document.querySelector('#StatutJeu').innerHTML = "joueur 1 gagne";
                    gameOver = true
                } else if (cells[winCondition[i][0]].innerHTML == playerO) {
                    document.querySelector('#StatutJeu').innerHTML = "joueur 2 gagne";
                    gameOver = true
                }
            }
        }
    }
}
function equal() {
    if (lap == 9 && gameOver == false) {
        document.querySelector('#StatutJeu').innerHTML = "draw";
        gameOver = true
    }
}


function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
} 

function cpuPlay() {
   let cells = document.querySelectorAll('.cell') 
   random = getRandom(0,8)
   while (true) {
    if (cells[random].innerHTML != "") {
        random = getRandom(0,8)
    }else{
        cells[random].innerHTML = "O"
        break
    }
   }
   checkWin()
   equal()
   lap++

}

