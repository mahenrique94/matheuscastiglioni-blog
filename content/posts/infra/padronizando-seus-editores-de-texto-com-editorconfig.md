---
autor: "Matheus Castiglioni"
categoria: "Infra"
disqus_identifier: "padronizando-seus-editores-de-texto-com-editorconfig"
disqus_title: "Padronizando Seus Editores De Texto Com Editorconfig"
disqus_url: "https://blog.matheuscastiglioni.com.br/padronizando-seus-editores-de-texto-com-editorconfig"
date: 2018-06-08T09:17:14-02:00
draft: false
keywords: [ "EditorConfig" ]
slug: "padronizando-seus-editores-de-texto-com-editorconfig"
tag: [ "EditorConfig" ]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1549707965/padronizando-seus-editores-de-texto-com-editorconfig_5b19d05d5a1af_bg_ro1wbx.png"
title: "Padronizando Seus Editores De Texto Com Editorconfig"
url: "/padronizando-seus-editores-de-texto-com-editorconfig"
---

Se você já utilizou vários editores de texto ou IDE's (*Integrated Development Environment*), deve ter notado que algumas vezes temos comportamentos diferentes entre eles. Por exemplo:

Utilizando o editor de texto [VSCode](https://code.visualstudio.com/) temos a indentação de arquivos feita com espaços, porém, se utilizarmos o [Atom](https://atom.io/) a indentação é feita com *tabs* (apenas um exemplo, não que isso seja real).

Será que não tem alguma maneira de definirmos configurações padrões para a forma como os editoes devem escrever nossos arquivos?

![Pensando em uma resposta](https://res.cloudinary.com/mahenrique94/image/upload/v1549708016/5b19d0a8494bf_bg_ekbux3.gif)

Tem, podemos fazer isso através do [EditorConfig](https://editorconfig.org/)

## Conhecendo o EditorConfig

O EditorConfig ajuda a definir um estilo de código entre os diversos editores de texto, basicamente, devemos criar um arquivo na raiz (costuma-se ser na raiz, não que seja obrigatório) de um determinado projeto, onde, dentro desse arquivo irá conter os estilos de códigos de nossos arquivos, dessa maneira os editores devem respeitar o que foi definido no arquivo.

## Configurando o EditorConfig

Bom, para começar a configuração, conforme dito anteriormente, devemos criar um arquivo na raiz de nosso projeto, mas, como esse arquivo deve ser chamado? O mesmo deve ser chamado `.editorconfig`, crie-o na raiz do projeto.

A primeira propriedade do arquivo será:

```
root = true
```

Essa configuração faz com que *plugin* do EditorConfig pare de procurar outros arquivos de configuração (mais á frente você irá entender melhor).

Certo, para exemplo do *post* vamos definir os seguintes estilos de códigos:

1. Indentação deve ser feita com espaços
2. Para cada indentação, deve ser dado quatro (4) espaços
3. Utilizar o charset utf-8
4. Não adicionar linhas em branco no final dos arquivos
5. Apagar os espaços em brancos no final de cada linha

Certo, sabendo disso, vamos as configurações

### Indentação deve ser feita com espaços

Para definir o tipo de indentação devemos utilizar a propriedade `indent_style`, ela deve receber dois valores, sendo eles: `space` (espaço) ou `tab`. Para nosso caso, vamos definí-la como espaço:

```
indent_style = space
```

### Para cada indentação, deve ser dado quatro (4) espaços

Para definir o tamanho de cada indentação temos duas maneiras:

Se definirmos o tipo de indentação como espaço, devemos utilizar a propriedade `indent_size`, passando um valor númerico de quantas colunas deve ser utilizada para cada indentação.

Se definirmos o tipo de indentação como *tab*, devemos utilizar a propriedade `tab_width`, também passando um valor numérico para cada indentação.

Como definimos o tipo de indentação como espaço, vamos utilizar a propriedade `indent_size`:

```
indent_size = 4
```

Dessa maneira, deve ser dado quatro (4) espaços para cada indentação.

### Utilizar o charset utf-8

Para informar o chatset dos arquivos. devemos utilizar a propriedade `charset`, passando para ela qual tipo de codificação será utilizada.

```
charset = utf-8
```

### Não adicionar linhas em branco no final dos arquivos

Para dizer aos editores não adicionarem uma última linha em branco no final de nossos arquivos, devemos utilizar a propriedade `insert_final_newline`, passando um valor `booleano` (*true* ou *false*), para verdadeiro ou falso respectivamente.

Como não queremos essa linha, vamos passar o valor `false`:

```
insert_final_newline = false
```

### Apagar os espaços em brancos no final de cada linha

Por último e não menos importante, devemos dizer para o editor apagar espaços inutilizados no fim de cada linha, para isso, devemos utilizar a propriedade `trim_trailing_whitespace`, ela também deve receber um valor `booleano`.

Como queremos que os espaços sejam apagados, vamos passar o valor `true` para ela:

```
trim_trailing_whitespace = true
```

## Arquivo configurado

Maravilha, as configurações foram definidas, nosso arquivo final ficou da seguinte maneira:

```
root = true

charset = utf-8
indent_size = 4
indent_style = space
insert_final_newline = false
trim_trailing_whitespace = true
```

Sim, eu gosto de deixar em ordem alfabética.

Legal, temos nosso arquivo, será que tudo está funcionando? Não, precisamor definir para quais formatos de arquivos essas configurações devem ser aplicadas, podemos fazer isso utilizando colchetes, onde dentro deles será definido um ou mais formato de arquivo.

Para nosso exemplo, queremos que as mesmas configurações sejam aplicadas para todos os arquivos, dessa maneira, podemos passar o valor `*` (asterisco) dentro dos colchetes, da seguinte maneira:

```
root = true

[*]
charset = utf-8
indent_size = 4
indent_style = space
insert_final_newline = false
trim_trailing_whitespace = true
```

E por fim, tudo deve estar funcionando.

## Saiba mais

Nem todos os editores de texto vem por padrão com o *plugin* do EditorConfig instalado, para verificar a lista de quais editores já vem com o plugin dê uma olhada na seção de [download](https://editorconfig.org/#download) do site, lá você também encontra quais editores precisam realizar o *download* do *plugin*.

A criação do arquivo `.editorconfig` necessariamente não é obrigatória que seja feita na raiz do projeto, ele pode ser criado em qualquer pasta, as configurações serão aplicadas aos arquivos mais próximos a ele. Por exemplo:

> Se você tem uma pasta assets e dentro dela criou o arquivo, as configurações dele serão aplicadas para todos os arquivos existentes também na pasta assets ou filhos dela (desde que não exista outro editorconfig criado nas pastas filhas).

A propriedade `root = true` serve para informar o *plugin* que ele não deve mais procurar arquivos de configuração, conforme dito anteriormente, podemos criar o arquivo em qualquer pasta do projeto, o *plugin* irá pegar o caminho do arquivo atual e verificar se no mesmo diretório tem um `editorconfig`, se existir, os estilos serão aplicados, senão, ele subirá para a pasta pai e fazer a procura do arquivo, parando de procurar somente se existir a propriedade `root = true` ou até a raiz do projeto.

As configurações do arquivo são aplicadas de forma procedente, ou seja, o arquivo mais próximo tem mais procedência referente aos arquivos mais longes, dessa maneira, o arquivo localizado na pasta `assets` terá mais importância do que o arquivo localizado na raiz do projeto.

No *post* definimos as mesmas configurações para todos os arquivos, mas poderíamos criar configurações diferentes para os diversos formatos, por exemplo:

Configurações para formatos diferentes:

```
[*.css]
indent_style = space

[*.java]
indent_style = tab
```

Configurações por grupos de formatos:

```
[*.{css, js}]
indent_style = space

[*.{java, php}]
indent_style = tab
```

Durante o *post* definí algumas propriedades básicas e essenciais ao meu ver, para consultar todas as propriedades que o EditorConfig suporta, dê uma olhada na [documentação completa](https://github.com/editorconfig/editorconfig/wiki/EditorConfig-Properties).

Se você ainda ficou com dúvidas, no meu canal, gravei um vídeo sobre o mesmo assunto, porém,  mostrando o exemplo de forma mais prática:

<iframe height="500" src="https://www.youtube.com/embed/Hg2OXg1jHpE" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>

## Conclusão

Nesse *post* mostrei como definir um padrão de estilo para seus códigos, assim, os diversos editores (que tiverem o *plugin* instalado) devem respeitar esses padrões.

Você já conhecia o EditorConfig? Não deixe de comentar.

### Newsletter

Se você gostou desse ou outros *posts*, não deixe de assinar a [*newsletter*](http://eepurl.com/ggP7Rv), para não perder as novidades que são postadas toda semana.

### Apoie

Você pode estar ajudando o blog ou canal realizando pequenas doações através do nosso [apoia-se](https://apoia.se/mahenrique94).

Abraços, até a próxima.
