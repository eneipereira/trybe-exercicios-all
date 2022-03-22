// 4 - Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

let highestPrime = 0;

for (i = 0; i <= 50; i += 1) {
  if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0) {
  if (i > highestPrime) {
    highestPrime = i;
  }
}
}
console.log(highestPrime);