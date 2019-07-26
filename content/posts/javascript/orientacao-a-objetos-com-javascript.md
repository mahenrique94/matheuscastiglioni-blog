---
autor: "Matheus Castiglioni"
categoria: "JavaScript"
disqus_identifier: "orientacao-a-objetos-com-javascript"
disqus_title: "Orientacao a Objetos Com Javascript"
disqus_url: "https://blog.matheuscastiglioni.com.br/orientacao-a-objetos-com-javascript"
date: 2018-04-02T08:01:02-02:00
draft: false
keywords: [ "Classes", "Linguagens", "Objetos", "POO", "Programação", "Programação Orientada á Objetos" ]
slug: "orientacao-a-objetos-com-javascript"
tag: [ "Classes", "Linguagens", "Objetos", "POO", "Programação", "Programação Orientada á Objetos" ]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1549716467/orientacao-a-objetos-com-javascript_wqzn80.jpg"
title: "Orientacao a Objetos Com Javascript"
url: "/orientacao-a-objetos-com-javascript"
---

Umas das maneiras mais populares de programarmos é utilizando o modelo [Orientado à Objetos](https://pt.wikipedia.org/wiki/Orienta%C3%A7%C3%A3o_a_objetos), dessa maneira, conseguimos criar um reaproveitamento e organização de código muito grande, consequentemente tornando a manutenção do mesmo mais fácil e simples.

## Programação Orientada á Objetos

Podemos dizer que orientação á objetos basicamente é um modelo de programação baseado na criação de Classes (receitas de bolo), nelas definimos como (atributos) e o que (métodos ou funções) nossos objetos irão ser ou fazer, como o assunto do *post* trata-se de aplicar esse modelo em JavaScript, não irei entrar muito em detalhes, para entender melhor o conceito, recomendo o artigo [Orientação a objetos](https://pt.wikipedia.org/wiki/Orienta%C3%A7%C3%A3o_a_objetos).

## Definindo nossa receita de bolo

Como foi dito anteriormente, nossas Classes são parecidas com receitas de bolo, sabendo disso, como podemos começar essa criação? Imagine uma classe do tipo `Pessoa`, pensando em **como** uma pessoa deve ser, ou seja, o que uma pessoa tem, o que podemos definir?

```js
classe Pessoa

tem Nome
tem Idade
tem Sexo
tem Data de Nascimento
```

Claro que uma pessoa poderia ter muito mais coisas, mas para simplificar, vamos definir apenas esses quatro itens. Com certeza, essa não deve ser a maneira de representar classes em JavaScript, então, como podamos fazer isso?

## Criando nossa classe

Partindo do exemplo anterior, vamos transformar nossa receita de bolo em uma classe JavaScript, á partir da versão [ES6](https://medium.com/@matheusml/o-guia-do-es6-tudo-que-voc%C3%AA-precisa-saber-8c287876325f), esse processo tornou-se mais simples, o primeiro passe é definirmos um nome para a classe:

```js
Pessoa
```

Certo, agora, precisamos informar onde a classe começa (`{`) e onde termina (`}`):

```js
Pessoa {

}
```

Veja que foi utilizado chaves para definir início e fim, assim como fazemos com funções ou blocos de códigos (`if`, `for`, `while`, etc...), mas, em momento algum dizemos para o JavaScript que isso é uma classe, até o momento é apenas uma palavra Pessoa seguinda por chaves, para definirmos uma classe podemos utilizar a palavra reservada `class` assim como nas demais linguagens OO como Java, PHP, Kotlin, etc...

```js
class Pessoa {

}
```

Certo, agora sim, temos nossa classe definida.

## Descrevendo nossos atributos

Ainda seguindo a ideia da receita de bolo, podemos ver que a receita possuí ingredientes, ou seja, para fazermos o bolo devemos ter ovos, farinha, leite, etc...

Os ingredientes da receita são chamados de atributos em classes, assim como fizemos mais cedo utilizando o `tem nome`, `tem idade`, etc... Então, como podemos definir o que uma classe pessoa tem? Para isso podemos utilizar construtores (*constructors*).

```js
class Pessoa {

  constructor(nome, idade, sexo, dataDeNascimento) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
    this.dataDeNascimento = dataDeNascimento;
  }

}
```

Mas afinal, o que isso é isso de construtor (*constructor*)? Calma, logo tudo vai ser explicado.

Legal, definimos nossa classe, demos um nome para ela e definimos seus atributos, o próximo passo será criar um comportamento (método) para ela.

## Criando comportamentos

Pensando em comportamentos de uma pessoa, o que poderíamos criar? Toda pessoa deve ser capaz de dizer o seu nome e sua idade, ou seja, se apresentar, então, vamos criar esse comportamento:

```js
class Pessoa {

  constructor(nome, idade, sexo, dataDeNascimento) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
    this.dataDeNascimento = dataDeNascimento;
  }

  apresentar() {
    console.log(`Ola, meu nome é ${this.nome}, eu tenho ${this.idade} anos`);
  }

}
```

Um comportamento basicamente é uma função dentro de nossa classe, definimos e criamos de forma parecida com funções (*functions*) normais em JavaScript, omitindo apenas a palavra reservada *function*.

O comportamento de nossa classe `Pessoa` será apenas um `console.log` dizendo seu nome e sua idade, algo parecido com:


> Olá, meu nome é Matheus, eu tenho 23 anos.

Para evitar o concatenamento de `Strings` foi utilizado o [Template String](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/template_strings), também um novo recurso da versão ES6.

Uma pergunta que você deve estar se fazendo é: This? o que é this? quem é this? Ambas serão respondidas no próximo tópico.

## Referenciando a própria classe

Pois é, se você já leu o assunto desse tópico algumas respostas para o `this` já devem ter sido respondidas, sendo algumas delas:

- Quem é this?
- Para que serve o this?
- Porque usar o this?
- Quando usar o this?

Vamos lá, tentarei respondê-las da forma mais simples e resumida possível.

### Quem é this?

Quando utilizamos `this` trata-se do próprio escopo atual onde o mesmo está sendo referenciado, ou seja, dentro da classe o `this` nada mais é do que uma referência da própria classe.

### Para que serve o this?

Para referenciarmos a própria classe (tratando-se apenas de OO) dentro de funções ou métodos.

### Porque usar o this?

Para referênciar atributos ou funções da própria classe dentro de outras funções da mesma classe.

### Quando usar o this?

Quando precisa-se invocar ou pegar valores de atributos ou funções da própria classe.

## Criando nosso objeto

Pronto, já temos a estrutura de nossa classe definida e criada, para você que se perdeu, segue abaixo o esqueleto completo:

```js
class Pessoa {

  constructor(nome, idade, sexo, dataDeNascimento) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
    this.dataDeNascimento = dataDeNascimento;
  }

  apresentar() {
    console.log(`Ola, meu nome é ${this.nome}, eu tenho ${this.idade} anos`);
  }

}
```

Tudo certo, como podemos começar a utilização de nossas classes para as criações de objetos? Podemos criar nossos objetos através da palavra reservada `new` seguida pelo nome da classe que desejamos instânciar (criar um objeto):

```js
const matheus = new Pessoa("Matheus", 23, "Masculino", "25/05/1994");
```

Veja que parece com uma invocação de função passando alguns parâmetros.

Mas e aquele tal de construtor, onde fica? Repare que a ordem dos parâmetros seguem respectivamente a ordem definida em nosso construtor:

```js
constructor(nome, idade, sexo, dataDeNascimento)

new Pessoa("Matheus", 23, "Masculino", "25/05/1994");
```

Sendo assim, se um desses parâmetros deixassem de exitir ou mudassem de ordem no construtor da classe, seria necessário realizar tal modifição em todos os lugares que fazem a criação ou instânciação da classe `Pessoa`.

Em outras palavras, um construtor serve para isso, ele será chamado durante a criação do objeto de uma determinada classe, podemos passar parâmetros para a classe e executar determinadas validações ou funções dentro desse contexto.

```js
constructor(nome, idade, sexo, dataDeNascimento) {
    if (nome === undefined) {
      throw new Error("O nome é obrigatório");
    } else {
      this.nome = nome;
    }

    this.idade = idade;
    this.sexo = sexo;
    this.dataDeNascimento = dataDeNascimento;
}
```

Veja que uma validação foi criada para o parâmetro `nome`, caso o mesmo não seja informado, será lançada uma nova exceção, o mesmo pode ser feito para os demais parâmetros (se existir a necessidade).

**Observação**: Em JavaScript cada classe pode e deve possuir apenas e exclusivamente um construtor, caso você não define um, será invocado o construtor padrão, ou seja, sem parâmetros;

```js
class Pessoa {

}
```

Seria equivalente à:

```js
class Pessoa {

	constructor() {}

}
```

## Utilizando um objeto

Show de bola, já temos nosso objeto criado e guardado em uma variável:

```js
const matheus = new Pessoa("Matheus", 23, "Masculino", "25/05/1994");
```

Agora, como podemos chamar o comportamento (função) para se apresentar? Podemos fazer isso da mesma maneira que fazemos com funções:

```js
const matheus = new Pessoa("Matheus", 23, "Masculino", "25/05/1994");
matheus.apresentar();
```

Uma mensagem de apresentação será impressa no console do navegador.

```
Ola, meu nome é Matheus, eu tenho 23 anos
```

## Criando funções estáticas

Além de poder chamar funções criadas para nossos objetos, também podemos definir outro tipo de função: **as estáticas**. De forma resumida, uma função estática é diferente pois pode ser chamada e invocada sem instânciar e criar um objeto, exemplo:

```js
class Pessoa {

  constructor(nome, idade, sexo, dataDeNascimento) {
    if (nome === undefined) {
      throw new Error("O nome é obrigatório");
    } else {
      this.nome = nome;
    }
    this.idade = idade;
    this.sexo = sexo;
    this.dataDeNascimento = dataDeNascimento;
  }

  apresentar() {
    console.log(`Ola, meu nome é ${this.nome}, eu tenho ${this.idade} anos`);
  }

  static tipo() {
    console.log("Função estática");
  }

}
```

Repare que uma nova função foi adicionada, utlizando a palavra reservad `static`, assim, definimos a mesma como estática, como foi dito anteriormente, funções estáticas podem ser chamadas sem criar um objeto, podemos fazer isso através da classe que a mesma pertence:

```js
Pessoa.tipo();
```

Em nosso console será impresso:

```
Função estática
```

Isso é o básico para você começar com orientação á objetos em JavaScript, nos próximos *posts* irei falar sobre a utilização de heranças.

O exemplo do *post* pode ser encontrado [aqui](https://repl.it/@mahenrique94/POO-JavaScript).

E aí gostou? Não deixe de comentar e compartilhar, além disso, também assine a [*newsletter*](http://eepurl.com/ggP7Rv) e fique por dentro das novidades.

Até a próxima \o/.

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
