// 4 - Depois, faça uma pirâmide com n asteriscos de base:

/* 
n = 5

  *
 ***
***** 
*/

let n = 5;
let symbol = '*';
let line = '';
let left = 2;
let right = 2;

for (let i = 1; i < n; i += 1) {
  for (let j = 0; j <= n; j += 1) {
    if (j > left && j < right) {
      line += symbol;
    } else {
      line += ' ';
    }
  }
  console.log(line);
  line = '';
  left -= 1;
  right += 1;
}