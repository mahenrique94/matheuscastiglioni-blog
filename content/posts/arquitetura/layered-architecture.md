---
autor: "Matheus Castiglioni"
categoria: "Arquitetura"
disqus_identifier: "layered-architecture"
disqus_title: "Arquitetura em Camadas"
disqus_url: "https://blog.matheuscastiglioni.com.br/layered-architecture"
date: 2021-12-23T10:00:23-03:00
draft: false
keywords: ["estilo de arquitetura"]
slug: "layered-architecture"
tag: ["estilo de arquitetura"]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1640211199/3942305_1_omu7r4.jpg"
title: "Arquitetura em Camadas"
url: "/layered-architecture"
---

Dando continuidade na série sobre estilos de arquitetura, nesse _post_ iremos falar sobre o estilo de arquitetura em camadas.

Caso você tenha perdido os _posts_ anteriores, dê uma olhada em:

- [Arquitetura MVC](https://blog.matheuscastiglioni.com.br/arquitetura-mvc/)

## Arquitetura em camadas

O estilo de arquitetura em camadas (_layered architecture_ e também conhecido como _n-tiered architecture_) é um dos mais conhecidos. Esse estilo é de fato um padrão para a maioria das aplicações e serviços, isso porque o mesmo trata-se de um estilo muito simples, familiar e de baixo custo para implementação.

Também é um jeito natural de se desenvolver aplicações ou serviços devido à [lei de Conway](https://blog.matheuscastiglioni.com.br/lei-de-conway/).

### Topologia

A topologia desse estilo de arquitetura pode ser representada da seguinte forma:

![Topologia do estilo de arquitetura em camadas](https://res.cloudinary.com/mahenrique94/image/upload/v1640212056/Untitled_Diagram.drawio_huk9ux.png)

Existem outras variações dessa topologia (por exemplo com uma camada de serviços ou agrupamentos de camadas em módulos), ou seja, mais ou menos camadas existirão. Porém, essas quatros comumente estão presentes em aplicações ou serviços por aí.

Cada camada tem uma função e responsabilidade específica dentro da arquitetura, por exemplo:

- **Apresentação**: A camada de apresentação deveria ser responsável por lidar com toda a _interface_ do(a) usuário(a) e lógicas de comunicação com navegadores.
- **Negócio**: A camada de negócio deveria ser responsável por executar operações e fluxos de negócios específicos associados à uma requisição.
- **Persistência**: A camada de persistência deveria ser responsável por persistir ou recuperar informações fisicamente salvas em alguma unidade de armazenamento.
- **Banco de dados**: A camada do banco de dados deveria ser responsável por manter os dados salvos de forma física.
- etc...

Cada camada forma uma abstração em volta da sua necessidade e trabalho à ser realizado dentro de uma requisição em particular. Além disso, barreiras devem existir de forma implícita entre elas, ou seja, a camada de apresentação não deveria saber ou se preocupar em como recuperar informações de um cliente ou produto (o mesmo aplica-se para as demais camadas presentes na arquitetura).

Além disso é muito importante definir o fluxo de cada camada, ou seja, quais estão abertas ou fechadas.

![Exemplo das camadas fechadas](https://res.cloudinary.com/mahenrique94/image/upload/v1640212642/Untitled_Diagram.drawio_1_ujeqxi.png)

Nesse exemplo acima todas as camadas estão fechadas, mas, o que isso quer dizer? Dizer que uma camada está aberta ou fechada refere-se em informar se o fluxo pode ou não pular tal camada dentro do fluxo da requisição, sendo assim, camadas fechadas devem processar as requisições através da sua ordem hierarquica.

![Exemplo de fluxo em camadas fechadas](https://res.cloudinary.com/mahenrique94/image/upload/v1640213006/Untitled_Diagram.drawio_2_ohi7x2.png)

Repare que nesse exemplo acima como todas as camadas estão fechadas o fluxo deve ocorrer exatamenta na forma em que elas foram definidas e posicionadas hierarquicamente, ou seja:

1. A camada de apresentação fala com a camada de negócio
2. A camada de negócio fala com a camada de persistência
3. A camada de persistência fala com a camada do bando de dados

![Exemplo de fluxo em camadas abertas](https://res.cloudinary.com/mahenrique94/image/upload/v1640213005/Untitled_Diagram.drawio_3_aqstko.png)

Já nesse outro exemplo acima podemos ver uma variação com uma nova camada, a camada de serviço. E também como a camada de serviço está marcada como aberta, isso quer dizer que a mesma não é obrigatória em todas as requisições ou fluxos, dessa forma:

1. A camada de apresentação fala com a camada de negócio
2. A camada de negócio fala com a camada de **serviço ou persistência**
3. A camada de serviço fala com a camada de persistência
4. A camada de persistência fala com a camada do bando de dados

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
| Evolução | 1 |
| Tolerança à falhas | 1 |
| Modularidade | 1 |
| Custo geral | 5 |
| Performance | 2 |
| Confiabilidade | 2 |
| Escalabilidade | 1 |
| Simplicidade | 5 |
| Testabilidade | 3 |

**Obs**: Não se preocupe com "**tipo de particionamento**" e "**número de quantas**", iremos ver mais sobre ambos em _post's_ futuros.

## Conclusão

Nesse *post* demos continuidade na série sobre estilos arquiteturais e falamos sobre o estilo de arquitetura em camadas (_layered architecture_).

Os _posts_ serão mais focados em teoria, ou seja, irão apresentar e trazer os conceitos. Se você quer algo mais prático fique de olho no [meu canal do Youtube](https://youtube.com/matheuscastiglioni) onde os [estilos de arquiteturas serão implementados na prática](https://www.youtube.com/playlist?list=PLt28SuGsHXH3Ep9Z0LNmK1bFe8yY49rt6).

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

