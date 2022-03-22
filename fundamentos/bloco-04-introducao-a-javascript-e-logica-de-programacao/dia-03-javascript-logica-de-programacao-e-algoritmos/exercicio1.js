// 1 - O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:

/* O fatorial é representado pelo sinal !
4! = 4 x 3 x 2 x 1 = 24 */

// Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

let factorial = 1;
let number = 10;

for (let i = number; i > 0; i -= 1) {
  factorial *= i;
}
console.log(factorial);