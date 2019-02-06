---
autor: "Matheus Castiglioni"
categoria: "CSS3"
disqus_identifier: "criando-layouts-com-css-grid-layout"
disqus_title: "Criando Layouts Com Css Grid Layout"
disqus_url: "https://matheuscastiglioni-blog.netlify.com/criando-layouts-com-css-grid-layout"
date: 2017-10-18T06:47:58-02:00
draft: false
keywords: [ "Front-End", "Grid", "Layout", "Template", "Web" ]
slug: "criando-layouts-com-css-grid-layout"
tag: [ "Front-End", "Grid", "Layout", "Template", "Web" ]
thumbnail: "http://blog.matheuscastiglioni.com.br/arquivo/download/posts/2017/10/criando-layouts-com-css-grid-layout.jpg"
title: "Criando Layouts Com Css Grid Layout"
url: "/criando-layouts-com-css-grid-layout"
---

Imagine que um amigo, chegou em você e disse:

> Eu preciso criar um layout com um cabeçalho, um menu lateral, o conteúdo principal e um rodapé

Se você já esta acostumado a criar páginas HTML5 com CSS3 já deve ter imáginado toda a estrutura, algo parecido com:

```markup
<header>Cabeçalho</header>
<aside>Menu lateral</aside>
<main>Conteúdo principal</main>
<footer>Rodapé</footer>
```

Até ai tudo bem, certo ? Certo, mas montar a estrutura das tags é a parte mais fácil, porém agora precisamos posiciona-las da seguinte maneira:

- Header: Em cima da página
- Aside: Na parte esquerda da página
- Main: Na parte direita da página
- Footer: Em baixo da página

Com isso iremos ter o seguinte layout:

![Layout do post](http://blog.matheuscastiglioni.com.br/arquivo/download/arquivos-imagens/2017/11/css-grid-layout.jpg)

Para você que já esta pensando nos códigos e esta ancioso para começar a escrever seu `.css`, acredito que já deva estar imaginando diversas maneiras de chegar ao design que nosso amigo esta precisando:

> Posso usar flexbox, talvez eu use float, se der na louca eu utilizo o position, etc...

Pois é, normalmente eu faria esse design com `float` ou `flexbox`, iria medir o tamanho de cada elemento, adicionar um pouco de `margin` e `padding`, porém, para esse post iremos utilizar a nova *feature* do CSS chamada "**CSS Grid Layout**".

## Conheçendo o CSS Grid Layout

Como criar layouts era uma tarefa comúm no dia-á-dia e as vezes um tanto quanto chata de se implementar, a galera pensou: "Não existe nada que podemos fazer para agilisar esse processo ?", então criou-se o **CSS Grid Layout**.

Essa nova *feature* do CSS, nos permite "dizer" aos elementos onde queremos que eles fiquem, qual vai ser o tamanho deles, quanto de espaçamento vai existir, conseguimos criar "lacunas" ou "buracos" que serão preenchidos por nossas tags HTML.

### Começando com nosso código

Chega de mais delongas e vamos começar a codificar e por em prática tudo isso, a primeira parte será definir o HTML da página:

```markup
<header class="o-header">Header</header>
<aside class="o-aside">Aside</aside>
<main class="o-main">Main</main>
<footer class="o-footer">Footer</footer>
```

Com isso, iremos ter o seguinte resultado:

<iframe width="100%" height="300" src="//jsfiddle.net/mahenrique94/L90zmunL/embedded/result,html/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

Como podemos ver, tudo esta sem design, sem posicionamento e espaços.

Nosso primeiro passo será definir qual tag vai receber as "lacunas" para posteriormente adicionarmos nossos elementos. Bom, se tudo esta dentro de `body`, nenhum candidato poderia ser melhor:

```css
body {
  display: grid;
}
```

Vejam que o `display` ganhou um novo valor chamado `grid`, com isso estamos dizendo: "Olha navegador a tag body vai receber um grid, assim posso informar onde cada tag vai ficar", mas afinal, onde estamos dizendo e informando o posicionamento de cada tag ?

### Posicionando nossas tags

Para posicionar nossas tags, devemos praticamente "desenhar" no CSS, onde elas irão estarem:

```css
body {
  display: grid;
  grid-template-areas:
    "header header header"
    "aside main main"
    "footer footer footer";
}
```

Podemos ver o resultado:

<iframe width="100%" height="300" src="//jsfiddle.net/mahenrique94/L90zmunL/1/embedded/result,html,css/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

Pera ai Matheus, que maluquisse é essa ? O que é "header header header" ? Calma, vamos por partes, vou explicar as linhas que foram adicionadas.

### Entendendo o Template Areas

Com a propriedade `css-template-areas` "desenhamos" nosso *layout*, assim conseguimos informar como e por quais elementos ele vai ser composto:

- "header header header": Aqui estamos dizendo que a primeira linha vai ser composta por um *header*.
- "aside main main": Aqui estamos dizendo que a segunda linha vai ser composta por um *aside* na esquerda e por um *main* na direita.
- "footer footer footer": Aqui estamos dizendo que a terceira e última linha vai ser composta por um *footer*.

Assim conseguimos chegar no *layout* que nosso amigo estava precisando.

#### Mas por que você declarou o header e o footer três vezes ?

O *header* e *footer* foram declarados três vezes, porque estamos trabalhado com um layout de três colunas, isso deve-se ao fato da segunda linha do nosso *template*.

#### Mas por que três colunas ?

Sim, nossa segunda linha poderia ser com duas colunas "aside main" dessa forma, mas então por que repetimos o *main* duas vezes ? Repare no layout que precisamos chegar:

![Layout do post](http://blog.matheuscastiglioni.com.br/arquivo/download/arquivos-imagens/2017/11/css-grid-layout.jpg)

Veja que o *main* é um pouco maior do que o *aside*, mais precisamente, o *main* é **duas vezes** maior que o *aside*, por isso, tivemos que repetir o mesmo duas vezes, assim estamos dizendo para o *template*: "Olha template, aqui na segunda linha, vai ter um aside à esquerda e um main à direita, porém, o main deve ser duas vezes maior que o aside".

Resultando em nosso *layout* de três colunas: "aside main main", então por isso, na primeira e terceira linha devemos também ter três colunas.

Legal, agora eu entendi e tirei minhas dúvidas, vamos então dizer aos elementos que eles devem ficar naquelas "lacunas".

### Dizendo aos elementos onde devem ficar

Para dizer aos elementos onde eles devem ficar, ou seja, qual "lacuna" é de cada um, precisamos ir em um por um deles e informar:

```css
.o-header {
  grid-area: header;
}

.o-aside {
  grid-area: aside;
}

.o-main {
  grid-area: main;
}

.o-footer {
  grid-area: footer;
}
```

Assim, teremos o seguinte resultado:

<iframe width="100%" height="300" src="//jsfiddle.net/mahenrique94/L90zmunL/2/embedded/result,html,css/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

Veja que cada um esta em sua devida posição, repare também que o nome informado na propriedade `grid-area` deve ser **exatamente** igual aos nomes dados no `grid-template-areas`, seguindo nosso *layout* esta faltando apenas setar a cor dos elementos, certo ?

```css
.o-header, .o-aside, .o-main, .o-footer {
  background: #BC20E2;
  color: #FDFDFD;
}
```

E novamente, nosso resultado:

<iframe width="100%" height="300" src="//jsfiddle.net/mahenrique94/L90zmunL/3/embedded/result,html,css/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

Mas espera ai, nosso *layout* possuí espaçamentos e ocupam a página toda, até agora esta tudo junto e ocupando apenas o tamanho necessário.

### Dando espaçamentos entre os elementos

Vamos então, informar o espaço que devem haver entre os elementos:

```css
body {
	grid-gap: 1rem;
}
```

Com isso, os elementos já devem estar espaçados em `1rem` que seria `16px`:

<iframe width="100%" height="300" src="//jsfiddle.net/mahenrique94/L90zmunL/4/embedded/result,html,css/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

Falta apenas eles ocuparem a página toda

### Dizendo o tamanho dos elementos

Para dizer o tamanho que cada *row*(linha) ou *column*(coluna) devem ter, precisamos também dizer ao nosso template:

```css
body {
  grid-template-columns: auto auto auto;
  grid-template-rows: auto 100vh auto;
}
```

Repare novamente que tanto nossas columns ou rows, estão sendo informadas três vezes, isso porque temos um *layout* de três colunas e três linhas, veja também que apenas para a segunda linha declaramos o valor `100vh` que corresponde a altura total da *viewport*, as demais linhas serão automáticas.

Por padrão o valor será `auto`, mas apenas descrevi para você saber que pode estar mudando, para saber quais valores podem ser setados, consulte a documentação: [grid-template-columns](https://developer.mozilla.org/pt-BR/docs/Web/CSS/grid-template-columns) e [grid-template-rows](https://developer.mozilla.org/pt-BR/docs/Web/CSS/grid-template-rows).

Com isso, devemos ter o seguinte resultado:

<iframe width="100%" height="300" src="//jsfiddle.net/mahenrique94/L90zmunL/5/embedded/result,html,css/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

Bem próximo relacionado á necessidade de nosso amigo.

### Dando os toques finais

Para sanar a necessidade de nosso amigo e entregar o *layout* para ele, vou fazer apenas algumas melhorias no design:

<iframe width="100%" height="300" src="//jsfiddle.net/mahenrique94/L90zmunL/6/embedded/result,html,css/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

Pronto, agora já podemos realizar a entrega do projeto. Caso tenha necessidade o projeto pode ser baixado [aqui](https://github.com/mahenrique94/css-grid-layout).

Caso ainda tenha ficado alguma dúvida ou você prefere assistir em vez de ler, segue o vídeo gravado sobre o mesmo assunto em meu canal no youtube:

<iframe width="560" height="500" src="https://www.youtube.com/embed/HBlBNAtFcdw" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>

E ae, você já conhecia o [CSS Grid Layout](https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_Grid_Layout) ? Não deixe de comentar.
