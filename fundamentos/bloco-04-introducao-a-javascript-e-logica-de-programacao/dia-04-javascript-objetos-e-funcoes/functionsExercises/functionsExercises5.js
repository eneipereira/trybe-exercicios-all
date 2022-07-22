// Para esses exercícios, você deve refazer os exercícios de 1 a 5 do dia 4.1 e fazer com que eles sejam funções de um mesmo arquivo.

// 5 - Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

/* Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
Um ângulo será considerado inválido se não tiver um valor positivo. */

function triangleAngleValid(angleA, angleB, angleC) {
  let sumAngle = angleA + angleB + angleC;
  let validAngle = (angleA, angleB, angleC) > 0;

  if(validAngle) {
    if (sumAngle === 180) {
      return 'É um triângulo válido'
    }
    else {
      return 'Não é um triângulo válido'
    }
  }
  else {
    return 'Ângulo inválido, insira um valor maior que 0'
  }
}

console.log(triangleAngleValid(100,45,35))

