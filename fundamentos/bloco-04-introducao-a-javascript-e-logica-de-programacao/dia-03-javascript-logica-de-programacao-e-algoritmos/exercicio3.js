// 3 - Considere o array de strings abaixo:

let array = ['java', 'javascript', 'python', 'html', 'css'];

// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let longestWord = '';
for (let i = 0; i < array.length; i += 1) {
  if (longestWord.length < array[i].length)
  longestWord = array[i];
}
console.log(longestWord);

let shortestWord = '';
for (let i = 0; i < array.length; i += 1) {
  if (shortestWord.length > array[i].length || shortestWord === '')
  shortestWord = array[i];
}
console.log(shortestWord);