---
autor: "Matheus Castiglioni"
categoria: "Arquitetura"
disqus_identifier: "correlational-id"
disqus_title: "Identificador correlacional"
disqus_url: "https://blog.matheuscastiglioni.com.br/correlational-id"
date: 2021-05-26T08:11:59-03:00
draft: false
keywords: ["logs", "microsserviços", "monitoramento", "observabilidade", "rastreabilidade"]
slug: "correlational-id"
tag: ["logs", "microsserviços", "monitoramento", "observabilidade", "rastreabilidade"]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1622029348/981_1_p8t63b.jpg"
title: "Identificador correlacional"
url: "/correlational-id"
---

Imagine que você venda coisas para seus clientes onlines, frequentemente você será questionado por:

> Onde estão minhas coisas?

Ou seja, clientes irão nos contatar para saber mais e investigar uma ordem de compra específica.

De forma geral, a maioria dos sistemas possuem tarefas de alto nível que controlam esse tipo de situação, ou seja, uma tarefa processa tudo que é necessário. Mas, com as evoluções tecnologicas e a adoção de sistemas distribuídos utilizando arquiteturas microsserviços, essas tarefas de alto nivel acabam se espalhando em uma cadeia de execução (_workflow_) e nesse _workflow_ podemos ter N serviços envolvidos em tal operação.

O problema pode ser ainda maior: Cada serviço pode estar em servidores diferentes, localizações diferentes ou ser particionado em multíplas regiões.

Dessa forma como podemos ter bons mecanismos de rastreabilidade, observabilidade, logs e monitoramento? Uma vez que uma requisição atinge e alcance N serviços espalhados na rede de forma distribuída.

## Agrupando mensagens de log pelo identificador correlacional

Uma solução seria a gente dar um identificar único para as requisições que estão chegando em nossos ponto de entrada e incluir tal _id_ em todas as mensagens de _logs_, requisições de rede, chamadas entre microsserviços e demais participantes que estão envolvidos no _workflow_ visto anteriormente.

Esse identificador único é conhecido como _correlational id_.

### Criando o identificador correlacional

A criação do identificador correlacional (_correlational id_) deve ser feita para cada requisição ou mensagem de entrada em todo serviço com uma _interface_ de comunicação externa (pública).

- Em uma aplicação _web_ isso seria feito no _controller_ (controlador), pois, ele é o primeiro a lidar com requisições HTTP.
- Ou em sistemas _middleware_ que pode ser um serviço consumindo mensagens de uma fila ou monitorando um diretório no sistema de arquivos.

### Transportando o identificador correlacional

Uma vez que você tem criado o identificador, use ele em todo lugar, ou seja, eles devem ser transportados entre serviços. Isso pode ser feito utilizando um cabeçalho (_header_) chamado `X-Correlation-Id` com o valor do mesmo.

Caso você não esteja utilizando transporte via HTTP, você provavelmente deve ter um jeito equivalente de adicionar essa metainformação para suas mensagens (geralmente algum tipo de propriedade), se você está gerando arquivos, pode adicionar tal identificador no nome dos mesmos.

### Tipos de identificadores

Existe uma diversa granularidade de identificadores à serem utilizados em tal proposta, sendo alguns deles:

- `UUID (Universally Inique Identifier) (a.k.a. GUID (Globally Unique Identifier))`: `123e4567-e89b-12d3-a456-426655440000` (gerado de forma randômica e aleatória)
- `Business ID`: `15926535` (utilizando um identificador único de negócio (número do pedido por exemplo))
- `Human-readable mixed IDs`: `1234/Oldwood/192.168.1.1` (combinando o identificador único de negócio com o sobrenome da pessoa e IP de rede)
- `Base-62 encoded numbers`: `7M85y0N8lZa` (similar ao UUID, porém, consume menos espaço e _bytes_ (atenção para evitar colisões, ou seja, duplicidade de identificadores))
- `CUID (Collision Resistant IDs)`: `ch72gsb320000udocl363eofy` (resolve alguns problemas de colisão do UUID e prove uma escala horizontal e buscas binárias otimizadas)

## Conclusão

Nesse *post* vimos com adicionar rastreabilidade, observabilidade, métricas e bons monitoramentos para operações de negócio em sistemas distribuídos.

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
