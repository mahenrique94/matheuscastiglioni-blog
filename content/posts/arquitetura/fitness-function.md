---
autor: "Matheus Castiglioni"
categoria: "Arquitetura"
disqus_identifier: "fitness-function"
disqus_title: "Fitness Function"
disqus_url: "https://blog.matheuscastiglioni.com.br/fitness-function"
date: 2021-05-31T21:37:06-03:00
draft: false
keywords: ["Características", "Qualidade", "Requisitos", "Saúde"]
slug: "fitness-function"
tag: ["Características", "Qualidade", "Requisitos", "Saúde"]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1622508202/1904.i402.013..Web_development_isometric_concept_composition_1_xh6tuj.jpg"
title: "Fitness Function"
url: "/fitness-function"
---

Diariamente estamos evoluíndo nossos sistemas (mudanças incrementais) e projetos, seja em termos de arquitetura, _design_ de código, funcionalidades, refatorações, reestruturações, resoluções de _bugs_, etc... Mas, o que tudo isso tem em comum? Independente da evolução feita, a gente precisa garantir que a qualidade e saúde da arquitetura ainda seja a mesma ou pelo menos saudável.

Mas, o que seria saudável? Como a gente pode medir isso? O que a gente mediria para ter tal informação? A gente pode medir os atributos de qualidade (dimensão da arquitetura) do sistema, por exemplo: Um cenário onde precisamos ter alta disponibilidade, um critério de validação poderia ser o tempo de resposta de uma página _web_, um _endpoint_ na API, uma consulta no banco, etc...

## O que é?

Uma _fitness function_ no contexto de algoritmos vem da ideia de tentar validar se um determinado algoritmo atende algum critério de validação.

No contexto da arquitetura de _software_ podemos utilizá-la para uma motivação semelhante, ou seja, nossas _fitness functions_ serão responsáveis de validar algum atributo de qualidade do sistema (no exemplo anterior ela iria validar os tempos de respostas) através de algum critério.

A ideia é que cada _fitness function_ represente um requisito da arquitetura, dessa forma, elas irão ajudar guiando a evolução do sistema (determinando os impactos das mudanças incrementais).

Mas, nem sempre vai ser possível implementá-las, por causa de complexidade ou restrições.

Na maioria das vezes crie _fitness functions_ que podem ser validadas de forma automatizada (seja com testes, _scripts_ ou outra maneira automática), porém, a realidade é diferente da teoria e em alguns cenários elas precisarão ser validadas e executadas de forma manual (o que não tem problema nenhum).

## Tipos

Existem diferentes tipos de _fitness functions_, sendo:

- `Atômica`: Rodam constra um único contexto e exercita um particular aspecto da arquitetura (por exemplo: acoplamento modular).
- `Holística`: Rodam constra um contexto compartilhado e exercita uma combinação de aspectos da arquitetura (por exemplo: segurança e escalabilidade).
- `Disparada`: Rodam baseada em um evento particular (por exemplo: testes de unidade, uma _pipeline_, uma pessoa de QA performando testes exploratórios, etc...).
- `Contínua`: Não rodam de maneira agendada, mas, ao invés, constantemente estão validando aspectos arquiteturais (por exemplo: velocidade de transação do  banco de dados)
- `Estática`: Possuem um resultado fixo, um valor predefinido desejável (por exemplo: complexidade ciclomática de médodos na base de código)
- `Dinâmica`: Mudam a definição baseada em um contexto extra, valores podem diferenciar sobre diferente circustâncias (por exemplo: uma empresa escalando pode significar que menos performance é permitida, mas, apenas dentro de um período)
- `Automática`: Rodam de forma automática, ou seja, sem a necessidade de intervenção ou gatilhos manuais feitos por humanos (por exemplo: na _pipeline_ através de testes)
- `Manual`: Rodam de forma manual, uma intervenção humana é necessária para tal execução (por exemplo: aplicações com certificação manual por razões legais)
- `Temporária`: São construídas por um período temporário, até tal problema ser resolvido (por exemplo: um lembrete para verificar se atualizações importantes foram publicadas para alguma dependência crítica)
- `Intencional`: São criadas da forma intencional, ou seja, sabemos/planejamos/pensamos em criá-las
- `Emergente`: Identificadas conforme a evolução do sistema (o clássico desconhecido)
- `Específica de domínio`: Focam em testar uma parte específico do domínio (por exemplo: uma aplicação bancária pode ter testes de segurança)

### Categorias

Além dos tipos também existem categorias, sendo:

- `Chave`: Essas dimensões são críticas para fazer escolhas de tecnologia ou design do sistema.
- `Relevante`: Essas dimensões precisam ser consideradas no nível de funcionalidades, pouco provável que guiem escolhas arquiteturais.
- `Não relevante`: Escolhas de tecnologia e _design_ do sistema não são impactadas por esses tipos de dimensões.

## Conclusão

Nesse *post* vimos o que são _fitness functions_, para que elas servem, quais tipos e categorias existem, porque e como devemos utilizá-las.

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
