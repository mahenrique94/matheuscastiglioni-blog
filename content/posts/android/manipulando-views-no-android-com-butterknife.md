---
autor: "Matheus Castiglioni"
categoria: "Android"
disqus_identifier: "manipulando-views-no-android-com-butterknife"
disqus_title: "Manipulando Views No Android Com Butterknife"
disqus_url: "https://blog.matheuscastiglioni.com.br/manipulando-views-no-android-com-butterknife"
date: 2018-03-21T08:27:27-02:00
draft: false
keywords: [ "Biblioteca", "ButterKnife", "Lib", "Manipulação", "Referência", "Views" ]
slug: "manipulando-views-no-android-com-butterknife"
tag: [ "Biblioteca", "ButterKnife", "Lib", "Manipulação", "Referência", "Views" ]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1549717350/manipulando-views-no-android-com-butterknife_isveak.png"
title: "Manipulando Views No Android Com Butterknife"
url: "/manipulando-views-no-android-com-butterknife"
---

No primeiro *post* sobre [Manipulando Views no Android](http://blog.matheuscastiglioni.com.br/manipulando-views-no-android) eu mostrei como de forma manual buscar *views* em nossa `Activity` e também como adicionar *listener* para um botão, mas foi um pouco burocrática esse processo de busca, será que não existe uma maneira mais simples do mesmo ser realizado, sendo que esse processo é muito comúm em nosso dia a dia? Sim, existe e será o assunto que veremos nesse *post*.

Para exemplo do *post* vamos criar a mesma aplicação, para você que não viu o *post* anterior (recomendo que leia pois existem dependências de códigos para um melhor entendimento), a aplicação funcionará da seguinte maneira:

![Exemplo da app funcionando com ButterKnife](https://res.cloudinary.com/mahenrique94/image/upload/v1549717464/exemplo-invejtando-views-butterknife_kwuoiq.gif)

Veja que é um simples campo onde um nome é digitado e logo em seguida uma mensagem de olá é mostrada para o respectivo nome.

## Criando o layout

Para focarmos apenas em escrever nosso código Java, vou disponibilizar o *layout* da aplicação:

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
    tools:context="blog.matheuscastiglioni.com.br.injetando_views_butterknife.MainActivity">

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

Com esse *layout* iremos ter a seguinte *app*:

![Resultado do layout](https://res.cloudinary.com/mahenrique94/image/upload/v1549717504/layout-app-injetanvo-views-butterknife_dhubiu.png)

Assim estamos prontos para começar a codificar noss aplicação.

## Conhecendo o ButterKnife

Para injetar as *views* de forma mais simplista vamos utilizar uma biblioteca criada por [Jake Wharton](http://jakewharton.com/) chamada [ButterKnife](http://jakewharton.github.io/butterknife/), com ela você verá que é muito mais simples trabalhar com manipulações e referências de nossas *views*.

### Instalando o ButterKnife

Para realzar a instalação da biblioteca, devemos adicionar o seguinte conteúdo em nosso `gradle` referente a nossa `app`:

```gradle
compile 'com.jakewharton:butterknife:8.8.1'
annotationProcessor 'com.jakewharton:butterknife-compiler:8.8.1'
```

O arquivo completo pode ser visualizado [aqui](https://github.com/mahenrique94/injetando-views-butterknife/blob/master/app/build.gradle).

Após realizar a modificação, o Gradle irá pedir para aconselhar uma sincronização referente a nova mudança, faça a sincronização e aguarde o processo finalizar. Assim que o mesmo for finalizado já teremos em nossa *app* o ButterKnife pronto para uso.

### Configurando o ButterKnife

O ButterKnife é muito simples de ser configurado, precisamos apenas chamar o seu método `bind` na `Activity` que desejamos utilizá-lo, devemos fazer isso no `onCreate` da mesma:

```java
@Override
protected void onCreate(Bundle savedInstanceState) {
	super.onCreate(savedInstanceState);
	setContentView(R.layout.activity_main);
	ButterKnife.bind(this); // Configurando o ButterKnife
}
```

Para nosso exemplo, adicionamos o código na `MainActivity`, isso já deve ser o suficiente para sermos capazes de injetar nossas *views*.

### Injetando Views com o ButterKnife

Você lembra como foi feita a busca de nossas *views* no *post* anterior? Caso não lembra, segue o código abaixo:

```java
EditText etNome = findViewById(R.id.et_nome);
TextView tvNome = findViewById(R.id.tv_nome);
```

Nesse trecho de código buscamos tanto o campo onde é digitado o nome quanto a parte onde a mensagem de olá é informada, mas, será que vamos continuar utilizando o `findViewById`? Não, para isso, o ButterKnife trás a anotação `BindView`, que deve ser utilizada como atributos de nossa classe:

```java
@BindView(R.id.et_nome)
EditText et_nome;
@BindView(R.id.tv_nome)
TextView tv_nome;
```
Esse será o resultado do código anterior, estamos falando para o ButterKnife:

> Olha ButterKnife busca em nossa view (Activity) algum EditText ou TextView que tenham os id's: R.id.et_nome ou R.i.tv_nome.

**Obs**: Ele só irá fazer o *bind* (injeção) das *views* se você informou o `ButterKnife.bind(this)` no `onCreate` da `Activity` onde as *views* estão.

Beleza, já temos nossas views, qual era o próximo passo? Sim, adicionar o *listener* em nosso botão (veja que é muito importante que leia o [primeiro](http://blog.matheuscastiglioni.com.br/manipulando-views-no-android) *post*), caso ainda não tenha lido, o *listener* era criado da seguinte maneira:

```java
Button btnOla = findViewById(R.id.btn_ola);
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
```

Veja que é um pouco complicado, temos que buscar o botão, setar o *listener* e criar uma classe anônima como parâmetro do *listener* sobrescrevendo o método `onClick`.

É hora de simplificar esse código.

![Gif comemorando a simplificação](https://res.cloudinary.com/mahenrique94/image/upload/v1549717547/gif-pessoal-comemorando_u4ouwy.gif)

### Adicionando o listener em nosso botão

Essa sem dúvida foi a tarefa mais chata de fazermos com o Android puro (sem bibliotecas), mas com o ButterKnife ficará muito mais simples e fácil, para isso, temos a anotação `OnClick`:

```java
@OnClick(R.id.btn_ola)
public void ola() {
	if (!this.et_nome.getText().toString().equals("")) {
		this.tv_nome.setText(String.format("Olá %s", this.et_nome.getText().toString()));
	}
}
```

Veja que fantástico, simplesmente informamos o ID do botão e linkamos ele com o método `ola`, assim, a cada *click* o método será executado, simples não? Pois é, o ButterKnife possuí muitos outros recursos que podem ser encontrado em sua [documentação](http://jakewharton.github.io/butterknife/).

O Código está um pouco diferente pois possuí menos validações, a ideia é apenas mostrar como podería  ser feito para adicionar o *listener* de *click* no botão.

Poderíamos se houver a necessidade passar o botão encontrado como parâmetro do nosso método:

```java
@OnClick(R.id.btn_ola)
public void ola(Button btn_ola) {
	if (!this.et_nome.getText().toString().equals("")) {
		this.tv_nome.setText(String.format("Olá %s", this.et_nome.getText().toString()));
	}
}
```

Mas nesse exemplo não faria sentido.

Dessa maneira, teremos nossa aplicação em funcionamento:

![App funcionando com ButterKnife](https://res.cloudinary.com/mahenrique94/image/upload/v1549717464/exemplo-invejtando-views-butterknife_kwuoiq.gif)

E aí, gostou? Já conhecia o ButterKnife? Não deixe de comentar e se inscrever na [*newsletter*](http://eepurl.com/ggP7Rv) para receber novas novidades por email.
