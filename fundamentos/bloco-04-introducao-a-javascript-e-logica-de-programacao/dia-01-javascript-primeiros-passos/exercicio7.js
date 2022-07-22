// 7 - Escrever um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

/* Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100. */

let Porcentagem = 50;

if (Porcentagem < 0 || Porcentagem > 100) {
  console.log('Insira um valor válido para a nota.');
}
else if (Porcentagem >= 90) {
  console.log('A');
}
else if (Porcentagem >= 80) {
  console.log('B');
}
else if (Porcentagem >= 70) {
  console.log('C');
}
else if (Porcentagem >= 60) {
  console.log('D');
}
else if (Porcentagem >= 50) {
  console.log('E');
}
else {
  console.log('F');
}