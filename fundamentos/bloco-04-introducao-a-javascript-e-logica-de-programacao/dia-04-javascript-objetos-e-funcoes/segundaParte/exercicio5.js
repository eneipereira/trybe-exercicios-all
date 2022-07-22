// 1 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

/* 
Array de teste: [2, 3, 2, 5, 8, 2, 3]; 

Valor esperado no retorno da função: 2
 */

function repeatNumber(array) {
  let repeat = null;
  let counter = 0;
  for (let number in array.sort()) {
    if (array[number] !== repeat) {
      repeat = array[number];
      counter = 1;
      } else {
        counter += 1;
      }
    }
  return repeat;
}
console.log(repeatNumber([2, 3, 2, 5, 8, 2, 3]));