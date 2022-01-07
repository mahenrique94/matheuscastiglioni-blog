---
autor: "Matheus Castiglioni"
categoria: "Arquitetura"
disqus_identifier: "eventos-dominio-integracao"
disqus_title: "Eventos de Domínio vs Integração"
disqus_url: "https://blog.matheuscastiglioni.com.br/eventos-dominio-integracao"
date: 2022-01-20T10:00:20-03:00
draft: false
keywords: ["domínio", "eventos", "integração", "mensagens", "mensageria"]
slug: "eventos-dominio-integracao"
tag: ["domínio", "eventos", "integração", "mensagens", "mensageria"]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1641573472/email-messages-network-circuit-board-link-connection-technology_1_p4ci8u.jpg"
title: "Eventos de Domínio vs Integração"
url: "/eventos-dominio-integracao"
---

Anteriormente falamos sobre [Arquiteturas orientadas à eventos](https://blog.matheuscastiglioni.com.br/eda/), nela vimos como criar arquiteturas que sejam escaláveis e tenham suas partes desacopladas e autônomas.

Mas, quando falamos de eventos, podemos pensar em dois tipos: **Eventos de domínio** e **Eventos de integração**. Porém, quando e porque utilizar um tipo ou outro?

## Eventos de domínio

Eventos de domínio englobam operações baseadas em CRUD ou propriedades, dessa forma, geralmente são utilizados para realizar notificações dentro do seu contexto, eles não podem ser ouvidos por partes fora da barreira e sim apenas dentro do seu contexto em si. Exemplos: `ProductUpdated`, `AgeUpated`, `NameChanged`, `OrderCanceled`, etc...

## Eventos de integração

Já os eventos de integração como o próprio nome diz, englobam operações comportamentais de um fluxo de negócio, dessa forma, geralmente são utilizados para realizar propagação de informações ou dados, eles não devem ser ouvidos por partes de dentro do seu contexto, apenas por partes integrantes entre diferentes contextos como forma de integrá-los (realizar uma comunicação entre si de forma desacoplada). Exemplos: `InventoryAdjusted`, `EmployeeOnboarded`, `PaymentConfirmed`, `ProductOnPromotion`, etc...

## Conclusão

Nesse *post* conhecemos dois tipos de eventos (Eventos de domínio e eventos de integração), entendemos suas diferenças, motivações e casos de usos. Assim você consegue decidir quando utilizar um ou outro tipo para emissão de eventos.

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
