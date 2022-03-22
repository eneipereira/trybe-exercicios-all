const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Sem utilizar o array.sort()

const ordenedArray = () => {
  oddsAndEvens[0] = 2;
  oddsAndEvens[1] = 3;
  oddsAndEvens[2] = 4;
  oddsAndEvens[3] = 7;
  oddsAndEvens[4] = 10;
  oddsAndEvens[5] = 13;

  return oddsAndEvens
}

ordenedArray()

console.log(`Os números ${ordenedArray()} se encontram ordenados de forma crescente!`)

// Utilizando array.sort()

oddsAndEvens.sort((a, b) => a - b);

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);