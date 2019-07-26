---
autor: "Matheus Castiglioni"
categoria: "Android"
disqus_identifier: "manipulando-views-no-android"
disqus_title: "Manipulando Views No Android"
disqus_url: "https://blog.matheuscastiglioni.com.br/manipulando-views-no-android"
date: 2018-02-27T10:53:35-02:00
draft: false
keywords: [ "Views", "Manipulação", "Referência" ]
slug: "manipulando-views-no-android"
tag: [ "Views", "Manipulação", "Referência" ]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1549719206/manipulando-views-no-android_qrm279.png"
title: "Manipulando Views No Android"
url: "/manipulando-views-no-android"
---

Sabemos que ficar procurando *views* (elementos ou componentes) no Android é um tanto quanto chato, necessitamos muitas linhas de código para realizar muito pouco. Para exemplo do *post* vou estar utilizando a seguinte *app*:

![Exemplo app](https://res.cloudinary.com/mahenrique94/image/upload/v1549719258/exemplo-injetando-views_sc7rw2.gif)

Como pode ver, é uma simples aplicação onde dado um **Nome** é informado um **Olá NOME**, como podemos começar o desenvolvimento dessa aplicação com Android?

## Criando nosso layout

Como o tema do *post* é focar na injeção de *views* irei dar o *layout* da aplicação pronto, assim podemos economizar tempo e focar apenas no desenvolvimento da *app*:

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_height="match_parent"
    android:gravity="center_horizontal"
    android:orientation="vertical"
    android:padding="10dp"
    android:layout_width="match_parent"
    tools:context="blog.matheuscastiglioni.com.br.injetando_views.MainActivity">

    <EditText
        android:layout_height="wrap_content"
        android:id="@+id/et_nome"
        android:hint="Digite seu nome"
        android:textSize="20dp"
        android:layout_width="match_parent"/>

    <Button
        android:layout_height="wrap_content"
        android:id="@+id/btn_ola"
        android:layout_margin="20dp"
        android:text="Ola"
        android:layout_width="wrap_content"/>

    <TextView
        android:layout_height="wrap_content"
        android:id="@+id/tv_nome"
        android:textAlignment="center"
        android:textSize="30dp"
        android:layout_width="match_parent"/>

</LinearLayout>
```

Com esse *layout* teremos nossa *app* com a seguinte aparência:

![Aparencia Injetando Views](https://res.cloudinary.com/mahenrique94/image/upload/v1549719294/aparencia-injetando-views_cvol1c.png)

## Desenvolvendo a app

Com nosso *layout* pronto, já podemos começar a desenvolver o funcionamento da *app*, mas quais seriam os passos à serem desenvolvidos?

1. Adicionar o *click* no botão.
2. Pegar o valor do nome digitado.
3. Mostrar a mensagem de olá com o nome.

Então com nossos passos definidos, vamos começar.

### Adicionando click no botão

Para começarmos adicionando um *click* no botão devemos primeiramente pegar a referência dele, podemos fazer isso através do famoso `findViewById`:

```java
Button btnOla = findViewById(R.id.btn_ola);
```

Pronto, já pegamos nosso botão através do seu `id` com valor de `btn_ola` e guardamos sua referência na variável `btnOla`, agora precisamos adicionar um *listener* de *click*, assim, quando alguém clicar no mesmo, uma determinada função ou trecho de código serão executados.

Para adicionar um novo *listener* podemos utilizar a função `setOnClickListener` que recebe como parâmetro uma classe que seja (implemente) uma (interface) do tipo `OnClickListener`:

```java
btnOla.setOnClickListener(new View.OnClickListener() {

});
```

Pronto, estamos passando uma [classe anônima](https://www.devmedia.com.br/classes-anonimas-e-aninhadas-em-java/31167), mas se você fez o código exatamente da forma que esta ácima, sua classe ainda não deve estar compilando, afinal, o que está acontecendo? Aqui a classe não compila porque não escrevemos o método que nossa *interface* exige, para isso, precisamos sobrescrever o método `onClick`:

```java
btnOla.setOnClickListener(new View.OnClickListener() {
	@Override
	public void onClick(View view) {
		// aqui executamos uma determinada função ou um trecho de código
	}
});
```

Pronto, já temos nosso *listener* adicionado, porém, se você já foi curioso, rodou a aplicação e testou, viu que nada foi executado, isso porque nosso método `onClick`  ainda não faz nada.

### Buscando nossas views

Agora precisamos pegar a referência de nossa *view* do campo **Nome** e a *view* que será utilizada para mostrar a mensagem de olá, sabemos que para buscar ou referênciar nossas *views* utilizamos a função `findViewById` passando como parâmetro o respectivo `id` que queremos buscar:

```java
// buscando botão
EditText etNome = findViewById(R.id.et_nome);
TextView tvNome = findViewById(R.id.tv_nome);

// adicionando listener...
```

- **etNome**: `EditText` onde será digitado nosso nome.
- **tvNome**: `TextView` onde será exibida a mensagem de olá.

Veja novamente a repetição de tarefa, ou seja, buscamos uma *view* e armazenamos sua referência em uma variável com seu respectivo tipo (`Button`, `EditText`, `TextView`, `ListView`, `View`, etc...).

### Pegando o nome informado

Como já temos nossa referência para o campo nome, podemos começar pegando o valor que foi digitado através da função `getText`:

```java
public void onClick(View view) {
	String nome = etNome.getText().toString();
}
```

Aqui tenho certeza que seu código novamente não deve estar compilando, mas afinal, o que esta acontecendo?

![Gif Agnes pensativa](https://res.cloudinary.com/mahenrique94/image/upload/v1549719332/gif-agnes-pensativa_ka19g1.gif)

Repare no erro que está sendo informado:

> Variable `etNome` is accessed from within inner class, needs to be declared final

Em outras palavras o compilado está dizendo: "**Olha amigo, você está tentando utilizar uma variável local dentro de outra classe, para isso, a variável local deve ser final, ou seja, seu valor não pode ser modificado**".

Então o que precisamos fazer é simplesmente informar a palavra `final` na frente da criação (declaração) de nossa variável:

```java
final EditText etNome = findViewById(R.id.et_nome);
```

Tornando-a `final`, com isso a classe deve ser compilada.

### Mostrando a mensagem de olá

Beleza, já temos nosso *listener* no botão adicionado, já pegamos o nome digitado, agora precisamos apenas mostrar a mensagem de olá, para isso vamos utilizar nosso `tvNome`, aqui precisamos apenas concatenar (juntar) a mensagem de olá com o nome digitado:

```java
@Override
public void onClick(View view) {
	String nome = etNome.getText().toString();
	String mensagemDeOla = "Olá " + nome;
}
```

E finalmente exibi-lá para o usuário, mas, como vamos pegar a mensagem e passar para nosso `TextView`? Para isso, o próprio `TextView` possuí o método `setText` onde podemos passar uma `String` para a exibição:

```java
@Override
public void onClick(View view) {
	String nome = etNome.getText().toString();
	String mensagemDeOla = "Olá " + nome;
	tvNome.setText(mensagemDeOla);
}
```

**Lembrando que a variável tvNome também deve ser final**.

Poderíamos ter buscado e referenciado nossas *views* dentro do `onClick`? Sim, mas não seguindo essa abordagem, a cada *click* seria necessário realizar esse processo, por isso, resolvi buscar as *views* apenas uma vez e depois utilizá-las.

Será que nossa aplicação está funcionando? Vamos testar!

![Testando aplicação com nome](https://res.cloudinary.com/mahenrique94/image/upload/v1549719350/testandoa-app-com-nome_siuf4f.gif)

Legal, tudo está funcionando, certo? Errado, vamos tentar clicar no botão sem informar um nome.

![Testando aplicação sem nome](https://res.cloudinary.com/mahenrique94/image/upload/v1549719362/testandoa-app-sem-nome_arf0p9.gif)

Pois é, e mensagem de olá ficou pela metade, cade o nome digitado? Para isso podemos fazer uma simples validação e informar ao usuário que nome é obrigatório:

```java
@Override
public void onClick(View view) {
	String nome = etNome.getText().toString();
	if (nome.equals("")) {
		etNome.setError("Campo obrigatório");
	} else {
		String mensagemDeOla = "Olá " + nome;
		tvNome.setText(mensagemDeOla);
	}
}
```

Uma simples validação, apenas verificando se o nome informado é igual à branco, caso seja, um erro será informado no campo para o usuário ter um *feedback*, após informar o nome, tudo deve funcionar normalmente, vamos testar?

![Testando aplicação sem nome com validação](https://res.cloudinary.com/mahenrique94/image/upload/v1549719374/testando-aplicacao-sem-nome-com-validacao_fqxcnf.gif)

Maravilha, aplicação está pronta e funcionando corretamente.

![Gif da aplicação funcionando](https://res.cloudinary.com/mahenrique94/image/upload/v1549719388/gif-pessoal-comemorando_zpqw3h.gif)

Abaixo segue o código final de classa `Activity`:

```java
package blog.matheuscastiglioni.com.br.injetando_views;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Button btnOla = findViewById(R.id.btn_ola);
        final EditText etNome = findViewById(R.id.et_nome);
        final TextView tvNome = findViewById(R.id.tv_nome);

        btnOla.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String nome = etNome.getText().toString();
                if (nome.equals("")) {
                    etNome.setError("Campo obrigatório");
                } else {
                    String mensagemDeOla = "Olá " + nome;
                    tvNome.setText(mensagemDeOla);
                }
            }
        });
    }

}
```

Caso deseje, o projeto pode ser encontrado em meu github: [injetando-views](https://github.com/mahenrique94/injetando-views)

No próximo *post* irei mostrar como deixar esse trabalho de injeção e referências de *views* mais simples (curioso com o *spoiler*? Não deixe de conferir).

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
