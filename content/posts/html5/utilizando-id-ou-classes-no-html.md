---
autor: "Matheus Castiglioni"
categoria: "HTML5"
disqus_identifier: "utilizando-id-ou-classes-no-html"
disqus_title: "Utilizando Id Ou Classes No Html"
disqus_url: "https://blog.matheuscastiglioni.com.br/utilizando-id-ou-classes-no-html"
date: 2018-05-22T08:36:50-02:00
draft: false
keywords: [ "class", "Front-End", "id" ]
slug: "utilizando-id-ou-classes-no-html"
tag: [ "class", "Front-End", "id" ]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1549709912/como-e-quando-utilizar-id-ou-classes-no-html_dio3qv.jpg"
title: "Utilizando Id Ou Classes No Html"
url: "/utilizando-id-ou-classes-no-html"
---

Uma dúvida muito cómum para desenvolvedores *front-end*, é referente a utilização de ID's ou classes em nossas *tag's* HTML, vejo muitos se perguntando e postando dúvidas do tipo:

- Posso utilizar o ID?
- Posso utilizar classe?
- Devo utilizar ID ou classe?
- Quando devo utilizar ID ou classe?

Para assunto desse *post* irei tentar (ou piorar rsrs) esclarecer algumas dessas perguntas.

Antes de começar, vou ressaltar que algumas respostas serão de práticas particulares, então, caso outra pessoa tenha lhe falado algo diferente é porque o modo como ela programa e escreve seus códigos de forma diferente a minha.

Existem padrões que todos (pelo menos a maioria) seguem, tais padrões definidos pela [W3C](http://www.w3c.br/Home/WebHome), mas, além desses padrões também irei compartilhar algumas práticas e outros padrões particulares (fica a seu critério utilizá-los ou não) conforme mencionado anteriormente.

Vamos nessa?

## Falando sobre os ID's

### Um ID deve ser único

Sem dúvida você já deve ter ouvido falar que um ID deve ser único na página, sabendo disso, a regra número um para sua utilização é que o mesmo não se repita. Caso você tenha mais de um ID com o mesmo valor para diferentes elementos na página, seu site não irá passar na validação da W3C, alegando que existem ID's duplicados ou repetidos.

### Usando ID para estilização

Vejo muitas pessoas perguntarem: "Posso utilizar ID's no meu CSS?", uma simples resposta: "Sim".

De fato não existe nenhuma restrição quanto á isso, o seu elemento irá receber o estilo definido sem o menor problema, porém, existem alguns cuidados que você deve tomar, sendo eles:

1. Especifidade
2. Reaproveitamento

#### Especifidade

Cuidado com a espeficidade do CSS, por exemplo:

```css
.meu-botao {
	background: red;
	color: white;
}

#meu-botao {
	background: blue;
}
```

No exemplo de código acima, o seletor CSS referente ao ID (`#`) é mais específico em relação á classes (`.`), portanto, caso o seu elemento tenha tanto essa classe quanto o ID, as regras em cómum definidas no seletor da classe serão sobreescritas pelo seletor do ID.

```markup
<button class="meu-botao" id="meu-botao">Botão</button>
```

Sabendo disso, tome cuidado, você pode ficar confuso se perguntando porque seu seletor de classe não está funcionando e pior ainda, você pode simplesmente fazer o seguinte:

```css
.meu-botao {
	background: red !important;
	color: white;
}
```

Dessa maneira o problema vai ser resolvido, porém, sabemos que devemos utilizar `!important` em exceções ou casos raros.

#### Reaproveitamento

Como não podemos definir mais de um ID para diferentes elementos não poderíamos reaproveitar códigos CSS, teríamos que criar outro ID e repetir o CSS para ele, tornando a manutenção do código muito difícil, por exemplo:

```markup
<button id="meu-botao-um">Um</button>
<button id="meu-botao-dois">Dois</button>
```

```css
#meu-botao-um, #meu-botao-dois {
	background: black;
	color: white;
	font-size: 1.2rem;
	padding: 2rem;
}

// ou

#meu-botao-um {
	background: black;
	color: white;
	font-size: 1.2rem;
	padding: 2rem;
}

#meu-botao-dois {
	background: black;
	color: white;
	font-size: 1.2rem;
	padding: 2rem;
}
```

Podemos facilmente refator os códigos para:

```markup
<button class="meu-botao">Um</button>
<button class="meu-botao">Dois</button>
```

```css
.meu-botao {
	background: black;
	color: white;
	font-size: 1.2rem;
	padding: 2rem;
}
```

Veja que dessa maneira podemos ter quantos botões quisermos, após adicionar ou remover um botão de nosso HTML não será necessário escrever ou modificar uma linha de código CSS sequer.

### Utilizando ID na URL

Uma das grandes vantagens de utilizar ID é a facilidade para navegar até aquela determinada posição da página, imagine que você tenha uma página muito grande, com vários conteúdos e seções, caso o usuário precise ir até uma determinada seção (quase no fim) será necessário rolar muitas vezes o * scroll* do *mouse*, tornando a usabilidade do site um tanto quanto crítica, como poderíamos resolver o problema? As *tag's links* além de receber uma URL também podem receber um ID.

Em situações que seja uma URL o navegador irá redirecionar a página atual para a URL fornecida pelo link, porém, se for um ID o navegador irá procurar na própria página um elemento que tenha aquele ID, caso encontre irá rolar a página até a posição onde encontra-se o elemento (técnica chamada de *hash links*).

Um bom exemplo seria:

```markup
<a href="#meus-posts">Posts</a>

<section id="meus-posts">...</section>
```

No exemplo coloquei apenas um link e uma seção, mas, imagine que tenha várias, clicando apenas no link `Posts` já iríamos até a seção de *post's* da página.

Para mim, essa sem dúvida é a melhor motivação para o uso de ID's, se precisar de algo parecido com essa situação, use sem medo.

Além de navegar até determinada seção, podemos criar *tabs* ou abas com esse recurso.

### Vinculando labels com inputs

Um bom motivo para a utilização de ID's é para realizar o vínculo de uma `label` com um `input`, mas, como assim? Um recurso que o HTML nos permite é dizer que uma determinada `label` pertence á um `input`, dessa maneira caso o usuário clique no nome, ou seja, na `label`, o focus do mouse irá automáticamente para o `input` que ela pertence. Mas como podemos fazer isso?

```markup
<label for="nome">Nome</label>
<input id="nome">
```

Veja que foi definido o atributo `for` para a `label` com o mesmo valor referente ao `id` do `input`, dessa maneira estamos dizendo:

> Olha navegador, a label com o conteúdo Nome está descrevendo (*for*) o input com ID igual á nome.

Em outras palavras precisamos apenas definir o `for` da `label` com o mesmo valor referente ao `id` de um `input`.

Sem dúvida esse é um dos melhores motivos para a utilização de ID's.

### Utilizando ID para scripts

Será que podemos utilizar os ID's dentro de nossos JavaScript's? Sim, não tem o menor problema, existem muitas discussões onde a performance para uma busca de ID é maior em relação a busca por classe, um ID poderia ser buscado de duas maneiras:

```javascript
document.querySelector("#meu-id");

// ou

document.getElementById("meu-id");
```

No segundo exemplo não é necessário informar o `#` (seletor para ID) pois a função `getElementById` já sabe que deve procurar utilizando esse seletor.

Também já vi pessoas alegando que a função `getElementById` é mais performática em relação á `querySelector` mesmo que ambos estejam sendo utilizados através de ID's.

Eu particularmente para questões de padronização gosto de buscar elementos apenas com `querySelector`.

## Falando sobre as classes

### Uma classe pode ser repetida

Ao contrário do ID uma classe pode ser definida para N elementos na página, não tem o menor problema, seu uso pode e deve ser reaproveitado.

### Usando classe para estilização

Sem dúvida é a melhor prática, sempre favoreça a estilização de CSS com classes.

### Utilizando classe para scripts

Assim como o ID, as classes também podem ser utilizadas em JavaScript, não existe nenhuma restrição quanto a isso.

Repare que sobre classes não existem muitas restrições ou regras.

### Falando sobre ID's e classes

Ambos podem ser utilizados em conjunto, podemos utilizar classes para o CSS e ID para o JavaScript, ou vice e versa, não existe nenhum bloqueio ou padrão falando que:

> Se o elemento possuir uma classe, não deve ter ID.

Ou ao contrário, portanto, eles podem serem utilizados em conjunto.

## Padrões e práticas particulares

Chegou a hora da treta (kkkk), nessa seção irei compartilhar algumas práticas e padrões que eu sigo sobe ambos.

### Estilização

Quase sempre utilizo classes para estilizar, praticamente defino classes para todos os elementos que tem estilo, por exemplo:

```markup
<ul class="lista">
	<li class="lista-item"><a class="lista-link"><i class="lista-icone"></i></a></li>
</ul>
```

Dentro do meu CSS, simplesmente faria:

```css
.lista {}
.lista-item {}
.lista-link {}
.lista-icone {}
```

Com um pré processador (por exempo o [SASS](https://sass-lang.com/)) ficaria ainda melhor e simples:

```sass
.list
	&-item
	&-link
	&-icone
```

Porém em alguns sites ou *frameworks* você pode ver algo parecido com:

```markup
<ul class="lista">
	<li><a><i></i></a></li>
</ul>
```

```css
.lista {}
.lista li {}
.lista a {}
.lista i {}
```

Esse foi apenas um exemplo, poderia ser ainda pior com mais concatenações de *tag's*.

### Estilização por especifidade

Um dos cuidados ao utilizar o ID que já foi falado é em relação a sua especifidade, portanto, você deve estar pensando:

> Se eu precisar sobrescrever uma classe vou logo utilizar ID.

Cuidado, para resolver o mesmo problema podemos simplesmente definir uma classe depois da outra, por exemplo:

```css
.meu-botao {
	background: white;
}
.meu-botao-roxo {
	background: purple;
}
```

O elemento que receber a classe `meu-botao-roxo` terá o `background` substituído de branco para roxo, isso porque ela foi declarada após a classe `meu-botao`, em outras palavras, classes que possuem regras em comúm serão sobreescritas pelas próximas declarações.

### Scripts

Também não gosto de utilizar ID's dentro do JavaScript, para buscar elementos na página (quando houver necessidade) eu gosto de utilizar classes com o prefixo `js`, por exemplo:

```markup
<button class="meu-botao js-modal"></button>
```

Veja que existe a classe `js-modal`, dessa maneira dentro do JavaScript eu busco o botão através dessa classe e crio o recurso de modal, algo parecido com:

```javascript
document.querySelector(".js-modal").on("click", () => console.log("Abrindo modal"));
```

Dessa maneira se um dia meu botão mudar para link ou qualquer outro elemento HTML, meu JavaScript ainda continuará funcionando, pois existem classes específicas para ele.

Esse prefixo também é chamado de *namespaces*.

### Resumindo

Particularmente utilizo ID apenas para trabalhar com *hash links* (técnica já comentada) e vincular `label's` com `input's` (também já comentado), do contrário sempre prefiro a utilização de classes tanto no CSS quanto no JavaScript (com prefixo).

## Conclusão

Nesse *post* falei um pouco sobre classes e ID's no HTML, quando utilizar, porque não utilizar e alguns cuidados á serem tomados, espero que se você tinha alguma dúvida, ela tenha sido solucionada.

Também apresentei algumas práticas e padrões que particularmente eu sigo, fica á seu critério seguir/gostar ou não.

Espero que você tenha gostado, não deixe de comentar ou assinar a [*newsletter*](http://eepurl.com/ggP7Rv) para receber novidades por email.

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
