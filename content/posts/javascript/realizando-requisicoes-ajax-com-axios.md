---
autor: "Matheus Castiglioni"
categoria: "JavaScript"
disqus_identifier: "realizando-requisicoes-ajax-com-axios"
disqus_title: "Realizando Requisicoes Ajax Com Axios"
disqus_url: "https://blog.matheuscastiglioni.com.br/realizando-requisicoes-ajax-com-axios"
date: 2018-03-03T08:08:09-02:00
draft: false
keywords: [ "Axios", "Cep", "Biblioteca", "Front-End", "HTTP", "Lib", "Requisição", "Web", "Web Service" ]
slug: "realizando-requisicoes-ajax-com-axios"
tag: [ "Axios", "Cep", "Biblioteca", "Front-End", "HTTP", "Lib", "Requisição", "Web", "Web Service" ]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1549718811/realizando-requisicoes-ajax-com-axios_ww1uwa.jpg"
title: "Realizando Requisicoes Ajax Com Axios"
url: "/realizando-requisicoes-ajax-com-axios"
---

Um dos primeiros *posts* do blog foi sobre realizar [requisições AJAX utilizando XMLHttpRequest](http://blog.matheuscastiglioni.com.br/requisicoes-ajax-com-javascript), no *post* mostrei como fazer requisição apenas com JavaScript puro (Vanilla JS).

Nesse *post* vou mostrar como utilizar uma biblioteca (*lib*) chamada [Axios](https://github.com/axios/axios), o Axios utiliza o padrão de *promises* (promessas), tornando a nossa vida muito mais fácil, simples e ágil.

Para exemplo do *post* vou seguir a mesma ideia do primeiro, onde vamos buscar os dados de um determinado CEP e informar na tela para o usuário.

Para não perdermos tempo com HTML e CSS vou disponibilizar o *layout* do exemplo, assim podemos focar apenas na utilização do Axios e JS.

index.html

```markup
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Buscando CEP com Axios</title>
    <meta content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" name="viewport">
    <link href="assets/css/normalize.css" rel="stylesheet" type="text/css">
    <link href="assets/css/index.css" rel="stylesheet" type="text/css">
</head>
<body>
    <main class="container">
        <h1 class="title">Buscando CEP com Axios</h1>
        <form class="form">
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
</body>
</html>
```

index.css

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

**Obs**: O `index.css` deve ser criado dentro de `assets/css`.

Caso deseje o projeto pode ser encontrado em meu github: [buscando-cep-com-axios](https://github.com/mahenrique94/buscando-cep-com-axios), assim, é possível ir acompanhando passo à passo e consultando os códigos já prontos.

Para exemplo do *post* temos uma aplicação com o seguinte *layout*:

![Form para buscar o CEP](https://res.cloudinary.com/mahenrique94/image/upload/v1549718877/formulario-busca-cep_nh4abd.png)

## Instalando o Axios

Para realizar a instalação do Axios devemos [baixar](https://unpkg.com/axios/dist/axios.min.js) seu arquivo `.js` e realizar a importação em nossa página:

```markup
<script src="assets/js/axios.min.js" type="text/javascript"></script>
```

**A importação do Axios deve ser feito antes do fechamento da tag body**

Pronto, agora já devemos ter o Axios instalado (importado) em nossa aplicação, já podemos começar a utilizá-lo.

![Verificando Axios importado](https://res.cloudinary.com/mahenrique94/image/upload/v1549718907/verificando-axios_ol88mf.gif)

## Buscando o CEP

Por questões de organização, vamos escrever os códigos JavaScript em um arquivo separado, podemos chamá-lo de `index.js` (dentro de `assets/js`) e realizar a importação do mesmo em nosso `index.html`:

```markup
<script src="assets/js/index.js" type="text/javascript"></script>
```

**A importação do index.js deve ser logo após a importação do Axios**

O primeiro passo será criar nossa função que realizará a busca do CEP, podemos chamá-la de `buscarCep`, aqui, precisaremos de dois parâmetros, sendo eles: `event` e `form`, portanto, nossa função fica com a seguinte estrutura:

```js
function buscarCep(event, form) {
    event.preventDefault();
}
```

- **event**: Precisamos dele para futuramente impedir o form de recarregar a página ao ser submetido.
- **form**: Precisamos dele para pegar o `input` CEP e seu respectivo valor.

Para realizar o processo de busca completo, devemos seguir alguns passos:

1. Pegar o CEP digitado.
2. Validar se o CEP esta correto
3. Buscar o endereço do CEP digitado
4. Retornar o endereço para o usuário

### Pegando o CEP digitado

Para pegar o CEP digitado podemos simplesmente utilizar o parâmetro form e navegar até o input pelo seu `name` ou `id`:

```js
function buscarCep(event, form) {
    event.preventDefault();
	const inputCep = form.cep;
}
```

Pronto, com isso já temos uma referência para o nosso `input`, podemos agorar pegar seu valor através da função `.value`:

```js
function buscarCep(event, form) {
    event.preventDefault();
    const inputCep = form.cep;
    const cep = inputCep.value;
}
```

Caso prefira, você pode fazer tudo na mesma linha:

```js
function buscarCep(event, form) {
    event.preventDefault();
    const cep = form.cep.value;
}
```

Porém dessa maneira nossa aplicação pode dar um erro de execução caso não tenhamos um `input` com o `id` ou `name` igual à `cep`, então podemos previnir da seguinte maneira:

```js
function buscarCep(event, form) {
    event.preventDefault();
    const inputCep = form.cep;
    if (inputCep) {
        const cep = inputCep.value;
    }
}
```

Veja que primeiro buscamos a referência para o `input` do CEP e depois verificamos se o mesmo foi encontrado `if (inputCep)`, essa condição somente será `true` se a variável `inputCep` for diferente de `undefined`, dessa forma estamos prevendo um possível erro de funcionamento.

Uma outra validação que podemos fazer é verificar se realmente um CEP com 8 (oito) dígitos foi informado:

```js
function buscarCep(event, form) {
    event.preventDefault();
    const inputCep = form.cep;
    if (inputCep) {
        const cep = inputCep.value;
        if (cep.length === 8) {

        }
    }
}
```

**Obs**: Por mais que algumas validações já foram realizadas no HTML, nunca é demais tentar previnir a aplicação à geração de erros.

### Criando a URL para buscar o CEP

Agora que o CEP foi digitado e está no formato correto, precisamos montar a URL que iremos realizar a requisição e buscar o endereço, para isso vamos utilizar o *web service*: `ws.matheuscastiglioni.com.br/ws/cep/find/CEP/json`, substituindo apenas o CEP pelo que acabamos de pegar:

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

Portanto, agora já temos tudo que é necessário para consumir nosso *web service* e obter o endereço do mesmo. Vamos começar?

## Realizando um get com Axios

Existe diferentes maneiras de realizarmos uma requisição do tipo `get` utilizando o Axios, vou exemplificar algumas delas.

A primeira e mais simples é através do próprio `axios()`, o mesmo é uma função que por padrão realiza uma requisição do tipo `get` para a URL informada como parâmetro:

```js
axios(URL);
```

Mas caso tenha tentado buscar o mesmo, viu que ainda nada foi retornado, isso porque apenas realizamos a requisição e não fizemos nada com sua resposta. A função irá devolver uma *promise* (promessa) em caso de sucesso (*success*) podemos utilizar a função `.then`:

```js
axios(URL)
	.then(resposta => console.log(resposta));
```

Veja que passamos como parâmetro da função `.then` a resposta (*response*) da requisição e utilizamos uma *arrow function* para fazer o *log* da resposta no console do navegador através da função `console.log`, agora precisamos realizar a busca de um CEP para testar o funcionamento:

![Buscando meu CEP](https://res.cloudinary.com/mahenrique94/image/upload/v1549718941/buscando-meu-cep-com-axios_yx8emh.gif)

E como podemos ver no *console* do navegador, temos a seguinte resposta:

![Resposta da requisição](https://res.cloudinary.com/mahenrique94/image/upload/v1549718970/resposta-cep-axios_uxovyl.png)

Como pode ver, temos algumas informações referentes a resposta sendo elas:

- **data**: Resposta que foi fornecida pela requisição.
- **status**: Código HTTP em relação a requisição feita.
- **statusText**: Texto HTTP em relação a requisição feita.
- **headers**: Cabeçalho contendo algumas informações em relação a resposta da requisição.
- **config**: Configuração que o Axios forneceu para realizar a requisição.

Então como podemos ver, para pegar os dados fornecidos como resposta devemos utilizar o `data`:

```js
axios(URL)
	.then(resposta => console.log(resposta.data));
```

Se realizarmos o mesmo teste de anteriormente, temos a seguinte resposta:

![Resposta com data](https://res.cloudinary.com/mahenrique94/image/upload/v1549718999/resposta-data-cep-axios_es09wk.png)

Já temos os dados de nosso CEP, mas, e se nossa requisição falhar ou der algum erro, como podemos tratar essa necessidade? Para isso a *promise* tem a função `.catch` que será utilizada em caso de erros:

```js
axios(URL)
	.then(resposta => console.log(resposta.data))
	.catch(erro => console.error(erro));
```

Veja que intercalamos uma função com a outra, que segue a seguinte ideia:

> Olha promise faz uma requisição do tipo get para uma URL, em caso de sucesso "then" imprimi no console do navegador ("console.log") os dados da resposta ("resposta.data"), porém, em caso de erros ou falhas logue também no navegador o erro ("console.error") ocorrido.

### Outras maneiras de realizar o get com Axios

Além da função principal do Axios também podemos realizar um `get` através da **função axios** porém passando um **objeto de configuração**, `.get`, `.request`:

```js
// função axios
axios({
	method : "get",
	url : URL
}).then(resposta => console.log(resposta.data))
  .catch(erro => console.error(erro));

// .get
axios.get(URL)
	.then(resposta => console.log(resposta.data))
	.catch(erro => console.error(erro));

// .request
axios.request({
	method : "get",
	url : URL
}).then(resposta => console.log(resposta.data))
  .catch(erro => console.error(erro));
```

Entre outras maneiras, esses são apenas alguns exemplos, para mais informações consulte a [documentação do Axios](https://github.com/axios/axios).

Nosso código completo fica da seguinte maneira:

```js
function buscarCep(event, form) {
    event.preventDefault();
    const inputCep = form.cep;
    if (inputCep) {
        const cep = inputCep.value;
        if (cep.length === 8) {
            const URL = `http://ws.matheuscastiglioni.com.br/ws/cep/find/${cep}/json`;
            axios.request(URL)
                .then(resposta => console.log(resposta.data))
                .catch(erro => console.error(erro));
        }
    }
}
```

## Logando resposta

Até o momento já somos capazes de pegar o CEP digitado, validá-lo e realizar a requisição, porém, agora precisamos mostrar para o usuário os dados que foram adquiridos. Para o *post* não se extender por muito mais, vou dar a função pronta para ser utilizada, pois já aprendemos realizar a requisição (que era o assunto do *post*).

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

Apenas uma função para mostrar um *alert* (alerta) com algumas informações do CEP, nosso código completo fica da seguinte maneira:

```js
function buscarCep(event, form) {
    event.preventDefault();
    const inputCep = form.cep;
    if (inputCep) {
        const cep = inputCep.value;
        if (cep.length === 8) {
            const URL = `http://ws.matheuscastiglioni.com.br/ws/cep/find/${cep}/json`;
            axios.request(URL)
                .then(resposta => mostrarResposta(resposta.data))
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

Com isso, devemos ter nossa busca sendo realizada com sucesso:

![Buscando CEP e mostrando a resposta](https://res.cloudinary.com/mahenrique94/image/upload/v1549719034/buscando-cep-mostrando-resposta_ixevvi.gif)

Maravilha, tudo funcionando como o esperado \o/

![Gif animado por finalizar o post](https://res.cloudinary.com/mahenrique94/image/upload/v1549719066/gif-minions-animados_mhiajv.gif)

Caso queira, o projeto pode ser encontrado [aqui](https://github.com/mahenrique94/buscando-cep-com-axios)

Espero que tenha gostado até a próxima, não deixe de comentar e se inscrever em nossa [*newsletter*](http://eepurl.com/ggP7Rv) para receber os novos *posts* por email.

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
