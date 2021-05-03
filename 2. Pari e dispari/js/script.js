/* 
L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */


var scelta = prompt("Vuoi scegliere pari o dispari?");
console.log("l'utente ha scelto: " + scelta);
var sceltaNum = parseInt(prompt("scegli in un numero casuale da 1 a 5"));
console.log("numero scelto dall'utente: " + sceltaNum);



var numComputer = randomNumber (1, 5);
console.log(numComputer);

var somma = sceltaNum + numComputer;
console.log(somma);

var vittoria = verifica (somma);
console.log(vittoria); 

function randomNumber (min, max) {
    var number = Math.floor(Math.random() * (max - min + 1)) + min;7
    return number;
} 

function verifica (num) {
    if (scelta == "pari") {
        if (num % 2 == 0) {
            console.log("il giocatore ha vinto la partita");
            alert("hai vinto la partita, la somma dei due numeri è: " + somma);
        }else {
            console.log("il computer ha vinto la partita");
        }
    }else
    if (num % 2 == 0) {
        console.log("il computer ha vinto la partita");
    }else {
        console.log("il giocatore ha vinto la partita");
        alert("hai vinto la partita, la somma dei due numeri è: " + somma);
    }
}
