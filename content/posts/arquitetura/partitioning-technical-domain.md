---
autor: "Matheus Castiglioni"
categoria: "Arquitetura"
disqus_identifier: "partitioning-technical-domain"
disqus_title: "Particionamento técnico vs domínio"
disqus_url: "https://blog.matheuscastiglioni.com.br/partitioning-technical-domain"
date: 2022-02-03T10:00:00-03:00
draft: false
keywords: ["domínio", "estrutura", "módulos", "particionamento", "projetos", "técnico"]
slug: "partitioning-technical-domain"
tag: ["domínio", "estrutura", "módulos", "particionamento", "projetos", "técnico"]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1643395059/666_1_y87m5y.jpg"
title: "Particionamento técnico vs domínio"
url: "/partitioning-technical-domain"
---

Existe diversas formas da gente estruturar e dividir nossos projetos, ou seja, podemos particionar e separar nossos projetos de N maneiras. Na maioria das vezes (às vezes um _framework_ não deixa) podemos escolher quais pastas e seus nomes, quais arquivos e seus nomes, quais separações, quais módulos, camadas, etc...

Duas maneiras bem comum de atingir tais particionamentos, seriam:

- Particionamento técnico
- Particionamento por domínio

Vamos entender como cada uma é realizada?

## Particionamento técnico

No particionamento técnico a gente destaca e foca nos aspectos das bibliotecas, _frameworks_, linguagens e tecnologias. Nele a gente fortalece e evidencia o lado técnico, por exemplo:

```
nome-do-projeto
  src
    controllers
      algum-arquivo.js
      outro-arquivo.php
      ...
    views
    pages
    reducers
    actions
    sagas
    services
    use-cases
    components
    containers
    constants
    enums
    domain
    application
    ...
```

Repare que nessa estrutura será necessário que você abra várias pastas para mexer e encontrar todos os arquivos daquele contexto que você está atuando. Por exemplo:

```
nome-do-projeto
  src
    reducers
      product.js
    actions
      product.js
    sagas
      product.js
    services
      product.js
    ...
```

Além disso, não fica claro para o sistema quais são as barreiras e limites entre os contextos.

## Particionamento por domínio

Já no particionamento por domínio, a ideia é fortalecer e evidenciar o negócio, transparecendo quais são os contextos e seus limites, por exemplo:

```
nome-do-projeto
  src
    checkout
    anti-fraud
    treasury
    warehouse
    solicitation
    ...
```

E dentro de cada contexto vão existir todos os arquivos e sub diretórios para o funcionamento do mesmo, por exemplo:

```
nome-do-projeto
  src
    anti-fraud
      application
      domain
      infrastructure
      interface
      ...
```

```
nome-do-projeto
  src
    product
      components
      containers
      pages
      reducers.js
      actions.js
      routes.js
      sagas.js
      store.js
      ...
```

Assim por mais que você tenha uma arquitetura monolítica, ela ainda pode escalar e evoluir muito bem, isso porque os contextos e limites estão claros. Nesse caso podemos dizer que essa arquitetura é um monolítico modularizado. Se um dia a gente precisar extrair pedaços dessa arquitetura já está claro o que e como extrair.

## Conclusão

Nesse *post* vimos dois tipos de particionar e estruturar seus projetos, sendo, o particionamento técnico e por domínio. Entendemos como cada um é abordado e análisamos as vantagens e desvantages de cada um.

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
