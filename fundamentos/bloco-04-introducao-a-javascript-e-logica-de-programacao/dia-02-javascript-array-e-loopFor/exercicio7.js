let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 7 - Utilizando for, descubra qual o menor valor contido no array e imprima-o

let lowestNumber = numbers[0];

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < lowestNumber) {
    lowestNumber = numbers[i];
  }
}
console.log(lowestNumber);

/* Algoritmo
Adicionar o array;
Criar uma variavel com valor que corresponde ao indice '0' do array;
Criar um loop que percorre o array;
Criar um if com a condição da variável ser maior que o valor correspondente a cada loop;
Caso a condição seja verdadeira:
  Substituir o valor atual da variável pelo valor correspondente ao loop;
Imprimir a variável. */