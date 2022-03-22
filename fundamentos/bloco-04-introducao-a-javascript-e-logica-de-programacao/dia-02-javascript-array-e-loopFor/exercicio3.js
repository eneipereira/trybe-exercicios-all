let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array

let somaArray = 0;

for (let i = 0; i < numbers.length; i++) {
  somaArray += numbers[i];
}

let avg = somaArray / numbers.length;

console.log(avg);

/* Algoritmo
Adicionar o array;
Criar uma variavel com valor 0;
Criar um loop que percorre o array;
Incrementar a variavel com o valor correspondente a cada loop;
Criar uma outra variável, cujo o valor é o resultado da divisão da primeira variável pelo tamanho do array;
Imprimir a ultima variável criada. */