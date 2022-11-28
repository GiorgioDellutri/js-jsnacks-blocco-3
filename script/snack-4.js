// Prendere due array della stessa lunghezza e generarne un terzo, prendendo alternativamente gli elementi da uno e dall'altro es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
let a = ["a","b","c","d","e"];
let b = [1,2,3,4,5];
let c =[];
let i = 0;

// for (let i = 0; i < a.length; i++){      // SOLUZIONE FOR (rimuovere la dichiarazione della variabile 'i' a riga 5)
//     c.push(a[i],b[i]); 
// }

while (c.length < a.length){  //SOLUZIONE WHILE
    c.push(a[i],b[i]); 
    i++
}

console.log(c)