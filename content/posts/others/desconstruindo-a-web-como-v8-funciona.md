---
autor: "Matheus Castiglioni"
categoria: "Outros"
disqus_identifier: "desconstruindo-a-web-como-v8-funciona"
disqus_title: "Desconstruindo a Web: Como a V8 Funciona?"
disqus_url: "https://blog.matheuscastiglioni.com.br/desconstruindo-a-web-como-v8-funciona"
date: 2019-08-14T20:50:10-03:00
draft: false
keywords: [ "Browser", "Browser Engine", "Engine", "V8", "Web" ]
slug: "desconstruindo-a-web-como-v8-funciona"
tag: [ "Browser", "Browser Engine", "Engine", "V8", "Web" ]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1565054731/13478_rzodrk.jpg"
title: "Desconstruindo a Web: Como a V8 Funciona?"
url: "/desconstruindo-a-web-como-v8-funciona"
---

Continuando a série sobre *posts's* explicando um pouco como as coisas funcionam por debaixo dos panos no desenvolvimento web, esse é o quinto *post* da série, caso você tenha perdido e queira ver os anteriores:

- [Desconstruindo a Web: Arquitetura De Multi Processos Do Chromium](https://blog.matheuscastiglioni.com.br/desconstruindo-a-web-arquitetura-de-multi-processos-do-chromium/)
- [Desconstruindo a Web: Pilha De Execução Do Javascript](https://blog.matheuscastiglioni.com.br/desconstruindo-a-web-pilha-de-execucao-do-javascript/)
- [Desconstruindo a Web: Renderização De Páginas](https://blog.matheuscastiglioni.com.br/desconstruindo-a-web-renderizacao-de-paginas/)
- [Desconstruindo a Web: Estilização De Páginas](https://blog.matheuscastiglioni.com.br/desconstruindo-a-web-estilizacao-de-paginas/)

Nesse *post* vamos falar um pouco sobre a **V8**, ou seja, o que ela é, o que ela faz, como ela funciona, etc...

## O que é V8?

Antes de mais nada, o que é essa tal de V8? A V8 é um motor JavaScript de código aberto (*open source*), basicamente ela é a responsável por executar nossos códigos JavaScript dentro do navegador Google Chrome, ou seja, ela irá ler os códigos que escrevemos e compilar para *byte code*.

Todo navegador possuí um motor JavaScript, a V8 é referente ao Google Chrome, mas, existem outros motores para os demais navegadores:

- **V8: Google Chrome**
- WebKit: Safari
- SpiderMonkey: Firefox
- Chakra: Edge (antes de mudar para V8)
- entre outros...

Mas, como eles fazem para rodar nossos códigos JavaScript?

## Como o JavaScript é lido?

O primeiro passo será obter o código JavaScript, isso é feito através de *tags* especiais, no caso de arquivos e códigos JavaScript, a tag especial é `script`.

Quando o *browser* (navegador) lê uma *tag* `script` ele sabe que precisa lidar com códigos JavaScript, o primeiro passo será baixá-lo (caso seja uma fonte externa) ou executá-lo.

Uma vez que o *browser* tem acesso aos códigos JavaScript (seja após o *download* ou leitura da *tag* `script`), é hora de lê-lo e executá-lo. Nesse momento que entre em cena os motores JavaScript dos navegadores.

## Entendendo como os motores funcionam

Agora que o motor foi acionado, o mesmo irá passar por alguns passos até gerar os *bytes codes*, sendo eles:

1. Pegar o código JavaScript.
2. Parsear o JavaScript.
3. Montar a AST.
4. Interpretar a AST.
5. Gerar o bytecode.

Podemos ver o fluxo ilustrado na imagem abaixo:

![Fluxo da V8](https://res.cloudinary.com/mahenrique94/image/upload/v1565824770/1_ZIH_wjqDfZn6NRKsDi9mvA_s60v62.png)

Vamos dar uma passada por cada um dos passos:

### Pegar o código JavaScript

Nesse momento é realizada a leitura o código JavaScript, o mesmo é obtido como vimos anteriormente, através da *tag* `script`.

### Parsear o JavaScript

Nesse momento será feito um parseamento do JavaScript, durante o processo de *parser* é feito uma [análise lexa e tokenização](https://pt.wikipedia.org/wiki/Análise_léxica).

A ideia é buscar por palavras reservadas em nossos códigos JavaScript, ou seja, procurar por `if`, `class`, `const`, `function`, etc...

Uma vez que essas palavras (*tokens*) forem encontradas, o *parser* sabe do que se trata, exemplo:

```javascript
const nome = 'Matheus'
```

No trecho de código acima, o *parser* sabe que trata-se de uma declaração de variável. Isso porque ele rodou sua análise e identificou a palavra reservada `const` (onde const é um token).

### Montar a AST

Uma vez que o parseamento está finalizado, uma AST (Árvore de Sintaxe Abstrata) é criada.

A AST é uma árvore onde será definido o que cada trecho de código está fazendo, por exemplo:

![Exemplo de AST da V8](https://res.cloudinary.com/mahenrique94/image/upload/v1565825200/lazy-parsing-ast_ak80xv.png)

Veja que no exemplo acima temos o seguinte código:

```javascript
var hi = 'Hello' + 'World'
```

Uma simples declaração e criação de variável com uma `String` concatenada que será igual á `Hello World`.

Repare que esse pequeno trecho de código montou sua AST, onde temos `VariableDeclarator` (declaração de variável), `Identifier` (nome da variável) e `StringLiteral` (o texto da variável).

### Interpretar a AST

Após criar e montar a AST, será a hora de passar pelo interpretador da V8, ele será o responsável por ler a AST e gerar o *byte code* necessário para ela.

### Gerar o bytecode

Após o interpretador ser executado devemos ter nosso *byte code*.

Por fim, podemos ter o seguinte *byte code* para um simples código JavaScript:

![Byte code de um código JavaScript](https://res.cloudinary.com/mahenrique94/image/upload/v1565825656/1_aal_1sevnb-4UaX8AvUQCg_i926ie.png)

## Saiba mais

Caso você tenha mais curiosidade sobre o assunto, sugiro criar um arquivo `.js` qualquer, por exemplo `v8.js` com o seguinte conteúdo:

```javascript
const nome = 'Matheus'
console.log(nome)
```

E pedir para o Node interpretar e executar nosso arquivo:

```bash
node v8
```

**Obs**: A extensão `.js` é opcional.

Será impresso `Matheus` no terminal, porém, podemos pedir para o Node imprimir o *byte code* gerado para esse arquivo, isso pode ser feito com o parâmetro `--print-bytecode`:

```bash
node --print-bytecode v8
```

E aproveite a leitura.

## Conclusão

Nesse *post* vimos o que são os motores de JavaScript e qual suas importâncias para os navegadores. Também vimos como o motor JavaScript do Google Chrome chamado V8 faz parar ler um código JavaScript e gerar seu *byte code*.

E aí, você já conhecia a V8? Não deixe de comentar.

Abraços, até a próxima.

## Referências

- [Understanding V8’s Bytecode](https://medium.com/dailyjs/understanding-v8s-bytecode-317d46c94775)
- [Understanding How the Chrome V8 Engine Translates JavaScript into Machine Code](https://www.freecodecamp.org/news/understanding-the-core-of-nodejs-the-powerful-chrome-v8-engine-79e7eb8af964/)

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
