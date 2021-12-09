---
autor: "Matheus Castiglioni"
categoria: "Arquitetura"
disqus_identifier: "arquitetura-mvc"
disqus_title: "Arquitetura MVC"
disqus_url: "https://blog.matheuscastiglioni.com.br/arquitetura-mvc"
date: 2021-12-09T09:07:47-03:00
draft: false
keywords: ["arquitetura em camadas", "estilo de arquitetura"]
slug: "arquitetura-mvc"
tag: ["arquitetura em camadas", "estilo de arquitetura"]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1639052064/1295_vxnw2c.jpg"
title: "Arquitetura MVC"
url: "/arquitetura-mvc"
---

Dando ínicio à uma série de _post's_ sobre estilos de arquitetura, nesse primeiro vamos dar uma olhada no estilo **MVC**.

Um estilo de arquitetura é uma forma de definir os componentes e elementos sobre os blocos de construção de um _software_, ou seja, como o mesmo será construído (iremos falar sobre isso em _post's_ futuros).

## Estilo MVC

O estilo MVC é um estilo de arquitetura baseado em três camadas principais, sendo:

- **Modelo (_Model_)**: O modelo é responsável por manter e lidar com as informações. Ele está conectado em uma camada de persistência (podendo ser um banco de dados).
- **Página (_View_)**: As páginas são de fato a UI (_interface_) do sistema, elas são responsávels por lidar com as apresentações das informações.
- **Controlador (_Controller_)**: Os controladores lidam com a conexão entre as páginas e os modelos, ou seja, ele realiza a ponte entre ambos (recebe requisições das páginas, recupera ou persiste as informações e devolve uma resposta para as páginas). Normalmente para cada operação de negócio irá existir uma ação responsável em um controlador.

### Topologia

A topologia desse estilo de arquitetura pode ser representada da seguinte forma:

![Topologia da arquitetura MVC](https://res.cloudinary.com/mahenrique94/image/upload/v1639053003/Untitled_Diagram.drawio_h8rlm2.png)

Basicamente cada sistema irá ser composto por essas três camadas (como descritas anteriormente). Um exemplo de fluxo real seria:

1. Uma pessoa acessa alguma página do nosso sistema.
2. Esse acesso irá disparar uma operação de negócio para o sistema.
3. Cada operação de negócio é mapeada para uma rota (_endpoint_) no sistema.
4. Para cada rota é anexada uma ação de um controlador.
5. As ações dos controladores utilizam os modelos para recuperar e persistir informações.
6. As informações são repassadas para as páginas.
7. As páginas são renderizadas.

Exemplo do fluxo:

![Fluxo de uma arquitetura MVC](https://res.cloudinary.com/mahenrique94/image/upload/v1639053493/Untitled_Diagram.drawio_1_qqgypo.png)

### Avaliações das características arquiteturais

Cada estilo de arquitetura possuí uma série de características arquiteturais, um estilo favorece uma característica A e desfavorece uma característica B. Outro estilo favorece B e desfavorece A, etc... Já [falamos sobre tais características arquiteturais](https://blog.matheuscastiglioni.com.br/caracteristicas-de-uma-arquitetura-de-software/).

Para que não seja necessário avaliar todas as possibilidades vamos emprestar a tabela de avaliações citada em [Fundamentos da arquitetura de sistemas](https://www.amazon.com.br/Fundamentals-Software-Architecture-Neal-Ford/dp/1492043451) (existem várias outras características não cobertas pela tabela) onde vamos avaliar algumas essenciais e principais.

No meu ponto de vista dei as seguintes notas para cada característica (troquei as estrelas por números de 0 à 5):

| Características arquiteturais | Avaliação (0-5) |
| ----------------------------- | --------------- |
| Tipo de particionamento | Técnico |
| Numéro de quantas | 1 |
| Deploiabilidade | 1 |
| Elasticidade | 1 |
| Evolução | 2 |
| Tolerança à falhas | 1 |
| Modularidade | 2 |
| Custo geral | 5 |
| Performance | 2 |
| Confiabilidade | 2 |
| Escalabilidade | 1 |
| Simplicidade | 5 |
| Testabilidade | 3 |

**Obs**: Não se preocupe com "**tipo de particionamento**" e "**número de quantas**", iremos ver mais sobre ambos em _post's_ futuros.

## Conclusão

Nesse *post* demos início em uma série sobre estilos arquiteturais e para começar falamos sobre o estilo de arquitetura MVC (_Model_, _View_, _Controller_).

Os _post's_ serão mais focados em teoria, ou seja, irão apresentar e trazer os conceitos. Se você quer algo mais prático fique de olho no [meu canal do Youtube](https://youtube.com/matheuscastiglioni) onde os [estilos de arquiteturas serão implementados na prática](https://www.youtube.com/playlist?list=PLt28SuGsHXH3Ep9Z0LNmK1bFe8yY49rt6).

Abraços, até a próxima.

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
