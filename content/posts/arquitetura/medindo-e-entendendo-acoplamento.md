---
autor: "Matheus Castiglioni"
categoria: "Arquitetura"
disqus_identifier: "medindo-e-entendendo-acoplamento"
disqus_title: "Medindo e Entendendo Acoplamento"
disqus_url: "https://blog.matheuscastiglioni.com.br/medindo-e-entendendo-acoplamento"
date: 2021-07-28T07:46:03-03:00
draft: false
keywords: ["métricas", "cálculo", "medida", "acoplamento"]
slug: "medindo-acoplamento"
tag: ["métricas", "cálculo", "medida", "acoplamento"]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1627473114/835_programmer_jmg4j8.jpg"
title: "Medindo e Entendendo Acoplamento"
url: "/medindo-e-entendendo-acoplamento"
---

Algo muito falado quando estamos construindo um sistema é o tal de "**acoplamento**", mas afinal, o que isso significa e como podemos medí-lo? Acoplamento é a medida do nível de interdependência entre os módulos, ou seja, são as dependências entre os códigos.

Existem alguns tipos de acoplamento:

- **Acoplamento de informação (_Data Coupling_)**: As partes são independentes umas as outras e se comunicão através de informações.
- **Acoplamento de carimbo (_Stamp Coupling_)**: Estruturas de informações são passadas de uma parte à outra.
- **Acoplamento de controle (_Control Coupling_)**: As partes que se comunicam passam informações de controles, ou seja, parâmetros que indicam comportamentos completamente diferentes.
- **Acoplamento externo (_External Coupling_)**: Quando partes dependem de outras partes.
- **Acoplamento comum (_Common Coupling_)**: Quando partes dependem de informações ou estruturas globais.
- **Acoplamento de conteúdo (_Content Coupling_)**: Uma parte pode modificar a informação de outra parte ou o fluxo de controle é passado entre partes.

Todos esses tipos de acoplamentos possuem seus _trade-off_, ou seja, às vezes vamos ter mais de um tipo e menos de outro (dependendo da situação e contexto).

Além dos tipos de acoplamento também existem duas categorias de acoplamento:

- **Acoplamento apropriado (_Appropriate Coupling_)**: Você sabe que existe, está tudo bem existir e/ou deveria existir.
- **Acoplamento não apropriado (_Unappropriate Coupling_)**: Você não sabe que existe ou se sabe não deveria existir.

### Medindo acoplamento

Uma das formas de medir o acoplamento é através do Acoplamento Aferente (_Afferent Coupling_) e Acoplamento Eferente (_Efferent Coupling_) ou _Incoming Coupling_ ou _Outgoing Coupling_.

- **Acoplamento Aferente**: Mede o número de conexões de entrada aos códigos, exemplo: Componentes, Classes, Funções, etc...
- **Acoplamento Eferente**: Mede o número de conexões que sai dos códigos.

#### Medindo abstrações

Abstrações é a proporção de artefatos abstratos para artefatos concetros, ela representa uma medida entra abstrações e implementações.

A equação que define tal métrica pode ser representada da seguinte forma:

![Representação da equação de abstração](https://res.cloudinary.com/mahenrique94/image/upload/v1627474921/CodeCogsEqn_fy1xyb.gif)

Nessa equação `ma` representa elementos abstratos (_interfaces_ ou classes abstratas) com o módulo e `mc` representa elementos concretos (classes não abstratas).

Exemplo: Imagine uma aplicação com 5.000 linhas de código, todas em uma única função `main`, o numerador de abstração é `1` enquanto o denominador é `5000`.

#### Medindo instabilidade

Instabilidade é uma métrica derivada, definida como a proporção de acoplamento eferente à soma de ambos (aferente e eferente). Ela determina a volatilidade da base de código, uma base de código que possuí um alto nível de instabilidade quebra mais facilmente quando mudada por causa do alto acoplamento.

A equação que define tal métrica pode ser representada da seguinte forma:

![Representação da equação de instabilidade](https://res.cloudinary.com/mahenrique94/image/upload/v1627475360/CodeCogsEqn_2_oigdta.gif)

Na equação `ce` representa acoplamento (_coupling_) eferente (_efferent_) (ou que sai (_outgoing_)) e `ca` representa acoplamento (_coupling_) aferente (_afferent_) (ou que entra (_incoming_)).

#### Distância da sequência principal

A métrica de distância imagina um realcionamento ideal entre abstrações e instabilidades.

A equação que define tal métrica pode ser representada da seguinte forma:

![Representação da equação de distância](https://res.cloudinary.com/mahenrique94/image/upload/v1627475688/CodeCogsEqn_3_t7y7op.gif)

Nessa equação `A` representa o resultado da equação de abstrações e `I` representa o resultado da equação de instabilidade.

Ambos abstrações e instabilidade são frações do qual o resultado irá sempre ficar entre 0 e 1. Então quando formamos um gráfico podemos ver:

![Representação do gráfico de distância](https://learning.oreilly.com/library/view/fundamentals-of-software/9781492043447/assets/fosa_0302.png)

Ao aplicar tais métricas para uma classe particular, isso nos permite calcular a distância da classe da sequência principal:

![Calculando sequência principal para uma classe](https://learning.oreilly.com/library/view/fundamentals-of-software/9781492043447/assets/fosa_0303.png)

Olhando para a linha, conseguimos extrais mais informações, por exemplo:

- Classes mais próximas da linha são melhor equilibradas.
- Classes que sobem muito entram na zona de inutilidade (_zone of uselessness_).
- Classes que caem muito entram na zona de dor (_zone of pain_).

![Zone de inutilidade com zona de dor](https://learning.oreilly.com/library/view/fundamentals-of-software/9781492043447/assets/fosa_0304.png)

Onde:

- **Zone de inutilidade**: Código que é muito abstrato se torna dificil de usar.
- **Zone de dor**: Código com muita implementação e não tem abstrações o suficiente se torna frágil e dificil de manter.

## Conclusão

Nesse *post* vimos e entendemos um pouco sobre acoplamentos (tipos e categorias) e sobre algumas métricas que podemos tirar referente à tal aspecto de arquitetura dos nossos sistemas.

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
