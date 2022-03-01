const boxes = document.querySelectorAll('.box')
const resetButton = document.querySelector('#reset')
let board = [0,0,0,0,0,0,0,0,0]
let turns = 0
const playerX = "X"
let xArray = []
const playerO = "O"
let oArray = []
winner=false
isGameActive

//have to switch between X and O
//need variable called turns starting off at 0
//using some math operator use js logic to decide wether or not our turn is even or odd with that we can decide we have player X or O
//if turns modulo 2 =0 then it is player x if turns modulo 2 =1 then is it O, use math.ceiling

//check if the number is even
// if(number % 2 == 0) {
//     console.log("The number is even.");
// }

// // if the number is odd
// else {
//     console.log("The number is odd.");
// }

// have board2 with 9 positions, list player as 1 or 2 in each position in the index based on their chosen position

// have each box effect position of array based on index b1 effects board[1]


// let userAction = ()=>{
//     if(turns % 2 == 0){
//         boxes[i].innerText=playerX
//         turns=+1
//     }
//     else if(turns % 2 == 1){
//         boxes[i].innerText=playerO
//         turns=+1
//     }
// }



// if(turns % 2 == 0){
//     board2[box].push="x"
// }
// else{
//     board2[box].push="o"
//     }
// }

const findBox = (box) =>{
    if(turns % 2 == 0){
        board[box] ="x"
        console.log(board)
    }
    else{
        board[box] ="o"
        console.log(board)
    }
}

for(let i = 0; i<boxes.length; i++){
    boxes[i].addEventListener('click', function(){
        if(isGameActive = true){
            if(turns % 2 == 0){
                boxes[i].innerText=playerX
                turns++;
                handleResultValidation
                // checkWinner
                console.log(winner)
            }
        
            else if(turns % 2 == 1){
                boxes[i].innerText=playerO
                turns++;
                handleResultValidation
                // checkWinner
                console.log(winner)
        
        }
    }
    })
}

const winningConditions = [
    // horizontal win conditions
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // vertical win conditions
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // diagonal win conditions 
    [0, 4, 8],
    [2, 4, 6]
];


// const checkWinner = () => {


//     const boxValue1 = board[winningConditions[0]]
//     const boxValue2 = board[winningConditions[1]]
//     const boxValue3 = board[winningConditions[2]]

//     if (boxValue1 != null && boxValue1 === boxValue2 && boxValue2 === boxValue3) {
//         gameOverScreen(boxValue1)
//         winner = true
//         } 
//         else {
//         const drawGame = board.every((box)=> box != null)
//         if (drawGame) {
//         gameOverScreen(null)
//         }
//     }
// }


// function handleResultValidation() {
//     let roundWon = false;
//     for (let i = 0; i <= 7; i++) {
//         const winCondition = winningConditions[i];
//         const a = board[winCondition[0]];
//         const b = board[winCondition[1]];
//         const c = board[winCondition[2]];
//         if (a === '' || b === '' || c === '') {
//             continue;
//         }
//         if (a == b && b == c) {
//             roundWon = true;
//             winner = true;
//             break;
//         }
//     }

//     if (roundWon) {
//         announce(currentPlayer === 'X' ? PLAYERX_WON : PLAYERO_WON);
//         isGameActive = false;
//         return;
//     }

//     if (!board.includes(''))
//     announce(TIE);
// }

const reset = () => {
    for(let i = 0; i < boxes.length; i++){
        boxes[i].innerText = null
    }
}