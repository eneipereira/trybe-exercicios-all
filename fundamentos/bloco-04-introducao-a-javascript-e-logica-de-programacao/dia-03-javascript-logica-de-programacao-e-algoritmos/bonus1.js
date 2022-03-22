// 1 - Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

/* 
n = 5

*****
*****
*****
*****
***** 
*/

let n = 5;
let symbol = '* ';
let line = '';

for (let i = 0; i < n; i += 1) {
  line += symbol;
}
for (let j = 0; j < n; j += 1) {
  console.log(line);
}