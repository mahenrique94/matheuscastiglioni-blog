---
autor: "Matheus Castiglioni"
categoria: "Arquitetura"
disqus_identifier: "service-templates"
disqus_title: "Service Templates"
disqus_url: "https://blog.matheuscastiglioni.com.br/service-templates"
date: 2021-12-15T20:21:25-03:00
draft: false
keywords: ["base", "condfigurações", "scaffolding", "template"]
slug: "service-templates"
tag: ["base", "condfigurações", "scaffolding", "template"]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1639610747/pointing-sketch_1_l9x5wo.jpg"
title: "Service Templates"
url: "/service-templates"
---

Quantas vezes você já se pegou criando algo que não é novo? Indo além, quando criando novos projetos e buscando a estrutura e configurações de um projeto já existente como base (o velho CTRL+C e CTRL+V kkkk). Pois é, você não é o(a) unico(a) e justamente pensando nisso que vem a ideia de criar um _template_ de serviço.

O nome _service template_ é muito específico para o contexto de serviços e consequentemente para o _back-end_, portanto, podemos ter um _service template_ criando serviços para o _back-end_ ou um _application template_ (eu gosto de aplicações, mas, também poderiamos separar entre _web_ e aplicativo de fato) criando aplicações para o _front-end_.

A ideia principal é que você tenha um _template_ base com um conjunto de tecnologias, bibliotecas e _frameworks_ já pré configurados. Dessa forma, conseguimos garantir que todos os projetos irão atender aos requisítos minimos, exemplos:

- _Service discovery_ (Descoberta de serviço)
- _Tracing_
- _Logging_
- Monitoramento
- Autenticação e Autorização
- Comunicação remota
- Catálogo de componentes
- Rastreamento de erros
- Telemetria
- _Pipeline_
- Análise estática de códigos
- ...

Repare que o _template_ de serviço ou aplicação conhecem apenas detalhes de infraestrutura. O _template_ possuí [acoplamentos apropriados](https://blog.matheuscastiglioni.com.br/medindo-e-entendendo-acoplamento/) e sabemos disso, não tem nenhum problema. Isso porque não estamos focando na arquitetura técnica como: A estrutura e camadas do _template_ (isso poderia mudar frequentemente tornando a manutenção do mesmo complexa) e sim em aspectos que realmente são essenciais do ponto de vista de requisitos (que quando precisarem mudar, não irão causar tantos impactos para quem os utilizam).

> Use o _template_ de serviço ou aplicação apenas para acoplar as partes de arquitetura apropriadas juntas, elementos de infraestrutura que permitem os times se beneficiarem de tal acoplamento.

Se você fez um bom uso do acoplamento apropriado ao trocar a tecnologia de _tracing_ ou _logging_ por exemplo, nenhum serviço iria quebrar após tal mudança.

## Implementação

Mas, como implementar tal _template_? Isso pode ser feito de N formas diferentes, sendo algumas:

1. Através de _templates_ do GitHub (ou outro gerenciador de repositórios)
2. Através de um repositório como base e utilizando uma ferramenta de _scaffolding_, por exemplo: [Degit](https://github.com/Rich-Harris/degit#readme)
3. Criar uma CLI customizada que irá conter a regra de negócio para criar novos serviços ou aplicações.
   1. Aqui seria muito bom que o CLI fosse apenas uma _interface_ se comunicando com um serviço externo onde o mesmo engloba as regras.
4. Utilizar geradores de projetos como [Hygen](https://github.com/jondot/hygen), [Plop](https://github.com/plopjs/plop) ou [Yeoman](https://yeoman.io/)
5. Criar um produto que irá gerar os projetos, similar ao [Spring initializr](https://start.spring.io/)
6. ...

As possibilidades são inúmeras, cabe a você decidir uma que faça sentido para seu contexto.

## Conclusão

Nesse *post* descobrimos e entendemos o que é um _service template_ ou _application template_. Também vimos quando, porque e como utilizá-los.

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
