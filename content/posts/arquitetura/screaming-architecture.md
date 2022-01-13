---
autor: "Matheus Castiglioni"
categoria: "Arquitetura"
disqus_identifier: "screaming-architecture"
disqus_title: "Screaming Architecture"
disqus_url: "https://blog.matheuscastiglioni.com.br/screaming-architecture"
date: 2022-01-13T10:00:44-03:00
draft: false
keywords: ["estilo de arquitetura"]
slug: "screaming-architecture"
tag: ["estilo de arquitetura"]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1641573471/man-making-announcement-with-megaphone_1_uzowgt.jpg"
title: "Screaming Architecture"
url: "/screaming-architecture"
---

Imagine que você está procurando por plantas de uma construção, tal documento foi criado por uma pessoa arquiteta e o mesmo nos diz os planos para a construção em si. Mas, quais são esses planos ditos pelas plantas?

Se a planta que você está olhando é para uma residência de uma única família, então você irá provavelmente ver uma entrada, uma sala de estar, uma sala de jantar, uma cozinha, quartos e por ai vai... Repare a planta por si só está gritando: **Casa**.

Porém, se a planta que você está olhando é para uma biblioteca, então você irá ver uma grande entrada, uma área para pagamentos, uma área de leitura, pequenas salas de conferências, galeria com estantes de livros e por ai vai... Repare a planta por si só está gritando: **Biblioteca**.

Seguindo esses princípios, quando você olha para a arquitetura da sua aplicação (_front-end_/_mobile_) ou serviço (_back-end_), o que ela está gritando? Quando você olha em diretórios e arquivos de alto nível, o que eles gritam? Se sua arquitetura segue a ideia de _screaming architecture_ (arquitetura gritante) então eles deveriam gritar coisas como: **Sistema de saúde**, **Sistema de pagamento**, **Sistema de inventário**, **Sistema de passagem**, etc...

Porém, muitas vezes sua arquitetura irá gritar coisas como: **Spring**, **Rails**, **Nest**, **Django**, **Phoenix**, **React**, **Svelte**, etc...

### Orientada à casos de usos e negócio

Uma arquitetura não deveria ser sobre _frameworks_ ou bibliotecas e sim sobre negócio e seus casos de uso (_use case driven_). _Frameworks_ e bibliotecas são apenas ferramentas e meios de construção, se a arquitetura é baseada neles, então ela não pode ser baseada no negócio.

A razão para que ela seja centrada em negócio e seus casos de uso é para que você não se comprometa com tais tecnologias, se um dia você precisar migrá-las isso deveria ser uma missão possível. Além disso, você deveria poder postegar ou atrasar algumas tomadas de decisões, por exemplo: Rabbit ou Kafka? MySQL ou MongoDB? Hibernate ou JPA? etc... Quando você é conduzido por _frameworks_, eles irão tomar tais decisões por você e irão decidí-las bem mais cedo do que deveriam.

### Qualidade

Além disso, quando sua arquitetura é orientada ao negócio, é mais fácil testá-las, você não precisa criar burocracias ou barreiras impostas por tecnologia X, Y ou Z. Você não deveria precisar conectar em um banco de dados para rodar seus testes unitários, seus casos de usos deveriam ser objetos de negócio e eles deveriam ser testados facilmente de forma isolada, sem conhecimentos do mundo externo.

## Conclusão

Nesse *post* vimos um estilo de arquitetura chamada _screaming architecture_, nela vimos que a arquitetura deve ser centrada e conduzida pelo negócio e seus casos de usos e não por tecnologias. Ou seja, quando você olhar a estrutura do seu projeto, ela deveria gritar seu propósito.

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

