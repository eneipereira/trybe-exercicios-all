// 3 - Fazer um programa que retorne o maior de três números. Definir no começo do programa três constantes com os valores que serão comparados.

const a = 326
const b = 128
const c = 624

if (a > b && a > c) {
  console.log('O maior numero é o: ' + a)
}
else if (b > a && b > c) {
  console.log('O maior numero é o: ' + b)
}
else {
  console.log('O maior numero é o: ' + c)
}