// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

/* 
Array de teste: [2, 3, 6, 7, 10, 1];

Valor esperado no retorno da função: 4 
*/

function highestValueIndex(array) {
  let number = 0;
  for (let index in array) {
    if (array[number] < array[index]) {
      number = index
    }
  }
  return number;
}

console.log(highestValueIndex([2, 3, 6, 7, 10, 1]))