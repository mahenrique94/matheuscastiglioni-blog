---
autor: "Matheus Castiglioni"
categoria: "JavaScript"
disqus_identifier: "react-native-e-nativo"
disqus_title: "React Native é nativo?"
disqus_url: "https://blog.matheuscastiglioni.com.br/react-native-e-nativo"
date: 2019-07-24T21:18:49-03:00
draft: false
keywords: ["Front-End", "React Native", "Mobile", "App"]
slug: "react-native-e-nativo"
tag: ["Front-End", "React Native", "Mobile", "App"]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1564014096/react-native_lakcvh.png"
title: "React Native é nativo?"
url: "/react-native-e-nativo"
---

Desenvolver aplicativos nativos para multiplataformas pode não ser uma tarefa tão simples quanto parece, será necessário que o desenvolvedor tenha conhecimento de pelo menos duas linguagens, a linguagem da plataforma A e a linguagem da plataforma B. Sabendo disso, hoje temos duas grandes plataformas para o mundo *mobile*, sendo elas: **Android** e **iOS**.

Se a gente quiser desenvolver um novo aplicativo, será necessário conhecer as tecnologias utilizadas para o desenvolvimento Android e iOS.

Em muitos casos existe um time (ou mais) para desenvolvimento Android e um (ou mais) para iOS, com diferentes pessoas e diferentes conhecimentos.

Mas, para melhorar essas situações chegaram as aplicações hibridas.

## Aplicações Hibridas

Afinal, o que são essas tal de aplicações hibridas? A ideia é que com a mesma base de código e conhecimento a gente desenvolva aplicações para a plataforma A e B, diminuindo a necessidade de vários times ou várias pessoas.

Para que seja possível esse desenvolvimento hibrido, existe diversas maneiras e tecnologias, sendo algumas:

As bibliotecas/frameworks mais comuns são: [Cordova](https://cordova.apache.org/), [PhoneGap](https://phonegap.com/), [Xamarim](https://visualstudio.microsoft.com/pt-br/xamarin/?rr=https%3A%2F%2Fwww.google.com%2F), [Ionic](https://ionicframework.com/), [Native Script](https://nativescript.org/), [React Native](https://facebook.github.io/react-native/) e [Flutter](https://flutter.dev/) (desculpe se eu acabei esquecendo ou desconhecendo outros).

Para assunto do *post*, vamos falar um pouco sobre o **React Native**.

## Conhecendo o React Native

O React Native é uma biblioteca para desenvolver aplicações hibridas utilizando a linguagem JavaScript, ele surgiu após o grande sucesso do [React](https://reactjs.org/) para a *web*.

A ideia do React Native é bem parecido com o velho já conhecido React, porém, existem algumas diferenças, por exemplo:

1. Não utilizamos componentes HTML, existem os componentes próprios para *mobile*.
2. As aplicações de estilos não são feitas através de CSS, existe uma outra maneira para criar os estilos.
3. etc...

Mas, como o React Native pega os códigos JavaScript e transforma para código nativo (`Java/Kotlin` ou `Swift/Objective-C`)?

## A bridge do React Native

Você pode estar pensando:

> O React Native cria um compilador que vai gerar uma [AST](https://en.wikipedia.org/wiki/Abstract_syntax_tree) e depois vem um interpretador e transforma essa AST em códigos nativos.

Seria uma possibilidade, mas, poderia acabar acarretando em várias complexidades. A principal seria a necessidade de criar vários compiladores para as diversas plataformas alvo, o que seria inviável em algum momento.

Então, não é a maneira como o React Native resolveu o problema.

Para criar aplicações hibridas, o React Native criou uma arquitetura através de *brigde* (ponte).

![Arquitetura de bridge do react native](https://res.cloudinary.com/mahenrique94/image/upload/v1564015511/1_JT_Smf1u3fJTBY8ev9WAzg_ivmrlz.png)

A ideia é que a *bridge* seja a responsável por realizar uma comunicação bidirecional e assíncrona entre o código JavaScript e código nativo. Podemos definir a *brigde* como o coração do React Native. O mais importante é que ambos mundos (JavaScript e nativo) são escritos em tecnologias diferentes, mas, eles são capazes de se comunicar.

### Como a comunicação é feita?

O processo para realizar essa comunicação é mais ou menos o seguinte:

1. Em nossos códigos JavaScript vamos escrever orientações, por exemplo: Botão azul com fonte branca de altura 100 e largura 200 (um componente).
2. Essa informação JavaScript será transformada e processada para um JSON, no caso do React Native o responsável por essa transformação e processamento é o JSCore (motor JavaScript).
3. A *bridge* recebe, processa esse JSON e manda a mensagem para o nativo.
4. Um pedido para o nativo é feito: Olha nativo, desenha para mim um botão azul com a fonte branca de altura 100 e largura 200.
5. O nativo atende o pedido e renderiza o botão.

Podemos ilustrar o fluxo para iOS:

![Fluxo de bridge no ios](https://res.cloudinary.com/mahenrique94/image/upload/v1564016057/1_OhI5FguDjCJiMHGkyRUcwg_l4sa6t.png)

E no Android:

![Fluxo de bridge no android](https://res.cloudinary.com/mahenrique94/image/upload/v1564016062/1_q16vcoe7CRolZLOCoG5_Pg_alyq2u.png)

A *bridge* do React Native foi construída utilizando C/C++ e pode rodar em multiplas plataformas.

Podemos visualizar exemplos de mensagens e objetos JSON's envidos do JavaScript para o nativo, ou seja, exemplos dessa comunicação.

![Comunicação do JavaScript com o nativo](https://res.cloudinary.com/mahenrique94/image/upload/v1564016024/1_UHBv6Ctmm6n6xV0iED8zqA_kgmxum.png)

E por fim, podemos ver que os componentes são de fato renderizados de forma nativa:

![Renderização de componentes nativos](https://res.cloudinary.com/mahenrique94/image/upload/v1564016035/1_Jio8QkXkT__6VsdEnSzszQ_azszr9.png)

## Para saber mais

A ideia de mostrar que o React Native é de fato nativo veio por conta da existência de outra maneira para criarmos aplicações hibridas, é possível renderizar páginas *web* dentro de uma `WebView` (um componente do Android) ou `UIWebView` (um componente do iOS).

Dessa maneira, poderíamos pegar nossos sites contruídos em HTML, CSS e JavaScript e renderizar dentro de uma WebView que está dentro de um aplicativo, dando a ideia de ser um aplicativo nativo, mas, na verdade é apenas um "navegador" dentro de um aplicativo.

## Conclusão

Nesse *post* falamos um pouco sobre desenvolvimento hibrido e entendemos como o React Native resolveu esse problema para ser nativo tanto para Android quanto para iOS.

E aí, você já conhecia o React Native e toda essa arquitetura de *bridge*? Não deixe de comentar.

Abraços, até a próxima.

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

## Referências:

- [Understanding the React Native bridge concept](https://hackernoon.com/understanding-react-native-bridge-concept-e9526066ddb8)
- [React Native – Hipsters #148](https://hipsters.tech/react-native-hipsters-148/)
