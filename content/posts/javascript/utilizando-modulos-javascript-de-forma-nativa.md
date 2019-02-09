---
autor: "Matheus Castiglioni"
categoria: "JavaScript"
disqus_identifier: "utilizando-modulos-javascript-de-forma-nativa"
disqus_title: "Utilizando Modulos Javascript De Forma Nativa"
disqus_url: "https://blog.matheuscastiglioni.com.br/utilizando-modulos-javascript-de-forma-nativa"
date: 2018-04-27T08:52:30-02:00
draft: false
keywords: [ "ES6", "Export", "Front-End", "Modules", "Módulos", "Web" ]
slug: "utilizando-modulos-javascript-de-forma-nativa"
tag: [ "ES6", "Export", "Front-End", "Modules", "Módulos", "Web" ]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1549710703/utilizando-modulos-javascript-de-forma-nativa_bwmznk.jpg"
title: "Utilizando Modulos Javascript De Forma Nativa"
url: "/utilizando-modulos-javascript-de-forma-nativa"
---

Sem dúvida um dos grandes e mais utilizados recursos (*features*) do JavaScript são os [módulos](https://www.sitepoint.com/understanding-es6-modules/) (*modules*), hoje vou explicar como carregá-los de forma nativa no navegador, ou seja, sem a utilização de plugins ou bibliotecas de terceiros, está pronto? Vamos nessa.

## Conhecendo os módulos

Resumidamente os módulos em JavaScript é uma forma de você compartilhar informações entre arquivos, dessa forma, todos os arquivos que realizarem a importação desse módulo poderão utilizar e usufruir de suas funções ou informações que foram expostas. Dessa maneira, evitamos ter que ficar carregando N arquivos `.js` em nosso HTML, além de não precisar se preocupar também com a ordem do carregamento.

### Exportando a primeira classe

Para exemplo do *post*, vamos criar uma classe (*class*) `Pessoa`, para isso, comece criando um novo arquivo JavaScript chamado `Pessoa.js`, com o seguinte conteúdo:

```javascript
class Pessoa {

}
```

Certo, mas até o momento nossa classe (*class*) não faz nada, vamos adicionar um construtor (*constructor*) para ela, onde, um `nome` deve ser passado:

```javascript
class Pessoa {

    constructor(nome) {
        this.nome = nome;
    }

}
```

Maravilha, já estamos recebendo o nome da `Pessoa` via `construtor` e guardando em um novo `atributo` da classe.

Agora, vamos adicionar um comportamento, nossa classe `Pessoa` deve ser capaz de se `apresentar`, então, é hora de criar essa função:

```javascript
class Pessoa {

    constructor(nome) {
        this.nome = nome;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome}`);
    }

}
```

Legal, agora nossa classe `Pessoa` já é capaz de se apresentar, simplesmente será logado no console do navegador uma frase:

> Olá, meu nome é NOME

Onde `NOME` terá o valor passado via construtor. Tudo certo? Errado, se você pegar o código atual e tentar criar uma `Pessoa` sem passar um `nome` para ela, irá conseguir, mas, devemos previnir essa questão, como podemos fazer isso? Aqui será necessário um tratamento, vamos validar no construtor se o nome foi realmente passado:

```javascript
class Pessoa {

    constructor(nome) {
        if (nome === undefined || nome.length <= 0) {

        }
        this.nome = nome;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome}`);
    }

}
```

Pronto, estamos verificando se um nome foi realmente passado ou não, agora, caso nada tenha sido informado, vamos lançar um novo erro:

```javascript
class Pessoa {

    constructor(nome) {
        if (nome === undefined || nome.length <= 0) {
            throw new Error("O nome é obrigatório para uma Pessoa");
        }
        this.nome = nome;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome}`);
    }

}
```

Agora, se tentarmos criar uma nova pessoa sem nome, um erro será apresentado, assim, a mesma não será criada:

![Criando uma pessoa sem nome](https://res.cloudinary.com/mahenrique94/image/upload/v1549710777/validando-uma-nova-pessoa-sem-nome_dcdebk.png)

Mas Matheus, até agora trata-se de uma classe qualquer em JavaScript, onde está a utilização de módulos (*modules*)? Se você fez essa pergunta, está certo, para de fato realizarmos a utilização dos módulos, precisamos exportar (*export*) essa classe `Pessoa`:

```javascript
export default class Pessoa {

    constructor(nome) {
        if (nome === undefined || nome.length <= 0) {
            throw new Error("O nome é obrigatório para uma Pessoa");
        }
        this.nome = nome;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome}`);
    }

}
```

Pronto, agora nossa classe `Pessoa` já pode ser importada (*import*) e utilizada em outro arquivo JavaScript, vamos testar?

### Importando a primeira classe

Para realizar a importação da classe `Pessoa` (criada anteriormente), precisamos criar um novo arquivo, podemos chamá-lo de `app.js`, pois, será o arquivo principal de nossa app. Com o arquivo criado, você deve estar pensando e talvez se perguntando:

> Como eu vou importar essa classe?

Calma, irei tentar responder essa pergunta agora mesmo.

Podemos realizar importações de duas maneiras (com uma diferença mínima):

```
import QUEM_OU_OQUE_VAMOS_IMPORTAR from "CAMINHO_PARA_UM_ARQUIVO_JS";

import { QUEM_OU_OQUE_VAMOS_IMPORTAR } from "CAMINHO_PARA_UM_ARQUIVO_JS";
```

**Onde**:

- `QUEM_OU_OQUE_VAMOS_IMPORTAR` deve ser o nome de uma classe, função, variável, ou qualquer outra coisa que definimos o `export`.
- `CAMINHO_PARA_UM_ARQUIVO_JS` pode ser apenas um caminho para um pasta onde contém um `index.js` ou podemos e devemos informar um arquivo `.js` específico.

#### Saiba mais

Repare que praticamente a única diferença foi que uma linha está com `{}`  e a outra não, porque? Quando utilizamos o `default` junto ao `export` não precisamos informar as chaves (isso pode ser feito apenas uma vez por *import*), caso não tenhamos definido a exportação como padrão (*default*), ai sim, é necessário utilizá-las.

Lembrando que essas são as maneiras mais simples de importação (sim, existem outras possibilidades).

Continuando, vamos realizar a importação de nossa classe `Pessoa` dentro do arquivo `app.js`:

```javascript
import Pessoa from "./Pessoa.js";
```

Veja que definimos o mesmo nome na importação (poderia ser qualquer outro nome desde que a exportação tenha sido feita com `default`) e apontamos para o arquivo `Pessoa.js`, o `./` foi utilizado para informar que ambos os arquivos `app.js` e `Pessoa.js` estão no mesmo diretório.

Legal, com a importação realizada, vamos criar uma nova `Pessoa` e fazer com que ela se apresente:

```javascript
import Pessoa from "./Pessoa.js";

const matheus = new Pessoa("Matheus");
matheus.apresentar();
```

Tudo certo.

### Carregando o arquivo principal da aplicação

Agora, devemos importar o arquivo `app.js` em nosso `index.html` e verificar o console, onde uma frase:

> Olá, meu nome é Matheus

Deve ser logada.

Podemos importar o arquivo de comúm, utilizando a tag `script` e passando em seu `src` o arquivo que pretendemos importar.

```markup
<script src="./assets/js/app.js" type="text/javascript"></script>
```

**Obs**: O `type` é opcional, mas, eu prefiro realizar a utilização do mesmo (sim, é frescura).

Após importar o `index.html` no navegador e abrir o console temos:

![Testando módulo app sem com type padrão](https://res.cloudinary.com/mahenrique94/image/upload/v1549710846/testando-modulo-app-sem-com-type-padrao_hsx6fd.png)

Sim, repare que deu um erro em nosso console:

> Uncaught SyntaxError: Unexpected identifier

Mas, afinal, o que está acontecendo? Até o momento estamos tentando importar um arquivo JavaScript qualquer, de forma padrão, mas, nosso arquivo é diferente, o mesmo é um módulo que está utilizando os recursos de `import` e `export`, precisamos de alguma maneira, dizer para o navegador que a importação deve ser feita de modo diferente, como podemos fazer isso?

Simplesmente precisamos mudar o `type` para `module`, assim, o navegador irá importar e tratar o arquivo como módulos:

```markup
<script src="./assets/js/app.js" type="module"></script>
```

Agora, em nosso console, devemos ver a frase que estávamos esperando:

![Testando módulo app com type module](https://res.cloudinary.com/mahenrique94/image/upload/v1549710915/testando-modulo-app-com-type-module_hw7eul.png)

Pronto, tudo certo e funcionando de forma nativa, sem utilização de bibliotecas como [systemjs](https://github.com/systemjs/systemjs) por exemplo.

#### Saiba mais

Esse recurso de `type` igual á `module` ainda está em processo de desenvolvimento, pois, trata-se de um recurso muito novo dos navegadores referente ao JavaScript, tome cuidado ao utilizá-lo, verifique se a versão do seu navegador possuí suporte a tal recurso.

## Conclusão

Nesse *post* foi dado uma primeira visão sobre módulos (*modules*) com JavaScript, onde realizamos exportações (*export*) e importações (*import*) de arquivos `.js`, dessa maneira, não é mais necessário termos em nosso HTML N arquivos sendo importados, importando apenas um é o suficiente para que os demais sejam carregados como módulos.

Caso tenha ficado alguma dúvida sobre a utilização de módulos em JavaScript não se preocupe, foi apenas uma introdução para explicar o novo recurso referente ao carregamento de arquivos `.js` utilizando o `type` `module`, nos *posts* seguintes irei abordar o assunto de módulos com mais explicações e exemplos.

O projeto do *post* pode ser encontrado [aqui](https://github.com/mahenrique94/post-utilizando-modulos-javascript-de-forma-nativa).

E aí, gostou? Não deixe de comentar e assinar a [*newsletter*](http://eepurl.com/ggP7Rv) para receber novidades por email.

![Giff de finalização do post](https://res.cloudinary.com/mahenrique94/image/upload/v1549710991/gif-ace-ventura-dancando-de-saia_hhbmhv.gif)
