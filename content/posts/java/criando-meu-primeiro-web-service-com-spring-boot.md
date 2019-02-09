---
autor: "Matheus Castiglioni"
categoria: "Java"
disqus_identifier: "criando-meu-primeiro-web-service-com-spring-boot"
disqus_title: "Criando Meu Primeiro Web Service Com Spring Boot"
disqus_url: "https://blog.matheuscastiglioni.com.br/criando-meu-primeiro-web-service-com-spring-boot"
date: 2018-04-09T09:42:55-02:00
draft: false
keywords: [ "Back-End", "Gradle", "Kotlin", "Spring", "Spring Boot", "Web Service" ]
slug: "criando-meu-primeiro-web-service-com-spring-boot"
tag: [ "Back-End", "Gradle", "Kotlin", "Spring", "Spring Boot", "Web Service" ]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1549714838/criando-meu-primeiro-web-service-com-spring-boot_vmhojp.png"
title: "Criando Meu Primeiro Web Service Com Spring Boot"
url: "/criando-meu-primeiro-web-service-com-spring-boot"
---

Criar e configurar projetos do zero é um processo chato e demorado de ser realizado, definir as dependências, precisamos baixar as dependências (podemos usar um gerenciador de dependência para isso, porém ainda será necessário declará-las), definir o nome do projeto, linguagens, realizar as configurações iniciais para o projeto subir, etc...

Com toda certeza do mundo ninguém deve gostar de realizar esse processo, devemos perder e gastar nosso tempo com códigos e não configurações, pensando nisso surgiu o [Spring Boot](https://projects.spring.io/spring-boot/), com ele, todo esse processo pode ser feito em poucos segundos ou minutos (dependendo da internet e computador).

Nesse *post* vou mostrar como eu criei meu primeiro *web service* em [Spring](https://spring.io/) com [Kotlin](https://kotlinlang.org/) e [Gradle](https://gradle.org/) utilizando o Spring Boot.

## O que é Spring Boot?

Sabendo de toda essa burocracia comentada anteriormente referente a criação e configuração de um projeto, a galera da Spring resolveram criar um projeto para tornar isso mais fácil, pois é, eles conseguiram, esse projeto foi chamado de Spring Boot.

O Spring Boot faz esse processo e torna nossa vida muito mais saudável, com ele focamos apenas no desenvolvimento do projeto, não em sua criação, pois toda configuração é responsabilidade dele (as únicas que são nossa tornou-se muito simples).

## Criando o primeiro projeto com Spring Boot

Para criar um projeto do zero, a equipe também da Spring lançou o [Spring Initializr](https://start.spring.io/), com ele, dizemos o que vamos usar e o mesmo faz todo processo de *build* e *downlod* para nós. Para começar o processo devemos acessar sua [página](https://start.spring.io/) localizada em [https://start.spring.io/](https://start.spring.io/).

![Spring Boot site](https://res.cloudinary.com/mahenrique94/image/upload/v1549714914/home-spring-initializr_mjnola.png)

Repare que o site possuí poucas informações, irei detalhá-las para um melhor entendimento:

![Spring Boot site detalhes](https://res.cloudinary.com/mahenrique94/image/upload/v1549714994/home-spring-initializr-detalhada_cxslj3.jpg)

Destaquei os pontos importantes á serem comentados em caixas separadas e numeradas, sendo elas:

1. **Tipo de Projeto**: Aqui será informado o tipo de projeto que vamos utilizar, sendo eles: [Maven](https://maven.apache.org/) ou [Gradle](https://gradle.org/).
2. **Linguagem**: Aqui será informado qual linguagem vamos utilizar para desenvolver o *back-end*, sendo elas: [Java](https://www.java.com/pt_BR/), [Kotlin](https://kotlinlang.org/) ou [Groovy](http://groovy-lang.org/).
3. **Versão**: Aqui será informada a versão do Spring Boot que vamos utilizar.
4. **Grupo**: Aqui será informado o grupo da aplicação, ou seja, o pacote de nosso projeto (geralmente informado o domínio da aplicação invertido, por exemplo: matheuscastiglioni.com.br seria `br.com.matheuscastiglioni`).
5. **Procura de Dependências**: Aqui será feito a procura das dependências que o projeto irá utilizar.
6. **Nome**: Aqui será informado o nome do projeto.
7. **Lista de Dependências**: Aqui serão as dependências que já foram procuradas e selecionadas para fazerem parte do projeto.
8. **Criar**: Aqui é onde vamos de fator pedir para o Spring Initializr criar nosso projeto.

Para o exemplo do *post* configurei o Spring Initializr da seguinte maneira:

![Spring Initializr exemplo](https://res.cloudinary.com/mahenrique94/image/upload/v1549715755/spring-initializr-exemplo_xels1o.png)

Veja que estou criando um projeto com Gradle e utlizando o Kotlin como linguagem de desenvolvimento, a versão do Spring Boot será a mais atual estável, ou seja, 2.0.1.

Como grupo informei `br.com.matheuscastiglioni` e nome do projeto `primeiro-ws` (ws é a abreviação de *web service*).

As dependências que eu selecionei foram:

- **JPA**: Para utilizar o Spring Data e outros recursos da JPA e Hibernate.
- **Web**: Para criar um *web service*.
- **DevTools**: Ajuda com questões de *restart* e *live reloading*.
- **Rest Repositories**: Para utilizar o Spring Data Rest em nossos CRUD's.
- **HSQLDB**: Para utilizar esse banco de dados em memória.

Pronto, agora basta clicar no botão "Generate Project" para o Spring Initializr realizar a configuração e download de nosso projeto em formato `zip`.

Legal, após realizar o *download* do arquivo `.zip` (geralmente com o nome do projeto, informado em *artifact*) descompacte-o e faça a importação do projeto em sua IDE preferida para desenvolvimento (recomendo utilizar o [Intellij IDEA](https://www.jetbrains.com/idea/) por questões de suporte á Gradle e Kotlin nativamente, ou seja, sem a necessidade de instalar plugins).

Após importá-lo para dentro do Intellij, aguarde o processo de *building* e indexação finalizar (pode levar alguns minutos), nesse processo o Gradle irá realizar o *download* das dependências do projeto e configurar a estrutura de pasta para começarmos a trabalhar.

![Projeto importado](https://res.cloudinary.com/mahenrique94/image/upload/v1549715771/spring-primeiro-ws-importado-intellij_vkumho.png)

Essa deve ser a estrutura do projeto inicial, após todo processo de importação ter sido finalizado.

## Subindo o servidor

Legal, já temos nosso projeto criado, baixado, importado e configurado, como podemos subí-lo para começarmos a criar nossos *endpoints* de um *web service*?

![Gif pensando em como subir o servidor](https://res.cloudinary.com/mahenrique94/image/upload/v1549715786/tenor_gqjq33.gif)

Repare que dentro da raiz do pacote principal informado durante a criação do projeto, ou seja, o pacote informado em `group` existe uma classe com o `nome do projeto` + `Application` no meu caso, o nome do projeto informado foi `primeiro-ws`, sendo assim, a classe principal se chamará: `PrimeiroWsApplication` (respeitando as regras para nomear classes).

```kotlin
package br.com.matheuscastiglioni.primeirows

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class PrimeiroWsApplication

fun main(args: Array<String>) {
    runApplication<PrimeiroWsApplication>(*args)
}
```

O que será que essa classe faz? Bom, a classe que estiver anotada com `@SpringBootApplication` em um projeto utilizando Spring Boot, será a responsável por subir o servidor e servir nosso projeto. Além disso a classe `Application` deve possuir um método ou função (depende da linguagem) principal, geralmente chamada de `main` para ser executada ao rodar a classe.

![Rodando aplicação e subindo servidor](https://res.cloudinary.com/mahenrique94/image/upload/v1549715803/subindo-primeiro-ws-spring-boot_glburb.gif)

Repare que ao término do comando, a penúltima mensagem logada ou exibida foi:

> Tomcat started on port(s): 8080 (http) with context path ''

O que isso quer dizer? Por padrão uma aplicação Spring Boot utiliza o [Tomcat](http://tomcat.apache.org/) como servidor, traduzindo essa mensagem:

> Tomcat subiu e está rodando na porta 8080 no endereço localhost, sem nenhum caminho raiz para a aplicação.

Sabendo disso, podemos tentar acessar nossa aplicação em `http://localhost:8080`.

![Acessando aplicação](https://res.cloudinary.com/mahenrique94/image/upload/v1549715821/acessando-aplicacao-spring-boot_ensipy.png)

Veja que ao acessar o endereço da aplicação já temos uma resposta padrão do [Spring Data Rest](https://projects.spring.io/spring-data-rest/).

## Criando nosso primeiro controller

Para criar nosso primeiro *controller*, vamos criar uma nova classe também na raiz do pacote principal com o nome do projeto mais o sufixo `Controller`, assim como foi feita com a classe `Application`, sendo assim, nosso *controller* irá se chamar `PrimeiroWsController`:

```kotlin
package br.com.matheuscastiglioni.primeirows

class PrimeiroWsController {
}
```

Até o momento trata-se de uma classe qualquer em Kotlin, para definí-la como um *controller* devemos anotá-la com `@RestController`:

```kotlin
package br.com.matheuscastiglioni.primeirows

import org.springframework.web.bind.annotation.RestController

@RestController
class PrimeiroWsController {
}
```

Agora sim o Spring sabe que essa classe é um *controller*.

### Saiba mais

Se você já utilizou ou é usuário do Spring deve estar se perguntando:

> Porque não utilizar a anotação @Controller?

Como estamos criando uma API, vamos utilizar o padrão [REST](https://www.devmedia.com.br/introducao-a-web-services-restful/37387) e apenas devolver objetos no formato [JSON](https://www.json.org/json-pt.html), sem nada mais complexo ou amplo, então, utilizando a anotação `@RestController` nossos objetos por padrão já estarão no corpo da resposta, sem ter a necessidade de informar a anotação `@ResponseBody`.

Bom, continuando a implementação do *controller*, devemos criar uma função responsável por processar uma requisição do tipo GET para a raiz do projeto.

```kotlin
package br.com.matheuscastiglioni.primeirows

import org.springframework.web.bind.annotation.RestController

@RestController
class PrimeiroWsController {

    fun index() {

    }

}
```

Legal, já temos a função criada, precisamos configurá-la, o primeiro passo será dizer que ela receberá uma requisição do tipo GET, podemos fazer isso utilizando a anotação `@GetMapping`

```kotlin
package br.com.matheuscastiglioni.primeirows

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class PrimeiroWsController {

    @GetMapping
    fun index() {
    }

}
```

Estamos quasé lá, agora precisamos informar um retorno para a requisição, vamos enviar uma mensagem do famoso `Hello World`:

```kotlin
package br.com.matheuscastiglioni.primeirows

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class PrimeiroWsController {

    @GetMapping
    fun index() {
        return "Hello World"
    }

}
```

Esse código não irá compilar, pois precisamos informar o tipo de retorno para a função, nesse caso, será uma `String`:

```kotlin
package br.com.matheuscastiglioni.primeirows

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class PrimeiroWsController {

    @GetMapping
    fun index() : String {
        return "Hello World"
    }

}
```

Pronto, agora, reinicie o servidor e tente acessar novamente o endereço do projeto, caso tenha esquecido é `http://localhost:8080`:

![Hello World com Spring Boot e Kotlin](https://res.cloudinary.com/mahenrique94/image/upload/v1549715862/hello-world-spring-boot-kotlin_rnebee.png)

E voalá, temos nosso `Hello World` feito.

![Gif comemorando o Hello World](https://res.cloudinary.com/mahenrique94/image/upload/v1549715882/estourando-champanhe-comemorando_mfixdr.gif)

## Saiba mais

### Utilizando a anotação @Controller

Como foi dito em tópicos anteriores, utilizamos a anotação `@RestController` para criar nosso *controller*, se tivessemos utilizado a anotação `@Controller`, nossa classe ficaria da seguinte maneira:

```kotlin
package br.com.matheuscastiglioni.primeirows

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.ResponseBody

@Controller
class PrimeiroWsController {

    @GetMapping
    @ResponseBody
    fun index() : String {
        return "Hello World"
    }

}
```

Veja que foi necessário informar a anotação `@ResponseBody` para nossa função, assim, o Spring sabe que deve pegar o retorno dessa função e informá-lo na resposta (*response*) da requisição (*request*).

### Respostas com HttpEntity

Nas novas versões do Spring é recomendado utilizar retornos do tipo `HttpEntity`, para fazermos isso, devemos trocar o retorno de nossa função de `String` para `ResponseEntity`, nosso código, ficaria da seguinte maneira:

```kotlin
package br.com.matheuscastiglioni.primeirows

import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class PrimeiroWsController {

    @GetMapping
    fun index() : ResponseEntity<String> {
        return ResponseEntity.ok("Hello World")
    }

}
```

Veja que estamos retornando uma requisição com código **200** ou seja **OK**. Além disso, como corpo da resposta passamos a `String` com nossa mensagem de `Hello World`, por isso, a resposta é do tipo `ResponseEntity<String>`, porque nossa `ResponseEntity` devolve uma `String`.

A classe `ResponseEntity` é uma abstração feita pela String utilizando a classe `HttpEntity`, com ela conseguimos customizar códigos de resposta, cabeçalhos (*headers*) entre diversas outras possibilidades.

## Conclusão

Nesse *post* expliquei como criar o primeiro projeto com Spring Boot e uma primeira chamada para um *web service*, no exemplo, foi utilizado o *endpoint* raiz da aplicação, nos próximos *posts* iremos criar um CRUD para nosso *web service*, não deixe de acompanhar.

O projeto pode ser encontrado [aqui](https://github.com/mahenrique94/post-primeiro-ws-spring-boot).

Espero que tenha gostado, não deixe de comentar e assinar a [*newsletter*](http://eepurl.com/ggP7Rv) para receber as novidades por email, até a próxima.
