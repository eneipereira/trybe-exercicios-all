// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

/* 
Array de teste: [2, 4, 6, 7, 10, 0, -3];

Valor esperado no retorno da função: 6
 */

function lowestValueIndex(array) {
  let number = 0;
  for (let index in array) {
    if (array[number] > array[index]) {
    number = index
  }
  }
  return number;
}

console.log(lowestValueIndex([2, 4, 6, 7, 10, 0, -3]));
