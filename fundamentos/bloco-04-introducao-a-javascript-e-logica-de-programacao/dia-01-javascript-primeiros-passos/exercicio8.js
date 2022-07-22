// 8 - Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .

// Bonus: use somente um if

const num1 = 1;
const num2 = 3;
const num3 = 6;

let even = false;

if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
  even = true;
}
console.log(even);