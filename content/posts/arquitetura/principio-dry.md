---
autor: "Matheus Castiglioni"
categoria: "Arquitetura"
disqus_identifier: "principio-dry"
disqus_title: "Princípio Dry"
disqus_url: "https://blog.matheuscastiglioni.com.br/principio-dry"
date: 2021-10-13T19:51:34-03:00
draft: false
keywords: ["design", "princípio"]
slug: "principio-dry"
tag: ["design", "princípio"]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1634165892/1607.m00.i125.n010.P.c25.347794790_Desert_mountains_sandstone_background_vector_illustration_1_lyklal.jpg"
title: "Princípio Dry"
url: "/principio-dry"
---

Uma situação um tanto quanto comum quando estamos trabalhando com desenvolvimento de _software_ é quando uma única alteração exige que você saia mexendo e refatorando vários arquivos espalhados pela base de código.

Por exemplo: Você precisou alterar uma tabela para que as linhas da mesma fossem listradas, você precisou alterar o campo CEP para aceitar 10 caracteres em vez de 7 ou você precisa desconsiderar o _timezone_ de uma data antes de salvá-la no banco de dados.

Todos os três exemplos são de contextos diferentes, o primeiro para _front-end_, o segundo para banco de dados e o último para _back-end_.

Desenvolvimento de _software_ é um processo muito antigo, será que não existe uma forma da gente minimizar tais esforços? Sim, existe um princípio chamado DRY (_Don't repeat yourself_, não se repita).

## Conhecendo o princípio

O princípio DRY refere-se justamente em situações onde estamos repetindo códigos e visa remover ou no mínimo diminuir tais repetições. Vamos ver uma das N formas de como poderíamos resolver os três exemplos dados anteriormente:

- Poderíamos criar um componente de tabela como base para todos os lugares que precisar dessa estrutura visual.
- Poderíamos centralizar uma tabela de endereços no banco de dados.
- Poderíamos criar uma função _helper_ que iria encapsular a regra de calcular o _timezone_.

Repare que agora os três exemplos iriam necessitar apenas um ponto de alteração e impacto na base de código quando mudanças ou evoluções incrementais fossem necessárias.

### Desvantagens

Mas, nem tudo são flores, isso porque evitar repetição de códigos pode nos ajudar em uma característica, porém, pode prejudicar outra (ou outras).

Quando estamos falando de reaproveitamento, falamos de compartilhamento. Quando falamos de compartilhamento, falamos de acoplamento. Quando falamos de acoplamento, falamos de um único ponto de impacto.

Ou seja, quanto mais você compartilha, mais as coisas serão acopladas e mais comunicação será necessária quando uma mudança nesse único ponto de impacto for realizada.

Cabe a você encontrar o ponto de equilíbrio que faça sentido para seu projeto.

## Conclusão

Nesse *post* vimos o princípio do desenvolvimento de _software_ chamado DRY, que foca em diminuir a repetição de códigos.

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
