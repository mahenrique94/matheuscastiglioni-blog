---
autor: "Matheus Castiglioni"
categoria: "JavaScript"
disqus_identifier: "criando-containers-personalizaveis-em-react"
disqus_title: "Criando Containers Personalizáveis Em React"
disqus_url: "https://blog.matheuscastiglioni.com.br/criando-containers-personalizaveis-em-react"
date: 2020-03-18T20:14:47-03:00
draft: false
keywords: ["Front-End", "React", "ReactJS", "Containers"]
slug: "criando-containers-personalizaveis-em-react"
tag: ["Front-End", "React", "ReactJS", "Containers"]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1584573532/belgium-1601917_1920_qjqjld.jpg"
title: "Criando Containers Personalizáveis Em React"
url: "/criando-containers-personalizaveis-em-react"
---

Quando estamos trabalhando em aplicações React é bem comum que as páginas da aplicação tenham estruturas semelhantes, ou seja, normalmente ela pode ter um cabeçalho (*header*), um menu e um rodapé (*footer*).

Algo mais ou menos parecido com o seguinte *wireframe*:

![Wireframe com cabeçalho, menu, conteúdo e rodapé](https://res.cloudinary.com/mahenrique94/image/upload/v1584574121/Desktop_azq9ar.png)

Basicamente temos um cabeçalho com um logo e um menu com *links* de navegação, depois temos o conteúdo principal da aplicação e por fim um rodapé com alguma frase.

Então, como podemos implementar esse primeiro *wireframe*?


## Criando a aplicação React

O primeiro passo será criar uma nova aplicação React, podemos utilizar o `create-react-app`:

```bash
npx create-react-app post-criando-containers-personalizaveis
```

Esse comando vai criar um novo projeto com as configurações base, ao final da execução do mesmo, uma nova pasta chamada `post-criando-containers-personalizaveis` será criada onde o comando foi executado (no meu caso, criou dentro de `~/Desktop`).

## Configurando as rotas

Uma vez que temos o projeto criado, precisamos adicionar algumas dependências para gerenciar as rotas da aplicação, nesse caso vamos utilizar a biblioteca [React Router](https://reacttraining.com/react-router/web/guides/quick-start):

```bash
npm i react-router-dom
```

Agora precisamos criar nossas páginas e configurar as rotas para renderizar cada página dado sua URL correspondente.

### Limpando o projeto

Antes de criar nossas páginas, vamos dar uma limpada em alguns arquivos padrões do React, os seguintes arquivos serão apagados:

- `/src/App.css`
- `/src/App.test.js`
- `/src/logo.svg`
- `/src/serviceWorker.js`
- `/src/setupTests`

Isso porque para o exemplo do *post* eles não serão necessários.

Caso você esteja rodando a aplicação, vários erros vão ocorrer porque o React está tentando importar e utilizar arquivos que não existem mais, ou seja, os arquivos que acabamos de apagar. Para resolver esses problemas, precisamos atualizar os arquivos que sobraram:

- `/src/App.js`
- `/src/index.css`
- `/src/index.js`

Vamos deixar cada um deles com o seguinte conteúdo:

```javascript
// /src/App.js
import React from 'react';

const App = () => <h1>Minha aplicação</h1>

export default App
```

```css
/* /src/index.css */
body {
  margin: 0;
}
```

```javascript
// /src/index.js
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))
```

Com isso a aplicação deve voltar a renderizar corretamente.

### Criando as páginas

Para a criação dos componentes responsáveis por renderizar nossas páginas, vamos criar uma pasta chamada `pages` dentro da pasta `src`:

```
/src
    /pages
```

E dentro da pasta `pages` vamos criar três novos componentes:

```
/src
    /pages
        About.js
        Contact.js
        Home.js
```

Onde cada um deles terá sua responsabilidade:

- `About.js`: Será a página de sobre a aplicação.
- `Contact.js`: Será a página onde contém o formulário para os usuários entrarem em contato conosco.
- `Home.js`: Será a página principal da aplicação.

Vamos adicionar o conteúdo de cada componente:

```javascript
// /src/pages/About.js
import React from 'react'

const About = () => <h1>About</h1>

export default About
```

```javascript
// /src/pages/Contact.js
import React from 'react'

const Contact = () => <h1>Contact</h1>

export default Contact
```

```javascript
// /src/pages/Home.js
import React from 'react'

const Home = () => <h1>Home</h1>

export default Home
```

Todos eles renderizam apenas um simples `h1` informando qual página foi carregada.

### Criando as rotas

Para adicionar as rotas na aplicação, vamos começar criando um novo componente chamado `Routes` dentro da pasta `components`:

```
/src
    /components
        Routes.js
```

Sendo assim, vamos precisar criar a pasta `components` dentro de `src` para depois criar o componente `Routes.js` responsável por registar e lidar com as rotas da aplicação:

```javascript
// /src/components/Routes.js
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import About from '../pages/About'
import Contact from '../pages/Contact'
import Home from '../pages/Home'

const Routes = () => (
    <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
    </BrowserRouter>
);

export default Routes
```

Agora por questões de organização vamos criar outro componente chamado `Root.js` para que ele utilize o compoente `Route` e seja o primeiro componente à ser renderizado na aplicação dentro do `index.js`:

```javascript
// /src/components/Root.js
import React from 'react'

import Routes from './Routes'

const Root = () => <Routes />

export default Root
```

E por fim, vamos atualizar o `index.js` para utilizar o `Root.js` ao invés do `App.js`:

```javascript
// /src/index.js
import React from 'react'
import ReactDOM from 'react-dom'

import Root from './components/Root'

import './index.css'

ReactDOM.render(<Root />, document.getElementById('root'))
```

Com isso nosso sistema de rota deve estar funcionando, ou seja, a página `Home` deve estar sendo exibida ao acessar a raiz da aplicação: `http://localhost:3000/` e as demais páginas devem estar sendo renderizadas em suas respectivas rotas:

- `http://localhost:3000/`: Renderiza a página `/src/pages/Home.js`.
- `http://localhost:3000/about`: Renderiza a página `/src/pages/About.js`.
- `http://localhost:3000/contact`: Renderiza a página `/src/pages/Contact.js`.

## Criando o cabeçalho, menu, conteúdo e rodapé

O próximo passo será criar os componentes base para o *layout* da aplicação, sendo eles: `Header`, `Menu`, `Container` e `Footer`. Nossa estrutura de pasta ficaria mais ou menos assim:

```
/src
    /components
        /container
            Container.css
            Container.js
            index.js
        /footer
            Footer.css
            Footer.js
            index.js
        /header
            Header.css
            Header.js
            index.js
        /menu
            index.js
            Menu.css
            Menu.js
```

Sim, eu sei, é bastante arquivos para pouca coisa, mas para o exemplo do *post* preferi utilizar CSS puro e essa estrutura de pasta. O segundo passo será adicionar o conteúdo de cada um deles:

```javascript
// /src/components/container/Container.css
.app-container {
    font-family: sans-serif;
    height: calc(100vh - 34px - 50px - 64px);
    padding: 2rem;
}

// /src/components/container/Container.js
import React from 'react'

import './Container.css'

const Container = ({ children }) => (
    <main className="app-container">
        {children}
    </main>
)

export default Container

// /src/components/container/index.js
export { default } from './Container'
```

```javascript
// /src/components/footer/Footer.css
.app-footer {
    background: #dcdcdc;
    padding: .5rem 2rem;
    text-align: right;
}

.app-footer__message {
    color: #595959;
    font-family: sans-serif;
}

// /src/components/footer/Footer.js
import React from 'react'

import './Footer.css'

const Footer = () => (
    <footer className="app-footer">
        <span className="app-footer__message">
            blog.matheuscastiglioni.com.br
        </span>
    </footer>
)

export default Footer

// /src/components/footer/index.js
export { default } from './Footer'
```

```javascript
// /src/components/header/Header.css
.app-header {
    align-items: center;
    background: #dcdcdc;
    display: flex;
    justify-content: space-between;
    padding: 0 2rem;
}

.app-header__logo {
    background: #999;
    height: 25px;
    width: 100px;
}

// /src/components/header/Header.js
import React from 'react'

import Menu from '../menu'

import './Header.css'

const Header = () => (
    <header className="app-header">
        <span className="app-header__logo"/>
        <Menu />
    </header>
)

export default Header

// /src/components/header/index.js
export { default } from './Header'
```

```javascript
// /src/components/menu/Menu.css
.app-menu__list {
    display: flex;
}

.app-menu__item {
    list-style: none;
}

.app-menu__link {
    color: #595959;
    font-family: sans-serif;
    margin-right: 1rem;
    text-decoration: none;
}

.app-menu__link:hover {
    text-decoration: underline;
}

// /src/components/menu/Menu.js
import React from 'react'
import { Link } from 'react-router-dom'

import './Menu.css'

const Menu = () => (
    <nav class="app-menu">
        <ul className="app-menu__list">
            <li className="app-menu__item">
                <Link className="app-menu__link" to="/">
                    Home
                </Link>
            </li>
            <li className="app-menu__item">
                <Link className="app-menu__link" to="/contact">
                    Contact
                </Link>
            </li>
            <li className="app-menu__item">
                <Link className="app-menu__link" to="/about">
                    About
                </Link>
            </li>
        </ul>
    </nav>
)

export default Menu

// /src/components/menu/index.js
export { default } from './Menu'
```

## Utilizando os componentes base

Uma vez que os componentes base para o *layout* estão prontos, vamos adicioná-los e usá-los dentro das nossas páginas:

```javascript
// /src/pages/About.js
import React from 'react'

import Container from '../components/container'
import Footer from '../components/footer'
import Header from '../components/header'

const About = () => (
    <>
        <Header />
        <Container>
            <h1>About</h1>
        </Container>
        <Footer />
    </>
)

export default About
```

```javascript
// /src/pages/Contact.js
import React from 'react'

import Container from '../components/container'
import Footer from '../components/footer'
import Header from '../components/header'

const Contact = () => (
    <>
        <Header />
        <Container>
            <h1>Contact</h1>
        </Container>
        <Footer />
    </>
)

export default Contact
```

```javascript
// /src/pages/Home.js
import React from 'react'

import Container from '../components/container'
import Footer from '../components/footer'
import Header from '../components/header'

const Home = () => (
    <>
        <Header />
        <Container>
            <h1>Home</h1>
        </Container>
        <Footer />
    </>
)

export default Home
```

Com isso devemos ter uma versão minimalista da aplicação funcionando baseado no *wireframe* anterior:

![Versão minimalista de aplicação](https://res.cloudinary.com/mahenrique94/image/upload/v1584577857/Screen_20Shot_202020-03-18_20at_2021.30.39_rksm04.png)

Podemos realizar a navegação e verificar que apenas o conteúdo principal da página irá mudar, o resto de *layout* irá permanecer igual e será reaproveitado em todas as páginas atuais da aplicação.

## Reaproveitando componentes

Apesar de tudo estar funcionando, temos um problema em nossa arquitetura, foi necessário importar os componentes base em todas as páginas para utilizá-los. E se um dia o *layout* mudar? Vamos ter que ir em todas as páginas e atualizá-las uma à uma? Parece um trabalho muito suscetível à erros.

E na minha opinião estamos violando um conceito de programação chamado DRY (*Don't repeat yourself*), eu acho que esse conceito se encaixa bem nessa situação, uma vez que estamos repetindo os mesmos códigos em vários lugares.

Para resolver esse problema, vamos criar um componente que irá utilizar os componentes base. Normalmente eu gosto de chamar esses componentes de *containers*:

```
/src
    /containers
        App.js
```

**Obs**: Particularmente gosto de trabalhar com o conceito de *containers* um pouco diferente. Normalmente as pessoas utilizam eles com outros propósitos, elas costumam chamá-los de *smart components*. Mas, eu gosto de separar esses conceitos, para mim *containers* são uma coisa e *smart* são outra (**deixando claro que é uma opinião e gosto particular**).

Para mais informações recomendo esse artigo do Dan Abramov: [Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) onde ele fala de *Presentational* (*Dumb*) e *Container* (*Smart*).

Basicamente vamos precisar mover o componente `/src/App.js` para dentro da pasta recém criada `/src/containers`:

```javascript
// /src/containers/App.js
import React from 'react'

import Container from '../components/container'
import Footer from '../components/footer'
import Header from '../components/header'

const App = () => (
    <>
        <Header />
        <Container>
            ?
        </Container>
        <Footer />
    </>
)

export default App
```

Mas, o que vamos passar para o filho do componente principal (no caso o `Container`)? Podemos passar o componente `Routes` e dentro do `Root.js` chamar o `App.js`.

```javascript
// /src/containers/App.js
import React from 'react'

import Container from '../components/container'
import Footer from '../components/footer'
import Header from '../components/header'
import Routes from '../components/Routes'

const App = () => (
    <>
        <Header />
        <Container>
            <Routes />
        </Container>
        <Footer />
    </>
)

export default App
```

```javascript
// /src/components/Root.js
import React from 'react'

import App from '../containers/App'

const Root = () => <App />

export default Root
```

E vamos atualizar os componentes de página para não usarem mais os componentes base:

```javascript
// /src/pages/About.js
import React from 'react'

const About = () => <h1>About</h1>

export default About
```

```javascript
// /src/pages/Contact.js
import React from 'react'

const Contact = () => <h1>Contact</h1>

export default Contact

```

```javascript
// /src/pages/Home.js
import React from 'react'

const Home = () => <h1>Home</h1>

export default Home
```

Mas se você tentar acessar a página provavelmente vai ocorrer um erro:

> Error: Invariant failed: You should not use \<Link\> outside a \<Router\>

Porque isso está ocorrendo? Afim de tentar entender o problema, vamos dar uma olhada novamente no nosso `/src/containers/App.js`:

```javascript
// /src/containers/App.js
import React from 'react'

import Container from '../components/container'
import Footer from '../components/footer'
import Header from '../components/header'
import Routes from '../components/Routes'

const App = () => (
    <>
        <Header />
        <Container>
            <Routes />
        </Container>
        <Footer />
    </>
)

export default App
```

Repare que o componente `Routes` é filho de `Container` que é irmão de `Header`. Mas, dentro do nosso `Header` estamos usando o componente `Menu` que dentro dele tem vários `Link`, ou seja, o componente `Link` está fora (não é filho) do componente `BrowserRouter` (que é chamado dentro do `Routes`).

O jeito mais fácil para resolver esse problema é tirar o `BrowserRouter` de dentro do `Routes` e levá-lo para o `App`:

```javascript
// /src/containers/App.js
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Container from '../components/container'
import Footer from '../components/footer'
import Header from '../components/header'
import Routes from '../components/Routes'

const App = () => (
    <BrowserRouter>
        <Header />
        <Container>
            <Routes />
        </Container>
        <Footer />
    </BrowserRouter>
)

export default App
```

```javascript
// /src/components/Routes.js
import React from 'react'
import { Route } from 'react-router-dom'

import About from '../pages/About'
import Contact from '../pages/Contact'
import Home from '../pages/Home'

const Routes = () => (
    <>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
    </>
);

export default Routes
```

Com essas modificações tudo deve voltar a funcionar.

## Personalizando o *layout*

Todos os problemas resolvidos, aplicação funcionando, tudo certo, certo? Apesar da solução anterior ter dado certo, ela possuí alguns problemas.

Ao meu ver o principal problema é a perde de flexibilidade em nossas páginas e *layouts*.

Imagine que por algum motivo (que não vem ao caso no momento) uma determinada tela da aplicação precisa ter o seguinte *layout*:

![Segundo wireframe com modificação de layout](https://res.cloudinary.com/mahenrique94/image/upload/v1584579123/Desktop_a7apqg.png)

Como podemos fazer para que apenas uma rota fique com esse *layout*? Com a nossa arquitetura atual, isso seria um tanto quanto complexo, o motivo da complexidade é que nosso *container* está renderizando as rotas como filho, então dentro dos componentes de página a gente não tem controle sobre o que renderizar e onde renderizar.

Para resolver esse problema, podemos fazer com que o nosso *container* atual renderiza X componente como filho, ou seja, as rotas que vão dizer para o *container* o que ele deve renderizar.

Vamos modificar o `/src/containers/App.js`:

```javascript
// /src/containers/App.js
import React from 'react'

import Container from '../components/container'
import Footer from '../components/footer'
import Header from '../components/header'

const App = ({ children }) => (
    <>
        <Header />
        <Container>
            {children}
        </Container>
        <Footer />
    </>
)

export default App
```

E voltar 0 `BrowserRouter` para o `Routes`:

```javascript
// /src/components/Routes.js
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import About from '../pages/About'
import Contact from '../pages/Contact'
import Home from '../pages/Home'

const Routes = () => (
    <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
    </BrowserRouter>
);

export default Routes
```

Por fim vamos modificar o componente `Root` para voltar a renderizar o `Routes` ao invés do `App`:

```javascript
// /src/components/Root.js
import React from 'react'

import Routes from './Routes'

const Root = () => <Routes />

export default Root
```

Dessa maneira, nossas páginas é quem vão escolher qual *container* utilizar:

```javascript
// /src/pages/About.js
import React from 'react'

import App from '../containers/App'

const About = () => (
    <App>
        <h1>About</h1>
    </App>
)

export default About
```

```javascript
// /src/pages/Contact.js
import React from 'react'

import App from '../containers/App'

const Contact = () => (
    <App>
        <h1>Contact</h1>
    </App>
)

export default Contact
```

```javascript
// /src/pages/Home.js
import React from 'react'

import App from '../containers/App'

const Home = () => (
    <App>
        <h1>Home</h1>
    </App>
)

export default Home
```

Caso a gente precise criar uma nova página com um *layout* diferente, podemos apenas trocar o *container* que essa página está utilizando:

```javascript
// /src/pages/Another.js
import React from 'react'

import Admin from '../containers/Admin'

const Another = () => (
    <Admin>
        <h1>Another</h1>
    </Admin>
)

export default Another
```

Com isso temos a liberdade e flexibilidade de mudar os *layouts* de acordo com o que cada página precisa e demanda.

## Conclusão

Nesse *post* vimos como criar um novo projeto em React, como configurar rotas dentro da aplicação utilizando a biblioteca React Router e por fim vimos como podemos criar *containers* que são flexíveis a mudanças de *layout* para rotas específicas.

E ae, você já conhecia essa abordagem? Não deixe de comentar e se você tem alguma outra ideia compartilhe nos comentários.

Se você gostou desse *post* e quer ser notificado com novos *post's*, não deixe de assinar a [*newsletter*](http://eepurl.com/ggP7Rv) e receber as novidades por email.

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
