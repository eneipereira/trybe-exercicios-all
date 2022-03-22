// 4 - Fazer um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

const valorX = 32;

if (valorX > 0) {
  console.log('positive');  
}
else if (valorX < 0) {
  console.log('negative');
}
else if (valorX === 0) {
  console.log('zero');
}
else {
  console.log('Valor inválido, insira um número.');
}