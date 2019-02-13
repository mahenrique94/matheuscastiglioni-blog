---
autor: "Matheus Castiglioni"
categoria: "JavaScript"
disqus_identifier: "como-organizar-projetos-em-react"
disqus_title: "Como Organizar Projetos Em React"
disqus_url: "https://blog.matheuscastiglioni.com.br/como-organizar-projetos-em-react"
date: 2019-02-12T23:44:02-02:00
draft: false
keywords: [ "Arquiteture", "Front-End", "Organização", "React", "ReactJS" ]
slug: "como-organizar-projetos-em-react"
tag: [ "Arquiteture", "Front-End", "Organização", "React", "ReactJS" ]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1550015114/como-organizar-projetos-front-end_vedfeq.jpg"
title: "Como Organizar Projetos Em React"
url: "/como-organizar-projetos-em-react"
---

Começar um projeto [React](https://www.reactjs.org/) hoje é fácil, mas, e mantê-lo? Será que é só rodar um `create-react-app`? Na maioria dos projetos o problema acaba sendo a organização, dúvidas do tipo:

- Quais pastas criar?
- Onde criar meus componentes?
- Como separar os arquivos?
- Onde tal arquivo deve estar?
- etc...

Em outras palavras, começar um projeto é fácil, o dificil é organizá-lo e mantê-lo. Nesse *post* irei compartilhar a maneira como eu organizo meus projetos em React. A idéia não é dizer que minha organização é a melhor ou a bala de prata para todos os seus problemas, mas, dar sugestões e dicas (fique á vontade de seguí-las, concordá-las ou não).

![Estrutura da pasta src](https://res.cloudinary.com/mahenrique94/image/upload/v1550017649/Screen_Shot_2019-02-12_at_22.25.33_hwiotw.png)

Basicamente a estrutura da pasta `src` é essa, ao longo do *post* irei explicar cada pasta e o motivo delas.

## __mocks__

![Estrutura da pasta __mocks__](https://res.cloudinary.com/mahenrique94/image/upload/v1550017648/Screen_Shot_2019-02-12_at_22.10.41_vrz0rj.png)

A pasta `__mocks__` é responsável por armazenar os *mocks* para a execução dos testes com [Jest](https://jestjs.io/).

## _assets

![Estrutura da pasta _assets](https://res.cloudinary.com/mahenrique94/image/upload/v1550017648/Screen_Shot_2019-02-12_at_22.10.49_efx82o.png)

Na pasta `_assets` são armezandos alguns css's e javascript's globais do projeto. Também é salvo as imagens seja o logo do cliente ou algum `background` (se existir). Caso exisa a necessidade de fontes ou ícones personalizados, eles também ficam na pasta `_assets`.

## _config

![Estrutura da pasta _config](https://res.cloudinary.com/mahenrique94/image/upload/v1550017648/Screen_Shot_2019-02-12_at_22.10.56_rl2hqq.png)

A pasta `_config` como o próprio nome já diz, é responsável por realizar configurações no projeto, por exemplo:

- `config.js`: Responsável por verificar qual ambiente está rodando e retornar suas configurações, podemos usá-las por exemplo: `config.api.url` que irá ter um valor respectivo para cada ambiente.
- `history.js`: Criação e configuração do *browser history* ou *hash history*.
- `http`: Criação e configuração do objeto [axios](https://github.com/axios/axios), depois pode ser usado: `http.get`, abstraindo qual biblioteca está sendo utilizada para realizar as requisições.
- `reducers`: Configuração e junção de todos os *reducers* do projeto.
- `routes`: Configuração e junção de todas as rotas do projeto.
- `sagas`: Configuração e junção de todos os sagas do projeto.
- `scripts`: Toda importação referente á arquivos `.js`.
- `store`: Configuração da *store* global do [Redux](https://redux.js.org/).
- `style`: Toda importação referente á arquivos `.css`.


## _environments

![Estrutura da pasta _environments](https://res.cloudinary.com/mahenrique94/image/upload/v1550017648/Screen_Shot_2019-02-12_at_22.11.02_fbkrmp.png)

A pasta `_environments` é responsável por armazenar informações e configurações que diferenciam de um ambiente para o outro, por exemplo a URL da API. As configurações de ambiente que estiverem nesses arquivos não devem ser informações sensíveis. Se por um acaso existir algum *token* ou *api key*, elas devem ser setadas através do [dotenv](https://www.npmjs.com/package/dotenv) e configuradas como variáveis de ambiente. Assim, conseguimos em boa parte dos casos dar uma segurança maior ao projeto, pois, as informações não estarão inclusas no *bundle* `.js` final e sendo trafegada pela rede, surgindo a necessidade de hackear a máquina para ter acesso a tais variáveis.

## _translate

![Estrutura da pasta _translate](https://res.cloudinary.com/mahenrique94/image/upload/v1550017648/Screen_Shot_2019-02-12_at_22.11.14_t5numg.png)

Na pasta `_translate` é feita toda configuração de internacionalização e multí idiomas, nela, existe uma pasta filha chamada `languages` que para cada idioma terá um `.js` responsável pelas traduções.

## components

![Estrutura da pasta components](https://res.cloudinary.com/mahenrique94/image/upload/v1550017648/Screen_Shot_2019-02-12_at_22.11.23_umfcq3.png)

A pasta `components` como o próprio nome também diz, é responsável por armazenar todos os componentes do projeto, porém, existe um pequeno detalhe, os componentes localizados nessa pasta devem ser "globais", ou seja, utilizados em pelo menos duas *features* (irei explicar mais para frente) diferente. Caso um componente seja utilizado apenas por uma *feature* X, o mesmo deve ser criado dentro da pasta dessa *feature*.

Nesse exemplo, cada componente possuí uma pasta por conta do [Docz](https://www.docz.site/), sendo assim, todo componente tem um `.js` e `.mdx`, por isso, existe as sub pastas, para armazenar ambos os arquivos. Caso você não utilize o Docz, pode deixar os arquivos `.js` dos componentes na raiz da pasta, porém, á partir do momento que o componente X não possuir apenas um arquivo, uma sub pasta deve ser criada.

## constants

![Estrutura da pasta constants](https://res.cloudinary.com/mahenrique94/image/upload/v1550017648/Screen_Shot_2019-02-12_at_22.11.48_wtjmec.png)

A pasta `constants` armazena valores que são utilizados em vários lugares dos códigos, assim, caso algum valor um dia precise mudar ou ser atualizado, essa mudança e atualização será feita em apenas um lugar.

## containers

![Estrutura da pasta containers](https://res.cloudinary.com/mahenrique94/image/upload/v1550017648/Screen_Shot_2019-02-12_at_22.12.18_rhslqq.png)

A pasta `containers` irá armazenar os componentes que são *containers* do projeto, em outras palavras, irá armazenar os componentes que fazem o *wrap* da aplicação.

## features

![Estrutura da pasta features](https://res.cloudinary.com/mahenrique94/image/upload/v1550017648/Screen_Shot_2019-02-12_at_22.15.06_mghsto.png)

A pasta `features` irá armazenar e separar os contextos (alguns chamam de domínio) do projeto, por exemplo: `client`, `product`, `home`, `login`, `dashboard`, etc...

Cada pasta *feature* deve possuir todos os arquivos responsáveis, necessários e exlusivos da *feature*, podemos ver por exemplo a *feature* de produto:

![Estrutura da pasta feature do produto](https://res.cloudinary.com/mahenrique94/image/upload/v1550017649/Screen_Shot_2019-02-12_at_22.25.26_p8ns9w.png)

Repare que dentro dela, estão todas as informações do produto, exemplo:

- `actions.js`: Ações disparadas pelo Redux.
- `api.js`: Chamadas para a API.
- `constants.js`: Constantes exclusivas da *feature* (geralmente o *type* das ações).
- `Product.js`: Modelo que representa o produto.
- `reducers.js`: Todos os reducers do produto.
- `routes.js`: Todas as rotas referente ao produto.
- `sagas.js`: Todos as sagas do produto.
- `selectors.js`: Todos seletores do produto, esses seletores serão os responsáveis por buscar informações na store e mapear para o componente.
- `store.js`: Informações da *store* do produto.

Além desses arquivos, normalmente também teremos mais duas pastas dentro de cada *feature*, sendo elas: `containers` e `pages`:

### pages

![Estrutura da pasta pages do produto](https://res.cloudinary.com/mahenrique94/image/upload/v1550017649/Screen_Shot_2019-02-12_at_22.15.18_onfuko.png)

Dentro da pasta `pages` estará o componente que será renderizado na tela.

### containers

![Estrutura da pasta containers do produto](https://res.cloudinary.com/mahenrique94/image/upload/v1550017648/Screen_Shot_2019-02-12_at_22.15.24_ln5nnd.png)

Dentro da pasta `containers` estarão os componentes burros que irão ser informados nas rotas e realiazarão o mapeando das ações e *store* (`mapDispatchToProps` e `mapStateToProps`) para os componentes da pasta `pages`, a ideia de não chamar diretamente os componentes da pasta `pages` é para facilitar futuramente nos testes, facilitando a necessidade de mockar ações, stores, etc...

Os containers basicamente serão *wrap's* para os *pages* e **cada *page* deve ter um _container_**.

### components

Caso a *feature* precise de um componente exlusivo, uma pasta `components` deve ser criada para armazená-lo. Se um dia ele for necessário e compartilhado em mais de uma *feature* o mesmo deve ser migrado para a pasta `components` da raiz (`src/components`). A ideia é parecida com a especificidade do [Editorconfig](https://editorconfig.org/) ou [ESLint](https://eslint.org/), quanto mais baixo for o nível da pasta, mais específica e exclusiva ela será.

## helpers

![Estrutura da pasta helpers](https://res.cloudinary.com/mahenrique94/image/upload/v1550017648/Screen_Shot_2019-02-12_at_22.15.35_kfoczk.png)

A pasta `helpers` possuí valores e auxiliares para trabalhar com [styled-components](https://www.styled-components.com/).

## utils

![Estrutura da pasta utils](https://res.cloudinary.com/mahenrique94/image/upload/v1550017649/Screen_Shot_2019-02-12_at_22.15.40_cf9yyc.png)

A pasta `utils` possui funções que serão reaproveitadas e utilizadas em várias partes dos códigos, assim, a manutenção fica mais fácil, pois, ao realizar a modificação em um determinado arquivo, a mesma irá estar disponível para todo o projeto. Evitando também a repetição de código.

## __tests__

Todos os testes estão armezanados dentro da pasta `__tests__`, isso para facilitar no dia á dia, pois, geralmente eles são bem menos modificados do que os demais componentes. Assim, se tivermos os arquivos `.test.js` soltos pelas pastas, ele estarão visualmente poluindo-a. Se eu quero mexer com um teste, eu vou na pasta de teste, eu não preciso ficar vendo eles a todo momento.

## Saiba mais

Você provavelmente deve estar curioso porque algumas pastas possuem o `_` na frente, sendo elas:

- `_assets`
- `_config`
- `_environments`
- `_translate`

Afinal, porque? O motivo é para que elas fiquem separadas das demais pastas, então, adicionando o `_` elas ficaram juntas no topo do diretório e também dar a ideia de pastas "privadas", ou seja, que não devem ser acessadas diretamente através de `import`.

Também faço essa organização em projetos Angular e Vue, algumas modificações (normalmente pequenas) são necessárias por conta de cada arquitetura, mas, de uma forma geral quase tudo é organizado do mesmo jeito.

## Conclusão

Nesse *post* mostrei como organizo os arquivos e pastas dos meus projetos feito com React, lembrando que a organização não é exclusiva dele e podem ser reaproveitadas com Angular e Vue por exemplo.

Se você gostou não deixe de comentar e caso queira pode estar assinando a [*newsletter*](http://eepurl.com/ggP7Rv) para receber novidades por email.

Até a próxima.
