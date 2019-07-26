---
autor: "Matheus Castiglioni"
categoria: "CSS3"
disqus_identifier: "organizando-seu-codigo-css-parte-04-dry-css"
disqus_title: "Organizando Seu Codigo Css Parte 04 Dry Css"
disqus_url: "https://blog.matheuscastiglioni.com.br/organizando-seu-codigo-css-parte-04-dry-css"
date: 2018-05-25T09:29:33-02:00
draft: false
keywords: [ "CSS Patterns", "Dry CSS", "Front-End", "Web" ]
slug: "organizando-seu-codigo-css-parte-04-dry-css"
tag: [ "CSS Patterns", "Dry CSS", "Front-End", "Web" ]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1549709597/organizando-seu-codigo-css-parte-04-dry-css_ra9buq.jpg"
title: "Organizando Seu Codigo Css Parte 04 Dry Css"
url: "/organizando-seu-codigo-css-parte-04-dry-css"
---

Continuando a série de *post's* sobre organização de código CSS, vamos para mais um "padrão" (*pattern*) (também considerado um princípio), nesse *post* vou falar sobre o **DRY CSS**. Caso você tenha perdido os outros três primeiros, vou listá-los para que você possá-lo lê-los se tiver interesse:

- [Organizando seu código CSS parte 01 - OOCSS](http://blog.matheuscastiglioni.com.br/organizando-seu-codigo-css-parte-01)
- [Organizando seu código CSS parte 02 - SMACSS](http://blog.matheuscastiglioni.com.br/organizando-seu-codigo-css-parte-02)
- [Organizando seu código CSS parte 03 - BEM](http://blog.matheuscastiglioni.com.br/organizando-seu-codigo-css-parte-03)

Sugiro que você faça a leituro deles.

## DRY CSS

O que seria "**DRY CSS**"? DRY seria a abreviação de "*Don't repeat yourself*" traduzindo para o português "Não se repita" ou "Não repita á sí mesmo", depende de sua interpretação, mas afinal, o que isso quer dizer?

A ideia é que você não repita estilos (*styles*) ou propriedaes (*properties*) dentro do seu CSS, sendo que isso pode e deve ser facilmente evitado. Calma, se você ficou confuso, ao decorrer do *post* com os exemplos tudo ficará mais claro.

Imagine o seguinte cenário: Temos uma caixa (*box*) com uma borda (*border*), sombra (*box-shadow*) e cor de fundo (*background*), poderíamos facilmente criá-la:

```css
.caixa {
	background: #FDFDFD;
	border: 1px solid #DCDCDC;
	box-shadow: 3px 2px 5px rgba(0, 0, 0, .25);
}
```

Esse elemento seria renderizado da seguinte maneira:

![Exemplo do elemento caixa](https://res.cloudinary.com/mahenrique94/image/upload/v1549709655/post-dry-css-caixa-exemplo_bsuogj.png)

Foi apenas adicionado um `padding` (espaço interno) para ele.

Maravilha, agora imagine que vários elementos do nosso HTML vai possuír os mesmos estilos, como poderíamos compartilhá-lo? Com certeza você pensou em atribuir a classe (*class*) `caixa` para eles, algo parecido com:

```markup
<div class="caixa">...</div>
<section class="caixa painel">...</section>
<form class="caixa formulario">...</form>
<article class="caixa post">...</article>
```

Beleza, seria uma solução, mas, se um dia precisarmos mudar o nome de `caixa` para `box` por exemplo, teríamos que mexer em todo nosso HTML, algo não trivial, correto? Claro que teríamos várias maneiras de resolver esse problema:

- Utilizando herança com um pré processador (por exemplo: [SASS](http://blog.matheuscastiglioni.com.br/dando-poderes-ao-css-com-sass-parte-01))
- Criar *placeholders* com pré processadores
- Criar *mixins* com pré processadores

Enfim, as soluções são diversas...

Para contextualizar o assunto do *post* vamos resolver o problema utilizando o princípio do **DRY CSS**, como podemos fazer isso? Conforme dito a ideia é não repetir estilos ou propriedades, podemos fazer isso agrupando nossos seletores:

```css
.caixa,
.formulario,
.painel,
.post {
	background: #FDFDFD;
	border: 1px solid #DCDCDC;
	box-shadow: 3px 2px 5px rgba(0, 0, 0, .25);
}
```

Legal, agora em nosso HTML podemos evitar a repetição da classe `caixa` para os demais elementos que não são uma caixa:

```markup
<div class="caixa">...</div>
<section class="painel">...</section>
<form class="formulario">...</form>
<article class="post">...</article>
```

**Obs:** Os demais elementos não são uma caixa, apenas possuem alguns estilos parecidos.

Legal, nosso problema foi resolvido, mas, um pequeno detalhe que geralmente costuma-se fazer utilizando o DRY CSS, é nomear aquele grupo de seletor, a ideia é que para cada grupo de seletor o mesmo comece com um `ID` descrevendo aquele grupo, logo após venha os seletores e por fim termine com uma `classe` com o mesmo valor do `ID`, calma, sei que é confuso, mas veja o exemplo:

```css
#SHADOW-BORDER-WHITE-BACKGROUND,
.caixa,
.formulario,
.painel,
.post,
.shadow-border-white-background {
	background: #FDFDFD;
	border: 1px solid #DCDCDC;
	box-shadow: 3px 2px 5px rgba(0, 0, 0, .25);
}
```

Dessa maneira, sabemos que esse grupo de seletor possuí uma sombra, borda e fundo branco.

Sim, eu sei que é meio estranho, mas é o que geralmente costuma-se fazer utilizando o DRY.

### Saiba mais

Um grande detalhe: É que você não utilize esse `ID` ou `classe` de seu grupo dentro do HTML, ele serve apenas para descrever o grupo de seletores dentro do CSS.

Com esse agrupamento, também fica mais claro o que está sendo estilizado dentro do inspeçor de código dos navegadores.

![Exemplo do inspector do navegador utilizando o DRY](https://res.cloudinary.com/mahenrique94/image/upload/v1549709708/post-dry-css-inspector-exemplo_ixlwzn.png)

## Vantagens de utilizar o DRY CSS

Você deve estar se perguntando:

> Porque eu usária algo estranho dessa maneira?

Agora, vou citar algumas vantagens em utilizar o princípio de DR:

1. Compatível com outras metodologias: [OOCSS](http://blog.matheuscastiglioni.com.br/organizando-seu-codigo-css-parte-01), [SMACSS](http://blog.matheuscastiglioni.com.br/organizando-seu-codigo-css-parte-02), [BEM](http://blog.matheuscastiglioni.com.br/organizando-seu-codigo-css-parte-03), etc..
2. Simplicidade na organização do seu CSS.
3. A cópia do CSS pode ser feita de apenas um lugar e tudo deve funcionar em outro projeto.
4. Grupos podem ser extraídos e reutilizados em qualquer lugar.
5. Se o HTML precisar mudar, tudo ainda deve continuar funcionando.
6. Se o estilo ou propriedades precisarem mudar, a mudança deve ser feita em apenas um lugar dentro do seu CSS.
7. Arquivos CSS com tamanhos menores.
8. Podemos ver todos os elementos que fazem possuem aquele determinado estilo ou propriedade.

As vatangens são inúmeras, é fortemente recomendado esse princípio.

## Saiba mais

Pré processadores por exemplo, utilizando o princípio de DRY dentro de seus compiladores, se você já reparou como fica um código utilizando *placeholders* deve ter notado que todos os seletores ficam agrupados para aquelas determinadas propriedades ou estilos.

Esse é o princípio do DRY.

## Conclusão

O "padrão" DRY é bem simples e tem um pequeno propósito, evitar repetição de código, também pode ser considerado um princípio e não padrão por outras pessoas.

Você já conhecia ou utiliza o padrão DRY? Não deixe de comentar e assinar nossa [*newsletter*](http://eepurl.com/ggP7Rv) para receber novidades por email.

Espero que você tenha gostado, até a próxima.

![Giff do Mr. Bean dando xau](https://res.cloudinary.com/mahenrique94/image/upload/v1549709762/gif-mr-bean-dando-xau_k4rhyl.gif)

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
