/**
 *
 * Data una lista di 20 numeri diversi.
 * generiamo una lista secondaria di
 * 10 numeri presi dalla lista, diversi tra loro.
 *
 */
const startingList = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function get_random (list , numMin, numMax) {
    return list[Math.floor((Math.random()*startingList.length))];
}

console.log(get_random(startingList));



// const randomNumber =  tenNumber[parseInt(Math.floor(Math.random() * 10))];

// console.log(randomNumber);
// console.log(randomNumber, startingList[randomNumber]);



// function getRandomNumber (num1, num2){
//     const randomNumber = Math.floor(Math.random() * (num2 - num1 + 1) + num1);
//     return randomNumber;
// }

// let intervallo = getRandomNumber (10, 100)

// console.log(intervallo)