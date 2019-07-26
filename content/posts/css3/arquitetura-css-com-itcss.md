---
autor: "Matheus Castiglioni"
categoria: "CSS3"
disqus_identifier: "arquitetura-css-com-itcss"
disqus_title: "Arquitetura CSS: ITCSS"
disqus_url: "https://blog.matheuscastiglioni.com.br/arquitetura-css-com-itcss"
date: 2019-07-16T22:22:43-03:00
draft: false
keywords: ["CSS", "CSS3", "Arquitetura CSS", "ITCSS"]
slug: "arquitetura-css-com-itcss"
tag: ["CSS", "CSS3", "Arquitetura CSS", "ITCSS"]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1563326726/download_vecth8.jpg"
title: "Arquitetura CSS: ITCSS"
url: "/arquitetura-css-com-itcss"
---

Criar uma boa estrutura para nossos arquivos CSS não é tão simples quanto parece, geralmente vamos encontrar algumas dificuldades ao decorrer do caminho, nos forçando à partir para práticas (não muito aceitas), como por exemplo: O uso do famoso `!important`.

E os problemas não param por aí, cada vez será mais dificil criar seletores com maior especifidade para sobreescrever os outros seletores ou alguma regra.

Nesse *post* vou falar um pouco sobre o **ITCSS** (*Inverted Triangle CSS*).

## O que é ITCSS?

O **ITCSS** é uma estrutura para que tenhamos uma arquitetura CSS mais organizada. Basicamente a ideia é visualizar o CSS em diferentes camadas separadas, que, ao serem montadas formam um triângulo de cabeça para baixo.

![Camadas do ITCSS](https://res.cloudinary.com/mahenrique94/image/upload/v1563327490/vg79g4-300x181_1_phjoh8.jpg)

Repare que as camadas estão organizadas das mais genéricas para as mais específicas.

### Settings

Aqui é onde vamos colocar as configurações básicas do projeto. Normalmente é onde serão definidas as variáveis globais do nosso CSS, seja para definir cores, espaçamentos ou qualquer outra necessidade que precise de uma variável.

```sass
$primary-color: #0099ff
$border-default: 1px solid #dcdcdc
$gap-container: 1rem
```

### Tools

Aqui é onde vamos colocar e criar nossos *mixins* ou funções para a construção dos nossos estilos e *layouts*.

```sass
@mixin full()
    height: 100vh
    width: 100vw
```

### Generic

Aqui finalmente começamos aplicar códigos CSS. Essa é a primeira camada, nessa camada informamos regras genéricas e com a menor especifidade possível. Em geral, é onde vamos aplicar os nossos *reset's*.

```sass
*
    box-sizing: border-box
```

### Elements

Nessa camada vamos definir seletores básicos, é a última camada que irá usar seletores por *tags*. Atenção, nessa camada, nada de usar seletores por `id` ou `classes`, apenas seletores por *tag* (elementos).

```sass
li
    list-style: none
```

### Objects

Seguindo os princípios de [OOCSS(CSS Orientado a Objetos)](https://blog.matheuscastiglioni.com.br/organizando-seu-codigo-css-parte-01/), aqui é onde vamos começar a criar nossos pequenos objetos. Um detalhe importante é que nessa camada só é permitido a utilização de seletores por classes.

```sass
.container
    margin: 0 auto
    max-width: 480px
```

### Components

Aqui já começamos a criar nossos componentes (como o próprio nome já diz) de maneira mais específica. Aqui ainda é restrito para apenas o uso de classes.

```sass
.btn-success
    backgroud: #00cc99
    border-radius: 4px
    color: #fdfdfd
```

### Trumps

Essa camada é responsável pela maior especificidade das demais, permitindo o uso de `!important`. Normalmente a ideia para utilização dos *trumps* é que eles sejam usados para estilos onde independe de tudo o mesmo seja aplicado e não sobreescrito.

```sass
.hidden
    display: none !important
```

## Para saber mais

O **ITCSS** pode ser usado em conjunto com metodologias e outros padrões, por exemplo: [BEM](https://blog.matheuscastiglioni.com.br/organizando-seu-codigo-css-parte-03/), [SMACSS](https://blog.matheuscastiglioni.com.br/organizando-seu-codigo-css-parte-02/), [DRY](https://blog.matheuscastiglioni.com.br/organizando-seu-codigo-css-parte-04-dry-css/), [OOCSS](https://blog.matheuscastiglioni.com.br/organizando-seu-codigo-css-parte-01/), etc...

Caso você precise aplicar alguma validação de cores para os elementos ou componentes, você pode estar criando uma nova camada entre `components` e `trumps` chamada `theme`:

![Criando a camada theme](https://res.cloudinary.com/mahenrique94/image/upload/v1563328940/hackpad.com_PIPWVUMv6rB_p.296099_1420807134466_itcss_1_z4nf0x.jpg)

## Conclusão

Nesse *post* vimos uma maneira de organizar a estrutura dos nossos arquivos e pastas CSS, dessa maneira, conseguimos criar uma organização maior dos mesmos.

E ae, você já conhecia o **ITCSS**? Não deixe de comentar, caso tenha gostado do *post* e gostaria de ficar por dentro das novidades, [não deixe de assinar nossa newsletter](http://eepurl.com/ggP7Rv).

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
