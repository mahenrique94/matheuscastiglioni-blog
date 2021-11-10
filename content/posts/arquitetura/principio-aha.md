---
autor: "Matheus Castiglioni"
categoria: "Arquitetura"
disqus_identifier: "principio-aha"
disqus_title: "Principio AHA"
disqus_url: "https://blog.matheuscastiglioni.com.br/principio-aha"
date: 2021-11-10T20:23:05-03:00
draft: false
keywords: ["design", "princípio"]
slug: "principio-aha"
tag: ["design", "princípio"]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1636586778/discontent-african-american-woman-keeps-palm-refusal-gesture-says-stays-away-from-me-come-closer-avoids-crowded-places-grimaces-disappointed-isolated-pink-wall-empty-space_1_grduzk.jpg"
title: "Principio AHA"
url: "/principio-aha"
---

Recentemente em alguns artigos anteriores falamos sobre [DRY](https://blog.matheuscastiglioni.com.br/principio-dry/), nele vimos que através de abstrações podemos evitar duplicidade de códigos. Mas, será que sempre devemos criar abstrações e evitar tais duplicidades? Aqui vem a velha resposta de sempre:

> Depende!

Precisamos encontrar um equilíbrio na forma como desenvolvemos _softwares_ e criamos o _design_ dos nossos códigos. Dessa forma, abstrações ou duplicidades demais podem ser prejudiciais.

O ponto é que muitas vezes nos pegamos pensando em jeitos de otimizar os códigos, criar uma boa _interface_ de uso ou ter uma boa API com bons comportamentos de forma abstraída e compartilhada. Repare que logo no ínicio já estamos pensando em compartilhamento, reuse e abstrações, mas, os trechos de códigos são apenas utilizandos em pontos únicos. Não há necessidade de abstraí-los "pensando no futuro".

Devemos nos preocuparmos com essas coisas quando houver as necessidades, as vezes gastamos tanto tempo nos preocupando com os exemplos anteriores para no próximo dia ou semana a necessidade de tal funcionalidade ser removida e o código ser removido.

## Evite abstrações precipitadas

O princípio **AHA (_Avoid Hasty Abstractions_, Evite abstrações precipitadas)** foca justamente nisso, ou seja, crie as abstrações por necessidades e quando houver sentido.

> É preferível que você crie duplicações do que abstrações erradas e equivocadas.

Comece otimizando seus códigos para mudanças e manutenção.

Quando você tiver certeza dos casos de usos (partes dos códigos que irão necessitar e porque irão precisar), necessidades para duplicação de código e sua _interface_ (quais parâmetros serão necessários e o que deve ser retornado), ai sim, talvez seja a hora de começar a pensar em abstrações.

## Conclusão

Nesse *post* vimos o princípio do desenvolvimento de _software_ chamado AHA, que foca em garantir que seus códigos possuem as abtrações necessárias.

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
