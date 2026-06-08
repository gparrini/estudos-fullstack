let letras = ["d", "g", "a", "h", "b", "f", "c", "e"];
let numeros = [1, 6, 5, 4, 10, 8, 20, 19, 3];

letras.sort(); // ordenando os elementos
console.log(letras);

letras.reverse(); //reverter os elementos
console.log(letras);

numeros.sort();
console.log(numeros);

numeros.reverse();
console.log(numeros);

let mesclaArray = letras.concat(numeros);
console.log(mesclaArray);
