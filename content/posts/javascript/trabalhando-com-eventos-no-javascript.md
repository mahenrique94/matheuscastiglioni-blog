---
autor: "Matheus Castiglioni"
categoria: "JavaScript"
disqus_identifier: "trabalhando-com-eventos-no-javascript"
disqus_title: "Trabalhando Com Eventos No Javascript"
disqus_url: "https://blog.matheuscastiglioni.com.br/trabalhando-com-eventos-no-javascript"
date: 2018-08-30T09:58:32-02:00
draft: false
keywords: [ "Eventos", "Front-End", "PubSub", "PubSubJS", "React", "ReactJS", "Web" ]
slug: "trabalhando-com-eventos-no-javascript"
tag: [ "Eventos", "Front-End", "PubSub", "PubSubJS", "React", "ReactJS", "Web" ]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1549706465/trabalhando-com-eventos-no-javascript_5b87d6bf91b12_bg_ngd4iv.jpg"
title: "Trabalhando Com Eventos No Javascript"
url: "/trabalhando-com-eventos-no-javascript"
---

Imagine que temos um projeto em andamento, porém, precisamos adicionar uma nova funcionalidade em um de nossos componentes, hoje temos nossa árvore de componentes da seguinte maneira:

```markup
<App>
	<ComponenteA>
		<ComponenteFilhoA>
			<OutroFilho>
		</ComponenteFilhoA>
		<ComponenteFilhoB/>
		<ComponenteFilhoC/>
	</ComponenteA>
	<ComponenteB>
		<ComponenteFilhoB/>
	</ComponenteB>
	<ComponenteC/>
	<ComponenteD/>
</App>
```

Certo, dado nossa árvore atual, sabemos que o responsável por essa nova funcionalidade será o componente `OutroFilho` que é filho de `ComponenteFilhoA` e por sua vez é filho de `ComponenteA`. Além de todos esses relacionamentos entre pais e filhos, também temos os irmãos, sobrinhos, primos, tios, e por aí vai...

A nova funcionalidade criada em `OutroFilho` deve impactar e atualizar os componentes `ComponenteFilhoB`, `ComponenteC` e `ComponenteD`, como podemos resolver esse problema?

Uma das maneiras de resolver o problema, seria nosso componente `App` cuidar de tudo, dessa maneira, poderíamos passar via `props` uma função contendo a nova funcionalidade para o componente `ComponenteA`, que por sua vez repassaria essa `props` para seu filho `OutroFilho`. Assim, quando a função for executada, atualizaríamos o `state` do componente `ComponenteA` que por sua vez seria passado para os demais componentes que precisam daqueles dados.

**Obs**: No código acima, todos os componentes não estão diretamente no componente `App`, o mesmo apenas tem em sua declaração os componentes: `ComponenteA`, `ComponenteB`, `ComponenteC` e `ComponenteD`. Os demais componentes são filhos de filhos do componente `App`, apenas deixei tudo junto para ficar facilitar o entendimento e visualização da arvore final de componentes.

Beleza, será que não existe uma maneira mais elegante de resolver o problema? Sim, para isso temos a biblioteca chamada [PubSubJS](https://github.com/mroderick/PubSubJS#readme).

## Conhecendo a PubSubJS

A PubSub é uma biblioteca muito pequena, em sua versão minificada e "gzipada" podemos contar com menos de `1kb`, responsável por trabalhar com eventos, conseguimos realizar a prática do *event driven programming* (Programação orientada á eventos). Tudo isso é possível através de publicações (*publish*) e inscrições (*subscribe*).

A ideia do nosso cenário é: O componente `OutroFilho` terá sua nova funcionalidade, quando ela for executada, será disparado um evento para a aplicação e quem estiver ouvindo esse evento, poderá reagir á ele.

## Instalando a biblioteca

Podemos realizar a instalação da PubSub de várias maneiras diferentes, sendo elas:

1. Instalando via gerenciador de pacotes:

Ela pode ser instalada tanto com `npm` ou `yarn`:

```bash
npm i pubsub-js
```

ou

```bash
yarn add pubsub-js
```

2. Também podemos utilizá-la diretamente através de suas CDN's:

- [http://www.jsdelivr.com/#!pubsubjs](http://www.jsdelivr.com/#!pubsubjs)
- [https://cdnjs.com/libraries/pubsub-js](https://cdnjs.com/libraries/pubsub-js)

3. Realizar o *download* de sua versão "taggeada" através do Github: [tagged versions](https://github.com/mroderick/PubSubJS/tags)

4. Antigamente também era possivel instalá-la via `bower`, porém, a última versão disponível através do mesmo é: `1.5.4`, versão um pouco desatualizada comparada com a atual: `1.6.1`.

## Publicando um evento

Voltando a nossa funcionalidade, como podemos publicar um evento? O primeiro passo é importar a biblioteca dentro de onde o evento será publicado, ou seja, dentro do nosso componente `OutroFilho`:

```javascript
import PubSub from "pubsub-js"
```

Agora que já temos a `PubSub` importada e disponível para uso, dentro da nossa função, vamos publicar um evento:

```javascript
novaFuncionalidade = () => {
	PubSub.publish("NOVA_FUNCIONALIDADE")
}
```

Para realizar a publicação do evento, utilizamos a função `publish`.

No exemplo acima, apenas foi publicado um evento, sem mandar informações para o mesmo, porém, nossa funcionalidade, exige que buscamos um determinado cliente e repassamos ele para quem ouvir o evento, podemos fazer isso da seguinte maneira:

```javascript
novaFuncionalidade = () => {
	const cliente = buscarCiente()
	PubSub.publish("NOVA_FUNCIONALIDADE", cliente)
}
```

Agora, quem ouvir nosso evento conseguirá ter acesso ao cliente encontrado.

**Obs:** Repare que conseguimos emitir nosso evento através de uma publicação, portanto, não fique confuso, tanto publicar quanto emitir, basicamente são as mesmas coisas dentro desse cenário.


### Entendendo a função publish

A função `publish` pode receber dois parâmetros:

1. O primeiro é o nosso evento/tópico que estamos publicando, em outras palavras, o nome do evento (esse nome deve ser guardado para depois ser ouvido).
2. O segundo é alguma informação que precisamos passar para quem ouvir nosso evento.

Tópicos/eventos são publicados de forma assíncrona, dessa maneira, nossa aplicação não irá travar enquanto o evento é emitido e ouvido. A PubSub não fica acoplada (presa) em sua sincronização, assim, ela consegue ajudar a manter a nossa aplicação rodando de forma que os tópicos/eventos não irão bloquear o usuário.

Se você preferir ou precisar, também é possível publicar/emitir eventos de forma síncrona através da função `publishSync`, seu funcionamento é semelhante á `publish` apenas mudando sua forma de assíncrona para síncrona.

## Recebendo evento

Legal, conseguimos publicar nosso evento, agora, precisamos de alguma maneira, dentro dos componentes `ComponenteFilhoB`, `ComponenteC` e `ComponenteD`, ouvir e receber o evento quando o mesmo for publicado/emitido, podemos fazer isso através da função `subscribe`, da seguinte maneira:

```javascript
import PubSub from "pubsub-js"

componentDidMount = () => {
	PubSub.subscribe("NOVA_FUNCIONALIDADE", this.receberCliente)
}
```

Repare que para ouvir/receber/subescrever em um evento, devemos utilizar a função `subscribe`, a mesma recebe dois parâmetros:

1. O nome do evento/tópico que estamos querendo ouvir.
2. Uma função de *callback* que deverá ser executada quando o evento for emitido

Aí eu te pergunto, precisamos receber os dados do cliente que foram passados durante a emissão do evento, como podemos fazer isso? No segundo parâmetro da função `subscribe`, devemos retornar uma função de *callback*, porém, essa função pode receber dois parâmetros, sendo eles: O nome do tópico/evento que foi publicado e os dados que foram passados:

```javascript
componentDidMount = () => {
	PubSub.subscribe("NOVA_FUNCIONALIDADE", (topico, cliente) => this.receberCliente(cliente))
}
```

**Obs**: O código de `subscribe` deve estar em todos os componentes que pretendem ouvir e receber o evento.

### Saiba mais

Quando realizamos o `subscribe` dentro do ciclo de vida `componentDidMount`, a função de *callback* não será executada naquele momento, apenas realizamos e dizemos para a PubSub que queremos ouvir aquele evento/tópico. A função de *callback* apenas será executada quando o evento for emitido, ou seja, enquanto não realizamos o `publish` nada será feito e chamado.

Assim que a função `publish` for executada, a PubSub irá disparar esse evento de forma global para nossa aplicação, e todos os lugares que estiverem fazendo um `subscribe` para o mesmo nome do evento/tópico emitido será executada a função de *callback* referente á eles.

## Cancelando um recebimento

Até agora vimos como emitir/receber eventos, mas, também é possível cancelar esse o recebimento.

```javascript
componentDidMount = () => {
	const id = PubSub.subscribe("NOVA_FUNCIONALIDADE", (topico, cliente) => this.receberCliente(cliente))
}
```

Quando realizarmos o `subscribe`, a função devolve um `id` para identificar aquela inscrição, em caso de necessidade podemos cancelar o `subscribe` através da função `unsubscribe`:

```javascript
componentDidMount = () => {
	const id = PubSub.subscribe("NOVA_FUNCIONALIDADE", (topico, cliente) => this.receberCliente(cliente))
	PubSub.unsubscribe(id)
}
```

Como você pode ver a função `unsubscribe` recebe o `id` que pretendemos cancelar, se surgir a necessidade de voltar a ouvir o evento, simplesmente realize o `subscribe` novamente.

### Saiba mais

Também é possível cancelar todos as incrições de uma única vez, através da função `clearAllSubscriptions`:

```javascript
PubSub.clearAllSubscriptions()
```

Dessa maneira nenhum evento mais será ouvido até que seja realizado o `subscribe` novamente.

## Dica para ouvir/receber eventos

Em vez de ficar passando a mesma `String` tanto para emitir quanto para receber, recomenda-se que exista um arquivo de *constant* em nosso projeto:

```javascript
const Eventos = {
	NOVA_FUNCIONALIDADE: "NOVA_FUNCIONALIDADE"
}

export { Eventos }
```

Dessa maneira, podemos realizar o `publish` e `subscribe` da seguinte maneira:

```javascript
import { Eventos } from "constants/eventos.js"

PubSub.publish(Eventos.NOVA_FUNCIONALIDADE)
PubSub.subscribe(Eventos.NOVA_FUNCIONALIDADE)
```

Com isso, se um dia o nome de nosso evento precisar mudar, não precisaremos sair procurando onde o mesmo está sendo utilizado, basta modificar nossa constante de eventos.

## Saiba mais

A biblioteca PubSub é utilizada e voltada para aplicações de **processo único** (*Single process*), se sua aplicação é ou tem chances de se tornar uma aplicação de multíplos processos (*multi process*), então eles recomendam que você faça uso de bibliotecas como [redis PubSub](https://redis.io/topics/pubsub).

No exemplo do *post* utilizei a PubSub dentro de uma aplicação `React`, porém, é possível utilizá-la em qualquer lugar que pode executar JavaScript (Browser, NodeJS, Angular, Vue, Elm, Ember, Meteor, etc...).

## Conclusão

Para esse *post* é isso, com a PubSub conseguimos simplificar e melhorar muito nossos códigos através de emissões e inscrições de eventos, muitas bibliotecas fazem o isso desse padrão.

E aí, você já conhecia a PubSub? Não deixe de comentar, se gostou desse e outros *post's* se inscreva na [*newsletter*](http://eepurl.com/ggP7Rv) para receber novidades por email.

Espero que tenha gostado, até a próxima.
