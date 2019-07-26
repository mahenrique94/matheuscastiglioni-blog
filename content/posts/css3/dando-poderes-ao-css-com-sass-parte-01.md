---
autor: "Matheus Castiglioni"
categoria: "CSS3"
disqus_identifier: "dando-poderes-ao-css-com-sass-parte-01"
disqus_title: "Dando Poderes Ao Css Com Sass Parte 01"
disqus_url: "https://blog.matheuscastiglioni.com.br/dando-poderes-ao-css-com-sass-parte-01"
date: 2018-02-21T05:31:38-02:00
draft: false
keywords: [ "SASS", "Pré Processador" ]
slug: "dando-poderes-ao-css-com-sass-parte-01"
tag: [ "SASS", "Pré Processador" ]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1549719669/dando-poderes-ao-css-com-sass_omralt.png"
title: "Dando Poderes Ao Css Com Sass Parte 01"
url: "/dando-poderes-ao-css-com-sass-parte-01"
---

Pois é, se você leu o título e achou estranho fique tranquilo, a ideia é transformar nosso CSS em um super herói com super poderes:

> CSS with superpowers

Como podem ver, esse é o *slogan* que o próprio SASS usa, "CSS com super poderes".

## O que é SASS?

SASS é uma linguagem de extensão para o CSS, com ela conseguimos escrever códigos que não seriam possíveis apenas com CSS puro, por isso, eles costumam chamar esses recursos (*features*) ou extensões adicional de "**super poderes**".

A ideia do *post* não é focar muito em "**o que é**" e sim "**o que faz**", portanto, caso deseja saber mais informações sobre o SASS, sugiro acessar a [página oficial](https://sass-lang.com/).

## Instalando o SASS

Para não extender mais o *post* não irei abordar a forma de instalar o SASS em sua máquina, pois, a mesma pode ser feita de diferentes formas baseando-se no sistema operacional a ser utilizado.

Para realizar a instalação do SASS, leia a [documentação](https://sass-lang.com/install) e escolha de acordo com seu sistema operacional, acredito que o processo não deve ser complicado, basta seguir as instruções.

## Escrevendo nosso primeiro código

Para escrever códigos utilizando a linguagem (vou chamar de linguagem por questões de facilidade) SASS devemos criar arquivos com duas extensões diferentes, sendo elas: `.sass` ou `.scss`, agora, com toda certeza do mundo você deve estar se perguntando:

> Porque duas extensões diferentes?
> Qual a diferença entre elas?
> Qual eu devo utilizar?

![Gif caveira pensativa](https://res.cloudinary.com/mahenrique94/image/upload/v1549719708/gif-caveira-pensativa_kwz6vj.gif)

## Entendendo a diferença de extensões

Basicamente a única diferença entre as extensões `.sass` e `.scss` é referente a sintaxe, os arquivos `.scss` são bem parecidos com os `.css`, com chaves e pontos e virgulas, porém, os arquivos `.sass` não utilizam chaves ou pontos e virgulas, veja um exemplo:

Abaixo um exemplo de um arquivo utilizando a sintaxe do `.sass`:

```sass
.botao
    background: #00FF99
    border: 1px solid #DCDCDC
    border-radius: 5px
    color: #FDFDFD
    padding: .5rem 1.2rem
```

Agora um arquivo utilizando a sintaxe do `.scss`:

```scss
.botao {
    background: #00FF99;
    border: 1px solid #DCDCDC;
    border-radius: 5px;
    color: #FDFDFD;
    padding: 0.5rem 1.2rem;
}
```

Essa é a diferença entre ambos, o modo de escrever, um parece bastante com o CSS normal, enquanto o outro fica um pouco mais diferente, porém, ambos podem utilizar todo o poder que o SASS tem a nos oferecer.

Para continuar o exemplo do *post* vou abordar a sintaxe do `.sass`.

## Executando o SASS

Para executar o SASS devemos acessar o terminal (mac ou linux) ou cmd (windows), o mesmo pode ser executado de duas maneiras diferentes:

### Compilando

Apenas para compilar um arquivo em SASS podemos utilizar `sass ARQUIVO.[sass ou scss]`, seguido por dois pontos (`:`) e pelo nome do arquivo de saída, assim o mesmo será compilado para um ou mais arquivos `.css`.

```bash
sass ARQUIVO.[sass ou scss]:Nome_do_arquivo.css
```

### Compilando e observando

O exemplo anterior apenas compila e finaliza, para continuar escutando modificações nos arquivos devemos passar o parâmetro `--watch`, ficando da seguinte maneira:

```bash
sass ARQUIVO.[sass ou scss]:Nome_do_arquivo.css --watch
```

### Compilando em arquivo mínificado

Podemos também já pedir para o SASS gerar um arquivo `.css` mínificado:

```bash
sass ARQUIVO.[sass ou scss]:Nome_do_arquivo.css --watch --style compressed
```

## Conhecendo os poderes do SASS

Agora vamos começar a ver os poderes que o SASS introduz a linguagem CSS, vou mostrá-los de forma separada, sendo assim, ao término do *post* você deve ser capaz de mesclá-los e formar seus arquivos.

### Variáveis

Um dos grandes poderes do SASS é a utilização de [variáveis](https://sass-lang.com/documentation/file.SASS_REFERENCE.html#variables_) (eu sei que hoje em dia podemos utilizar tal recurso apenas com CSS puro):

```sass
$cor: #FDFDFD

.botao
    background: #00FF99
    border: 1px solid #DCDCDC
    border-radius: 5px
    color: $cor
    padding: .5rem 1.2rem
```

Vejam que devemos seguir a seguinte sintaxe:

### Criando a variável

Para criar a variável devemos utilizar o cifrão ou dolar (`$`) seguido pelo seu nome, dois pontos (`:`) e seu valor:

```sass
$NOME_VARIAVEL: VALOR
```

### Lendo variável

Para ler o valor armazenado em uma variável, precisamos apenas informar o seu nome seguido pelo cifrão ou dolar (`$`):

```sass
$NOME_VARIAVEL
```

**Obs:** Uma observação sobre as variáveis é que elas possuem escopo, portanto:

Código válido:

```sass
$cor: #FDFDFD

.botao
    background: #00FF99
    border: 1px solid #DCDCDC
    border-radius: 5px
    color: $cor
    padding: .5rem 1.2rem
```

Código inválido:

```sass
.botao
    $cor: #FDFDFD
    background: #00FF99
    border: 1px solid #DCDCDC
    border-radius: 5px
    color: $cor
    padding: .5rem 1.2rem

.outro-botao
    color: $cor
```

A variável `cor` existe apenas no escopo do `.botao`.

### Nested Rules

Tenho toda certeza do mundo que você já viu, leu ou escreveu um código CSS parecido com:

```css
.menu {
    align-items: center;
    display: flex;
}
.menu__list {
    display: inline-block;
}
.menu__item {
    margin-right: .5rem;
}
.menu__link {
    display: block;
}
```

Veja o tanto de repetições da classe `.menu`, será que não existe algo menos verboso? Pois dessa maneira, se um dia precisarmos mudar o nome da classe de nosso menu, deveremos procurar onde estamos à informando e substituí-la pelo seu novo valor.

Pensando nisso o pessoal do SASS criou o [Nested Rules](https://sass-lang.com/documentation/file.SASS_REFERENCE.html#nested_rules), poderíamos substituir o código anterior por:

```sass
.menu
    align-items: center
    display: flex
    &__list
            display: inline-block
    &__item
            margin-right: .5rem
    &__link
            display: block
```

Como pode ver, declaramos a classe pai apenas uma vez, nesse caso a nossa classe `.menu`, depois utilizamos o `&` para informar filhos de `.menu`, repare que os filhos devem ser informados seguindo a indentação do código, ou seja, deve ser informado dentro de `.menu`.

O Nested Rule também pode ser utilizado com pseudo classes (*pseudo-class*) ou pseudo elementos (*pseudo-elements*):

```css
.menu__link {
    display: block;
}
.menu__link:hover {
    color: #00CC99;
}
```

Poderíamos facilmente trocar por:

```sass
.menu
    &__link
            display: block
    &:hover
            color: #00CC99
```

Ainda teríamos o mesmo resultado.

### Nested Properties

No exemplo anterior aprendemos a declarar elementos pais e filhos, mas, também podemos seguir a mesma ideia com atríbutos:

```css
.botao {
    font-family: Arial;
    font-size: 1.2rem;
    font-weight: bold;
}
```

Aqui, veja novamente o quanto esse código pode ser melhorado, estamos repetindo muitas vezes a palavra `font-`, será que não podemos fazer da mesma maneira, ou seja, definir um pai e informar os filhos? Sim, isso é chamado de [Nested Properties](https://sass-lang.com/documentation/file.SASS_REFERENCE.html#nested_properties):

```sass
.botao
    font:
        family: Arial
        size: 1.2rem
        weight: bold
```

Ambos os códigos possuem o mesmo resultado visual.

### Herdando atributos

Se você conhece linguagens [orientadas á objetos](https://pt.wikipedia.org/wiki/Orienta%C3%A7%C3%A3o_a_objetos), com certeza já deve ter ouvido falar em herança, pois é, com SASS também podemos fazer uso de tal recurso (poder), imagine que temos o esqueleto de um botão seguido por seus estilos:

```css
.botao {
    border: 1px solid transparent;
    border-radius: 5px;
    display: inline-block;
    font-size: .9rem;
    padding: .5rem .75rem;
}
.botao--verde {
    background: #00FF00;
    border-color: #00FF00;
}
.botao--vermelho {
    background: #FF0000;
    border-color: #FF0000;
}
```

Esse código irá funcionar sem problemas, porém em nosso HTML será necessário informar duas vezes as classes do botão, uma para o esqueleto e outra para o estilo, conhecido como [CSS Orientado à Objetos](http://blog.matheuscastiglioni.com.br/organizando-seu-codigo-css-parte-01)

```markup
<button class="botao botao--verde">Verde</button>
<button class="botao botao--vermelho">Vermelho</button>
```

Com o SASS podemos facilmente diminuir o código à seguir:

```sass
$vermelho: #FF0000
$verde: #00FF00

.botao
    border: 1px solid transparent
    border-radius: 5px
    display: inline-block
    font-size: .9rem
    padding: .5rem .75rem
    &--vermelho
            @extend .botao
            background: $vermelho
            border-color: $vermelho
    &--verde
            @extend .botao
            background: $verde
            border-color: $verde
```

Veja que estamos utilizando `@extend`, assim, dizemos para ele herdar todos os atributos de uma determinada classe, em nosso caso, estamos herdando de `.botao`.

Agora em nosso HTML, precisamos adicionar apenas uma classe referente aos nossos botões, pois a mesma já possuí todos os atríbutos da herdada:

```markup
<button class="botao--verde">Verde</button>
<button class="botao--vermelho">Vermelho</button>
```

### Importando arquivos

Se você já fez algum site ou práticou um pouco de HTML e CSS, já deve ser deparado com a seguinte situação:

```markup
<link href="arquivo1.css" rel="stylesheet" type="text/css" />
<link href="arquivo2.css" rel="stylesheet" type="text/css" />
<link href="arquivo3.css" rel="stylesheet" type="text/css" />
```

Estamos tendo múltiplos arquivos importados em nosso HTML, com SASS poderíamos possuir os *imports* em um único arquivo:

```sass
@import arquivo1
@import arquivo2
@import arquivo3
```

Veja que não informamos a extensão `.sass` nos *imports*, porque a extensão é opcional, o próprio SASS sabe que deve importar um arquivo com extensão `.sass` ou `.scss`.

Para o *post* não ficar muito extenso vou parar por aqui, nos próximos *posts* irei abordando mais poderes do SASS.

Caso queira treinar ou praticar a sintaxe do SASS, existe um editor e compilador online chamado [SassMeister](https://www.sassmeister.com/).

E você, já conhecia o SASS? Não deixe de comentar.

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
