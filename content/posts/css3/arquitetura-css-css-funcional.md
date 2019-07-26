---
autor: "Matheus Castiglioni"
categoria: "CSS3"
disqus_identifier: "arquitetura-css-css-funcional"
disqus_title: "Arquitetura CSS: CSS Funcional"
disqus_url: "https://blog.matheuscastiglioni.com.br/arquitetura-css-css-funcional"
date: 2019-07-18T20:45:29-03:00
draft: false
keywords: ["CSS", "CSS3", "Arquitetura CSS", "CSS Funcional"]
slug: "arquitetura-css-css-funcional"
tag: ["CSS", "CSS3", "Arquitetura CSS", "CSS Funcional"]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1563493730/css3_hs4wbl.jpg"
title: "Arquitetura CSS: CSS Funcional"
url: "/arquitetura-css-css-funcional"
---

Continuando a série de *post's* sobre arquitetura CSS, no *post* anterior vimos [como organizar a estrutura de pastas e arquivos com ITCSS](https://blog.matheuscastiglioni.com.br/arquitetura-css-com-itcss/).

Nesse *post* vamos dar uma olhada no **CSS Funcional**.

Tradicionalmente escrevemos CSS onde não conseguimos reusar boa parte de nossos estilos, é muito comum termos propriedades e estilos duplicados em nossas classes, seletores ou componentes, por exemplo:

```css
.botao {
    border-radius: 5px;
    font-weight: 100;
    margin-right: 1rem;
    /* demais propriedades... */
}

.campo {
    border-radius: 5px;
    margin-right: 1rem;
    /* demais propriedades... */
}

.box {
    border-radius: 5px;
    font-weight: 100;
    margin-right: 1rem;
    /* demais propriedades... */
}
```

Repare que algumas propriedades estão sendo aplicadas para os três elementos e componentes. Sim, poderíamos fazer uso de variáveis e diminuir um pouco a repetição dos códigos, mas, ainda assim seria necessário escrever o código das propriedades e referenciar a variável.

Também é possível separar os estilos compartilhados e específicos em seletores diferentes para cada um:

```css
.botao,
.campo,
.box {
    border-radius: 5px;
    font-weight: 100;
    margin-right: 1rem;
}

.botao {
    /* demais propriedades... */
}

.campo {
    /* demais propriedades... */
}

.box {
    /* demais propriedades... */
}
```

Mas, imagine que esses seletores estão e pertencem à arquivos diferentes, ia ser muito confuso no meio do arquivo `botao.css` ter códigos do `box.css`.

Como podemos resolver o problema? É nesse momento que entra o **CSS Funcional**.

## CSS Funcional

A ideia do CSS Funcional é que a gente aumente o reuso de código e estilos, para que esse reuso seja possível, precisamos mudar um pouco a maneira como escrevemos nossos códigos CSS.

Em vez de termos uma classe com vários estilos, vamos possuír várias classes com poucos estilos que ao serem juntadas formam o estilo completo do componente ou elemento.

A ideia é que cada classe faça apenas e uma coisa (aplique algum estilo).

Vamos imaginar um botão:

![Botão verde para exemplo](https://res.cloudinary.com/mahenrique94/image/upload/v1563494671/Screen_Shot_2019-07-18_at_21.03.55_p0tyke.png)

Para adicionar esse botão em uma página, o código HTML não é nada demais, um simples `button` e possivelmente com uma classe para receber os estilos:

```markup
<button class="botao">Meu botão</button>
```

Em um código CSS tradicional, poderíamos ter algo do tipo:

```css
.botao {
    background: green;
    border-radius: 5px;
    border: none;
    color: white;
    display: inline;
    font-weight: 100;
    letter-spacing: 1px;
    margin-right: 1rem;
    padding: .5rem .6125rem;
}
.botao:hover {
    background: darkgreen;
    cursor: pointer;
}
```

Mas, quantos componentes ou elementos em nosso site ou aplicativo não vão possuir borda? Ou seja, quantas vezes vamos precisar escrever `border: none`? E não vale apenas para ele, também podemos ver o famoso `cursor: pointer`, `display: inline`, etc...

Constantemente estamos escrevendo códigos repetidos.

Vamos ver como fica o exemplo com CSS Funcional?

![Gif ancioso para ver o CSS funcional](https://res.cloudinary.com/mahenrique94/image/upload/v1563495054/ezgif.com-optimize_qw4wd7.gif)

Como a gente sabe, a ideia é quebrar o CSS tradional onde temos uma classe com vários estilos em várias classes com poucos estilos.

Nosso HTML fica da seguinte maneira:

```markup
<button class="bg-verde cp hover-verde-escuro borda-redonda sem-borda fonte-branca inline fonte-leve mr-1 p-padrao ls-1">
    Meu botão
</button>
```

E nosso CSS:

```css
.bg-verde {
    background: green;
}

.hover-verde-escuro:hover {
    background: darkgreen;
}

.borda-redonda {
    border-radius: 5px;
}

.sem-borda {
    border: none;
}

.fonte-branca {
    color: white;
}

.inline {
    display: inline;
}

.fonte-leve {
    font-weight: 100;
}

.mr-1 {
    margin-right: 1rem;
}

.p-padrao {
    padding: .5rem .6125rem;
}

.ls-1 {
    letter-spacing: 1px;
}

.cp {
    cursor: pointer;
}
```

Sim, eu sei que no primeiro momento parece loucura, mas, repare que agora é posível reaproveitar praticamente 100% dos nossos estilos.

Se outro elemento ou componente precisar ser estilizado sem borda, simplesmente adicionamos a classe `sem-borda` para ele, ou, se o mesmo precisar que a fonte seja bem levinha adicinamos a classe `fonte-leve`.

```markup
<button class="sem-borda">Meu botão</button>
<input class="fonte-leve">
<div class="centralizado"></div>
<p class="texto-upper"></p>
<span class="escondido"></span>
```

Algumas classes podem ficar com o nome um pouco grande em português, mas, nomeados em inglês acabam ficando menores.

## Conclusão

Nesse *post* vimos como mudar do tradicional CSS para o funcional, a ideia basicamente é trocar nossas classes com vários estilos para várias classes com poucos estilos.

E ae, você já conhecia o CSS Funcional? Não deixe de comentar.

Você também [pode estar assinando nossa *newsletter* e ficar por dentro das novidades](http://eepurl.com/ggP7Rv).

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
