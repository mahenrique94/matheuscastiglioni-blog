---
autor: "Matheus Castiglioni"
categoria: "Javascript"
disqus_identifier: "medindo-a-performance-de-componentes-no-react"
disqus_title: "Medindo a Performance De Componentes No React"
disqus_url: "http://blog.matheuscastiglioni.com.br/medindo-a-performance-de-componentes-no-react"
date: 2018-12-18T10:45:08-02:00
draft: false
keywords: [ "Front-End", "Performance", "Profiler", "React", "ReactJS" ]
slug: "medindo-a-performance-de-componentes-no-react"
tag: [ "Front-End", "Performance", "Profiler", "React", "ReactJS" ]
thumbnail: "http://blog.matheuscastiglioni.com.br/arquivo/download/posts/2018/12/medindo-a-performance-de-componentes-no-react_5c11a9267db95_bg.jpg"
title: "Medindo a Performance De Componentes No React"
url: "/medindo-a-performance-de-componentes-no-react"
---

Imagine que você criou sua aplicação em [React](https://www.reactjs.org/) e realizou o *deploy* para produção, ou seja, hoje a mesma já está funcionando e sendo utilizada pelos usuários. Até aí tudo bem, nada de novo, agora, imagine que um usuário abriu uma reclamação dizendo:

> Olá, estou achando que a aplicação está um pouco lenta.

Veja que o usuário está reclamando sobre o desempenho da aplicação, ele diz estar muito lenta, como podemos verificar e medir se realmente faz sentido essa reclamação? No caso de uma aplicação feita com a biblioteca React, podemos utilizar o [React Profile](https://www.reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html) para medir o quanto nossos componentes estão sendo performáticos.

## Conhecendo a aplicação

Antes de entrarmos de fato no assunto e falarmos sobre o Profiler, vamos dar uma visualizada no funcionamento da aplicação:

![Aplicação em funcionamento](http://blog.matheuscastiglioni.com.br/arquivo/download/arquivos-imagens/2018/12/5c11a51b01408_bg.gif)

Nada demais, apenas uma aplicação para controlar listas de tarefas.

## Introdução ao Profiler

Agora que já entendemos o funcionamento da nossa aplicação, vamos de fato para o que interessa.

O que seria esse tal de Profiler? É um *plugin* introduzido na versão **16.5** do React que utiliza a [Profiler API](https://github.com/reactjs/rfcs/pull/51) (ainda em experimento). A ideia dele é basicamente coletar informações de cronometragem dos componentes.

Calma, que aos poucos tudo irá ficar mais claro.

Para conseguir utilizar o Profiler do React, alguns passos serão necessários:

1. Instalar a extensão [React Devtools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) do navegador Google Chrome.
2. Ao abrir a aplicação na tela, abrir o console do navegador.
3. Navegar até a aba **React** (onde será possível visualizar a opção do Profiler).

Após realizar todos os passos, se tudo deu certo, você deve visualizar algo parecido com:

![Mostrando a aba Profiler do chrome](http://blog.matheuscastiglioni.com.br/arquivo/download/arquivos-imagens/2018/12/5c11a8a0959dd_bg.jpg)

Clicando na opção Profiler já iremos ver a tela do mesmo sendo mostrada:

![Aba Profiler selecionada](http://blog.matheuscastiglioni.com.br/arquivo/download/arquivos-imagens/2018/12/5c11a9b12a759_bg.png)

Legal, agora já conseguimos utilizar e dar nossos primeiros passos com o mesmo.

## Entendendo o Profiler

O Profiler não é nada mágico, para que ele funcione é necessário algumas ações manuais. Basicamente seu funcionamento consiste em **Gravar** e **Ler**.

Para começarmos a utilizá-lo é necessário clicar no botão de *record*:

![Botão para começar a gravar](http://blog.matheuscastiglioni.com.br/arquivo/download/arquivos-imagens/2018/12/5c18364e1fb19_bg.jpg)

Após iniciar a gravação, uma mensagem é mostrada, nos informando que a gravação está em andamento: **Recording profilling data..."** e um botão de *stop* será visível:

![Botão para pausar a gravação](http://blog.matheuscastiglioni.com.br/arquivo/download/arquivos-imagens/2018/12/5c1835e93f2f8_bg.png)

Até aí tudo bem, mas, o que pretendemos gravar? A ideia é gravar o uso de nossa aplicação, dessa maneira, o Profiler irá conseguir coletar informações de performance a cada vez que a aplicação é renderizada. Uma vez que a gravação foi iniciada, interaja normalmente com a aplicação.

Após algumas interações e uso da aplicação, é hora de pausar e terminar a mesma.

Para exemplo do *post*, após iniciar a gravação, adicionei três tarefas em nossa lista:

![Lista de tarefas com tarefas](http://blog.matheuscastiglioni.com.br/arquivo/download/arquivos-imagens/2018/12/5c1837931d78d_bg.png)

Repare que as tarefas: `Estudar HTML`, `Estudar CSS` e `Estudar JavaScript` foram adicionadas. Após realizar essas três inserções, pausei e terminei a gravação, onde obtive o seguinte resultado no Profiler:

![Profiler com interações gravadas](http://blog.matheuscastiglioni.com.br/arquivo/download/arquivos-imagens/2018/12/5c1837931c988_bg.png)

**Obs**: Para que o Profiler consiga alguma informação é necessário pelo menos uma interação com a aplicação, ou seja, pelo menos uma nova renderização deve ser realizada. Caso não ocorre nenhuma renderização, nenhum dado será coletado e mostrado.

## Funcionamento do Profiler

Antes que você entenda o que foi coletado pelo Profiler, vamos entender como ele realizou essa coleta de informação. O React trabalha em duas fases:

1. A faze de renderização.
2. A faze de *commit*.

Na faze de renderização o React determina o que foi mudado (exemplo: o DOM). Durante essa faze o React chama a função `render` dos componentes e compara o novo resultado com a renderização anterior.

Já na faze de *commit* é quando de fato o React aplica essas mudanças. Essa mudança pode ser uma inserção, atualização ou remoção de nós no DOM (no caso do React DOM). Nessa faze o React também chama alguns ciclos de vida dos componentes, tais: `componentDidMount` e `componentDidUpdate`.

A ferramente Profiler, trabalha na faze de *commit*, por isso, que é necessário pelo menos uma renderização para que a coleta de informações seja realizada.

## Lendo informações coletadas

Sabendo como o Profiler funciona e coleta suas informações, vamos entender o que foi coletado.

Como mencionado anteriormente, o Profiler trabalha na faze dos *commit's*, onde os mesmos podem ser vistos no topo da ferramenta:

![Mostrando os commits feitos](http://blog.matheuscastiglioni.com.br/arquivo/download/arquivos-imagens/2018/12/5c183a738118c_bg.jpg)

Cada barrinha representa um único *commit*, onde o *commit* selecionado fica com a cor preta em sua barra (no caso o primeiro está selecionado). É possível realizar a navegação entre eles tanto clicando nas barras, quanto nas setas da esquerda ou direita.

Também é possível realizar filtros em cima desses *commit's*, isso pode ser feito clicando na engrenagem ao lado da barra de *commit's*. Ao clicar, uma caixa irá abrir para definir os filtros, sendo eles:

- Mostrar elementos nativos do HTML.
- Esconder *commit's* que demoraram X milisegundos para serem renderizados (onde X é informado no `input`).

![Filtros no Profiler](http://blog.matheuscastiglioni.com.br/arquivo/download/arquivos-imagens/2018/12/5c183bc12116a_bg.jpg)

Maravilha, agora vamos entender o que foi coletado e como podemos medir a performance de nossa aplicação com esses dados.

É possível visualizar quatro diferentes gráficos:

1. Flame
2. Ranked
3. Component
4. Interactions

### Flame Chart

No gráfico de Chama (*Flame Chart*) é mostrado o estado da aplicação para um determinado *commit* (o selecionado), cada barra no gráfico representa um componente do React. O tamanhos e cores das barras representam o quanto um determinado componente e seus filhos demoraram para serem renderizados.

Além das barras, também é possível ver os detalhes desse *commit* ao lado direito da ferramenta, nela é mostrada as informações de quando foi comitado, tempo de renderização e as interações feitas.

![Barra padrão do gráfico de chamas](http://blog.matheuscastiglioni.com.br/arquivo/download/arquivos-imagens/2018/12/5c183dbf27377_bg.jpg)

Se você tiver interesse em descobrir mais sobre um determinado componente do *commit* atual, é possível clicar na barra que o representa, assim, mais informações serão mostradas:

![Informações do componente do commit](http://blog.matheuscastiglioni.com.br/arquivo/download/arquivos-imagens/2018/12/5c183dbf28078_bg.jpg)

Agora conseguimos ver mais detalhes do componente `TodoList`, ao lado direito podemos ver as suas propriedades e estado (atual daquela renderização).

### Ranked Chart

No gráfico classificado (*Ranked Chart*) são mostradas as mesmas informações, seja do *commit* ou dos componentes, a única diferença é que nesse gráfico os componentes que mais demoraram para serem renderizados estarão no topo da lista (a ordem vai do mais demorado para o mais rápido em renderização).

### Component Chart

O gráfico de componente (*Component Chart*) pode ser mostrado clicando no ícone de barras ao lado direito do Profiler (ícone azul). Nesse gráfico é mostrado quantas vezes um determinado componente renderizou durante a gravação. A cor e altura das barras representa o quanto aquela determinda renderização demorou para ocorrer.

![Gráfico de componentes](http://blog.matheuscastiglioni.com.br/arquivo/download/arquivos-imagens/2018/12/5c18401b53f26_bg.jpg)

Repare que as informações são as mesmas (já vistas), referente suas propriedades e estado atual daquela renderização.

### Interactions

As interações ainda estão em modo experimental, por isso, deixarei para falar sobre elas em um próximo *post*.

## Conclusão

Nesse *post* falei um pouco sobre a ferramenta React Profiler, com ela é possível verificar a performance de aplicações contruídas com React, conseguimos tirar métricas referente aos componentes de uma determinada aplicação.

E aí, você já conhecia o React Profiler? Não deixe de comentar, caso tenha gostado desse *post* e tenha interesse em acompanhar *post's* futuros, você pode estar assinando a *newsletter* no formulário abaixo.

Até a próxima.
