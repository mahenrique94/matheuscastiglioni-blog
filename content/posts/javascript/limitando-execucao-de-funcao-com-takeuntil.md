---
autor: "Matheus Castiglioni"
categoria: "JavaScript"
disqus_identifier: "limitando-execucao-de-funcao-com-takeuntil"
disqus_title: "Limitando Execucao De Funcao Com Takeuntil"
disqus_url: "https://matheuscastiglioni-blog.netlify.com/limitando-execucao-de-funcao-com-takeuntil"
date: 2018-11-27T11:19:26-02:00
draft: false
keywords: [ "ES6", "Front-End" ]
slug: "limitando-execucao-de-funcao-com-takeuntil"
tag: [ "ES6", "Front-End" ]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1549586573/limitando-execucao-de-funcao-com-takeuntil_5bf5dc2a6053e_bg_pmtkjn.jpg"
title: "Limitando Execucao De Funcao Com Takeuntil"
url: "/limitando-execucao-de-funcao-com-takeuntil"
---

Geralmente durante o uso de *softwares* muitas funções devem/são executadas, indo um pouco mais além, dificilmente você irá ver um sistema (seja *web* ou *desktop*) que não possua pelo menos uma função.

Imagine que estamos trabalhando em um sistema na *web* (*webapp*), nosso sistema é para cadastro de pacientes, uma das nossas funcionaldiades é realizar a importação de dados de uma fonte externa (outro sistema), sabendo disso, nosso cliente pediu que a função de exportação só pudesse ser executada uma vez. Caso a mesma foi executada, ela não pode mais ser disparada, como podemos criar essa nova funcionalidade e resolver o problema do nosso cliente?

![Como implementar nova funcionalidade para o cliente?](https://res.cloudinary.com/mahenrique94/image/upload/v1549586598/5bf67a3393a44_bg_kqkf66.gif)

## Conhecendo a takeUntil

Para esse problema podemos implementar nossa própria `takeUntil`, ela será uma função responsável por executar determinada função até uma certa quantidade de vezes (definida via parâmetro). Podemos começar criando nossa `takeUntil`:

```javascript
const takeUntil = (times, fn) => {
	// implementação...
}
```

Nossa função recebe dois parâmetros (até o momento para nossa necessidade), sendo eles:

1. `times`: Quantidade de vezes que uma determinada função poderá ser executada.
2. `fn`: A função que será executada até uma determinada quantidade de vezes.

Repare que um parâmetro depende do outro.

Agora, como podemos implementar o corpo de nossa função?

## Implementando a takeUntil

O primeiro passo será retornar uma nova função (com sua execução limitada):

```javascript
const takeUntil = (times, fn) => {
    return () => {}
}
```

Agora já podemos criar nossa função de forma limitada:

```javascript
const importarDados = () => console.log('Importando os dados...')

const fn = takeUntil(1, importarDados)
```

Repare que criamos uma função chamada `importarDados` que apenas irá logar uma mensagem simulando a importação de dados. Depois, fizemos o uso da nossa função `takeUntil` para criarmos uma nova função, agora com sua execução limitada em apenas uma única vez (pois passamos o primeiro parâmetro como 1).

Porém, se tentarmos executar nossa nova função:

```javascript
fn()
```

Nada irá acontecer, porque? Isso acontece porque nossa função `takeUntil` ainda não foi implementada, está apenas retornando uma função que nada faz.

Chega de mais delongas e vamos ao que interessa e implementar a função `takeUntil`, ela deverá funcionar da seguinte maneira:

1. Verificar se a quantidade de execução não foi atingida.
2. Caso ainda não foi atingida, execute ela.
3. E por último, diminua o número de vezes que ainda podemos executá-la.

Agora que já sabemos como ela irá funcionar, podemos começar sua implementação.

### Verificar se a quantidade de execução não foi atingida

Para realizar a verificação se ainda podemos ou não executar a função, podemos simplesmente verificar se nosso parâmetro `times` ainda é maior do que zero:

```javascript
const takeUntil = (times, fn) => {
    return () => {
        if (times > 0) {
            // pode executar...
        }
    }
}
```

Legal, a verificação foi feita de forma simplista através de um simples `if`.

### Caso ainda não foi atingida, execute ela

Com o passo anterior feito, garantimos que nossa função apenas irá executar quando ainda puder, apenas trocamos o comentário anterior pela chamada da função:

```javascript
const takeUntil = (times, fn) => {
    return () => {
        if (times > 0) {
            fn()
        }
    }
}
```

Pronto, nossa função apenas irá ser executada onde nossa condição é verdadeira, ou seja, a quantidade (`times`) de vezes ainda é maior do que zero.

### E por último, diminua o número de vezes que ainda podemos executá-la

Por fim, com tudo pronto, precisamos apenas diminuir a quantidade de vezes que ainda podemos executar nossa função:

```javascript
const takeUntil = (times, fn) => {
    return () => {
        if (times > 0) {
            fn()
        }
        times--
    }
}
```

Maravilha, tudo deve estar funcionando, vamos testar?

```javascript
fn()
fn()
fn()
fn()
fn()
```

Aqui pedimos para nossa função ser executada cinco vezes, mas, só iremos ver a mensagem no console uma única vez.

![Comemorando implementação da função](https://res.cloudinary.com/mahenrique94/image/upload/v1549586648/gif-animado-minions_affzam.gif)

Mas, ainda não podemos comemorar, vamos dar uma olhada no código final (até então) da função `takeUntil`.

```javascript
const takeUntil = (times, fn) => {
    return () => {
        if (times > 0) {
            fn()
        }
        times--
    }
}
```

Está muito verboso, será que não podemos melhorá-lo? Sim, podemos deixá-lo bem menor e mais simples:

```javascript
const takeUntil = (times, fn) => () => times-- > 0 && fn()
```

Feito, em apenas uma linha realizamos todos os passos anteriormente destacados.

Caso queira ver o código em funcionamento:

<iframe height="400px" src="https://repl.it/@mahenrique94/Take-Until?lite=true" scrolling="no" frameborder="no" allowtransparency="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

## Conclusão

Realizamos a criação/implementação da função `takeUntil`, com ela conseguimos limitar a execução de uma determinada função até uma certa quantidade de vezes.

Uma biblioteca muito famosa que faz uso dessa função é a [RxJS](https://rxjs-dev.firebaseapp.com/api/operators/takeUntil) (claro que com uma implementação diferente).

E aí, você já conhecia a função `takeUntil`? Não deixe de comentar. Se você gostou desse *post* fique á vontade para assinar a [*newsletter*](http://eepurl.com/ggP7Rv) e receba novidades por email.

Até a próxima.
