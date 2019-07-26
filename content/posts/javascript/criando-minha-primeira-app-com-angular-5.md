---
autor: "Matheus Castiglioni"
categoria: "JavaScript"
disqus_identifier: "criando-minha-primeira-app-com-angular-5"
disqus_title: "Criando Minha Primeira App Com Angular 5"
disqus_url: "https://blog.matheuscastiglioni.com.br/criando-minha-primeira-app-com-angular-5"
date: 2018-03-05T08:30:52-02:00
draft: false
keywords: [ "Angular", "Biblioteca", "Frameworks", "Front-End", "Lib", "Web" ]
slug: "criando-minha-primeira-app-com-angular-5"
tag: [ "Angular", "Biblioteca", "Frameworks", "Front-End", "Lib", "Web" ]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1549718562/criando-minha-primeira-app-com-angular-5_ynooqu.jpg"
title: "Criando Minha Primeira App Com Angular 5"
url: "/criando-minha-primeira-app-com-angular-5"
---

Continuando a série de *posts* sobre *frameworks* e/ou bibliotecas (*lib*) para *front-end*, no *post* anterior [Criando minha primeira app com React](http://blog.matheuscastiglioni.com.br/criando-minha-primeira-app-com-react) expliquei como criar sua primeira *app* com [React](https://reactjs.org/) e fezer um *Hello World*.

Nesse *post* irei explicar como fazer o mesmo processo, ou seja, criar sua primeira *app* e fazer um *Hello World*, porém, utilizando o [Angular](https://angular.io/).

## Conhecendo o Angular

O Angular é um *framework* para construção de *app* tanto para *web* quanto para *mobile*, com ele focamos apenas na construção e desenvolvimento de nossos projetos, trazendo uma enorme facilidade e produtividade.

## Dando os primeiros passos

Para podermos começar a trabalhar com o Angular a forma mais fácil é através do seu *cli* (*client*), com ele conseguímos criar *app's*, subir servidores, criar componentes, entre outros recursos...

Podemos realizar a instalação do [Angular Cli](https://cli.angular.io/) de duas maneiras, sendo elas: com `yarn` ou `npm`:

### Instalando com Yarn

Podemos realizar a instalação através do [Yarn](https://yarnpkg.com/pt-BR/) gerenciador de pacotes criado pelo Facebook.

```bash
yarn global add @angular/cli
```

### Instalando com Npm

Ou podemos instalá-lo pelo [Npm](https://www.npmjs.com/), gerenciador de pacotes do NodeJS.

```bash
npm install -g @angular/cli
```

ou

```bash
npm i -g @angular/cli
```

Para verificar se tudo deu certo, podemos digitar `ng` em nosso console e verificar se a saída do comando foi um *help* com uma lista de possibilidades que podemos executar com o mesmo.

<script src="https://asciinema.org/a/Jo8FC4xJ9eE5ieFd3zrf17Rq2.js" id="asciicast-Jo8FC4xJ9eE5ieFd3zrf17Rq2" async></script>

**Obs**: Como pode ter notado, é através do `ng` que iremos utilizar os comandos do Angular Cli

### Criando nossa primeira app

Podemos criar nosso primeiro projeto (*app*) de duas maneiras: criando uma nova pasta com o nome do projeto ou utilizando uma pasta já existente.

### Criando uma nova pasta

Para criar o projeto (*app*) e uma nova pasta com o seu nome podemos utilizar o comando `new` passando como parâmetro (argumento) o nome do projeto:

```bash
ng new minha-primeira-app
```

Aguarde todo o processo de *download* e configuração finalizar, após a finalização do comando, uma pasta com o nome `minha-primeira-app` deve ter sido criada a partir da pasta onde o comando foi rodado.

### Criando em uma pasta já existente

Para criar o projeto (*app*) em uma pasta já existente podemos utilizar o mesmo comando, ou seja, `new`, porém, ao invés de passarmos um nome como argumento, precisamos passar uma opção `-dir`  informando um `.`.

```bash
ng new minha-primeira-app -dir .
```

Veja que passamos a opção `dir`, que serve para informarmos o nome da pasta onde o projeto deverá ser criado, no caso, passamos o `.` que é referente a pasta atual.

**Obs**: Certifique-se de estar dentro da pasta (pelo terminal, cmd ou qualquer outro jeito que esteja utiizando para rodar o comando)  onde o projeto deverá ser criado.

Com o projeto (*app*) criado e configurado, podemos agorar subir um servidor para começarmos a trabalhar no desenvolvimento de nosso *Hello Wolrd*, mas, como podemos fazer isso? Isso que veremos no próximo tópico.

## Subindo a app

Para subir um servidor e rodar nossa *app* precisamos primeiro navegador (`cd minha-primeira-app`) até pasta que acabamos de criar, ou seja, a pasta do nosso projeto e utilizar o comando `ng serve` para subir o servidor.

```bash
cd minha-primeira-app
ng serve
```

<script src="https://asciinema.org/a/SZj8kDsOLn4jJXFYakmTx4alu.js" id="asciicast-SZj8kDsOLn4jJXFYakmTx4alu" async></script>

Veja que ao término do comando temos a seguinte mensagem: `webpack: Compiled successfully.`

Isso significa que o [Webpack](https://webpack.github.io/) compilou nossa aplicação com sucesso, mas, como podemos acessá-la? Se você foi esperto e reparou que no começo da execução do comando foi mostrada a seguinte mensagem:

> NG Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/

Traduzindo para o portugues, algo relacionado com: Servidor rodando em *localhost* na porta 4200, sendo assim, podemos acessar o seguinte endereço em nosso navegador: http://localhost:4200/

![Gif acessando app em Angular](https://res.cloudinary.com/mahenrique94/image/upload/v1549718612/acessando-app-angular_sujj2t.gif)

Como pode ver, o Angular por padrão (*default*) deixa uma página principal para nós.

## Hello World com Angular

Agora que tudo está pronto, ou seja, já baixamos o Cli do Angular e criamos nosso projeto (*app*), vamos finalmente executar nosso *Hello World*).

Para trocaros o *layout* padrão (*default*) do Angular vamos precisar mexer no seguinte arquivo: `src/app/app.component.html` (nesse primeiro momento, ignore os outros arquivos e pastas), vamos alterar o seu conteúdo para:

````markup
<h1>Hello World</h1>
```

Voltando ao navegador onde havíamos aberto a aplicação, devemos ter o seguinte resultado:

![Hello World com Angular](https://res.cloudinary.com/mahenrique94/image/upload/v1549718635/hello-world-angular_lr0txi.png)

**Obs**: Não foi necessário recarregar a página, pois, o Angular por padrão já vem com um Live Reloading configurado.

E maravilha, tudo funcionando como o esperado, nosso *Hello World* está feito.

![Gif comemorando fim do post](https://res.cloudinary.com/mahenrique94/image/upload/v1549718659/gif-torcedor-comemorando-sozinho_my15gw.gif)

Em meu canal gravei um vídeo explicando o mesmo exemplo, porém, utilizando a versão 6 do Angular:

<iframe height="500" src="https://www.youtube.com/embed/IdRl_NRJLc8" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>

E aí gostou? Não deixe de comentar e se inscrever na [*newsletter*](http://eepurl.com/ggP7Rv) para receber novos conteúdos por email.

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
