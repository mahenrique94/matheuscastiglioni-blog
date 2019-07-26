---
autor: "Matheus Castiglioni"
categoria: "Java"
disqus_identifier: "comecando-com-kotlin"
disqus_title: "Comecando Com Kotlin"
disqus_url: "https://blog.matheuscastiglioni.com.br/comecando-com-kotlin"
date: 2017-11-06T20:41:30-02:00
draft: false
keywords: [ "Back-End", "JetBrains", "JVM", "Kotlin" ]
slug: "comecando-com-kotlin"
tag: [ "Back-End", "JetBrains", "JVM", "Kotlin" ]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1549726272/comecando-com-kotlin_sqiaot.png"
title: "Comecando Com Kotlin"
url: "/comecando-com-kotlin"
---

# Kotlin

Muito se fala sobre essa linguagem nova que surgiu em nosso mundo, principalmente agora por ser uma linguagem oficial para desenvolver aplicativos em Android, porém a idéia não se limita apenas a app, com o Kotlin também conseguimos desenvolver para Web e JavaScript.

## Um pouco de história

A linguagem [Kotlin](http://kotlinlang.org/) foi criada pela [JetBrains](https://www.jetbrains.com/) empresa famosa por suas IDE's ([IntelliJ IDEA](https://www.jetbrains.com/idea/), [PHP Storm](https://www.jetbrains.com/phpstorm/?fromMenu), [Web Storm](https://www.jetbrains.com/webstorm/?fromMenu), etc...) em 2011, o projeto deu início dentro da mesma e até hoje é um projeto dela, criada para suprir a necessidade que eles haviam em relação a outras linguagens pois não tinham tudo que eles precisavam. A idéia inicial do projeto era ser feito baseado totalmente em [Scala](https://www.scala-lang.org/), porém seu tempo de compilação era muito mais lento em relação ao [Java](https://en.wikipedia.org/wiki/Java_(programming_language)), então eles reuniram os melhores aspectos de ambas as linguagens e assim surgiu o Kotlin, o projeto foi aberto para a comunidade em 2012 no github, onde até hoje é um projeto *open source*.

## Pré requisitos

Para começar dar seus primeiros passos com Kotlin, você deve ter todo ambiente da JVM e Java configurado e instalado na sua máquina.

## Meus primeiros contatos

Caso queira, por questões de facilidade o Kotlin pode ser testado online no seu [compilador](https://try.kotlinlang.org/), mas também possuí integrações com [Android Studio](http://kotlinlang.org/docs/tutorials/kotlin-android.html), [IntelliJ IDEA](http://kotlinlang.org/docs/tutorials/getting-started.html) e [Eclipse](http://kotlinlang.org/docs/tutorials/getting-started-eclipse.html), além de possuir um compilador em [linha de comando](http://kotlinlang.org/docs/tutorials/command-line.html), bem similar ao Java.

### Meu primeiro Hello Word

Após ter seguido os links dos tutoriais para configurar o Kotlin em sua IDE preferida, vamos começar criando um famoso "**Hello World**", o primeiro passe é criar um arquivo chamado `HelloWolrd.kt`, repare que não é uma classe e sim apenas um arquivo, feito isso podemos criar uma função `main` para imprimir a mensagem desejada:

```kotlin
fun main(args : Array<String>) {
    println("Hello World")
}
```

Ao rodar a classe, em nosso console iremos ter a seguinte resposta:

![Hello World](https://res.cloudinary.com/mahenrique94/image/upload/v1549726349/kotlin-console-01_glkyen.png)

### Começando com classes

Para o primeiro exemplo, podemos criar uma classe para representar uma pessoa, onde a mesma irá possuir um nome, idade e sexo:

```kotlin
class Pessoa(val nome : String, val idade : Int, val sexo : String) {

}
```

Repare que aqui ja existe um grande diferença em relação ao Java, não precisamos declarar nossos atributos e depois recebe-los no construtor, basta apenas informar no construtor o nome e tipo do atributo que o mesmo ja faz parte de classe, algo bem parecido com TypeScript.

### Criando uma função de ola

Para o exemplo, vamos criar uma função para a pessoa dizer seu nome, idade e sexo, com isso já podemos ter alguns exemplos da linguagem:

```kotlin
fun ola() {
        println("Olá meu nome é ${this.nome}, tenho ${this.idade} anos e sou do sexo ${this.sexo.toLowerCase()}");
}
```

Repare que aqui já estamos usando umas das funções do Kotlin, a [Template String](http://kotlinlang.org/docs/reference/basic-syntax.html#using-string-templates).

#### Template String

Assim como no JavaScript, o Kotlin também tem suas facilidades para concatenação de `strings`, basta informarmos `$variavel` ou `${variavel}`, mas, qual a diferença ? Quando usar chaves ou não ? Simples! Se queremos imprimir apenas uma variável:

```kotlin
fun main(args : Array<String>) {
    val nome : String = "Matheus"
    println("Meu nome é $nome")
}
```

Podemos usar apenas o `$` seguido pelo nome da variável, porém, se precisarmos realizar alguma função na variável ou algo mais complexo do que apenas chamá-la:

```kotlin
fun main(args : Array<String>) {
    val nome : String = "Matheus"
    println("Meu nome é ${nome.toUpperCase()}")
}
```

Devemos usar o `$` com `{}` e a variável com as funções dentro.

### Testando a primeira classe

Voltando ao exemplo da classe `Pessoa` que nos ia dizer oi, vamos testá-la:

```kotlin
fun main(args : Array<String>) {
    val matheus : Pessoa = Pessoa("Matheus", 21, "Masculino")
    matheus.ola()
}
```

Ao rodar nossa classe de teste, teremos a seguinte saída em nosso console:

![Rodando a primeira classe](https://res.cloudinary.com/mahenrique94/image/upload/v1549726374/kotlin-console-02_kynsgz.png)

#### Declarando variáveis

Mas afinal, o que seria esse `val` ? Para declararmos váriveis no Kotlin, existem duas maneiras:

- **Primeira**: Caso você queira permitir que a variável possa mudar de valor, ou seja, ser variável, devemos usar `var`.
- **Segunda**: Caso a variável não possa mudar do valor e ser uma constante, devemos usar `val`.

Além disso, seguimos a seguinte sintaxe:

```kotlin
tipo nome_da_variavel : tipo_da_variavel = /.../
```

#### Definindo tipos

O Kotlin é uma linguagem que não precisa ser explicitadamente tipada, em outras palavras, podemos dizer que o Kotlin é inteligente em saber o valor que esta sendo passado para a variável e assim defini um tipo para ela:

```kotlin
val matheus = Pessoa("Matheus", 21, "Masculino")
```

Aqui estamos instanciando uma classe `Pessoa`(sim, não precisa do `new`) e gerando o objeto `matheus`, veja que não precisamos informar o tipo da variável, o Kotlin sabe que se estamos passando uma Pessoa para ela, então ela tem que ser do tipo Pessoa.

Com isso, podemos mudar a sintaxe de criação de variável para:

```kotlin
tipo nome_da_variavel = /.../
```

Lembrando que para funcionar a tipagem implitica, deve ser atribuído algum valor para a várivel e quando esse valor for atribuído, o mesmo não poderá ser mudado, então se uma variável:

```kotlin
var idade = 23
```

For definida como `Int`, não podemos passar uma `String` para ela:

```kotlin
idade = "Matheus"
```

Esse código não compila.

E ae, você conhecida o Kotlin, o que achou da linguagem ? Não deixe de comentar, nos próximos *posts* iremos nos aprofundando na linguagem.

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
