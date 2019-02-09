---
autor: "Matheus Castiglioni"
categoria: "JavaScript"
disqus_identifier: "otimizando-componentes-do-react-com-purecomponent"
disqus_title: "Otimizando Componentes Do React Com Purecomponent"
disqus_url: "https://blog.matheuscastiglioni.com.br/otimizando-componentes-do-react-com-purecomponent"
date: 2018-11-14T10:18:17-02:00
draft: false
keywords: [ "Componente Puro", "Front-End", "React", "ReactJS", "Web" ]
slug: "otimizando-componentes-do-react-com-purecomponent"
tag: [ "Componente Puro", "Front-End", "React", "ReactJS", "Web" ]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1549586925/otimizando-componentes-do-react-com-purecomponent_5beb52ac02b51_bg_lrrk38.png"
title: "Otimizando Componentes Do React Com Purecomponent"
url: "/otimizando-componentes-do-react-com-purecomponent"
---

Performance e desempenho geralmente são grandes questões para levarmos em consideração durante a usabilidade de nossos *webapp's* ou sites. Construir um *webapp* que seja performático e garantir uma boa usabilidade para os usuários do mesmo, nem sempre é uma tarefa simples de conquistar, muitas vezes vai exigir um bom tempo de dedicação para encontrar momentos de gargalos e um pouco mais ainda para pensar/implementar uma solução.

Para exemplo do *post* iremos abordar a biblioteca [React](reactjs.org). Como podemos tornar nossos componentes mais performáticos?

## Criando um componente normal

A classe mais comum para ser utilizada durante a criação de nossos componentes é a velha conhecida `Component`, através dela podemos criar um component comum. Para entender o problema, vamos criar um simples aplicativo onde temos um `array` de números e através de um botão será possível adicionar novos números para esse `array`.

Criando o nosso container:

```javascript
// App.js

import React, { Component, Fragment } from 'react'

import NComponent from '../components/NComponent'

class App extends Component {
    state = {
        numbers: []
    }

    render() {
        const { numbers } = this.state
        return (
            <Fragment>
                <h1>App Container</h1>
                <button onClick={this.handleBtnClick} type="button">
                    Add new number
                </button>
                <NComponent numbers={numbers} />
            </Fragment>
        )
    }

    handleBtnClick = () =>
        this.setState(({ numbers }) => {
            const MAX = 100
            const MIN = 1
            numbers.push(parseInt(Math.random() * (MAX - MIN) + MIN))
            return {
                numbers
            }
        })
}

export default App
```

Agora vamos implementar o `NComponent` que será um componente normal do React utilizando a classe `Component`:

```javascript
// NComponent.js

import React, { Component, Fragment } from 'react'

class NComponent extends Component {
    render() {
        const { numbers } = this.props
        console.log("NComponent => I'm rendering...")
        return (
            <Fragment>
                <h1>Normal component</h1>
                <ul>
                    {numbers.map((number, index) => (
                        <li key={index}>{number}</li>
                    ))}
                </ul>
            </Fragment>
        )
    }
}

export default NComponent
```

Por fim, para que tudo funcione, devemos ter o nosso famoso `index.js`:

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

import App from './containers/App'

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

Que apenas irá renderizar nosso container `App`.

Se tudo ocorreu conforme o planejado, devemos ter o seguinte aplicativo:

![Aplicativo com componente normal](https://res.cloudinary.com/mahenrique94/image/upload/v1549587109/5beb57701f9df_bg_p4ztec.png)

Se você reparou, dentro da função `render` adicionamos um *log* para informar que aquele componente foi renderizado:

```javascript
render() {
	// ... códigos omitidos
    console.log("NComponent => I'm rendering...");
	// ... códigos omitidos
}
```

Ao carregar a página pela primeira vez, olhando em nosso console, temos a seguinte saída:

![Mensagem no console do componente normal](https://res.cloudinary.com/mahenrique94/image/upload/v1549587139/5beb577020f3c_bg_pnvvhl.png)

Tudo funcionando como o esperado, agora, se tentarmos adicionar um novo número no `array`:

![Adicionando novo número no array](https://res.cloudinary.com/mahenrique94/image/upload/v1549587171/5beb59c05490c_bg_jry3b9.gif)

Tudo funcionou como o esperado:

- Conseguimos adicionar um novo número para o `array`.
- O novo número foi renderizado pelo nosso `NComponent`.
- O *log* foi mostrado pois a função `render` do `NComponent` foi chamada.

Até então não vimos nada diferente, mas, onde podemos começar a otimizar nosso aplicativo?

![Pensando em como otimizar o aplicativo](https://res.cloudinary.com/mahenrique94/image/upload/v1549587202/5beb5af3bfb51_bg_vj83eu.gif)

## Entenda a classe Component

Por padrão um componente do tipo `Component` sempre irá se atualizar quando uma propriedade ou um estado sofrer modificações. Isso pode ser melhorado implementando o ciclo de vida `shouldComponentUpdate`. Essa função deve devolver um valor `booleano` para casos onde `true` significa que deve ser atualizado e `false` onde não devemos atualizá-lo.

```javascript
shouldComponentUpdate() {
	return false
}
```

Nesse exemplo, o componente não será atualizado em momento algum (apenas para exemplo). A função `shouldComponentUpdate` recebe dois parâmetros: próximo valor de `props` e próximo valor de `state`, dessa maneira é possível realizar alguma atualização condicional.

```javascript
shouldComponentUpdate(nextProps, nextState) {
	// sua condição aqui...
}
```

Mas, será que devemos ficar nos preocupando com esse tipo de coisa? E se fosse possível utilizar algo inteligente o suficiente para saber quando deve ser atualizado? Pois é, isso é possível.

## Criando um componente puro

Pensando justamente nesse problema, a galera do React á partir da versão **15.3** disponibilizou um novo tipo de componente: o `PureComponent`. A diferença dele para o `Component` está justamente na inteligência, vamos fazer um teste?

```javascript
// PComponent.js

import React, { Fragment, PureComponent } from 'react'

class PComponent extends PureComponent {
    render() {
        const { numbers } = this.props
        console.log("PComponent => I'm rendering...")
        return (
            <Fragment>
                <h1>Pure component</h1>
                <ul>
                    {numbers.map((number, index) => (
                        <li key={index}>{number}</li>
                    ))}
                </ul>
            </Fragment>
        )
    }
}

export default PComponent
```

A implementação do `PComponent` é semelhante do `NComponent` com a única diferença em seu tipo, agora estamos usando o `PureComponent`  ao invés de `Component`. Com o componente novo criado, já podemos utilizá-lo dentro de nosso `App.js`:

```javascript
// App.js

import React, { Component, Fragment } from 'react'

import NComponent from '../components/NComponent'
import PComponent from '../components/PComponent' // importe-o

class App extends Component {
    state = {
        numbers: []
    }

    render() {
        const { numbers } = this.state
        return (
            <Fragment>
                <h1>App Container</h1>
                <button onClick={this.handleBtnClick} type="button">
                    Add new number
                </button>
                <NComponent numbers={numbers} />
                <PComponent numbers={numbers} /> // renderize o novo componente
            </Fragment>
        )
    }

    handleBtnClick = () =>
        this.setState(({ numbers }) => {
            const MAX = 100
            const MIN = 1
            numbers.push(parseInt(Math.random() * (MAX - MIN) + MIN))
            return {
                numbers
            }
        })
}

export default App
```

Novamente, olhando o resultado temos:

![Aplicativo com os dois componentes](https://res.cloudinary.com/mahenrique94/image/upload/v1549587243/5beb6295ef638_bg_pv2vkj.png)

E novamente em nosso console, temos a seguinte saída:

![Console com os dois componentes](https://res.cloudinary.com/mahenrique94/image/upload/v1549587275/5beb6295f03b0_bg_lvoape.png)

Nada de novo, certo? Então, vamos tentar adicionar um novo número para nosso `array`:

![Adicionando novo número comos dois componentes](https://res.cloudinary.com/mahenrique94/image/upload/v1549587307/5beb63867487e_bg_imqkwo.gif)

Ué, ele atualizou apenas o `NComponent`, porque isso aconteceu?

## Entenda a classe PureComponent

Como já foi mencionado anteriormente, um componente do tipo `PureComponent` possuí uma inteligência, ele apenas irá atualizar quando de fato as referências de suas `props` ou `state` forem atualizadas, isso é feito através da implementação da função `shouldComponentUpdate` (também já mencionado). Em outras palavras o `PureComponent` já vem com uma implementação para a `shouldComponentUpdate`.

Mas atualizamos nosso `array`, então ele deveria ser atualizado também, porque isso não ocorreu? Vamos olhar a função responsável por receber o *click* do botão e adicionar um novo número para o `array`:

```javascript
handleBtnClick = () =>
        this.setState(({ numbers }) => {
            const MAX = 100
            const MIN = 1
            numbers.push(parseInt(Math.random() * (MAX - MIN) + MIN))
            return {
                numbers
            }
        })
```

Basicamente estamos pegando o `state` de `number` já existente e adicionando um novo item para ele, em momento algum estamos criando um novo `array` e assim modificando sua referência. Vamos modificar a função para sempre devolver um novo `array`:

```javascript
handleBtnClick = () =>
        this.setState(({ numbers }) => {
            const MAX = 100
            const MIN = 1
            const newNumber = parseInt(Math.random() * (MAX - MIN) + MIN)
            return {
                numbers: [].concat(numbers, newNumber)
            }
        })
```

Agora estamos sempre criando um novo `array` e atualizando nosso estado com o mesmo, voltando para o aplicativo e testando novamente:

![Atualizando os dois componentes](https://res.cloudinary.com/mahenrique94/image/upload/v1549587344/5beb663deb7f8_bg_s8jdra.gif)

E voalá, temos o resultado esperado:

- Um novo número é adicionado para o `array`.
- O novo número foi renderizado pelo `NComponent` e `PComponent`.
- O *log* de `NComponent` e `PComponent` foram logados.

![Comemorando o sucesso](https://res.cloudinary.com/mahenrique94/image/upload/v1549587377/5beb6749986ac_bg_gsicda.gif)

## Conclusão

Nesse *post* expliquei um pouco sobre o `PureComponent`, quando devemos utilizá-lo e como ele funciona. Dessa maneira conseguimos trazer um ganho de performance para nossos aplicativos, pois, com a inteligência dos componentes, muitas chamadas para a função `render` serão evitadas e teremos um ganho de processamento (o mesmo será menos exigido).

Caso queira ver o exemplo em funcionamento:

<iframe src="https://codesandbox.io/embed/7m6yvwm2rj" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

Se preferir, pode [visualizá-lo diretamente no sandbox](https://codesandbox.io/s/7m6yvwm2rj).

E aí, você já conhecia o `PureComponent`? Não deixe de comentar, se gostou do *post* fique á vontade para se inscrever na [*newsletter*](http://eepurl.com/ggP7Rv) e receber novidades por email.

Até a próxima.
