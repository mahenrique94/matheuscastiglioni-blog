---
autor: "Matheus Castiglioni"
categoria: "Outros"
disqus_identifier: "desconstruindo-a-web-estilizacao-de-paginas"
disqus_title: "Desconstruindo a Web: Estilização De Páginas"
disqus_url: "https://blog.matheuscastiglioni.com.br/desconstruindo-a-web-estilizacao-de-paginas"
date: 2019-05-02T21:41:43-03:00
draft: false
keywords: [ "Arquitetura", "Browser", "Cascade", "CSS", "CSSOM", "Estilização", "Style", "Web" ]
slug: "desconstruindo-a-web-estilizacao-de-paginas"
tag: [ "Arquitetura", "Browser", "Cascade", "CSS", "CSSOM", "Estilização", "Style", "Web" ]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1556844492/aplicacoes-html-css-js-feed-1_pxcf15.png"
title: "Desconstruindo a Web: Estilização De Páginas"
url: "/desconstruindo-a-web-estilizacao-de-paginas"
---

No *post* anterior eu expliquei um pouco sobre como é o processo de [renderização de páginas](https://blog.matheuscastiglioni.com.br/desconstruindo-a-web-renderizacao-de-paginas/) dos navegadores (*browsers*).

Dando continuidade na série sobre como a *web* funciona por debaixo dos panos, nesse *post* vou explicar como é feito a estilização de páginas.

Basicamente o processo referente a estilização de páginas é bem semelhante ao de renderização, ou seja, dados puros em *bytes* são convertidos para caracteres, então são tokenizados, os *nodes* são criados e por fim uma estrutura de árvore é formada.

## O que é uma estrutura de árvore?

Bom, no *post* anterior vimos o famoso DOM, responsável por estrutura os elementos HTML em nossa página. Do mesmo jeito, existe uma estrutura de árvore para o CSS, essa estrutura é chamada de CSSOM (CSS Object Model).

Os navegadores não conseguem lidar com *bytes* puros de HTML ou CSS, ambos precisam ser convertidos para algo que o mesmo entenda e reconheça, essa conversão é o que resulta no CSSOM, algo mais ou menos assim:

![Estilização de páginas](https://res.cloudinary.com/mahenrique94/image/upload/v1556844805/1_5GYEa442MdwmhPGJbGagGw_1_qronnj.png)

## Cascata

O CSS tem algo chamado de Cascata (*Cascade*), a cascata é como o navegador (*browser*) determina quais estilos são aplicados para os elementos.

A estrutura de árvore torna-se importante quando precisamos definir como nossos elementos estão sendo estilizados, ou seja, os estilos que afetam nossos elementos podem vim via herança de elementos pais ou foram definidos no próprio elemento.

## Conclusão

Nesse *post* expliquei um pouco sobre como funciona o processo de estilização das páginas nos navegadores (*browsers*). Vimos que é algo bem parecido com o processo de renderização:

- [Desconstruindo a Web: Renderização De Páginas](https://blog.matheuscastiglioni.com.br/desconstruindo-a-web-renderizacao-de-paginas/)

E aí, você já conhecia o processo de estilização das páginas pelos navegadores? Não deixe de comentar!

Caso tenha gostado desse *post* e quer receber novidades por email, fique á vontade para assinar se inscrever na [newsletter](http://eepurl.com/ggP7Rv).

Abraços, até a próxima.

### Referência

- [How browser rendering works — behind the scenes
](https://blog.logrocket.com/how-browser-rendering-works-behind-the-scenes-6782b0e8fb10)

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
