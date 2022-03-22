// Para esses exercícios, você deve refazer os exercícios de 1 a 5 do dia 4.1 e fazer com que eles sejam funções de um mesmo arquivo.

// 2 - Fazer um programa que retorne o maior de dois números. Definir no começo do programa duas constantes com os valores que serão comparados.

function biggestNumber (firstNum, secNum) {
  if (firstNum > secNum) {
    return firstNum + ' é maior que ' + secNum;
  }
  else {
    return secNum + ' é maior que ' + firstNum;
  }
}

console.log(biggestNumber(1,2))