/* 1 - Palindroma
Chiedere all'utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

var parolaUtente = prompt("inserisci qui una parola, io verificherò se è polindroma");
// var splitUtente = parolaUtente.split("");
// console.log(splitUtente);
// var utenteReverse = splitUtente.reverse();
// console.log(utenteReverse);

var parolaFin2 = ""; 

var check = polindroma (parolaUtente);

if (parolaUtente.toLowerCase() == parolaFin2.toLowerCase()) {
    alert("complimenti! la tua parola è polindroma!");
} else {
    alert("riprova, la tua parola non è polindroma");
}


function polindroma (parola) {

    var parola1 = parolaUtente.split("");
    console.log(parola1);
    
    var parola2 = parola1.reverse();
    console.log(parola2);

    for (var i = 0; i < parola2.length; i++) {
        parolaFin2 += parola2[i];   
    }

    console.log(parola);
    console.log(parolaFin2);
    
}