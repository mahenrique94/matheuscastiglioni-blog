---
autor: "Matheus Castiglioni"
categoria: "PHP"
disqus_identifier: "criando-meu-primeiro-site-com-laravel"
disqus_title: "Criando Meu Primeiro Site Com Laravel"
disqus_url: "https://blog.matheuscastiglioni.com.br/criando-meu-primeiro-site-com-laravel"
date: 2018-05-29T09:20:59-02:00
draft: false
keywords: [ "Artisan", "Back-End", "Frameworks", "Laravel", "Web" ]
slug: "criando-meu-primeiro-site-com-laravel"
tag: [ "Artisan", "Back-End", "Frameworks", "Laravel", "Web" ]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1549708951/criando-meu-primeiro-site-com-laravel_cjftaf.png"
title: "Criando Meu Primeiro Site Com Laravel"
url: "/criando-meu-primeiro-site-com-laravel"
---

Criar novos sites muitas vezes pode ser uma tarefa complicada e chata, precisa-se definir várias configurações e *set-ups* iniciais para o projeto. Com PHP isso tornou-se muito simples e fácil graças ao *framework* chamado [Laravel](http://laravel.com/).

## Conheça o Laravel

O Laravel como já foi dito, é um *framework* para desenvolvimento de sites ou aplicações que utiliza a linguagem PHP, ele segue o padrão MVC (*Model, View and Controller*), padrão muito famoso no mundo Java. Com o Laravel conseguimos ter uma ótima organização e separação de código, além de muitas outras vantagens e recursos.

## Instalando o Laravel

Podemos facilmente realizar a instalação do Laravel utilizando o [Composer](https://getcomposer.org/) através do comando:

```bash
composer global require "laravel/installer"
```

**Obs:** Para você que não conhece o Composer, ele é um gerenciador de dependência do PHP.

Certifique-se que a instalação ocorreu de forma correta e você exportou o Laravel para o seu `$PATH` (se necessário) utilizando o comando:

```bash
laravel -v
```

Onde a versão do Laravel que foi instalada deve ser mostrada.

![Verificando a versão do Laravel instalada](https://res.cloudinary.com/mahenrique94/image/upload/v1549709009/verificando-versao-laravel-instalada_vbpl5u.png)

## Criando meu site com Laravel

Após ter o Laravel instalado podemos começar a utilizá-lo, para criarmos um novo projeto seja um site ou aplicação devemos utilizar o comando `new`, seguido pelo nome do projeto, por exemplo:

```bash
laravel new meu-primeiro-site
```

Aguarde o Composer realizar o *download* e configurar todas as dependências do projeto (isso pode demorar um pouco, depende da sua *internet*).

Ao término das configurações uma pasta com o nome do projeto deve ter sido criada no local onde você rodou o comando `new`, no nosso caso, uma pasta chamada `meu-primeiro-site` foi criada. Abrindo essa pasta em um editor de código (por exemplo o [VS Code](https://code.visualstudio.com/)) podemos ver a seguinte estrutura:

![Estrutura de um projeto Laravel](https://res.cloudinary.com/mahenrique94/image/upload/v1549709058/estrutura-do-primeiro-site-laravel_ww92h9.png)

Sim, note que tem bastante pastas e arquivos (não irei explicar um por um para não perder o foco do *post*), essa é a estrutura padrão de um projeto criado com Laravel, cada pasta e arquivo tem sua finalidade (assunto para um próximo *post*).

## Subindo meu primeiro site

Assim como todos os outros *cli*, o Laravel também possuí um comando para subir o servidor do projeto, podemos fazer isso utilizando o comando:

```bash
php artisan serve
```

Onde devemos ter a seguinte resposta:

![Resposta do servidor rodando](https://res.cloudinary.com/mahenrique94/image/upload/v1549709108/subindo-projeto-com-laravel_udaz9j.png)

Basicamente a resposta está dizendo:

> Seu servidor Laravel de desenvolvimento está rodando localmente (127.0.0.1) na porta 8000, para acessar o projeto vá até o endereço http://127.0.0.1:8000 em seu navegador.

Também podemos acessar via `http://localhost:8000`, pois, `localhost` seria como um "DNS" (apelido) para o IP 127.0.0.1.

Acessando o seguinte endereço em nosso navegador devemos ver algo parecido com:

![Site padrão criado pelo Laravel](https://res.cloudinary.com/mahenrique94/image/upload/v1549709162/pagina-padrao-laravel_cue5du.png)

Essa é a página padrão criada para todo projeto Laravel.

### Saiba mais

Subir o servidor e acessar nosso projeto foi muito simples, isso porque o Laravel vem com um servidor embutido dentro do projeto, dessa maneira, quando rodamos o comando `php artisan serve`, o Laravel está subindo esse servidor, pegando nosso projeto e disponilizando dentro desse servidor que acabou de ser subido.

Um detalhe importante é que você não utilize esse servidor em produção, o mesmo deve ser usado somente para desenvolvimento.

Também poderíamos utilizar o [Apache](https://www.apache.org/) para acessar nosso projeto (geralmente utilizado em produção).

## Criando meu Hello World

Ainda com o servidor rodando, vamos abrir o arquivo `welcome.blade.php` localizado em `resources/views` á partir da raiz de nosso projeto, sendo assim, o caminho completo para o arquivo é: `meu-primeiro-site/resources/views/welcome.blade.php`, apague todo o conteúdo da *tag* `body`:

```markup
<div class="flex-center position-ref full-height">
	@if (Route::has('login'))
		<div class="top-right links">
			@auth
				<a href="{{ url('/home') }}">Home</a>
			@else
				<a href="{{ route('login') }}">Login</a>
				<a href="{{ route('register') }}">Register</a>
			@endauth
		</div>
	@endif

	<div class="content">
		<div class="title m-b-md">
			Laravel
		</div>

		<div class="links">
			<a href="https://laravel.com/docs">Documentation</a>
			<a href="https://laracasts.com">Laracasts</a>
			<a href="https://laravel-news.com">News</a>
			<a href="https://forge.laravel.com">Forge</a>
			<a href="https://github.com/laravel/laravel">GitHub</a>
		</div>
	</div>
</div>
```

Calma, não se assuste com o tanto de código, foque apenas na *tag* `body` e seu conteúdo, após apagar o conteúdo padrão (trecho de código acima), adicione um simples título de `Hello World`:

```markup
<h1>Hello World</h1>
```

Salve seu arquivo, vá até o navegador no endereço local do projeto e recarregue a página:

![Meu Hello World com Laravel](https://res.cloudinary.com/mahenrique94/image/upload/v1549709243/hello-world-com-laravel_pfak37.png)

Veja que temos nosso `Hello World` feito com Laravel.

### Saiba mais

Não houve a necessidade parar e subir o servidor porque o Laravel por padrão já vem com o sistema de *live reloading*, portanto, qualquer modificação feita nos arquivos será automáticamente aplicada em nosso projeto que está rodando.

Se você reparou no nome do arquivo que mexemos, deve ter notado que a extensão do arquivo é `.blade.php`, O [Blade](https://laravel.com/docs/5.6/blade) é um motor (*engine*) para *templates* (assunto para um próximo *post*), com ele temos muitos recursos dentro de nosso HTML que não seria possível apenas com `.php`.

## Conclusão

Nesse *post* criamos um simples site do zero em PHP utilizando o *framework* Laravel, com poucos comandos já tinhamos nosso site configurado e rodando.

E aí, você já conhecia o Laravel? Não deixe de comentar e assinar a [*newsletter*](http://eepurl.com/ggP7Rv) para receber nossas novidades por email.

Espero que tenha gostado, até a próxima.

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
