---
autor: "Matheus Castiglioni"
categoria: "JavaScript"
disqus_identifier: "atualizando-estado-dos-componentes-no-react"
disqus_title: "Atualizando Estado Dos Componentes No React"
disqus_url: "https://matheuscastiglioni-blog.netlify.com/atualizando-estado-dos-componentes-no-react"
date: 2018-08-01T08:14:35-02:00
draft: false
keywords: [ "Frameworks", "Front-End", "React", "ReactJS" ]
slug: "atualizando-estado-dos-componentes-no-react"
tag: [ "Frameworks", "Front-End", "React", "ReactJS" ]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1549706656/referenciando-componentes-no-react_5b6a3230e39a8_bg_enwpkj.png"
title: "Atualizando Estado Dos Componentes No React"
url: "/atualizando-estado-dos-componentes-no-react"
---

No *post* anterior eu falei [sobre estados (*state*) nos componentes](http://blog.matheuscastiglioni.com.br/mantendo-estados-de-componentes-no-react-com-state), como mantê-los e atualizá-los, porém, nesse *post* vou mostrar como podemos atualizar os estados de um componente no React com mais detalhes e exemplos, de uma forma um pouco mais profunda.

## Utilizando o setState

Para atualizar o estado do componente, podemos utilizar a função `setState` de duas maneiras:

1. Passando um novo estado parcial para ela.
2. Passando uma função que recebe o estado atual e retorna um novo estado parcial.

Veja que temos diferentes maneiras de utilizar a função `setState`, mas, qual delas utilizar? Calma, já irei responder, antes eu quero falar sobre os estados parciais.

### Estados parciais

A função `setState` recebe estados parciais, isso porque seria chato e tedioso toda hora ter que ficar concatenando o `state` por completo para depois realizar a modificação no mesmo, vamos ao exemplo:

```javascript
state = {
	titulo : "Meu estado",
	subtitulo : "Parcial"
}
```

Dado o estado acima, se por um acaso precisarmos mudar o título, poderíamos simplesmente chamar a função `setState`:

```javascript
this.setState({ titulo : "Meu titulo novo" })
```

Dessa maneira, o estado `subtitulo` ainda continuaria com o valor `Parcial`, porém, o estado `titulo` passaria agora a ter o valor igual á `Meu titulo novo`.

Se a função `setState` não fosse inteligente o suficiente para atualizar apenas o pedaço do objeto que passamos para ela, teríamos que fazer algo da seguinte maneira:

```javascript
this.setState({
	...this.state,
	titulo : "Meu titulo novo"
})
```

Simplesmente pegamos o valor atual do `state` e passamos para o objeto, depois, é modificado apenas o pedaço que queremos, dessa maneira, ficou mais verboso o código, isso poderia ser facilmente esquecido de ser feito aumentando a chande de ocorrer um possível *bug*.

### Estado parcial inexistente

Um detalhe curíoso: O que será que acontece se atualizarmos o estado passando um valor inexistente (até o momento) para ele? Imagine o exemplo seguinte estado:

```javascript
state = {
	titulo : "Meu componente"
}
```

Nosso estado tem apenas um estado, no caso, o valor `titulo`.

Agora, por um acaso, em alguma função que estamos atualizando o `título`, acabamos sem querer, também inserindo um subtitulo, exemplo:

```javascript
atualizarTitulo = () => {
	this.setState({
		titulo : "Novo titulo",
		subtitulo : "Agora tem subtitulo"
	})
}
```

O que será que acontece com a nossa `state`? Pois é, se você respondeu que agora ela também terá o valor de `subtitulo`, você acertou, podemos até fazer uma renderização condicional nesse caso:

```javascript
render() {
	const { titulo, subtitulo } = this.state
	return (
		<Fragment>
			<h1>{ titulo }</h1>
			{ subtitulo && <h2>{ subtitulo }</h2> }
		</Fragment>
	)
}
```

Dessa maneira, o `h2` somente será renderizado quando houver a propriedade `subtitulo` com algum valor diferente de `undefined` e `null`.

## Atualizando estado via objeto

Normalmente iremos atualizar o estado passando um objeto para ele, como já fizemos nos exemplos acima, por exemplo:

```javascript
this.setState({ novo_estado : novo_valor })
```

A função `setState` irá setar/atualizar em nosso estado o valor referente as *keys* do objeto com seus respectivos valores.

Algo muito útil e geralmente é o que será mais utilizado no dia-á-dia, porém, também podemos atualizar nosso estado atráves de uma função.

## Atualizando estado via função

Além de atualizar via objeto, também podemos passar uma função, onde, essa função recebe como parâmetro o estado atual e deve devolver o novo estado parcial, por exemplo:

```javascript
this.setState(estadoAtual => {
	console.log(estadoAtual)
	return ({
		novo_estado : novo_valor
	})
});
```

Veja que o primeiro parâmetro é o estado atual (até o momento antes de atualizar o estado).

Se você está se perguntando quando e porque devemos utilizar dessa maneira, a resposta é muito simples: **Quando seu novo estado depender do estado anterior (atual)**.

Por exemplo: Imagine que temos em nosso estado uma lista de alunos e queremos remover um determinado aluno, para evitar algo dessa maneira:

```javascript
removerAluno = nome => {
	let { alunos } = this.state
    alunos = alunos.filter(aluno => aluno !== name)
    this.setState({ alunos })
}
```

Aqui, primeiro pegamos os alunos do nosso estado, depois, filtramos ele e passamos para a própria variável alunos, para depois chamar o `setState`. Esse código, poderia facilmente ser trocado por:

```javascript
removerAluno = nome => {
	this.setState(({ alunos }) => ({
      alunos : alunos.filter(aluno => aluno !== name)
    }))
}
```

Dessa maneira o código fica mais organizado, pois, estamos acessando nosso estado apenas uma vez e não estamos manipulando ele diretamente.

## Callback após atualizar o estado

Para ambas maneiras que podemos atualizar nosso estado, é possível (se necessário) passar uma função de *callback* para a `setState` como seu segundo parâmetro, portanto, a definição da função `setState` fica da seguinte maneira:

```javascript
function setState(partialState, callback) {
	// implementação
}
```

Se você dúvida de mim, podemos ver diretamente no código fonte do React a declaração da função `setState` para a classe `Component`:

![Função setState original do React](https://res.cloudinary.com/mahenrique94/image/upload/v1549706896/5b60dfcf7de23_bg_xzkejg.png)

Essa função de *callback* é sempre bom para casos onde algo deve ser executado com o novo valor de `state`.

**Obs:** Lembrando que a função de *callback* será executado apenas e logo após ao estado ser atualizado.

## Conclusão

Nesse *post* eu falei e tentei explicar um pouco o funcionamento da função `setState` para a classe `Component`, mostrei como podemos atualizar o estado do nosso componente, expliquei em qual ocasião uma maneira pode ser melhor que a outra e por fim vimos que também podemos passar uma função de *callback* que será executada logo após o estado do componente ser atualizado.

Se você gostou desse *post* e tem interesse em receber novidades por email, é muito fácil, se inscreve na [*newsletter*](http://eepurl.com/ggP7Rv).
