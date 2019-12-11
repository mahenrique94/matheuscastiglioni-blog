---
autor: "Matheus Castiglioni"
categoria: "JavaScript"
disqus_identifier: "memorizando-funcoes-em-javascript"
disqus_title: "Memorizando Funções Em Javascript"
disqus_url: "https://blog.matheuscastiglioni.com.br/memorizando-funcoes-em-javascript"
date: 2019-12-10T21:17:30-03:00
draft: false
keywords: ["Memo", "Memoized", "Memoization", "pattern", "Front-End", "Web"]
slug: "memorizando-funcoes-em-javascript"
tag: ["Memo", "Memoize", "Memoized", "Memoization", "pattern", "Front-End", "Web"]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1576023659/ogu5bl1s1jiftg7d0j0g_lmgxy6.jpg"
title: "Memorizando Funções Em Javascript"
url: "/memorizando-funcoes-em-javascript"
---

Utilizar funções em JavaScript é algo muito comum para nos dev's que programados utilizando o mesmo, porém, também é comum que precisemos executar a mesma função diversas vezes e pode ser que muitas dessas vezes os parâmetros das funções não mude, ou seja, estamos processando a função por completo novamente de forma desnecessária.

Pensando nisso, será que podemos de alguma maneira otimizar as funções para que elas entendam que estão sendo executadas de forma repetida? Sim, isso é possível, podemos implementar o *Memoize pattern*.

## Conheçendo o Memoize

Como já vimos, o Memoize trata-se de uma padrão, com ele é possível memorizar as execuções de nossas funções, ou seja, caso a mesma função seja chamada com os mesmos parâmetros ela não será processada.

A ideia é que ela apenas seja processada na primeira vez, nas vezes posteriores podemos consultar um sistema de *cache* (memória) e procurar por algum processamento parecido.

## Entendendo o problema

Chega de teoria e vamos para a prática, imagine que precisamos calcular o fatorial da algum número, ou seja, dado um número, precisamos multiplicar o mesmo pelos seus anteriores até 1, algo mais ou menos assim:

```
// fatorial de 5

5 * 4 = 20
4 - 1 = 3

20 * 3 = 60
3 - 1 = 2

60 * 2 = 120
2 - 1 = 1

120 * 1 = 120 // multiplica seus anteriores até o 1
```

Sendo assim, podemos dizer que o fatorial de `5` é `120`.

Agora que sabemos a regra e como calcular o fatorial de um número, vamos de fato implementar o código e função para calcular o mesmo.

O primeiro passo será criar uma função que vai receber um número:

```javascript
const fatorial = n => null
```

Por hora a função apenas recebe um parâmetro `n` (que será o número), não processa nada e retorna `null`.

Para implementar o corpo da função, podemos fazer uso da recursividade, ou seja, podemos fazer com que a própria função `fatorial` chame ela mesmo até o `n` ser igual à `1`:

```javascript
const fatorial = n => {
    if (n > 1) {
        return n * fatorial(n - 1)
    }
    return n
}
```

Vamos a explicação completa do código:

- `const fatorial = n => {`: Estamos criando uma *arrow function* chamada `fatorial` que irá receber um parâmetro `n`.
- `if (n > 1) {`: Estamos verificando se o parâmetro `n` é maior do que `1`.
- `return n * fatorial(n - 1)`: Caso o `n` seja maior do `1` precisamos continuar multiplicando o mesmo pelo seus anteriores, sendo assim, chamamos a função `fatorial` novamente, porém, passando o anterior do número atual.
- `return n`: Caso o `n` seja `1` não precisa calcular mais nada, apenas devolve o próprio número pois a recursividade terminou.

Uma vez que temos a explicação, pode ser que ainda algumas partes não tenha ficado claro, então vamos à um pequeno teste de mesa:

```javascript
fatorial(5)

// if (n > 1) => 5 > 1 => Sim, o número cinco é maior do que um
// return n * fatorial(n - 1) => n - 1 => 5 - 1 => 4 => fatorial(4)

// if (n > 1) => 4 > 1 => Sim, o número quatro é maior do que um
// return n * fatorial(n - 1) => n - 1 => 4 - 1 => 3 => fatorial(3)

// if (n > 1) => 3 > 1 => Sim, o número três é maior do que um
// return n * fatorial(n - 1) => n - 1 => 3 - 1 => 2 => fatorial(2)

// if (n > 1) => 2 > 1 => Sim, o número dois é maior do que um
// return n * fatorial(n - 1) => n - 1 => 2 - 1 => 1 => fatorial(1)

// if (n > 1) => 1 > 1 => Não, o número um não é maior do que um
// return n => 1

// return 5 * fatorial(4) => 4 * fatorial(3) => 3 * fatorial(2) => 2 * fatorial(1) => 120
```

A ideia seria mais ou menos essa.

Tudo deve estar funcionando, podemos criar um arquivo `.js` qualquer e pedir para o node executá-lo:

```javascript
// fatorial.js
const fatorial = n => {
    if (n > 1) {
        return n * fatorial(n - 1)
    }
    return n
}

console.log(fatorial(5))
```

![Função fatorial funcionando](https://res.cloudinary.com/mahenrique94/image/upload/v1576026577/Screen_Shot_2019-12-10_at_21.44.50_ebj5dr.png)

Vamos imaginar, que por algum motivo, nosso sistema executou a função `fatorial` três vezes para o número `5`:

```javascript
console.log(fatorial(5))
console.log(fatorial(5))
console.log(fatorial(5))
```

![Função fatorial sendo chamada cinco vezez](https://res.cloudinary.com/mahenrique94/image/upload/v1576026577/Screen_Shot_2019-12-10_at_21.46.47_js79nj.png)

Tudo funcionou como o esperado, mas, vamos adicionar um *log* para cada chamada da função `fatorial`:

```javascript
const fatorial = n => {
    console.log('Chamando a função')
    if (n > 1) {
        return n * fatorial(n - 1)
    }
    return n
}
```

Agora, executando todas as três funções novamente:

```javascript
console.log(fatorial(5))
console.log(fatorial(5))
console.log(fatorial(5))
```

![Chamando a função fatorial com log](https://res.cloudinary.com/mahenrique94/image/upload/v1576026577/Screen_Shot_2019-12-10_at_21.48.48_j0e5do.png)

Repare que nossa função foi logada quinze vezes, ou seja, se estamos calculando o fatorial do número cinco e executamos a função três vezes, logo temos `5 * 3 = 15`.

## Implementando o Memoize

Agora que visualizamos o problema à ser resolvido, ou seja, vimos os diversos e repetidos processamento da função `fatorial`, precisamos pensar em uma solução.

Como dito no começo no *post* o *Memoize pattern* vem para resolver esses tipos de problemas, ou seja, com ele somos capazes de memorizar execuções de uma função `x` com parâmetros `n` (opcional).

O primeiro passo será criar uma função que vai memorizar alguma outra função:

```javascript
const memo = fn => null
```

Até o momento, nossa função `memo` apenas recebe um parâmetro `fn` (que será a função à ser memorizada), não processa nada e retorna `null`.

Precisamos criar algum sistema de *cache*, em outras palavras, precisamos criar uma maneira para lembrar as execuções da função. Para esse exemplo vou estar utilizando o `Map`:

```javascript
const memo = fn => {
    const cache = new Map()
}
```

O próximo passo será retornar uma nova função que irá receber o parâmetro à ser memorizado:

```javascript
const memo = fn => {
    const cache = new Map()
    return n => null
}
```

A função de retorno ainda não faz nada, apenas recebe um parâmetro `n` (que será o número do fatorial) e retorna `null`.

Em um primeiro momento, precisamos verificar se para o parâmetro `n` a função já foi executada ou não, sendo assim, precisamos verificar se a nossa memória conhece o valor passado para o parâmetro `n`. Podemos fazer isso utilizando a função `has` do `Map`:

```javascript
const memo = fn => {
    const cache = new Map()
    return n => {
        if (cache.has(n)) {
            return cache.get(n)
        }
    }
}
```

Veja que adicionamos uma condição que verifica se o `Map` possuí uma determinada chave, caso possua, ele devolve o valor mapeada para a mesma. Porém, caso não exista o valor na memória, precisamos executar e processar a função, obter seu resultado e mapear na nossa memória:

```javascript
const memo = fn => {
    const cache = new Map()
    return n => {
        if (cache.has(n)) {
            return cache.get(n)
        } else {
            const result = fn(n)
            cache.set(n, result)
            return result
        }
    }
}
```

Por fim, precisamos atualizar nosso `fatorial.js` para começar a fazer uso da função `memo`:

```javascript
const fatorial = n => {
    console.log('Chamando a função')
    if (n > 1) {
        return n * fatorial(n - 1)
    }
    return n
}

const memo = fn => {
    const cache = new Map()
    return n => {
        if (cache.has(n)) {
            return cache.get(n)
        } else {
            const result = fn(n)
            cache.set(n, result)
            return result
        }
    }
}

const fatorialMemo = memo(fatorial)

console.log(fatorialMemo(5))
console.log(fatorialMemo(5))
console.log(fatorialMemo(5))
```

![Calculando fatorial de forma memorizada](https://res.cloudinary.com/mahenrique94/image/upload/v1576026576/Screen_Shot_2019-12-10_at_21.59.31_hjbkbs.png)

Agora sim, os *logs* foram logados apenas na primeira execução da função, na segunda e terceira o valor foi retornado da memória.

Por fim, vamos entender o novo código:

- `const fatorialMemo = memo(fatorial)`: Aqui estamos fazendo com que a função `fatorial` seja memorizada.
- `console.log(fatorialMemo(5))`: Na primeira execução nosso `cache` será um `Map` vázio, ou seja, ele não tem nenhuma `key` armazenada. Sendo assim, a função `fatorial` será executada e processada, uma vez que a função retornou o fatorial de `5`, no caso `120`, nós adicionamos um novo valor para o `cache`, onde a chave será `5` e o valor `120`.
- `console.log(fatorialMemo(5))`: Na segunda execução o `cache` tem a chave `5`, então ele não precisa processar novamente, ele apenas devolve o valor setada para a mesma.
- `console.log(fatorialMemo(5))`: Na terceira e última execução o processo será o mesmo do anterior, o valor será retornado do `cache`.

Visualize o exemplo funcionando através do [repl.it](https://repl.it/) abaixo:

<iframe height="400px" src="https://repl.it/@mahenrique94/TST?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

### Saiba mais

Nesse cenário estou apenas *cacheando* o resultado completo da função `fatorial`, mas, também poderíamos calcular cada recursividade da função `fatorial`. Assim quando calcularmos o fatorial de `5`, já teríamos *cacheado* o fatorial de `5`, `4`, `3`, `2` e `1`.

O *Memoize* também pode ser aplicado para funções sem parâmetro, tudo vai depender de cada cenário, pode ser que faça sentido ou não.

## Conclusão

Nesse *post* vimos qual a motivação da crição e uso do *Memoize pattern* e como implementá-lo utlizando a linguagem JavaScript.

E aí, você já conhecia o *Memoize pattern*? Não deixe de comentar.

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
