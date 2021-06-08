---
autor: "Matheus Castiglioni"
categoria: "Arquitetura"
disqus_identifier: "estruturas-de-comunicacao"
disqus_title: "Estruturas de Comunicação"
disqus_url: "https://blog.matheuscastiglioni.com.br/estruturas-de-comunicacao"
date: 2021-06-07T20:49:00-03:00
draft: false
keywords: ["comunicação", "times", "organização"]
slug: "estruturas-de-comunicacao"
tag: ["comunicação", "times", "organização"]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1623110166/paper-craft-art-speech-bubble-icon_1_nk8pzd.jpg"
title: "Estruturas de Comunicação"
url: "/estruturas-de-comunicacao"
---

Um desafio muito presente nas empresas é como criar uma estrutura que diminua os gargalos de comunicação, ou seja, como todas as pessoas (e times) devem se comunicar uns com os outros para preencher seus objetivos e metas.

Dado as N possibilidades, vamos analisar três estruturas de comunicação e como elas afetam o modo que o negócio opera, sendo:

- Estruturas de comunicação de negócios
- Estruturas de comunicação de implementação
- Estruturas de comunicação de dados

Vamos analisá-las uma por uma em mais detalhes.

## Estruturas de comunicação de negócios

A estrutura de comunicação de negócio dita a comunicação entre times e departamentos, cada um conduzido pelas principais responsabilidades e requisitos atribuídas para eles.

A organização das equipes e o cumprimento de seus objetivos, desde as principais unidades de negócios até o trabalho do colaborador individual, se enquadram nesta estrutura.

Exemplo: Engenharia produz o _software_, Vendas vende para clientes e suporte (também chamado de CH (_Customer Hero_)) garante que dificuldades e dúvidas de clientes são resolvidas.

## Estruturas de comunicação de implementação

A estrutura de comunicação de implementação são os dados e a lógica pertencentes ao modelo de subdomínio, conforme ditado pela organização. Ela formaliza os processos de negócio, estrutura das informações, _design_ dos sistemas.

Exemplo: Banco de dados da aplicação monolita, a lógica do negócio da aplicação comunica internalmente via chamadas de funções ou estado compartilhado. Essa aplicação monolita por vez, é usada para satisfazer os requisitos do negócio (ditada pela estrutura de comunicação de negócio).

## Estruturas de comunicação de dados

A estrutura de comunicação de dados é o processo através do qual os dados são comunicados em toda a empresa e, particularmente, entre implementações.

Embora a estrutura de comunicação de dados compondo email, mensagens instântaneas e reuniões são geralmente usadas para comunicar mudanças no negócio, ela tem sido negligenciada por implementações de _software's_.

Sua função geralmente tem sido cumprida através de _adhoc's_, de sistema para sistema, com a estrutura de comunicação de implementação muitas vezes desempenhando uma função dupla, incluindo funções de comunicação de dados, além de seus próprios requisitos.

Não necessariamente apenas uma estrutura deve ser escolhida, elas podem ser mescladas e utilizadas ao mesmo tempo e podem sofrer alterações e adaptações em determinados momentos.

## Conclusão

Nesse *post* vimos algumas estruturas de comunicações, o ponto onde cada uma atua e exemplos.

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
