import { Component } from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 10,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 11,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 15,
    status: 'Aprenderei'
  },
];

const contentList = (content) => {
  return (
    <div key={content.bloco} className='card'>
      <h4>{`O conteúdo é: ${content.conteudo}`}</h4>
      <p>{`Status: ${content.status}`}</p>
      <p>{`Bloco: ${content.bloco}`}</p>
    </div>
  );
}

class Content extends Component {
  render() {
    return (
      <div className='content'>
        {conteudos.map((conteudo) => contentList(conteudo)
        )} 
      </div>
    )
  };
}

export default Content;
