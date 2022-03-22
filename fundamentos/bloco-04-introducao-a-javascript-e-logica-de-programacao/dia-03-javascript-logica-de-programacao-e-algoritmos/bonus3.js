// 3 - Agora inverta o lado do triângulo. Por exemplo:

/* 
n = 5

    *
   **
  ***
 ****
*****
*/

// Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.

let n = 5;
let symbol = '*';
let line = '';
let putSymbol = n;

for (let i = 0; i <= n; i += 1) {
  for (let j = 0; j < n; j += 1) {
    if (j < putSymbol) {
      line += ' ';
    } else {
      line += symbol
    }
  }
  console.log(line);
  line = '';
  putSymbol -= 1;
}