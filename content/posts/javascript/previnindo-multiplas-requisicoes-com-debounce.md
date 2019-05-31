---
autor: "Matheus Castiglioni"
categoria: "JavaScript"
disqus_identifier: "previnindo-multiplas-requisicoes-com-debounce"
disqus_title: "Previnindo Multiplas Requisições Com Debounce"
disqus_url: "https://blog.matheuscastiglioni.com.br/previnindo-multiplas-requisicoes-com-debounce"
date: 2019-05-30T21:03:42-03:00
draft: false
keywords: ["debounce", "debounce time", "front-end", "time", "web"]
slug: "previnindo-multiplas-requisicoes-com-debounce"
tag: ["debounce", "debounce time", "front-end", "time", "web"]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1559261419/debounce_bb0evh.png"
title: "Previnindo Multiplas Requisições Com Debounce"
url: "/previnindo-multiplas-requisicoes-com-debounce"
---

Imagine que temos um sistema rodando em produção e resolvemos disponibilizar uma nova funcionalidade, referente lançamentos de vendas. Para exemplo do *post* vamos imaginar um `form` bem simples, onde o usuário vai informar o cliente, produto, quantidade e valor, poderíamos ter algo parecido com:

```markup
<form>
    <div>
        <label>Cliente</label>
        <input name="cliente">
    </div>
    <div>
        <label>Produto</label>
        <input name="produto">
    </div>
    <div>
        <label>Quantidade</label>
        <input name="quantidade">
    </div>
    <div>
        <label>Valor</label>
        <input name="valor">
    </div>
    <button>Salvar</button>
</form>
```

Não vamos nos preocupar com usabilidade, fluxo do formulário, de onde as informações vem, como o formulário é preenchido, etc... A ideia é apenas visualizar um formulário minimalista para chegarmos no problema. Nosso formulário está pronto, mas, precisamos criar uma função que de fato vai pegar os valores dos campos, montar as informações que serão enviadas para nossa API (*back-end*) e fazer a requisição, por exemplo:

```javascript
const salvar = () => {
    // pega o valor dos campos
    // monta o objeto para envio (pode ser um FormData) ou algo derivado
    // faz a requisição
}
```

Perfeito, agora temos nossa função, então vamos chamá-la assim que o formulário for submetido:

```markup
<form onsubmit="salvar()">
    ...
</form>
```

Legal, tudo está funcionando como o planejado:

1. O usuário preenche o formulário.
2. Clica no botão salvar.
3. Nossa função salvar é chamada.
4. Os valores do formulário são pegos.
5. As informações para enviar a API são montadas.
6. A requisição para a API é disparada.
7. A venda é criada.

Isso tudo ocorre em um cenário feliz, mas, imagine que a *internet* do usuário está lenta e quando ele clica no botão nada acontece ou pior ainda, o usuário acha que o *click* não foi disparado e clica mais uma vez, mais uma, mais uma, ou seja, ele realiza vários *click's* seguidos no botão.

Por fim, várias vendas são criadas de forma repetida, algo que não podemos deixar acontecer, como podemos resolver o problema? Sim, você deve ter pensado algo parecido com:

> Assim que o primeiro *click* for realizado podemos desabilitar o botão e só habilitá-lo novamente quando a requisição for finalizada.

É uma ótima solução, mas, realizar várias requisições seguidas através de vários eventos disparados pelo usuário é algo bem comum, sendo assim, existe uma técnica (padrão) chamada ***debounce***, também conhecida por ***debounce time***. A ideia é que ao realizar o primeiro *click* a função deve ser agendada para ser executada após X tempo, caso o usuário clique novamente no botão antes desse tempo ser atingido um novo agendamento é realizado e o agendamento anterior é removido.

Assim, conseguimos garantir que se o usuário clicar várias e várias vezes seguida a função só será chamada uma única vez (quando o tempo for atingido), ou seja, quando houver uma pausa entre os *click's*.

Sabemos do problema e como podemos resolvê-lo, mas, como podemos implementar esse padrão chamado *debounce* (*debounce pattern*)?

## Criando a função *debounce*

O primeiro passo é criar nossa função de *debounce*:

```javascript
const debounce = () => null
```

Até o momento ela não faz nada, mas, vamos precisar receber o que (função) ela deve agendar e para quando (tempo) o agendamento deve ser feito.

```javascript
const debounce = (fn, time) => null
```

Veja que criamos dois parâmetros para nossa função, sendo eles:

- `fn`: Função para ser executada quando o tempo de agendamento for atingido.
- `time`: Tempo em milissegundos para agendar a função.

Agora, como podemos agendar a execuçào de uma função? Podemos fazer isso através do `setTimeout` que recebe a função á ser agendada como primeiro parâmetro e o tempo de agendamento como segundo:


```javascript
const debounce = (fn, time) => {
    return () => {
        setTimeout(fn, time)
    }
}
```

Calma, aos poucos você vai entender o código completo, um passo de cada vez.

Repare que nossa função está devolvendo uma nova função, essa nova função está implementada com o *debounce*, logo você irá entender o porque isso foi necessário.

Legal, vamos testar nossa função?

```javascript
const hello = () => console.log('Hello Debounce!')
const helloDebounced = debounce(hello, 5000)
helloDebounced()
helloDebounced()
helloDebounced()
```

Se você testar, irá ver que após cinco segundos foi logado a frase `Hello Debounce!` três vezes, o que não tem nada a ver com o comportamento que esperávamos, porque isso aconteceu?

O problema é que em nenhum momento cancelamos o agendamento anterior e reagendamos um novo, como podemos fazer isso?

Para agendar a execução de uma função temos o `setTimeout` e para cancelar o agendamento temos o `clearTimeout`, podemos fazer algo parecido com:

```javascript
const debounce = (fn, time) => {
    let debounceId = 0
    return () => {
        clearTimeout(debounceId)
        debounceId = setTimeout(fn, time)
    }
}
```

Agora sim, se você tentar realizar o mesmo exemplo anterior:

```javascript
const hello = () => console.log('Hello Debounce!')
const helloDebounced = debounce(hello, 5000)
helloDebounced()
helloDebounced()
helloDebounced()
```

Poderá ver que após os mesmos cinco segundos, apenas uma vez a frase foi logada, exatamente como a gente esperava que acontecesse.

Dessa maneira, o usuário pode clicar no botão quantas vezes ele quiser, enquanto não houver uma pausa de cinco segundos (nosso tempo definido) a função não será executada. Para exemplo e explicação eu configurei o agendamento em cinco segundos, mas, em um cenário real o tempo provavelmente será muito menor, algo em torno de meio segundo ou um segundo, por exemplo.

## Entendendo o funcionamento do *debounce*

Agora, vamos entender o fluxo completo, o porque e como nossa função funciona.

1. O primeiro passo será inicializar um `debounceId` com o valor inicial de zero (`0`).
2. Retornar uma nova função (que será executada várias vezes).
3. Ao executar essa nova função ele irá limpar o agendamento atual, no caso, na primeira vez o nosso agendamento zero (`0`).
4. Após limpar o agendamento existente um novo será criado e o id desse agendamento será armazenado em nosso `debounceId`.
5. Na segunda chamada da função o processo será o mesmo, limpar o agendamento atual (id do agendmento anterior) e agendar um novo.
6. Caso o tempo de agendamento seja atingido, ou seja, se agendamos a execução para daqui cinco segundos, quando nenhuma invocação de nossa função ocorrer durante esse tempo, ai ela será de fato executada.

Conseguimos prevenir várias requisições para nosso servidor e evitamos e duplicação de registros.

Vale ressaltar que o *debounce* não é exclusivamente para submissões de formulários, ele pode ser aplicado para todo problema onde precisamos evitar várias chamadas seguidas de uma determinada função.

## Conclusão

Nesse *post* mostrei e expliquei como podemos criar nosso próprio *debounce*, ele é muito utilizado para resolver problemas de várias execuções repetidas de funções. Com ele conseguimos evitar que várias chamadas sejam todas executadas, onde, apenas a última de fato será finalizada.

Lembrando que essa não é a única implementação de *debounce*, você pode ver várias outras maneiras, no *post* eu fiz dessa maneira, pois, achei que fazia sentido.

E aí, você já conhecia o *debounce*? Não deixe de comentar, se você gostou desse *post* e quer ser notificado com novos *post's*, não deixe de assinar a [*newsletter*](http://eepurl.com/ggP7Rv) e receber as novidades por email.

Até a próxima.
