// 7 - Escreva um teste que verifique a chamada da callback de uma função uppercase , que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.

const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

it('Verifica se a função `uppercase` retorna palavras em letras maiúsculas', (done) => {
  uppercase('banana', (str) => {
    try {
      expect(str).toStrictEqual('BANANA');
      done();
    } catch (err){
      done(err);
    }
  })
})