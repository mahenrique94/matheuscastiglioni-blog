---
autor: "Matheus Castiglioni"
categoria: "Arquitetura"
disqus_identifier: "principio-wet"
disqus_title: "Principio WET"
disqus_url: "https://blog.matheuscastiglioni.com.br/principio-wet"
date: 2021-11-25T08:14:10-03:00
draft: false
keywords: ["design", "princípio"]
slug: "principio-wet"
tag: ["design", "princípio"]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1637843815/close-up-hand-writing-notebook-top-view_1_aa5xbo.jpg"
title: "Principio WET"
url: "/principio-wet"
---

Nos _post's_ anteriores falamos bastante sobre abstrações e quando criá-las, seguindo os princípios [_don't repeat yourself_](https://blog.matheuscastiglioni.com.br/principio-dry/) e [_avoid hasty abstractions_](https://blog.matheuscastiglioni.com.br/principio-aha/). Vale lembrar também que:

> Duplicação de código é mais barata do que abstrações erradas.

Seguindo essas ideias vamos falar do próximo princípio chamado **WET**.

## Princípio WET

O princípio **WET** (_Write everything twice_, Escreva tudo duas vezes) foca em basicamente escrever os mesmos trechos de códigos pelo menos duas vezes antes de começar a pensar em possíveis abstrações ou formas de reaproveitamento de códigos.

> Mas porque escrever e duplicar duas vezes?

Porque de início não conhecamos todos os casos de usos, requisítos, necessidades ou até mesmo o _design_ da arquitetura, estrutura ou códigos. Então se criarmos abstrações logo no começo do projeto pode não ser uma ideia muito escalável, se no futuro as abstrações não fizerem mais sentido ou necessitarem de atualizações vão gerar retrabalhos, custos, complexidades e altos pontos de impacto no projeto.

Quando você duplica códigos por certas vezes e um tempo, na terceira vez a ideia é que tudo esteja mais claro, sendo assim, esse é o ponto e momento ideal para criar abstrações e reaproveitamento de lógicos ou códigos.

Vale lembrar que esse princípio vai de contra ao [DRY](https://blog.matheuscastiglioni.com.br/principio-dry/) que foca em não repetir códigos por nenhuma razão.

Tudo é uma questão de equilibrio e custos, cada abordagem terá seus ganhos, perdas (sim, todas elas tem perdas) e os custos para mantê-las. Garanta que seu projeto, você ou sua empresa tenham as condições da pagá-los.


## Conclusão

Nesse *post* vimos o princípio do desenvolvimento de _software_ chamado WET, ele visa nos ajudar a pensar em quando devemos começar a pensar em abstrações e reaproveitamento de códigos.

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
