---
autor: "Matheus Castiglioni"
categoria: "HTML5"
disqus_identifier: "meu-html-e-semantico-e-o-seu"
disqus_title: "Meu Html E Semantico E O Seu"
disqus_url: "https://matheuscastiglioni-blog.netlify.com/meu-html-e-semantico-e-o-seu"
date: 2018-05-17T08:42:19-02:00
draft: false
keywords: [ "Acessibilidade", "Front-End", "Leitores de Tela", "Semântica", "Semântico", "Web" ]
slug: "meu-html-e-semantico-e-o-seu"
tag: [ "Acessibilidade", "Front-End", "Leitores de Tela", "Semântica", "Semântico", "Web" ]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1549710106/meu-html-e-semantico-e-o-seu_yzebjz.jpg"
title: "Meu Html E Semantico E O Seu"
url: "/meu-html-e-semantico-e-o-seu"
---

A quantidade de sites e páginas na *web* crescem dia após dia, mas, junto com o crescimento da web também cresce os padrões, técnicas e principalmente melhores práticas de desenvolvimento. Uma dessas práticas que foi adicionada para a *web* seria dar semântica (sentido) á nossas páginas, hoje por exemplo leitores de tela conseguem saber o que significa cada pedaço de nosso site, mas, quando começou essa ideia?

## Porque ter um HTML semântico?

Possuír um HTML bem escrito e com uma boa semântica, hoje é fundamental para a maioria (senão todos) dos sites e aplicações *web* (*webapp's*), além de conseguir melhores posições no *rank* da Google, sendo assim, melhorando o SEO do site (assunto para um próximo *post*), também ajudamos pessoas com deficiência, ou seja, estamos pensando também em acessibilidade.

## Porque um site deve ser acessível?

Imagine o seguinte: Será que você conseguiria utilizar um site de olhos fechados? Uhm.... Difícil né (para quem não está acostumado), mas existem muitas pessoas que fazem o uso de sites dessa maneira, com ajuda de um leitor de tela eles conseguem navegar em sites de forma tranquila e simples, a ideia é que o leitor "diga" para eles o que trata-se de cada pedaço e tag do nosso site, assim, um site cheio de `div` ficará difícil de ser utilizado, pois o leitor não irá entender e nosso usuário será prejudicado.

## Dando semântica á um site

Para exemplo do *post* vamos utilizar o seguinte *layout*.

```markup
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>HTML Semântico</title>
</head>
<body>
    <div>
        <div>Meu Blog</div>
        <div>
            <div>Página inicial</div>
            <div>Categorias</div>
            <div>Contato</div>
            <div>Sobre mim</div>
        </div>
    </div>
    <div>
        <div>
            <div>
                <div>
                    <div>
                        <div>Meu post</div>
                        <div>Postado em 17/05/2018</div>
                    </div>
                    <div>Conteudo do post...</div>
                    <div>
                        <div>Continuar lendo</div>
                        <div>
                            <div>Tag 1</div>
                            <div>Tag 2</div>
                            <div>Tag 3</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div>Meu primero post</div>
            <div>Meu segundo post</div>
            <div>Meu terceiro post</div>
            <div>Meu quarto post</div>
            <div>Meu quinto post</div>
        </div>
    </div>
    <div>
        <div>
            <div>Facebook</div>
            <div>Google Plus</div>
            <div>Twitter</div>
        </div>
    </div>
</body>
</html>
```

Perceba que o site está completo de `div`, fica difícil até para nós desenvolvedores saber o que se trata cada pedaço do código. Vamos melhorá-lo?

### Refatorando o cabeçalho

Nesse momento vamos focar no cabeçalho, portanto, repare o seguinte trecho de código:

```markup
<div>
	<div>Meu Blog</div>
	<div>
		<div>Página inicial</div>
		<div>Categorias</div>
		<div>Contato</div>
		<div>Sobre mim</div>
	</div>
</div>
```

Acredito ter uma grande possibilidade de corresponder ao nosso cabeçalho, mas, o que podemos melhorar? Sabemos que as *tag's* devem ser escritas em inglês e sabemos que esse trecho trata-se do cabeçalho, sendo assim, podemos definir a tag *header* (uma das traduções de cabeçalho) para esse pequeno trecho.

```markup
<header>
	<div>Meu Blog</div>
	<div>
		<div>Página inicial</div>
		<div>Categorias</div>
		<div>Contato</div>
		<div>Sobre mim</div>
	</div>
</header>
```

Certo, agora acredito que `Meu Blog` seja o título (`h1`) e os demais referense a navegação (`nav`) do site, refatorando teremos algo parecido com:

```markup
<header>
	<h1>Meu Blog</h1>
	<nav>
		<ul>
			<li><a href="/">Página inicial</a></li>
			<li><a href="/categorias">Categorias</a></li>
			<li><a href="/contato">Contato</a></li>
			<li><a href="/sobre-mim">Sobre mim</a></li>
		</ul>
	</nav>
</header>
```

Como `Meu Blog` é o título principal do site, defini o mesmo como `h1` (podendo ir até 6, ou seja, de `h1` á `h6`). Para a navegação adicionei a tag `nav` (abreviação de *navigation*), dentro dela contém uma lista não ordenada (`ul`), pois, nesse momento a ordenação não faz sentido, a lista contém vários itens (`li`) que possuem *link's* (`a`) para outras páginas.

Veja como ficou muito melhor, apenas de olhar sabemos o que significa cada parte.

### Refatorando o conteúdo principal

Essa parte sem dúvida será a mais chata, precisamos refatorar o conteúdo principal, nesse momento iremos dar mais sentido ao site, o processo será semelhante ao anterior, precisamos identificar o que "deve" ser referente ao conteúdo principal e de pouco em pouco trocar suas `div's` por *tag's* mais semânticas, que trazem mais sentido para aquele contexto.

Conversando com o desenvolvedor responsável do site, ele me informou que o conteúdo principal seria esse trecho:

```markup
<div>
	<div>
		<div>
			<div>
				<div>
					<div>Meu post</div>
					<div>Postado em 17/05/2018</div>
				</div>
				<div>Conteudo do post...</div>
				<div>
					<div>Continuar lendo</div>
					<div>
						<div>Tag 1</div>
						<div>Tag 2</div>
						<div>Tag 3</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div>
		<div>Meu primero post</div>
		<div>Meu segundo post</div>
		<div>Meu terceiro post</div>
		<div>Meu quarto post</div>
		<div>Meu quinto post</div>
	</div>
</div>
```

Já repetimos uma pequena palavra várias vezes, sendo ela: "**principal**", novamente, realizando a tradução para o inglês teremos como uma das opções: `main` e é exatamente essa tag utilizada para informar o conteúdo principal de um site:

```markup
<main>
	<div>
		<div>
			<div>
				<div>
					<div>Meu post</div>
					<div>Postado em 17/05/2018</div>
				</div>
				<div>Conteudo do post...</div>
				<div>
					<div>Continuar lendo</div>
					<div>
						<div>Tag 1</div>
						<div>Tag 2</div>
						<div>Tag 3</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div>
		<div>Meu primero post</div>
		<div>Meu segundo post</div>
		<div>Meu terceiro post</div>
		<div>Meu quarto post</div>
		<div>Meu quinto post</div>
	</div>
</main>
```

Dentro da tag `main` vemos que segue uma seção de *post's*, logo, para seção temos a tag `section`:

```markup
<main>
	<section>
		<div>
			<div>
				<div>
					<div>Meu post</div>
					<div>Postado em 17/05/2018</div>
				</div>
				<div>Conteudo do post...</div>
				<div>
					<div>Continuar lendo</div>
					<div>
						<div>Tag 1</div>
						<div>Tag 2</div>
						<div>Tag 3</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<div>
		<div>Meu primero post</div>
		<div>Meu segundo post</div>
		<div>Meu terceiro post</div>
		<div>Meu quarto post</div>
		<div>Meu quinto post</div>
	</div>
</main>
```

Agora estamos na seção de *post's*, mas, afinal o que seria um *post*? Uma das traduções para ele poderia ser um artigo e sabemos que artigo em inglês pode ser escrito como `article`, será que existe essa *tag* HTML? Sim e nesse momento ela faz todo sentido.

```markup
<section>
	<article>
		<div>
			<div>Meu post</div>
			<div>Postado em 17/05/2018</div>
		</div>
		<div>Conteudo do post...</div>
		<div>
			<div>Continuar lendo</div>
			<div>
				<div>Tag 1</div>
				<div>Tag 2</div>
				<div>Tag 3</div>
			</div>
		</div>
	</div>
</section>
```

Legal, uma pergunta, do que um artigo é composto? Se você pesquisar na *web* ou já tiver lido alguns artigos deve ter notado uma pequena semelhança, sendo ela:

- Um cabeçalho com título e data.
- O conteúdo do artigo.
- Um rodapé com um link para continuar lendo e palavras chave.

Pois é, esse tipo de artigo é muito utilizado nos *blog's* (o que você está lendo no momento segue esse padrão), sabendo dessas definições vamos a refatoração:

```markup
<article>
	<header>
		<div>Meu post</div>
		<div>Postado em 17/05/2018</div>
	</header>
	<div>Conteudo do post...</div>
	<div>
		<a href="/meu-post">Continuar lendo</a>
		<ul>
			<li>Tag 1</li>
			<li>Tag 2</li>
			<li>Tag 3</li>
		</ul>
	</div>
</article>
```

As *tag's* que já foram faladas e utilizadas não irei explicar ou abordar novamente o seu uso, vamos precisar conhecer novas *tag's* para continuar a refatoração do artigo.

Dentro do cabeçalho (*header*) temos um título e uma data, sabemos que para títulos utilizamos `h[1-6]`, nesse momento não podemos definir o `h1`, porque ele já foi utilizado para definir o título principal do site, sobrando a segunda opção: `h2`.

```markup
<article>
	<header>
		<h2>Meu post</h2>
		<div>Postado em 17/05/2018</div>
	</header>
	<div>Conteudo do post...</div>
	<div>
		<a href="/meu-post">Continuar lendo</a>
		<ul>
			<li>Tag 1</li>
			<li>Tag 2</li>
			<li>Tag 3</li>
		</ul>
	</div>
</article>
```

Show de bola, agora referente ao cabeçalho do artigo falta apenas definir a data, para isso, temos a tag `time`:

```markup
<article>
	<header>
		<h2>Meu post</h2>
		<time datetime="2018-05-17">Postado em 17/05/2018</time>
	</header>
	<div>Conteudo do post...</div>
	<div>
		<a href="/meu-post">Continuar lendo</a>
		<ul>
			<li>Tag 1</li>
			<li>Tag 2</li>
			<li>Tag 3</li>
		</ul>
	</div>
</article>
```

Veja que a *tag* `time` recebe um atributo chamado `datetime`, nele devemos informar a data do artigo no formato americano.

O conteúdo do *post* vou deixar como uma `div` mesmo, agora precisamos definir o rodapé, novamente traduzindo para o inglês, uma das possibilidades seria `footer`, é exatamente essa *tag* que informa rodapés em sites:

```markup
<article>
	<header>
		<h2>Meu post</h2>
		<time datetime="2018-05-17">Postado em 17/05/2018</time>
	</header>
	<div>Conteudo do post...</div>
	<footer>
		<a href="/meu-post">Continuar lendo</a>
		<ul>
			<li>Tag 1</li>
			<li>Tag 2</li>
			<li>Tag 3</li>
		</ul>
	</footer>
</article>
```

Maravilha, nossa seção de *post's* está concluída e refatorada, o código completo ficou:

```markup
<section>
	<article>
		<header>
			<h2>Meu post</h2>
			<time datetime="2018-05-17">Postado em 17/05/2018</time>
		</header>
		<div>Conteudo do post...</div>
		<footer>
			<a href="/meu-post">Continuar lendo</a>
			<ul>
				<li>Tag 1</li>
				<li>Tag 2</li>
				<li>Tag 3</li>
			</ul>
		</footer>
	</article>
</section>
```

Continuando com o conteúdo principal, temos outro trecho além da seção de *post's*, sendo ele:

```markup
<div>
	<div>Meu primero post</div>
	<div>Meu segundo post</div>
	<div>Meu terceiro post</div>
	<div>Meu quarto post</div>
	<div>Meu quinto post</div>
</div>
```

Na minha opinião, esse trecho, deve ser uma lista com os últimos *post's* ou *post's* recentes feito no blog, aquelas navegações que ficam geralmente em um dos lados da página, mais comúm ao lado direito, já sabemos como definir uma lista de navegação:

```markup
<div>
	<ul>
		<li><a href="/meu-primeiro-post">Meu primero post</a></li>
		<li><a href="/meu-segundo-post">Meu segundo post</a></li>
		<li><a href="/meu-terceiro-post">Meu terceiro post</a></li>
		<li><a href="/meu-quarto-post">Meu quarto post</a></li>
		<li><a href="/meu-quinto-post">Meu quinto post</a></li>
	</ul>
</div>
```

Legal, temos nossa lista feita, mas, será que podemos utilizar a *tag* `nav`? Já utilizamos ela na navegação do site, nesse momento, trata-se de algo não tão importante para a página, ou seja, é algo que fica ali de lado, com pouco impacto ao sentido global do site.

Certo, pensando nisso como "uma parte de lado" ou "a parte de lado", realizando o processo de tradução teríamos como uma das possibilidades: `aside`, é exatamente a tag que vamos definir para esse contexto lateral, sem tanta importância relativo ao conteúdo principal:

```markup
<aside>
	<ul>
		<li><a href="/meu-primeiro-post">Meu primero post</a></li>
		<li><a href="/meu-segundo-post">Meu segundo post</a></li>
		<li><a href="/meu-terceiro-post">Meu terceiro post</a></li>
		<li><a href="/meu-quarto-post">Meu quarto post</a></li>
		<li><a href="/meu-quinto-post">Meu quinto post</a></li>
	</ul>
</aside>
```

Maravilha, finalizamos o conteúdo principal do site, o trecho completo ficou da seguinte maneira:

```markup
<main>
	<section>
		<article>
			<header>
				<h2>Meu post</h2>
				<time datetime="2018-05-17">Postado em 17/05/2018</time>
			</header>
			<div>Conteudo do post...</div>
			<footer>
				<a href="/meu-post">Continuar lendo</a>
				<ul>
					<li>Tag 1</li>
					<li>Tag 2</li>
					<li>Tag 3</li>
				</ul>
			</footer>
		</article>
	</section>
	<aside>
		<ul>
			<li><a href="/meu-primeiro-post">Meu primero post</a></li>
			<li><a href="/meu-segundo-post">Meu segundo post</a></li>
			<li><a href="/meu-terceiro-post">Meu terceiro post</a></li>
			<li><a href="/meu-quarto-post">Meu quarto post</a></li>
			<li><a href="/meu-quinto-post">Meu quinto post</a></li>
		</ul>
	</aside>
</main>
```

Veja a diferença, apenas de ler o HTML já conseguimos imaginar o site.

### Refatorando o rodapé

Por último, nos sobrou o rodapé do site:

```markup
<div>
	<div>
		<div>Facebook</div>
		<div>Google Plus</div>
		<div>Twitter</div>
	</div>
</div>
```

Repare que trata-se apenas de uma lista com redes sociais, nesse momento, já sabemos definir um rodapé e uma lista de *link's*:

```markup
<footer>
	<ul>
		<li><a href="/meu-perfil-do-facebook">Facebook</a></li>
		<li><a href="/meu-perfil-do-google-plus">Google Plus</a></li>
		<li><a href="/meu-perfil-do-twitter">Twitter</a></li>
	</ul>
</footer>
```

E voalá, temos nosso `footer` também refatorado.

Finalmente temos um HTML semântico, o resultado da nossa refatoração foi:

```markup
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>HTML Semântico</title>
</head>
<body>
    <header>
        <h1>Meu Blog</h1>
        <nav>
            <ul>
                <li><a href="/">Página inicial</a></li>
                <li><a href="/categorias">Categorias</a></li>
                <li><a href="/contato">Contato</a></li>
                <li><a href="/sobre-mim">Sobre mim</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section>
            <article>
                <header>
                    <h2>Meu post</h2>
                    <time datetime="2018-05-17">Postado em 17/05/2018</time>
                </header>
                <div>Conteudo do post...</div>
                <footer>
                    <a href="/meu-post">Continuar lendo</a>
                    <ul>
                        <li>Tag 1</li>
                        <li>Tag 2</li>
                        <li>Tag 3</li>
                    </ul>
                </footer>
            </article>
        </section>
        <aside>
            <ul>
                <li><a href="/meu-primeiro-post">Meu primero post</a></li>
                <li><a href="/meu-segundo-post">Meu segundo post</a></li>
                <li><a href="/meu-terceiro-post">Meu terceiro post</a></li>
                <li><a href="/meu-quarto-post">Meu quarto post</a></li>
                <li><a href="/meu-quinto-post">Meu quinto post</a></li>
            </ul>
        </aside>
    </main>
    <footer>
        <ul>
            <li><a href="/meu-perfil-do-facebook">Facebook</a></li>
            <li><a href="/meu-perfil-do-google-plus">Google Plus</a></li>
            <li><a href="/meu-perfil-do-twitter">Twitter</a></li>
        </ul>
    </footer>
</body>
</html>
```

Agora, veja que apenas de ler o código HTML já conseguimos imaginar o site, tudo faz sentido, tudo tem nome, ficou muito mais simples tanto para nos desenvolvedores dar manutenção como para os leitores de tela passarem ainformações sobre o site aos usuários com deficiências.

## Conclusão

Nesse *post* falei um pouco sobre HTML semântico, a maioria das *tag's* utilizadas no processo de refatoração foram introduzidas na versão 5 do HTML, chamamos essa versão de HTML5, também destacamos as vantagens de ter um site semântico, sendo elas:

1. Melhoria na qualidade de SEO do site (posicionamento no rank de pesquisa da Google)
2. Leitores de tela saberão e conseguirão ler nosso site para usuários com deficiência.
3. Facilidade na manutenção e entendimento do código.

E aí, gostou? Você já conhecia as *tag's* utilizadas ao decorrer do *post*? Não deixe de comentar e assinar a [*newsletter*](http://eepurl.com/ggP7Rv) para receber novidades por email.

Até a próxima.
