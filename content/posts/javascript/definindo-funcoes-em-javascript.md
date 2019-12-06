---
autor: "Matheus Castiglioni"
categoria: "JavaScript"
disqus_identifier: "definindo-funcoes-em-javascript"
disqus_title: "Definindo Funções em Javascript"
disqus_url: "https://blog.matheuscastiglioni.com.br/definindo-funcoes-em-javascript"
date: 2019-12-05T08:56:17-03:00
draft: false
keywords: ["Funções", "Front-End", "Web"]
slug: "definindo-funcoes-em-javascript"
tag: ["Funções", "Front-End", "Web"]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1575547118/por-que-o-javascript-e-onipresente-no-desenvolvimento-moderno-1_1_lgavks.png"
title: "Definindo Funções em Javascript"
url: "/definindo-funcoes-em-javascript"
---

Algo bem comum das linguagens de programação é o uso de funções, cada linguagem tem suas particularidades e maneiras específicas de como definir as mesmas. Nesse *post* vamos entender as diferentes definições e tipos de funções em JavaScript.

Atualmente até o momento em que esse *post* está sendo escrito, existem cinco tipos de definições, sendo:

- *Functions declaration* (Função de declaração)
- *Functions expression* (Função de expressão)
- *Arrow Functions* (Função de flecha)
- *Functions constructor* (Função construtora)
- *Generator Functions* (Função geradora)

As definições mais comuns são *declaration* e *expression* (veremos ambas mais à frente). Essas duas definições são bem similiar, geralmente não fazemos distinção entre elas, mas, nesse *post* eu irei explicar de maneira separada.

Então vamos começar a dar uma olhada com mais detalhes em cada uma delas.

## Functions declaration

O jeito mais básico de definir funções em JavaScript é através da *function declaration*, toda função de declaração começa com a palavra reservada e obrigatória `function`, seguida pelo nome da função (também obrigatório) e uma lista de parâmetros (opcionais) separados por vírgula e encapsulados em parenteses (obrigatórios), o último passo é definir as chaves (obrigatórias) que será o corpo da função.

A estrutura seria mais ou menos assim:

![Estrutura obrigatória para funções de declaração](https://res.cloudinary.com/mahenrique94/image/upload/v1575548840/Untitled_Diagram_wfmnwk.png)

Essa estrutura é a mais simples, porém, obrigatória para as *functions declaration*. Como mencionado anteriormente, também podemos definir parâmetros opcionais separados por vírgula:

![Funções de declaração com parâmetros](https://res.cloudinary.com/mahenrique94/image/upload/v1575549188/Untitled_Diagram_1_vz1jbx.png)

Dentro de uma função de declaração, também podemos ter outras funções, que só irão ser visíveis dentro do bloco (chaves) onde a mesma foi declarada.

Vamos ver alguns exemplos:

```javascript
function ola() {
    console.log('Olá')
}
ola()

function ola() {
    function mensagem() {
        return 'Olá'
    }
    console.log(mensagem())
}
ola()

function ola() {
    function mensagem() {
        return 'Olá'
    }
    console.log(mensagem())
}
ola()

console.log(mensagem()) // a função mensagem não irá existir nesse trecho de código, ela somente existe dentro da função ola

function ola(nome) {
    console.log('Olá', nome)
}
ola('Matheus')
```

Dado os exemplos acima, vamos destacar algumas curiosidades:

1. Em JavaScript podemos declarar funções dentro de funções.
2. Uma função declarada dentro de outra, apenas irá viver durante o escopo da função pai, ou seja, a função `mensagem` apenas existe no escopo/bloco da função `ola`.
3. Para invocar uma função utilizamos o seu nome seguido por parenteses `()`.
4. Para alimentar algum parâmetro, adicionamos o valor dentro dos parenteses `('Matheus')`, onde a ordem dos parâmetros irá influenciar, ou seja, se uma função recebe dois parâmetros: `function ola(nome, sobrenome)`, ao chamá-la precisamos tomar cuidado com a ordem dos mesmos: `ola('Matheus', 'Castiglioni')` é diferente de `ola('Castiglioni', 'Matheus')`.

## Functions expression

Como mencionado anteriormente, as *expression* e *declaration* são muito parecidas, a diferença é que uma função de expressão pode ser lidada como uma qualquer expressão em JavaScript, por exemplo:

```javascript
const nome = 'Matheus'
```

Nesse exemplo, estamos criando uma expressão onde definimos uma variável chamada `nome` e atribuímos uma `String` para ela.

Com as funções de expressão, podemos fazer algo muito semelhante:

```javascript
const ola = function() {
    console.log('Olá')
}
ola()
```

Repare que é bem parecido com as funções de declaração, uma das sútis diferenças é que ela está sendo atribuída para uma variável, onde não definimos o nome da função e sim o nome da variável que irá referenciar a mesma. Tornando a estrutura mais ou menos assim:

![Funções de expressão com parâmetros](https://res.cloudinary.com/mahenrique94/image/upload/v1575550655/Untitled_Diagram_2_ylxv7e.png)

Mas, você deve estar se perguntando:

> Porque eu iria querer atribuir uma função à uma variável?

Atribuir uma função à uma variável pode ser muito útil, por exemplo: Assim podemos definir a função exatamente onde ela precisa ser chamada, ou seja, definimos a função apenas onde precisamos dela, isso em alguns momentos pode tornar nosso código mais simples de entender.

### Saiba mais

Uma expressão em JavaScript onde definimos variáveis, também pode ser chamada de *assignment expression*.

## Arrow Functions

Como usamos bastante funções, nada melhor do que criar atalhos e sintaxes menos verbosas, não é? Pois é, um dos motivos da criação das funções de flecha é facilitar a criação e utilização de funções em JavaScript, ou seja, elas permitem a criação de funções de maneira resumida.

Em outras palavras, as *arrow functions* são simplificações para as *functions expression*:

Imagine um exemplo onde temos a seguinte função de expressão:

```javascript
const numeroAleatorio = function() {
    return Math.random()
}
```

Tivemos que escrever bastante coisa, para apenas criar uma função que devolve um número aleatório. Agora vamos transformar essa função de expressão em uma função de flecha.

```javascript
const numeroAleatorio = () => {
    return Math.random()
}
```

Até então nada diferente, apenas removemos a palavra reservada `function` e adicionamos uma seta (sinal de `=` seguido por `>`).

Vamos começar a fazer algumas melhorias e refatorações, o primeiro passo será no `return`, repare que a função possuí apenas uma linha como conteúdo, será que não podemos deixar o retorno implicito? Sim:

```javascript
const numeroAleatorio = () => Math.random()
```

Repare que não só removemos a palavra reservada `return`, mas, como também as chaves, ou seja:

- Caso o corpo da *arrow function* tenha apenas uma linha, podemos omitir a declaração das chaves
- Seguindo o principio que o corpo tem apenas um linha, também não precisamos utilizar o `return`, podemos removê-lo, pois a primeira linha será executada e retornada automaticamente.

Show, o que mais podemos fazer? Vamos imaginar uma segunda função:

```javascript
function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`
}
```

Como vimos anteriormente, quando trata-se de apenas uma linha e já precisamos fazer o retorno, podemos omitir as chaves e a palavra `return`:

```javascript
const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`
```

Agora, imagine que não precisamos mais do sobrenome, vamos apenas criar uma função para dizer `Olá, NOME`:

```javascript
function ola(nome) {
    return `Olá ${nome}`
}
```

Seguindo o que já sabemos:

```javascript
const ola = (nome) => `Olá ${nome}`
```

Mas, quando uma *arrow function* possuí apenas um parâmetro, também podemos omitir os parenteses, ficando:

```javascript
const ola = nome => `Olá ${nome}`
```

Sendo assim, podemos definir uma *arrow function*:

![Estrutura das *arrow function*](https://res.cloudinary.com/mahenrique94/image/upload/v1575633038/Untitled_Diagram_brmdbv.png)

## Functions constructor

As funções construtoras são declaradas e definidas como qualquer outra *expression* ou *declaration*, o jeito de se usar é o mesmo, a diferença está mais no caso de uso e o que ela retorna.

Uma pequena observação é que normalmente o nome de funções construtoras começa com a primeira letra maiúscula, por exemplo:

```javascript
function Pessoa() {}
```

Nesse exemplo, estamos criando uma função construtora que irá criar um objeto `Pessoa`.

A principal diferença entre a função construtora está na maneira como ela é invocada, enquanto as demais apenas precisam ser nomeadas e utilizar os parenteses:

```javascript
function ola() {}
ola()

const ola = function() {}
ola()
```

As funções construtoras precisam ser invocadas com a palavra reservada `new`:

```javascript
const p = new Pessoa()
```

Utilizar funções construtoras pode ser uma funcionalidade muito útil, pois, podemos criar objetos de uma maneira simplificada:

```javascript
function Pessoa(nome) {
    this.nome = nome
}
const p = new Pessoa('Matheus') // { nome: 'Matheus' }
```

Veja que estamos criando um novo objeto `Pessoa` com a propriedade `nome`.

Quando utilizamos a palavra reservada `new` para invocar uma função, o JavaScript por baixo dos panos cria automaticamente um novo objeto para nós, esse objeto pode ser referenciado através do `this`.

Quando realizamos `this.nome = nome`, estamos adicionando uma nova propriedade chamada `nome` para o objeto recém criado, onde o valor da propriedade será o valor informado no parâmetro da função. Seria algo similar à:

```javascript
const p = {}
p.nome = 'Matheus'
```

E por fim, funções construtoras por padrão retornam esse objeto recém criado de maneira implícita.

## Generator Functions

Por último, não menos importante, vamos falar das funções geradoras, a definição e declaração da mesma é muito semelhante as funções de expressão e declaração, uma pequena diferença está na adição de um `*` na palavra reservada `function`, ou seja, `function*`:

```javascript
function* ola(p1, p2) {}
```

As demais regras se aplicam para a mesma, onde os parâmetros são opcionais e separados por vírgula e o corpo da função fica dentro das chaves.

Mas, porque utilizá-las? Diferente de funções normais em JavaScript, ou seja:

```javascript
function ola() {
    console.log('Olá')
    console.log('Matheus')
    console.log('Castiglioni')
}
ola()
```

A execução dessa função não pode ser controlada, em outras palavras, a função será executada e processada de maneira completa, nós não temos nenhum controle do tipo:

1. Execute o primeiro log
2. Pause
3. Faça alguma coisa
4. Execute o segundo log
5. Pause
6. Faça alguma coisa
7. etc...

O resultado da execução seria:

```javascript
ola()
// 'Olá'
// 'Matheus'
// 'Castiglioni'
```

Porém, as funções geradoras podem ser interrompidas durante a invocação e posteriormente podemos dar continuidade em sua execução, eu sei que deve ter ficado um pouco complexo, mas, calma que iremos exemplificar a explicação.

```javascript
function* ola() {
    yield 'Olá'
    yield 'Matheus'
    yield 'Castiglioni'
}
```

Repare que temos uma nova palavra reservada, a `yield`, essa palavra indica quais são os passos e onde a função deve ir parando sua execução, ou seja, cada `yield` é um ponto de interrupção da função.

Vamos executar nossa função e atribuir seu retorno para uma variável:

```javascript
const nome = ola()
console.log(nome)
```

O valor da variável `nome` será um objeto do tipo `Generator`, que nada mais é do que um `Iterator`. Mas, o que isso quer dizer? Um `Iterator` pode ser iterado de uma maneira diferente a `array`, ele possuí uma função `next` que irá passar por cada ponto de parada:

```javascript
const nome = ola()
const n1 = nome.next()
console.log(n1)
```

A função `next` vai retornar um objeto com duas propriedades:

- `value`: O valor informado para cada `yield`.
- `done`: Um booleano que vai indicar se o `Iterator` percorreu todos os pontos de interropção, dessa maneira, quando o valor for `true` a iteração terminou.

Como nossa função possuí três pontos de parada, ou seja, três `yield`, podemos chamar a função `next` três vezes o obter o valor de cada `yield`:

```javascript
// n = next
const nome = ola()
const n1 = nome.next()
console.log(n1.value) // 'Olá'
console.log(n1.done) // false
const n2 = nome.next()
console.log(n2.value) // 'Matheus'
console.log(n2.done) // false
const n3 = nome.next()
console.log(n3.value) // 'Castiglioni'
console.log(n3.done) // false
const n4 = nome.next()
console.log(n4.value) // undefined
console.log(n4.done) // true
```

Veja que percorremos todos os passos da função de maneira manual, ou seja, nos estamos controlando quando a mesma deve ser executada ou não.

Na quarta chamada da função `next` não havia mais pontos de parada, o `value` então é `undefined` e por fim o `done` está marcado como `true`.

Entre cada declaração do `yield` podemos adicionar códigos JavaScript que serão processados normalmente:

```javascript
function* inc() {
    let n = 0
    console.log('Estou incrementando uma vez')
    n++
    yield n
    console.log('Estou incrementando pela segunda vez')
    n++
    yield n
}
```

Logo, sua execução pode ser feita:

```javascript
const interador = inc()
const n1 = interador.next()
// 'Estou incrementando uma vez'
console.log(n1.value) // 1
console.log(n1.done) // false
const n2 = interador.next()
// 'Estou incrementando pela segunda vez'
console.log(n2.value) // 2
console.log(n2.done) // false
const n3 = interador.next()
console.log(n3.value) // undefined
console.log(n3.done) // true
```

Veja que os *logs* dentro da função foram executadas, a variável foi incrementada e cada `yield` também foi chamado. Dessa maneira, temos controle total sobre quando e quais passos devem ser executados em nossa função geradora.

Também podemos atribuir as funções geradores para variáveis:

```javascript
const ola = function* () {}
```

### Saiba mais

Caso você não precise controlar o fluxo de execução e queira chamar todos os `yield` de maneira automática, pode utilizar o `for of` (utilizado para percorrer iteradores):

```javascript
function* ola() {
    yield 'Olá'
    yield 'Matheus'
    yield 'Castiglioni'
}

for (const n of ola()) {
    console.log(n)
}
```

Repare que não precisamos nos preocuper em chamar o `next`, verificar se tem `value` e o `done` não está `true`, o próprio `for of` faz tudo isso para a gente.

## Conclusão

Nesse *post* vimos como podemos definir e declarar diferentes tipos de função em JavaScript, entendemos a motivação de uso para cada uma, as principais diferenças entre elas e como podemos fazer para além de declará-las, também as invocá-las.

E aí, você já conhecia os diferentes tipos de função e cada motivação para usá-las? Não deixe de comentar.

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
