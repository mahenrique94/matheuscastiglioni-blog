---
autor: "Matheus Castiglioni"
categoria: "JavaScript"
disqus_identifier: "referenciando-componentes-no-react"
disqus_title: "Referenciando Componentes No React"
disqus_url: "https://blog.matheuscastiglioni.com.br/referenciando-componentes-no-react"
date: 2018-08-08T10:10:47-02:00
draft: false
keywords: [ "Front-End", "React", "ReactJS" ]
slug: "referenciando-componentes-no-react"
tag: [ "Front-End", "React", "ReactJS" ]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1549706656/referenciando-componentes-no-react_5b6a3230e39a8_bg_enwpkj.png"
title: "Referenciando Componentes No React"
url: "/referenciando-componentes-no-react"
---

Continuando a série de *post's* sobre [React](http://reactjs.org/), no *post* anterior eu expliquei com mais detalhes o [funcionamento da função setState](http://blog.matheuscastiglioni.com.br/atualizando-estado-dos-componentes-no-react) e mostrei possíveis maneiras que podemos estar a utilizando. Para assunto desse *post* irei explicar como referenciar componentes através do atributo `ref`.

## Porque referenciar componentes?

Através do atributo `ref` conseguimos acessar elementos do DOM ou do React criados durante o método `render`. Com a referência podemos realizar modificações ou disparar funções de componentes pais para os seus filhos, e até mesmo realizar interações no DOM referente ao componente renderizado.

**Obs:** Evite utilizar o `ref` para exemplos ou necessidades que podem ser feitas de forma declarativa através dos componentes.

## Como referenciar componentes?

Atualmente, se você já trabalhou com React antes, deve se lembrar da **String Ref API**:

```javascript
<MeuBotao ref="meuBotao"/>
```

Dessa maneira, estamos atribuindo uma nova propriedade para nossa classe chamada `meuBotao`, podemos acessá-la dentro de outras funções através de `this.meuBotao`.

Porém essa forma esta como *legacy* e provavelmente em um futuro próximo será depreciada (*deprecated*), pois possuem vários efeitos colaterais, então como devemos fazer?

![Pensando em como referenciar componentes](https://res.cloudinary.com/mahenrique94/image/upload/v1549706728/5b6a3e75c7d02_bg_xerv7m.gif)

## Nova API de referenciamentos

Á partir da versão **16.3.0** do React, foi disponibilizado uma nova API chamada de `createRef`, é exatamente através dela que devemos referenciar nossos componentes ou elementos do DOM, o uso deve ser feito da seguinte maneira:

1. Criar uma propriedade de classe para armazenar o `ref`.
2. Passar essa propriedade para quem deve ser referenciado.

### Criando a propriedade de classe

Através do `constructor` (construtor), podemos criar essa propriedade da classe:

```javascript
constructor(props) {
	super(props)
	this.meuBotao = React.createRef()
}
```

Se você preferir, podemos evitar a necessidade de uso do `React` fazendo a importação da função `createRef`, da seguinte maneira:

```javascript
import React, { createRef } from "react"

// ... demais códigos

constructor(props) {
	super(props)
	this.meuBotao = createRef()
}
```

Fica a seu critério e gosto particular para decidir de qual forma utilizar.

Agora já temos onde salvar o nosso referenciado, precisamos apenas realizar a referência.

### Referenciando o componente

Para vincular nosso componente para a propriedade `this.meuBotao`, ainda continuamos utilizando o atributo `ref`:

```javascript
<MeuBotao ref={ this.meuBotao }/>
```

Apenas passamos a propriedade de classe que foi criada através da função `createRef`.


### Acessando uma referência

Para acessar a referência dentro de alguma função ficou um pouco diferente, antes podiamos fazer algo do tipo:

```javascript
this.meuBotao.focus()
```

Porém, com essa nova API, a nossa referência fica dentro de `current`, portanto, para acessar um botão por exemplo, devemos fazer:

```javascript
this.meuBotao.current.focus()
```

Vale observar que:

- Se o referenciado é um componente de classe do React, o `current` recebe esse componente montado.
- Se o referenciado é um elemento HTML, o `current` irá receber o elemento do DOM ao qual aquele HTML está associado.

### Referenciando através de Callbacks

Também podemos realizar referencias através de *callback's*:

```javascript
<MeuBotao ref={ meuBotao => this.meuBotao = meuBotao }/>
```

Porém, aqui entra um detalhe, se fizermos dessa maneira o React irá chamar o `ref` duas vezes, a primeira com `null` e a segunda com a referência de fato. Isso acontece porque novas instâncias são criadas para cada `render`, então o React precisa limpar a referência antiga para setar a nova.

Vale lembrar que apesar de existir uma nova API para realizar a referência, a forma através de *callback's* ainda será suportada.

### Redirecionando uma referência

Em alguns casos, você pode querer acessar a referência de uma referência (não recomendado, isso irá contra o encapsulamento de componentes), porém, tudo é possível e cada caso é um caso. Para tal necessidade foi disponilizado a função `forwardRef`, dessa maneira, conseguimos referenciar um filho como se fosse o próprio pai, por exemplo:

```javascript
<MeuBotao ref={ this.meuBotao }/>
```

Essa referência será feita para a instância do componente `MeuBotao`, porém, eu quero acessar o `button` que está sendo renderizado pelo `MeuBotao`, como podemos fazer isso? Basicamente devemos repassar o `ref` recebido pelo `MeuBotao` para o `button`:

```javascript
const MeuBotao = React.forwardRef(({ children }, ref) => (
	<button ref={ ref }>
		{ children }
	</button>
))
```

**Obs**: Assim como foi feito com o `createRef`, a função `forwardRef` também pode ser importada e usada de forma isolado ao `React`.

Repare que estamos utilizando a função `forwardRef`, sem ela não seria possível receber o `ref` para repassá-lo para nosso filho, a função irá devolver um componente do React.

### Saiba mais

Quando o referenciado é desmontado, a referência recebe o valor `null`.

Componentes Funcionais (*Functional Components*) não podem ser referenciados, isso porque eles não possuem a instância de uma classe. Caso seja necessário, você pode estar convertendo-o para um Componente de Classe (*Class Component*).

Apensar de Componentes Funcionais não poderem ser referenciados, dentro deles você pode utilizar o atributo `ref` e fazer referências para outros componentes ou elementos HTML sem problemas.

Referências são atualizadas antes dos ciclos de vida: `componentDidMount` e `componentDidUpdate`.

## Conclusão

Nesse *post* eu falei um pouco sobre referências de componentes ou elementos HTML, expliquei o novo jeito de fazer com a `createRef` e também expliquei como passar uma referência de pai para filhos com o `forwardRef`.

E aí, você já conhecia as novas API's? Não deixe de comentar, se você gostou do *post* se inscreva na [*newsletter*](http://eepurl.com/ggP7Rv) para estar recebendo novidades por email.

Até a próxima.
