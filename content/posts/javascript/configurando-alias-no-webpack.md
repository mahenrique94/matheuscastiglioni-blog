---
autor: "Matheus Castiglioni"
categoria: "JavaScript"
disqus_identifier: "configurando-alias-no-webpack"
disqus_title: "Configurando Alias No Webpack"
disqus_url: "https://blog.matheuscastiglioni.com.br/configurando-alias-no-webpack"
date: 2019-02-28T22:42:28-03:00
draft: false
keywords: [ "Webpack", "Alias", "Config", "Import" ]
slug: "configurando-alias-no-webpack"
tag: [ "Webpack", "Alias", "Config", "Import" ]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1551404945/1_De1aDJZ9bMppI6pRQkQdTg_1_oyrppl.jpg"
title: "Configurando Alias No Webpack"
url: "/configurando-alias-no-webpack"
---

Criar aplicações e projetos *front-end* é fácil, o dificil é como organizar, estruturar e arquitetar. Muitas vezes alguns detalhes acabam passando despercebido e poderiam facilmente serem resolvidos. Quando trabalhamos em projetos *front-end* utilizando bibliotecas ou frameworks como: React, Angular ou Vue, fazemos muito uso dos módulos para deixar nossos projetos modularizados.

Mas, nem tudo são flores, podemos facilmente encontrar componentes ou arquivos com as seguintes importações:

```javascript
import { sum } from '../../../../../utils/numeros'
import App from '../../../containers/App'
import ComponentaA from '../../../../componentes/ComponenteA'
```

Veja o quanto é ruim esse código acima, podemos destacar alguns pontos:

1. Precisamos voltar todas as pastas até encontrar os diretórios que precisamos de algo.
2. Estamos criando um vínculo muito forte entre estrutura e arquivos.

Antes de tentarmos procurar soluções, vamos entender cada um dos problemas mencionados.

### Precisamos voltar todas as pastas até encontrar os diretórios que precisamos de algo

Ter a necessidade de ir voltando e subindo o nível de todas as pastas até encontrarmos o diretório que estamos procurando é muito chato, muitas vezes estamos em pastas de quinto nível e precisamos voltar para a raiz, assim, surge a necessidade de colocar infinitos `../`, o que não é só feio como também ruim e cansativo.

### Estamos criando um vínculo muito forte entre estrutura e arquivos

Criar esse vínculo pode ser perigoso, pois, caso surja a necessidade de trocar a pasta `componentes` para inglês: `components`, vamos precisar arrumar em todos nossos arquivos (sim, pode ser feito de maneira automática). Além disso, se um dia precisarmos criar uma nova pasta pai de `componentes`, também teremos retrabalho e manutenção. Veja que independente do cenário, por ter esse vínculo muito forte, qualquer mudança na estrutura irá gerar uma manutenção (ás vezes grande).

Agora que entendemos um pouco mais sobre ambos os problemas, como será que podemos resolvê-los?

Para isso, podemos fazer uso do [Webpack](https://webpack.js.org/), mais especificamente, podemos configurar os `alias` (apelidos/*paths simbólicos*).

Para realizar a configuração dos apelidos (gosto de chamar de *path simbólicos*), precisamos abrir nosso `webpack.config.js` e na raiz do objeto de configuração começamos adicionando uma chave chamada `resolve`.

```javascript
module.exports = {
    // configurações otimidas
    resolve: { }
}
```

Agora, dentro do `resolve`, precisamos adicionar uma propriedade chamada `alias`:

```javascript
module.exports = {
    // configurações otimidas
    resolve: {
        alias: { }
    }
}
```

E dentro do nosso `alias` será onde vamos definir todos os apelidos ou *path simbólicos*. Vamos começar definindo três *paths* referente ao exemplo anterior de importação, sendo eles: `utils`, `containers` e `componentes`.

```javascript
const path = require('path')

module.exports = {
    // configurações otimidas
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, 'src', 'componentes'),
            '@containers': path.resolve(__dirname, 'src', 'containers'),
            '@utils': path.resolve(__dirname, 'src', 'utils')
        }
    }
}
```

Maravilha, agora dentro dos nossos arquivos, podemos mudar as importações para:

```javascript
import { sum } from '@utils/numeros'
import App from '@containers/App'
import ComponentaA from '@components/ComponenteA'
```

Veja que fico muito mais simples, fácil e prático. Além desses ganhos, se um dia a pasta `componentes` mudar para `components`, precisamos apenas atualizar nosso `alias`, o resto da aplicação continuará funcionando e não exigirá manutenção, retrabalho ou *find* em arquivos `.js`.

### Saiba mais

Se você é atento deve ter reparado no `@` em todos os *paths*, eu gosto de definí-los para deixar explicíto que trata-se de um `alias` ou *path simbólico*. Além disso, sem o `@` podemos encontrar alguns conflitos, por exemplo:

```javascript
import { history } from 'history`
```

Dessa maneira, não estamos importando o nosso objeto `history` e sim o pacote `history` instalado através de `npm`. Portanto, se adicionarmos o `@`:

```javascript
import { history } from '@history`
```

Agora sim, não terá o conflito e estamos importando o nosso objeto.

Por tratar de uma configuração feita no Webpack e diversas aplicações hoje em dia utilizarem o mesmo, a criação e definição dos `alias` pode ser ou igual feita em projetos com: React, Angular e Vue sem o menor problema, claro que cada um terá =seu jeito de ser configurado, vamos ver alguns exemplos?

## Configurando no React

Para realizar a configuração dos `alias` em projetos React existem duas maneiras:

1. Projetos criados com `create-react-app` com versão menor que a 2, ou seja, `version < 2`.
2. Projetos criados com `create-react-app` com versão maior ou igual que a 2, ou seja, `version >= 2`.

Vamos ao exemplo de cada um deles.

Precisamos começar ejetando as configurações padrões do projeto, isso pode ser feito através do comando `eject`:

```bash
yarn eject
```

Ou com `npm`

```bash
npm run eject
```

**Obs**: Garanta que o projeto está comitado, senão, irá apresentar alguns problemas.

Após realizar o `eject` e ser finalizado, em projetos com a versão 1.x do `create-react-app` uma pasta `config` será criada na raiz do projeto. Dentro dela, teremos dois arquivos responsáveis pelas configurações do Webpack, sendo eles:

- `webpack.config.dev.js`
- `webpack.config.prod.js`

O próprio nome já diz, o `.dev.js` será configurado para ambiente de desenvolvimento e o `.propd.js` para realizar o *build* final do projeto. Dentro de cada um deles, temos a opção `resolve` e dentro dela a opção `alias` (com valores *defaults*), o resto vocês já sabem fazer, não muda da maneira que fizemos no começo.

Em projetos que possuem a versão 2.x do `create-react-app`, ao ejetar as configurações, também será criada uma pasta chamada `config`, porém, dentro dela terá apenas um arquivo `webpack.config.js`, o mesmo serve tanto para `dev` quando para `prod`. O resto das configurações é igual, procure a opção `resolve` e dentro dela o `alias`.

## Configurando no Angular

No Angular, apesar de também utilizar Webpack, essa configuração pode ser feita no `tsconfig.json`. Para que tudo funcione, precisamos configurar duas propriedades: `baseUrl`, e `paths`.

A propriedade `baseUrl` irá definir a pasta base para montar os *paths*, por exemplo:

```json
{
    "baseUrl": "./src"
}
```

Estamos dizendo que nossos *paths* devem ser procurados dentro da pasta `src`, agora, através da propriedade `paths` podemos criar os apelidos:

```json
{
    "baseUrl": "./src",
    "paths": {
        "@components/*": [ "app/components/*" ],
        "@containers/*": [ "app/containers/*" ],
        "@utils/*": [ "app/utils/*" ]
    }
}
```

Repare que precisamos colocar o `*` tanto na definição do *path* como na busca. O mesmo deve para pegar tudo que vier depois de `@components`, exemplo:

```javascript
import ComponentaA from '@components/ComponenteA'
```

Nessse exemplo o `*` será `ComponenteA`, portanto, nosso *path* ficaria:

```json
"@components/ComponenteA": [ "app/components/ComponenteA" ]
```

Lembrando que o mesmo será procurando dentro de `src`, sendo assim, o *path* final ficaria: `src/app/components/ComponenteA`.

## Configurando no Vue

Para configurar os `alias` no Vue é bem similar ao React, o primeiro passo, será criar um arquivo `vue.config.js` na raiz do projeto. Ele será o responsável por adicionar novas configurações no Webpack. Dentro dele, devemos exportar um objeto JSON contendo as propriedades `resolve` e `alias` assim como no React:

```javascript
const path = require('path')

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                '@components': path.resolve(__dirname, 'src', 'components')
            }
        }
    }
}
```

Repare que para merger nossa configuração com a configuração atual do Webpack, precisamos criar uma chave `configureWebpack` e dentro dela adicionamos o que precisamos. Assim, o Vue irá pegar as configurações padrões e mergear com a nossa.

## Saiba mais

Alguns *paths* que geralmente eu crio nos projetos são:

```javascript
'@': path.resolve(__dirname, '..', 'src'),
'@cfg': path.resolve(__dirname, '..', 'src', '_config'),
'@components': path.resolve(__dirname, '..', 'src', 'components'),
'@config': path.resolve(__dirname, '..', 'src', '_config', 'config'),
'@constants': path.resolve(__dirname, '..', 'src', 'constants'),
'@containers': path.resolve(__dirname, '..', 'src', 'containers'),
'@css': path.resolve(__dirname, '..', 'src', '_assets', 'css'),
'@env': path.resolve(__dirname, '..', 'src', '_environments'),
'@features': path.resolve(__dirname, '..', 'src', 'features'),
'@fonts': path.resolve(__dirname, '..', 'src', '_assets', 'fonts'),
'@helpers': path.resolve(__dirname, '..', 'src', 'helpers'),
'@hoc': path.resolve(__dirname, '..', 'src', 'hoc'),
'@http': path.resolve(__dirname, '..', 'src', '_config', 'http'),
'@i18n': path.resolve(__dirname, '..', 'src', '_translate', 'i18n'),
'@icons': path.resolve(__dirname, '..', 'src', '_assets', 'icons'),
'@img': path.resolve(__dirname, '..', 'src', '_assets', 'img'),
'@js': path.resolve(__dirname, '..', 'src', '_assets', 'js'),
'@mocks': path.resolve(__dirname, '..', 'src', '_config', 'mocks'),
'@routes': path.resolve(__dirname, '..', 'src', '_config', 'routes'),
'@utils': path.resolve(__dirname, '..', 'src', 'utils')
```

Se você não entende o porque desse monte de *path* dê uma olhada no post [Como Organizar Projetos Em React](https://blog.matheuscastiglioni.com.br/como-organizar-projetos-em-react/) onde eu dou dicas de como estruturar projetos React.

## Conclusão

Nesse *post* mostrei como configurar `alias` dentro do Webpack de forma nativa, mas, também fizemos as mesmas configurações para React, Angular e Vue. Geralmente eu prefiro chamar esses "apelidos" de "links simbólicos".

E aí, você já conhecia o `alias`? Não deixe de comentar e caso tenha gostado desse *post* e pretende receber novidades por email, se inscreva na [newsletter](http://eepurl.com/ggP7Rv) e mantenha-se atualizado.

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
