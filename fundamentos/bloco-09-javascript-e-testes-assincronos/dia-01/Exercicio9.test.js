// 9 - A fim de evitar que futuros treinadores sejam prejudicados, o Professor Carvalho pediu que você o ajude a escrever testes para o sistema que distribui os pokémons. Crie um novo arquivo .test.js ou .spec.js e copie o código abaixo. Complete os testes para a função getPokemonDetails de acordo com as especificações.

// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("./Exercicio8");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    const error = new Error('Não temos esse pokémon para você :(');

    const callback = (err, message) => {
      expect(err).toEqual(error)
      done();
    }

    getPokemonDetails((pokemon) => pokemon.name === 'Mewtwo', callback);
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    const phrase = `Olá, seu pokémon é o Squirtle, o tipo dele é Water e a habilidade principal dele é Water Gun`
    const callback = (err, message) => {
      expect(message).toEqual(phrase)
      done();
    }

    getPokemonDetails((pokemon) => pokemon.name === 'Squirtle', callback);
  });
});