---
autor: "Matheus Castiglioni"
categoria: "Infra"
disqus_identifier: "manipulando-containers-com-docker-parte-01"
disqus_title: "Manipulando Containers Com Docker Parte 01"
disqus_url: "https://blog.matheuscastiglioni.com.br/manipulando-containers-com-docker-parte-01"
date: 2018-05-03T08:13:49-02:00
draft: false
keywords: [ "Container", "Docker" ]
slug: "manipulando-containers-com-docker-parte-01"
tag: [ "Container", "Docker" ]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1549710558/manipulando-containers-com-docker_bxjdfh.png"
title: "Manipulando Containers Com Docker Parte 01"
url: "/manipulando-containers-com-docker-parte-01"
---

Recentemente comecei uma série sobre [Docker](https://www.docker.com/), nesse *post* vou explicar e falar sobre os Containers, esse é o terceiro *post* da série, caso tenha perdido os dois primeiros, recomendo que faça a leitura deles antes de prosseguir:

- [Começando com Docker](http://blog.matheuscastiglioni.com.br/comecando-com-docker)
- [Criando minha primeira imagem com Docker](http://blog.matheuscastiglioni.com.br/criando-minha-primeira-imagem-com-docker)

## Entendendo os Containers

Containers são instâncias de [imagens Docker](http://blog.matheuscastiglioni.com.br/criando-minha-primeira-imagem-com-docker), eles são leves porque não precisam de um ambiente virtual completo, pois utiliza o *kernel* da máquina *host* (onde o Docker está instalado), através de containers conseguimos encapsular aplicações por completo, evitando a necessidade de diversas configurações para uma determinada aplicação estar no ar.

Para mais detalhes, configura o *post*: [Começando com Docker](http://blog.matheuscastiglioni.com.br/comecando-com-docker).

### Criando um container

Partindo da ideia que você já lêu o último *post* sobre Docker, onde foi explicado e exemplificado como trabalhar com imagens no Docker e personalizamos a imagem oficial do NGINX para criar nosso site de forma bem simples.

Mas apenas rodei o comando para criar e subir o container sem explicação, pois a ideia era apenas ver a imagem em funcionamento. Nesse *post* vou explicar um pouco mais dos possíveis comandos para a criação e manipulação de containers.

Para exemplificar o *post* vamos criar um blog utilizando [MySQL](https://www.mysql.com/) (parte 01) e [Wordpress](https://br.wordpress.com/) (parte 02).


### Configurando o banco de dados

#### Baixando a imagem

Para começarmos a criação do nosso blog, precisamos antes de mais nada do banco de dados, para  isso, vou utilizar o MySQL, o primeiro passo será baixar a imagem que pretendemos utilizar, podemos fazer isso através do comando `docker pull` passando o nome da imagem e *tag* (se necessário) que pretendemos baixar:

```bash
docker pull mysql:5.6
```

Com isso, estamos pedindo para o Docker baixar uma imagem chamada `mysql`, utilizando a tag `5.6`. Aguarde o processo de *download* ser finalizado.

**Obs**: Caso nenhuma *tag* seja passada, será feito o *download* da imagem mais recente, também chamada de *latest*.

Para visualizar as imagens que já foram baixadas e se encontram em sua máquina, utilize o comando `docker images`, uma lista de imagens devem ser mostradas. Para visualizar apenas imagens referente ao MySQL, podemos fazer:

```bash
docker images | grep mysql
```

#### Rodando o MySQL

Legal, já realizamos o *download* de nossa imagem, agora já podemos utilizá-la para criar um container, podemos fazer isso através do comando `docker run` passando o nome da imagem e *tag* (se necessário) que pretendemos subir:

```bash
docker run mysql:5.6
```

Assim, o comando `run` pega uma imagem e roda (*run*) ela, deixando-a no ar em execução.

Caso você tenha rodado o comando acima, deve ter notado que ocorreu um erro:

> error: database is uninitialized and password option is not specified

O que aconteceu? O MySQL exige que passamos uma senha para o usuário root ou que permitimos a utilização do mesmo sem senha.

Legal, sabendo disso, vamos definir uma senha para o usuário root, mas, como podemos fazer isso? A equipe do MySQL já pensou nisso durante a criação de sua imagem e disponibilizaram váriaveis de ambientes para certas configurações, uma delas é justamente informar a senha que o usuário root deve ter. Essa variável de ambiente é chamada `MYSQL_ROOT_PASSWORD`, mas como podemos passar valores para as variáveis durante e execução de um container? Podemos fazer isso através do parâmetro `-e` seguido pelo nome da variável e seu valor:

```bash
docker run -e MYSQL_ROOT_PASSWORD=root mysql:5.6
```

Agora já podemos rodar nosso container que o mesmo irá funcionar, assim, teremos o MySQL funcionando em nossa máquina.

Tudo certo? Errado! Ainda precisamos utilizar alguns recursos que o Docker nos oferece.

O comando acima do MySQL foi executado porém travou nossa tela no terminal, precisamos pedir para o container rodar e manter-se em funcionamento de forma transparente, ou seja, que o mesmo rode em *background*, podemos fazer isso passando o parâmetro `-d`:

```bash
docker run -d -e MYSQL_ROOT_PASSWORD=root mysql:5.6
```

Se tudo ocorrer bem, um *hash* deve ser mostrado após e execução do comando, caso queira ver os containers que estão rodando atualmente (em execução) utilize o comando `docker ps`, assim, algumas informações sobre os containers serão exibidas.

Caso você tenha reparado, o nosso container tinha um nome estranho, isso porque por padrão o Docker cria e escolhe um nome aleatório para nossos containers, porém, queremos nomear o mesmo como `mysql`, como podemos fazer isso? Para definir nomes (*names*) para nossos containers podemos utilizar o parâmetro `--name` seguido pelo nome:

```bash
docker run -d --name mysql -e MYSQL_ROOT_PASSWORD=root mysql:5.6
```

Agora executando novamente o comando `docker ps` podemos ver que o nome do container foi definido como `mysql`, exatamente da forma que queríamos.

Legal, nosso container está rodando, mas, como podemos pará-lo? Podemos parar nossos containers utilizando o comando `docker stop` seguido pelo nome ou ID do container (por isso é importante a utilização e definição do `--name`, assim, evitamos ter que ficar procurando ID's):

```bash
docker stop mysql
```

Rodando novamente o comando `docker ps` podemos ver que nada é exibido (isso se você apenas criou o container do mysql), mas, como podemos listar todos os containers, até mesmos os parados? Para isso, podemos passar o parâmetro `-a` de *all* (todos) para o comando `docker ps`.

```bash
docker ps -a
```

E nosso container deve estar na lista com *status* de EXITED. Se houver a necessidade de rodá-lo novamente podemos utilizar o comando `docker start` seguido pelo seu nome ou ID:

```bash
docker start mysql
```

Se você tentar rodar o comando `docker run` ao invés do `start` receberá um erro, pois o nome (*name*) de um container deve ser único, sendo assim, já possuímos um container chamado `mysql` (veremos mais á frente como resolver esse problema).

Legal, estamos quase lá, precisamos agora, fazer com que a porta (*port*) do container seja mapeada com a porta da nossa máquina, caso isso não seja feito, não será possível acessar o MySQL através de nossa máquina, pois o mesmo esta rodando apenas no container. Mas, como podemos fazer isso? Para essa necessidade, temos o parâmetro `-p` de *port* (porta):

```bash
docker run -d --name mysql -p 3306:3006 -e MYSQL_ROOT_PASSWORD=root mysql:5.6
```

Caso rode o comando acima, o erro de nome será mostrado, precisamos parar (*stop*) e remover (*remove*) o container, podemos fazer de duas maneiras:

```bash
docker stop mysql
docker rm mysql
```

ou

```bash
docker rm -f mysql
```

No primeiro exemplo, primeiro paramos o container para depois removê-lo, isso porque o comando `rm` apenas remove containers que não estão sendo executados, porém, utilizando o comando `rm` com o parâmetro `-f` pedimos para ele remover de forma forçada o container.

Agora, já podemos executar o container novamente e testar o mapeamento de portas:

```bash
docker run -d --name mysql -p 3306:3006 -e MYSQL_ROOT_PASSWORD=root mysql:5.6
```

Legal, o MySQL já está acessível em nossa máquina local, repare que passamos duas portas, a primeira é referente a máquina *host*, ou seja, a porta da nossa máquina e a segunda refere-se a porta do container, assim, estamos dizendo para o Docker:

> Olha Docker, após criar o container, peguei a porta 3306 dele e mapeie com a porta 3306 da máquina onde o comando foi executado.

Estamos quase lá, precisamos apenas salvar as informações do container para que seja possível manter seu estado, assim, mesmo que o container seja removido, suas informações estarão salvas, como podemos fazer isso? Para realizarmos essa ideia de manter estados e informações de container devemos utilizar os famosos volumes, de forma resumida, trata-se de mapear pastas do container para a máquina, assim, tudo que o container salvar em uma determinada pasta, estará sendo salvo na máquina.

Sendo assim, quando o container for criado novamente, o mesmo irá ler as informações da pasta *host*, onde tudo estará salvo e será criado exatamente da forma que foi parado ou removido.

Para criar os volumes, devemos utilizar o parâmetro `-v` de volumes:

```bash
docker run -d --name mysql -p 3306:3006 -v $PWD/mysql:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=root mysql:5.6
```

Novamente passamos uma pasta de nossa máquina, seguida pela pasta do container, no exemplo acima, estamos dizendo:

> Olha Docker, após criar o container, pegue a pasta mysql localizado no caminho atual onde o comando foi executado ($PWD) e mapeia com a pasta /var/lib/mysql do container, assim, tudo que for salvo nessa pasta, salve na máquina host.

Pronto, com isso, já devemos ter o MySQL configurado e pronto para rodar nosso blog, para o *post* não se extender muito, vou parar por aqui e na segunda parte vamos subir o Wordpress e realizar a comunicação entre os dois containers.

## Saiba mais

A diferença entre pausar (*stop*) e iniciar (*start*) um container novamente com relação a remover (*rm*) e recriar (*run*) o mesmo trata-se das suas informações, enquanto o container ainda não foi removido, todo o seu estado e informações estarão salvas, porém, ao remover o container e criá-lo novamente, o seu estado será voltado para o zero, conforme definido na imagem.

Se você reparou, durante e execução dos comandos, sempre o nome da imagem foi o último argumento, isso porque quando passamos outro argumento senão a imagem como último, estamos na verdade mudando o *entrypoint* da imagem (assunto para um próximo *post*), portanto, mantenha suas imagens como último argumento.

## Conclusão

Nesse *post* você viu vários comandos do Docker que podemos utilizar no dia-á-dia, claro que existem muitos outros, mas, os principais e mais utilizados são esses, para visualizar a lista completa, consulta a [documentação](https://docs.docker.com/engine/reference/commandline/cli/).

E aí, gostou? Já conhecia os comandos mostrados no *post*? Não deixe de comentar a assinar a [*newsletter*](http://eepurl.com/ggP7Rv) para receber novos *posts* por email.

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
