/* Exercício 1 - Crie uma função que calcule a área e o perímetro de um quadrilátero qualquer. Essa função deve receber dois parâmetros: base e altura e retornar um objeto no formato: { area: 0, perimetro: 0 }. 
Fórmulas: 
perimetro = (2*base) + (2*altura)
area = base * altura (editado) */

function perimeterAndArea (base, altura) {
  let results = {
    perimetro: (2*base) + (2*altura),
    area: base * altura,
  }
  return results
}
console.log('O resultado dessa bagaça aí é: ', perimeterAndArea(4,8))








/* Exercício 2 - Crie uma função que, dado um array de números inteiros, retorne a quantidade de números pares e ímpares no formato: { pares: 0, ímpares: 0 } */

let integerNumbers = [2, 3, 6, 7, 13, 16, 23, 28, 33, 37];

function integerNumbers (integerNumbers) {
  let results = {
    par: 0,
    impar: 0,
  }
  for(let values of integerNumbers)
}