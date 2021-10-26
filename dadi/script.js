// generare un numero da 1 a 6 per il giocatore
let playerNum = Math.ceil(Math.random() * 6);
console.log(playerNum);
// generale un numero da 1 a 6 per il computer 
let computerNum = Math.ceil(Math.random() * 6);
console.log(computerNum);
// confrontare i due numeri per decidere il vincitore
// annunciare il vincitore
if (playerNum > computerNum) {
    console.log("The player wins!");
} else if (playerNum < computerNum) {
    console.log("The computer wins!");
} else {
    console.log("It's a tie!");
};