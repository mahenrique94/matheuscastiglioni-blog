---
autor: "Matheus Castiglioni"
categoria: "JavaScript"
disqus_identifier: "trabalhando-com-datas-em-javascript-com-momentjs"
disqus_title: "Trabalhando Com Datas Em Javascript Com Momentjs"
disqus_url: "https://matheuscastiglioni-blog.netlify.com/trabalhando-com-datas-em-javascript-com-momentjs"
date: 2018-03-15T08:05:58-02:00
draft: false
keywords: [ "Biblioteca", "Calendário", "Datas", "Front-End", "Lib", "Manipulação", "MomentJS", "Web" ]
slug: "trabalhando-com-datas-em-javascript-com-momentjs"
tag: [ "Biblioteca", "Calendário", "Datas", "Front-End", "Lib", "Manipulação", "MomentJS", "Web" ]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1549717677/manipulando-datas-com-momentjs_zj93nd.jpg"
title: "Trabalhando Com Datas Em Javascript Com Momentjs"
url: "/trabalhando-com-datas-em-javascript-com-momentjs"
---

Trabalhar com datas nunca é tão fácil, independente da linguagem que estamos utilizando, exige um certo cuidado e esforço, pensando nisso, nesse *post* vou tentar simplificar e facilitar a nossa vida, apresentando a biblioteca [MomentJS](https://momentjs.com/), com ela, manipulação e criação de datas em JavaScript torna-se muito fácil, está pronto? Então vamos nessa.

## Conhecendo a MomentJS

A biblioteca MomentJS realiza criações, parses, manipulações, validações e conseguimos mostrar as datas e horas, entre outras diversas funcionalidades, ela pode ser instalada de diferentes maneiras em nosso projeto, a mais simples é realizar o [download](https://momentjs.com/downloads/moment.js) ou se preferir o [download minificado](https://momentjs.com/downloads/moment.min.js) e simplesmente copiar o conteúdo para um arquivo `.js` dentro do projeto, assim, podemos importá-lo através da tag `script`.

Ela também pode ser instalada via gerenciadores de pacote como `yarn` ou `npm`:

### Realizando a instalação com o Yarn:

Para realizar a instalação com o Yarn, podemos utilizar o comando `add`:

```bash
yarn add moment
```

### Realizando a instalação com o Npm:

Para realizar a instalação com o Npm, podemos utilizar o comando `install`:

```bash
npm install moment --save
```

Ou de forma abreviada:

```bash
npm i moment --save
```

Também podemos utilizar outros gerenciadores e maneiras de instalção, que podem ser consultados na [documentação](https://momentjs.com/docs/#/use-it/).

Por falta de instalação que você não deixará de conhecê-la ou utilizá-la.

## Começando a usar

Para começarmos a utilizar a MomentJS devemos realizar o download de seu [arquivo minificado](https://momentjs.com/downloads/moment.min.js) (de preferência), como informado anteriormente, após ter o arquivo criado, precisamos importá-lo em nossa página:

```markup
<script src="assets/js/moment.min.js" type="text/javascript"></script>
```

## Utilizando a MomentJS

Pronto, já devemos ter tudo importado, configurado e instalado, portanto, já podemos começar a utilizar a MomentJS.

Para pegar a data atual, podemos simplesmente invocar a função `moment`, ela irá devolver um objeto que funciona como um *wrapper* para o `Date` do JavaScript.

### Pegando a data e hora atual

```js
const agora = moment();
```

Seria a mesma coisa que realizarmos:

```js
const agora = moment(new Date());
```

Ou, com JavaScript puro (Vanilla JS):

```js
const agora = new Date();
```

Outras maneiras de obter a data atual seria:

```js
const agora = moment([]);
const agora = moment({});
```

**Obs**: Essas duas últimas maneiras funcionam apenas da versão 2.14.0 em diante, antes dela o comportamento de ambos será diferente.

### Passando uma data como parâmetro

Mas Matheus, eu queria poder passar uma data para a criação, isso é possível? Sim, para isso, precisamos simplesmente passá-la como `String` para a função `moment`:

```js
const dataNascimento = moment("1994-05-25");
```

Também podemos passar uma data com hora:

```js
const dataNascimentoPrecisa = moment("1994-05-25 13:00");
```

### Informando o formato da data

Também podemos passar uma data no formato que desejamos, para isso, como segundo parâmetro devemos dizer qual parte da `String` representa os pedaços da data, ou seja, qual parte é o mês, dia ou ano, em outras palavras, qual a formatação da data.

```js
const dataNascimento = moment("25/05/1994", "DD/MM/YYYY");
```

Epa, calma ai, que doidera é essa de `DD/MM/YYYY`? Esses são os formatos para representação de datas, cada um deles tem um significado:

- **D** ou **DD**: Dia do mês de 1 à 31.
- **M** ou **MM**: Mês do ano de 1 à 12.
- **YYYY**: Ano com quatro (4) dígitos.

Além desses formatos, existem outros, por exemplo:

- **YY**: Ano com dois (2) dígitos.
- **MMM** ou **MMMM**: Nome do mês por extenso.
- **DDD** ou **DDDD**: Dia do ano de 1 à 365.

Para saber todos os formatos, consulte a [documentação](https://momentjs.com/docs/#/parsing/string-format/).

Assim como no primeiro exemplo, também podemos passar uma data com hora no formato que desejamos, lembrando apenas de informar a formatação:

```js
const dataNascimentoPrecisa = moment("25/05/1994 13:00", "DD/MM/YYYY HH:mm");
```

Veja que para as horas também temos formatos, sendo eles:

- **H** ou **HH**: Hora no formato 24, ou seja, de 00 à 23.
- **m** ou **mm**: Minutos de 0 à 59.

Além dos formatos utilizados, também podemos contar com:

- **h**ou **hh**: Hora no formato 12, ou seja, AM e PM.
- **s** ou **ss**: Segundos de 0 à 59.
- **S**, **SS** ou **SSS**: Segundo fracionados de 0 à 999.

Novamente, para saber todos os formatos, consulte a [documentação](https://momentjs.com/docs/#/parsing/string-format/).

Mas, como podemos garantir que a data passada está no mesmo formato que desejamos? Assunto que veremos no próximo tópico.

### Verificando se o formato está correto

O primeiro parâmetro deve respeitar a formatação do segundo. Para isso, como terceiro parâmetro podemos informar um `booleano`, dizendo para a Moment verificar se o formato combina exatamente com a data passada:

```js
const dataNascimento = moment("25/05/1994", "DD/MM/YYYY", true);
```

Tudo certo, pois, passamos a data no mesmo formato, agora e se passarmos uma data com hora?

```js
const dataNascimento = moment("25/05/1994 13:00", "DD/MM/YYYY", true);
```

No segundo exemplo, a data está correta? Não, passamos uma data com hora, porém, na formatação informamos apenas a data sem hora, portanto, a mesma será uma data inválida.

Tudo bem Matheus, você falou que a data será inválida, mas como podemos confirmar isso? Para verificar se uma data é inválida ou não, podemos utilizar a função `isValid`:

```js
const dataNascimento = moment("25/05/1994 13:00", "DD/MM/YYYY", true);
console.log(dataNascimento.isValid());
```

Pronto, em nosso console será impresso `false`, para testarmos, vamos retirar a hora e passar apenas data:

```js
const dataNascimento = moment("25/05/1994", "DD/MM/YYYY", true);
console.log(dataNascimento.isValid());
```

Agora como saída do console, temos `true`.

### Informando um locale

Além dos parâmetros já mencionados anteriormente, também podemos passar um *locale* para nossa data, assim, a data pode utilizar o idioma inglês `en` ou português `pt`, o *locale* deve ser informado como terceiro parâmetro:

```
const data = moment("25/05/1994", "DD/MM/YYYY", "pt", true);
```

Como podemos ver, o parâmetro para verificação de formato mudou para o quarto, portanto, as formas (básicas) para criar uma data são:

```
moment(String, String); // Data, Formato
moment(String, String, String); // Data, Formato, Locale
moment(String, String, Boolean); // Data, Formato, Verificar Formato
moment(String, String, String, Boolean); // Data, Formato, Locale, Verificar Formato
```

Bom, agora já sabemos criar uma data de diversas maneiras (básicas), para confirmar todas as maneiras consulta a [documentação](https://momentjs.com/docs), o que mais podemos fazer com MomentJS?

![Gif pensando no que podemos fazer com o MomentJS](https://res.cloudinary.com/mahenrique94/image/upload/v1549717739/gif-homem-pensando_nidvdd.gif)

## Clonando data

Podemos realizar clones de data de uma maneira muito simples, através da função `clone`:

```js
const agora = moment();
const dataClonada = agora.clone();
```

Ou de forma mais simplista, podemos passar um objeto como parâmetro para o `moment`:

```js
const agora = moment();
const dataClonada = moment(agora);
```

Assim, a data passada como parâmetro será uma nova data.

## Pegando partes da data

Com toda certeza vamos precisar pegar (*get*) pedaços de uma determinada data, para isso temos as funções de `get`, sendo elas:

- **millisecond** ou **milliseconds**: Pega os milisegundos de uma determinada data.
- **second** ou **seconds**: Pega os segundos de uma determinada data.
- **minute** ou **minutes**: Pega os minutos de uma determinada data.
- **hour** ou **hours**: Pega a hora de uma determinada data.
- **date** ou **dates**: Pega o dia de uma determinada data.
- **day** ou **days**: Pega o dia da semana de uma determinada data.
- **month** ou **monthds**: Pega o mês de uma determinada data.
- **year** ou **years**: Pega o ano de uma determinada data.

Para saber todas as partes que podemos extrair de uma data, consulte a [documentação](https://momentjs.com/docs/#/get-set/).

```js
const agora = moment();

console.log(agora.date()); // Imprimindo o dia
console.log(agora.month()); // Imprimindo o mês
console.log(agora.year()); // Imprimindo o ano
console.log(agora.hour()); // Imprimindo a hora
console.log(agora.minute()); // Imprimindo os minutos
console.log(agora.second()); // Imprimindo os segundos
```

Além dessa maneira, também podemos utilizar a função `get` e passar como parâmetro uma `String`  referente ao nome da informação que queremos pegar:


```js
const agora = moment();

console.log(agora.get("date")); // Imprimindo o dia
console.log(agora.get("month")); // Imprimindo o mês
console.log(agora.get("year")); // Imprimindo o ano
console.log(agora.get("hour")); // Imprimindo a hora
console.log(agora.get("minute")); // Imprimindo os minutos
console.log(agora.get("second")); // Imprimindo os segundos
```

Essas são as maneiras (simples) que podemos extrais informações e valores de nossas datas, mas, e caso surja a necessidade de setar (*set*) alguma informação, como posso fazer?

**Obs**: Tanto para pegar como para setar, o mês começa em 0, ou seja, de 0 à 11 onde 0 é Janeiro e 11 é Dezembro.

## Setando valores para a data

O jeito mais simples para setar (*set*) algum valor em nossa data, é através das mesmas funções que utilizamos para pegar (*get*), fazendo uma pequena modificação, devemos informar o valor que desejamos setar como parâmetro para as funções:

```js
const agora = moment();

agora.date(25); // Setando o dia
agora.month(4); // Setando o mês
agora.year(1994); // Setando o ano
agora.hour(13); // Setando a hora
agora.minute(00); // Setando os minutos
agora.second(00); // Setando os segundos
```
Nesse exemplo, será criado um objeto com a data referente ao dia **25/05/1994 13:00:00**.

**Obs**: Tanto para pegar como para setar, o mês começa em 0, ou seja, de 0 à 11 onde 0 é Janeiro e 11 é Dezembro.

Além dessa maneira, também podemos utilizar a função `set` que recebe dois parâmetros:

- **Primeiro**: Qual informação desejamos setar em nossa data, por exemplo: mês, dia, hora, etc...
- **Segundo**: O valor que desejamos setar.

```js
const agora = moment();

agora.set("date", 25); // Setando o dia
agora.set("month", 4); // Setando o mês
agora.set("year", 1994); // Setando o ano
agora.set("hour", 13); // Setando a hora
agora.set("minute", 00); // Setando os minutos
agora.set("second", 00); // Setando os segundos
```

Esses são os exemplos que temos para pegar (*get*) e setar (*set*) valores em uma data.

## Adicionando valores em uma data

Caso tenha a necessidade de adicionar valor em nossa data, podemos utilizar a função `add`:

```js
const agora = moment();
agora.add(2, "year"); // também pode ser no plural, ou seja, years
```

No exemplo acima, foi adicionado dois anos para a data atual, repare que a função recebe dois parâmetros, sendo eles:

- **Primeiro**: O valor que desejamos adicionar.
- **Segundo** Qual informação que desejamos adicionar

Em versões mais antigas da MomentJS, você pode ver os parâmetros em ordem contrária, porém, a forma contrária foi depreciada, ou seja, está em desuso.

Podemos utilizar alguns atalhos na digitação da informação, sendo eles:

Chave | Abreviação
----- | ----------
years | y
months | M
days | d
hours | h
minutes | m
seconds | s

Esses são apenas alguns exemplos de atalhos (*shorthands*), para visualizar todos, consulte a [documentação](https://momentjs.com/docs/#/manipulating/add/).

A adição também pode ser intercalada com várias chamadas, por exemplo:

```js
data.add(7, "d").add(1, "y").add(10, "minutes");
```

Veja que no exemplo acima adicionei 7 (sete) dias, 1 (um) ano e 10 (dez) minutos para um determianda data.

## Retirando valores em uma data

Assim como podemos adicionar, também podemos retirar utilizando a função `subtract`, seguindo a mesma ideia da função `add`:

```js
const agora = moment();
agora.subtract(3, "hours");
```

Dessa maneira, estou retirando 3 (três) horas da data atual.

## Formantando datas

Para formatar datas podemos utilizar a função `format` passando como parâmetro uma `String` onde uma formatação deve ser passada, seguindo a ideia já mencionada anteriormente durante a criação de datas, caso tenha esquecido, abaixo vou listar algumas opções:

- **D** ou **DD**: Dia do mês de 1 à 31.
- **M** ou **MM**: Mês do ano de 1 à 12.
- **YYYY**: Ano com quatro (4) dígitos.
- **YY**: Ano com dois (2) dígitos.
- **MMM** ou **MMMM**: Nome do mês por extenso.
- **DDD** ou **DDDD**: Dia do ano de 1 à 365.
- **H** ou **HH**: Hora no formato 24, ou seja, de 00 à 23.
- **m** ou **mm**: Minutos de 0 à 59.
- **h**ou **hh**: Hora no formato 12, ou seja, AM e PM.
- **s** ou **ss**: Segundos de 0 à 59.
- **S**, **SS** ou **SSS**: Segundo fracionados de 0 à 999.

Dessa maneira, para formatarmos uma data no formato que estamos acostumados, podemos fazer da seguinte maneira:

```js
const agora = moment();
console.log(agora.format("DD/MM/YYYY HH:mm"));
```

No console, será impresso uma data e hora no formato brasileiro: `25/05/1994 10:00`.

Para saber todas as possíveis formatações que podem ser feitas, leia a [documentação](https://momentjs.com/docs/#/displaying/format/).

Bom, essas foram apenas algumas funções que a MomentJS nos fornece, podemos ir muito mais além, mas o *post* iria se extender muito.

E aí, gostou? Já conhecia a MomentJS? Não deixe de comentar e se inscrever na [*newsletter*](http://eepurl.com/ggP7Rv) para receber novidades de *posts*.
