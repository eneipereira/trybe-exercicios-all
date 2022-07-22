// 1 - Criar uma constante chamada "myName" e atribuir a ela o seu nome.

const myName = "Enei";

// 2 - Criar uma constante chamada "birthCity" e atribuir a ela a sua cidade natal.

const birthCity = "Rio de Janeiro";

// 3 - Criar uma variável chamada "birthYear" e atribuir a ela o ano em que você nasceu.

let birthYear = 1996;

// 4 - Utilizar o console.log() para imprimir as constantes e variáveis que você criou.

console.log(myName)
console.log(birthCity)
console.log(birthYear)

// 5 - Alterar o valor atribuído à variável "birthYear" para 2030. Fazer um console.log(birthYear) novamente para ver o que acontece!

birthYear = 2030;
console.log(birthYear)

// 6 - Alterar o valor atribuído à constante "birthCity". Fazer um console.log(birthCity) novamente! Explicar por que retornou uma mensagem de erro.

birthCity = "São Paulo";
console.log(birthCity)

// TypeError: Assignment to constant variable.

// Esse erro foi retornado porque tentamos mudar o valor de uma constante, o que não é permitido, pois, como o próprio nome diz, é uma constante.