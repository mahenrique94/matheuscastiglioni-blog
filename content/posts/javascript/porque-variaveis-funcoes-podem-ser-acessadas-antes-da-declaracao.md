---
autor: "Matheus Castiglioni"
categoria: "JavaScript"
disqus_identifier: "porque-variaveis-funcoes-podem-ser-acessadas-antes-da-declaracao"
disqus_title: "Porque Variáveis e Funções Podem ser Acessadas Antes da Declaração"
disqus_url: "https://blog.matheuscastiglioni.com.br/porque-variaveis-funcoes-podem-ser-acessadas-antes-da-declaracao"
date: 2020-03-10T21:42:07-03:00
draft: false
keywords: ["Front-End", "Web", "Variáveis", "Contexto de execução", "Context execution", "Ambiente lexical", "Lexical environment"]
slug: "porque-variaveis-funcoes-podem-ser-acessadas-antes-da-declaracao"
tag: ["Front-End", "Web", "Variáveis", "Contexto de execução", "Context execution", "Ambiente lexical", "Lexical environment"]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1583887697/design-3372889_1280_1_hwtkjn.jpg"
title: "Porque Variáveis e Funções Podem ser Acessadas Antes da Declaração"
url: "/porque-variaveis-funcoes-podem-ser-acessadas-antes-da-declaracao"
---

Uma das linguagens mais utilizadas e famosas atualmente sem dúvida é o JavaScript, hoje em dia o mesmo está em todos os lugares, podemos criar aplicações e sistemas web, desenvolver API's no *back-end* e criar aplicativos móveis.

Apesar da popularidade, muitas pessoas não gostam do JavaScript, principalmente por algumas particularidades da linguagem ser bem diferente de outras.

Uma das coisas que me confundia quando eu comecei a utilizar o JavaScript era a possibilidade de utilizar variáveis ou funções antes de suas declarações e acredito que muitas pessoas também acham isso um tanto quanto estranho.

Nesse *post* vou tentar explicar como isso é possível.

## Contexto de execução (context execution)

Antes de falarmos sobre variáveis e funções, precisamos entender alguns pequenos conceitos referente a linguagem JavaScript, o primeiro deles será *context execution* (contexto de execução).

Em JavaScript uma unidade fundamental de execução são as funções, nós usamos elas a todo momento, para calcular alguma coisa, performar efeitos colaterais (como mudar a UI), reutilização de códigos ou para tornar os códigos mais faceis de se entender. Também sabemos que uma função pode chamar outra função, que por sua vez pode chamar outra função e por ai vai...

Quando uma função chama outra, a execução dos códigos precisam voltar para a posição de onde ela havia sido chamada, ou seja:

```javascript
const ola = nome => {
    console.log(nome)
}

const conversa = () => {
    ola('Matheus')
}

conversa()
```

Ao chamar a função `conversa` vamos chamar uma outra função (no caso `ola`), quando a função `ola` for executada, precisamos voltar para onde ela foi chamada, ou seja, para dentro da função `conversa` e continuar a execução.

Mas, você já se perguntou como as *engines* do JavaScript mantém rastreado todas essas funções em execução e retornando para posições específicas do código?

Em JavaScript existem dois principais tipos de código: **Global** e **função**.

### Códigos globais (*global code*)

Esses códigos são definidos fora de todas as funções, ou seja, eles ficam soltos em nosso JavaScript.

### Códigos de função (*function code*)

Esses códigos são definidos dentro de funções.

Quando nossos códigos estão sendo executados pelos motores (*engines*) JavaScript, cada declaração é executada sobre um certo contexto de execução (*execution context*) e como nós temos dois tipos de códigos, nos também temos dois tipos de contextos: **Contextos de execução global** (*Global execution context*) e **Contexto de execução de função** (*function execution context*).

A diferença mais significante entre eles é que existe apenas um contexto de execução global, ele é criado quando o JavaScript começa sua execução. Enquanto para cada invocação de função é criado um novo contexto de execução de funções.

Dessa maneira, é através desses contextos que o JavaScript consegue lidar com pausas, execuções e retornos.

Sabemos que o JavaScript é baseado em um modelo de execução *single thread*, ou seja, apenas um pedaço de código pode ser executado por vez. Sendo assim, toda vez que uma função é invocada, o contexto de execução atual é pausado e um novo contexto de execução de função é criado, do qual o código será avaliado. Depois que a função executou sua tarefa, ou seja, seus códigos foram executados, o contexto de execução dessa função geralmente é descartado e o contexto de execução anterior é restaurado.

Então é necessário manter ambos contextos rastreados, ou seja, precisamos de um contexto de execução em execução e outro contexto que está pausado.

O jeito mais facil de implementar essa funcionalidade seria através de *stacks* (pilhas), chamadas de *execution context stack* (pilha de contexto de execução).

Olhando nosso código de exemplo novamente:

```javascript
// uma função que loga um nome
const ola = nome => {
    console.log(nome)
}

// uma função que chama outra função
const conversa = () => {
    ola('Matheus')
}

// uma chamada de função no código global
conversa()
```

Podemos exemplificar os contextos de execução da seguinte maneira:

![Contextos de execução](https://res.cloudinary.com/mahenrique94/image/upload/v1583890097/Untitled_Diagram_1_hx2bqj.png)

## Ambiente lexical (*lexical environment*)

Agora que entendemos um pouco mais sobre como funciona os contextos de execução, vamos dar uma olhada no *lexical environment* (ambiente lexical).

Considere o seguinte exemplo:

```javascript
const nome = 'Matheus'
console.log(nome)
```

Nesse caso, sabemos que ao chamar a função `log` um novo contexto de execução será criado, mas, como a função `log` recebe o valor da variável `nome`? Esse processo se chama *identifier resolution* (resolução do identificador), basicamente a ideia é descobrir a qual variável um determinado identificador se refere, o contexto de execução faz isso através dos *lexical environment*.

Um *lexical environment* é um mecanismo interno do JavaScript para acompanhar o mapeamento de identificadores para variáveis específicas, voltando ao código anterior:

```javascript
const nome = 'Matheus'
console.log(nome)
```

O *lexical environment* é consultado quando a variável `nome` é acessada, ou seja, na declaração do `console.log`.

> Ambientes lexicals são uma implementação interna do mecanimo de escopos do JavaScript e geralmente as pessoas se referem à eles como escopos (*scopes*)

Geralmente um *lexical environment* é associado com uma estrutura de código específica, ele pode ser associado para uma função, bloco de código ou um `catch` (parte de `try/catch`) e cada estrutura pode ter seu próprio mapeamento de identificadores.

## Tipos de variáveis em JavaScript

Em JavaScript podemos utilizar três palavras reservadas para definir variáveis: `var`, `let` e `const`. Elas se diferenciam em dois aspectos: mutabilidade e o relacionamento delas com o *lexical environment*.

### Mutabilidade

Se categorizarmos a declaração de variável pelo aspecto mutabilidade, podemos colocar `const` de um lado e `var`/`let` do outro.

![Categorização de tipos de declaração de variável por mutabilidade](https://res.cloudinary.com/mahenrique94/image/upload/v1583891657/Untitled_Diagram_2_1_amhtpf.png)

Todas as variáveis definidas com `const` são imutáveis, ou seja, o valor delas pode ser setado apenas uma vez.

Por outro lado, todas as variáveis definidas com `var` ou `let` podem ter seus valores mudados quantas vezes for necessário.

### *Lexical environment*

Os três tipos de definição de variáveis (`var`, `let` e `const`) também podem ser categorizadas pelo relacionamento delas com o *lexical environment* (pelo escopo delas), podemos colocar `var` de um lado e `let`/`const` do outro.

![Categorização de tipos de declaração de variável por lexical environment](https://res.cloudinary.com/mahenrique94/image/upload/v1583891707/Untitled_Diagram_3_1_cflztb.png)

#### Usando var

Quando nós usamos o tipo de definição `var`, a variável é definida na função mais próxima ou no ambiente lexical global (blocos são ignorados). Vamos dar uma olhada no seguinte exemplo:

```javascript
// define uma variável global
var nome = 'Matheus'

const ola = () => {
    // define uma variável de função local
    var mensagem = 'Olá'
    for (var i = 0; i < 4; i++) {
        // define uma variável no for
        // dentro do loop podemos acessar variáveis de bloco, variáveis de função e variáveis globais
        var texto = mensagem + ' ' + nome
        console.log(texto)
    }
    // Variáveis do for também são acessíveis de fora do loop
    console.log(texto)
}

ola()
```

O que pode ser estranho com JavaScript e confunde bastante pessoas vindo de outras linguagens, é que nós podemos acessar variáveis definidas em códigos de bloco fora desses blocos.

Isso ocorre porque quando declaramos variáveis com a palavra reservada `var` elas sempre são registradas na função mais próxima ou no ambiente lexical global, sem se importar com escopos de bloco.

A ideia seria mais ou menos essa:

![Declaração de variável var](https://res.cloudinary.com/mahenrique94/image/upload/v1583892654/Untitled_Diagram_5_1_uzj0i8.png)

Repare que existem três *lexical environments*, um global, outro para a função `ola` e um para o `for`.

#### Usando let e const

Por conta desse comportamento um tanto quanto estranho, na versão ES6 do JavaScript foram adicionados dois novos tipos de declaração de variável `let` e `const`.

Diferente de `var`, eles definem as variáveis no *lexical environment* mais próximo (pode ser um bloco, um loop, uma função ou global).

Realizando algumas modificações no código anterior:

```javascript
const nome = 'Matheus'

const ola = () => {
    const mensagem = 'Olá'
    for (let i = 0; i < 4; i++) {
        let texto = mensagem + ' ' + nome
        console.log(texto)
    }
}

ola()
```

A ideia seria mais ou menos essa:

![Declaração de variável const e let](https://res.cloudinary.com/mahenrique94/image/upload/v1583893050/Untitled_Diagram_6_1_rtf1ww.png)

## Registrando identificadores com lexical environment

Um dos princípios da linguagem JavaScript é ser facil de usar, por isso, que não especificamos tipos de retornos em funções, tipos de parâmetros, tipos de variáveis, e por ai vai... E você já sabe que códigos JavaScript são executados linha por linha, vamos dar uma olhada no seguinte exemplo:

```javascript
ola('Matheus')

function ola(nome) {
    console.log('Olá', nome)
}
```

Se os códigos são executados linha por linha, como podemos chamar a função `ola` antes de sua declaração? A execução do código JavaScript ocorre em duas fases:

1. A primeira fase é ativada sempre que um novo *lexical environment* é criado, nessa fase nenhum código é executado, mas, a *engine* do JavaScript visita e registra todas as variáveis e funções declaradas dentro do *lexical environment* atual.
2. Na segunda fase, ocorre execução do JavaScript depois que a primeira foi realizada, esse comportamento depende do tipo de declaração de variável (`var`, `let` e `const`) e o tipo de ambiente (global, função ou bloco).

O processo seria mais ou menos assim:

1. Se nós estamos criando um ambiente de função, o identificador implícito `arguments` é criado, junto com todos os outros parâmetros da função. Se não estamos lidando com um ambiente de função, esse passo é pulado.
2. Se nós estamos criando um global ou ambiente de função, o código atual é escaneado (sem entrar no corpo das funções) para [funções de declaração](https://blog.matheuscastiglioni.com.br/definindo-funcoes-em-javascript/) (não para [funções de expressão](https://blog.matheuscastiglioni.com.br/definindo-funcoes-em-javascript/) ou [funções de flecha](https://blog.matheuscastiglioni.com.br/definindo-funcoes-em-javascript/)).
3. O código atual é escaneado para declarações de viariáveis com a palavra reservada `var` e definidas fora de outras funções.

Vamos olhar outro exemplo:

```javascript
console.log(nome)

var nome = 'Matheus'
```

Nesse exemplo será logado `undefined` em nosso *console*, isso porque o primeiro passo será escanear e registrar o identificador para cada variável com o valor inicial `undefined`. O valor da variável será setado na segunda quando a execução dos códigos forem realmentes feitas.

Isso é porque variáveis do tipo `var` podem ter seus valores igual à `undefined` e serem acessadas antes de sua declaração.

**Obs**: Caso as variáveis fossem definidas com `let` ou `const` o JavaScript vai lançar um `ReferenceError` informando que não podemos acessar variáveis antes de sua declaração.

## Conclusão

Nesse *post* vimos porque variáveis do tipo `var` podem ser acessadas antes de suas declarações e como [funções de declaração](https://blog.matheuscastiglioni.com.br/definindo-funcoes-em-javascript/) podem ser chamadas antes de suas definições.

Também vimos alguns conceitos interessantes sobre JavaScript como: *execution contexts*, *lexical environments*, *scopes*, *identifier resolution* e *identifiers*.

Se você gostou desse *post* e quer ser notificado com novos *post's*, não deixe de assinar a [*newsletter*](http://eepurl.com/ggP7Rv) e receber as novidades por email.

Até a próxima.

## Referência:
- [Livro: Secrets of the JavaScript Ninja](https://www.amazon.com.br/Secrets-JavaScript-Ninja-John-Resig/dp/193398869X)

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
