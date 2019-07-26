---
autor: "Matheus Castiglioni"
categoria: "JavaScript"
disqus_identifier: "criando-componente-com-shadow-dom"
disqus_title: "Criando Componente Com Shadow Dom"
disqus_url: "https://blog.matheuscastiglioni.com.br/criando-componente-com-shadow-dom"
date: 2018-09-24T15:41:10-02:00
draft: false
keywords: [ "Front-End", "Shadow DOM" ]
slug: "criando-componente-com-shadow-dom"
tag: [ "Front-End", "Shadow DOM" ]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1549706084/tag-customizada-com-shadow-dom_5ba6ef64a0bb2_bg_jalxno.png"
title: "Criando Componente Com Shadow Dom"
url: "/criando-componente-com-shadow-dom"
---

Sim, eu sei, *Shadow DOM* está um pouco ultrapassado, talvez seu uso seja muito pouco, porém, nesse *post* vou explicar como ele funciona e vamos criar um componente (também chamado de *web component*), em outras palavras, seria uma *tag* customizada que irá renderizar um código HTML conhecido pelo *browser*.

Afinal de contas, o que é esse tal de *Shadow DOM*? Para o que ele serve? Quando devíamos usá-lo? Calma, essa e outras perguntas é o que eu tentarei responder ao decorrer do *post*.

Se você está se perguntando: "Shadow DOM está ultrapassado, poucos devem utilizá-lo, então porque falar dele?". Esse *post* é apenas uma base para que você entenda a diferença entre *Shadow DOM* e *Virtual DOM* (assunto do próximo *post*, sim, um pequeno *spoiler*).

Se você não tem interesse em entender como ele funciona ou para o que serve, fique a vontade em não lê-lo e aguarde o próximo sobre *Virtual DOM*.

## Conheça o Shadow DOM

O [Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM) trata-se de uma API dos *browsers* (navegadores) com ela é possível anexar/adicionar um DOM separado para um elemento existente na página de forma escondida, calma, logo as coisas irão fazer sentido.

Pense o seguinte: Hoje trabalhamos muito com componentes, bibliotecas como o React, Angular e Vue fazem uso excessivo deles (cada uma do seu jeito, mas no final, praticamente tudo é um componente). Na *web* também temos os famosos *web components*, mas, o que seria esses "componentes"?

Para um melhor entendimento e simplicidade do *post*, entenda de forma resumida que componentes são *tag's* HTML ou elementos que não existem, ou seja, o navegador nativamente não os conhecem, mas, de alguma forma ele irá renderizar e criar um HTML conhecido, com as *tag's* nativas.

Concluindo, através do *Shadow DOM* conseguimos criar *tag's* customizadas e "transformá-las" em *tag's* nativas.

## Para que usá-lo?

Apenas para solidificar, podemos usar o *Shadow DOM* para criar componentes, também chamados de *web components*, além disso, também é possível aplicar estilos para elementos específicos na página sem refletir nos demais.

## Criando nosso componente

Finalmente, hora de começar a criar nosso primeiro *web component*.

![Gif comemorando o primeiro componente](https://res.cloudinary.com/mahenrique94/image/upload/v1549706193/5ba6f58330b17_bg_yud6sz.gif)

O primeiro passo será definir qual componente vamos criar, para o exemplo do *post* será um componente de mensagem. Agora com o componente definido, devemos criar uma classe para representá-lo:

```javascript
class Mensagem { }
```

Mas, onde essa classe será salva? Para escrever os códigos do nosso componente vamos criar um arquivo JavaScript chamado `Mensagem.js`, todos os seus códigos devem estar dentro desse arquivo. Aproveite que o arquivo acabou de ser criado e já faça a importação dele em seu HTML:

```markup
<script src="./assets/js/Mensagem.js"></script>
```

No meu caso, criei e salvei o arquivo em `assets/js`.

Continuando a implementação e criação do nosso componente, até o momento criamos uma simples classe, mas, precisamos transformá-la em um elemento HTML (para que ele possa utilizar as funções do HTML), como podemos fazer isso? Podemos utilizar a herança e herdar da classe `HTMLElement`:

```javascript
class Mensagem extends HTMLElement { }
```

Através da palavra `extends` é possível realizar [herança](https://www.caelum.com.br/apostila-java-orientacao-objetos/heranca-reescrita-e-polimorfismo/) em JavaScript.

Agora, precisamos implementar como e o que será nosso componente, nossos códigos irão ficar dentro do construtor (*constructor*) (mais para frente irei explicar o porque):

```javascript
class Mensagem extends HTMLElement {

	constructor() {
		super()
		// nossa implementação deve vim aqui...
	}

}
```

Devemos chamar o construtor da clase mãe, ou seja, da classe `HTMLElement`, isso é feito através do `super()`.

Legal, o primeiro passo será de fato criar um *Shadow DOM*, podemos fazer isso através da função `attachShadow`:

```javascript
class Mensagem extends HTMLElement {

	constructor() {
		super()

		const shadow = this.attachShadow({ mode: 'closed' })
	}

}
```

Aqui, estamos criando e adicionado um *shadow root* para nosso componente, a opção `mode` serve para definir se nosso *shadow root* pode ser acessado fora do componente, ou seja, de forma global em nosso JavaScript, com o valor definido como `closed` isso não será possível, apenas nosso componente consegue interagir e acessar o *shadow root*.

Agora precisamos criar nossa *tag* conhecida pelo HTML, para ser renderizada pelo nosso componente, para isso podemos utilizar a velha conhecida `createElement`:

```javascript
class Mensagem extends HTMLElement {

	constructor() {
		super()

        const shadow = this.attachShadow({ mode: 'closed' })

		const mensagem = document.createElement('p')
	}

}
```

Para o exemplo, vamos renderizar um parágrafo (`p`). Além do componente, vamos adicionar algum estilo também:

```javascript
class Mensagem extends HTMLElement {

	constructor() {
		super()

        const shadow = this.attachShadow({ mode: 'closed' })

		const mensagem = document.createElement('p')
		mensagem.classList.add('mensagem')

		const style  = document.createElement('style')
		style.textContent = `
            .mensagem {
                background: red;
                color: white;
                padding: 1rem;
            }
		`
	}

}
```

Pronto, temos nosso elemento e estilo criado. Agora precisamos passá-los para nosso *shadow root*, isso pode ser feito através da função `appendChild`:

```javascript
class Mensagem extends HTMLElement {

	constructor() {
		super()

		const shadow = this.attachShadow({ mode: 'closed' })

		const mensagem = document.createElement('p')
		mensagem.classList.add('mensagem')

		const style  = document.createElement('style')
		style.textContent = `
            .mensagem {
                background: red;
                color: white;
                padding: 1rem;
            }
		`

		shadow.appendChild(style)
		shadow.appendChild(mensagem)
	}

}
```

Adicionamos como filhos do *shadow root* nosso estilo e mensagem. Por fim, precisamos registrar nosso componente e definir uma tag para ele, isso pode ser feito através da função `customElements`:

```javascript
class Mensagem extends HTMLElement {

	constructor() {
		super()

		const shadow = this.attachShadow({ mode: 'closed' })

		const mensagem = document.createElement('p')
		mensagem.classList.add('mensagem')

		const style  = document.createElement('style')
		style.textContent = `
            .mensagem {
                background: red;
                color: white;
                padding: 1rem;
            }
		`

		shadow.appendChild(style)
		shadow.appendChild(mensagem)
	}

}

customElements.define('app-mensagem', Mensagem)
```

Para definir nosso componente devemos informar dois parâmetros:

1. Passar um nome para ele, esse nome será a *tag* dele
2. Passar a classe responsável por criá-lo

**Obs**: Lembra quando eu falei para adicionarmos nossos códigos dentro do construtor (*constructor*) da nossa classe? Isso foi necessário, porque a função `.define` invoca o construtor da classe passada para ele.

Agora, dentro do nosso HTML já podemos tentar utilizá-lo:

```markup
<app-mensagem>Olá Shadow DOM</app-mensagem>
```

Mas, algo deu errado, veja com ele foi renderizado:

![Componente renderizado sem texto](https://res.cloudinary.com/mahenrique94/image/upload/v1549706234/5ba6fc6e9f83c_bg_xumtgy.png)

E nosso DOM:

![DOM do componente sem texto](https://res.cloudinary.com/mahenrique94/image/upload/v1549706250/5ba6fc6e9efdd_bg_uuxeae.png)

Repare que ele está sem conteúdo, mas ele deveria mostrar nossa mensagem: `Olá Shadow DOM`, o que está acontecendo? Em nenhum momento definimos o conteúdo do nosso componente, para isso, podemos utilizar a função `.textContent`:

```javascript
class Mensagem extends HTMLElement {

	constructor() {
		super()

		const shadow = this.attachShadow({ mode: 'closed' })

		const mensagem = document.createElement('p')
		mensagem.classList.add('mensagem')
		mensagem.textContent = this.textContent // linha adicionada

		const style  = document.createElement('style')
		style.textContent = `
            .mensagem {
                background: red;
                color: white;
                padding: 1rem;
            }
		`

		shadow.appendChild(style)
		shadow.appendChild(mensagem)
	}

}

customElements.define('app-mensagem', Mensagem)
```

Dessa maneira estamos falando: Pega o `.textContent` da *tag* customizada e passa para nosso componente que será renderizado pelo *shadow root*. Agora se voltar no navegador e recarregar:

![Componente renderizando](https://res.cloudinary.com/mahenrique94/image/upload/v1549706276/5ba6fc6e9fd78_bg_jf5rr2.png)

E nosso DOM:

![DOM renderizado com texto](https://res.cloudinary.com/mahenrique94/image/upload/v1549706294/5ba6fc6e9dfb9_bg_eboyi6.png)

Agora tudo está funcionando.

![Comemorando nosso primeiro Web Component](https://res.cloudinary.com/mahenrique94/image/upload/v1549706314/5ba6fe4d9e294_bg_chbslg.gif)

## Saiba mais

As primeiras versões do *framework* [Angular](https://angular.io/) utilizava o *Shadow DOM*, porém, por questões de performance foi migrado para o tão famoso *Virtual DOM*.

Lembra que eu falei que era possível definir um estilo apenas para nosso *shadow DOM*? Pois é, para ver isso na prática vamos adicionar outro elemento na página com a mesma classe da nossa mensagem:

```markup
<app-mensagem>Olá Shadow DOM</app-mensagem>
<p class="mensagem">Outra mensagem</p>
```

Sabemos que nosso componente `app-mensagem` irá renderizar um parágrafo com a classe `mensagem`, vamos ver como ficou o HTML renderizado:

![Mostrando estilo do Shadow DOM](https://res.cloudinary.com/mahenrique94/image/upload/v1549706345/5ba6fc6ea02dd_bg_tjotgl.png)

Apenas nosso *shadow root* foi estilizado.

## Conclusão

O *Shadow DOM* foi muito legal e bastante utilizado, apesar de muitos o terem substituídos pelo *Virtual DOM*, acho bem legal a forma como ele funciona, dá para fazer altas brincadeiras (rsrsrs).

E aí, você já conhecia o *Shadow DOM*? Não deixe de comentar e se gostou do *post* e quiser receber novidades por email, se increva na [*newsletter*](http://eepurl.com/ggP7Rv).

Caso tenha necessidade, o projeto feito para o exemplo do *post* pode ser encontrado [aqui](https://github.com/mahenrique94/post-shadow-root) em meu github.

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
