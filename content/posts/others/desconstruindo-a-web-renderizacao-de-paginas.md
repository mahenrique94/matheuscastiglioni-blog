---
autor: "Matheus Castiglioni"
categoria: "Outros"
disqus_identifier: "desconstruindo-a-web-renderizacao-de-paginas"
disqus_title: "Desconstruindo a Web: Renderização De Páginas"
disqus_url: "https://blog.matheuscastiglioni.com.br/desconstruindo-a-web-renderizacao-de-paginas"
date: 2019-04-15T21:14:11-03:00
draft: false
keywords: ["Web", "JavaScript", "Renderização", "Render", "Desconstruindo a Web"]
slug: "desconstruindo-a-web-renderizacao-de-paginas"
tag: ["Web", "JavaScript", "Renderização", "Render", "Desconstruindo a Web"]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1555373869/CoM-The-Ultimate-Front-End-Development-Bundle-780x390_1_huun6h.jpg"
title: "Desconstruindo a Web: Renderização De Páginas"
url: "/desconstruindo-a-web-renderizacao-de-paginas"
---

Continuando a série "**Desconstruindo a Web**", onde estamos desvendando, entendendo e tendo ideias de "como" as coisas funcionam por debaixo dos panos (*under the hood*). Caso você não tenha visto os dois *post's* anteriores:

- [Desconstruindo a Web: Pilha De Execução Do Javascript](https://blog.matheuscastiglioni.com.br/desconstruindo-a-web-pilha-de-execucao-do-javascript/)
- [Desconstruindo a Web: Arquitetura De Multi Processos Do Chromium](https://blog.matheuscastiglioni.com.br/desconstruindo-a-web-arquitetura-de-multi-processos-do-chromium/)

Nesse *post* irei explicar como é o processo de renderização do *browser* (navegador).

## O que é um navegador?

Muitas vezes você deve ter ouvido falar em "navegador", "navegadores", "navegadores web", "browser", "browsers", "web browsers", etc...

Se alguém te falar:

> Ei fulano, abre o navegador aí.

Com certeza você deve abrir o Chrome, Firefox, Safari, Opera, Brave, IE, Edge, etc... Pelo menos um desses na lista você vai abrir, mas afinal, um navegador é o Chrome? Não, o Chrome é um navegador mas a definição de um navegador não refere-se ao Google Chrome.

Sabendo disso, então, o que é um navegador? Um navegador é um *software* que carrega arquivos de um servidor remoto ou do disco local e o disponibiliza para visualização (permitindo também que exista uma interação com o mesmo).

## Do que um navegador é feito?

Dentro de um navegador (sabemos que é um *software*), podem haver e existir outros pequenos *softwares*, dos quais, cada um possuí sua responsabilidade. Um desses "pequenos" *softwares* é o motor do navegador (*browser engine*).

### Browser engine

Dentro de cada navegador (Chrome, Firefox, Opera, etc..) existe uma implementação do motor (*engine*), ele é o responsável por descobrir quais e como renderizar as informações dos arquivos que ele recebeu para que você visualize ou interaja com as mesmas. Exemplos de motores:

- Gecko
- Blink
- Webkit

## Enviando e recebendo informações

A internet envia e recebe informações através de pacotes em *bytes*. Nós escrevemos códigos HTML, CSS e JS e abrímos no navegador, o navegador lê os bytes de HTML do nosso disco ou através da rede.

![Exemplo de leitura do navegador](https://res.cloudinary.com/mahenrique94/image/upload/v1555375365/1_GSw1oqEpbPo0NmwG_73bPw_1_cz4ugz.png)

O navegador lê dados em *bytes* e não os caracteres e dados que nós escrevemos. A questão, é que ele não sabe o que fazer com esses *bytes*, eles precisam ser convertidos para algo que ele entenda.

Esse é o segundo passo no processo de renderização (o primeiro é ler e receber os *bytes*).

## De bytes para o DOM

Vimos que o navegador vai ler e receber informações em *bytes*, porém, ele não sabe o que fazer com elas. O navegador sabe trabalhar com DOM (*Document Object Model*), mas, o que é DOM?

Antes de vermos o que é DOM, vamos entender como ele é criado.

Primeiro, as informações em *bytes* são convertidas para caracteres:

![De bytes para caracteres](https://res.cloudinary.com/mahenrique94/image/upload/v1555376379/1_YdURVl_Qkxv9Lf4Ja583-w_1_a5ijoa.png)

Esses caracteres para quais a conversão é feita, são os caracteres que nós escrevemos. Essa conversão é feita baseada na codificação (*encoding*) do nosso arquivo `.html`. Basicamente nessa etapa o *browser* (navegador) recebe *bytes* e converte-os para o código que nós escrevemos.

Mas, os caracteres não é o resultado final, ainda existe um processo de análise onde os caracteres passaram para *tokens*, esse será o terceiro passo.

![De caracteres para tokens](https://res.cloudinary.com/mahenrique94/image/upload/v1555376380/1_23wqjUorWI2fkCJ_AN5a2w_1_pkqqzn.png)

### O que são esses "tokens"?

Sem esse processo de *tokenização* teremos um monte de caracteres sem significado, basicamente teremos nosso código HTML sendo exibido pela janela do navegador, o que não reproduz um site real.

Quando salvamos um arquivo com a extensão `.html` estamos dizendo para o motor do navegador interpretá-lo como um documento HTML. A maneira como o navegador vai interpretar esse arquivo é começar realizando o parseamento dele.

Nesse processo de parseamento e particularmente no de tokerização, todo ínico e fim das *tag's* HTML são contabilizadas. O parseador entende cada string entre colchete angulares, por exemplo: `html`, `p`, `a`, `button`, etc... E entende o conjunto de regras que aplica-se para cada uma delas.

Por exemplo: Um *token* que representa uma *tag* `a` terá propriedades diferentes de um *token* que representa uma tag `p` e assim por diante.

Conceitualmente, podemos entender um *token* como um tipo de estrutura de dados que contem informações sobre determinadas *tag's* HTML.

Um arquivo `.html` é quebrado em pequenas unidades de parseamento chamadas de *tokens*.

Essa é a maneira como o *browser* (navegador) começa a entender os códigos que nós escrevemos.

![Inicio do parseamento dos navegadores](https://res.cloudinary.com/mahenrique94/image/upload/v1555377689/1_vIwWeznQhir5EPWDOyo5sw_1_ctixcy.png)

Mas, os *tokens* também não são o resultado e etapa final, ainda existe um quarto passo.

### Criação de nós

Após finalizar a tokerização, os *tokens* são convertidos para nós (*nodes*). Vamos imaginar os nós como objetos distintos com propriedades específicas. Vamos pensar que nós são entidades separadas dentro da nossa árvore de objetos.

E como você deve imaginar, os nós ainda não são o resultado final, temos mais um e último quinto passo.

### DOM

Após a criação dos nós, eles são linkados em uma estrutura de árvore conhecida como DOM (*Document Object Model*). O DOM estabelece os relacionamentos de pais e filhos, irmãos adjacentes e outros graus parentescos.

![Resultado final](https://res.cloudinary.com/mahenrique94/image/upload/v1555378084/1_ugZgXZkxbzeIia7Z3jP76A_1_hqr3ne.png).

O *browser* (navegador) vai através da transformação de informações de bytes crus até a criação e renderização do DOM antes que qualquer coisa possa acontecer.

![Fluxo de renderização](https://res.cloudinary.com/mahenrique94/image/upload/v1555378294/1_Llo-v3XG_gEP_Xlgy0qtjg_1_mft2a6.png)

Dependendo do tamanho de seus arquivos `.html`, o processo da construção do DOM pode levar algum tempo.

Assim, temos os passos para a renderização de uma página finalizados, sendo eles:

![Passos para renderizar uma página](https://res.cloudinary.com/mahenrique94/image/upload/v1555378451/1_ROuUBS5eZ1DKk2RnFDfh6Q_1_bocto2.png)

1. Ler e receber os *bytes*.
2. Converter os *bytes* para caracteres que o navegador entende.
3. Tokerizar os caracteres para *tag's* HTML.
4. Criar nós referente as *tag's.
5. Criar, montar e definir os relacionamentos na árvore do DOM.

## Conclusão

Nesse *post* expliquei um pouco sobre como funciona o processo de renderização dos navegadores (*browsers*). Passamos por todos os cinco passos e entendemos quando e porque cada um deles acontecem.

E aí, você já conhecia o processo de renderização das páginas pelos navegadores? Não deixe de comentar!

Caso tenha gostado desse *post* e quer receber novidades por email, fique á vontade para assinar se inscrever na [newsletter](http://eepurl.com/ggP7Rv).

Abraços, até a próxima.

### Referência

- [How browser rendering works — behind the scenes
](https://blog.logrocket.com/how-browser-rendering-works-behind-the-scenes-6782b0e8fb10)
