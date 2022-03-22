// 1 - Criar uma constante que receba a nota de uma pessoa candidata em um desafio técnico, e atribuir a ela um valor entre 1 e 100;

const notaCandidato = 85;

/* 2 - Implementar uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se ela está na lista de espera. Para isso, considerar as seguintes informações:

Se a nota for maior ou igual a 85, imprima "Parabéns, você foi aprovada(o)!"
Se a nota for menor que 85 e maior ou igual a 60, imprima "Você está na nossa lista de espera"
Se a nota for menor que 60, imprima "Você foi reprovada(o)" */

if (notaCandidato >= 85) {
  console.log("Parabéns, você foi aprovada(o)!")
}
else if (notaCandidato <= 85 && notaCandidato >= 60) {
  console.log("Você está na nossa lista de espera")
}
else if (notaCandidato < 60) {
  console.log("Você foi reprovada(o)")
}