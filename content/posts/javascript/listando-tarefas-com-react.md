---
autor: "Matheus Castiglioni"
categoria: "JavaScript"
disqus_identifier: "listando-tarefas-com-react"
disqus_title: "Listando Tarefas Com React"
disqus_url: "https://blog.matheuscastiglioni.com.br/listando-tarefas-com-react"
date: 2018-06-20T08:38:26-02:00
draft: false
keywords: [ "Biblioteca", "Front-End", "Lib", "React", "ReactJS", "Web" ]
slug: "listando-tarefas-com-react"
tag: [ "Biblioteca", "Front-End", "Lib", "React", "ReactJS", "Web" ]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1549707472/criando-um-componente-de-tarefas-com-react_5b2994e6eec63_bg_acv0do.jpg"
title: "Listando Tarefas Com React"
url: "/listando-tarefas-com-react"
---

Recentemente criei um *post* mostrando como [criar um novo projeto utilizando o react](http://blog.matheuscastiglioni.com.br/criando-minha-primeira-app-com-react), se você não leu, sugiro que faça a [leitura](http://blog.matheuscastiglioni.com.br/criando-minha-primeira-app-com-react) antes de continuar com o mesmo, caso não saiba como encontrar o *post* vou listá-lo abaixo:

- [Criando minha primeira app com React](http://blog.matheuscastiglioni.com.br/criando-minha-primeira-app-com-react)

Continuando o *post* anterior, nesse exemplo vamos criar um componente para listar tarefas, ou seja, basicamente seria um simples *to-do list* (lista de afazeres).

## Criando e subindo o projeto

Já sabemos criar novos projetos utilizando o `create-react-app`, então vamos criar um novo projeto chamado `lista-tarefas` através do comando:

```bash
create-react-app lista-tarefas
```

Aguarde o processo de *download* e configuração finalizar. Após a finalização, navegue até o projeto (`cd lista-tarefas`) e suba o servidor de desenvolvimento(`yarn start`), tudo isso pode ser feito com os seguintes comandos:

```bash
cd lista-tarefas
yarn start
```

Após o servidor subir, o navegador será aberto com a pagina padrão do [React](https://reactjs.org/).

## Criando um novo componente

Agora que as coisas começam a ficar um pouco mais interessante, vamos criar nosso primeiro componente utilizando o React, para isso abra o projeto no seu editor de texto favorito (recomendo o [vscode](https://code.visualstudio.com/)).

Com o projeto aberto no editor, navegue até a basta `src`, dentro dela, crie uma nova pasta chamada `componentes` e dentro crie o arquivo `Tarefas.js` (será nosso componente).

Agora vamos começar a escrever o código do nosso componente `Tarefas`, o primeiro passo será criar uma classe chamada `Tarefas`:

```javascript
class Tarefas {

}
```

Agora com nosso componente criado, devemos importá-lo dentro de `App.js`, podemos fazer isso através dos módulos do **ES6**:

```javascript
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Tarefas from "./componentes/Tarefas"; // importando o componente
// ... código restante omitido
```

Com o componente importado, vamos trocar o código padrão do React para renderizar o código do nosso componente, podemos fazer isso mexendo na função `render` da classe `App`, troque o conteúdo para:

```markup
<div className="App">
	<Tarefas/>
</div>
```

Salvando o arquivo e voltando para o navegador, temos o seguinte erro:

![Erro na importação de um componente sem export](https://res.cloudinary.com/mahenrique94/image/upload/v1549707535/5b29a1e2579fe_bg_w68dz0.png)

Afinal, o que aconteceu? Simples, estamos tentando importar (`import`) algum módulo que não foi exportado (`export`), para resolver o problema vamos alterar nosso `Tarefas.js` para:

```javascript
export default class Tarefas {

}
```

Pronto, tudo certo? Errado, após alterar o arquivo `Tarefas.js`, realizando a exportação da classe `Tarefas`, voltando ao navegador temos outro erro.

> Cannot call class as a function

Nossa classe ainda é uma classe qualquer em JavaScript, precisamos e devemos de alguma forma dizer que essa classe é um componente do React, como podemos fazer isso?

Para isso vamos importar a classe `Component` dentro de nosso arquivo:

```javascript
import { Component } from "react";

export default class Tarefas {
// ... código restante omitido
```

Repare que para importar a classe `Component` foi necessário informá-la entre chaves, isso porque ela não é exportada como `default` (padrão).

Agora, devemos fazer nossa classe `Tarefas` extender (`extends`) de `Component`, podemos fazer isso da seguinte maneira:

```javascript
export default class Tarefas extends Component {

// ... código restante omitido
```

Novamente ao salvar e voltar para o navegador, temos outro erro:

![Erro pois falta implementar a função render](https://res.cloudinary.com/mahenrique94/image/upload/v1549707572/5b29a2f937e59_bg_ul2w1e.png)

Para renderizar componentes o React utiliza a função `render`, porém, em nenhum momento criamos e escrevemos ela, dessa maneira ele não está conseguindo achar a função dentro de nosso componente, para resolver o problema vamos criá-la:

```javascript
export default class Tarefas {

    render() {
        return <h1>Tarefas</h1>;
    }

}
```

Salvando o arquivo e voltando para o navegador, mais um erro:

![Erro pois falta importar o React](https://res.cloudinary.com/mahenrique94/image/upload/v1549707606/5b29a47ccc469_bg_x0v7dm.png)

Sempre quando utilizamos código JSX (assunto para um próximo *post*, porém, de forma bem resumida seria a escrita de código HTML) dentro de um componente, devemos importar o `React` para dentro de nosso arquivo:

```javascript
import React, { Component } from "react";

export default class Tarefas extends Component {
// ... código restando omitido
```

E finalmente, voltando ao navegador, temos nosso componente sendo renderizado:

![Componente Tarefas sendo renderizado](https://res.cloudinary.com/mahenrique94/image/upload/v1549707651/5b29a1e2586f5_bg_a15cox.png)

### Saiba mais

Foi um pouco dificil renderizar e criar nosso primeiro componente, tivemos que seguir alguns passos, sempre certifique-se dos seguintes:

1. Devemos importar `React` e `Component` dentro de nosso arquivo.
2. Nossa classe deve extender de `Component`.
3. Nossa classe deve ter a função `render` retornando um código JSX ("HTML"), `null` ou `Fragment` (onde não queremos renderizar nada).
4. A classe deve ser exportada para futuramente ser importada e utilizada.

Sempre que eu digo "**arquivo**" ou "**classe**" no fim estou falando e me referindo ao **componente**, pois nosso arquivo e classe nada mais é do que um componente.

## Listando tarefas

Para listar nossas tarefas, vamos precisar mexer na função `render`, primeiro, devemos criar uma variável responsável por armazená-las:

```javascript
render() {
	const tarefas = ["Acordar", "Tomar café", "Escovar os dentes", "Ir trabalhar"];
	return <h1>Tarefas</h1>;
}
```

Agora, devemos criar uma lista utilizando as tags `ul` (*unordered list* ou lista não ordenada) e `li` (*list item* ou item da lista):

```javascript
render() {
	const tarefas = ["Acordar", "Tomar café", "Escovar os dentes", "Ir trabalhar"];
	return <ul>{ tarefas.map(tarefa => <li>{ tarefa }</li>) }</ul>;
}
```

Voltando ao navegador, veja que nossas tarefas foram renderizadas e listadas:

![Tarefas listadas](https://res.cloudinary.com/mahenrique94/image/upload/v1549707700/5b29a1e258c08_bg_golo1o.png)

### Saiba mais

Na função `render` eu fiz o `return` apenas em uma linha, porém, por questões de boas práticas, apenas faça dessa maneira para retornos simples (geralmente um elemento), no nosso caso, o retorno está um pouco complexo pois temos listas e códigos JavaScript. Podemos melhorar o código para:

```javascript
render() {
	const tarefas = ["Acordar", "Tomar café", "Escovar os dentes", "Ir trabalhar"];
	return (
		<ul>
			{ tarefas.map(tarefa => <li>{ tarefa }</li>) }
		</ul>
	);
}
```

Foi adicionado os parênteses em nosso `return` e separamos os elementos em algumas linhas.

**Obs:** Certifique-se que o `return` tenha apenas um elemento, ou seja, se precisar retornar duas `ul` faça um *wrapper* (encapsulamento) delas para dentro de um `Fragment` (antigamente era utilizado uma `div`) do React.

## Conclusão

Nesse *post* mostrei e expliquei um pouco sobre componentes em React, até criamos nosso primeiro componente onde uma lista de tarefas foi renderizada, nos próximos *post's* vamos melhorar e adicionar mais funcionalidades ao nosso componente, onde iremos ver questões de `state` e `bind`de eventos.

O projeto do *post* pode pode ser encontrado [aqui](https://github.com/mahenrique94/post-tarefas-com-react).

Se você ainda ficou com dúvida e prefere ver o exemplo ná prática, segue o vídeo que gravei para meu canal, aproveite e se inscreva para receber as novidades:

<iframe height="500" src="https://www.youtube.com/embed/4r74QbeQ5C4" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>

E aí, você já conhecia o React e seus componentes? Não deixe de comentar.

## Newsletter

Assine a [*newsletter*](http://eepurl.com/ggP7Rv) para receber novidades por email.

## Apoie

Se quiser também pode apodar o *blog* ou canal do youtube através do [apoia-se](https://apoia.se/mahenrique94).
