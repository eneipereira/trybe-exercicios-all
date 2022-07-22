// Para esses exercícios, você deve refazer os exercícios de 1 a 5 do dia 4.1 e fazer com que eles sejam funções de um mesmo arquivo.

// 3 - Fazer um programa que retorne o maior de três números. Definir no começo do programa três constantes com os valores que serão comparados.

function biggestNumber(firstNum, secNum, thirdNum) {
  if (firstNum > secNum && firstNum > thirdNum) {
    return 'O maior numero é o: ' + firstNum
  }
  else if (secNum > firstNum && secNum > thirdNum) {
    return 'O maior numero é o: ' + secNum
  }
  else {
    return 'O maior numero é o: ' + thirdNum
  }
}
console.log(biggestNumber(0,0,0))