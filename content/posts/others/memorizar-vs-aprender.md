---
autor: "Matheus Castiglioni"
categoria: "Outros"
disqus_identifier: "memorizar-vs-aprender"
disqus_title: "Memorizar vs Aprender"
disqus_url: "https://blog.matheuscastiglioni.com.br/memorizar-vs-aprender"
date: 2019-10-08T21:03:01-03:00
draft: false
keywords: ["Estudo", "Aprendizado", "Conhecimento"]
slug: "memorizar-vs-aprender"
tag: ["Estudo", "Aprendizado", "Conhecimento"]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1570579759/diferenca-entre-aprender-e-memorizar_1_pwxsct.jpg"
title: "Memorizar vs Aprender"
url: "/memorizar-vs-aprender"
---

Diariamente enfrentamos situações das quais não sabemos o que fazer e provavelmente nosso primeiro passo é acessar um famoso site: [www.google.com](https://www.google.com) (ou derivados) e realizar algum tipo de pesquisa para dado o nosso problema.

Ao decorrer do *post* vamos visualizar problemas referente à cenários de desenvolvimento de *softwares*, mas, os mesmos podem ser aplicados em qualquer situação de problema/solução.

Após a pesquisa ser feita, acabamos clicando nos primeiros sites, vemos alguns trechos de códigos (em um cenário referente a desenvolvimento de *software*), copiamos, colamos e voala, tudo funcionando e o problema foi resolvido, certo?

Para exemplificar melhor a situação, vamos imaginar o seguinte o cenário:

> Temos um site em produção, porém, nos foi solicitado uma nova funcionalidade: Precisamos criar um menu *dropdown* para nosso site (o exemplo também pode ser para outras áreas).

## Memorizando a solução

A primeira coisa que fazemos é pesquisar algo do tipo na Google (ou derivados): "**Como criar um menu dropdown**":

![Pesquisando como criar um menu dropdown na Google](https://res.cloudinary.com/mahenrique94/image/upload/v1570580275/Screen_Shot_2019-10-08_at_21.15.27_1_uk81nh.png)

Como podemos ver, existem várias respostas e ajuda para o nosso problema ou necessidade.

O que geralmente acabamos fazendo é entrando no primeiro site, copiando os códigos, voltando para editor, colando os códigos, modificando os textos e pronto (foi exatamente isso que eu fiz).

Logo, para nosso problema de menu *dropdown* podemos ter o seguinte conteúdo:

`index.html`:

```html
<nav>
  <ul class="menu">
    <li><a href="#">Home</a></li>
    <li><a href="#">Sobre</a></li>
    <li><a href="#">O que fazemos?</a>
      <ul>
        <li><a href="#">Web Design</a></li>
        <li><a href="#">SEO</a></li>
        <li><a href="#">Design</a></li>
      </ul>
    </li>
    <li><a href="#">Links</a></li>
    <li><a href="#">Contato</a></li>
  </ul>
</nav>
```

`style.css`:

```css
* {
  margin: 0;
  padding: 0;
 }

body {
  font-family: arial, helvetica, sans-serif;
  font-size: 12px;
}

.menu {
  list-style: none;
  border: 1px solid #c0c0c0;
  float: left;
}

.menu li {
  position: relative;
  float: left;
  border-right: 1px solid #c0c0c0;
}

.menu li a {
  color: #333;
  text-decoration: none;
  padding: 5px 10px;
  display: block;
}

.menu li a:hover {
  background: #333;
  color: #fff;
  -moz-box-shadow: 0 3px 10px 0 #CCC;
  -webkit-box-shadow: 0 3px 10px 0 #ccc;
  text-shadow: 0px 0px 5px #fff;
}

.menu li ul {
  position: absolute;
  top: 25px;
  left: 0;
  background-color: #fff;
  display: none;
}

.menu li:hover ul,
.menu li.over ul {
  display: block;
 }


.menu li ul li {
  border: 1px solid #c0c0c0;
  display: block;
  width: 150px;
}
```

Resultando na seguinte funcionalidade:

![Mostrando como ficou o menu dropdown](https://res.cloudinary.com/mahenrique94/image/upload/v1570581055/ezgif.com-optimize_ymf1a4.gif)

Mas ai eu te pergunto:

> Você realmente resolveu seu problema?
>
> O que você aprendeu com isso?

Nesse exemplo, você aprendeu a realizar uma pesquisa na Google, copiar, colar e modificar código.

Existe uma grande diferença entre memorizar uma solução ou aprender uma solução.

Se você precisar implementar um novo menu *dropdown*, você vai conseguir implementá-lo do zero (sem consulta)? Provavelmente não, é provável que você visite esses arquivos e códigos (talvez até copiá-los novamente).

Sendo assim, podemos concluir que você memorizou o problema e solução.

## Aprendendo a solução

Agora, vamos tentar uma abordagem um pouco diferente, em vez de sairmos pesquisando uma solução na Google (ou derivados), vamos tentar entender como um menu *dropdown* deveria funcionar no mundo real. Acabei de pensar e consegui pontuar os seguintes itens (talvez você irá pensar em itens diferentes):

1. Deve haver uma lista de itens.
2. Dentro dos itens da primeira lista, deve haver uma segunda lista, porém, por padrão ela precisa estar escondida.
3. Ao parar o *mouse* em cima (*hover*) de algum item da primeira lista a segunda lista deve ser mostrada.

Legal, agora sabemos como nossa funcionalidade deve funcionar em nosso mundo real, então o que precisamos fazer é basicamente codificá-la:

`index.html`:

```html
<nav>
  <ul>
    <li><a>Link 1</a></li>
    <li><a>Link 2</a></li>
    <li><a>Link 3</a>
      <ul>
        <li><a>SubLink 1</a></li>
        <li><a>SubLink 2</a></li>
        <li><a>SubLink 3</a></li>
      </ul>
    </li>
  </ul>
</nav>
```

`style.css`:

```css
nav {
  background: #0099ff;
  color: #fdfdfd;
}

ul, li {
  padding: 0;
  margin: 0;
}

ul {
  display: flex;
}

li {
  list-style: none;
  position: relative;
}

li:hover > ul {
  display: block;
}

a {
  font-family: Arial, sans-serif;
  padding: 1rem 2rem;
  display: block;
  white-space: nowrap;
}

a:hover {
  background: #007acc;
  cursor: pointer;
}

ul li ul {
  display: none;
  position: absolute;
  left: 0;
  top: 50px;
  background: #0099ff;
}
```

![Segundo exemplo de menu dropdown](https://res.cloudinary.com/mahenrique94/image/upload/v1570582065/ezgif.com-optimize_xkikvc.gif)

Repare que chegamos no mesmo resultado (menu *dropdown*), porém, de maneira diferente (tanto no código quanto abordagem).

A diferença está no resultado final, no segundo método, nós fomos capazes de entender a solução antes mesmo de implementá-la. Visualizar e entender problemas em nosso mundo real é bem importante para o desenvolvimento de *software*, pois, uma vez que o problema foi entendido e a solução foi encontrada fica bem mais um codifica.

No *post* tivemos um exemplo bem simples, mas, a mesma prática pode ser aplicada para diversos problemas ou situações (sendo referente sobre desenvolvimento de *software* ou não), o ponto é:

> Não tente resolver algo sem saber ou conhecer a solução

Outros cenários, exemplos e situações:

- Realizar *upload* de arquivos.
- Calcular imposto (por exemplo: ICMS).
- Gerar um PDF.
- Resolver o Teorema de Pitagoras.
- Criar uma calculadora.
- Somar dois números.
- etc...

Tente sempre que possível abstrair o problema para nosso mundo real, visualizá-lo, entendê-lo, se necessário realizar testes de mesa (sim, escrever no papel) para depois começar a codar.

Uma vez que você entendeu o problema e tem a solução, é fácil codificá-los.

# Conclusão

Nesse *post* vimos uma pequena e simples diferença entre Memorizar ou Aprender, partimos de um cenário onde saimos pesquisando uma solução sem ao menos saber o que precisamos resolver.

E no segundo exemplo, entendemos o problema, descobrimos uma solução para depois implementá-la.

Ao meu ver a segunda abordagem é bem mais simples, particularmente em situações mais complexas costumo fazer esses tipos de dinâmicas (para mim tem dado certo).

Abraços, até a próxima.
