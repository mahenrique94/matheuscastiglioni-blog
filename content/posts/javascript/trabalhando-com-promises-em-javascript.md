---
autor: "Matheus Castiglioni"
categoria: "JavaScript"
disqus_identifier: "trabalhando-com-promises-em-javascript"
disqus_title: "Trabalhando Com Promises Em Javascript"
disqus_url: "https://matheuscastiglioni-blog.netlify.com/trabalhando-com-promises-em-javascript"
date: 2018-04-05T09:42:09-02:00
draft: false
keywords: [ "ES6", "Front-End", "Promises", "Web" ]
slug: "trabalhando-com-promises-em-javascript"
tag: [ "ES6", "Front-End", "Promises", "Web" ]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1549715971/trabalhando-com-promises-em-javascript_jiln0c.jpg"
title: "Trabalhando Com Promises Em Javascript"
url: "/trabalhando-com-promises-em-javascript"
---

Um assunto que muito vem sendo falado é esse tal de *Promises* (Promessas) em JavaScript, mas afinal, do que se trata? O que eu vou ficar prometendo? Porque e quando eu devo utilizar *Promises*? Se você tem as mesmas ou algumas dessas dúvidas, irei tentar repondê-las de forma simplista e resumida.

## O que é uma Promise?

É um objeto usado para realizar processamentos assíncronos, esse objeto guarda um valor que pode estar disponível agora, no futuro ou nunca. Isso permite o tratamento de eventos ou ações que acontecem de forma assíncrona em casos de sucessos ou falhas.

Uma Promise também possuí diferentes estados, sendo alguns deles:

- Pendente (*Pending*).
- Resolvida (*Resolved*) (não está na documentação, mas gosto de definir esse estado também).
- Rejeitada (*Rejected*).
- Realizada (*Fulfilled*).
- Estabelecida (*Settled*).

Geralmente os estados mais utilizados são dois (2), sendo eles: Resolvida e Rejeitada.

## O que uma Promise faz?

A Promise realiza processamentos e tratamentos de eventos ou ações assíncronas.

## Como uma Promise faz?

Ao criar uma Promise, a mesma começa em estado inicial como pendente (*pending*), assim, os estados que ela pode ir são os demais informados anteriormente. Se ela estiver no estado de resolvida (*resolved*) é porque tudo deu certo, ou seja, a Promise foi criada e processada com sucesso, porém, em casos de falhas, a mesma estará no estado de rejeitada (*rejected*).

Uma das maneiras de fazer esse tratamento é através das funções `then` e `catch`, para sucesso ou falha respectivamente (mais á frente será exemplificado e explicado).

### Saiba mais

O estado realizada (*fulfilled*) é quando a Promise foi resolvida, ou seja, assim que invocamos a função `resolved` da mesma.

O estado estabelecida (*settled*) é quando a Promise foi resolvida ou rejeitada, ou seja, se o seu estado não está como pendente.

Sim, esses dois estados são um pouco confusos, mas não se preocupe, no dia-à-dia vamos utilizar mais os estados de Resolvida e Rejeitada.

## Porque utilizar uma Promise?

Quando utilizamos funções assíncronas, não conseguimos garantir o fluxo de nosso código, ou seja, um trecho de código que está localizado após uma função assíncrona pode ser executado antes da mesma ter sido realizada, por exemplo:

```js
let cepBuscado;
console.log("Buscando CEP");
cepBuscado = buscarCep("13845373");
console.log("CEP buscado");
console.log("CEP encontrado: ", cepBuscado);

function buscarCep(parametro) {
    let cep;
    fetch(`http://ws.matheuscastiglioni.com.br/ws/cep/find/${parametro}/json`)
        .then(response => response.json())
        .then(data => cep = data.cep)
        .catch(console.error);
    return cep;
}
```

Esse código será executado assim que nossa página carregar, veja a ordem de execução:

![Exemplo de porque utilizzar Promises](https://res.cloudinary.com/mahenrique94/image/upload/v1549716161/exemplo-porque-utilizar-promises_axcy8j.png)

Repare que o `cep` foi impresso como `undefined` isso porque a função ainda não foi finalizada.

## Quando utilizar uma Promise?

Podemos utilizar Promises para diversos motivos, um deles que eu acho bem interessante é para realizar animações de processamento ou carregamento, deixamos um ícone com a animação até a Promise ser realizada, dando uma boa interatividade ao o usuário.

## Criando minha primeira Promise

Legal, sabemos toda a parte teórica, vamos começar a escrever nossos códigos, ou seja, criar nossa primeira Promise.

Para exemplo, vou utilizar uma função que simula uma requisição HTTP:

```js
function fazRequisicao() {

}
```

Assim podemos começar a criação de nossa Promise, mas, como vamos criá-la? Se a Promise é um objeto em JavaScript e objetos em JavaScript podem ser criados ou instânciados através da palavra reservada `new`, será que a Promise não funciona da mesma maneira? Sim, é dessa maneira que criamos um novo objeto do tipo Promise.

```js
new Promise();
```

Mas somente isso não será o suficiente, se tentarmos chamar a função `fazRequisicao`:

```js
function fazRequisicao() {
    new Promise();
}

fazRequisicao();
```

Um erro no console do navegador será lançado:

![Erro Promise incomplea](https://res.cloudinary.com/mahenrique94/image/upload/v1549716185/erro-promise-incompleta_zj5vzb.png)

Ué, porque será que esse erro aconteceu? Um detalhe sobre Promises é que na sua criação precisamos passar como parâmetro uma função que será responsável por resolver (*resolve*) ou rejeitar (*reject*) a Promise:

```js
function fazRequisicao() {
    new Promise((resolve, reject) => {

    });
}
```

Estou utilizando [Arrow Functions](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions) por questões de preferência, nada impede você de utilizar funções (*functions*) normais do JavaScript.

Pronto, agora o erro não irá mais acontecer, para confirmar podemos logar a resposta de nossa função que será uma Promise:

```js
console.log(fazRequisicao());
```

![Chamando função sem retorno](https://res.cloudinary.com/mahenrique94/image/upload/v1549716212/funcao-sem-retorno_nkoshm.png)

Eita, chamamos a função e seu retorno foi `undefined`, o que está acontecendo? Simples, dentro de nossa função `fazRequisicao` não informamos seu retorno, ou seja, precisamos devolver a Promise que estamos criando:

```js
function fazRequisicao() {
    return new Promise((resolve, reject) => {

    });
}
```

Agora se olharmos nosso console novamente, uma Promise com estado de Pendente será mostrada:

![Promise em estado de pendente](https://res.cloudinary.com/mahenrique94/image/upload/v1549716237/funco-com-retorno-promise-pendente_htsyhz.png)

### Resolvendo a Promise

Para resolver uma Promise podemos utilizar a função `resolve`, passando como parâmetro um valor que será acessível através de nossa Promise resolvida:

```js
function fazRequisicao() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise resolvida");
        }, 5000);
    });
}
```

Veja que para simular uma requisição adicionei um `setTimeout` para aguardar cinco (5) segundos antes de resolver a Promise.

Legal, nossa Promise está resolvida, mas como podemos pegar o valor passado para a função `resolve`? Para isso, podemos utilizar a função `then` das Promises, como foi mencionado no começo do *post*:

```js
fazRequisicao()
    .then(console.log);
```

Veja que ao realizar o `then` estamos fazendo um `console.log`, ou seja, estamos logando no console do navegador qualquer resposta que venha dentro de nossa função `resolve`. Após esperar cinco (5) segundos a mensagem de `Promise resolvida` deve ser impressa no console.

**Reforçando**: Qualquer valor passado para a função `resolve` será acessível como parâmetro da função `.then`, o valor pode ser uma `String`, `Number`, `Booleano`, `Function` (sim, podemos passar outra função), `Object`, etc...

### Rejeitando a Promise

Assim como fizemos para resolver a Promise, também podemos rejeitá-la. Para realizar a simulação de rejeição será necessário fazer algumas modificações em nossa função, a primeira delas é adicionar um parâmetro informando se a Promise deve ser resolvida ou não:

```js
function fazRequisicao(resolver = true) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise resolvida");
        }, 5000);
    });
}
```

Também foi adicionado um valor padrão (*default*) para o parâmetro, ou seja, se o mesmo não for informado seu valor será `true` (verdadeiro) sendo assim precisamos fazer um pequeno `if` para tratar essa condição.

```js
function fazRequisicao(resolver = true) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!resolver) {
				// rejeitá-la
            }
			resolve("Promise resolvida");
        }, 5000);
    });
}
```

Veja que evitamos adicionar `if` e `else`, isso também é chamado de **Early Return**.

Legal, as modificações estão prontas, agora podemos de fato rejeitá-la, isso pode ser feito de duas maneiras:

Utilizando a função `reject` (da mesma forma que a `resolve`):

```js
function fazRequisicao(resolver = true) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!resolver) {
				reject("Deu erro");
            }
			resolve("Promise resolvida");
        }, 5000);
    });
}
```

Ou lançando um erro:

```js
function fazRequisicao(resolver = true) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!resolver) {
                throw new Error("Deu erro");
            }
			resolve("Promise resolvida");
        }, 5000);
    });
}
```

Legal, a mesma foi resolvida e como podemos realizar esse tratamento? Assim como temos o `then` para sucesso, também temos o `catch` para erros:

```js
fazRequisicao(false)
    .then(console.log)
    .catch(console.error);
```

Veja que o parâmetro está sendo passado `false` (falso) sendo assim a Promise da função não deve ser resolvida, após aguardar os mesmos cinco (5) segundos uma mensagem no console como erro deve ser impressa.

### Resumindo

Tanto o `resolve` com o `then` ou `reject` com `catch` funcionam em conjunto da mesma maneira, porém cada um tendo seu propósito, o primeiro para sucesso e o segundo para erro.

### Para saber mais

Caso não queira utilizar o `catch` para tratar erros a função `then` recebe como segundo parâmetro uma função que deve ser executado em casos de erros, ou seja:

Para imprimir a mensagem de sucesso:

```js
fazRequisicao()
    .then(console.log, console.error);
```

E para imprimir a mensagem de erro:

```js
fazRequisicao(false)
    .then(console.log, console.error);
```

Veja que omitimos o `.catcth` e adicionamos o tratamento de erro como segundo parâmetro da função `.then`.

Além disso, podemos executar diversos trechos de códigos dentro de `then` ou `catch`:

```js
fazRequisicao(false)
    .then(resposta => {
        // fazer qualquer coisa com a resposta ou qualquer código
    })
    .catch(erro => {
        // fazer qualquer coisa com o erro ou qualquer código
    });
```

Novamente estou utilizando Arrow Functions por gosto, fique a vontade de utilizar funções normais do JavaScript.

Para finalizar o `then` pode devolver uma nova Promise que será acessível ao próximo `then`, em outras palavras, podemos realizar encadeamentos de `then's` retornando novas Promises:

```js
fazRequisicao(false)
    .then(resposta => {
        // retornar outra Promise
    })
    .then( /* Pegar o retorno da Promise anterior */ )
    .catch(erro => {
        // fazer qualquer coisa com o erro ou qualquer código
    });
```

Além claro de possuir outros recursos.

## Conclusão

Trabalhar com Promises em JavaScript pode ser muito útil e faciliar muito a nossa vida durante o desenvolvimento, esses foram apenas alguns exemplos, na [documentação completa](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise) você encontrá mais recursos e possibilidades, espero que tenha gostado.

Não deixe de comentar e compartilhar, além claro, de se inscrever na [*newsletter*](http://eepurl.com/ggP7Rv) para receber novidades por email.

Até a próxima \o/.
