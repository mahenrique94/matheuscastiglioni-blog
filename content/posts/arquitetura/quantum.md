---
autor: "Matheus Castiglioni"
categoria: "Arquitetura"
disqus_identifier: "quantum"
disqus_title: "Quântico Arquitetural"
disqus_url: "https://blog.matheuscastiglioni.com.br/quantum"
date: 2022-01-27T10:00:00-03:00
draft: false
keywords: ["acoplamento", "contexto", "deploy", "unidades"]
slug: "quantum"
tag: ["acoplamento", "contexto", "deploy", "unidades"]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1642791856/rm373batch15-bg-09_1_onx8a6.jpg"
title: "Quântico Arquitetural"
url: "/quantum"
---

Sistemas são unidos através de uma variedade de formas. Como arquiteto(a)s nós análisamos sistemas usando diferentes perspectivas, um ponto muito preocupante é o tal de [acoplamento](https://blog.matheuscastiglioni.com.br/medindo-e-entendendo-acoplamento/). Normalmente nos preocupamos e focamos em entender o nível de acoplamento referente à componentes, mas, componentes não são as únicas formas de juntar mais de um sistema ou partes diferentes de um sistema.

Vários conceitos de negócio trazem os sistemas juntos, criando uma coesão funcional. Para termos sucesso na evolução dos sistemas, devemos considerar todos os pontos de acoplamentos que poderiam quebrar durante tais evoluções ou mudanças.

## Um pouco de física

Como definido na física, um quântico é a quantidade mínima de qualquer entidade física envolvida em uma interação.

## Analogia na arquitetura

Um quântico arquitetural (_architectural quantum_) é um componente deployavel independentemente com alta coesão funcional, cujo qual incluí todos os elementos estruturais necessários para o funcionamento adequado do sistema. Em uma arquitetura monolítica, o quântico (_quantum_) é a aplicação inteira, tudo é altamente acoplado e ela deve ser deployada em massa como um todo.

Já em uma arquitetura distribuída como microsserviços, cada serviço é um quântico, isso porque microsserviços são baseados em contextos delimitados encapsulando partes que podem mudar, dessa forma, cada serviço é deployado de forma independente e possuí tudo aquilo necessário para seu funcionamento (como componentes dependenentes, por exemplo: banco de dados).

## Tamanho dos quânticos

Nós deveríamos definir o tamanho dos quânticos, isso porque quânticos pequenos proporcionam mudanças mais rápidas por causa do escopo menor em relação aos quânticos maiores. Além disso, o tamanho dos quânticos determinam as possíveis mudanças incrementais, ou seja, quanto maior for seu quântico menos possível será aplicar mudanças de forma progressiva.

## Quebrando quânticos maiores em partes menores

Algumas partes da arquitetura (sejam componentes ou elementos) não podem (ou será muito complexo) ser quebradas ou divididas em partes menores, assim como alguns elementos na física. Sendo assim, precisamos identificar quais partes do sistemas devem ser mantidas juntas, por exemplo: Transações agem como um forte núcleo difícil de quebrar em pedaços menores, mesmo que seja possível realizar tal quebra, a mesma trata-se de um processo muito complexo e geralmente conduz para problemas maiores como transações distribuídas.

## Conclusão

Nesse *post* entendemos um pouco sobra quânticos arquiteturais e porque eles medidas importantes em relação as arquiteturas de sistemas.

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

