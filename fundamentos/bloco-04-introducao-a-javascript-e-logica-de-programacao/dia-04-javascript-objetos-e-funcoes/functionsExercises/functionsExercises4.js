// Para esses exercícios, você deve refazer os exercícios de 1 a 5 do dia 4.1 e fazer com que eles sejam funções de um mesmo arquivo.

// 4 - Fazer um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

function conditionNumber(numberX) {
  if (numberX > 0) {
    return ' É positivo.';
  }
  else if (numberX < 0) {
    return ' É negativo.';
  }
  else if (numberX === 0) {
    return 'É zero.';
  }
  else {
    return 'Valor inválido, insira um número.';
  }
}

console.log(conditionNumber(0))