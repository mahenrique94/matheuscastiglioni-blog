---
autor: "Matheus Castiglioni"
categoria: "Arquitetura"
disqus_identifier: "camada-anti-corrupcao"
disqus_title: "Camada de Anti Corrupção"
disqus_url: "https://blog.matheuscastiglioni.com.br/camada-anti-corrupcao"
date: 2021-06-15T21:38:50-03:00
draft: false
keywords: ["comunicação", "desacoplamento", "isolamento"]
slug: "camada-anti-corrupcao"
tag: ["comunicação", "desacoplamento", "isolamento"]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1623804525/4062589_1_ledpal.jpg"
title: "Camada de Anti Corrupção"
url: "/camada-anti-corrupcao"
---

Um problema que em alguns momentos podemos nos deparar é com algo chamado acoplamento, mais especificamente como podemos diminuir os pontos de impactos em nossos serviços? Exemplos de pontos de impacto:

- Consumir serviços de terceiros
- Utilizar bibliotecas de terceiros
- Novos sistemas comunicar com sistemas antigos (legados)
- Comunicação entre serviços e contextos

Esses exemplos criam um alto acoplamento e alto acoplamento aumenta possíveis impactos e pontos de mudança que podem fazer nossos sistemas ficarem fora do er, por exemplo:

- Serviço de terceiro não versiona API e fez uma publicação com quebras de compatibilidade
- Serviço de terceiro ficar fora do ar
- Bibliotecas mudaram sua _interface_ publica com quebra de compatibilidade
- Novos sistemas se comunicarem com sistemas antigos, onde pode precisar adaptar ou transformar informações ou as vezes ajustar o meio de transporte
- Alta dependência entre um contexto de fatura com o contexto de cliente, exigindo sincronização de comunicação o que pode gerar gargalo e custos para tais alinhamentos.

Uma forma de diminuir a complexidade em lidar com tais situações é criar uma camada no meio disso tudo, essa tal chamada é comumente chamada de _Anti corruption layer_ (Camada de anti corrupção).

## Entendendo a solução

A ideia é muito simples, em vez da comunicação direta nos exemplos acimas, a gente adiciona um serviço fazendo a intermediação e ponte entre tais dependencias, por exemplo:

### Consumir serviços de terceiros
![Exemplo de consumir serviços de terceiros](https://res.cloudinary.com/mahenrique94/image/upload/v1623805471/1_u70i6x.png)

### Utilizar bibliotecas de terceiros
![Exemplo de utilizar bibliotecas de terceiros](https://res.cloudinary.com/mahenrique94/image/upload/v1623805471/2_wsligz.png)

### Novos sistemas comunicar com sistemas antigos (legados)
![Exemplo de novos sistemas comunicar com sistemas antigos (legados)](https://res.cloudinary.com/mahenrique94/image/upload/v1623805471/3_nluawq.png)

### Comunicação entre serviços e contextos
![Exemplo de comunicação entre serviços e contextos](https://res.cloudinary.com/mahenrique94/image/upload/v1623805471/4_n7wpa0.png)

Dessa forma caso um serviço de terceiro mude sua versão que gere quebra de compatibilidade, o único ponto de ajuste seria na camada intermediária, os serviços que a utilizam nem vão saber que houve essa quebra (o mesmo vale para atualizações de bibliotecas e demais cenários).

## Conclusão

Nesse _post_ vimos como podemos diminuir e minizar os pontos de impactos quando temos nossos serviços acoplamentos altamente com dependências que fogem do controle dos mesmos.

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
