---
autor: "Matheus Castiglioni"
categoria: "Arquitetura"
disqus_identifier: "big-ball-of-mud"
disqus_title: "Big Ball of Mud"
disqus_url: "https://blog.matheuscastiglioni.com.br/big-ball-of-mud"
date: 2021-03-17T21:26:47-03:00
draft: false
keywords: ["deploy", "desenvolvimento", "entregas", "projetos", "release", "softwares"]
slug: "big-ball-of-mud"
tag: ["deploy", "desenvolvimento", "entregas", "projetos", "release", "softwares"]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1616027549/36413_l5fxtb.jpg"
title: "Big Ball of Mud"
url: "/big-ball-of-mud"
---

Durante o ciclo de desenvolvimento dos nossos _softwares_ podemos e vamos em algum momento nos deparar com desafios, às vezes menos complexos e varias vezes muito complexos.

Um desafio e cenário um tanto quanto famoso é conhecido como **Big ball of mud** (no literal seria: Grande bola de lama), termo popularizado por Brian Foote e Joseph Yoder's em 1997.

## Big Ball of Mud

Afinal, o que isso que dizer? O que bola de lama tem haver com desenvolvimento de _softwares_? Normalmente esse problema aparece em arquiteturas onde falta pontos de percepção e são cenários de acoplamento caóticos.

Ou seja, podemos definí-la como:

> Uma grande bola de lama (_Big ball of mud_) é um sistema de software que carece de uma arquitetura perceptível

Dessa forma, podemos classificá-la como um _design_ de _software_ e é mais popular do que parece.

Mas, quando dizemos "arquitetura perceptivel" estamos nos referindo à que? Imagine um sistema do qual faz uso de linguaguens que suportam o paradigma OO (Orientação à objetos) onde temos o seguinte diagrama:

![Diagrama de classes](https://res.cloudinary.com/mahenrique94/image/upload/v1616027771/evar_0403_stkhcs.png)

Cada nó nesse diagrama representa uma classe, cada linha representa um acoplamento (tanto para fora quanto para dentro) e o negrito representa uma conexão.

Como podemos perceber esse sistema está altamento acoplado, ou seja, ele possuí um acoplamento muito alto, tanto apropriado quanto inapropriado (assunto para um próximo _post_). O problema desses fortes e grandes acoplamentos é que nos conduzem a sofrer quando mudanças ocorrem ou precisam ocorrer.

Isso porque cada mudança possuí um ponto de impacto muito alto e desconhecido, a gente precisa caçar e procurar pelo sistema quais são os lugares que irão sofrer com essa mudança. Ou seja, é virtualmente impossível mudar uma parte do sistema sem impactar as outras e é muito fácil a gente esquecer ou não encontrar lugares no sistema que irão sofrer com tal mudança.

Esse tipo de situação é extremamente baixo do ponto de visto de evolucionabilidade, isso porque sistemas que se encontram nessa situação são muito dificil de serem evoluídos.

Normalmente alguns motivos que conduzem um sistema à se encontrar nessa situação são:

- Pressões de negócio
- _Turnover_ de pessoas
- Entropia do código (assunto para um próximo _post_)

Resumindo a _big ball of mud_ é um anti padrão que você deve tentar evitar ao máximo durante o _design_ de suas arquiteturas e sistemas.

## Conclusão

Nesse *post* entendemos o que de fato signifa e quer dizer **Big ball of mud**, quando nos deparamos com essa situação e o que ela representa.

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
