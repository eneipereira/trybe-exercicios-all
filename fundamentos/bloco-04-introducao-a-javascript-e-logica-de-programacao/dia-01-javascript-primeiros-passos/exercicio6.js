// 6 - Escrever um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

/* 
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .

Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

Exemplo: bishop (bispo) -> diagonals (diagonais)
*/

let peçaDeXadrez;

switch (peçaDeXadrez.toLowerCase()) {
  case 'peão':
    console.log('Peão -> Uma casa pra frente, no primeiro movimento podem ser duas.');
    break;
  case 'rainha':
    console.log('Rainha -> Qualquer direção, quantas casas forem necessárias.');
    break;
  case 'rei':
    console.log('Rei -> Uma casa em qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo -> Diagonais.');
    break;
  case 'cavalo':
    console.log('Cavalo -> Movimento em "L", podendo pular peças.');
    break;
  case 'torre':
    console.log('Torre -> Vertical e horizontal.');
    break;
  default:
    console.log('Nome de peça inválido!');
}