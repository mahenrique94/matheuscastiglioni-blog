---
autor: "Matheus Castiglioni"
categoria: "Outros"
disqus_identifier: "desconstruindo-a-web-pilha-de-execucao-do-javascript"
disqus_title: "Desconstruindo a Web: Pilha De Execução Do Javascript"
disqus_url: "https://blog.matheuscastiglioni.com.br/desconstruindo-a-web-pilha-de-execucao-do-javascript"
date: 2019-03-25T21:34:39-03:00
draft: false
keywords: ["Web", "JavaScript", "Call-Stack", "Call-Queue", "Desconstruindo a Web"]
slug: "desconstruindo-a-web-pilha-de-execucao-do-javascript"
tag: ["Web", "JavaScript", "Call-Stack", "Call-Queue", "Desconstruindo a Web"]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1553561070/lform_javascript_blog_header_image-1600x1080_1_kxwpez.jpg"
title: "Desconstruindo a Web: Pilha De Execução Do Javascript"
url: "/desconstruindo-a-web-pilha-de-execucao-do-javascript"
---

Atualmente nós desenvoldedores (programadores) *front-end* estamos preocupados em *frameworks* e bibliotecas, por exemplo: React, Vue, Angular, Webpack, Babel, ESLint, etc... Ficamos preocupados em responder simplesmente uma das perguntas mais famosas: "Qual framework/biblioteca usar?". Perguntas desse tipo já viraram clichê.

Nesse *post* vamos fugir um pouco desses assuntos rotineiros e focar mais no JavaScript, vamos entender como funciona a pilha de execução, o que acontece quando uma determinada função é chamada e quando é feita a alocação de memória.

O JavaScript é *single thread*, isso significa que ele pode lidar apenas com uma tarefa por vez, em outras palavras, um pedaço de código por vez. Ele possuí uma única **Call Stack** (Pilha de execução) e juntamente com outras partes como **Head** e **Queue** (Fila) formam o JavaScript Concurrency Model.

![JavaScript concurrency model](https://res.cloudinary.com/mahenrique94/image/upload/v1553561923/1_ZSFHnq9iMHIApVLcgwczPQ_hc7w6v.png)

Calma, vamos entender cada pedaço da imagem.

## Call Stack

É uma estrutura de dados que registra as chamadas de funções, basicamente se nos chamamamos uma função, então ela é adicionada na pilha e quando nos retornamos de uma função, a mesma é retirada da pilha.

Vamos imaginar o seguinte cenário:

```javascript
const multiplicar = (n1, n2) => n1 * n2
console.log(multiplicar(1, 2))
```

Teríamos nossa pilha, da seguinte forma:

![Pilha de execução](https://res.cloudinary.com/mahenrique94/image/upload/v1553565021/Untitled-2_hzjkvr.png)

A função `main` será o ponto de partida para a execução da pilha.

Depois chamamos o `console.log` e depois a função `multiplicar`, dessa maneira, a terceira chamada estará no topo da pilha. Isso acontece por conta do funcionamento de pilhas, onde a primeira a entrar é a última a sair e novas inserções serão no topo.

Assim que a função `multiplicar` for executada e retornada, ela será removida da pilha, o mesmo acontecerá para o `console.log`, ou seja, assim que ele for chamado e retornado, também será retirado da pilha.

### Saiba mais

Algumas vezes podemos nos deparar com o seguinte erro:

> RangeError: Maxium call stack size exceeded.

Isso pode acontecer por conta de alguma função recursiva ter entrado em *loop* infinito, por exemplo:

```javascript
function ola() {
    ola()
}
```

A função irá sempre chamar ela mesmo, sem uma condição de saída. Atualmente nos navegadores, existe um limite máximo para essas pilhas, no caso do Chrome o limite é 16.000 itens, caso o número ultrapasse, será lançado a exceção mostrada anteriormente.

## Heap

Objetos são alocados em um Heap, na maior parte não estruturada da memória. Aqui é onde será feita toda alocação de memória para variáveis e objetos.

Vejamos outro exemplo (bem parecido com o anterior):

```javascript
let valor = 0
const multiplicar = (n1, n2) => n1 * n2
```

![Alocação de memória](https://res.cloudinary.com/mahenrique94/image/upload/v1553563571/Untitled-2_mzg74h.png)

Dessa maneira, quando o `.js` for interpretado (lido de cima para baixo), essa alocação de memória será feita. Algo do tipo:

> Comecei a ler o JavaScript...
>
> Achei uma variavel, vou armazená-la na memória.
>
> Estou criando uma função, também irei armazená-la na memória.

## Queue

Uma fila de mensagens á serem processadas e quais funções de retorno devem ser chamadas quando as mensagens forem processadas.

Seguindo o exemplo da multiplicação, ou seja:

```javascript
const multiplicar = (n1, n2) => n1 * n2
multiplicar(1, 2)
```

Podemos ter nossa fila parecido com:

![Fila de mensagens](https://res.cloudinary.com/mahenrique94/image/upload/v1553565478/Untitled-2_eqqucd.png)

Nossa função `multiplicar` está sendo executada.

## Resumindo

Agora que já vimos pelo menos um exemplo de cada pilar da representação visual do modelo JS, em um exemplo um pouco mais parecido com o mundo real, poderíamos ter algo do tipo:

```javascript
const valorInicial = 2
const multiplicar = numero => valorInicial * numero
const resultado = multiplicar(2)
console.log(resultado)
```

![Exemplo do mundo real](https://res.cloudinary.com/mahenrique94/image/upload/v1553565829/Untitled-2_a88cjf.png)

E por fim, após a execução da função `multiplicar` temos:

![Logando o resultado](https://res.cloudinary.com/mahenrique94/image/upload/v1553565922/Untitled-2_vmquih.png)

Repare que após realizar o retorno, a função `multiplicar` foi retirada da pilha, assim, quando o `console.log` foi chamado, o mesmo foi adicionado e posteriormente será retirado.

## Conclusão

Nesse *post* expliquei um pouco como funciona o processo de execução dos navegadores, com isso conseguimos entender quando é feito a alocação de memória e como as funções são executadas.

E aí, você já conhecia a pilha de execução dos navegadores? Não deixe de comentar.

Caso tenha gostado do *post* e gostaria de receber novidades por email, você pode estar assinando a [newsletter](http://eepurl.com/ggP7Rv).

Até a próxima.

## Referência:

- [Understanding Javascript Function Executions — Call Stack, Event Loop , Tasks & more](https://medium.com/@gaurav.pandvia/understanding-javascript-function-executions-tasks-event-loop-call-stack-more-part-1-5683dea1f5ec)
