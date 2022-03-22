let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"

let counter = 0;

for(let i = 0; i < numbers.length; i += 1) {
  if(numbers[i] % 2 !== 0) {
    counter += 1;
  }
}

if (counter === 0) {
  console.log('nenhum valor ímpar encontrado');
} else {
  console.log(counter);  
}

/* Algoritmo
Adicionar o array;
Criar uma variavel com valor 0;
Criar um loop que percorre o array;
Criar um if com a condição de o resto da divisão por 2 (dois) do valor correspondente ao loop ser diferente de 0;
Caso a condição seja verdadeira:
Incrementar a variável com o valor 1;
Criar outro if com a condição de o valor da variável ser igual a 0;
Caso a variavel obedeça a condição:
  Imprimir 'nenhum valor ímpar encontrado';
Caso contrário:
  Imprimir a variável. */