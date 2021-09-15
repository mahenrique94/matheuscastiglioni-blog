---
autor: "Matheus Castiglioni"
categoria: "Arquitetura"
disqus_identifier: "eda"
disqus_title: "Arquitetura Orientada à Eventos"
disqus_url: "https://blog.matheuscastiglioni.com.br/eda-broker"
date: 2021-09-15T19:40:28-03:00
draft: false
keywords: ["broker", "eda", "event driven", "eventos", "mediator"]
slug: "eda"
tag: ["broker", "eda", "event driven", "eventos", "mediator"]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1631745886/3612880_1_wookde.jpg"
title: "Arquitetura Orientada à Eventos"
url: "/eda"
---

Um famoso estilo de arquitetura é chamado EDA (_Event driven architecture_, Arquitetura orientada à eventos), esse é um popular estilo de arquitetura assíncrono e distribuído, usado para produzir aplicações altamente escaláveis e de alta performance. Também é um estilo bastante adaptável e extensível. Além de ser uma arquitetura desacoplada, ou seja, os elementos publicam e processam eventos sem saber detalhes de quem os ouvem ou quem os publicam.

Dentro dessa arquitetura existem duas topologias principais:
- _Broker_
- _Mediator_

## Broker
A topologia _broker_ é utilizada quando precisamos de um alto nível de capacidade de resposta e controle dinâmico sobre o processamento dos eventos. Ou seja, não há um elemento central orquestrando ou coordenando o fluxo de trabalho dos eventos.

Geralmente essa topologia é recomendada quando o fluxo de processamento é simples.

Nessa topologia existem quatro componentes principais, sendo:

- O evento inicial (_initiating event_): O evento inicial é quem inicia o fluxo inteiro do evento.
- O _broker_ (_event broker_): Cada evento inicial é enviado para um canal de eventos (_event channel_) no _broker_ para processamento.
- O processador de evento (_event processor_): O processador de evento aceita o evento inicial do _broker_ e começa o processamento do mesmo. O processador que aceitou o evento inicial performa uma tarefa específica associada com esse evento e assícronamente informa o que ele fez para o resto do sistema criando um evento de processamento (isso é sempre uma boa prática recomendada à ser feita).
- O evento de processamento (_processing event_): São eventos que informam a conclusão de uma tarefa específica processada por um processador de evento através de um evento inicial.

![Topologia de broker](https://res.cloudinary.com/mahenrique94/image/upload/v1631746739/fosa_1402_f3ehkx.png)

### Vantagens
- Processadores de evento altamente desacoplados
- Altamente escalável
- Alta capacidade de resposta
- Alta performance
- Alta tolerância à falhas

### Desvantagens
- Controle sobre os fluxos de trabalho
- Lidar com erros
- Recuperabilidade
- Reiniciar as capacidades
- Inconsistência de informações

## Mediator
A topologia _mediator_ é comumente utilizada quando precisamos de um controle sobre o fluxo de trabalho dos eventos. Ou seja, existe um controlador central realizando a orquestração e coordenação sobre o processamento dos eventos.

Geralmente essa topologia é recomenada quando o fluxo de processamento possuí uma complexidade maior.

Essa topologia aborda algumas das deficiências e desvantagens da topologia _broker_.

Nessa topologia existem cinco componentes principais, sendo:

- O evento inicial (_initiating event_): Funciona da mesma forma descrita na topologia _broker_.
- Uma fila (_event queue_): Diferente da topologia _broker_ o evento inicial é enviado para uma fila.
- Um mediador (_event mediator_): O mediador sabe os passos envolvidos e necessários para os fluxos de trabalho dos eventos, portanto, ele que gera os correspondentes eventos de processamento à serem enviados aos canais.
- Canais de eventos (_event channels_): Canais (geralmente filas), formam trocas de mensagens de ponta à ponta.
- Processadores de evento (_event processors_): Funciona da mesma forma descrita na topologia _broker_ com uma única diferença que no final após performar a tarefa necessário não é disparada um evento de processamento informando o resto do sistema.

![Topologia de mediator](https://res.cloudinary.com/mahenrique94/image/upload/v1631747309/fosa_1405_twqkox.png)

### Vantagens
- Controle sobre os fluxos de trabalho
- Lidar com erros
- Recuperabilidade
- Reiniciar as capacidades
- Melhor consistência de informações

## Desvantagens
- Processadores de evento mais acoplados
- Baixa escalabilidade
- Baixa performance
- Baixa tolerância à falhas
- Fluxos de trabalho complexos

## Conclusão
Nesse *post* vimos uma introdução ao estilo de arquitetura orientado à eventos e suas duas principais topoogias para gerencimento, orquestração e coordenação dos eventos (_broker_ e _mediator_).

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
- [Fundamentals of Software Architecture](https://www.amazon.com.br/Fundamentals-Software-Architecture-Neal-Ford/dp/1492043451)
