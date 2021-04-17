---
autor: "Matheus Castiglioni"
categoria: "Arquitetura"
disqus_identifier: "sacrificial-architecture"
disqus_title: "Sacrificial Architecture"
disqus_url: "https://blog.matheuscastiglioni.com.br/sacrificial-architecture"
date: 2021-04-17T15:41:42-03:00
draft: false
keywords: ["POC", "Prova de Conceito", "Validação"]
slug: "sacrificial-architecture"
tag: ["POC", "Prova de Conceito", "Validação"]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1618685187/4484_1_g4ishp.jpg"
title: "Sacrificial Architecture"
url: "/sacrificial-architecture"
---

Muitas vezes vão haver situações onde a melhor decisão é jogar toda arquitetura e base de código fora para começar reescrever uma nova do zero, porém, em situações e cenários assim é muito comum pessoas se sentirem mal do ponto de vista onde o código que elas escreveram será "condenado" e para várias pessoas jogar código fora é sinal de falha.

Mas, as vezes o melhor código que podemos escrever agora é o código que iremos jogar fora em poucos anos, isso porque nós estamos acostumados a pensar nos códigos como sistemas de longa vidas.

Mas porque iriamos escrever um sistema já pensando em jogá-lo fora daqui um tempo? Possíveis pontos de reflexão para tal pergunta:

- **Validação de negócio**: Quando é algo novo, uma proposta e hipótese que precisa ser testada para verificar se atende o negócio. Em cenários assim não faz muito sentido a gente se preocupar com caprichos e preciosismos técnicos, pois, podemos gastar muito tempo que iria gerar muito esforço e custar muito dinheiro para no final descobrir que a ideia não faz sentido para o mercado.
- **_Go to market_**: Em dias de hoje quem lança primeiro uma nova solução ou ideia tem muita vantagem (até chegar à ser copiada e melhorada), então, com um tempo baixo para ir ao mercado e ser a primeiro empresa que resolva tal problema não podemos também ficar focados em requisitos e detalhes técnicos.
- **Custo muito alto para mudanças**: O sistema pode atingir um ponto onde mudanças são muito caras para serem realizadas, isso porque o _design_ cresceu e evoluiu muito deixando o código não muito bom para mudanças e manutenções.
- **Evolução temporal**: Uma arquitetura pensada e criada em 2000 pode não atender mais as necessidades atuais com um alto crescimento e evolução tecnologia (afetando qualidades como escalabilidade e performance, além de outras N características), isso porque sistemas estão ficando cada vez mais complexos.
- **Acompanhamento tecnológico**: Acompanhar o mundo de tecnologia é algo muito complicado, tendencias vão e vem à todo momento em toda hora.

Na Google por exemplo eles utilizam uma metodologia onde sistemas são desenhados para atender 10x as necessidades atuais, caso o sistema atinga uma magnitude maior do que isso é geralmente melhor jogá-lo fora e recomeçar do zero.

## Sacrificial Architecture

Mas, o que significa de fato **Sacrificial Architecture**? Quer dizer que precisamos essencialmente aceitar agora que em poucos anos nós iremos provavelmente precisar jogar fora o que está sendo atualmente construído. Dessa forma precisamos pensar agora (hoje) como as coisas podem ser trocadas quando esse momento chegar sem que exija muito esforço e problemas.

Mas, não significa que vamos abandonar a qualidade do sistema, caso façamos isso pode ser que nem chegue o momento da troca e a má qualidade cause maiores e outros problemas.

Também podemos aplicar os princípios da _sacrificial architecture_ para funcionalidades, ou seja, se você está construindo uma nova funcionalidade torne-a disponível apenas para um conjunto de clientes, então você pode colher os _feedbacks_ se ela é uma boa ideia ou não.

Um ponto importante é que o time responsável pela construção da _sacrificial architecture_ é quem decide o momento para jogá-la fora.

## Conclusão

Nesse *post* vimos o que de fato quer dizer _sacrificial architecture_, quando precisamos utilizá-la e porque.

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
