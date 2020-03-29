// a importação do React é obrigatório para qualquer componente React, mesmo que não haja 
// uma variável especificando a chamada do React. Na verdade, o fato de haver uma função 
// já significa que este componente está utilizando o React!
import React from 'react';

//Chama o componente 'Header'
import Header from './Header';

//Função exportada para o index.js, que vai preencher o body da página HTML
function App() {
  return (
    //formato alternativo ao que utilizou a função 'title' (cujo código está transcrito ao final)
    <Header>
      Semana OmniStack
    </Header>
  );
}

export default App;

// CÓDIGO ALTERNATIVO! utilizando um atributo ('title') dentro da tag 'Header'
//function App() {
//  return (
//    <Header title="Semana OmniStack" />
//  );
//}