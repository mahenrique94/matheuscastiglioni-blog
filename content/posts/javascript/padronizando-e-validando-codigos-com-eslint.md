---
autor: "Matheus Castiglioni"
categoria: "JavaScript"
disqus_identifier: "padronizando-e-validando-codigos-com-eslint"
disqus_title: "Padronizando E Validando Codigos Com Eslint"
disqus_url: "https://blog.matheuscastiglioni.com.br/padronizando-e-validando-codigos-com-eslint"
date: 2018-06-06T08:47:55-02:00
draft: false
keywords: [ "ESLint", "Front-End" ]
slug: "padronizando-e-validando-codigos-com-eslint"
tag: [ "ESLint", "Front-End" ]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1549708168/padronizando-e-validando-codigos-com-eslint_5b1739985cc04_bg_ftgsnm.jpg"
title: "Padronizando E Validando Codigos Com Eslint"
url: "/padronizando-e-validando-codigos-com-eslint"
---

Se você já trabalhou em algum projeto utilizando JavaScript com mais de uma pessoa desenvolvendo junto, com certeza, já deve ter enfrentado e passado por alguns pequenos problemas referente aos códigos. Isso é normal, afinal, todo mundo tem seus próprios gostos e jeitos particulares de escrevê-los.

![Gif bichinho vermelho, ué](https://res.cloudinary.com/mahenrique94/image/upload/v1549708211/5b173b0d74235_bg_k126u3.gif)

Mas, será que existe alguma maneira de tentar padronizar esses códigos? Sim, é justamente sobre isso que irei falar nesse *post*.

## Conhecendo o ESLint

Pensando nesses pequenos e possíveis problemas, foi criado o [ESLint](https://eslint.org/), com ele conseguimos definir um guia de estilo (também chamado de *style guide*), dessa maneira, todos os participantes do projeto devem respeitar as configurações e especificações definidas nesse guia.

Imagine o seguinte: Você está desenvolvendo seus códigos JavaScript, seguindo alguns padrões, sendo eles:

1. Strings devem ser declaradas com aspas duplas.
2. Não deve conter ponto e vírgula.
3. Identação do código está sendo feita com espaços.
4. Tamanho de identação é de 4 espaços.

Sabendo disso, já podemos começar a instalação e configuração do ESLint em nosso projeto, vamos nessa?

## Preparando o projeto

Para exemplo do *post* crie uma pasta em seu computador com o nome do projeto, no meu caso, o projeto irá se chamar `configurando-eslint`, dessa maneira, uma pasta com esse nome foi criada em minha área de trabalho (*desktop*).

Agora, precisamos inicializar o projeto como um projeto npm, podemos fazer isso através do comando `init`, da seguinte maneira:

```bash
npm init
```

**Obs:** O comando deve ser rodado na raiz do projeto, ou seja, dentro da pasta `configurando-eslint` (ou a pasta que você criou).

Como o foco do *post* é apenas o ESLint, avance (dê enter) todas as perguntas até o final onde o arquivo `package.json` deve ter sido criado.

Legal, agora que já temos um projeto `npm`, já podemos começar a instalar o ESLint.

## Instalando o ESLint

Podemos fazer a instalação do ESLint de duas maneiras, sendo elas:

Com o `npm`:

```bash
npm i install --save-dev eslint
```

Ou, utilizando o `yarn`:

```bash
yarn add --dev eslint
```
**Obs**: A dependência do ESLint é apenas para desenvolvimento, em produção não precisamos dele.

Fique á vontade para utilizar o gerenciador de pacotes e dependências que preferir.

Após o *download* e instalação do `eslint` e suas depedências terem sidos concluídos, já podemos começar a configurá-lo.

## Configurando o ESLint

Para configurar o `eslint` podemos rodar o comando:

```bash
./node_modules/.bin/eslint --init
```

Dessa maneira, vamos inicializar e definir as configurações de estilos para nossos códigos.

As configurações podem ser feitas de três maneiras diferentes, sendo elas:

> Answer questions about your style (respondendo perguntas sobre seu estilo)
>
> Use a popular style guide (utilizando um guia de estilo famoso, por exemplo, da Google ou Airbnb)
>
> Inspect your JavaScript file(s) (inspecionando arquivos JavaScript já existentes no projeto)

Para exemplo do *post* vamos responder perguntas sobre o nosso estilo, então, selecione a primeira opção.

### Respondendo as perguntas de estilo

Selecionando esta opção de configuração, devemos responder algumas perguntas:

#### Are you using ECMAScript 6 features?

Estamos utilizando recursos do JavaScript ES6? Sim (y abreviação de *yes*).

#### Are you using ES6 Modules?

Estamos utilizando o sistema de módulos do ES6? Sim (y abreviação de *yes*).

#### Where will you code run?

Onde nosso código irá rodar? No *browser* (navegador).

#### Do you use CommonJS?

Usamos o sistema de carregamento de módulos CommonJS? Não (N abreviação de *no*).

#### Do you use JSX?

Usamos JSX? Não (N abreviação de *no*).

#### What style of indentation do you use?

Qual tipo de identação que utilizamos? Spaces (espaços).

#### What quotes do you use for strings?

Que tipo de aspas vamos utilizar para declarar strings? Double (duplas).

#### What line endings do you use?

Como nossas linhas devem terminar? Unix.

**Obs:** Se escolhermos o tipo **Unix** nossas linhas devem terminar com `\n`, porém, ao optarmos por **Windows** as mesmas devem terminar com `\r\n` (para quem não sabe o `\r` seria retorno (*return*) e o `\n` seria quebra de linha).

#### Do you require semicolons?

Vamos obrigar a informação de pontos e vírgulas (`;`)? Não (N abreviação de *no*).

#### What format do you want you config file to be in?

Qual formato de arquivo queremos salvar nossas configurações? JSON.

E finalmente, todas as perguntas estão respondidas, dessa maneira, um novo arquivo chamado `.eslintrc.json` deve ter sido criado na raiz do projeto.

## Testando o ESLint

Para realizarmos um teste, vamos criar um arquivo JavaScript qualquer no projeto, com o seguinte conteúdo:

```javascript
const nome = "Matheus"

function ola() {
    return `Olá ${nome}`
}

ola()
```

No meu projeto, criei o arquivo em `/assets/js/teste.js`.

Podemos agora pedir para o ESLint validar nosso projeto, fazemos isso através do comando:

```bash
./node_modules/.bin/eslint .
```

**Obs:** O comando deve ser rodado na raiz do projeto, o ponto (`.`) significa que a validação será feita para todas as pastas e arquivos do projeto.

Após rodar o comando, veja que nenhum erro foi encontrado, para testarmos, vamos forçar alguns erros, mudando o conteúdo do arquivo para:

```javascript
const nome = 'Matheus';

function ola() {
    return `Olá ${nome}`
}

ola();
```

Rodando o comando novamente, alguns erros devem ter sido mostrados.

### Saiba mais

Até o momento pedimos para o ESLint validar todo o projeto, mas, também podemos pedir para ele validar uma pasta ou arquivo em específico, por exemplo:

Validando uma pasta:

```bash
./node_modules/.bin/eslint ./assets/js/
```

Validando um arquivo:

```bash
./node_modules/.bin/eslint ./assets/js/teste.js
```

## Corrigindo erros

Os erros encontrados pelo ESLint podem ser corrigidos de duas maneiras:

1. Abrir o arquivo, localizar a linha e corrigí-la manualmente.
2. Pedir para o ESLint corrigir os problemas para nós.

A primeira não tem segredo, o *log* do ESLint é muito simples, ele aponta os arquivos com erros e suas linhas e colunas onde os mesmos foram encontrados, bastaria abrír o arquivo e corrigí-lo de forma manual.

A seguna opção é mais simples ainda, podemos rodar o mesmo comando de validação, porém, com um parâmetro (argumento) á mais, sendo ele:

```bash
./node_modules/.bin/eslint . --fix
```

Dessa maneira o ESLint vai tentar corrigir automáticamente os erros encontrados durante a validação.

## Criando um atalho para o ESLint

Se você já reparou, está chato toda hora ter que executar o comando:

```bash
./node_modules/.bin/eslint .
```

Além de ser muito manual, se um dia a forma de executá-lo mudar, teremos que aprender e decorar o novo jeito, será que não podemos criar um atalho para ele? Sim, podemos fazer isso dentro do nosso arquivo `package.json`.

Ao abrir o arquivo, localize a seção de `scripts`, nela podemos criar e nomear comandos para serem executados utilizando o `npm` ou `yarn`. Os `scripts` devem respeitar a ideia de chave (nome do comando) e valor (o que será executado), sabendo disso, vamos criar um novo *script* (comando) chamado `eslint`:

```json
"lint" : "./node_modules/.bin/eslint ."
```

Dessa maneira, podemos executar e validar o ESLint de dois novos jeitos, com `npm` ou `yarn`:

Executando o comando com `npm`:

```bash
npm run lint
```

Ou com `yarn`:

```bash
yarn lint
```

Ambos possuem e fazem a mesma coisa.

## Ignorando arquivos ou pastas

Imagine o seguinte, fizemos o *download* de uma biblioteca que será utilizada no projeto, a mesma foi baixada e salva em `lib/erro.js`, com o seguinte conteúdo:

```javascript
const erro = 'Vai dar erro';

function novoErro() {
    console.log(erro);
}

novoErro();
```

Veja que está tudo errado, a `String` está sendo declarada com aspas simples, estamos utilizando pontos e vírgulas, a função está executando `console.log` (por padrão o ESLint não deixa). Enfim, sabemos que precisamos dessa biblioteca, como podemos resolver o problema? Assim como o `git` e outros, o ESLint também possuí a possibilidade de ignorar pastas ou arquivos específicos, para fazer isso, vamos criar um arquivo na raiz do projeto chamado `.eslintignore`.

Dentro dele, devemos passar o nome de uma pasta ou arquivo para que durante a validação o ESLint não olhe e valide eles.

Poderíamos passar o nome da pasta:

```
lib
```

Ou o nome do arquivo:

```
lib/erro.js
```

**Obs:** Não foi necessário informar a pasta `node_modules` dentro do `.eslintignore` porque por padrão a mesma já é ignorada.

Agora, se rodarmos o comando novamente, nenhum erro deve ser encontrado.

## Saiba mais

As configurações feitas durante o *post* são as mais simples e básicas do ESLint, além delas, temos outras inúmeras possibilidades e opções, para saber todas, consulte a [documentação](https://eslint.org/docs/user-guide/configuring)

Se você ainda ficou com dúvidas, no meu canal, gravei um vídeo sobre o mesmo assunto:

<iframe height="500" src="https://www.youtube.com/embed/mj4V_GkGmv4" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>

## Conclusão

Com o ESLint conseguimos definir um padrão de códigos para nosso projeto, dessa maneira, evitamos diferenças de gostos particulares de cada desenvolvedor, tornando tudo mais simples e melhorando a manutenção do mesmo.

Você já conhecia o ESLint? Não deixe de comentar.

### Newsletter

Se você gostou desse ou outros *posts*, não deixe de assinar a [*newsletter*](http://eepurl.com/ggP7Rv), para não perder as novidades que são postadas toda semana.

### Apoie

Você pode estar ajudando o blog ou canal realizando pequenas doações através do nosso [apoia-se](https://apoia.se/mahenrique94).

Abraços, até a próxima.

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
