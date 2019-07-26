---
autor: "Matheus Castiglioni"
categoria: "JavaScript"
disqus_identifier: "es6-o-javascript-do-momento-parte-02"
disqus_title: "Es6 O Javascript Do Momento Parte 02"
disqus_url: "https://blog.matheuscastiglioni.com.br/es6-o-javascript-do-momento-parte-02"
date: 2017-10-27T06:25:01-02:00
draft: false
keywords: [ "Desestruturação", "Destructuring", "ES6", "Front-End", "Web", ]
slug: "es6-o-javascript-do-momento-parte-02"
tag: [ "Desestruturação", "Destructuring", "ES6", "Front-End", "Web", ]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1549726618/es6-o-javascript-do-momento-parte-02_t7ycqq.jpg"
title: "Es6 O Javascript Do Momento Parte 02"
url: "/es6-o-javascript-do-momento-parte-02"
---

# Destructuring

Muitas vezes precisamos **extrair** o valor de algum objeto em JavaScript:

```javascript
const aluno = {nome : "Matheus", idade : "23", email : "matheushcastiglioni@gmail.com"};
console.log(aluno.nome);
console.log(aluno.idade);
console.log(aluno.email);
```

Veja que para imprimir simples informações de um JSON representando um aluno foram necessárias **três linhas** de código. Além disso, note que em três das quatros linhas temos uma grande **repetição** de código, que seria a variável onde o objeto JSON está armazenado.

Uma tarefa às vezes muito repetitiva e verbosa...

Com todos esses recursos que o JavaScript vem ganhando, e essa sendo uma tarefa muito comum no dia a dia, será que não existe uma maneira mais simples e menos verbosa como essa ?

## Desestruturando o Objeto

Considerando o nosso exemplo inicial, uma das maneiras para diminuirmos o nosso código seria devolver os atributos do objeto de uma vez, e então, dessa forma, a gente chamaria eles sem a necessidade de um objeto. Mas será que isso é possível ?

Sim é possível, para isso o JavaScript na versão [ES6](http://es6-features.org) lançou o chamado "**Desestruturação de objetos**" ou em inglês "**Destructing Object**", visando **facilitar** essa tarefa de **extração** de valores referente a um determinado objeto, mas como seria essa nova extração?

```javascript
const aluno = {nome : "Matheus", idade : "23", email : "matheushcastiglioni@gmail.com"};
const {nome, idade, email} = aluno;
console.log(nome);
console.log(idade);
console.log(email);
```

Veja que em apenas uma linha conseguimos pegar o valor de todos os atributos de nosso objeto e criar uma variável para eles, mas afinal, como foi possível imprimir o valor referente aos dados do aluno ?

Primeiramente vamos reparar na estrutura de nosso objeto, podemos notar que dentro dele existem três informações, sendo elas: Nome, Idade e Email, respectivamente os mesmos nomes de nossas variáveis informadas dentro das chaves no lado esquerdo. Então, basicamente, a desestruturação de objeto segue a seguinte sintaxe:

```javascript
[{Variáveis}] = [Objeto em JSON];
```

Então quer dizer que se tivermos um objeto:

```javascript
const fornecedor = {razaosocial : "Alura - Cursos Online", cnpj : "00.000.000/0000-00", email : "suporte@alura.com.br"};
```

> *"Basta informar no lado direito o nome dos campos dentro das chaves que eu pretendo pegar?"*

Sim, dentro das chaves é onde fazemos a assossiação dos campos que pretendemos extrair de um determinado objeto JSON.

Por exemplo, se quisermos pegar apenas a razão social do objeto `fornecedor`, podemos fazer da seguinte maneira:

```javascript
const {razaosocial} = fornecedor;
console.log(razaosocial);
```

Assim conseguimos extrair apenas a informação que precisamos, ou seja, podemos passar N campos dentro de nosso objeto.

## Cuidados com a Desestruturação de Objetos

A princípio, desestruturar um objeto parece resolver todos os nossos problemas, certo ? Mas e se informarmos um campo que não existe ?

```javascript
const {endereco} = fornecedor;
console.log(endereco);
```

Como de costume, o JavaScript não vai encontrar o campo com o nome que informamos, pois ele não existe. Sendo assim, não será realizada a associação. Em outras palavras,  a variável ficará com o valor `undefined`.

### Evitando undefined

Para evitar receber o valor `undefined` em nossas variáveis, podemos adicionar um valor *default* para elas, assim caso ela não seja encontrada, vai assumir o valor que definimos para ela:

```javascript
const {endereco = "Não informado"} = fornecedor;
console.log(endereco);
```

Mas, e se por acaso recebermos o seguinte objeto:

```javascript
const json = {a : "Matheus", b : "23", c : "matheushcastiglioni@gmail.com"};
```

Veja que, para nós, esse objeto trata-se de um aluno onde `a`, `b` e `c` são informações referente ao seu nome, idade e email respectivamente, nesse caso vamos ter que criar variáveis com esses nomes sem significado ?

Felizmente, não! A equipe responsável pelo desenvolvimento da funcionalidade já pensou nisso e criou o recurso para referenciar um objeto mas trocando seu nome na criação da variável:

```javascript
const {a:nome, b:idade, c:email} = json;
console.log(nome);
console.log(idade);
console.log(email);
```

Repare que agora informamos qual campo desejamos extrair a informação de nosso JSON, e passamos para uma nova variável com o nome logo após os dois pontos, seguindo a seguinte sintaxe:

```javascript
[{Campo_do_objeto:Nome_para_variavel}] = [Objeto];
```

Seria o mesmo que fazer:

```javascript
const nome = json.a;
const idade = json.b;
const email = json.c;
console.log(nome);
console.log(idade);
console.log(email);
```

Veja novamente como economizamos linhas e deixamos nosso código muito menos verboso! Mas então devemos usar esse tal de desestruturação sempre que precisamos extrair informações do JSON ?

Acredito que devemos usar sempre que precisamos economizar a verbosidade. Isso significa que, se precisamos pegar apenas uma informação talvez não seja tão vantajoso utilizar tal recurso.

## Desvantagens no uso da Desestruturação de Objetos

Certo, agora já mostrei as vantagens, já dei exemplos de uso... E onde ficam as desvantagens ?

Embora seja menos verboso, em algumas situações o *destructuring* pode aumentar a complexidade do código, ficando um pouco mais complicado caso você não esteja acostumado com a nova funcionalidade.

Outro ponto a destacar é que quando usamos a desestruturação sempre atribuímos os valores desejados em variáveis, sendo assim, quando uma deixar de ser usada, será necessário apagá-la manualmente.

Por último, não menos importante... Como já foi mencionado no *post*, quando passamos o nome de algum atributo que não existe dentro do nosso objeto, a variável torna-se `undefined`.

## Para saber mais

Para finalizar, também podemos utilizar a desestruturação em funções, imagine que temos uma função responsável por imprimir as informações de nossos alunos:

```javascript
function imprimeDadosDoAluno(aluno) {
    console.log(aluno.nome);
    console.log(aluno.idade);
    console.log(aluno.email);
}
imprimeDadosDoAluno(aluno);
```

Para evitar a repetição da variável aluno, podemos utilizar a nova funcionalidade:

```javascript
function imprimeDadosDoAluno({nome, idade, email}) {
    console.log(nome);
    console.log(idade);
    console.log(email);
}
imprimeDadosDoAluno(aluno)
```

Em ambas as funções e chamadas, teremos o mesmo resultado.

Caso tenha interesse em conhecer e saber [um pouco sobre a história](http://blog.matheuscastiglioni.com.br/es6-o-javascript-do-momento-parte-01).

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
