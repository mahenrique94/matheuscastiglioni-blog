---
autor: "Matheus Castiglioni"
categoria: "Infra"
disqus_identifier: "criando-minha-primeira-imagem-com-docker"
disqus_title: "Criando Minha Primeira Imagem Com Docker"
disqus_url: "https://blog.matheuscastiglioni.com.br/criando-minha-primeira-imagem-com-docker"
date: 2018-04-18T08:20:03-02:00
draft: false
keywords: [ "Docker", "Dockerfile", "Container", "Imagem" ]
slug: "criando-minha-primeira-imagem-com-docker"
tag: [ "Docker", "Dockerfile", "Container", "Imagem" ]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1549711600/criando-minha-primeira-imagem-com-docker_ejl0uf.png"
title: "Criando Minha Primeira Imagem Com Docker"
url: "/criando-minha-primeira-imagem-com-docker"
---

Um dos primeiros *post* do blog, foi exatamente sobre [Docker](https://www.docker.com/), no *post* [Começando com Docker](http://blog.matheuscastiglioni.com.br/comecando-com-docker) eu explico um pouco mais sobre a parte teórica, perguntas como:

- O que é Docker?
- Porque utilizá-lo?
- O que é uma imagem?
- O que é um container?

Podem ser respondidas com a leitura do *post*, se você não tem conhecimento sobre o assunto, recomendo que o leia antes de prosseguir com a leitura atual desse *post*.

Muitas vezes vamos precisar modificar uma imagem oficial, seja para adicionar ou modificar algum arquivo dentro da imagem, mudar a configuração de um determinado serviço ou mudar o comando executado durante o processo de criação de nosso container, mas, como podemos fazer essas modificações? Podemos realizar a criação da nossa própria imagem através do arquivo [Dockerfile](https://docs.docker.com/engine/reference/builder/), ele é o responsável por criar as imagens no Docker, é nele que definimos todas as regras e informações (instruções) que serão contidas dentro das imagens.

## O que é Dockerfile?

Conforme foi dito anteriormente, o `Dockerfile` é um arquivo responsável por realizar a criação e construção de imagens no Docker, dentro dele são definidas instruções que o Docker deve seguir para conseguir realizar a criação de uma imagem. Essas instruções são interpretadas linha a linha pelo motor do Docker.

Para definir as regras e informações (instruções) que a imagem terá, devemos utilizar comandos que o Dockerfile entenda, de forma simplista, podemos dizer que é parecido com uma linguagem onde devemos respeitar sua sintaxe e seus comandos existentes.

Sabendo disso, qualquer informação ou comando inexistente para o Docker, irá gerar um erro durante a criação da imagem.

## Entendendo o problema

Antes de começarmos a criação de nosso Dockerfile, vamos entender o que precisamos dizer para ele, ou seja, quais serão as regras e informações necessárias para a criação de nossa imagem. Sabendo da nossa necessidade que é subir um site, vou definir os seguintes passos necessários para a construção da imagem:

1. Definir uma imagem oficial como base para ser modificada.
2. Definir informações para a imagem (versão, descrição e autor/responsável).
3. Criar a pasta onde serão enviados os arquivos carregados pelo site.
4. Copiar o site para a imagem.
5. Mapear uma pasta onde serão salva as imagens do site.
5. Definir em qual porta o site irá rodar.
6. Setar algumas variáveis de ambiente utilizadas no site.
7. Definir qual será a pasta de trabalho da imagem (pasta que irá conter o site).
8. Subir o NGINX para deixar o site no ar.

Pronto, já sabemos tudo o que precisamos para criar nossa imagem e deixar o site no ar utilizando o Docker, agora, o que precisamos fazer é simplesmente definir esses passos em nosso `Dockerfile`.

## Criando nosso primeiro Dockerfile

O primeiro passo é o mais simples, será criar um arquivo chamado `Dockerfile` (sim, o mesmo não deve ter extensão) em alguma pasta no seu computador. Após a criação do mesmo, abra-o no editor de texto de sua preferência para que possamos começar a definir nossas regras e informações (instruções).

### Definir uma imagem oficial como base para ser modificada

Podemos definir uma imagem base (á ser modificada) através da instrução `FROM` seguida pelo nome da imagem que queremos utilizar:

```docker
FROM nginx
```

Assim já definirmos qual imagem iremos modificar, ou seja, usaremos a imagem do NGINX como base para criar a nossa personalizada.

### Definir informações para a imagem (versão, descrição e autor)

Para definir informações sobre a nossa imagem, devemos utilizar a instrução `LABEL` seguida pelas informações à serem adicionadas na imagem.

```docker
LABEL version="1.0.0" description="Disponibilizando site com NGINX" maintainer="Matheus Castiglioni<matheushcastiglioni@gmail.com>"
```

Legal, definimos as informações que eram necessárias, sendo elas: Versão (*version*), descrição (*description*) e autor/responsável (*maintainer*).

#### Saiba mais

Em alguns Dockerfile's você pode e deve encontrar a instrução `MAINTAINER`, porém, a mesma foi depreciada e está em desuso, sendo substituída pela instrução `LABEL maintainer=VALOR`.

### Criar a pasta onde serão enviados os arquivos carregados pelo site

Precisamos agora, criar uma pasta onde serão salvas as imagens que forem enviadas pelo site, ou seja, os *uploads* que os usuários realizarem, para isso, podemos utilizar a instrução `RUN`, ela é responsável por executar comandos conhecidos pelo `shell` ou `linux`.

```docker
RUN cd / && mkdir Arquivos && chmod 777 -R Arquivos/
```

Veja que estamos executando comandos normais do Linux, primeiro navegamos até a raiz (parecido com o C: do Windows) do computador (`cd /`), criamos uma pasta chamada Arquivos (`mkdir Arquivos`) e por fim damos permissão total de leitura e escrita para ela (`chmod 777 -R Arquivos/`).

Essa pasta será responsável por armazenar as fotos do site.

### Copiar o site para a imagem

Sabemos que o NGINX armazena os seus sites no seguinte caminho: `/usr/share/nginx/html`, então, é dentro desse caminho (*path*) que vamos substituir o `index.html` padrão do NGINX pelo nosso. Para fazermos isso, precisamos copiar o arquivo `index.html` de nosso site para dentro da imagem (no caminho mencionado anteriormente), podemos fazer isso utilizando a instrução `COPY` passando o nome do arquivo ou pasta que pretendemos copiar seguida pelo caminho onde as mesmas devem ser copiadas:

```docker
COPY ./site/index.html /usr/share/nginx/html/
```

Repare que estamos copiando o arquivo `index.html` localizado dentro da pasta `site`, para o caminho do NGINX dentro da imagem, ou seja, estamos copiando o nosso `index.html` por cima do `/usr/share/nginx/html/index.html` padrão do NGINX.

**Obs**: Não é necessário informar o `./`, porém, particularmente eu prefiro utilizá-lo, pois assim fica mais explícito para quem ler o `Dockerfile` que a pasta `site` deve estar no mesmo caminho (*path*) onde se encontra o `Dockerfile`, em outras palavras, o `./` pode ser interpretado como: "Diretório atual".

### Mapear uma pasta onde serão salva as imagens do site

Criamos uma pasta onde os arquivos serão salvos, porém, se deixarmos tudo dentro da imagem e posteriormente dentro do container, quando o mesmo for removido e criado novamente, todas as imagens serão perdidas.

Precisamos de alguma maneira salvar os arquivos em nossa máquina física, assim, se o container deixar de existir e for criado novamente, o mesmo irá buscar as imagens dentro de nossa máquina. Para isso podemos utilizar a instrução `VOLUME`:

```docker
VOLUME /Arquivos/
```

Assim, a imagem irá pegar a pasta que criamos e montar um volume para ela, assim, conseguimos realizar o mapeamento de uma pasta localizada dentro do container para a nossa máquina *host*, devemos especificar a pasta da máquina*host* durante a criação do container.

### Definir em qual porta o site irá rodar

Por padrão o NGINX sobe na porta 80, então devemos deitar explícito no Dockerfile que alguém pode utilizar essa porta para conectar em nosso site, podemos fazer isso utilizando a instrução `EXPOSE`.

```docker
EXPOSE 80
```

**Obs**: Lembrando que a instrução `EXPOSE` não faz o mapeamento de porta, apenas deixa explícito que uma determinada porta pode ser mapeada durante a criação do container que utilizar essa imagem.

### Setar algumas variáveis de ambiente utilizadas no site

Nosso site utiliza algumas váriaveis de ambiente, podemos definí-las utilizando a instrução `ENV`:

```docker
ENV API_URL=http://localhost:8000/api/
ENV API_BANCO=meu_site
```

Veja que precisamos informar o nome da váriavel e passar um valor padrão para ela, caso nada seja informado durante a criação do container, o valor das variáveis serão os padrões definidos no `Dockerfile`.

### Definir qual será a pasta de trabalho a imagem (pasta que irá conter o site)

Precisamos definir a pasta de trabalho de nosso container, ela é a pasta que será direcionado quando acessarmos nosso container, para fazer isso podemos utilizar a instrução `WORKDIR` passando a pasta:

```docker
WORKDIR /usr/share/nginx/html/
```

Estamos definindo a pasta do NGINX como nossa pasta de trabalho, agora sempre que acessarmos nosso containter, estaremos no caminho e na pasta específicada acima.

### Subir o NGINX para deixar o site no ar

Após realizar todos os passos e regras definidas em nosso `Dockerfile`, devemos finalmente subir o NGINX para que o container fique rodando e nosso site esteja no ar, para isso, podemos utilizar a instrução `CMD` e `ENTRYPOINT`:

```docker
ENTRYPOINT ["/usr/sbin/nginx"]
CMD ["-g", "daemon off;"]
```

A instrução `ENTRYPOINT` define um caminho onde o comando informado em `CMD` deve ser executado, assim, uma linha completa a outra, o comando final para subir o container será: `/usr/sbin/nginx -g daemon off;`, estamos simplesmente iniciando o NGINX.

Legal, já finalizamos todos os nossos passos e o arquivo `Dockerfile` está pronto com as instruções necessários para nosso site estar no ar, caso você tenha se perdido em algum passo, segue o arquivo final:

```docker
FROM nginx
LABEL version="1.0.0" description="Disponibilizando site com NGINX" maintainer="Matheus Castiglioni<matheushcastiglioni@gmail.com>"
RUN cd / && mkdir Arquivos && chmod 777 -R Arquivos/
COPY ./site/index.html /usr/share/nginx/html/
VOLUME /Arquivos/
EXPOSE 80
ENV API_URL=http://localhost:8000/api/
ENV API_BANCO=meu_site
WORKDIR /usr/share/nginx/html/
ENTRYPOINT ["/usr/sbin/nginx"]
CMD ["-g", "daemon off;"]
```

O conteúdo do `index.html` é bem simples (o propósito é apenas diferenciar o conteúdo do arquivo padrão do NGINX):

```markup
<html>
<body>
	<h1>Meu site com Docker</h1>
</body>
</html>
```

E agora, como podemos criar a nossa imagem á partir do nosso `Dockerfile`? Para isso vamos utilizar o comando `docker build`:

```bash
docker build -t mahenrique94/meu-site .
```

Passamos como parâmetro (argumento) o valor `-t` seguido pelo nome da imagem que pretendemos criar, e por último um `.` (local onde se localiza o `Dockerfile`), traduzindo para o português:

> Olha Docker, crie uma imagem (docker build) com o nome (-t) mahenrique94/meu-site a partir do Dockerfile localizado no diretória atual (.).

A informação referente ao usuário (do Docker Hub) não é obrigatória, apenas gosto de definir porque trata-se de uma imagem minha e se houver a necessidade de enviar essa imagem para o [Docker Hub](https://hub.docker.com/) o processo será mais simples, evitando a necessidade de criar *tags* para a imagem.

**Obs**: Lembre de rodar o comando acima no mesmo caminho onde se encontra o `Dockerfile`, assim como `site/index.html` também devee estar no mesmo caminho.

Após rodar o comando `build` se tudo ocorrer bem, sem nenhum erro, uma imagem com nome `mahenrique94/meu-site` será criada, com ela, já podemos criar nosso container e subir o nosso site:

```bash
docker run -d -p 80:80 --name meu-site -e API_URL=http://api.meusite.com.br/api/ -v $PWD/site/arquivos:/Arquivos/ mahenrique94/meu-site
```

Com isso o container já deve estar no ar, podemos testar acessando `http://localhost` e ver nosso arquivo `index.html` sendo mostrado:

![Testando container](https://res.cloudinary.com/mahenrique94/image/upload/v1549711679/testando-container-meu-site_a8ift1.png)

## Conclusão

Nesse *post* aprendemos a criar nosso primeiro `Dockerfile`, á partir dele criamos nossa imagem Docker e em seguida criamos o container, assim, conseguimos deixar nosso site no ar apenas utilizar o Docker.

Os exemplos do site foram simples, alguns passos até desnecessários, porém, realizados para que você pudesse ver e conhecer algumas das possíveis instruções permitidas pelo `Dockerfile`.

E aí, gostou? Não deixe de comentar e assinar a [*newsletter*](http://eepurl.com/ggP7Rv) para receber novidades por email.

Abraços, até a próxima \o/
