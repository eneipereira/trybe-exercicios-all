import { Component } from 'react';
import Image from './Components/Image';
import Order from './Components/Order';
import { headphone, energyDrink } from './orders';
import UserProfile from './Components/UserProfile';
import users from './users';

class App extends Component {
  render() {
    // Chame o componente Image , de forma que seja mostrada esta imagem, ou o texto Cute cat staring , caso a imagem não consiga ser carregada.

    // Complete o código do componente App de forma que os pedidos referentes aos produtos headphone e energyDrink sejam filhos de App .
    return (
      <div>
        <div>
          <h2>Fixação - Props</h2>
          <Image source='https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg' alternativeText='Cute cat staring' />
        </div>
        <div>
          <h2>Fixação - Composição de componentes</h2>
          <h3>Orders recently created</h3>
          <Order order={headphone} />
          <Order order={energyDrink} />
        </div>
        <div>
          <h2>Fixação - Lista de componentes e chaves</h2>
          {users.map(user => <UserProfile key={user.id} user={user} />)}
        </div>
      </div>
    // Altere a chamada do componente de UserProfile de forma que a lista seja gerada dinamicamente de maneira adequada.
    // Utilizamos, como boa prática, o 'id' de cada objeto, pois ele não se repete e a key deve ser unica para cada item. Caso não haja o 'id', é utilizado o index do item como um recurso, não sendo recomendado, pois a lista pode permitir a alteração da ordem dos itens, levando a aplicação a apresentar mau funcionamento.
    )
  };
}

export default App;

// 1 - O que o componente App é em relação a Order ?
// Pai
