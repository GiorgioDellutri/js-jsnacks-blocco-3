/**
 * Crea una funzione che accetti due argomenti, e che restituisca un valore numerico randomico tra i due argomenti inclusi.
 */


function getrandomNumber (num1, num2){
    const randomNumber = Math.floor(Math.random() * (num2 - num1 + 1) + num1);
    return randomNumber;
}

let intervallo = getrandomNumber (10, 100)

console.log(intervallo)