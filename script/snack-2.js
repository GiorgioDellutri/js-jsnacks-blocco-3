// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.



let numbers = [];

let userNumber;
let sum = 0;


while (sum < 50){
    userNumber = parseInt(prompt('Inserisci numero'));
    sum += userNumber;
    numbers.push(userNumber);
}
console.log(sum)