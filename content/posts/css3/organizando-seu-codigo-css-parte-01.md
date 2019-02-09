---
autor: "Matheus Castiglioni"
categoria: "CSS3"
disqus_identifier: "organizando-seu-codigo-css-parte-01"
disqus_title: "Organizando Seu Codigo Css Parte 01"
disqus_url: "https://matheuscastiglioni-blog.netlify.com/organizando-seu-codigo-css-parte-01"
date: 2017-10-31T09:31:34-02:00
draft: false
keywords: [ "CSS Patterns", "Front-End", "OOCSS", "Web" ]
slug: "organizando-seu-codigo-css-parte-01"
tag: [ "CSS Patterns", "Front-End", "OOCSS", "Web" ]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1549726455/organizando-seu-codigo-css-parte-01_qcqkbz.jpg"
title: "Organizando Seu Codigo Css Parte 01"
url: "/organizando-seu-codigo-css-parte-01"
---

# SMACSS, OOCSS, BEM ou DRY CSS ?

Hoje em dia escrever CSS deveria ser uma tarefa simples, porém, ao longo do tempo foram surgindo muitas formas da mesma ser realizada, onde começaram surgir as dúvidas, logo em seguida, irei tentar explicar como funciona cada padrão e qual deveria seguir.

## Qual padrão devo seguir para escrever e organizar meu código CSS ?

Entre os padrões mencionados no começo do post, iremos abordar os seguintes padrões: SMACSS, OOCSS, BEM e DRY CSS, nesse post, irei abordar primeiramente o **OOCSS**, também conhecido como **CSS Orientado a Objetos**.

### OOCSS

Com certeza você já deve ter ouvido falar em "[Orientação a Objetos](https://www.caelum.com.br/apostila-java-orientacao-objetos/orientacao-a-objetos-basica/#4-1-motivacao-problemas-do-paradigma-procedural)", uma maneira de programar onde é possível criar um reaproveitamento de código muito eficiênte. Com o grande sucesso desse paradigma no *back-end* em linguagens como o Java, em 2009 a desenvolvedora Nicole Sullivan teve a idéia de trazer o paradigma para o *front-end*, assim surgiu o **OOCSS**(*Object Oriented CSS*).

#### Princípios básicos

A proposta do OOCSS nos traz dois importantes princípios, sendo eles:

- Separar estrutura de skin
- Separar contêiner e conteúdo

#### Separar estrutura de skin

Significa repetir características visuais como “**skins**” separadas, que podem ser combinadas em vários “**objetos**” para conseguir-se uma extensa gama de variações visuais sem muito código. Por exemplo: `backgrounds` e `estilos de borda`.

Por exemplo, um objeto de mídia com `class="media"` e seus componentes com `class="img"`(para componentes de imagem e vídeo) e `class="bd"` (para componentes de texto). Ao referenciar essas classes nas folhas de estilo, o HTML ganha uma  exibilidade maior; ou seja, se um novo elemento de mídia surgir nos próximos anos (como `<svg>`), ele pode receber a estilização sem que seja preciso mexer em linha de CSS.

#### Separar contêiner e conteúdo

Essencialmente quer dizer: Raramente use estilos que dependam de localização. Idealmente, um objeto deve parecer-se igual, independentemente de onde estiver na página, ou mesmo se trocar de página.

Em vez de estilizar um título secundário específico com `.myObject h2 { }`, crie e aplique uma classe que descreva o elemento em questão, como `<h2 class="category-title">`. Isso garante que:

- Todos os `<h2>` sem a classe não sejam afetados sem necessidade;
- Todos os `<h2>` com a classe tenham o mesmo estilo;
- Não é preciso criar estilos extras para os casos em que seja preciso que um `.myObject` se pareça com um `<h2>` não estilizado.

#### O que é objeto em OOCSS ?

Continuando com a metáfora de Orientação a Objetos(OO), um objeto em CSS é análogo a uma instância de uma `classe` Java ou PHP, por exemplo.

Um objeto CSS é formado por elementos:

- HTML, que pode ser ou mais nós do DOM;
- Declarações CSS, que estilizam estes nós, começando com o nome da classe referente ao wrapper;
- Componentes como imagens de background e sprites, por exemplo;
- Comportamentos JavaScript, listeners ou métodos associados.

#### Performance do OOCSS

Além de organização e reaproveitamento de códigos, OOCSS também traz o benefício da performance, que é duplo:

- Intenso reúso de código: o que signifaca menos código CSS, arquivos menores e transferências mais rápidas;
- Menos *repaints* e *reflows*: Se não sabe o que isso signifaca, leia o artigo: [O que todo desenvolvedor front-end deve saber sobre renderização de páginas web](http://desenvolvimentoparaweb.com/miscelanea/desenvolvedor-frontend-renderizacao-paginas-web/) .

#### Exemplos de uso

Chega de mais delongas e vamos para os exemplos de código, imagine que você precisa fazer um *card*, onde o mesmo possuí: cabeçalho(com: título e imagem), corpo(com: descrição) e um rodapé(com: data e autor), com OOCSS poderíamos fazer:

```markup
<div class="card">
	<header class="card-cabecalho">
		<h2 class="card-titulo titulo negrito alinhado-centro">...</h2>
		<img class="card-img img centro">
	</header>
	<section class="card-corpo">
		<p class="card-descricao texto-justificado">...</p>
	</section>
	<footer class="card-rodape">
		<time class="card-data data texto-descreto">...</time>
		<small class="card-autor texto-descreto">...</small>
	</footer>
</div>
```

Veja que possuímos várias `classes` que podem ser reutilizadas em outros cenários, por exemplo: `negrito`, `alinhado-centro`, `texto-descreto`, `texto-justificado`, `img`, `data`, etc...

#### Conclusão

A idéia do OOCSS é muito boa e nos proporciona grandes benefícios, porém exige que conhecemos muito nosso CSS, sabendo todas as classes, o que podemos ou não reaproveitar e devemos manter estruturas pré definidas, seria muito interessante caso existisse alguma maneira mais flexível e simples para organizar nosso CSS, certo ? Para isso, no próximo *post* sobre organização de CSS irei abordar o **SMACSS**.

Se preferir gravei um vídeo sobre o mesmo assunto, porém, de forma mais prática:

<iframe height="500" src="https://www.youtube.com/embed/ORrieYyipbc" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>

#### Referências:

- [Livro - CSS Eficiente](https://www.casadocodigo.com.br/products/livro-css-eficiente)
- [Wiki - Object Oriented CSS](https://github.com/stubbornella/oocss/wiki)
- [Site - Object-Oriented CSS](http://oocss.org/)
