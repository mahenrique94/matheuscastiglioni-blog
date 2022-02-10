---
autor: "Matheus Castiglioni"
categoria: "Arquitetura"
disqus_identifier: "virtual-materialized-view"
disqus_title: "Views virtuais e materializadas"
disqus_url: "https://blog.matheuscastiglioni.com.br/virtual-materialized-view"
date: 2022-02-04T10:00:00-03:00
draft: false
keywords: ["banco de dados"]
slug: "virtual-materialized-view"
tag: ["banco de dados"]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1644000205/cloud-storage-banner-background_1_bgcxoq.jpg"
title: "Views virtuais e materializadas"
url: "/virtual-materialized-view"
---

Atualmente estamos cada vez mais partindo para arquiteturas de sistemas distribuídas e a complexidade dos nossos projetos aumentam, aumentam e aumentam... Em determinados momentos nossos projetos passam de dezenas de registros para milhões (ou mais), porém, os requisitos de negócio permanecem os mesmos, ou seja, ainda precisamos computador e derivar esses milhões de registros.

Provavelmente o que funciona em poucos segundos ou milissegundos (também poderia ser menos ou mais, trata-se apenas de exemplos) com dezenas de registros passou a funcionar em minutos ou horas (também poderia ser menos ou mais, trata-se apenas de exemplos) com milhões de registros.

Para o exemplo e contexto desse _post_ vamos ter o seguinte cenário:

> Precisamos informar a quantidade de vendas para nossos produtos, individualmente um por um

Isso poderia ser feito de N maneiras, seja em uma arquitetura distribuída ou não, por exemplo:

### Comunicação através de rede com HTTP
![Exemplo pedindo dados para um microsserviço](https://res.cloudinary.com/mahenrique94/image/upload/v1644001374/Contando_quantidade_de_pedidos_para_um_determinado_produto_b1uhvp.png)

Como vemos na imagem, poderíamos realizar uma requisição `HTTP` para o serviço responsável por pedidos e aguardar a resposta enquanto eles computam o dado do banco de dados.

### Comunicação através do banco de dados
![Exemplo conectando em um banco de dados único](https://res.cloudinary.com/mahenrique94/image/upload/v1644001449/Contando_quantidade_de_pedidos_para_um_determinado_produto_1_nhw832.png)

Já nesse outro exemplo, ambos os serviços conectam-se em uma única fonte de dados, temos serviços distribuídos, mas, a base de dados permanece única.

![Exemplo de monolitico](https://res.cloudinary.com/mahenrique94/image/upload/v1644001451/Contando_quantidade_de_pedidos_para_um_determinado_produto_2_xjpgz8.png)

Por fim e não menos importante, aqui temos um serviço único com base de dados única.

Poderiam haver N outras formas de se desenhar tal fluxo, o ponto aqui não é o fluxo em si, mas, como a informação é obtida. Repare que em todas as situações foi necessário executar uma _query_ para o banco de dados passando a informação do produto e contando todos os pedidos realizados para o mesmo (também existem N soluções, para o contexto do _post_ vamos focar na utilização de _views_).

## Virtual

Uma primeira abordagem poderia ser: Vamos criar uma _view_ virtual no banco de dados que vai realizar tal contagem para nós e deixará o valor salvo. Apesar de ser uma boa solução ela possuí dois pontos negativos, sendo:

1. Aumentará o tempo de escrita, pois, quando houver a escrita a _engine_ do banco de dados precisará atualizar tal valor.
2. _Views_ virtuais são atalhos para _queries_ que irão executar e expandir, sendo assim, ainda teríamos problemas de performance.

![Exemplo usando view virtual](https://res.cloudinary.com/mahenrique94/image/upload/v1644001804/Contando_quantidade_de_pedidos_para_um_determinado_produto_3_zri62y.png)

## Materializada

Uma outra abordagem seria a gente criar a trabalhar com _views_ materializadas (_materialized views_), a única diferença seria que nesse caso os dados seriam replicados e copiados fisicamente para uma outra tabela, dessa forma, quando a busca for realizada apenas essa única tabela será processada e podemos ainda filtrar por produto utilizando índices. Mas, aqui também nem tudo são flores, ainda temos pontos negativos para cada estilo de arquitetura, sendo:

1. Complexidade para sincronização dos dados
2. Duplicação e desnormalização dos dados
3. Possíveis inconsistências eventuais (principalmente para arquiteturas distribuídas)
4. Possíveis inconsistências de dados (principalmente para arquiteturas distribuídas)

![Exemplo usando view materializada](https://res.cloudinary.com/mahenrique94/image/upload/v1644001977/Contando_quantidade_de_pedidos_para_um_determinado_produto_4_koxnem.png)

## Conclusão
Nesse *post* entendemos as diferenças e motivações para utilização de _views_ virtuais ou materializadas, cada abordagem possuí seus conjuntos de _trade-offs_ que devem ser analisados e avaliados com calma, as vezes a virtualização fará mais sentido e outras a materialização será mais coerente.

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

