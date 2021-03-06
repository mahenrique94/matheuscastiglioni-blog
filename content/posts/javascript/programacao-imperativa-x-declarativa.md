---
autor: "Matheus Castiglioni"
categoria: "JavaScript"
disqus_identifier: "programacao-imperativa-x-declarativa"
disqus_title: "Programacao Imperativa X Declarativa"
disqus_url: "https://blog.matheuscastiglioni.com.br/programacao-imperativa-x-declarativa"
date: 2018-10-30T09:53:30-02:00
draft: false
keywords: [ "Back-End", "Front-End", "Programação" ]
slug: "programacao-imperativa-x-declarativa"
tag: [ "Back-End", "Front-End", "Programação" ]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1549587527/programacao-imperativa-x-declarativa_5bd79fa2402bf_bg_zzaf0e.jpg"
title: "Programacao Imperativa X Declarativa"
url: "/programacao-imperativa-x-declarativa"
---

Pois é, você já deve ter ouvido falar em ambos os termos, sendo eles: Imperativo x Declarativo, mas, afinal o que isso impacta no mundo de desenvolvimento? Podemos escrever nossos códigos das duas maneiras, ou seja, nosso código pode ser Imperativo ou Declaro e em alguns casos os dois ao mesmo tempo (ambos misturados).

Para que o entendimento fique um pouco mais fácil e simples, vamos trazer o exemplo para o mundo real, imagine o seguinte cenário:

> Você irá levar sua compania para um jantar

Chegando no restaurante o garçom vem até vocês e pergunta:

> Boa noite, o que eu posso ajudar?

Aqui você poderia responder de duas maneiras, sendo elas: Imperativa ou Declarativa.

Respondendo de forma Imperativa:

> Vejo que a mesa próxima a TV está vázia, minha compania e eu vamos andando ate lá e nos sentar.

Respondendo de forma Declarativa:

> Mesa para dois, por favor.

Veja que ambas as respostas apesar de terem o mesmo objetivo e finalidade, são bem diferentes umas das outras, em outras palavras:

- **Abordadem Imperativa**: Você irá descrever "**Como**" você faz alguma coisa.
- **Abordagem Declarativa**: Você irá descrever "**O que**" você faz.

De forma simplista e resumida, a diferença seria basicamente essa.

Beleza, já vimos um exemplo do mundo real, agora como ele se encaixa em nosso mundo de desenvolvimento? Simples, imagine alguns exemplos: Dobrar os valores de um `array` ou somar os valores de um `array`, ambos também podem ser implementados das duas maneiras.

Dobrando valores de um `array` de forma Imperativa:

```javascript
function double(arr) {
	let results = []
	for (let i = 0; i < arr.length; i++){
		results.push(arr[i] * 2)
	}
	return results
}
```

Somando os valores de um `array` de forma Imperativa:

```javascript
function sum(arr) {
	let result = 0
	for (let i = 0; i < arr.length; i++){
		result += arr[i]
	}
	return result
}
```

Agora, podemos fazer os mesmos exemplos de forma Declarativa, vamos ver como eles ficam?

Dobrando valores de um `array` de forma Declarativa:

```javascript
const double = arr => arr.map((item) => item * 2)
```

Somando os valores de um `array` de forma Declarativa:

```javascript
const sum = arr => arr.reduce((prev, current) => prev + current, 0)
```

Veja que fica muito mais direto, objetivo e menos verboso.

## Conclusão

Nesse *post* resolvi fugir um pouco dos códigos, linguagens, tecnologias e bibliotecas para focar um pouco em teoria e conceitos. Vimos que de forma Imperativa nossos códigos tendem a serem mais verbosos e tediosos, porém, com a abordagem Declarativa tudo fico mais objetivo e menor.

E aí, você já conhecia esses conceitos? Não deixe de comentar, se você gostou do *post* se inscreva na [*newsletter*](http://eepurl.com/ggP7Rv) e fique por dentro das novidades.

Até a próxima.

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
