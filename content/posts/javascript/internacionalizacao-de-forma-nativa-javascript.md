---
autor: "Matheus Castiglioni"
categoria: "JavaScript"
disqus_identifier: "internacionalizacao-de-forma-nativa-javascript"
disqus_title: "Internacionalização De Forma Nativa em Javascript"
disqus_url: "https://blog.matheuscastiglioni.com.br/internacionalizacao-de-forma-nativa-javascript"
date: 2019-08-28T22:06:58-03:00
draft: false
keywords: ["Front-End", "Internacionalização", "i18n", "Web"]
slug: "internacionalizacao-de-forma-nativa-javascript"
tag: ["Front-End", "Internacionalização", "i18n", "Web"]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1567040896/Featured-1_1_q3iigq.jpg"
title: "Internacionalização De Forma Nativa em Javascript"
url: "/internacionalizacao-de-forma-nativa-javascript"
---

Normalmente ao desenvolver aplicações *web* é bem comum que a mesma seja acessada ou precisa suportar idiomas diferentes, ou seja, precisamos ter nosso site com mensagens e conteúdos em português, inglês, espanhol, etc...

Mas, como podemos fazer isso? Vamos "copiar e colar" o projeto e sair trocando todas as mensagens? Depois subir vários projetos na *web* e configurar endereços diferentes para cada um?

Essas práticas parecem não fazerem muito sentido e em algum momento se tornarão impraticáveis.

Para resolver esses problemas, normalmente vamos atrás de algumas bibliotecas que tornam nossas aplicações/sites em multí idiomas, isso é chamado de internacionalização (*internacionalization*) ou de maneira abreviada `i18n`.

Nesse *post* vamos ver como internacionalizar datas e números em JavaScript sem utilizar nenhuma biblioteca, em outras palavras, vamos ver como formatar nossas datas e números em multí idiomas de forma nativa com JavaScript.

## Conhecendo a Intl

A API responsável por realizar essa "tradução" é a `Intl`.

Dentro dessa API vamos usar três classes: `DateTimeFormat`, `NumberFormat` e `RelativeTimeFormat`. Como os próprios nomes já dizem:

- `DateTimeFormat`: Será responsável por "traduzir" nossas datas.
- `NumberFormat`: Será responsável por "traduzir" nossos números.
- `RelativeTimeFormat`: Será responsável por "traduzir" intervalos de tempo.

### Usando a DateTimeFormat

Imagine que temos uma seguinte data: `01/01/2019 às 10:00`. Como podemos criar um novo objeto `Date` para representá-la?

```javascript
const d = new Date('2019-01-01T10:00:00.000Z')
```

Essa é apenas uma das maneiras de criar e representar essa data.

Agora, imagine que precisamos formatá-la e mostrá-la no padrão brasileiro e americano, onde:

- Brasileiro: Vamos formatá-la com DD/MM/YYYY.
- Americano: Vamos formatá-la com MM/DD/YYYY.

Onde:

- `DD`: Será o dia.
- `MM`: Será o mês.
- `YYYY`: Será o ano completo.

Antes de mais nada, precisamos criar nosso `DateTimeFormat` (ele será nosso formatador):

```javascript
const d = new Date('2019-01-01T10:00:00.000Z')
const df = new Intl.DateTimeFormat('pt')
```

Repare que como parâmetro da criação, nós informamos a localidade daquele idioma.

Agora podemos pedir para ele formatar nossa data:

```javascript
const d = new Date('2019-01-01T10:00:00.000Z')
const df = new Intl.DateTimeFormat('pt')
console.log(df.format(d))
```

Em nosso console será impresso a seguinte data:

```
"01/01/2019"
```

E se quisermos mostrar o mês por extenso? Vamos precisar passar algumas opções de formatação para nosso `DateTimeFormat`, sendo elas:

```javascript
const d = new Date('2019-01-01T10:00:00.000Z')
const df = new Intl.DateTimeFormat('pt', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
})
```

Agora, podemos realizar a formatação novamente:

```javascript
const d = new Date('2019-01-01T10:00:00.000Z')
const df = new Intl.DateTimeFormat('pt', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
})
console.log(df.format(d))
```

E teremos em nosso console:

```
"1 de janeiro de 2019"
```

Aaah, e nossa formatação americana? Simplesmente podemos criar um outro `DateTimeFormat` informando a localização `en`:

```javascript
const d = new Date('2019-01-01T10:00:00.000Z')
const df = new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
})
console.log(df.format(d))
```

Que teremos no *console*:

```
"January 1, 2019"
```

### Usando a NumberFormat

A formatação e utilização do `NumberFormat` é muito parecida com a `DateTimeFormat`. Resumindo, precisamos criar um novo formatador pasando para ele a localidade do nosso idioma.

Antes de mais nada, precisamos criar nosso número à ser formatado:

```javascript
const n = 1000000
```

Agora, precisamos criar nosso formatador:

```javascript
const n = 1000000
const df = new Intl.NumberFormat('pt').format(n)
```

E por último, vamos pedir para ele formatar nosso número:

```javascript
const n = 1000000
const df = new Intl.NumberFormat('pt').format(n)
console.log(df.format(n))
```

Será impresso no console:

```
"1.000.000"
```

Caso seja necessário trabalhar com moedas, podemos passar um opção para nosso formatador:

```javascript
const n = 1000000
const df = new Intl.NumberFormat('pt', {
    style: 'currency',
    currency: 'BRL'
}).format(n)
console.log(df.format(n))
```

E teremos no console:

```
"R$ 1.000.000,00"
```

Assim como fizemos para o `DateTimeFormat`, para formatarmos o número em outro formato, basicamente passamos a localidade durante a criação do formatador:

```javascript
const n = 1000000
const df = new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD'
}).format(n)
console.log(df.format(n))
```

Teremos no console:

```
"US$ 1.000.000,00"
```

### Usando a RelativeTimeFormat

Assim como as demais classes, a `RelativeTimeFormat` não podia ser diferente, precisamos criar um novo formatador passando a localidade e pedir para ele formatar algum intervalo de tempo:

```javascript
const df = new Intl.RelativeTimeFormat('pt')
console.log(df.format(-1, 'day'))
```

Será impresso em nosso console:

```
"há 1 dia"
```

Também podemos passar para ele formatar em relação a mês ou ano, tanto no passado ou no futuro:

```javascript
const df = new Intl.RelativeTimeFormat('pt')
console.log(df.format(-1, 'day'))
console.log(df.format(-1, 'month'))
console.log(df.format(-1, 'year'))
console.log(df.format(5, 'day'))
console.log(df.format(5, 'month'))
console.log(df.format(5, 'year'))
```

Teremos em nosso console:

```
"há 1 dia"
"há 1 mês"
"há 1 ano"
"em 5 dias"
"em 5 meses"
"em 5 anos"
```

E também podemos pedir para a formatação ser realizada com a localidade americano:

```javascript
const df = new Intl.RelativeTimeFormat('en')
console.log(df.format(-1, 'day'))
console.log(df.format(-1, 'month'))
console.log(df.format(-1, 'year'))
console.log(df.format(5, 'day'))
console.log(df.format(5, 'month'))
console.log(df.format(5, 'year'))
```

Em nosso console teremos:

```
"1 day ago"
"1 month ago"
"1 year ago"
"in 5 days"
"in 5 months"
"in 5 years"
```

## Saiba mais

Porque a abreviação é `i18n`? A palavra *internacionalization* começa com `i`, termina com `n` e no meio das duas letras (inicial e final) existem 18 letras, ou seja:

- `i`
- `nternacionalizatio` (18 letras)
- `n`

Resultando em `i18n`.

## Conclusão

Nesse *post* vimos como podemos formatar as datas e números em nossa aplicação de maneira internacionalizável, ou seja, eles serão formatados e motrados de acordo com cada localidade.

Abraços até a próxima.


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
