---
autor: "Matheus Castiglioni"
categoria: "JavaScript"
disqus_identifier: "utilizando-reduce-do-javascript-sem-medo"
disqus_title: "Utilizando Reduce Do Javascript Sem Medo"
disqus_url: "https://blog.matheuscastiglioni.com.br/utilizando-reduce-do-javascript-sem-medo"
date: 2018-05-09T11:49:02-02:00
draft: false
keywords: [ "ES6", "Front-End" ]
slug: "utilizando-reduce-do-javascript-sem-medo"
tag: [ "ES6", "Front-End" ]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1549710266/utilizando-reduce-do-javascript-sem-medo_zfhdn5.jpg"
title: "Utilizando Reduce Do Javascript Sem Medo"
url: "/utilizando-reduce-do-javascript-sem-medo"
---

Muitos desenvolvedores(as) tem um certo medo de utilizar e trabalhar com o [Reduce](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce), nesse *post* irei explicar e falar um pouco sobre o mesmo, tentanto fazer com que você entenda e seja capaz de utilizá-lo ao término da leitura, vamos nessa?

## Conhecendo o Reduce

Para você que ainda não conhece o Reduce, o mesmo é uma função (*feature*) para *arrays* introduzida na versão ES6 do JavaScript. A ideia é que para cada elemento de um *array* o Reduce execute uma função de *callback*, além dela, o Reduce também possuí um acumulador onde o mesmo pode ser incrementado a cada execução da função.

## Calculando a média de notas

Imagine que você tenha um *array* de notas:

```javascript
const notas = [1, 5, 8, 3, 7, 10, 9, 4];
```

Como você faria para calcular média de delas? Simples né? Com um `for` resolvemos o problema.

O primeiro passo, seria ter uma variável para armazenar a soma total de notas e a futura média:

```javascript
let soma = 0;
let media = 0;
```

Feito isso, precisamos interar sobre todas as notas e somá-las junto a variável `soma`:

```javascript
for (let i = 0; i < notas.length; i++) {
  soma += notas[i];
}
```

Maravillha, por último, precisamos pegar a soma de todas as notas e dividir pela quantidade total, assim, teremos a média delas:

```javascript
media = soma / notas.length;
```

Tudo certo, para conferir os valores vamos imprimí-los no *console* do navegador:

```
console.log(soma);
console.log(media.toFixed(2));
```

![Conferindo valor das variáveis soma e media](https://res.cloudinary.com/mahenrique94/image/upload/v1549710327/post-reduce-conferindo-variaveis-soma-media_guadlp.png)

Como você pode ver, foram impresos os valores `47` e `5.88` (arredondado), assim, temos nosso código funcionando como esparávamos.

O código completo fica da seguinta maneira:

```javascript
const notas = [1, 5, 8, 3, 7, 10, 9, 4];
let soma = 0;
let media = 0;

for (let i = 0; i < notas.length; i++) {
  soma += notas[i];
}

media = soma / notas.length;

console.log(soma);
console.log(media.toFixed(2));
```

A variável `soma` foi logada apenas para você ver que a soma foi feita corretamente, mas, nosso alvo é apenas a `media`.

## Melhorando com Reduce

Veja que o código ficou meio grande para uma simples necessidade, será que não podemos melhorá-lo?

![Gif pensando em melhorar como código](https://res.cloudinary.com/mahenrique94/image/upload/v1549710400/gif-bob-esponja-pensando-com-caderno-na-mao_kjkb19.gif)

Sim, podemos, essa é a ideia de utilizar o Reduce.

O primeiro passo será trocar nosso for, pelo Reduce, como podemos fazer isso? Calma, vamos por partes. O Reduce é uma função de *arrays* para isso, devemos utilizar nosso *array* `notas` para chamá-la:

```javascript
notas.reduce();
```

Para que o Reduce funcione da forma que precisamos, devemos passar dois parâmetros para ele, a `soma` total das notas e a `nota` atual que estamos iterando no *array*:

Utilizando `function`:

```javascript
notas.reduce(function(soma, nota));
```

Utlizando `arrow function`:

```javascript
notas.reduce((soma, nota));
```

Certo, para cada iteração devemos pegar o valor da nota atual, somá-la á variável `soma` e retornar o valor da soma para a próxima iteração:

Utilizando `function`:

```javascript
notas.reduce(function(soma, nota) {
  return soma += nota;
});
```

Utlizando `arrow function`:

```javascript
notas.reduce((soma, nota) => soma += nota);
```

Por último, devemos definir um valor inicial para nossa variável `soma`:

Utilizando `function`:

```javascript
notas.reduce(function(soma, nota) {
  return soma += nota;
}, 0);
```

Utlizando `arrow function`:

```javascript
notas.reduce((soma, nota) => soma += nota, 0);
```

Pronto, com isso, já teremos nossa soma total de notas:

Utilizando `function`:

```javascript
const soma = notas.reduce(function(soma, nota) {
  return soma += nota;
}, 0);
```

Utlizando `arrow function`:

```javascript
const soma = notas.reduce((soma, nota) => soma += nota, 0);
```

Caso queira, poderíamos fazer tudo em uma única linha:

```javascript
const media = notas.reduce((soma, nota) => soma += nota, 0) / notas.length;
```

**Obs:** O mesmo poderia ser feito utlizando `function`.

Assim, teríamos o mesmo resultado.

O código completo fica da seguinte maneira:

```javascript
const notas = [1, 5, 8, 3, 7, 10, 9, 4];
let media = notas.reduce((soma, nota) => soma += nota, 0) / notas.length;

console.log(media.toFixed(2));
```

## Conclusão

Nesse *post* você vi uma função de *arrays* chamada Reduce, ela basicamente segue a seguinte sintaxe:

```javascript
array.reduce((acumulador, indice_atual) => uma_funcao_de_callback, valor_inicial_acumulador);
```

Além dos parâmetros `acumulador` e `indice_atual`, também podemos passar o `indice` e o `array` que está executando o Reduce.

Espero que você tenha gostado, não deixe de comentar e se inscrever na [*newsletter*](http://eepurl.com/ggP7Rv) para receber novidades por email, até a próxima.
