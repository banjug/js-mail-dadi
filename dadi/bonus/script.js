// // generare un numero da 1 a 6 per il giocatore
// let playerNum = Math.ceil(Math.random() * 6);
// console.log(playerNum);
// // generale un numero da 1 a 6 per il computer 
// let computerNum = Math.ceil(Math.random() * 6);
// console.log(computerNum);
// // confrontare i due numeri per decidere il vincitore
// // annunciare il vincitore
// if (playerNum > computerNum) {
//     console.log("The player wins!");
// } else if (playerNum < computerNum) {
//     console.log("The computer wins!");
// } else {
//     console.log("It's a tie!");
// };

let playButton = document.querySelector(".button");
let playerNum = 0;
let computerNum = 0;

playButton.addEventListener('click', function() {
        playerNum = Math.ceil(Math.random() * 6);
        computerNum = Math.ceil(Math.random() * 6);

        console.log(playerNum);
        console.log(computerNum);
        
        let resultText = document.querySelector(".result");
        
        let plaWin = document.querySelector(".pla-win");
        let cpuWin = document.querySelector(".cpu-win");
        let noWin = document.querySelector(".no-win");



        if (playerNum > computerNum) {
            resultText.innerHTML = `The player number is ${playerNum} and the CPU number is ${computerNum} so the player wins!`;
            plaWin.style.display = 'block';
        } else if (playerNum < computerNum) {
            resultText.innerHTML = `The player number is ${playerNum} and the CPU number is ${computerNum} so the computer wins!`;
            cpuWin.style.display = 'block';
        } else {
            resultText.innerHTML = `The player number is ${playerNum} and the CPU number is ${computerNum} so it's a tie!`;
            noWin.style.display = 'block';
        };
    }

);
