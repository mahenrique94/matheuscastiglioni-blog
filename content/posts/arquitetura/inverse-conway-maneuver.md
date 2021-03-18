---
autor: "Matheus Castiglioni"
categoria: "Arquitetura"
disqus_identifier: "inverse-conway-maneuver"
disqus_title: "Inverse Conway Maneuver"
disqus_url: "https://blog.matheuscastiglioni.com.br/inverse-conway-maneuver"
date: 2021-03-17T22:05:01-03:00
draft: false
keywords: ["estrutura", "organização", "times"]
slug: "inverse-conway-maneuver"
tag: ["estrutura", "organização", "times"]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1616029955/colleagues-giving-fist-bump_1_gyzy5x.jpg"
title: "Inverse Conway Maneuver"
url: "/inverse-conway-maneuver"
---

Em um _post_ anterior vimos a famosa [Lei de Conway](https://blog.matheuscastiglioni.com.br/lei-de-conway/), nele entendemos os problemas que existem quando nos deparamos com tal lei.

Como exemplo do _post_ havíamos visualizado um sistema onde sua arquitetura era dividida em camadas, ou seja, uma camada para o _front_, outra para o _back_, uma para o banco de dados e a última de infraestrutura.

Caso não tenha visto o _post_ vejá aqui: [https://blog.matheuscastiglioni.com.br/lei-de-conway/](https://blog.matheuscastiglioni.com.br/lei-de-conway/).

Exemplo da arquitetura de exemplo:

![Exemplo de organização em silos](https://res.cloudinary.com/mahenrique94/image/upload/v1615938641/Untitled_Diagram_cjmzhe.png)

O problema dessa arquitetura é que a estrutura dos times tendem à espelhar as camadas existentes, ou seja, vamos ter um time com pessoas _front_, outro com pessoas _back_, outro com pessoas DBA e um último com pessoas de infra. Dessa forma cada time formarão e viverão em seus próprios silos.

O problema dessa estrutura e divisão é a necessidade em coordenar o trabalho quando envolve mudanças através de dominios, sendo necessário falar com pessoas e times diferentes, isso porque mudanças de dominio irão cruzar as camadas e seus silos. Dessa forma, uma arquitetura em camada é para facilitar mudanças e trocas nas camadas e não em dominios como `Cliente`.

Uma maneira para resolver esse problema é tentar estruturar nossos times de forma multi funcional, cujas funções correspondem as necessidades do serviço e contexto da qual o time é responsável.

Vamos imaginar o time que cuida do serviço e contexto de pagamento:

![Time de pagamento](https://res.cloudinary.com/mahenrique94/image/upload/v1616030632/Untitled_Diagram_sxxbax.jpg)

Seguindo a estrutura anterior, a mesma poderia ser organizada dessa forma, repare que o próprio time contém todas as habilidades necessárias para construir o serviço. Dessa forma, as mudanças para o dominio pagamento irão impactar apenas o próprio time, pois, o contexto vive dentro do mesmo.

Times multi funcionais podem ser orientados à serviços, dominios ou capacidades de negócio.

Assim surgiu o nome *Inverse Conway Maneuver* (_Manobra de Conway Inversa_), isso porque deixamos de estrutura nossos times em silos de capacidades técnicas e passamos a organizar em times multi funcionais, ou seja, quando a gente estrutura nossos times para parecer como a arquitetura que desejamos, será mais fácil atingí-la.

## Conclusão

Nesse *post* vimos como podemos estrutura nossos times através de multi funções indo contra a Lei de Conway.

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
