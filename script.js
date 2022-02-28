const boxes = document.querySelectorAll('.box')
const resetButton = document.querySelector('#reset')
let board = ['','','','','','','','']
let turns = 0
const playerX = "X"
let xArray = []
const playerO = "O"
let oArray = []

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

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ]; 

let win = "something"
findBox = (box) =>{
    if(turns % 2 == 0){
        xArray.push(box)
        console.log(xArray)
    }
    else{
        oArray.push(box)
        console.log(oArray)
    }
}


for(let i = 0; i<boxes.length; i++){
    boxes[i].addEventListener('click', function(){
        if(turns % 2 == 0){
            boxes[i].innerText=playerX
            turns++;
            findBox()
        }
        else if(turns % 2 == 1){
            boxes[i].innerText=playerO
            turns++;
            findBox()
        }
    })
}

//Win Validation
// Something Something, if