---
autor: "Matheus Castiglioni"
categoria: "JavaScript"
disqus_identifier: "realizando-requisicoes-ajax-com-fetch-api"
disqus_title: "Realizando Requisicoes Ajax Com Fetch Api"
disqus_url: "https://blog.matheuscastiglioni.com.br/realizando-requisicoes-ajax-com-fetch-api"
date: 2018-03-27T15:17:08-02:00
draft: false
keywords: [ "Ajax", "Cep", "Fetch API", "Front-End", "HTTP", "Requisição", "Web", "Web Service" ]
slug: "realizando-requisicoes-ajax-com-fetch-api"
tag: [ "Ajax", "Cep", "Fetch API", "Front-End", "HTTP", "Requisição", "Web", "Web Service" ]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1549716644/realizando-requisicoes-ajax-com-fetch-api_ymmpp9.jpg"
title: "Realizando Requisicoes Ajax Com Fetch Api"
url: "/realizando-requisicoes-ajax-com-fetch-api"
---

Continuando a série de *post* sobre realizar requisições AJAX, esse é o terceiro, nele irei explicar como buscar dados de um CEP (assim como exemplo dos anteriores) utilizando a nova API do JavaScript para trabalharmos com requisições HTTP chamada [Fetch API](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API).

Para você que ainda não leu os *posts* anteriores, segue abaixo a oportunidade de lê-los:

- [Requisições AJAX com Javascript](http://blog.matheuscastiglioni.com.br/requisicoes-ajax-com-javascript)
- [Realizando requisições AJAX com Axios](http://blog.matheuscastiglioni.com.br/realizando-requisicoes-ajax-com-axios)

No primeiro *post* explico como consumir um *web service* para consultas de CEP's utilizando o [XMLHttpRequest](https://developer.mozilla.org/pt-BR/docs/Web/API/XMLHttpRequest), já no segundo, utilizo o [Axios](https://github.com/axios/axios) uma biblioteca muito famosa para realizar requisições HTTP.

Chega de mais delongas e vamos para a prática.

## Criando o layout da aplicação

Para focarmos apenas na escrita de código JavaScript com a Fetch API, irei disponibilizar o *layout* pronto para você.

index.css:

```css
:root {
    --color-primary : #0099FF;
    --color-text : #FDFDFD;
}

body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

.title {
    background: var(--color-primary);
    color: var(--color-text);
    margin: 0;
    margin-bottom: 2rem;
    padding: 5rem;
    text-align: center;
}

.form {
    padding: 1rem 5rem;
}
.form__text {
    font-weight: bold;
}
.form___data {
    border: 1px solid #DCDCDC;
    border-radius: 3px;
    color: #595959;
    font-size: 2rem;
    padding: 1rem 2rem;
    outline: none;
    width: 100%;
}
.form___data:focus {
    border-color: var(--color-primary);
    box-shadow: 0 0 7px rgba(0, 153, 255, .5);
}
.form___requirement {
    color: #FF8080;
    display: block;
    font-weight: 100;
    margin: .5rem .75rem;
}
.form__button {
    background: var(--color-primary);
    border: none;
    border-radius: 5px;
    color: var(--color-text);
    font-size: 1.25rem;
    outline: none;
    padding: 1rem 2rem;
}
.form__button:hover {
    background: #007ACC;
    cursor: pointer;
}

.row {
    width: 100%;
}
.row.has-alignCenter {
    text-align: center;
}
```

index.html:
```markup
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Buscando CEP com Fetch API</title>
    <meta content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" name="viewport">
    <link href="assets/css/normalize.css" rel="stylesheet" type="text/css">
    <link href="assets/css/index.css" rel="stylesheet" type="text/css">
</head>
<body>
    <main class="container">
        <h1 class="title">Buscando CEP com Fetch API</h1>
        <form class="form" onsubmit="buscarCep(event, this);">
            <div class="row">
                <div class="form___group">
                    <input autofocus autocomplete="off" class="form___data" id="cep" maxlength="8" name="cep" pattern="([\d]{8})" placeholder="Digite o CEP aqui" required type="text">
                    <span class="form___requirement">* O campo deve ser informado com apenas números.</span>
                </div>
            </div>
            <div class="row has-alignCenter">
                <button class="form__button" type="submit">Buscar CEP</button>
            </div>
        </form>
    </main>
    <script src="assets/js/index.js" type="text/javascript"></script>
</body>
</html>
```

Além desses dois arquivos, devemos importar também o [Normalize.css](https://necolas.github.io/normalize.css/8.0.0/normalize.css), se tudo deu certo, devemos ter o seguinte *layout*:

![Layout da app](https://res.cloudinary.com/mahenrique94/image/upload/v1549716719/layout-app-buscando-cep-fetch-api_lrym5u.png)

Pronto, tudo certo para começarmos.

## Buscando o CEP

O primeiro passo para começarmos a busca, será pegar o valor do CEP informado no seu respectivo `input`, para isso, se você reparou, no `onsubmit` do `form` foi informado uma função chamada `buscarCep`, é nela que faremos toda a busca.

```markup
<form class="form" onsubmit="buscarCep(event, this);">
```

Uma pergunte que você deve estar se fazendo:

> Porque passar o event e this como parâmetro para a função?

O primeiro parâmetro, sendo ele, o `event` será utilizado para previnir nosso `form` de realizar o seu compartamento padrão, mas afinal, qual seria esse comportamento? Por padrão todo `form` faz uma requisição do tipo `Get`(caso nenhum `method` foi informado) para a própria página (caso nenhuma `action` foi definida). Então para evitar esse comportamento de requisição `get` e recarregamento de página, precisamos utilizar o `event`.

O segundo parâmetro `this` é uma referência para o `form`, assim vamos conseguir pegar o `input` do CEP e seu valor.

Sabendo disso, vamos definir os passos necessários para realizarmos nossa busca:

1. Criar função para buscar o CEP.
2. Invocá-la quando o `form` for submetido.
3. Previnir comportamento padrão do form.
4. Pegar a referência do `input` do CEP.
5. Validar se o `input` foi encontrado.
6. Pegar o valor do CEP informado.
7. Validar se o valor está no formato correto.
8. Definir a URL que vamos utilizar para consumir o CEP.
9. Realizar a busca dos dados.
10. Tratar resposta e mostrar uma mensagem para o usuário.

Muitos passos né? Calma que são bem simples.

### Criar função para buscar o CEP

Para realizar esse passo, vamos criar um arquivo `index.js` onde vamos escrever nosso código JavaScript, assim que o arquivo for devidamente criado e importado na página:

```markup
<script src="assets/js/index.js" type="text/javascript"></script>
```

Repare que criei o arquivo em `assets/js/index.js`. Com o arquivo criado, precisamos criar agora nossa função que realizar a busca do CEP:

```js
function buscarCep(event, form) {
	// realizar a busca do CEP
}
```

Pronto, o primeiro passo foi dado.

### Invocá-la quando o form for submetido

Agora precisamos invocar nossa função (*function*) assim que o `form` for submetido, para isso, como mencionado anteriormente, podemos utilizar o parâmetro `onsubmit` da *tag* `form`, assim, quando preenchermos e submetermos o mesmo, a nossa função será executada:

```markup
<form class="form" onsubmit="buscarCep(event, this);">
```

### Previnir comportamento padrão do form

Como mencionado no começo do *post*, para evitarmos o comportamento padrão do navegador, devemos utilizar o `event` e sua função `preventDefault`.

```js
function buscarCep(event, form) {
    event.preventDefault();
}
```

Pronto, assim sempre que submeter o nosso `form`, essa função será executada e nada mais irá acontecer.

### Pegar a referência do input do CEP

Também foi mencionado no começo do *post* que precisaríamos da referência do `form` para buscar o `input` referente ao CEP, por isso, passamos ela como parâmetro (depois do `event`) para a função. Assim, podemos buscar o `input` pelo seu nome (`name`) ou `id`.

```js
function buscarCep(event, form) {
    event.preventDefault();
    const inputCep = form.cep;
}
```

Como em nosso HTML definimos tanto o `id` quanto o `name` do input igual à **cep**, podemos realizar a busca dessa maneira.

```markup
<input autofocus autocomplete="off" class="form___data" id="cep" maxlength="8" name="cep" pattern="([\d]{8})" placeholder="Digite o CEP aqui" required type="text">
```

Se o `id` ou `name` fossem **passarinho**, então no código JavaScript deveríamos buscar por `form.passarinho`.

### Validar se o input foi encontrado

Para verificar se o `input` foi encontrado vamos utilizar uma condição (`if`), para o `if` em JavaScript, quando uma variável possuí valor igual à `undefined` a mesma é considerada como falsa (`false`), portanto, podemos simplesmente passar a variável `inputCep` que acabamos de criar para o `if` verificar se está `undefined` (não encontrado) ou possuí sua referência.

```js
function buscarCep(event, form) {
    event.preventDefault();
    const inputCep = form.cep;
    if (inputCep) {
		// buscar cep...
    }
}
```

### Pegar o valor do CEP informado

Esse passo será fácil, pois já temos o `input` referente ao CEP guardado em uma variável e validado, basta pegar o valor dele com `.value`:

```js
function buscarCep(event, form) {
    event.preventDefault();
    const inputCep = form.cep;
    if (inputCep) {
        const cep = inputCep.value;
    }
}
```

Veja que pegamos o valor do CEP e guardamos na variável `cep`.

### Validar se o valor está no formato correto

Para validar se o valor está no formato correto vamos seguir a regra definida no `pattern` do `input`:

```
([\d]{8})
```

Veja que trata-se de uma expressão regular (*regex* ou *regexp*) bem simples, estamos dizendo que deve ser informado um conjunto `[]` com oito `{8}` números `\d`. Para verificar a quantidade de caracteres em uma `String` podemos utilizar o `.length`:

```js
function buscarCep(event, form) {
    event.preventDefault();
    const inputCep = form.cep;
    if (inputCep) {
        const cep = inputCep.value;
        if (cep.length === 8) {
			// buscar o cep...
        }
    }
}
```

Pronto, verificação realizada, se o CEP for informado com menos de oito números não entrará no `if` e como estamos utilizando o HTML5 e seu atributo `pattern` o `form` nem será submetido.

### Definir a URL que vamos utilizar para consumir o CEP

Até o momento, já temos nosso CEP informado e válidado, precisamos agora saber de onde vamos consumir os dados dele. Para essa consulta vamos utilizar meu *web service*, o mesmo pode ser consumido através do seguinte endereço:

```
http://ws.matheuscastiglioni.com.br/ws/cep/find/CEP/json
```

Onde CEP deve ser o informado o valor de um CEP real.

Sabemos que para concatenar `String` nas novas versões do JavaScript podemos utilizar a `Template String`, portanto, vamos fazer seu uso:

```js
function buscarCep(event, form) {
    event.preventDefault();
    const inputCep = form.cep;
    if (inputCep) {
        const cep = inputCep.value;
        if (cep.length === 8) {
            const URL = `http://ws.matheuscastiglioni.com.br/ws/cep/find/${cep}/json`;
        }
    }
}
```

Pronto, mais um passo finalizado, nossa URL está pronta, precisamos agora de fato realizar uma requisição para esse endereço utilizando a Fetch API e tratar sua resposta para informar ao usuário.

### Realizar a busca dos dados

Para utilizar a Fetch APi podemos simplesmente utilizar a função global `fetch`:

```js
fetch(URL_DO_SERVICO);
```

Já sabemos como utilizar a Fetch e o que precisamos passar para ela, ou seja, uma URL do nosso serviço e já temos essa URL, então vamos utilizá-la:

```js
function buscarCep(event, form) {
    event.preventDefault();
    const inputCep = form.cep;
    if (inputCep) {
        const cep = inputCep.value;
        if (cep.length === 8) {
            const URL = `http://ws.matheuscastiglioni.com.br/ws/cep/find/${cep}/json`;
            fetch(URL);;
        }
    }
}
```

A função `fetch` devolve uma `Promise` e por padrão faz uma requisição do tipo `get` (pode ser mudado para qualquer verbo), assim precisamos tratá-la para sucesso e possíveis erros, para tratar o sucesso (*success*) podemos utilizar o `.then` e passar a resposta (*response*) como parâmetro para ele:

```js
function buscarCep(event, form) {
    event.preventDefault();
    const inputCep = form.cep;
    if (inputCep) {
        const cep = inputCep.value;
        if (cep.length === 8) {
            const URL = `http://ws.matheuscastiglioni.com.br/ws/cep/find/${cep}/json`;
            fetch(URL)
                .then(resposta => resposta);
        }
    }
}
```

A resposta da Fetch é um objeto do tipo `Response`, dentro dele, podemos obter várias informações de nossa requisição, por exemplo: conteúdo (*body*), cabeçalho (*headers*), código HTTP (*status*), etc...

Nosso *web service* devolve um objeto do tipo JSON no conteúdo da resposta, então vamos precisar pegar o *body* do objeto `Response`, podemos fazer isso através de `.body`:

```js
function buscarCep(event, form) {
    event.preventDefault();
    const inputCep = form.cep;
    if (inputCep) {
        const cep = inputCep.value;
        if (cep.length === 8) {
            const URL = `http://ws.matheuscastiglioni.com.br/ws/cep/find/${cep}/json`;
            fetch(URL)
                .then(resposta => resposta.body);
        }
    }
}
```

Dessa maneira, nosso `body` vai nos devolver um outro objeto do tipo `ReadableStream`, mas, não é isso que queremos, precisamos pegar o JSON retornado pela nossa requisição. Sabendo dessa necessidade e popularidade de utilizar JSON's para consumos de *web services* o pessoal já disponibilizou a função `json` que basicamente é: Tratar essa resposta que veio em `ReadableStream` e transformar no mesmo JSON enviado pelo nosso serviço e recebido pela nossa requisição.

```js
function buscarCep(event, form) {
    event.preventDefault();
    const inputCep = form.cep;
    if (inputCep) {
        const cep = inputCep.value;
        if (cep.length === 8) {
            const URL = `http://ws.matheuscastiglioni.com.br/ws/cep/find/${cep}/json`;
            fetch(URL)
                .then(resposta => resposta.json());
        }
    }
}
```

A função `json` irá devolver outra `Promise` com o resultado da conversão, como estamos retornando uma `Promise` dentro do `then` de outra `Promise` podemos realizar um encadeamento de *then's*:

```js
function buscarCep(event, form) {
    event.preventDefault();
    const inputCep = form.cep;
    if (inputCep) {
        const cep = inputCep.value;
        if (cep.length === 8) {
            const URL = `http://ws.matheuscastiglioni.com.br/ws/cep/find/${cep}/json`;
            fetch(URL)
                .then(resposta => resposta.json())
                .then(data => data);
        }
    }
}
```

Pronto, no segundo `then` já temos acesso ao nosso CEP em formado JSON, fornecido pelo *web service*, algo parecido com:

```json
{"codibge":3530706,"codestado":35,"cep":"13845-373","logradouro":"Rua Caiapós","complemento":"","bairro":"Jardim Igaçaba","cidade":"Mogi Guaçu","estado":"SP"}
```

Mas, e caso aconteca algum erro, como vamos saber? Precisamos tratá-lo e logá-lo, podemos fazer isso através do `.catch` de uma `Promise`:

```js
function buscarCep(event, form) {
    event.preventDefault();
    const inputCep = form.cep;
    if (inputCep) {
        const cep = inputCep.value;
        if (cep.length === 8) {
            const URL = `http://ws.matheuscastiglioni.com.br/ws/cep/find/${cep}/json`;
            fetch(URL)
                .then(resposta => resposta.json())
                .then(data => data)
                .catch(erro => console.error(erro));
        }
    }
}
```

Pronto, em caso de erro, o mesmo será logado.

### Tratar resposta e mostrar uma mensagem para o usuário

Pronto, tudo feito, mas caso você tenha tentado executar a aplicação deve ter visto que nenhuma mensagem foi dada com os dados do nosso CEP, isso porque não informamos uma mensagem, apenas realizamos a requisição e conversão da resposta para JSON.

Para informar a mensagem, vamos simplesmente utilizar um `alert`, nossa função fica com a seguinte estrutura:

```js
function mostrarResposta(cep) {
    const mensagem = `
        CEP: ${cep.cep},
        Logradouro: ${cep.logradouro},
        Complemento: ${cep.complemento},
        Bairro: ${cep.bairro},
        Cidade ${cep.cidade},
        Estado: ${cep.estado}
    `;
    alert(mensagem);
}
```

E podemos utilizá-la na busca de nosso CEP:

```js
function buscarCep(event, form) {
    event.preventDefault();
    const inputCep = form.cep;
    if (inputCep) {
        const cep = inputCep.value;
        if (cep.length === 8) {
            const URL = `http://ws.matheuscastiglioni.com.br/ws/cep/find/${cep}/json`;
            fetch(URL)
                .then(resposta => resposta.json())
                .then(data => mostrarResposta(data))
                .catch(erro => console.error(erro));
        }
    }
}
```

Nosso código completo fica da seguinte maneira:

```js
function buscarCep(event, form) {
    event.preventDefault();
    const inputCep = form.cep;
    if (inputCep) {
        const cep = inputCep.value;
        if (cep.length === 8) {
            const URL = `http://ws.matheuscastiglioni.com.br/ws/cep/find/${cep}/json`;
            fetch(URL)
                .then(resposta => resposta.json())
                .then(data => mostrarResposta(data))
                .catch(erro => console.error(erro));
        }
    }
}

function mostrarResposta(cep) {
    const mensagem = `
        CEP: ${cep.cep},
        Logradouro: ${cep.logradouro},
        Complemento: ${cep.complemento},
        Bairro: ${cep.bairro},
        Cidade ${cep.cidade},
        Estado: ${cep.estado}
    `;
    alert(mensagem);
}
```

Pronto, agora uma mensagem já deve ser informada ao buscar o CEP:

![Testando busca de CEP com Fetch](https://res.cloudinary.com/mahenrique94/image/upload/v1549716805/testando-busca-com-fetch_zvelja.gif)

Nossa aplicação está pronta e funcionando corretamente.

![Comemorando aplicação pronta](https://res.cloudinary.com/mahenrique94/image/upload/v1549716836/gif-homem-dancando-animado_j7mgbz.gif)

O projeto completo pode ser encontrado [aqui](https://github.com/mahenrique94/buscando-cep-com-fetch-api).

Não deixe de comentar e assinar a [*newsletter*](http://eepurl.com/ggP7Rv) para receber novidades por email.

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
