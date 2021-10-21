---
autor: "Matheus Castiglioni"
categoria: "Gestão"
disqus_identifier: "team-topologies"
disqus_title: "Topologias de Times"
disqus_url: "https://blog.matheuscastiglioni.com.br/team-topologies"
date: 2021-10-20T21:19:16-03:00
draft: false
keywords: ["estrutura", "times", "tipo", "topologia"]
slug: "team-topologies"
tag: ["estrutura", "times", "tipo", "topologia"]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1634775757/successful-happy-business-team_1_gkzwdy.jpg"
title: "Topologias de Times"
url: "/team-topologies"
---

Uma missão muito desafiadora quando falamos sobre empresas de tecnologia é como será a composição da área de engenharia, ou seja:

- Quais serão as divisões?
- Quais serão os agrupamentos de times?
- Quais serão os times?
- Como eles irão se comunicar?
- Qual será suas interações?
- Qual será suas composições?
- etc...

Nesse _post_ vamos focar em quais serão os tipos dos times e seus modos de comunicação/dependência.

## Quatro tipos de times

Um livro muito famoso chamado [Team Topologies](https://teamtopologies.com/) definiu e estruturou quatro tipos padrões de times, sendo:

![Quatro tipos de times](https://res.cloudinary.com/mahenrique94/image/upload/v1634777614/1_xf2nvulofyL0_08lDQXxjw_nyh7gi.jpg)

- **Stream-Aligned Team**: Esses times serão alinhados à algum fluxo de negócio, compostos por uma mistura de pessoas com habilidades cross funcionais, formando o que chamamos de times [multi funcionais](https://blog.matheuscastiglioni.com.br/inverse-conway-maneuver/). As vezes esse tipo de time também é chamado de: Time de _features_, times de negócio ou times de domínio.

    Por exemplo: Time que cuida da listagem de produtos, time que cuida do carrinho de compra, time que cuida da página de autenticação ou criação de conta, etc...
- **Platform Team**: Um time que trabalha para ajudar os times _stream-aligned_ em suas entregas. Esse time visa simplificar tecnologias complexas e diminuir a carga cognita dos times _stream-aligned_.

    Por exemplo: Time que cuida de sistemas internas, time que cuida de um projeto para criar sistemas, time que cuida do _design system_, etc...
- **Enabling Team**: Um time que ajuda outros times em adotar e modificar partes do sistema durante alguma transição ou período de aprendizado.

    Por exemplo: Ajudar o time adotar práticas de desenvolvimento ágeis ou devops, ajudar o time adotar o conceito de DDD (_Domain Driven Design_), etc...
- **Complicated-Subsystem Team**: Time que desenvolve com uma parte do produto muito complexa que os times _stream-aligned_ ou _platform_ não conseguem lidar. Normalmente é composto por pessoas mais experiêntes e possuí um alto nível de criticidade.

    Por exemplo: Time que cuida do sistema que faz leitura de PDF's, time que cuida da codificação dos vídeos, time que cuida da ferramente de empacotamento dos sitemas, etc...

Times podem mudar seus tipos dado alguma necessidade em qualquer momento onde faça sentido.

## Os três tipos de interação

O mesmo livro também criou e definidu três tipos de comunicação para os times, sendo:

![Os três tipos de comunicação dos times](https://res.cloudinary.com/mahenrique94/image/upload/v1634777629/duckconf-team-topologies-rva-en-11_r9yqi9.png)

- **Collaboration**: Times que trabalham bem próximos um dos outros.

    Por exemplo: O time que cuida da parte de pagamento com o time que cuida da validação de possíveis fraudes.
- **X-as-a-Service**: Times consumindo ou provendo algo com o mínimo de colaboração.

    Por exemplo: O time que cuida do carrinho de compra consumindo dados dos produtos (resposabilidade de outro time).
- **Facilitating**: Ajudando (ou sendo ajudado) por outro time para limpar impedimentos.

    Por exemplo: O time que cuida do _design system_ ajudando outro time implementar tais componentes.


Na prática diferentes tipos de interação pode ser necessárias dado diferentes momentos no tempo e contextos.

## Conclusão

Nesse *post* vimos quatro diferentes tipos de times e três tipos de interação entre eles, todos seguindo as recomendações e princípios do "_Team Topologies_".

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
