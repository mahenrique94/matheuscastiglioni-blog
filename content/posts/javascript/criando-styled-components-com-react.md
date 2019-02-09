---
autor: "Matheus Castiglioni"
categoria: "JavaScript"
disqus_identifier: "criando-styled-components-com-react"
disqus_title: "Criando Styled Components Com React"
disqus_url: "https://blog.matheuscastiglioni.com.br/criando-styled-components-com-react"
date: 2018-03-23T08:34:52-02:00
draft: false
keywords: [ "Biblioteca", "Front-End", "Lib", "React", "ReactJS", "Styled Components", "Web" ]
slug: "criando-styled-components-com-react"
tag: [ "Biblioteca", "Front-End", "Lib", "React", "ReactJS", "Styled Components", "Web" ]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1549716938/criando-styled-componentes-com-react_inuix5.png"
title: "Criando Styled Components Com React"
url: "/criando-styled-components-com-react"
---

Muito se fala sobre componentes (*components*) ou componetizar sua aplicação, nesse *post* irei explicar uma forma de estilizar nossos componentes, assim, garantimos que independente do pedaço da nossa aplicação onde o componente for utilizado, seu estilo sempre será o mesmo.

Existem diversas maneiras para trabalharmos com estilização de componentes, sendo algumas delas: [Styled Components](styled-components.com), [CSS Modules](https://github.com/gajus/react-css-modules), CSS normal ou SASS, etc... Como já mencionado, o assunto do *post* será a abordagem referente ao Styled Components.

## Conhecendo o Styled Components

Afinal, o que é Styled Components? Trata-se de uma biblioteca (*lib*) que nos permite escrever códigos CSS dentro do JavaScript, mas, você deve estar se perguntando, oque eu ganho com isso? Dessa maneira não precisamos mais ficar importando nossos arquivos `.css` em nossas páginas e se um dia precisarmos utilizar esse mesmo componente em outro projeto, uma das maneiras seria basicamente copiar o arquivo `.js`.

Com o Styled Components também ganhamos de brinde compatibilidade de *browsers*, ou seja, não precisamos mais informar nosso `.browserlistrc` para que o [Babel](https://babeljs.io/) faça a verificações em nosso CSS para que o mesmo seja compatível em navegadores mais antigos, o Styled faz isso automaticamente para nós.

Também ganhamos a regra de CSS Modules, o Styled cria um *hash* nas classes CSS, assim, cada componente conhece apenas o seu CSS, uma mudança em um componente será refletida somente nele.

Além de inúmeras outras vantagens.

## Instalando o Styled Components

Como foi dito no tópico anterior, o Styled Components trata-se de uma biblioteca, sendo assim, para utilizá-la em nosso projeto React devemos instalá-la, podemos realizar essa instalação de duas maneiras: com [Yarn](https://yarnpkg.com/pt-BR/) ou [Npm](https://www.npmjs.com/).

### Instalando com o Yarn

Para realizar a instalação da biblioteca utlizando o Yarn como gerenciador de pacotes, podemos utilizar seu comando `add`:

```bash
yarn add styled-components
```

Dessa maneira a dependência será salva e declarada dentro de nosso `package.json`.

### Instalando com o Npm

Alternativamente, podemos utilizar o Npm como gerenciador de pacotes, utilizando o comando `install`:

```bash
npm install styled-components --save
```

Ou, de forma abreviada:

```bash
npm i styled-components --save
```

Repare que passamos um argumento `--save`, isso indica para o `npm` assim como o `yarn` faz, salvar e declarar a nova dependência no `package.json` da aplicação.

## Criando o primeiro component

Para criar o primeiro componente, vamos primeiramente criar nosso projeto, podemos fazer isso utilizando o [create-react-app](https://github.com/facebook/create-react-app):

```bash
create-react-app react-styled-components
```

Assim que o processo terminar, iremos ter uma nova pasta chamada `react-styled-components`, nesse projeto iremos criar nossos exemplos de Styleds Components, em caso de dúvida você pode conferir o *post* [Criando minha primeira app com React](http://blog.matheuscastiglioni.com.br/criando-minha-primeira-app-com-react), nele eu explico como criar uma nova *app* ou projeto do zero com React.

Dentro do projeto que acabamos de criar, precisaremos de uma nova pasta chamada `components`, nela irá ficar todos os exemplos que iremos fazer, o primeiro será criar um simples botão, sendo assim, um novo arquivo chamado `MeuBotao.js` deve ser criado dentro da pasta `components/MeuBotao.js`.

O primeiro passo para começarmos a criar um novo componente é importar a biblioteca:

```js
import styled from "styled-components";
```

Tá, legal, já temos o arquivo criado e a biblioteca importada, mas como criamos um novo componente?

![Homer pensando na cadeira](https://res.cloudinary.com/mahenrique94/image/upload/v1549716991/homer-pensando-na-cadeira_sa7fjt.gif)

Para criar o primeiro componente, podemos utilizar o `styled` que acabamos de criar seguido pelo nome da tag HTML que desejamos criar, por exemplo:

```js
styled.[NOME_DA_TAG]
```

Ou seja, para o exemplo do nosso botão, devemos utilizar a tag `button`:

```js
styled.button;
```

Mas, ainda está estranho, só isso é o suficiente?

![Bob esponja no restaurente pensando](https://res.cloudinary.com/mahenrique94/image/upload/v1549717030/gif-bob-esponja-restaurante-pensando_bpy2ws.gif)

Se você pensou que está faltando algo, acertou. Basicamente sempre iremos chamar funções do `styled` que são responsáveis por nos devolver suas respectivas *tags* como componentes do React, ou seja, precisamos invocar a função `.button()`, além dela, existem também: `.a()`, `.div()`, `.section()`, etc...

Agora que já sabemos da necessidade de sua invocação, vamos invocá-la:

```js
styled.button();
```

Se você tentar rodar sua aplicação com esse código irá se deparar com um erro (*exception*) de execução:

![Erro ao invocar função normal do styled](https://res.cloudinary.com/mahenrique94/image/upload/v1549717063/styled-call-function-error_itdgye.png)

Mas afinal, porque deu esse erro referente á `Cannot read property '0' of undefined`? Isso está acontecendo devido a forma que estamos invocando a função do `styled`, como assim Matheus? O `styled` utiliza uma nova forma introduzida no ES6 para executar funções, chamada de [Tagged Template Literal](https://medium.freecodecamp.org/es6-tagged-template-literals-48a70ef3ed4d), afinal, do que se trata esse tal de Tagged Template Literal?

Essa nova forma permite invocarmos funções utilizando duas crases (``), sim, é isso mesmo, podemos trocar os parênteses por elas, ficando da seguinte forma:

```js
styled.button``;
```

Agora tenho certeza que seu código deve ter funcionado, como o assunto do *post* (talvez para um próximo) não se refere ao ES6, você pode ler um pouco sobre tal recurso [aqui](https://www.styled-components.com/docs/advanced#tagged-template-literals) ou se preferir uma leitura mais á fundo leia [aqui](https://mxstbr.blog/2016/11/styled-components-magic-explained/).

Tá, legal, nosso código está executando, o que mais precisamos fazer para criar nosso primeiro componente? Se estamos trabalhando com estilos, está faltando nosso CSS, pois é, onde iremos escrevê-lo? Dentro das crases.

```js
styled.button`
    background: #0099FF;
    border: 2px solid #0099FF;
    border-radius: 3px;
    color: #FDFDFD;
    font-size: 1.2rem;
    margin: 1rem;
    padding: 1rem 1.5rem;
`;
```

E para termos acesso ao componente que foi criado pelo `styled` podemos guardá-lo em uma variável:

```js
const MeuBotao = styled.button`
    background: #0099FF;
    border: 2px solid #0099FF;
    border-radius: 3px;
    color: #FDFDFD;
    font-size: 1.2rem;
    margin: 1rem;
    padding: 1rem 1.5rem;
`;
```

Sim, isso já é um componente do React, podemos simplesmente exportá-lo para ser importado dentro de nosso `App.js`:

```js
export default MeuBotao;
```

O código completo de nosso primeiro componente fica da seguinte maneira:

```js
import styled from "styled-components";

const MeuBotao = styled.button`
    background: #0099FF;
    border: 2px solid #0099FF;
    border-radius: 3px;
    color: #FDFDFD;
    font-size: 1.2rem;
    margin: 1rem;
    padding: 1rem 1.5rem;
`;

export default MeuBotao;
```

Vamos utilizá-lo?

### Utilizando componentes do styled

Dentro de `App.js`, apague todo o conteúdo desnecessário para o exemplo, ficando da seguinte maneira:

```js
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
```

Agora, vamos importar nosso botão:

```js
import MeuBotao from "./components/Button";
```

Pronto, já podemos ser capazes de utilizá-lo em nosso `render`:

```js
<div className="App">
	<MeuBotao>Meu Botão</MeuBotao>
</div>
```

Assim, temos o seguinte botão:

![Meu primeiro componente com Styled Components](https://res.cloudinary.com/mahenrique94/image/upload/v1549717098/meu-primeiro-componente-com-styled-componentes_cfcy7j.png)

E o que mais podemos fazer com Styled Components?

## Utilizando um componente existente

Imagine que você já tenha seu componente pronto e pretende apenas utilizar o `styled` para a estilização, nesse caso, invoque a função do `styled` de forma normal com os parenteses, porém, passando o componente como parâmetro:

```js
import React, { Component } from "react";

class BotaoPronto extends Component {

    render() {
        return(
            <button onClick={ this.ola }>{ this.props.children }</button>
        );
    }

    ola() {
        alert("Ola");
    }

}
```

Um simples botão que ao ser cliclado exibe uma mensagem de olá, agora, vamos estilizá-lo com o `styled`:

```js
import React, { Component } from "react";
import styled from "styled-components";

class BotaoPronto extends Component {

    render() {
        return(
            <button onClick={ this.ola }>{ this.props.children }</button>
        );
    }

    ola() {
        alert("Ola");
    }

}

const StyledBotaoPronto = styled(BotaoPronto)`
    background: #FF8080;
    border: 2px solid #FF8080;
    color: #FDFDFD;
    padding: 1rem 1.5rem;
`;

export default StyledBotaoPronto;
```

Beleza, agora nosso botão foi estilizado, portanto, já podemos importá-lo e utilizá-lo em nosso `App.js`:

```js
// código anterior omitido
import BotaoPronto from "./components/BotaoPronto";

// código anterior omitido
<BotaoPronto>Botão Pronto</BotaoPronto>
```

Se votarmos na página e recarregá-la, teremos o seguinte *layout*:

![Botão pronto sem estilo](https://res.cloudinary.com/mahenrique94/image/upload/v1549717136/botao-pronto-sem-estilo_gi0ipi.png)

Mas afinal, porque o botão ficou sem estilos? Isso aconteceu porque faltou passar a classe que o `styled` cria para ele, para isso, podemos utilizar as propriedades (*props*) do componente, pois é lá que ela se encontra (o styled adiciona ela como propriedade do componente):

```js
class BotaoPronto extends Component {

    render() {
        return(
            <button className={ this.props.className } onClick={ this.ola }>{ this.props.children }</button>
        );
    }

    ola() {
        alert("Ola");
    }

}
```

Veja que adicionamos a propriedade `className` ao nosso botão, passando o `className` de sua `props`. Assim, voltando na página, vemos o botão estilizado:

![Botão pronto com estilo](https://res.cloudinary.com/mahenrique94/image/upload/v1549717171/botao-pronto-com-estilo_ps4p34.png)

## Extendendo componente

Um outro recurso muito interessante do Styled Components é a possiblidade de extender componentes, ou seja, podemos criar apenas um esqueleto e depois modificá-lo dando cores ao mesmo:

```js
import React, { Component } from "react";
import styled from "styled-components";

class Botao extends Component {

    render() {
        return(
            <button className={ this.props.className }>{ this.props.children }</button>
        );
    }

}

const EsqueletoBotao = styled(Botao)`
    border: 1px solid transparent;
    border-radius: 2px;
    color: #FDFDFD;
    font-size: 1.125rem;
    margin: 1rem;
    padding: .75rem 2rem;
`;

const Aviso = EsqueletoBotao.extend`
background: #FF9900;
border-color: #FF9900;
`;

const Informacao = EsqueletoBotao.extend`
background: #33CCFF;
border-color: #33CCFF;
`;

const Successo = EsqueletoBotao.extend`
    background: #00CC99;
    border-color: #00CC99;
`;

export { Aviso, Informacao, Successo };
```

Assim, importando e utilizando em nosso `App.js` teremos um botão com vários tipos:

![Botão estendido](https://res.cloudinary.com/mahenrique94/image/upload/v1549717208/botao-estendido_u5ggyz.png)

Para o *post* não se extender muito, irei parar por aqui, nos próximos veremos mais coisas sobre o Styled Components, o projeto de exemplo pode ser encontrado e baixado [aqui](https://github.com/mahenrique94/react-styled-components).

Espero que tenha gostado, não deixe de comentar e assinar a [*newsletter*](http://eepurl.com/ggP7Rv) para receber novidades por email, até a próxima.
