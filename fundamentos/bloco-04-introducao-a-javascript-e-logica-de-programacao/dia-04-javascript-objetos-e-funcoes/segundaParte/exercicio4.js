// 1 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

/* 
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

Valor esperado no retorno da função: Fernanda
 */

function highCharacters(array) {
  let name = array[0];
  for (let highest in array) {
    if (array[highest].length > name.length) {
      name = array[highest]
    }
  }
  return name;
}

console.log(highCharacters(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
