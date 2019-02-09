---
autor: "Matheus Castiglioni"
categoria: "Java"
disqus_identifier: "adicionando-jars-de-terceiros-no-maven"
disqus_title: "Adicionando Jars De Terceiros No Maven"
disqus_url: "https://matheuscastiglioni-blog.netlify.com/adicionando-jars-de-terceiros-no-maven"
date: 2018-01-13T09:17:01-02:00
draft: false
keywords: [ "Back-End", "Dependência", "JAR", "Maven", "Repositório" ]
slug: "adicionando-jars-de-terceiros-no-maven"
tag: [ "Back-End", "Dependência", "JAR", "Maven", "Repositório" ]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1549720017/trabalhando-com-diferentes-perfis-no-maven_l8mvbg.jpg"
title: "Adicionando Jars De Terceiros No Maven"
url: "/adicionando-jars-de-terceiros-no-maven"
---

Recentemente tive a necessidade de migrar um projeto normal para um projeto [Maven](https://maven.apache.org/), até ai tudo bem, adicionei todas as dependências no `pom.xml` e voalá, o projeto estava funcionando.

![Projeto funcionando](https://res.cloudinary.com/mahenrique94/image/upload/v1549720221/gif-danca_xagclw.gif)

Porém, com o tempo surgiu a necessidade de adicionar uma nova dependência desenvolvida por um de nossos desenvolvedores, essa dependência não esta hospedada no [Mvn Repository](https://mvnrepository.com/), então a princípio pensamos:

> Vamos copiá-la para o projeto e adicioná-la manualmente no *build path*

![Adicionado jar no build path](https://res.cloudinary.com/mahenrique94/image/upload/v1549720245/add-mhcjar-to-build-path_i2uiqj.gif)

Pronto, com o nova dependência(*jar*) adicionada, já podemos começar a utilizá-la no projeto, certo? Certo. Após finalizar o uso dela devemos gerar um novo deploy da aplicação, o primeiro passo será pedir para o Maven empacotar nossa aplicação:

<script src="https://asciinema.org/a/bM31yVbAHuL3FDwuTQgMkpp0q.js" id="asciicast-bM31yVbAHuL3FDwuTQgMkpp0q" async></script>

Como podemos ver, nossa aplicação gerou um erro durante o empacotamento, mas porque isso aconteceu?

Ao tentar realizar o empacotamento(*package*) da nossa aplicação o Maven compilou todas nossas classes antes de empacotá-las, na hora que ele chegou na classe `TestaParametrosWeb` gerou o erro `package br.com.mhc.parametrosweb does not exist` informando que não estava encontrando a classe `ParametrosWeb` localizada no pacote `br.com.mhc.parametrosweb`.

Isso aconteceu porque não dizemos para o Maven que essa classe é uma dependência de nosso projeto, apenas copiamos o JAR para o projeto e adicionamos no *build path* e começamos a usá-la. Porém por padrão o Maven vai procurar todas as depedências dentro da *home* do seu repositório local, no caso do Mac, ele iria buscar em: `/Users/NOME_DO_USUARIO/.m2/repository` e como vocês já devem estar imaginando, não temos nosso JAR adicionado lá.

Sendo assim, como podemos resolver o problema? Pois é, se você pensou em adicioná-lo no repositório local acertou, é exatamente esse passo que vamos realizar. Para esse passo, precisamos seguir a convensão do Maven que seria: `repository/groupId/version/artifactId-version.jar`.

Beleza, que doidera é essa? Calma que vocês já vão entender, o primeiro passo é adicionar a dependência em nosso `pom.xml`.

## Configurando o pom.xml

Como foi mencionado anteriormente, devemos retirar a depedência de nosso *build path*.

![Remove jar do build path](https://res.cloudinary.com/mahenrique94/image/upload/v1549720267/remove-mhc-to-build-path_gagdu3.gif)

E adicioná-la no `pom.xml`:

```xml
<dependency>
	<groupId>br.com.mhc</groupId>
	<artifactId>mhc</artifactId>
	<version>1.0.0</version>
</dependency>
```

Porém após o Maven realizar sua atualização, nosso `pom.xml` apresentará um erro:

![Pom.xml com erro](https://res.cloudinary.com/mahenrique94/image/upload/v1549720289/mhc-pom-xml_mydxqz.png)

Mas o que esta acontecendo?

## Repositório local

Se entrarmos em nosso repositório local, podemos ver que o Maven criou as pastas referente nossa dependência `br/com/mhc/mhc/1.0.0/`, esse é o padrão do Maven, como mencionado anteriormente, ele cria a seguinta estrutura: `repository/groupId/version/artifactId-version.jar`. Então como podemos resolver o problema? Sim, se você pensou em copiar nosso JAR para esse caminho, acertou.

Após copiar o JAR para `br/com/mhc/mhc/1.0.0/mhc-1.0.0.jar` nosso problema foi resolvido, já conseguimos realizar o *update* do Maven, trazendo nossas depedências para o projeto, agora podemos tentar empacotá-lo novamente:

<script src="https://asciinema.org/a/e7dyTF6zC5U2VB2jDaudejOu9.js" id="asciicast-e7dyTF6zC5U2VB2jDaudejOu9" async></script>

E como podemos ver, deu tudo certo, o empacotamento foi gerado com sucesso, foi gerado nosso `post-maven.war` que deve ser utilizado para subir nossa aplicação em produção.

Então está tudo certo? Errado, acabamos de resolver um problema, porém criamos outro.

![Não acredito](https://res.cloudinary.com/mahenrique94/image/upload/v1549719914/gif-nao-acredito-computador_llvlm1.gif)

## Entendendo o novo problema

Agora transferimos a necessidade de todos os desenvolvedores realizarem as mesmas configurações em seus repositórios locais para nossa dependência ser encontrada, além disso, se utilizarmos alguma plataforma para integração contínua como o [Jenkins](https://jenkins.io/) também devemos criar as pastas do Maven em nosso servidor, algo totalmente impraticável. Então, como podemos resolver o problema?

## Escopo de sistema

Sabendo dessa necessidade o Maven criou um escopo de sistema(*system scope*), mas afinal, o que seria esse escopo de sistema?

> This scope is similar to provided except that you have to provide the JAR which contains it explicitly. The artifact is always available and is not looked up in a repository.

Em outras palavras, é um escopo que sempre devemos fornecer o JAR explicitamente e esse JAR não será procurado no repostiório do Maven.

## Configurando o escopo de sistema

Então vamos acertar nosso `pom.xml` para utilizar o escopo de sistema.

```xml
<dependency>
	<groupId>br.com.mhc</groupId>
	<artifactId>mhc</artifactId>
	<version>1.0.0</version>
	<scope>system</scope>
	<systemPath>${basedir}/src/main/webapp/WEB-INF/lib/mhc-1.0.0.jar</systemPath>
</dependency>
```

Veja que adicionamos duas novas tag para a nossa depedência: `scope` e `systemPath`:

- **Scope**: Estamos definindo como será o escopo de nossa depedência, para teste, compilação, etc...
- **System Path**: Aqui devemos informar onde esta nosso JAR, essa tag só pode ser utilizada com o escopo de sistema.
- **basedir**: Uma variável do Maven, onde encontra-se o arquivo `pom.xml`.

Pronto, agora nosso problema deve ter sido resolvido, vamos testar:

<script src="https://asciinema.org/a/W0gxuPuTwKTykhVsQz9W9HX2Y.js" id="asciicast-W0gxuPuTwKTykhVsQz9W9HX2Y" async></script>

Como podemos ver, tudo esta funcionando, agora não será necessário configurar o repositório local em todas as máquinas que precisarem empacotar nossa aplicação.
