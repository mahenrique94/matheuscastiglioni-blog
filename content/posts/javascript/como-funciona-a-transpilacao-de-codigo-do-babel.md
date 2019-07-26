---
autor: "Matheus Castiglioni"
categoria: "JavaScript"
disqus_identifier: "como-funciona-a-transpilacao-de-codigo-do-babel"
disqus_title: "Como Funciona a Transpilação De Código Do Babel"
disqus_url: "https://blog.matheuscastiglioni.com.br/como-funciona-a-transpilacao-de-codigo-do-babel"
date: 2019-06-12T22:59:00-03:00
draft: false
keywords: ["Babel", "Front-End", "Transpilação", "Transpiler", "Web"]
slug: "como-funciona-a-transpilacao-de-codigo-do-babel"
tag: ["Babel", "Front-End", "Transpilação", "Transpiler", "Web"]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1560391564/1_yl42Tqet103wA6seNUBLXA_rvjaho.jpg"
title: "Como Funciona a Transpilação De Código Do Babel"
url: "/como-funciona-a-transpilacao-de-codigo-do-babel"
---

Hoje em dia quando estamos trabalhando com a linguagem JavaScript é comum utilizarmos seus recursos, funcionalidades e sintaxes modernas. Porém, esse uso pode acabar trazendo problemas de compatibilidade entre navegadores, vamos imaginar o seguinte cenário:

Precisamos criar uma função que irá receber um nome como parâmetro e retornar uma mensagem: `Olá, NOME`, onde `NOME` será o nome passado como parâmetro, podemos fazer algo parecido com:

```javascript
const ola = nome => `Olá, ${nome}`
```

Poderíamos fazer essa implementação de vários jeitos, eu optei por essa.

Legal, vamos testá-la?

```javascript
console.log(ola('Matheus'))
```

Teremos a saída `Olá, Matheus` em nosso *console*.

![Comemorando o sucesso da função](https://res.cloudinary.com/mahenrique94/image/upload/v1549725673/gif-animado-minions_ofx2l3.gif)

Então, temos a função e tudo está funcionando, assim, já podemos entregar nossa *feature*, certo? Sim, mas, a função foi testada em um navegador atualizado (moderno), no caso, o [Google Chrome v74.0.3729](https://www.google.com/intl/pt-BR/chrome/), agora vai a pergunta:

> Será que nossa função funciona de maneira correta em outros navegadores?

![Gif pensando na pergunta](https://res.cloudinary.com/mahenrique94/image/upload/v1549720568/gif-pensativo-simpsons_bd9lhd.gif)

Se testarmos no [Firefix](http://www.mozilla.org/pt-BR/firefox/new/) e [Safari](https://www.apple.com/br/safari/) (poderíamos testar em mais) ela irá funcionar da mesma maneira, porém, se testarmos ela no [Internet Explorer 11(IE11)](https://www.microsoft.com/pt-br/download/internet-explorer.aspx) a mesma não irá funcionar, vamos ter um erro referente a sintaxe do nosso código.

Porque isso está acontecendo? O que acontece é que até o momento o IE11 ainda não implementou ou adicionou compatibilidade para o uso de `const`, dessa maneira, ele não entende esse trecho de código.

Como podemos resolver esse problema? Uma solução bem simples será a gente trocar a `const` por algo que ele entenda, no caso, poderíamos substituir o uso de `const` por `var`:

```javascript
var ola = nome => `Olá, ${nome}`
```

Porém, agora vamos ter outro problema que é referente ao uso da *arrow function*, ele também não entende e não sabe interpretar esse trecho de código, assim como fizemos para o `const`, vamos trocar a *arrow function* por uma função normal do JavaScript:

```javascript
var ola = function(nome) {
    return `Olá, ${nome}`
}
```

Maravilha, agora nosso código irá funcionar tanto para os navegadores modernos quanto para os antigos.

Mas, será que realmente precisamos abrir mão de utilizar códigos e recursos novos para dar suporte a navegadores antigos? Será que nossos usuários iram utilizar navegadores como Internet Explorer?

Abrir mão de um ou outro pode acabar não sendo a melhor das opções, então, será que não existe alguma maneira de termos os dois? Existe, para isso que foi criado o [Babel](https://babeljs.io/).

## Conhecendo o Babel

O Babel é um compilador JavaScript, ou seja, com ele a gente consegue converter códigos modernos do JavaScript para códigos mais antigos, esse processo de ler um código novo e converter para velho é chamado de **transpilação**, ou seja, ele vai transpilar nosso código novo para um antigo. Dessa maneira, conseguimos escrever nossos códigos fontes em versões mais novas como ao primeiro exemplo:

```javascript
const ola = nome => `Olá, ${nome}`
```

E, pedir para o Babel transpilar esse código moderno para algo mais antigo:

```javascript
"use strict";

var ola = function ola(nome) {
  return "Ol\xE1, ".concat(nome);
};
```

Sim, esse será o código transpilado, se você quiser testar, o Babel tem um [repl](https://babeljs.io/repl) onde é possível fazer testes online.

Legal, conseguimos atingir o objetivo que queríamos, vamos escrever códigos novos e ainda teremos compatibilidade com navegadores mais antigos.

![Comemorando a apresentação do Babel](https://res.cloudinary.com/mahenrique94/image/upload/v1549720706/ezgifcom-optimize_sjfvuv.gif)

Mas, como o Babel faz essa transpilação?

## Entendendo a transpilação

A transpilação é algo mágico? Simplesmente recebe um código e sai outro? Como funciona o processo? Perguntas como essas eu irei testar responder ao longo do *post*.

Para que o Babel consiga fazer esse processo de transpilação, alguns passos são necessários, sendo eles:

![Passos para a transpilação do Babel](https://res.cloudinary.com/mahenrique94/image/upload/v1560393404/1_cW9IvHMO5fBRNbjw2NW44Q_a86hbb.png)

Sendo eles:

1. Parser
2. Traverse
3. Generate

Calma, a gente vai entender cada um deles.

### Parser

O primeiro passo referente ao **Parser** é onde o `parser` do Babel irá parsear o código JavaScript para uma estrutura chamada AST (*Abstract Syntax Tree*), para esse processo de parseamento é utilizado o `@babel/parser`.

A ideia desse passo é mapear todo nosso código JavaScript em pequenos nós, onde cada nó é uma representação do nosso código e esses nós são conectados uns aos outros.

Dado o nosso exemplo:

```javascript
const ola = nome => `Olá, ${nome}`
```

Vamos ver como fica a AST dele?

![AST do nosso exemplo](https://res.cloudinary.com/mahenrique94/image/upload/v1560394059/Screen_Shot_2019-06-12_at_23.46.10_cf2pqh.png)

Caso a imagem esteja muito pequeno o exemplo pode ser encontrado [aqui](https://astexplorer.net/#/gist/eade451e30df397eaa8f355f77ff8a8a/977fd2f27f889f3edbec4c3ac2999e61358a99fa).

Se você quiser ver a AST dos seus códigos, pode estar usando o [https://astexplorer.net/](https://astexplorer.net/).

Repare que no `body` do  `Program` a gente tem um nó referente a declaração de variável `VariableDeclaration`, depois temos um nó para a nossa *arrow function* `ArrowFunctionExpression` e por fim temos o nó referente a *template string* `TemplateLiteral`.

Com isso, o Babel já sabe onde está cada nó em nosso código fonte(linhas e colunas) e sabe como deve substítuí-los.

### Traverse

Nesse momento a AST montada anteriormente está sendo manipulada para gerar uma nova referente ao código transpilado, basicamente ele vai substituir os nós modernos para nós antigos. O pacote responsável por esse passo é o `@babel/traverse`.

### Generate

Esse é o último passo, o *generate* basicamente vai pegar a nova AST e voltá-la para código JavaScript. O pacote responsável por esse passo é o `@babel/generator`.

Basicamente é assim que funciona o processo de transpilação de um código JavaScript moderno para um código JavaScript antigo feito pelo Babel.

### Saiba mais

Apenas á título de curiosidade, não só o Babel faz esse processo de montar um AST á partir de um código fonte, outros compiladores também fazem isso, a `V8` da Google por exemplo, faz algo parecido durante a execução de JavaScript no navegador Google Chrome (assunto para o próximo *post*).

## Conclusão

Nesse *post* expliquei como é o processo de transpilação de um código JavaScript moderno para um código antigo feito pelo Babel, também vimos o que são as AST's e porque elas são necessárias.

E aí, você já sabia como era feita essa transpilação? Não deixe de comentar. Caso tenha gostado desse *post*, você pode estar assinando nossa [*newsletter*](http://eepurl.com/ggP7Rv) e ficar por dentro das novidades.

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

## Referências:

- https://medium.com/the-guild/this-is-how-i-build-babel-plug-ins-b0a13dcd0352
- https://itnext.io/parse-react-components-with-babel-and-visualize-them-45062046cb72
