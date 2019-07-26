---
autor: "Matheus Castiglioni"
categoria: "Infra"
disqus_identifier: "comecando-com-docker"
disqus_title: "Comecando Com Docker"
disqus_url: "https://blog.matheuscastiglioni.com.br/comecando-com-docker"
date: 2017-08-28T06:21:52-02:00
draft: false
keywords: [ "Container", "Virtualização" ]
slug: "comecando-com-docker"
tag: [ "Container", "Virtualização" ]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1549727073/comecando-com-docker_xx0yg8.jpg"
title: "Comecando Com Docker"
url: "/comecando-com-docker"
---

# O que é Docker ?

O [Docker](https://www.docker.com/) é uma plataforma *open source* escrita na linguagem [Go](https://golang.org/) que facilita a criação e administração de ambientes isolados, criando uma virtualização simples, onde ele consegue isolar uma imagem e utilizar os recursos do *host*(máquina) principal, ou seja, a memória ou recursos do processador usado serão consumidos da máquina principal onde o Docker esta instalado, enquanto programas como VirtualBox criam um sistema operacional completo e isolado, tudo isso é possível através do velho conhecido [LXC](https://linuxcontainers.org/). Abaixo podemos ver uma imagem que diferencia o servidor de container em relação a virtualizações tradicionais:

![Container Docker](https://res.cloudinary.com/mahenrique94/image/upload/v1549727133/container-docker_iokdjh.jpg)

### Porque o docker é tão legal ?

O Docker possibilita o empacotamento de uma aplicação ou ambiente inteiro dentro de um container, e a partir desse momento o ambiente inteiro torna-se portável para qualquer outro Host que contenha o Docker instalado.

### Porque usar Docker ?

Abaixo irei falar alguns bons motivos para usar o Docker:

#### 1 - Ambientes semelhantes

Uma vez que sua aplicação seja transformada em uma imagem Docker, ela pode ser instanciada como container em qualquer ambiente que desejar. Isso significa que poderá utilizar sua aplicação no notebook do desenvolvedor da mesma forma que seria executada no servidor de produção.

#### 2 - Aplicação como pacote completo

Utilizando as imagens Docker é possível empacotar toda sua aplicação e dependências, facilitando a distribuição, pois não será mais necessário enviar uma extensa documentação explicando como configurar a infraestrutura necessária para permitir a execução, basta disponibilizar a imagem.

#### 3 - Padronização e replicação

Como as imagens Docker são construídas através de arquivos de definição, é possível garantir que determinado padrão seja seguido, aumentando a confiança na replicação.

#### 4 - Comunidade

Assim como é possível acessar o [Github](https://github.com/) ou [Gitlab](https://gitlab.com/) à procura de exemplos de código, usando o repositório de imagens do Docker é possível conseguir bons modelos de infraestrutura de aplicações ou serviços prontos para integrações complexas.

## O que é uma imagem ?

Pense em imagens como um *template* compostas por um sistema de camadas que ficam uma sobre as outras para rodar um container, elas são a nossa base para contrução de nossas aplicações.

Em uma imagem temos um sistema de inicialização chamado *bootfs*, que é muito parecido com o sistema de boot do Linux, a partir de imagens conseguimos criar nossos containers e com facilidade fazer a migração de sistema operacional ou ambiente de trabalho.

Você precisa baixar as imagens de algum repositório ou criá-las, as imagens ficam armazenados no [Dockerhub](https://hub.docker.com/).

## O que é um container ?

Containers são instâncias criadas à partir de imagens Docker, a virtualização por containers, proposta pelo LXC, ocorre de forma isolada, pois compartilha algumas partes do *kernel* do *host* onde o Docker esta instalado, disponibilizando a possibilidade de utilizar os recursos como memória ou processador da própria máquina, fazendo com que a sobrecarga seja menor comparado aos sistemas de virtualização.

Resumindo, containers são mais leves, já que não precisam de um ambiente virtual completo, pois o *kernel* do *host* proporciona total gerenciamento de memória, processador, entre outros. Tornando o processo de inicialização ou criação muito rápido, podendo ser feito em poucos segundos.

Com eles conseguimos encapsular um sistema inteiro dentro de uma estrutura de diretórios fazendo com que sistema hospedeiro não acesse nada daquilo que não é definido ou permitido dentro dessa arquitetura.

## O que é Docker Hub ?

O Docker Hub é o repositório oficial do Docker para as imagens, ele funciona de forma semelhante ao [git](https://git-scm.com/), conseguimos hospedar, baixar, procurar por imagens, também conta com uma documentação explicando a forma de usá-las.

![Docker Hub](https://res.cloudinary.com/mahenrique94/image/upload/v1549727165/docker-hub_qtlhiw.png)

### Como diferenciar uma imagem oficial de uma imagem não oficial ?

Algumas imagens são criadas por empresas ou organizações e são mantidas por elas, essas são imagens oficiais. As não oficiais são as que usuários comuns sobem para o repositóro.

Então como sabemos qual é uma imagem oficial ? É bem simples, observando a URL referente ao repositório da imagem.

#### Oficial

```
https://hub.docker.com/_/ORGANIZACAO/
```

Exemplos de organização: mysql, ubuntu, nginx, tomcat, apache, etc...

#### Não Oficial

```
https://hub.docker.com/r/USUARIO/NOME_REPOSITORIO/
```

**USUARIO**: É o nome do usuário que esta hospedando a imagem.

**NOME_REPOSITORIO**: É o nome que o usuário definiu ao criar o repositório para hospedar a sua imagem.

### Procurando imagens

Para procurar por uma imagem devemos usar o comando `search` seguido pelo nome da imagem que estamos desejando realizar a pesquisa:

```
docker search ubuntu
```

### Baixando imagens

Para baixar uma imagem devemos usar o comando `pull` seguido pelo nome da imagem que pretendemos baixar:

```
docker pull ubuntu
```

### Subindo imagens

Para subir uma imagem devemos primeiramente fazer o login de nossa conta no terminal usando o comando `login`:

```
docker login
```

Ao informar o comando o terminal irá pedir nosso usuário e senha, após fornecer os dados e de fato realizar o acesso a nossa conta podemos enviar a imagem para o repositório através do comando `push`:

```
docker push nome_da_imagem
```

### Deletando imagens

Para deletar uma imagem devemos usar  comando `rmi` seguido pelo meno da imagem ou seu ID:

```
docker rmi ubuntu
```

Enfim, esse foi apenas um post introdutório ao assunto, nos próximos tópicos irei mostrar como criar imagens e subir nossos containers, entre outros assuntos, até a próxima =).

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

##### Referências

- [Livro - Docker para desenvolvedores](https://leanpub.com/dockerparadesenvolvedores)
- [Livro - Containers com Docker](https://www.casadocodigo.com.br/products/livro-docker)
- [Mundo Docker - O que é docker ?](http://www.mundodocker.com.br/o-que-e-docker/)
- [Mundo Docker - O que é uma imagem ?](http://www.mundodocker.com.br/o-que-e-uma-imagem/)
- [Mundo Docker - O que é Container ?](http://www.mundodocker.com.br/o-que-e-container/)
- [William Oliveira - O que é uma imagem Docker...](https://woliveiras.com.br/posts/imagem-docker-ou-um-container-docker/)
