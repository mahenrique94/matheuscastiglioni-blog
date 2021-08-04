---
autor: "Matheus Castiglioni"
categoria: "Arquitetura"
disqus_identifier: "arquitetura-vs-design-software"
disqus_title: "Arquitetura vs Design de Software"
disqus_url: "https://blog.matheuscastiglioni.com.br/arquitetura-vs-design-software"
date: 2021-08-04T19:42:22-03:00
draft: false
keywords: ["design", "implementaaação", "planejamento"]
slug: "arquitetura-vs-design-software"
tag: ["design", "implementaaação", "planejamento"]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1628117172/cloud-storage-banner-background_1_kve920.jpg"
title: "Arquitetura vs Design de Software"
url: "/arquitetura-vs-design-software"
---

Arquitetura e _design_ de _software_ são as mesmas coisas? A diferença geralmente é um pouco confusa, mas, não são as mesmas coisas e sim existem diferenças entre elas, logo:

- Onde a arquitetura termina e o _design_ começa?
- Quais responsabilidades uma pessoa arquiteta tem versos uma pessoa desenvolvedora?

Vamos olhar a imagem à seguir:

![Arquitetura versos design tradicional](https://res.cloudinary.com/mahenrique94/image/upload/v1628117697/fosa_0201_zhgvxq.png)

Como podemos ver na imagem, ela ilustra algumas responsabilidades da pessoa arquiteta e pessoa desenvolvedora, sendo:

Pessoa arquiteta:
- Análisar requisítos de negócio para extrair e definir as características arquiteturais.
- Selecionar quais padrões e estilos arquiteturais se encaixam para resolver o problema.
- Criar a estrutura de componentes (blocos de construção do sistema).

Pessoa desenvolvedora:
- Criar diagrama de classes.
- Criar as _UI's_ (_interfaces_ dos usuário(a)s).
- Desenvolver e testar o código fonte.

Mas, esse é um modelo tradicional, cujo qual possuí vários problemas e não se aplica nos dias de hoje.

O principal problema é separar a pessoa arquiteta da pessoa desenvolvedora que causa todos os problemas relacionados com arquitetura, ou seja, decisões que a pessoa arquiteta toma nunca chegam ao time e as decisões dos times nuncam voltam as pessoas arquitetas.

Essas barreiras físicas e lógicas de separação devem ser quebradas.

![Arquitetura versus design atual](https://res.cloudinary.com/mahenrique94/image/upload/v1628117656/fosa_0202_wieclj.png)

Esse modelo acima não apenas possibilita forte comunicação de ambos os lados, mas, também a pessoa arquitetoa provê mentoria e treinamento para os times.

A arquitetura dos sistemas de hoje mudam e evoluem à cada iteração ou fases de um _software_.

A forte colaboração entre a pessoa arquiteta e o time de desenvolvimeento é essencial para o sucesso de qualquer _software_. Então respondendo a pergunta:

> Onde a arquitetura termina e o _design_ começa?

A arquitetura não termina e o _design_ não começa, elas ambas são partes dos ciclos de vida dentro de um _software_ e devem sempre ser mantidas em sincronizaação para o sucesso do mesmo.

## Conclusão

Nesse *post* vimos as diferenças entre arquitetura e _design_ de _software_, analisamos os modelos tradicionais e quais problemas existiam, também vimos uma ideia para aplicar à atualidade.

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

## Referências
- [Livro: Fundamentals of Software Architecture: An Engineering](https://www.amazon.com.br/Fundamentals-Software-Architecture-Neal-Ford/dp/1492043451)
