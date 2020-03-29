import React from 'react';

// A função 'Header' não é o o 'Header' do HMTL!!
// O parâmentro 'props' da função serve para recuperar o título do App
// 'props' é o objeto de propriedades (dentro de 'props', há várias propriedades)
// que se conecta aos tags detro da função 'App'
// 'props' é carregado automaticamente, sem necessidade de importá-lo
// 'props' contém a propriedade 'children'. É interessante fazer uma desestruturação
// nas propriedads de função, para saber quais são as exatas propriedades sendo utilizadas
// No caso, ao invés de chamar " function Header(props)", optou-se por chamar
// " function Header({children})"
// no código alternativo, foi utlizado o atributo 'title = "lorem..." ' da tag <Header /> no App.js)
export default function Header({children}){
    return(
        //sempre utlizar chaves para injetar variáveis ou quaisquer atributos JS
        // A propriedade 'children' traz todo o contepudo da tag 'Header' do componente 'App'
        // O código para a função 'title' (alternativo a <h1>{children}</h1>) seria:
        // <h1>{props.title}</h1>
        <header>
            <h1>{children}</h1>
        </header>
    )
}