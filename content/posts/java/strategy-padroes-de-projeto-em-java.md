---
autor: "Matheus Castiglioni"
categoria: "Java"
disqus_identifier: "strategy-padroes-de-projeto-em-java"
disqus_title: "Strategy Padroes De Projeto Em Java"
disqus_url: "https://blog.matheuscastiglioni.com.br/strategy-padroes-de-projeto-em-java"
date: 2017-12-05T06:40:04-02:00
draft: false
keywords: [ "Back-End", "Design Patterns", "Estratégia", "Padrões de Projeto", "Refatoração", "Strategy" ]
slug: "strategy-padroes-de-projeto-em-java"
tag: [ "Back-End", "Design Patterns", "Estratégia", "Padrões de Projeto", "Refatoração", "Strategy" ]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1549725881/strategy-padroes-de-projeto-em-java_mlonez.jpg"
title: "Strategy Padroes De Projeto Em Java"
url: "/strategy-padroes-de-projeto-em-java"
---

Nosso sistema já esta rodando em produção, porém precisamos adicionar uma nova funcionalidade: **Cálculo de Impostos**, a princípio você deve estar pensando:

> Isso é simples, vou criar uma classe, passar o imposto e o valor à ser calculado e calcular.

Não é bem assim que funciona, para o exemplo do *post* vou utilizar a linguagem [Java](https://www.java.com/pt_BR/).

Pedimos para o nosso desenvolvedor João implementar a nova funcionalidade, um tempo depois ele nos enviou:

![Exemplo sem padrão](https://res.cloudinary.com/mahenrique94/image/upload/v1549725972/calculando-impostos-sem-padrao_djeroj.gif)

Como podemos ver, o cálculo esta funcionando, porém observando um pouco mais o código, podemos fazer algumas observações:

1. Ele esta passando como `String` o nome do imposto seguido pelo seu valor.
2. Estamos programando em uma linguagem OO(Orientada a Objetos), porém, o código esta procedural.
3. Se amanhã surgir um novo imposto, vamos ter novos `if's`.

Simples observações que fazem toda a diferença, imagine que agora, pedimos para o João adicinar um novo imposto, então ele adicionou e nos enviou o código para revisão:

```java
public class CalculadoraDeImpostos {

	public double calcular(String imposto, double valor) {
		if (imposto.equals("ICMS"))
			return valor * 0.10;
		else if (imposto.equals("IPI"))
			return valor * 0.20;
		else if (imposto.equals("NOVO_IMPOSTO"))
			return valor * 0.50;
		return valor;
	}

}
```

Veja que precisamos adicionar um novo `if`, caso você já tenha estudado um pouco sobre padrões de projetos ou boas prátias em linguagens OO, já deve estar doido com esse código kkk. Calma, vamos devagar para tudo dar certo, nossa classe tem a tendência de crescer para sempre, chamamos essa classe de **Não coesa**, então como podemos resolver isso? Utilizar algum padrão de projeto.

## Strategy

Para exemplo do *post* vamos utilizar o padrão **Strategy**, com ele conseguimos realizar a mesma operação de diferentes maneiras, caso queira se aprofundar um pouco mais em *Design Patterns*(Padrões de Projeto) recomendo o livro [Design Patterns em Java](https://www.casadocodigo.com.br/products/livro-design-patterns) da [Casa do Código](https://www.casadocodigo.com.br/) ou esse artigo [Entendendo os conceitos dos Padrões de Projetos em Java](https://www.devmedia.com.br/entendendo-os-conceitos-dos-padroes-de-projetos-em-java/29083) da [DevMedia](https://www.devmedia.com.br/).

### O que é um Padrão de Projeto?

Com certeza vários sistemas já tiveram que realizar seus cálculos de impostos, podemos generalizar de maneira diferente, ou seja, já tiveram que realizar a mesma função de diferentes maneiras. Agora imagine que cada desenvolver ou empresa resolva e implementa tal necessidade do seu jeito, a probabilidade de todos os códigos serem diferentes é quase certa, cada pessoa tem sua lógica e raciocínio, portanto, não teríamos reaproveitamento de código.

Baseado nessa ideia surgiu os Padrões de Projetos, uma solução comúm desenhada para determinadas situações, por exemplo, para realizar a mesma função de diferentes maneiras temos o *Strategy*, para criação de objetos complexos temos a *Factory* e muitos outros nomes para respectivas necessidades, cabe a você analisar a situação e tentar aplicar um padrão para resolver, esse assunto foge do contexto do *post*.

## Refatorando nosso código

Existem diversas definições para **Refatoração de Código** aqui de forma geral para não entrar no contexto, irei definir **Refatoração** como **reescrita** e **melhora** em nosso código, assim, vamos transformar aquele código até então em procedural para orientado a objetos.

Voltando ao exemplo:

```java
public class CalculadoraDeImpostos {

	public double calcular(String imposto, double valor) {
		if (imposto.equals("ICMS"))
			return valor * 0.10;
		else if (imposto.equals("IPI"))
			return valor * 0.20;
		else if (imposto.equals("NOVO_IMPOSTO"))
			return valor * 0.50;
		return valor;
	}

}
```

O que podemos ver de igualdade nesse código? A resposta é simples: Imposto, todos os `if's` são baseados em impostos, então vamos começar transformando os `if's` em classes:

```java
public class ICMS {

}

public class IPI {

}
```

Mas até o momento `ICMS` e `IPI` não passam de classes comúns para nós, precisamos definir de alguma maneira que elas são Impostos, como podemos fazer isso?

## Programe voltado para Interfaces

Se você já estudou ou pesquisou um pouco sobre Java, com certeza já deve ter ouvido falar nessa frase: "**Programe voltado para Interfaces**", mas afinal, o que seria essa tal de interface? Interfaces são espécies de "**contratos**" que nossas classes podem assinar, após assinar o contrato você deve respeitar tudo que contém nele, vamos trazer o exemplo para o mundo real.

Imagine que José quer ser um jogador de futebol, então o empresário dele o leva para fazer um teste no seu primeiro time, após concluir o teste o time gostou de José e querem assinar um contrato com ele, até esse momento José ainda é um menino normal, porém após assinar o contrato ele será um Jogador de futebol e deverá respeitar tudo o que esta escrito no contrato, seja com objetivos ou metas do time, função, etc...

Voltando ao nosso mundo Java, como podemos criar um contrato?

```java
public interface Imposto {

}
```

Pronto, nosso contrato já estra criado, transformamos o contrato do mundo real em `Interface` no mundo Java, porém não contém nenhuma regra, o que podemos definir em nosso contrato? Se olharmos nosso código cheio de `if` podemos ver que trata-se de realizar o cálculo de um imposto, então quem assinar o contrato `Imposto` deve saber se calcular, vamos adicionar a primeira regra:

```java
public interface Imposto {
	double calcular();
}
```

Primeira e única regra adicionada, agora temos certeza que todas as classes que assinarem esse contrate deverão saber como se calcular.

## Assinando o contrato

Já temos nosso contrato pronto e já explicamos como funciona uma `Interface`, agora, como podemos fazer nossas classes assinarem o mesmo?

```java
public class ICMS implements Imposto {

}
```

Como podem ver, através da palavra `implements` dizemos ao Java: "**Agora a classe ICMS implementa(assina) a interface(contrato) Imposto**", com isso, ela passa a não ser uma classe comúm mas também é do tipo `Imposto`. Após assinar esse contrato com `Imposto` nossa classe não deve estar compilando, por que isso esta acontecendo?

## Cumprindo as regras do contrato

Lembra que definimos apenas uma regra em nosso contrato? Pois é, agora precisamos fazer com que a classe `ICMS` cumpra e respeite essa regra. De forma geral, todas as regras existente em nosso contrato que não estiverem escritas, devem ser escritas por quem assinou o contrato, mas como podemos escrever essas regras?

```java
public class ICMS implements Imposto {

    @Override
    public double calcular() {
        return 0;
    }

}
```

Veja que através da palavra `override` estamos "**sobrescrevendo**" a regra `calcular`, essa sobrescrita deve ser feita para todas as regras não escritas e declaras em nossa `Interface`. Até ai tudo bem, mas vamos sempre devolver zero no cálculo? Precisamos passar o valor para o imposto realizar o calculo, se precisamos "**passar**" valor para a classe, nada melhor do que o construtor para realizar essa função:

```java
public class ICMS implements Imposto {

    private double valor;

    public ICMS(double valor) {
        this.valor = valor;
    }

    @Override
    public double calcular() {
        return 0;
    }

}
```

Pronto, já temos o valor, já assinamos o contrato, falta apenas escrever o método `calcular` de maneira correta:

```java
public class ICMS implements Imposto {

    private double valor;

    public ICMS(double valor) {
        this.valor = valor;
    }

    @Override
    public double calcular() {
        return this.valor * 0.10;
    }

}
```

Pronto, nossa classe `ICMS` esta pronta, estamos calculando os mesmos 10% de antes, agora vamos implementar a classe `IPI`:

```java
public class IPI implements Imposto {

    private double valor;

    public IPI(double valor) {
        this.valor = valor;
    }

    @Override
    public double calcular() {
        return this.valor * 0.20;
    }

}
```

Veja que a classe `IPI` ainda continua calculando os 20%.

## Polimorfismo

Calma, não fique assustado, para todo nome tem uma explicação. Podemos dizer que [Polimorfismo](https://www.caelum.com.br/apostila-java-orientacao-objetos/heranca-reescrita-e-polimorfismo/#7-4-polimorfismo) é uma forma de você utilizar interfaces em nosso códigos que em tempo de execução serão substituídas por nossas classes que implementam essas interfaces, calma, não fique assustado, com o exemplo vocês irão entender, lembra da nossa `CalculadoraDeImpostos`:

```java
public class CalculadoraDeImpostos {

	public double calcular(String imposto, double valor) {
		if (imposto.equals("ICMS"))
			return valor * 0.10;
		else if (imposto.equals("IPI"))
			return valor * 0.20;
		return valor;
	}

}
```

Eu sei, é impossível esquecer esse código kkkk, agora, podemos apenas passar para o método `calcular` os nossos Impostos, mas como podemos fazer isso? Vamos ter que passar todas as classes?

```java
public class CalculadoraDeImposto {

    public double calcular(Imposto imposto) {
        return imposto.calcular();
    }

}
```

Eu sei, é bem chocante a diferença, olha que coisa mais linda, um código limpo, coeso, simples e eficiênte, esse é o uso de **Polimorfismo**, estamos passando nossa *interface*(contrato) como parâmetro do método, agora, qualquer classe que implementa de `Imposto` pode ser passada para o método, ainda não acredita? Veja o código de teste como ficou:

```java
public class TesteCalculadora {

    public static void main(String[] args) {
        CalculadoraDeImposto calculadora = new CalculadoraDeImposto();
        ICMS icms = new ICMS(100.0);
        IPI ipi = new IPI(100.0);
        System.out.println(calculadora.calcular(icms));
        System.out.println(calculadora.calcular(ipi));
    }

}
```

Eu sei, ainda deve estar em dúvida, então abaixo o código sendo testado:

![Exemplo com padrão](https://res.cloudinary.com/mahenrique94/image/upload/v1549725995/calculando-impostos-com-padrao_maq6pz.gif)

Agora sim, um código com padrão e orientado a objetos, se amanhã ou depois surgir um novo imposto, preciamos apenas criar mais uma classe e tudo ainda continuará funcionando.

E ai, gostou? Não deixe de comentar.

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
