---
autor: "Matheus Castiglioni"
categoria: "JavaScript"
disqus_identifier: "diminuindo-processamento-com-use-memo-em-react"
disqus_title: "Diminuindo Processamento com useMemo em React"
disqus_url: "https://blog.matheuscastiglioni.com.br/diminuindo-processamento-com-use-memo-em-react"
date: 2020-01-29T21:21:49-03:00
draft: false
keywords: ["Front-End", "React", "ReactJS", "Hooks", "React Hooks", "Web"]
slug: "diminuindo-processamento-com-use-memo-em-react"
tag: ["Front-End", "React", "ReactJS", "Hooks", "React Hooks", "Web"]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1580343932/react_bqnaur.jpg"
title: "Diminuindo Processamento com useMemo em React"
url: "/diminuindo-processamento-com-use-memo-em-react"
---

Cada vez mais nossos usuários exigem que os sistemas sejam mais rápidos e infelizmente algumas vezes deixamos passar pequenos detalhes que podem fazer toda diferença em ambientes de produção. Podemos adicionar toda regra para realizar *lazy loading*, *code splitting*, *cache*, aplicar técnias de performance, etc...

Mas, um detalhe muito importante é a quantidade de processamento que nossos componentes estão realizando, será que eles só processam aquilo que é necessário? Para exemplificar o problema, vamos começar criando um novo projeto em React:

```bash
create-react-app post-utilizando-use-memo
```

**Obs**: Sim, eu ainda prefiro utilizar o CRA instalado localmente na minha máquina.

Aguarde todo processo de *download* e configuração finalizar.

Uma vez que tudo terminou, podemos acessar nosso projeto:

```bash
cd post-utilizando-use-memo
```

E subir o servidor de desenvolvimento:

```bash
npm start
```

Com isso temos uma aplicação padrão do React rodando:

![Aplicação padrão React](https://res.cloudinary.com/mahenrique94/image/upload/v1580344574/Screen_Shot_2020-01-29_at_21.35.27_a4tssh.png)

Vamos adicionar algumas funcionalidades:

1. Implementar um contador que poderá ser decrementado ou incrementado.
2. Implementar um botão para gerar um número aleatório e adicioná-lo em uma lista.

Chega de papo e vamos para os códigos.

## Implementar um contador que poderá ser decrementado ou incrementado

Nesse momento não irei focar muito no React em si, então não irei passar por todos os passos explicando cada um, basicamente vamos abrir o `App.js` e realizar algumas modificações nos códigos do mesmo, o resultado será:

```javascript
import React, { useState } from 'react';
import './App.css';

function App() {
  const [counter, updateCounter] = useState(0)

  const handleDecrement = () => updateCounter(counter - 1)

  const handleIncrement = () => updateCounter(counter + 1)

  return (
    <div className="App">
      <fieldset>
        <legend>Counter</legend>
        <p>Contador: {counter}</p>
        <button onClick={handleDecrement}>Decrementar</button>
        <button onClick={handleIncrement}>Incrementar</button>
      </fieldset>
    </div>
  );
}

export default App;
```

Após salvar as modificações, podemos voltar no navegador e ver que a interface do contador está pronta:

![Interface visual do contador](https://res.cloudinary.com/mahenrique94/image/upload/v1580344973/Screen_20Shot_202020-01-29_20at_2021.42.31_o3vc5u.png)

Isso deve ser o suficiente para nosso contador estar funcionando com suas duas opções (decrementar e incrementar), podemos testá-lo e ver que tudo funciona como o esperado:

![Testando o contador](https://res.cloudinary.com/mahenrique94/image/upload/v1580345110/ezgif.com-optimize_ya4ssi.gif)

Com a primeira funcionalidade pronta, vamos implementar a segunda.

## Implementar um botão para gerar um número aleatório e adicioná-lo em uma lista

Assim como foi feito com o contador, não irei passar por todo o processo de implementação do número aleatório e sim disponibilizar o código final do `App.js`:

```javascript
import React, { useState } from 'react';
import './App.css';

function App() {
  const [counter, updateCounter] = useState(0)
  const [numbers, updateNumbers] = useState([])

  const handleDecrement = () => updateCounter(counter - 1)
  const handleIncrement = () => updateCounter(counter + 1)
  const handleAdd = () => updateNumbers([
    ...numbers,
    Math.random().toFixed(2),
  ])

  return (
    <div className="App">
      <fieldset>
        <legend>Counter</legend>
        <p>Contador: {counter}</p>
        <button onClick={handleDecrement}>Decrementar</button>
        <button onClick={handleIncrement}>Incrementar</button>
      </fieldset>
      <fieldset>
        <legend>Números</legend>
        <ul>
          {numbers.map((n, i) => <li key={i}>{n}</li>)}
        </ul>
        <button onClick={handleAdd}>Adicionar</button>
      </fieldset>
    </div>
  );
}

export default App;
```

Com essas modificações feitas, devemos ter nossa listagem de números prontas:

![Listagem de numeros](https://res.cloudinary.com/mahenrique94/image/upload/v1580345345/Screen_20Shot_202020-01-29_20at_2021.48.07_ccvkms.png)

E funcionando:

![Listagem de numeros funcionando](https://res.cloudinary.com/mahenrique94/image/upload/v1580345498/ezgif.com-optimize_1_uu8m1s.gif)

Maravilha, tudo funcionando como o esperado.

## Visualizando o problema

Agora, vamos adicionar duas novas funcionalidades, queremos mostrar o contador com o valor dobrado e multiplicado por si, ou seja:

> Caso o valor do contador seja 3, o valor dobrado será 2x3 = 6 e o valor multiplicado por si será 3x3 = 9

Como de costume, vamos modificar nosso `App.js`:

```javascript
import React, { useState } from 'react';
import './App.css';

function App() {
  const [counter, updateCounter] = useState(0)
  const [numbers, updateNumbers] = useState([])
  const counterDouble = counter * 2
  const counterMult = counter * counter

  const handleDecrement = () => updateCounter(counter - 1)
  const handleIncrement = () => updateCounter(counter + 1)
  const handleAdd = () => updateNumbers([
    ...numbers,
    Math.random().toFixed(2),
  ])

  return (
    <div className="App">
      <fieldset>
        <legend>Counter</legend>
        <p>Contador: {counter}</p>
        <p>Contador dobrado: {counterDouble}</p>
        <p>Contador multiplicado: {counterMult}</p>
        <button onClick={handleDecrement}>Decrementar</button>
        <button onClick={handleIncrement}>Incrementar</button>
      </fieldset>
      <fieldset>
        <legend>Números</legend>
        <ul>
          {numbers.map((n, i) => <li key={i}>{n}</li>)}
        </ul>
        <button onClick={handleAdd}>Adicionar</button>
      </fieldset>
    </div>
  );
}

export default App;
```

Após realizar as devidas modificações e testes, podemos ver que tudo continua funcionando como o esperado. O problema é que nosso `counterDouble` e `counterMult` sempre estão sendo processados, mesmo que o valor do `counter` não mude, as multiplicações estão sendo processadas.

Para que esse problema fique mais claro, vamos adicionar um novo contador que será multiplicado por um valor randômico:

```javascript
import React, { useState } from 'react';
import './App.css';

function App() {
  const [counter, updateCounter] = useState(0)
  const [numbers, updateNumbers] = useState([])
  const counterDouble = counter * 2
  const counterMult = counter * counter
  const counterRand = counter * Math.random()

  const handleDecrement = () => updateCounter(counter - 1)
  const handleIncrement = () => updateCounter(counter + 1)
  const handleAdd = () => updateNumbers([
    ...numbers,
    Math.random().toFixed(2),
  ])

  return (
    <div className="App">
      <fieldset>
        <legend>Counter</legend>
        <p>Contador: {counter}</p>
        <p>Contador dobrado: {counterDouble}</p>
        <p>Contador multiplicado: {counterMult}</p>
        <p>Contador randômicro: {counterRand}</p>
        <button onClick={handleDecrement}>Decrementar</button>
        <button onClick={handleIncrement}>Incrementar</button>
      </fieldset>
      <fieldset>
        <legend>Números</legend>
        <ul>
          {numbers.map((n, i) => <li key={i}>{n}</li>)}
        </ul>
        <button onClick={handleAdd}>Adicionar</button>
      </fieldset>
    </div>
  );
}

export default App;
```

Agora para testar, vamos incrementar o contador algumas vezes e depois adicionar alguns números para a listagem:

![Mostrando o problema](https://res.cloudinary.com/mahenrique94/image/upload/v1580346330/ezgif.com-optimize_2_yboqwt.gif)

Repare que ao adicionar novos números na lista, o contador randômico também é atualizado, porém, o valor do contador não mudou, então esse processamento não deveria ser feito.

## Cacheando processamento com useMemo

Para essas situações foi criado o *hook* chamado `useMemo`, com ele conseguimos garantir que o processamento das contas somente será realizado caso o valor do `counter` mude.

Para usá-lo devemos passar uma função como primeiro parâmetro, o retorno da função será o valor armazenado em nossa variável e como segundo parâmetro informamos um `array`, onde cada item do `array` será utilizado para verificar se o processamento deve ou não ser feito, por exemplo:

```javascript
const counterDouble = useMemo(() => counter * 2, [counter])
```

Nesse trecho estamos passando uma *arrow function* como primeiro parâmetro, ela irá multiplicar o valor do `counter` por `2`e logo em seguida retornar o resultado da multiplicação. Sendo assim, o resultado será armazenado na variável `counterDouble`.

Como segundo parâmetro, estamos passando um `array` com o *state* `counter`, isso porque ele é a variável que queremos utilizar como base para a verificação do processamento ou não, ou seja, caso o valor do `counter` mude o processamento deve ser feito, senão, o valor deve ser retornado da memória.

Essa pratica de memorizar um valor para economisar processamento é conhecida como *memoized*, por isso o *hook* chama `useMemo` (`Memo` de *memoized*). Caso queira saber mais sobre o assunto, recentemente postei um artigo no blog sobre o mesmo:

- [Memorizando Funções Em Javascript](https://blog.matheuscastiglioni.com.br/memorizando-funcoes-em-javascript/)

Por fim, vamos refatorar nosso `App.js` para fazer uso do `useMemo` em nossas variáveis computadas:

```javascript
import React, { useMemo, useState } from 'react';
import './App.css';

function App() {
  const [counter, updateCounter] = useState(0)
  const [numbers, updateNumbers] = useState([])
  const counterDouble = useMemo(() => counter * 2, [counter])
  const counterMult = useMemo(() => counter * counter, [counter])
  const counterRand = useMemo(() => counter * Math.random(), [counter])

  const handleDecrement = () => updateCounter(counter - 1)
  const handleIncrement = () => updateCounter(counter + 1)
  const handleAdd = () => updateNumbers([
    ...numbers,
    Math.random().toFixed(2),
  ])

  return (
    <div className="App">
      <fieldset>
        <legend>Counter</legend>
        <p>Contador: {counter}</p>
        <p>Contador dobrado: {counterDouble}</p>
        <p>Contador multiplicado: {counterMult}</p>
        <p>Contador randômicro: {counterRand}</p>
        <button onClick={handleDecrement}>Decrementar</button>
        <button onClick={handleIncrement}>Incrementar</button>
      </fieldset>
      <fieldset>
        <legend>Números</legend>
        <ul>
          {numbers.map((n, i) => <li key={i}>{n}</li>)}
        </ul>
        <button onClick={handleAdd}>Adicionar</button>
      </fieldset>
    </div>
  );
}

export default App;
```

Com essas modificações, podemos realizar o teste novamente, ou seja, incrementar o contador algumas vezes e depois adicionar alguns números para a listagem:

![Verificando o uso do useMemo](https://res.cloudinary.com/mahenrique94/image/upload/v1580347102/ezgif.com-optimize_3_hzddsw.gif)

Repare que agora ao adicionar novos itens na listagem, os valores do contador não mudam, isso porque o valor do contador não mudou, sendo assim, não é necessário processá-lo novamente e o valor é pego da memória.

![Comemorando que tudo deu certo](https://res.cloudinary.com/mahenrique94/image/upload/v1580347469/ezgif.com-optimize_4_ki8mi6.gif)

## Conclusão

Nesse *post* vimos como podemos utilizar o *hook* `useMemo` para memorizar resultados e economisar no processamento de variáveis.

Se você gostou do *post* e quer receber novidades por email, fique à vontade para assinar a *newsletter* abaixo.

Abraços, até a próxima.

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
