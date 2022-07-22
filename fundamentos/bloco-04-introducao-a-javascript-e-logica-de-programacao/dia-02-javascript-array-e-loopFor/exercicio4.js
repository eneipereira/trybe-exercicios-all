let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20"

let finalResult = 0;

for (let i = 0; i < numbers.length; i++) {
  finalResult += numbers[i];
}

finalResult = finalResult / numbers.length;

if (finalResult > 20) {
  console.log('valor maior que 20');
} else {
  console.log('valor menor ou igual a 20');
}

/* Algoritmo
Adicionar o array;
Criar uma variavel com valor 0;
Criar um loop que percorre o array;
Incrementar a variavel com o valor correspondente a cada loop;
Criar uma outra variável, cujo o valor é o resultado da divisão da primeira variável pelo tamanho do array;
Criar um if com a condição da variável ser maior que 20;
Caso a variável obedeça a condição:
  Imprimir 'valor maior que 20';
Caso contrário:
  Imprimir 'valor menor ou igual a 20'. */