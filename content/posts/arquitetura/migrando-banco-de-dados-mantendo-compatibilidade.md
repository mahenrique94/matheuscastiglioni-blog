---
autor: "Matheus Castiglioni"
categoria: "Arquitetura"
disqus_identifier: "migrando-banco-de-dados-mantendo-compatibilidade"
disqus_title: "Migrando Banco de Dados Mantendo a Compatibilidade"
disqus_url: "https://blog.matheuscastiglioni.com.br/migrando-banco-de-dados-mantendo-compatibilidade"
date: 2021-09-08T19:37:19-03:00
draft: false
keywords: ["afterward", "backward", "banco de dados", "compatibilidade", "migração"]
slug: "migrando-banco-de-dados-mantendo-compatibilidade"
tag: ["afterward", "backward", "banco de dados", "compatibilidade", "migração"]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1631140875/cloud-storage-banner-background-remixed-from-public-domain-by-nasa_1_fspsfa.jpg"
title: "Migrando Banco de Dados Mantendo a Compatibilidade"
url: "/migrando-banco-de-dados-mantendo-compatibilidade"
---

Muitas vezes acabamos precisando aplicar migrações em nossos banco de dados, seja, para aplicar alguma alteração de _schema_ ou alterações de dados. As alterações de _schema_ podem ser:

- Mudar o nome, adicionar ou remover colunas
- Mudar os tipos ou formatos de colunas
- Mudar nome, adicionar ou apagar tabelas
- e por ai vai...

Mas, como podemos fazer para que tais migrações não impactem o passado (_backward_) e nem o futuro (_afterward_)? Ou seja, versões antigas do sistema devem funcionar após a migração e versões novas do sistema devem funcionar antes da migração.

Uma pergunta que você pode estar se fazendo é:

> Mas, porque preciso me preocupar com tal nível de compatibilidade?

Ter esse nível de compatibilidade possibita realizar migrações com zero tempo de inatividade (_zero downtime_).

A parte mais importante para atingir tal nível de complexidade é pegar uma única declaração de migração e dividí-la em pequenos e micro passos (_baby steps_), formando uma estratégia de migração, por exemplo:

```
alter table customers rename column name to first_name
```

Esse comando acima é perigoso, isso porque ele não possuí um bom nível de compatibilidade, ou seja:

1. A versão antiga do sistema não vai funcionar quando aplicar a migração, pois, não irá existir a coluna `name` para ser lida.
2. A nova versão do sistema não vai funcionar sem aplicar a migração, pois, não irá existir a coluna `first_name` para ser lida.

Dessa forma, podemos concluir que seu nível de compatibilidade (seja para para trás ou à frente) não é muito boa. Necessitando de uma sincronização de _deploy_ e migração (além de haver um tempo de inatividade do sistema).

Uma possível estratégia de migração poderia ser:

```
alter table customers add column first_name varchar(120)
update customers set first_name = name where id between 1 and 100
update customers set first_name = name where id between 101 and 200
update customers set first_name = name where id between 201 and 300
alter table customers delete column name
```

Repare que a migração foi feita em várias partes, dessa forma:

1. A versão antiga do sistema ainda funciona, pois, apenas uma nova coluna foi adicionada.
2. A nova versão do sistema funciona, pois, a coluna nova já foi criada

## Estratégias de migração

Vamos definir formalmente algumas estratégias de migração e seus casos de usos.

### Evite _locks_ utilizando particionamento

Particionamento no contexto de banco de dados é o processo de dividir uma grande base de dados em vários pedaços menores. Sendo assim, podemos pegar esse conceito de dividir algo maior em várias pequenas partes no contexto de migrações.

Nós, não podemos controlar a quantidade de tempo que um comando `alter table` vai levar para ser executado. Por mais que a maioria dos banco de dados atuais não irá conduzir tal comando para um _lock_, ainda vale, termos cuidados em tal necessidade.

Além do comando acima, também temos o `update`, cujo, seu tempo de execução é proporcional à quantidade de informação para ser atualizada e o número de linhas nas tabelas. Quanto mais linhas e informações, maior será o tempo de execução do mesmo.

Para minimizar o tempo de execução nós podemos dividir um único comando em vários menores, ou seja, podemos mudar disso:

```
update account set amount = amount * 10
```

Para isso:

```
update account set amount = amount * 10 where number between 1 and 100000
update account set amount = amount * 10 where number between 100001 and 200000
update account set amount = amount * 10 where number between 200001 and 300000
```

### Adicionando uma coluna

Adicionar uma nova coluna é uma das migrações mais simples que nós podemos aplicar para nosso _schema_ do banco de dados, podemos seguir tal estratégia:

1. Adicionar uma nova coluna com `alter table nome_da_tabela add column nome_da_coluna tipo` (cuidado para não adicionar alguma restrição como `not null`).
2. Código escreve para a nova coluna.
3. Código lê a nova coluna, mas, quando a mesma não existir podemos utilizar um valor padrão ou derivar uma informação alternativa baseado em alguma já existente.
4. Aplicar um `update` utilizando particionamento para a nova coluna estar consistente.
5. Código lê e escreve para a nova coluna.

### Renomeando uma coluna

Renomear uma coluna exige alguns passos a mais para ser bem sucedida, sendo:

1. Adicionar uma nova coluna com `alter table nome_da_tabela add column nome_da_coluna tipo` (cuidado para não adicionar alguma restrição como `not null`).
2. Código lê da coluna antiga e escreve para as duas (antiga e nova).
3. Copia a informação para a nova coluna utilizando particionamento.
4. Código lê da informação nova e continua escrevendo para as duas (antiga e nova).
5. Código lê e escreve para a nova coluna.
6. Deleta a nova coluna depois de um tempo.

### Mudar o tipo ou formato de uma coluna

A estratégia e passos não são muito diferentes quando é necessário renomear uma coluna, sendo:

1. Adicionar uma nova coluna com `alter table nome_da_tabela add column nome_da_coluna tipo` (cuidado para não adicionar alguma restrição como `not null`).
2. Código lê da coluna antiga e escreve para as duas (antiga e nova).
3. Copia a informação para a nova coluna utilizando particionamento.
4. Código lê da informação nova e continua escrevendo para as duas (antiga e nova).
5. Código lê e escreve para a nova coluna.
6. Deleta a nova coluna depois de um tempo.

### Deletar uma coluna
As vezes acabamos não precisando mais de uma coluna e sendo assim surge a necessidade de deletá-la, para isso podemos seguir tais passos:

1. Nunca delete a coluna no banco de dados quando estiver liberando uma nova versão do sistema.
2. Pare de ler da coluna, mas, continue escrevendo.
3. Pare de escrever na coluna.
4. Delete a coluna depois de um tempo.

Cuidado com o comando de `delete`, isso porque trata-se de um comando destrutivo que muitas vezes não poderá ser desfeito.

## Conclusão

Nesse *post* vimos estratégias para aplicar migrações em banco de dados de uma forma mais tranquila, da qual possuí um bom nível de compatibilidade seja com o passado ou futuro.

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
