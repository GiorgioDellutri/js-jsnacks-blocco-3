// Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.


let firstArray = [2,4,56,73,21,566,778,10,9,5];
let secondArray = [2,4,56,73,21,566];
let randomNumber = Math.floor(Math.random() * 101);

while (firstArray.length === secondArray.length){

    if (firstArray.length < secondArray.lenght){

        firstArray.push(randomNumber);
    } else if (secondArray.lenght < firstArray.length){
        
        secondArray.push(randomNumber);
    }

}

console.log(firstArray);
console.log(secondArray);