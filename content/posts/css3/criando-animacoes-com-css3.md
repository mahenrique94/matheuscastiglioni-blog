---
autor: "Matheus Castiglioni"
categoria: "CSS3"
disqus_identifier: "criando-animacoes-com-css3"
disqus_title: "Criando Animacoes Com Css3"
disqus_url: "https://blog.matheuscastiglioni.com.br/criando-animacoes-com-css3"
date: 2018-04-24T08:10:19-02:00
draft: false
keywords: [ "Animação", "Animações", "Animation", "Front-End", "Web" ]
slug: "criando-animacoes-com-css3"
tag: [ "Animação", "Animações", "Animation", "Front-End", "Web" ]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1549711133/criando-animacoes-com-css3_a4pfnd.png"
title: "Criando Animacoes Com Css3"
url: "/criando-animacoes-com-css3"
---

Geralmente temos a necessidade de criar animações em uma página, seja um site ou uma aplicação web, porém, esse tipo de necessidade já foi muito temida pelos desenvolvedores, pois, tratava-se de um recurso chato de ser feito, tendo a necessidade de criar *giff's* ou animações com *flash*.

Para exemplo do *post* vamos criar uma animação de *loading*, conforme imagem abaixo:

![Exemplo de animação](https://res.cloudinary.com/mahenrique94/image/upload/v1549711199/exemplo-animation-loading_z0e7sw.gif)

Pronto? Então vamos começar!

## Entendendo a animação

Antes de saírmos escrevendo código, vamos entender primeiro como realizar essa animação, isso evitará tentativas e chutes desnecessários e um ganho de tempo.

Sabemos que trata-se de um círculo, logo, já temos nosso primeiro objetivo:

- Criar um círculo com bordas grossas e cinzas.

Certo, mas como podemos realizar a animação daquele pedaço verde? Simples, para isso, podemos definir uma cor para um (apenas um) dos lados das bordas de nosso círculo, logo, temos outro objetivo:

- Definir uma borda com cor verde.

Porém, somente essa definição de cor não será o suficiente, pois, a mesma ficará parada sem qualquer animação.

Como podemos animar o círculo cinza com uma borda verde? Podemos simplesmente girar o círculo, dando á entender que as outras bordas estão ficando com cores verdes, sendo assim, temos mais um e último objetivo definido:

- Girar o círculo infinitamente.

Finalizando, precisaremos seguir três passos para concluir essa animação, sendo eles:

1. Criar um círculo com bordas grossas e cinza.
2. Definir uma borda com cor verde.
3. Girar o círculo infinitamente.

Agora que já sabemos como realizar a animação, é hora de finalmente implementá-la.

## Criando a animação

### Criar um círculo com bordas grossas e cinza

Como sabemos, o primeiro passo será criar um círculo com bordas cinzas e grossas, para isso, vamos criar uma `div` em nosso HTML:

```markup
<div class="spinner"></div>
```

Veja que foi dada a classe `spinner` para o círculo, agora, precisamos aplicar o CSS para que o mesmo seja um círculo:

```css
.spinner {
	border-radius: 100%;
	height: 50px;
	width: 50px;
}
```

Repare que definimos uma altura (*height*) e largura (*width*) fixa para o círculo (ambos devem possuir o mesmo valor), e para deixá-lo redondo, apliquei um `border-radius` com o valor de `100%`, porém, ainda está faltando definir a borda para nosso círculo, podemos fazer isso com a propriedade `border`:

```css
.spinner {
	border: 5px solid #DCDCDC;
	border-radius: 100%;
	height: 50px;
	width: 50px;
}
```

Foi definido uma borda com tamanho de `5px` e com a cor `#DCDCDC` (cinza claro).

Com isso, devemos ter o seguinte resultado:

![Primeira parte da borda](https://res.cloudinary.com/mahenrique94/image/upload/v1549711266/animation-loading-primeira-parte_u7ldiw.png)

Legal, nosso primeiro passo foi concluído.

### Definir uma borda com cor verde

O segundo passo é simplesmente definir a cor verde para um dos lados de nossa borda, podemos fazer isso com o `border-left-color`, assim, definiremos uma cor para a borda da esquerda (*left*):

```css
.spinner {
	border: 5px solid #DCDCDC;
	border-left-color: #00CC99;
	border-radius: 100%;
	height: 50px;
	width: 50px;
}
```

Foi definida a cor `#00CC99` (verde nem claro e nem escuro) para a borda da esquerda. Após definir a cor, devemos ter o seguinte resultado:

![Segunda parte da borda](https://res.cloudinary.com/mahenrique94/image/upload/v1549711332/animation-loading-segunda-parte_uzo9ja.png)

Com isso, o segundo passo também está concluído.

### Girar o círculo infinitamente

Legal, agora já temos tudo pronto, precisamos apenas criar a animação responsável por girar o círculo infinitamente dando a ideia de *loading* (carregando/processando). Como podemos criar uma animação no CSS? Com a chegada do CSS3, um de seus recursos foi o [Animation](https://www.w3schools.com/css/css3_animations.asp), sim, ele é o responsável por criar as animações.

Para criar uma animação, precisamos utilizar a palavra reservada `@keyframes` seguida pelo nome da animação:

```css
@keyframes loading
```

Legal, dizemos que estamos criando uma animação chamada `loading` (o nome será usado mais á frente), mas algo está estranho, o que ela irá fazer? Pois é, para de fato criarmos uma animação, precisamos passar um corpo para ela, podemos fazer isso utilizando as chaves como de costume no CSS:

```css
@keyframes loading {

}
```

Pronto, agora sim, nossa animação está criada corretamente.

Para girar uma elemento com CSS, podemos utilizar a propriedade `transform` (também inserida no CSS3) junto com seu valor `rotate`. Nossa animação deve começar com 0 graus de giro e finalizar com 360 graus, assim, a mesma irá dar um giro completo.

Para dizermos como uma animação deve começar, ou seja, qual será seu estado inicial, podemos utilizar o `from` ou `0%`:

```css
@keyframes loading {
	from {
		transform: rotate(0);
	}
}
```

Ou:

```css
@keyframes loading {
	0% {
		transform: rotate(0);
	}
}
```

Repare que passamos o valor 0 para o `rotate`, assim, estamos indicando que a rotação inicial (`0%`) deve ser 0 grau.

Já definimos o estado inicial da animação, agora precisamos definir seu estado final, que será um giro de 360 graus. Podemos definir o estado final de uma animação através de `to` ou `100%`:


```css
@keyframes loading {
	to {
		transform: rotate(360deg);
	}
}
```

Ou:

```css
@keyframes loading {
	100% {
		transform: rotate(360deg);
	}
}
```

Tudo certo, nossa animação final, fica da seguinte maneira:

```css
@keyframes loading {
	0% {
		transform: rotate(0);
	}
	100% {
		transform: rotate(360deg);
	}
}
```

**Obs**: Eu particularmente prefiro trabalhar com `%`, pois, o `from` e `to` só funcionam quando nada acontece no meio deles, porém, com porcentagem, podemos definir qualquer estado da animação entre seu começo `0%` e seu fim `100%`, nos dando muito mais possibilidades.

Pronto, já temos a nossa animação criada, como podemos aplicá-la em nosso elemento? Podemos fazer isso através da propriedade `animation` (inserida no CSS3), a mesma recebe alguns (não somente esses) parâmetros:

1. Nome da animação que desejamos aplicar.
2. Tempo que a animação deve ser executada.
3. Maneira como a animação deve ser realizada.
4. Informar se a animação deve se repetir ou não, ou seja, ser infinita.

Para aplicar o efeito da animação, vamos criar outra classe para nosso `spinner`:

```markup
<div class="spinner is-animating"></div>
```

E aplicar a animação em seu CSS:

```css
.spinner.is-animating {
	animation: loading 2s linear infinite;
}
```

No código acima, dizemos que o elemento que possuir as classes `spinner` e `is-animation` deve receber a animação `loading`, a mesma deve ser executada em dois segundos (`2s`) de forma `linear`, ou seja, os dois segundos devem ser divididos e aplicados de forma igual durante seu ínicio e fim. Por fim, dizemos para ela ser infinita (`infinite`), assim, deverá executar para sempre.

Pronto, isso deve ser o suficiente para nosso *loading* estar animado.

![Comemorando animação pronta](https://res.cloudinary.com/mahenrique94/image/upload/v1549711403/gif-animado-minions_r4xcmt.gif)

## Saiba mais

### Compatibilidade de navegadores

Por questões de compatibilidade com *browsers* (navegadores) mais antigos, é aconselhado utilizar prefixos para a criação de animações, sendo eles:

```css
@keyframes
@-webkit-keyframes
@-moz-keyframes
@-o-keyframes
@-ms-keyframes
```

Cada prefixo é utilizado para um navegador específico:

- **webkit**: Google Chrome e Safari.
- **moz**: Mozila.
- **o**: Opera.
- **ms**: Internet Explorer.

O resto continua conforme anteriormente, assim, conseguiremos garantir uma maior compatibilidade de navegadores para nossa animação.

### Velocidade da animação

Caso você tenha reparado, a animação final ficou diferente da inicial, apresentada no ínicio do *post*, isso porque a forma que estamos pedindo para a animação ser executada está diferente.

No exemplo do *post* pedimos para a animação acontecer de forma `linear`, ou seja, os dois segundos serão dividos de forma igual do começo ao fim, porém, queremos que ela comece devagar e finalize rápido, para isso, podemos utilizar a forma de animação com `cubic-bezier`:

```css
.spinner.is-animating {
	animation: loading 2s cubic-bezier(0, .25, .7125, .1) infinite;
}
```

O `cubic-bezier` é uma curva definida em quatro (4) pontos, sendo eles: p0, p1, p2 e p3, também podemos definir esses pontos como x1, y1, x2 e y2. Seus valores devem ser de 0 á 1, sendo 0 devagar e 1 rápido.

![Exemplo de animação](https://res.cloudinary.com/mahenrique94/image/upload/v1549711199/exemplo-animation-loading_z0e7sw.gif)

E finalmente nossa animação está da forma apresentada no ínicio do *post*.

### Animation com JS

Recentemente foi introduzida uma API no JavaScript responsável por realizar a mesma animação (assunto para um próximo *post), ela é chamada de [Animation API](https://developer.mozilla.org/pt-BR/docs/Web/API/Element/animate).

## Conclusão

Não precisamos mais ficar criando *giff's*, hoje, apenas com CSS3 ou JavaScript muita animação pode ser feita.

Caso ainda tenha ficado alguma dúvida ou você prefere assistir em vez de ler, segue o vídeo gravado sobre o mesmo assunto em meu canal no youtube:

<iframe width="560" height="500" src="https://www.youtube.com/embed/fcadO6cTy1M" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>

E aí, gostou? Já conhecia o Animation? Não deixe de comentar e assinar a [*newsletter*](http://eepurl.com/ggP7Rv) para receber novos *posts* por email e fcar por dentro das novidades.
