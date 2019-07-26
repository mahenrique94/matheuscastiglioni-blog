---
autor: "Matheus Castiglioni"
categoria: "CSS3"
disqus_identifier: "organizando-seu-codigo-css-parte-02"
disqus_title: "Organizando Seu Codigo Css Parte 02"
disqus_url: "https://blog.matheuscastiglioni.com.br/organizando-seu-codigo-css-parte-02"
date: 2017-12-19T13:25:17-02:00
draft: false
keywords: []
slug: "organizando-seu-codigo-css-parte-02"
tag: [ "CSS Patterns", "Front-End", "SMACSS", "Web" ]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1549725285/organizando-seu-codigo-css-parte-02_odabfw.jpg"
title: "Organizando Seu Codigo Css Parte 02"
url: "/organizando-seu-codigo-css-parte-02"
---

# SMACSS, OOCSS, BEM ou DRY CSS ?

Continuando a série sobre os padrões de escrita da linguagem CSS, esse *post* é o segundo da série, caso você perdeu e queira ver o [Organizando seu código CSS parte 01](http://blog.matheuscastiglioni.com.br/organizando-seu-codigo-css-parte-01) onde é mencionado e descrito o padrão **OOCSS**.

## Qual padrão devo seguir para escrever e organizar meu código CSS ?

Entre os padrões mencionados no primeiro *post*, iremos abordar os seguintes: SMACSS, OOCSS, BEM e DRY CSS, nesse *post*, irei falar sobre o **SMACSS**.

## SMACSS

Criado pelo desenvolvedor canadense [Jonathan Snook](https://snook.ca/), Jonathan percebeu que a maneira como o CSS era escrito e gerenciado poderia ser melhorado, com tamanha indignação e com intuíto de auxiliar seus colegas desenvolvedores e também a sí mesmo, decidiu normatizar determinadas regras para que a melhoria fosse possível. Em 2011, dois anos depois do surgimento do [OOCSS](http://blog.matheuscastiglioni.com.br/organizando-seu-codigo-css-parte-01) surgiu o **SMACSS**(pronuncía-se "*smacks*).

SMACSS(*Scalable and Modular Architecture for CSS* ou Arquitetura Escalável e Modular para CSS) esta mais para uma **normatização** do que para **invenção**, nas palavras do próprio Jonathan:

> Está mais para um guia do que para um framework.

Não trata-se de nenhum arquivo que precisa ser baixado ou instalado, não precisa ser seguido à risca, pode ser mesclado com outros padrões, assim você consegue criar e definir a melhor forma que você irá **escrever** e **organizar** seu código CSS.

### Conheçendo o SMACSS

Um dos primeiros conhecimentos que se adquire em SMACSS é a respeito da estrutura e organização de seus arquivos, basicamente a organização dos arquivos divide-se em cinco categorias, sendo elas:

1. Base
2. Layout
3. Module (Módulo)
4. State (Estado)
5. Theme (Tema)

#### Base

Regras padrões,.

#### Layout

Regras que definem a forma visual de um elemento, sem impactar em sua semântica ou estrutura.

#### Módulo

Regras que são as principais de um projeto, as que dão o “volume” de CSS.

#### Estado

Regras que descrevem como determinado *layout* ou módulo comporta-se em determinada condição ou estado, por exemplo: ativo ou inativo, oculto ou visível.

#### Tema

Regras similares ao Estado, porém, descrevem como os *layouts* ou módulos devem ser visualmente em determinadas situações.

### Organização

Neste momento, com a divisão das cinco categorias informadas e descritas, devemos separar nosso código CSS em vários arquivos, separando-os em suas respectivas categorias. Com essa organização conseguimos diminuir a repetição de códigos e regras CSS já utilizadas, sendo assim, consequentemente nosso código irá ficar mais fácil para ser mantido(manutenção) e atualizado(criação).

### Nomeclaturas

Ao utilizar SMACSS devemos respeitar a nomeclatura e certas regras, baseado nas cinco categorias já mencionadas, facilitando a identificação de qual categoria pertence determinada regra(seletor) CSS.

Convencionamente foi definido a ideia de utilizar prefixos para realizar a separação entre: *Layout*, Módulo e Estado, sendo eles:

- Usar `l-` ou `layout-` para *Layouts*
- Usar `is-` para Estados
- Não usar `m-` ou `module-` para Módulos, pois como são as maiores folhas de estilo e sendo assim os mais utilizados, torna-se descenessário a repetiação de escrita dos prefixos.

### Exemplos

#### Base

São regras aplicadas utilizando os seguintes seletores: **elemento**, **descendente**, **filho** ou **pseudoclasses**. Logo podemos ver que não esta incluso utilizar os seletores de **id** ou **classe**.

Servem para definir como será a aparência **padrão** de determinados elementos que aparecem na página, em outras palavras, podemos dizer que aqui se encaixa o [Reset CSS](https://tableless.com.br/css-reset/):

```css
body {
  margin: 0;
}

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

*
    box-sizing: border-box
    font-weight: 300

*:focus
    outline: none
```

#### Layout

Como já mencionado, os *layouts* são escritos baseando-se em seu prefixo, sendo ele o `l-` seguido pelo *layout* que deseja-se aplicar ao elemento:

```css
.l-inline {
	/* Definir um elemento inline */
}

.l-right {
	/* Definir um elemento à direita */
}

.l-fixed {
	/* Definir um elemento com posição fixa */
}
```

#### Modulo

Os módulos são escritos apenas pelo nome do elemento que esta sendo aplicado a regra css:

```css
.campo {
	/* Para campos em formulário */
}

.exemplo {
	/* Para definir algum exemplo de código escrito */
}

.painel {
	/* Para definir algum painel na aplicação */
}

.login {
	/* Para definir alguma regra da autenticação */
}
```

#### Estados

Como já mencionado, os estados são escritos baseando-se em seu prefixo, sendo ele o `is-` seguido pelo estado que deseja-se aplicar ao elemento:

```css
.is-escondido {
	/* Esconder um determinado elemento na página */
}

.is-ativo {
	/* Definir um elemento como ativo */
}

.is-visivel {
	/* Mostrar um elemento na página */
}
```

#### Temas

O significado de tema em SMACSS é o mesmo que em qualquer outro site: **Um conjunto de cores, imagens e elementos** que compoem uma determinada página.

A ideia dos temas é que um arquivo realize a sobreescrita das regras de outro tema, vamos imaginar que em uma determinada pasta temos:

![Estrutura da pasta de temas](https://res.cloudinary.com/mahenrique94/image/upload/v1549725347/estrutura-pasta-temas_momcbe.png)

Veja que temos um `.css`  para cada tema, dentro deles os seletores devem ser os mesmos:

```css
/* azul.css */
.modulo {
	border-color: blue;
}

/* preto.css */
.modulo {
	border-color: black;
}

/* verde.css */
.modulo {
	border-color: green;
}
```

Assim podemos importar determinado arquivo para utilizar determinado tema, onde não será necessário realizar mudanças na estrutura do HTML ou CSS.

## Conclusão

SMACSS é um padrão flexível, elaborado com base em anos de observação e experiência em projetos de alto nível. Se esse foi seu primeiro contato com o mesmo, aconselho realizar experiências e práticas em seus projetos para verificar os resultados, certamente terá um ganho na organização e produtividade.

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

#### Referências:

- [Livro - CSS Eficiente](https://www.casadocodigo.com.br/products/livro-css-eficiente)
- [Livro Oficial](https://smacss.com/)
