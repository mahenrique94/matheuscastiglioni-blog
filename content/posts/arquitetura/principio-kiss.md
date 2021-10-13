---
autor: "Matheus Castiglioni"
categoria: "Arquitetura"
disqus_identifier: "principio-kiss"
disqus_title: "Princípio Kiss"
disqus_url: "https://blog.matheuscastiglioni.com.br/principio-kiss"
date: 2021-08-18T20:09:12-03:00
draft: false
keywords: ["design", "princípio"]
slug: "principio-kiss"
tag: ["design", "princípio"]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1629328322/3414695_1_zaxi3t.jpg"
title: "Princípio Kiss"
url: "/principio-kiss"
---

Você já se pegou alguma vez tentando resolver um problema utilizando uma solução mais complexa do que deveria? Ou seja, para um problema simples foi implementada uma solução complexa.

Pois é, isso é tão comum que foi criado e existe um princípio no mundo de desenvolvimento de _sofware_ chamado KISS (_Keep it Simple, Stupid_)

Basicamente o princípio foca muito em esforça-se para manter a simplicidade quando estamos construindo um novo produto, desenhando um _site_, criando um aplicativo, escrevendo blocos de códigos em engenharia, etc...

Um exemplo seria:

> Imagine que você precisa calcular um valor de imposto

Você poderia simplesmente fazer:

```
const calcularImposto = (imposto, valor) => {
    if (imposto === 'ICMS') return valor * 0.25
    return 0
}
```

**O valor de 25% serve apenas como exemplo**.

Mas, uma outra abordagem de implementação poderia ser pensar em abstrações, aplicar algum padrão de projeto (por exemplo o [Strategy](https://www.youtube.com/watch?v=ngZRMd4d9cQ)), utilizar recursos de orientação à objetos como polimorfismo, etc...

Mas, as vezes o único imposto que vamos precisar calcular é esse e mais nada (veja o [princípio YAGNI](https://blog.matheuscastiglioni.com.br/yagni/)).

## Conclusão

Nesse *post* vimos o princípio do desenvolvimento de _software_ chamado KISS, que foca em manter a simplicidade sempre que possivel.

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
