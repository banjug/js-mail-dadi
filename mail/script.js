// creare una lista di email
let emailList = ["srour@gmail.com", "esasaki@att.net", "citadel@mac.com", "mrdvt@att.net", "jgoerzen@yahoo.com"];
console.log(emailList);

// chiedere all'utente di inserire la propria mail
let userEmail = prompt("Inserisci la tua email");
console.log(userEmail);

// confrontare la mail inserita dall'utente con tutte le email inserite nella lista
for (let i=0; i < emailList.length; i++) {
    if (emailList[i] === userEmail) {
        console.log("la tua email è presente nel database");
    }
};

// se la mail è presente nella lista l'utente può accedere, se non è presente l'utente viene bloccato