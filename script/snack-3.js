// Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.


let firstArray = [2,4,56,73,21,566,778,10,9,5];
let secondArray = [2,4,56,73,21,566];
let addNumber;
console.log(firstArray);
console.log(secondArray);

while(firstArray.length === secondArray.length){
    addNumber = parseInt(prompt('Inserisci numero'));
    secondArray.push(addNumber);
}

console.log(firstArray);
console.log(secondArray);