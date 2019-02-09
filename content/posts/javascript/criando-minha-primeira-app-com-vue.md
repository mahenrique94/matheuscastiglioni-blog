---
autor: "Matheus Castiglioni"
categoria: "JavaScript"
disqus_identifier: "criando-minha-primeira-app-com-vue"
disqus_title: "Criando Minha Primeira App Com Vue"
disqus_url: "https://matheuscastiglioni-blog.netlify.com/criando-minha-primeira-app-com-vue"
date: 2018-03-12T10:00:37-02:00
draft: false
keywords: [ "Frameworks", "Front-End", "Vue", "VueJS", "Web" ]
slug: "criando-minha-primeira-app-com-vue"
tag: [ "Frameworks", "Front-End", "Vue", "VueJS", "Web" ]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1549717895/criando-minha-primeira-app-com-vue_beashi.png"
title: "Criando Minha Primeira App Com Vue"
url: "/criando-minha-primeira-app-com-vue"
---

Continuando a série sobre *frameworks* ou *libs* para *front*, como introdução estou explicando apenas como criar e subir um projeto pela primeira vez, caso tenha perdido os *posts* anteriores, aqui estão eles:

- [Criando minha primeira app com React](http://blog.matheuscastiglioni.com.br/criando-minha-primeira-app-com-react)
- [Criando minha primeira app com Angular 5](http://blog.matheuscastiglioni.com.br/criando-minha-primeira-app-com-angular-5)

Portanto, nesse *post*, vou criar uma *app* (projeto) com Vue ou VueJS, depende de como você costuma chamá-lo.

## Conhecendo o VueJS

O [VueJS](https://vuejs.org/) é um *framework*  progressivo de JavaScript, com ele conseguimos construir (criar) app's e SPA's, focando apenas na criação de nossos componentes e páginas, pois o mesmo já vem configurado e possuí diversos recursos para nos facilitar no dia à dia.

Mas como podemos criar nosso primeiro projeto com o VueJS? Para isso, assim como Angular e React, o Vue também possuí seu próprio *cli* para ser usado em linha de comando, assunto que veremos no próximo tópico.

## Instalando o cli do VueJS

Podemos realizar a instalção do *cli* de duas maneiras, sendo elas: `npm` ou `yarn`:

### Instalando com yarn

Para instalarmos o *cli* com o [Yarn](https://yarnpkg.com/pt-BR/) podemos executar o comando `yarn global add`, assim o mesmo ficará instalado de forma global na máquina, ou seja, poderá ser acessado em qualquer pasta através do terminal:

```bash
yarn global add @vue/cli
```

### Instalando com npm

Além do Yarn, também podemos instalá-lo pelo [Npm](https://www.npmjs.com/):

```bash
npm install -g @vue/cli
```

Ou de forma abreviada:

```bash
npm i -g @vue/cli
```

**Obs**: Repare que também instalamos o *cli* de forma global com o `npm`, para isso, passamos o parâmetro `-g` no comando de instalação.

## Criando a primeira app

Pronto, agora já temos nosso *cli* (*client*) instalado, portanto, já podemos começar a trabalhar em nosso projeto e na construção da primeira *app* que será o famoso *Hello World*, para isso, podemos utilizar o comando `create`:

```bash
vue create minha-primeira-app
```

<script src="https://asciinema.org/a/DELMBJKwD3GVnLBGe5EG6mCPa.js" id="asciicast-DELMBJKwD3GVnLBGe5EG6mCPa" async></script>

Após a finalização do comando, uma pasta chamada `minha-primeira-app` (mesmo nome passado para o `create`) deve ter sido criada na pasta atual onde o comando foi rodado.

Mas, e se eu já tiver uma pasta e querer utilizá-la como base para a *app*?

### Utilizando uma pasta já existente

Para essa necessidade, podemos utilizar o mesmo comando `create`, porém, com uma diferença nos seus parâmetros, se quisermos criar uma nova pasta, simplesmente informamos o nome da pasta (que será o nome do projeto), caso queira utilizar uma pasta já existente, podemos passar um `.` no lugar do nome:

```bash
vue create .
```

<script src="https://asciinema.org/a/nFBWHtBF1VjlKIan8PN4TzWYm.js" id="asciicast-nFBWHtBF1VjlKIan8PN4TzWYm" async></script>

Repare que primeiro devemos navegar (`cd nome-da-pasta`) até a pasta, depois rodar o comando, a única diferença é que a primeira pergunta do comando é:

> Generate project in current directory? (Y/n)

Traduzindo: Deseja gerar um novo projeto na pasta atual? Sim ou não. Para confirmar digite `Y` e para negar a execução do comando, digite `n`, assim que decidir qual parâmetro informar, basta apenas teclar o `enter`.

Após o término do comando, o projeto estará pronto para uso.

Se você deve ter reparado, para ambos os casos, informamos para o Vue utilizar as configurações padrão, caso queira e tenha a necessidade, você pode optar por personalizar as configurações do projeto, alguns exemplos:

- TypeScript
- Router
- Vuex
- Pré Processadores
- Linter / Formatter
- Testes
- etc...

<script src="https://asciinema.org/a/yQaDsvcfSc8vZoPniCM0VBQPX.js" id="asciicast-yQaDsvcfSc8vZoPniCM0VBQPX" async></script>

## Subindo a app

Após ter nosso projeto (*app*) criado, já podemos rodá-lo, mas como podemos fazer isso? A princípio precisaríamos de um servidor que iria servir a nossa *app*, porém, o Vue já cuida de tudo isso para nós, se você reparou, ao término do comando `create` temos a seguinte saída:

![Saída do comando create](https://res.cloudinary.com/mahenrique94/image/upload/v1549717987/saida-do-vue-cli-create_ylnyhy.png)

O próprio comando nos informe como podemos rodar a *app*:

```bash
cd minha-primeira-app
yarn serve
```

<script src="https://asciinema.org/a/H9Hm6qHuiv5UGJWXl0nPCrzAj.js" id="asciicast-H9Hm6qHuiv5UGJWXl0nPCrzAj" async></script>

Ao término do comando, seu navegador deve abrir sozinho com a página padrão do Vue, isso porque o projeto já vem um servidor embutido que é executado através do `yarn serve`.

![Página padrão do Vue](https://res.cloudinary.com/mahenrique94/image/upload/v1549718036/pagina-padrao-vue_dmwqyz.png)

Pronto, já temos uma *app* Vue criada e rodando.

## Hello World com VueJS

Para finalmente fazermos nosso *Hello World* devemos abrir o projeto (pasta `minha-primeira-app`) em algum editor de texto e alterar o conteúdo do seguinte arquivo: `src/components/HelloWorld.vue`, vamos trocar o código padrão criado pelo Vue.

```markup
<template>
  <h1>Hello World</h1>
</template>
```

Repare que mexemos apenas na tag `template` o resto ficou de forma igual. Após a mudança devemos salvar o arquivo, voltando à página carregada pelo navegador temos:

![Hello World com VueJS](https://res.cloudinary.com/mahenrique94/image/upload/v1549718084/hello-world-vue_h7mqcp.png)

E finalmente nosso primeiro *Hello World* está feito, veja que não foi necessário recarregar a página como de costume, isso porque o projeto já vem com um sistema de [Live Reloading](http://livereload.com/).

![Gif do Hello World finalizado](https://res.cloudinary.com/mahenrique94/image/upload/v1549718136/gif-gordinho-empolgado-comemorando_xqphrv.gif)

E aí, gostou? Já conhecia o VueJS? Não deixe de comentar.

Para receber novos *posts* por email, se inscreva na [*newsletter*](http://eepurl.com/ggP7Rv) logo abaixo.
