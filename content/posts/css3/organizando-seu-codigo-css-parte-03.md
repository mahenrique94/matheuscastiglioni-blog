---
autor: "Matheus Castiglioni"
categoria: "CSS3"
disqus_identifier: "organizando-seu-codigo-css-parte-03"
disqus_title: "Organizando Seu Codigo Css Parte 03"
disqus_url: "https://blog.matheuscastiglioni.com.br/organizando-seu-codigo-css-parte-03"
date: 2018-03-08T09:43:26-02:00
draft: false
keywords: [ "BEM", "CSS Patterns", "Front-End", "Web" ]
slug: "organizando-seu-codigo-css-parte-03"
tag: [ "BEM", "CSS Patterns", "Front-End", "Web" ]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1549718275/organizando-seu-codigo-css-parte-03_yajctw.jpg"
title: "Organizando Seu Codigo Css Parte 03"
url: "/organizando-seu-codigo-css-parte-03"
---

# SMACSS, OOCSS, BEM ou DRY CSS ?

Continuando a série sobre os padrões de escrita da linguagem CSS, esse *post* é o terceiro da série, caso você perdeu e queira ver:

- [Organizando seu código CSS parte 01](http://blog.matheuscastiglioni.com.br/organizando-seu-codigo-css-parte-01) onde é mencionado e descrito o padrão **OOCSS**
- [Organizando seu código CSS parte 02](http://blog.matheuscastiglioni.com.br/organizando-seu-codigo-css-parte-02) onde é mencionado e descrito o padrão **SMACSS**.

## Qual padrão devo seguir para escrever e organizar meu código CSS ?

Entre os padrões mencionados no primeiro *post*, iremos abordar os seguintes: [SMACSS](http://blog.matheuscastiglioni.com.br/organizando-seu-codigo-css-parte-02), [OOCSS](http://blog.matheuscastiglioni.com.br/organizando-seu-codigo-css-parte-01), BEM e DRY CSS, nesse *post*, vou falar sobre o **BEM**.

## BEM

O [BEM](http://getbem.com/) (Block, Element and Modifier, traduzindo: Bloco, Elemento e Modificador) foi criado pelo [Yandex](https://www.yandex.com/), um buscador que recebe centenas de milhões de buscas por dia. Podemos considerar o BEM uma metodologia onde devemos mudar a forma que enxergamos e estruturamos nossas páginas, existem algumas regras que devem serem seguidas.

Dentro do BEM existem três principais nomeclaturas, sendo elas: Blocos, Elementos e Modificadores, mas, para que servem cada nomeclatura? Calma que eu já vou explicar.

### Blocos

Elementos independentes, ou seja, elementos que não dependem de outros, eles possuem seu próprio significado, em outras palavras, é um agrupador de elementos, por exemplo: `Menu`, `Cabeçalho`, `Rodapé`, etc...

![Bloco de busca](https://res.cloudinary.com/mahenrique94/image/upload/v1549718349/bem-bloco-busca_hgtyhp.png)

Na imagem acima, temos um `Bloco de Busca`.

### Elementos

Filhos de blocos, ajudam a formar e compor um bloco como um todo, por exemplo: `Item de menu`, `Título do Cabeçalho`, `Redes Sociais do Rodapé`, etc...

![Elementos do bloco de busca](https://res.cloudinary.com/mahenrique94/image/upload/v1549718364/bem-elementos-bloco-busca_rlwqpo.png)

Na imagem acima, temos os `Elementos de Busca`, ou seja, os elementos que compõem o bloco de busca.

### Modificadores

Estado ou uma versão que um bloco ou elemento pode estar em determinados momentos, por exemplo: `escondido`, `visivel`, `tem fundo`, `tem borda`, `borda redonda`, etc...

Para exemplicar, acho que uma imagem pode falar mais que mil palavras (rsrsrs):

![Estrutura do BEM](https://res.cloudinary.com/mahenrique94/image/upload/v1549718386/bem-structure_ymtg1m.png)

![Exemplo de estrutura do BEM](https://res.cloudinary.com/mahenrique94/image/upload/v1549718401/bem-structure-example_kkpsqw.jpg)

## Entendendo o BEM

Caso ainda tenha ficado alguma dúvida, imagine o seguinte site:

![Site com BEM](https://res.cloudinary.com/mahenrique94/image/upload/v1549718416/site-com-bem_h1jzac.png)

Como podemos realizar a divisão dos seus Blocos? Veja o exemplo de blocos abaixo:

![Site com BEM dividido em Blocos](https://res.cloudinary.com/mahenrique94/image/upload/v1549718432/site-com-bem-blocos_hf90e4.png)

Melhorou né? Veja que marcamos todos os elementos que não dependem um dos outros, eles por si só, já possuem seus significados, lembrando que para compor um bloco, iremos ter vários elementos e/ou estados.

Na imagem acima, temos os seguintes blocos:

- `Menu`
- `Logo`
- `Barra de busca`
- `Autenticação de Usuário`
- `Título da página`
- `Textos da página`
- `Rodapé`

Veja que para uma simples página, temos bastante blocos e dentro desses teremos um ou mais elementos para formá-los.

## Escrevendo BEM

Para escrever códigos CSS com BEM, temos algumas pequenas regras à serem seguidas, sendo elas:

1. Para adicionar um elemento, deve-se utilizar dois *underlines*.
2. Para informar um modificador, deve-ser utilizar dois traços.

Chega de teoria e vamos codar \o/

![Estrutura de posts com BEM](https://res.cloudinary.com/mahenrique94/image/upload/v1549718451/bem-estrutura-de-post_ek1yw4.png)

Para estrutura o exemplo acima com BEM, poderíamos ter o seguinte HTML:

```markup
<section class="container">
	<article class="post">
		<img class="post__imagem">
		<div class="post__conteudo"></div>
	</article>
	<article class="post">
		<img class="post__imagem">
		<div class="post__conteudo"></div>
	</article>
</section>
```

Consequentemente devemos ter o seguinte CSS:

```css
.container {
	// ...
}

.post {
	// ...
}
.post__imagem {
	// ...
}
.post__conteudo {
	// ...
}
```

Aqui podemos destacar os elementos em:

- `container` e `post`: Blocos.
- `post__imagem`  e `post__conteudo`: Elementos.

Mas, vocë deve estar se perguntando: "E os estados?", Vamos dar um exemplo:

> Imagine que você queira alinhar a imagem à direita ou esquerda e as vezes exibir uma imagem arredondada

Veja que já temos três estados, sendo eles: **alinhada à direita**, **alinhada à esquerda** e **arredondada**.

Traduzindo para nosso CSS, temos algo parecido com:

```css
.post__imagem.alinhada-direita {
	// ...
}
.post__imagem.alinhada-esquerda {
	// ...
}
.post__imagem.arredondada {
	// ...
}
```

Eu particularmente gosto de trabalhar apenas com inglês nas escritas de códigos, então ficaria: `is-right`, `is-left`, `is-rounded`.

Com isso, fechamos a explicação do BEM, você já o conhecia? o que achou? Não deixe de comentar.

Vídeo no meu canal falando sobre o assunto:

<iframe height="500" src="https://www.youtube.com/embed/yKPXW9aSxQI" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>

Para receber novos *posts* por email cadastre-se na [*newsletter*](http://eepurl.com/ggP7Rv) abaixo e fique por dentro das novidades.

![Gif do Chapolin fazendo siga meus vãos](https://res.cloudinary.com/mahenrique94/image/upload/v1549718472/gif-chapolin-siga-meus-vaos_d4fdwv.gif)
