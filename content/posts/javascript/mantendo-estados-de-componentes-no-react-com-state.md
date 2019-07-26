---
autor: "Matheus Castiglioni"
categoria: "JavaScript"
disqus_identifier: "mantendo-estados-de-componentes-no-react-com-state"
disqus_title: "Mantendo Estados De Componentes No React Com State"
disqus_url: "https://blog.matheuscastiglioni.com.br/mantendo-estados-de-componentes-no-react-com-state"
date: 2018-07-11T12:53:40-02:00
draft: false
keywords: [ "Biblioteca", "Front-End", "Lib", "React", "ReactJS", "Web" ]
slug: "mantendo-estados-de-componentes-no-react-com-state"
tag: [ "Biblioteca", "Front-End", "Lib", "React", "ReactJS", "Web" ]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1549707012/utilizando-state-e-props-do-react_5b4549d176d32_bg_j17kfw.jpg"
title: "Mantendo Estados De Componentes No React Com State"
url: "/mantendo-estados-de-componentes-no-react-com-state"
---

Continuando a série de *post's* sobre componentes com React, nesse *post* irei mostrar como trabalhar com *state* (estado) de um componente, caso você tenha perdido o *post* anterior onde mostro como renderizar e criar seu primeiro componente, segue o *link* abaixo:

- [Listando tarefas com React](http://blog.matheuscastiglioni.com.br/listando-tarefas-com-react)

Agora que já temos a nossa lista de tarefas sendo renderizada, precisamos criar o recurso para adicionar novas.

## Atualizando JSX

O primeiro passo será criar o `input` e `button` em nosso componente, podemos fazer isso simplesmente mudando o código da função `render`:

```markup
<input type="text"/>
<button>Adicionar</button>
<ul>
	{ tarefas.map(tarefa => <li>{ tarefa }</li>) }
</ul>
```

Apenas foi adicionado uma *tag* `input` e outra `button`.

Se você fez a alteração, deve ter notado que o componente passou a dar um erro:

![Erro componente retornando múltiplos filhos](https://res.cloudinary.com/mahenrique94/image/upload/v1549707104/5b4558e6ded06_bg_cpk4ip.jpg)

Esse erro está acontecendo porque um componente em React deve retornar apenas um filho para a função `render`, porém, em nosso exemplo estamos retornando três, sendo eles: `input`, `button` e `ul`.

Para resolver o problema precisamos apenas criar um elemento para encapsular (fazer o *wrap*) dos demais elementos:

```markup
<div>
	<input type="text"/>
	<button>Adicionar</button>
	<ul>
		{ tarefas.map(tarefa => <li>{ tarefa }</li>) }
	</ul>
</div>
```

Adicionando uma *tag* `div` como mãe de todos os demais elementos, o problema foi resolvido, mas, será que eu quero renderizar essa `div` no meu DOM (na minha página)? Obviamente não né, estou apenas sendo obrigado a utilizá-la para o meu componente conseguir retornar apenas um filho e posteriormente ser renderizado.

Sabendo dessa necessidade, a galera do React criou um componente chamado [Fragment](https://reactjs.org/docs/fragments.html), a idéia do `Fragment` é realizar o mesmo papel que a `div` nesse exemplo, ou seja, encapsular e fazer *wrap* de demais elementos, porém, ele não é renderizado em nosso DOM.

Para utilizá-lo importe-o do módulo do `react`:

```javascript
import React, { Component, Fragment } from "react";
```

E troque a `div` por ele:

```markup
<Fragment>
	<input type="text"/>
	<button>Adicionar</button>
	<ul>
		{ tarefas.map(tarefa => <li>{ tarefa }</li>) }
	</ul>
</Fragment>
```

Legal, agora já temos nosso componente sendo renderizado, porém, sem estilo algum (assunto para os próximos *posts*):

Até o momento, nosso `input` e `button` não fazem nada, precisamos agora de alguma maneira, pegar o valor do `input` a cada mudança e salvá-lo em algum lugar, como podemos fazer isso? Para resolver esse tipo de necessidade o React criou o famoso `state`.

## Mantendo estados

O `state` serve para guardarmos, atualizarmos e mantermos estados em nossos componentes, para criá-lo basta apenas adicioná-lo como atributo da classe `Tarefas`:

```javascript
state = {
	tarefa : ""
}
```

Essa é uma maneira mais nova e recente, em alguns exemplos você deve ver algo parecido com:

```javascript
constructor(props) {
	super(props);
	this.state = { tarefa : "" };
}
```

Cria-se um construtor em nosso componente, onde o mesmo recebe como parâmetro as propriedades do componente e chama o construtor da classe mãe através do `super`, no caso, a classe `Component`, passando as propriedades para ela.

Logo após, cria-se o `state` com os valores iniciais.

Fique a seu critério qual maneira mais lhe agrada, tome cuidado apenas com compatibilidade, talvez seja necessário algum *transpiler* como o [Babel](https://babeljs.io/) por exemplo.

Nosso componente por padrão vai possuir um estado onde contém apenas uma propriedade que seria a `tarefa` cujo valor é branco.

Agora, vamos passar o valor desse estado para nosso `input`:

```markup
<input type="text" value={ this.state.tarefa }/>
```

Dessa maneira, já fizemos a passagem de valor do componente para o `template`.

Precisamos agora, fazer o processo inverso, ou seja, passar o valor do `template` para o componente, para isso, vamos precisar utilizar a função `onChange` do `input`, onde uma função de `handleChange` será passada para ela:

```markup
<input onChange={ this.handleChange } type="text" value={ this.state.tarefa }/>
```

```javascript
handleChange(event) {
	this.setState({ tarefa : event.target.value });
}
```

A função `handleChange` simplesmente recebe um `event` como parâmetro, onde através dele conseguimos pegar o valor atual do `input`. Depois chamamos a função `setState` do componente passando um novo estado para ele.

Se você tentou digitar algum valor no `input` deve ter se reparado com um novo erro:

![Erro referente ao bind das funções do componente](https://res.cloudinary.com/mahenrique94/image/upload/v1549707144/5b4558e6df434_bg_hf8sc2.jpg)

Isso aconteceu porque quando o `input` chamou a função `handleChange` o escopo de execução é diferente ao componente, dessa maneira o `this` não é o componente e sim o valor `undefined`, para resolver o problema, umas das possíveis maneiras, seria dentro do construtor do componente mudarmos o escopo da função:

```javascript
constructor(props) {
	super(props);

	this.handleChange = this.handleChange.bind(this);
}
```

Dessa maneira, estamos falando que a função `handleChange` vai ser igual a uma nova função, cujo o valor seria ela mesmo, porém, com seu escopo mudado para o componente, por isso é passado o `.bind(this)`, no caso o `this` seria o próprio componente.

### Saiba mais

Um `event` do React, além de conseguir pegar o valor do `input` também possuí outros recursos e funcionalidades, o mesmo trata-se de uma classe chamada [SyntheticEvent](https://reactjs.org/docs/events.html).

A função `setState` além de atualizar o estado do componente também realiza alguns novos processos no ciclo de vida do mesmo e seus filhos, ela dispara as funções: `shouldComponentUpdate` e `render`, dessa maneira o componente é re-renderizado (desde que a função `shouldComponentUpdate` retorne `true`).

## Adicionando novas tarefas

Agora precisamos criar a função do botão, a ideia será a mesma, vamos criar uma função e passá-la para o botão invocar ao ser realizado o *click* no mesmo:

```markup
<button onClick={ this.handleClick }>Adicionar</button>
```

```javascript
handleClick() {
	this.setState({ tarefas : [].concat(this.state.tarefas, this.state.tarefa) });
}
```

Não se esqueça de mudar o escopo da função para o escopo do componente:

```javascript
constructor(props) {
	super(props);

	this.handleChange = this.handleChange.bind(this);
	this.handleClick = this.handleClick.bind(this);
}
```

**Obs**: Repare que foi necessário adicionar mais uma propriedade em no estado do componente, sendo ela: `tarefas`:

```javascript
state = {
	tarefa : "",
	tarefas : []
}
```

Voltando para o componente e testando, veja que nada aconteceu, isso porque precisamos mudar de onde buscamos as tarefas á serem renderizadas, precisamos trocar a variável local dentro da função `render` para o valor do nosso `state`:

```javascript
render() {
	return (
		<Fragment>
			<input onChange={ this.handleChange } type="text" value={ this.state.tarefa }/>
			<button onClick={ this.handleClick }>Adicionar</button>
			<ul>
				{ this.state.tarefas.map(tarefa => <li>{ tarefa }</li>) }
			</ul>
		</Fragment>
	);
}
```

Por último, precisamos adicionar um atributo chamado `key` para nossos `arrays` ou `iterators`, é através desse `key` que o React consegue saber o que precisa ser mudado em nosso código.

### Saiba mais

O atributo `key` não será renderizado, ele serve apenas para o React realizar o "diff", sabendo o que saiu ou entrou em nosso `array`, atualizando apenas aquele pedaço e não o `array` todo, dessa maneira, a performance fica muito melhor.

## Conclusão

Nesse *post* mostrei como trabalhar com estados em componentes com React, podemos fazer isso através do `state`, também vimos como atualizar os valores dos estados e pedir para o componente ser renderizado novamente através da função `setState`.

O funcionamento final do componente ficou da seguinte maneira:

![Componente funcionando](https://res.cloudinary.com/mahenrique94/image/upload/v1549707179/5b4558e6ddecf_bg_eiw3di.gif)

O projeto feito nesse e no *post* anterior pode ser encontrado [aqui](https://github.com/mahenrique94/post-tarefas-com-react).

Até a próxima.

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
