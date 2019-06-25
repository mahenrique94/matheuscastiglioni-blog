---
autor: "Matheus Castiglioni"
categoria: "JavaScript"
disqus_identifier: "criando-um-event-emitter"
disqus_title: "Criando Um EventEmitter"
disqus_url: "https://blog.matheuscastiglioni.com.br/criando-um-event-emitter"
date: 2019-06-24T21:11:44-03:00
draft: false
keywords: ["Emit", "Emitter", "Front-End", "Listen", "Listener", "Publish", "PubSub", "Web"]
slug: "criando-um-event-emitter"
tag: ["Emit", "Emitter", "Front-End", "Listen", "Listener", "Publish", "PubSub", "Web"]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1561421718/1_hLSiwh3HW9Pqw0M3gLEMOg_1_uji0gu.png"
title: "Criando Um EventEmitter"
url: "/criando-um-event-emitter"
---

Lidar com eventos é algo comum em aplicações *front-end*, estamos constantemente criando, emitindo e escutando eventos, seja eventos de *click*, *scroll*, *hover*, *focus*, etc... A diversidade de eventos são grandes. Mas, como funciona essa definição e criação de eventos? Nesse *post* irei criar uma simples implementação de um `EventEmitter` responsável por emitir e escutar eventos.

Vamos imaginar o seguinte cenário:

> Ao cadastrar um novo usuário, queremos emitir um evento para que seja mostrado uma mensagem de sucesso.

Podemos ter algo parecido com:

```javascript
const cadastrarNovoUsuario = () => {
    const novoUsuario = new Usuario(/* pegar informações de um formulário */)
    mandarParaAPI(novoUsuario) // simples implementação para fazer uma requisição do tipo POST
    // publicar evento
}
```

Dado que tudo está funcionando, nosso usuário está sendo criado, a requisição está sendo feita e nossa API está conseguindo salvar o usuário com sucesso, precisamos agora emitir o evento referente a criação de usuário, como podemos fazer isso? Vamos ver uma das possíveis implementações e funcionamento referente à um `EventEmitter`.

## Entendendo o EventEmitter

Basicamente o que nosso `EventEmitter` precisa fazer é receber vários *listeners* e salvá-los em algum lugar de forma agrupada (categorizada), depois, quando algum evento for emitido, precisamos verificar se existe algum *listener* para ele e realizar as chamadas para os mesmos. Então podemos definir nossos passos:

1. Criar um `EventEmitter`.
2. Criar uma função para definir um *listener*.
3. Salvar o *listener*.
4. Agrupar os *listeners* por tópicos (categoria).
5. Criar uma função para emitir um evento.
6. Buscar todos os *listeners* desse evento.
7. Chamar todos os *listener*.

Legal, sabemos o que precisamos fazer, hora de por a mão na massa.

![Começando implementação do EventEmitter](https://res.cloudinary.com/mahenrique94/image/upload/v1561422742/ezgif.com-optimize_v18ukc.gif)

Vamos criar nosso `EventEmitter` seguindo nossos passos um á um.

### Criar um EventEmitter

Vamos começar criando um objeto para representar nosso `EventEmitter`:

```javascript
const EventEmitter = {}
```

### Criar uma função para definir um listener

Para criar novos *listeners* vamos criar uma nova propriedade que será uma função em nosso objeto:

```javascript
const EventEmitter = {
    listen: () => {}
}
```

Mas, quando estamos criando um novo *listener* precisamos dizer para ele qual evento o mesmo ficará escutando e o que ele deve fazer quando esse evento for disparado. Sendo assim, vamos definir dois parâmetros para a nossa função `listen`:

```javascript
const EventEmitter = {
    listen: (topic, cb) => {}
}
```

Veja que criamos dois parâmetros, sendo eles:

- `topic`: Nome do evento que ele deve ficar aguardando ser emitido.
- `cb`: Função de *callback* que deve ser executada quando o evento for emitido.

### Salvar o listener

Agora que já temos nossa função para criar um novo *listener* pronta, precisamos salvar esse novo *listener* em algum lugar para futuramente chamá-lo:

```javascript
const EventEmitter = {
    events: new Map(),
    listen: (topic, cb) => {}
}
```

Veja que definimos uma nova propriedade chamada `events` que é do tipo `Map`, nesse `Map` salvaremos como chave o nome do evento e como valor um `array` com todos os seus *listeners*:

```javascript
const EventEmitter = {
    events: new Map(),
    listen: (topic, cb) => {
        const oldEvents = EventEmitter.events.get(topic)
        if (EventEmitter.events.has(topic)) {
            return EventEmitter.events.set(topic, [ ...oldEvents, cb ])
        }
        return EventEmitter.events.set(topic, [ cb ])
    }
}
```

Calma, irei explicar a nossa função `listen` completa:

1. Primeiro pegamos todos os eventos já criados para nosso `EventEmitter` e salvamos em uma variável chamada `oldEvents`.
2. Verificamos se o novo evento à ser escutado já existe em nosso `Map` de eventos.
3. Caso ele exista, é feito uma concatenação de todos os *listeners* existentes mais o novo *listener* e criamos um novo `array`.
4. Caso ele não existe, é criado um novo `array` com o novo *listener*.

Com isso, já concluímos mais dois passos da nossa implementação, sendo: **Salvar o listener** e **Agrupar os listeners por tópicos (categoria)**.

### Criar uma função para emitir um evento

Agora precisamos criar uma função para emitir um novo evento:

```javascript
const EventEmitter = {
    events: new Map(),
    listen: (topic, cb) => {
        const oldEvents = EventEmitter.events.get(topic)
        if (EventEmitter.events.has(topic)) {
            return EventEmitter.events.set(topic, [ ...oldEvents, cb ])
        }
        return EventEmitter.events.set(topic, [ cb ])
    },
    emit: () => {}
}
```

Veja que adicionamos uma nova propriedade chamada `emit` para nosso objeto `EventEmitter`, que por hora é apenas uma função simples. Mas, precisamos saber qual evento vamos emitir e quais informações serão enviadas para esse evento, sendo assim, vamos definir dois parâmetros para nossa função `emit`:

```javascript
const EventEmitter = {
    events: new Map(),
    listen: (topic, cb) => {
        const oldEvents = EventEmitter.events.get(topic)
        if (EventEmitter.events.has(topic)) {
            return EventEmitter.events.set(topic, [ ...oldEvents, cb ])
        }
        return EventEmitter.events.set(topic, [ cb ])
    },
    emit: (topic, data) => {}
}
```

Agora, precisamos pegar todos os eventos e chamar seus *listeners*:

```javascript
const EventEmitter = {
    events: new Map(),
    listen: (topic, cb) => {
        const oldEvents = EventEmitter.events.get(topic)
        if (EventEmitter.events.has(topic)) {
            return EventEmitter.events.set(topic, [ ...oldEvents, cb ])
        }
        return EventEmitter.events.set(topic, [ cb ])
    },
    emit: (topic, data) => {
        const myListeners = EventEmitter.events.get(topic)
        if (Array.isArray(myListeners) && myListeners.length) {
            myListeners.forEach(event => event(data))
        }
    }
}
```

Vamos dar uma olhaa em nossa função `emit`:

1. Pegamos todos os *listeners* para o evento à ser emitido e salvamos em uma variável chamada `myListeners`.
2. Verificamos se o valor da variável `myListeners` é um `array` e se tem pelo menos um *listener*.
3. Percorremos nossa lista de *listeners* chamando eles e passando as informações como parâmetro.

Com isso conseguimos finalizar todos os passos para a implementação do nosso `EventEmitter`.

### Testando nosso EventEmitter

Chegou a hora de testar nosso `EventEmitter`, primeiro vamos criar um *listener*:

```javascript
EventEmitter.listen('USUARIO_SALVO', data => console.log(`Salvando um novo usuário: ${JSON.stringify(data)}`))
```

Estamos criando um novo *listener* para o evento `USUARIO_SALVO` e como *callback* vamos apenas logar uma frase com as informações do novo usuário.

Agora, vamos emitir um evento do tipo `USUARIO_SALVO`:

```javascript
const cadastrarNovoUsuario = () => {
    const novoUsuario = new Usuario(/* pegar informações de um formulário */)
    mandarParaAPI(novoUsuario) // simples implementação para fazer uma requisição do tipo POST
    EventEmitter.emit('USUARIO_SALVO', novoUsuario)
}
```

Veja que no seu console irá aparecer:

```
Salvando um novo usuário: { /* Informações do usuário */ }
```

Ou seja, nosso `EventEmitter` está funcionando.

![Comemorando o teste do EventEmitter](https://res.cloudinary.com/mahenrique94/image/upload/v1561424613/ezgif.com-optimize_1_t7trjr.gif)

Caso queira ver o exemplo completo:

<iframe height="400px" width="100%" src="https://repl.it/@mahenrique94/EventEmitter?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

## Conclusão

Nesse *post* entendemos e criamos um simples `EventEmitter` que publica e recebe reventos.

E aí, você já havia implementado o seu? Não deixe de comentar.

Caso tenha gostado do *post* você pode estar assinando nossa [*newsletter*](http://eepurl.com/ggP7Rv) e receber novidades por email.

Abraços, até a próxima.
