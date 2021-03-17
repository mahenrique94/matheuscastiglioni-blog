---
autor: "Matheus Castiglioni"
categoria: "Arquitetura"
disqus_identifier: "lei-de-conway"
disqus_title: "Lei De Conway"
disqus_url: "https://blog.matheuscastiglioni.com.br/lei-de-conway"
date: 2021-03-10T19:51:16-03:00
draft: false
keywords: ["estrutura", "organização", "software", "times"]
slug: "lei-de-conway"
tag: ["estrutura", "organização", "software", "times"]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1615935683/asian-businessmen-businesswomen-meeting-brainstorming-ideas-about-creative-web-design-planning-application-developing-template-layout-mobile-phone-project-working-together-small-office_gyvf29.jpg"
title: "Lei De Conway"
url: "/lei-de-conway"
---

Construir _softwares_ é algo que já fazemos há muito tempo e é algo ainda dificil e complexo de ser feito. Isso porque variaveis e contextos sempre mudam, assim como uma solução para o desenvolvimento de um aplicativo pode não dar certo para o desenvolvimento de um site ou a arquitetura para uma empresa de vinte anos pode não dar certo para uma empresa de seis meses.

Dessa forma por mais que a construção e desenvolvimento de _softwares_ sejam assuntos relacionados à tecnologia, eles não são exatos e nenhum pouco binário, muito pelo contrário, são temas em constante mudança, evolução e aprendizados.

Um dos problemas que em algum momento vamos nos deparar é como estruturar nossos times de tecnologia e como isso vai afetar a arquitetura do nosso sistema ou produto em construção.

## A lei de Conway

Em 1967, Mevin Conway declarou uma frase no final dessa publicação [http://www.melconway.com/Home/Committees_Paper.html](http://www.melconway.com/Home/Committees_Paper.html) que logo depois também foi citada por Fred Brooks no livro dele sobre [The Mythical Man Month](https://en.wikipedia.org/wiki/The_Mythical_Man-Month) onde foi apelidada de "**Conway's law**".

A frase tão impactante foi a seguinte:

> Organizações que projetam sistemas são obrigadas a produzir projetos que são cópias das estruturas de comunicação dessas organizações

Por exemplo: Imagine que você precise criar um novo compilador, se durante o desenvolvimento desse novo compilador haver quatro grupos de pessoas trabalhando no mesmo, então, no final você irá obter um compilador de quatro passos.

Dessa forma podemos definir a lei de Conway:

> A lei de Conway é um ditado que afirma que as organizações projetam sistemas que refletem sua própria estrutura de comunicação

### Estrutura organizacional refletida em sistemas

Bem, se há um departamento de faturas, então haverá um sistema de faturas. Da mesma forma que se há um departamento financeiro, então também haverá um sistema financeiro.

Esses sistemas irão se integrar de uma forma que seja o espelho de como esses departamentos se comunicam, ou seja, a arquitetura desses sistemas irão refletir a estrutura de comunicação dos times que fazem parte do processo.

Então como resultado se o departamento de tecnologia é dividido em silos de capacidades técnicas, ou seja, um grupo focado na _interface_ do usuário, outro focado no banco de dados, outro focado na infraestrutura e um último focado na API. Dessa forma a arquitetura final do sistema será muito próxima à esse estilo de comunicação:

![Exemplo de organização em silos](https://res.cloudinary.com/mahenrique94/image/upload/v1615938641/Untitled_Diagram_cjmzhe.png)

E qual o problema disso?

### O problema de silos

Um dos problemas quando temos silos agrupados em capacidades técnicas é que sistemas são dinâmicos, sempre haverão mudanças e essas mudanças são conduzidas por N razões. Dessa forma quando houver alguma necessidade de mudança, vai ser necessário trabalho, orçamento e tempo de todos os grupos envolvidos.

No próximo artigo iremos dar uma olhada em como podemos tentar resolver esse problema, ganhando eficiência, performance, tempo e orçamento quando mudanças precisam ocorrer, além de simplificar a necessidade de comunicação e sincronização do trabalho à ser feito.

## Conclusão

Nesse *post* vimos que existe uma tendencia em projetar arquiteturas de sistemas cuja a integração final será muito próxima da forma como é a estrutura de comunicação da empresa.

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
