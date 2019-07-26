---
autor: "Matheus Castiglioni"
categoria: "JavaScript"
disqus_identifier: "criando-minha-primeira-app-com-react"
disqus_title: "Criando Minha Primeira App Com React"
disqus_url: "https://blog.matheuscastiglioni.com.br/criando-minha-primeira-app-com-react"
date: 2018-02-22T19:19:58-02:00
draft: false
keywords: [ "Biblioteca", "Frameworks", "Front-End", "React", "ReactJS", "Web" ]
slug: "criando-minha-primeira-app-com-react"
tag: [ "Biblioteca", "Frameworks", "Front-End", "React", "ReactJS", "Web" ]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1549719447/criando-minha-primeira-app-com-react_qineil.png"
title: "Criando Minha Primeira App Com React"
url: "/criando-minha-primeira-app-com-react"
---

Para dar início a série de *posts* sobre os *frameworks* e/ou bibliotecas (*lib*) para *front-end*, sendo eles: [Angular](https://angular.io/), [VueJS](https://vuejs.org/) e [ReactJS](https://reactjs.org/), vou começar falando sobre o **React**, como é o primeiro *post* sobre o mesmo, o processo será criar um `Hello World`, assim como será feito nos primeiros *posts* de **Angular** e **Vue**.

## Criando nossa primeira app

Para estar criando nossa primeira app poderíamos fazer de forma manual, ou seja, baixar o arquivo `.js` do React, baixar suas dependências e/ou necessidades, baixar demais módulos para ajudar no desenvolvimento ([Webpack](https://webpack.js.org/), [Babel](https://babeljs.io/), etc..) e finalmente realizar as configurações no projeto (básicas para um `Hello World`).

Como pode ver, esse trabalho é um tanto quanto burocrático, necessitanto muito esforço manual e tempo, será que não existe uma maneira mais simples? É isso que veremos nesse *post*.

## Conhecendo o cli do React

Como de costume, atualmente está sendo uma boa prática os frameworks possuírem um cli (*client*) para ajudar na utilização do mesmo, assim como os outros o React também adotou esse padrão e criou seu cli, o famoso [create-react-app](https://github.com/facebook/create-react-app). Com ele conseguimos criar uma aplicação em React, com boa parte das configurações realizadas (podem ser customizadas), com isso, conseguimos focar mais no aprendizado e desenvolvimento.

### Instalando o cli do React

Para realizarmos a instalação do cli podemos realizar de duas maneiras: com [yarn](https://yarnpkg.com/pt-BR/) ou [npm](https://www.npmjs.com/).

Não irei abordar como instalar ambos gerenciadores de pacotes ou dependência (talvez assunto para um próximo *post*), porém, o processo instalação pode facilmente ser encontrado na documentação oficial de ambos.

#### Instalando com Yarn

Para realizar a instalação com Yarn, podemos rodar o comando `global add`:

```bash
yarn global add create-react-app
```

#### Instalando com npm

Para realizar a instalação com npm, podemos rodar o comando `install -g` ou `i -g`:

```bash
npm install -g create-react-app
```

Ou

```bash
npm i -g create-react-app
```

**Obs**: Em ambos os casos estamos instalando o `create-react-app` como global, para que possa ser rodado em qualquer lugar do nosso terminal e compartilhado a mesma versão em todos os projetos (em alguns casos o pessoal preferem utilizar uma versão para cada projeto).

## Criando a app com o cli do React

Pronto, agora que já temos nosso cli instalado, podemos finalmente criar a nossa app, o processo pode ser feito de duas maneiras diferentes, sendo elas: com o `create-react-app` ou [npx](https://www.npmjs.com/package/npx).

A única diferença é que com o `create-react-app` precisamos tê-lo instalado em nossa máquina, agora o `npx` irá executar o `create-react-app` sem instalá-lo na máquina local.

### Criando com create-react-app

Para criar uma aplicação com o `create-react-app` podemos fazer de duas maneiras: Em uma pasta já existente ou em uma nova pasta.

#### Criando em uma nova pasta

Para criarmos a aplicação (estou chamando de aplicação para melhor entendimento do *post*), em uma nova pasta apenas rodamos o `create-react-app` seguido pelo noma da aplicação:

```bash
create-react-app minha-primeira-app
```

<script src="https://asciinema.org/a/7LyJl6oJdxUKh9wcQ1aPDf1px.js" id="asciicast-7LyJl6oJdxUKh9wcQ1aPDf1px" async></script>

#### Criando em uma pasta já existente

Assim como podemos criar uma nova pasta, também podemos utilizar uma pasta já existente para criar nossa aplicação em React. A diferença é que devemos navegar até a pasta pelo terminal (`cd caminho_ate_a_pasta`) e em vez de passar um nome para o `create-react-app` passamos um `.` (para referenciar a pasta atual):

```bash
create-react-app .
```

<script src="https://asciinema.org/a/mxaR9nEp8CEjd97GPdBwny945.js" id="asciicast-mxaR9nEp8CEjd97GPdBwny945" async></script>

### Criando com npx

Além de utilizar o `create-react-app` já instalado na máquina, podemos pedir para o `npx` executá-lo e criar nossa aplicação, nesse caso a instalação do `create-react-app` não precisa e nem será feita:

```bash
npx create-react-app minha-primeira-app
```

<script src="https://asciinema.org/a/xAvouJ8DhoI8ELZc20LRX4nBN.js" id="asciicast-xAvouJ8DhoI8ELZc20LRX4nBN" async></script>

**Obs**: A opção de utilizar uma pasta já existente, também vale para o `npx` e deve ser feita da mesma maneira, apenas adicionando o `npx` na frente do comando, ou seja, precisamos navegar até a pasta (`cd`) para executar o comando e passar um `.` em vez de um nome.

## Subindo nossa app

Com a nossa aplicação criada, podemos subí-la de duas maneiras, através do `yarn` ou `npm`, isso vai depender da sua preferência ou gosto por um desses gerenciadores de pacote.

### Subindo app com yarn

Para subir a app utilizando o `yarn` precisamos apenas rodar o comando `start`:

```bash
yarn start
```

### Subindo app com npm

De forma semelhante ao `yarn`, com o `npm` precisamos também rodar o `start`:

```bash
npm start
```

Em ambos os casos, assim que nossa app subir, o navegador será automaticamente aberto com uma página principal padrão (*default*) do React.

![Página principal do React](https://res.cloudinary.com/mahenrique94/image/upload/v1549719541/react-app-rodando_rtskyb.png)

## Hello World com React

Se você já foi um pouco curíoso, já deve ter dado uma olhada nos arquivos que o `create-react-app` cria para a gente (explicação dos arquivos fica para um próximo *post*), para fazer o famoso `Hello World` abra o arquivo `App.js` que fica dentro de `src` (localizada na raiz da aplicação).

```js
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
```

Aqui podemos ver o código padrão (*default*) do React, vamos trocar todo o conteúdo da `div` que tem a classe `App` para um simples `h1` com nosso `Hello World`:

```js
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default App;
```

Voltando ao nosso navegador veja que a página já foi recarregada graças ao [live reloading](http://livereload.com/) do React:

![Hello World com React](https://res.cloudinary.com/mahenrique94/image/upload/v1549719560/hello-world-com-react_cjt2hd.png).

E como podemos ver, já temos o nosso `Hello World` com React.

![Gif Hello World finalizado](https://res.cloudinary.com/mahenrique94/image/upload/v1549719580/gif-tenor-comemorando_il2qoz.gif).

O projeto pode ser encontrado em meu [github](https://github.com/mahenrique94t) [minha-primeira-app-comt-react](https://github.com/mahenrique94/minha-primeira-app-com-react).

Se você quiser, em meu canal eu gravei um vídeo falando sobre o assunto, dessa forma, fica um pouco mais prático:

<iframe height="500" src="https://www.youtube.com/embed/FkzTsQ2whdk" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>

<!-- Begin Mailchimp Signup Form -->
<link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css">
<style type="text/css">
	#mc_embed_signup{clear:left; font:14px Helvetica,Arial,sans-serif; width:100%;margin-top: 2rem;}
</style>
<div id="mc_embed_signup">
<form action="https://matheuscastiglioni.us12.list-manage.com/subscribe/post?u=5a8a2e7202680f2d5098f12bc&amp;id=6ede898886" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
	<label for="mce-EMAIL">Newsletter</label>
	<input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="Email" required>
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_5a8a2e7202680f2d5098f12bc_6ede898886" tabindex="-1" value=""></div>
    <div class="clear"><input type="submit" value="Inscrever" name="subscribe" id="mc-embedded-subscribe" class="button"></div></div>
</form>
</div>
<!--End mc_embed_signup-->
