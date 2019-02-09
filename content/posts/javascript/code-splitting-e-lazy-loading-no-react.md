---
autor: "Matheus Castiglioni"
categoria: "JavaScript"
disqus_identifier: "code-splitting-e-lazy-loading-no-react"
disqus_title: "Code Splitting E Lazy Loading No React"
disqus_url: "https://matheuscastiglioni-blog.netlify.com/code-splitting-e-lazy-loading-no-react"
date: 2018-11-30T08:29:59-02:00
draft: false
keywords: [ "Biblioteca", "Code splitting", "Front-End", "Lazy loading", "Lib", "React", "ReactJS", "Web" ]
slug: "code-splitting-e-lazy-loading-no-react"
tag: [ "Biblioteca", "Code splitting", "Front-End", "Lazy loading", "Lib", "React", "ReactJS", "Web" ]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1549586222/code-splitting-e-lazy-loading-no-react_5c0081c6a16d0_bg_y6ovbb.png"
title: "Code Splitting E Lazy Loading No React"
url: "/code-splitting-e-lazy-loading-no-react"
---

A maioria dos aplicativos feitos com a biblioteca [React](reactjs.org), terão seus arquivos empacotados, esse empacotamento pode ser feito com ferramentas de empacotação, por exemplo: [Webpack](https://webpack.js.org/) ou [Parcel](https://parceljs.org) (além de outras). Realizar o empacotamento de uma aplicação é o processo onde todos os arquivos importados e usados no projeto serão mergeados para um único arquivo. Esse único arquivo é onde todo o projeto foi empacotado e mesclado, ele é o responsável por carregar a aplicação inteira de uma vez e deixá-la funcionando.

Por exemplo:

![Aplicativo rodando sem lazy loading](https://res.cloudinary.com/mahenrique94/image/upload/v1549586275/5c007490479db_bg_nimw2l.gif)

A aplicação para exemplo do *post* não tem nada demais, apenas um sistema de rotas, onde:

- `/`: Renderiza o `HomeComponent`.
- `/a`: Renderiza o `AComponent`.
- `/b`: Renderiza o `BComponent`.
-  `/c`: Renderiza o `CComponent`.

As rotas não estão sendo visíveis, pois, preferi gravar apenas a aplicação em funcionamento e não o navegador de forma completa.

Se olharmos na aba *network* do navegador (no caso do Chrome), podemos ver que tudo está sendo baixado de uma única vez:

![Network sem lazy loading](https://res.cloudinary.com/mahenrique94/image/upload/v1549586293/5c00749f72edd_bg_f8m7r2.png)

Mas, será que podemos melhorar nossa aplicação?

![Pensando se a aplicação pode ser melhorada](https://res.cloudinary.com/mahenrique94/image/upload/v1549586315/5c007596cdd9a_bg_eyunxz.gif)

Sim, podemos melhorar o desempenho e performance da mesma, assunto do tópico á seguir.

## Code Splitting

Uma técnica muito famosa para resolver esse tipo de problema é chamada de **Code Splitting** (separação de código), como funciona essa técnica? Basicamente, pegamos nosso único arquivo `.js` que foi empacotado e o dividimos em outros pequenos arquivos (geralmente um para cada componente). Dessa maneira, não teremos apenas um `.js` com todo o código necessário para que nossa aplicação funcione de forma esperada, ao invés, teremos pequenos `.js's` separados:

```
main.js

home.js
a.js
b.js
c.js
```

Ao grosso modo, teremos algo parecido com o exemplo acima (não que seja assim, foi apenas um exemplo para um melhor entendimento).

Dessa maneira, conseguimos carregar os componentes de forma separada, ou seja, apenas quando forem necessários, por exemplo:

1. Ao acessar a rota `/` faz o *download* do arquivo `.js` responsável pelo `HomeComponent` e o renderiza.
2. Ao acessar a rota `/a` faz o *download* do arquivo `.js` responsável pelo `AComponent` e o renderiza.
3. Ao acessar a rota `/b` faz o *download* do arquivo `.js` responsável pelo `BComponent` e o renderiza.
4. Ao acessar a rota `/c` faz o *download* do arquivo `.js` responsável pelo `CComponent` e o renderiza.

Aqui já vemos uso de outra técnica, conhecida como **Lazy Loading** (carregamento preguiçoso), em outras palavras, é a técnica realizada para carregar os arquivos `.js` apenas quando forem necessários (o *download* será feito apenas uma vez).

### Implementando o Code Splitting

Chega de teoria e vamos para a prática, hoje na aplicação para exemplo do *post* temos um componente referente as rotas da aplicação, o `Routes`:

```javascript
import React from 'react'

import { Switch, Router, Route } from 'react-router'

import { history } from './history'

import HomeComponent from '../components/HomeComponent'

import AComponent from '../components/AComponent'
import BComponent from '../components/BComponent'
import CComponent from '../components/CComponent'

const Routes = () => (

    <Router history={ history }>
        <Switch>
            <Route component={ HomeComponent } exact path="/"/>
            <Route component={ AComponent } exact path="/a"/>
            <Route component={ BComponent } exact path="/b"/>
            <Route component={ CComponent } exact path="/c"/>
        </Switch>
    </Router>

)

export default Routes
```

Basicamente o mesmo está apenas importando os componentes e mapeando suas rotas. Por onde começamos a implementar o *code splitting*? O primeiro passo, será mudar a forma que estamos importando os componentes, não podemos mais importá-los diretamente através dos *modules* (módulos).

Precisamos começar a fazer uso da função `lazy` do React, para isso, devemos importá-la:

```javascript
import React, { lazy } from 'react'
```

Mas, como utilizá-la? Agora nossos componentes devem ser variáveis que irão receber o componente através da função `lazy`:

```javascript
const AComponent = lazy(() => import('../components/AComponent'))
```

O mesmo pode ser feito para todos os componentes dos quais queremos realizar o *code splitting* e *lazy loading*:

```javascript
const HomeComponent = lazy(() => import('../components/HomeComponent'))

const AComponent = lazy(() => import('../components/AComponent'))
const BComponent = lazy(() => import('../components/BComponent'))
const CComponent = lazy(() => import('../components/CComponent'))
```

Mas, ao terminar a mudança e salvar, temos um problema:

![Erro por falta do componente Suspense](https://res.cloudinary.com/mahenrique94/image/upload/v1549586343/5c007a0bdba7b_bg_x0cwpc.png)

Afinal, o que está acontecendo?

## Conhecendo o componente Suspense

Bom, vamos entender um pouco melhor nosso problema, basicamente nosso erro é:

> Um componente do React foi suspenso enquanto renderizava, porque não adicionamos o componente `Suspense` como pai de nosso componente que será carregado através de *lazy loading*.

Para resolver o problema simplesmente podemos encapsular nossas rotas dentro do componente `Suspense`:

```javascript
import React, { Suspense, lazy } from 'react'

// códigos omitidos

const Routes = () => (

    <Router history={ history }>
        <Switch>
            <Suspense fallback={ <h1>Rendering...</h1> }>
                <Route component={ HomeComponent } exact path="/"/>
                <Route component={ AComponent } exact path="/a"/>
                <Route component={ BComponent } exact path="/b"/>
                <Route component={ CComponent } exact path="/c"/>
            </Suspense>
        </Switch>
    </Router>

)

// códigos omitidos
```

Agora, se tentarmos utilizar a aplicação novamente, temos o seguinte resultado:

![Utilizando aplicação com lazy loading e code splitting](https://res.cloudinary.com/mahenrique94/image/upload/v1549586363/5c007dbce65a2_bg_goyh2b.gif)

E podemos ver que nossos arquivos `.js` são baixados apenas quando necessários (quando acessarmos a rota de cada componente):

![Baixando arquivos javascript quando necessários](https://res.cloudinary.com/mahenrique94/image/upload/v1549586381/5c007dbce750d_bg_m7oo9z.gif)

Será que agora tudo está correto? Não, temos apenas um pequeno detalhe para corrigir, ao carregar a aplicação, se olharmos o console do navegador:

![Mensagem de erro das rotas](https://res.cloudinary.com/mahenrique94/image/upload/v1549586400/5c0085ff5bc04_bg_ol11tm.png)

Recebemos uma mensagem de erro, o que está acontecendo é que agora estamos passando um `Object` para a propriedade `component` do componente `Route`, porém, o mesmo espera que essa *props* seja uma função (*function*). Podemos resolver o problema de forma muito simples, apenas encapsulando nossos componentes com uma *arrow function*:

```javascript
const Routes = () => (

    <Router history={ history }>
        <Switch>
            <Suspense fallback={ <h1>Rendering...</h1> }>
                <Route component={ () => <HomeComponent/> } exact path="/"/>
                <Route component={ () => <AComponent/> } exact path="/a"/>
                <Route component={ () => <BComponent/> } exact path="/b"/>
                <Route component={ () => <CComponent/> } exact path="/c"/>
            </Suspense>
        </Switch>
    </Router>

)
```

Agora, podemos utilizar e navegar pela aplicação sem erro nenhum em nosso console.

Mas, afinal, porque tivemos que utilizar o componente `Suspense`?

### Saiba mais

Porque foi necessário o uso do `Suspense`? Ele foi criado pensando em melhorar a usabilidade de nossa aplicação, geralmente enquanto uma *request* está sendo feita ou um componente não está pronto para ser renderizado, nós mostramos um *Spinner* (ou qualquer outro nome que você use) para o usuário. Dessa maneira conseguimos dizer para ele:

> Olha, calma, a aplicação está processando...

E quando de fato tudo termina e esta pronto, nosso componente é renderizado com suas informações.

Pensando em facilitar esse tipo de implementação para nós desenvolvedores, foi criado o componente `Suspense` que através do `fallback` faz exatamente isso, ele recebe um componente que será mostrado enquanto o *download* do arquivo `.js`  está sendo feito e a renderização do nosso componente ainda não foi realizada.

Não percebemos muito isso, pois nossa *internet* é rápida, mas, graças as ferramentas do Google Chrome podemos simular uma *internet* 3G, assim conseguiremos ver o resultado de forma mais clara:

![Usando aplicação com 3G](https://res.cloudinary.com/mahenrique94/image/upload/v1549586424/5c00803772b9c_bg_xgcqkw.gif)

Para o exemplo do *post* apenas foi passado uma *tag* `h1` dizendo que está sendo renderizado, mas, em um exemplo do mundo real, o mesmo seria um *Spinner* (como eu chamo esse tipo de componente).

## Conclusão

Nesse *post* mostrei e expliquei um pouco sobre *Code Splitting* e *Lazy Loading*, duas técnicas para melhorar a performance e desempenho da nossa aplicação, pois, os arquivos `.js` do projeto serão menores e apenas serão baixados quando forem necessários. Com isso, também conseguimos economizar um pouco a *internet* do usuário (caso seja móvel).

Se você gostou do projeto, pode encontrá-lo em meu [github](https://github.com/mahenrique94/post-code-splitting).

Não deixe de comentar ou me procurar em redes sociais para falarmos um pouco sobre o assunto ou tirar alguma dúvida, se quiser, faça o cadastro na [*newsletter*](http://eepurl.com/ggP7Rv) e recebe novidades por email assim que forem publicadas.

Até a próxima.
