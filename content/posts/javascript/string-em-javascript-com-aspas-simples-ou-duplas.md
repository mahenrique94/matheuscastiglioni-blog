---
autor: "Matheus Castiglioni"
categoria: "JavaScript"
disqus_identifier: "string-em-javascript-com-aspas-simples-ou-duplas"
disqus_title: "String Em Javascript Com Aspas Simples Ou Duplas"
disqus_url: "https://matheuscastiglioni-blog.netlify.com/string-em-javascript-com-aspas-simples-ou-duplas"
date: 2018-06-27T09:15:43-02:00
draft: false
keywords: [ "Front-End", "String", "Web" ]
slug: "string-em-javascript-com-aspas-simples-ou-duplas"
tag: [ "Front-End", "String", "Web" ]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1549707261/string-em-javascript-com-aspas-simples-ou-duplas_5b32b84f285d0_bg_dnsgz0.png"
title: "String Em Javascript Com Aspas Simples Ou Duplas"
url: "/string-em-javascript-com-aspas-simples-ou-duplas"
---

Uma dúvida que muitos *dev's* tem é referente a utilização de `String` na linguagem [JavaScript](https://pt.wikipedia.org/wiki/JavaScript), será que devemos declará-las com aspas 'simples' ou "duplas"? Nesse *post* tentarei explicar um pouco mais de cada abordagem e ajudar á você resolver como declará-las.

## Simples x Duplas

A verdade é que para o JavaScript não faz diferença se você declara uma `String` com aspas simples ou duplas, para ele as duas maneiras são declarações válidas para uma `String`.

A grande competição por escolher um ou outro é puramente por gosto particular de cada desenvolvedor, muitos preferem simples, porém, outros preferem duplas. Claro que ambos os casos temos vantagens e desvantagens.

### Vantagens das aspas duplas

Imagine que você precise escrever a seguinte `String`:

> It's a new game

Ou:

> I'm a Front-End developer

Se estivermos utilizando aspas simples, para ambos as frases devemos escapar a aspa, da seguinte maneira:

```javascript
console.log('It\'s a new game');
console.log('I\'m a Front-End developer');
```

Veja que é um pouco chato escrever esse código, porém, se você utilizar aspas duplas, esse *escape* não é necessário:

```javascript
console.log("It's a new game");
console.log("I'm a Front-End developer");
```

Dessa maneira o código ficou mais limpo e simples de ser escrito.

### Vantagens das aspas simples

Mas, em contrapartida se você precisar destacar alguma palavra com aspas duplas, vai existir a mesma necessidade de escapar as aspas, por exemplo:

> TypeScript é uma "linguagem" de programação

Para escrever essa frase com aspas duplas, assim como fizemos anteriormente, devemos escapar as aspas dentro da `String`:

```javascript
console.log("TypeScript é uma \"linguagem\" de programação");
```

Esse exemplo é um pouco mais chato, pois, tem a necessidade de realizar dois *escapes*, um para cada aspa.

Porém, utilizando aspas simples, esse *escape* não é necessário:

```javascript
console.log('TypeScript é uma "linguagem" de programação');
```

Portanto, ambas abordagens possuem seus pontos positivos e negativos.

### Saiba mais

Para evitar esse tipo de necessidade em realizar o *escape* podemos utilizar [Template Literals](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/template_strings) também conhecido como [Template String](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/template_strings), da seguinte maneira:

```javascript
console.log(`It's a new game`);
console.log(`I'm a Front-End developer`);
console.log(`TypeScript é uma "linguagem" de programação`);
```

Simplesmente trocamos as aspas por crases (também chamado de acentos graves).

Declarando `String's` dessa forma, dificilmente será necessário realizar *escapes* para aspas, tanto dupla quanto simples.

## Conclusão

Algumas pessoas dizem uma abordagem ser mais performática do que a outra ou economizar mais espaço, mas, na minha opinião é tudo ilusão, ambos possuem o mesmo tamanho e performance.

O interessante é você criar um padrão particular ou seguir o da sua empresa, dessa meneira, independente se vai adotar a abordagem com aspas simples ou duplas, mantenha um padrão utilizando apenas uma abordagem (de preferência por projeto).

Grandes empresas como Google, Airbnb e Facebook gostam e utilizam `String's` com aspas simples.

Fique a seu critério utilizar a forma que mais lhe agrada ou convém.

Se você gostou, não deixe de assinar a [*newsletter*](http://eepurl.com/ggP7Rv) e receber novidades toda semana.

Você também poder aprender mais com os [vídeos do canal](https://www.youtube.com/channel/UCSrG4Y5uz0dcSfi_2qMQdGQ).

Além dos conteúdos você também pode apoiar o blog ou canal através do [apoia-se](https://apoia.se/mahenrique94)
