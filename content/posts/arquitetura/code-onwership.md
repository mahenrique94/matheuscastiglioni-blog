---
autor: "Matheus Castiglioni"
categoria: "Arquitetura"
disqus_identifier: "code-onwership"
disqus_title: "Code Onwership"
disqus_url: "https://blog.matheuscastiglioni.com.br/code-onwership"
date: 2021-04-17T14:56:12-03:00
draft: false
keywords: ["colaboração", "estratégias", "organização", "times"]
slug: "code-onwership"
tag: ["colaboração", "estratégias", "organização", "times"]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1618682286/4440574_1_emo6xm.jpg"
title: "Code Onwership"
url: "/code-onwership"
---

Em _posts_ anteriores vimos como organizar e dividir times orientados à contextos: [https://blog.matheuscastiglioni.com.br/inverse-conway-maneuver/](https://blog.matheuscastiglioni.com.br/inverse-conway-maneuver/) e uma pergunta ou problemas que podem surgir com essa aboragem: "Que pessoa ou time pode mexer nos contextos de outro time?"

Quando a gente chega em perguntas assim estamos falando sobre propriedade dos códigos (_code ownership_) e existem três tipos de propriedades que podemos aplicar para diferentes momentos em diferentes situações:

- **Strong code onwership**: Apenas pessoas e times donos do contexto podem realizar alterações no mesmo, caso outra pessoa ou time precisa realizar alguma modificação, é necessário comunicar o time e alinhar o planejamento para tal mudança ser realizada.
- **Weak code ownership**: Qualquer pessoa pode realizar mudanças no código, mas, elas só podem ser aplicadas de fato através de uma revisão e alinhamento com as pessoas e times donos, normalmente realizado através de _pull requests_.
- **Collective code ownership**: Qualquer pessoa pode mexer em qualquer parte dos códigos (também chamado de _no code onwership_), normalmente nesses cenários a area ou time todo de engenharia é dono dos códigos.

Cada uma pode ser aplicada para um devido momento e necessidade ou aplicadas em conjuntas ao mesmo tempo. Você precisa analisar quais os problemas atuais e o lado positivo/negativo de cada uma, por exemplo:

- Com uma forte propriedade podemos acabar tendo impactos _cross_ times e atrasos de planejamentos em entregas, tornando os times gargá-los entre si.
- Já uma propriedade fraca pode ser boa, mas, precisamos garantir o fluxo de revisão para que apenas sejam realizadas mudanças que fazem sentido para o negócio e para o time.
- E por fim a coletiva podemos ter vários impactos com todos as pessoas mexendo em qualquer parte da base de código.

## Conclusão

Nesse _post_ vimos diferentes tipos de propriedade de códigos, cada uma aplica-se para um determinado momento e contexto da empresa, as vezes elas podem ser aplicadas de forma misturada ao mesmo tempo.

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
