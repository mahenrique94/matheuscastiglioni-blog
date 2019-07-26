---
autor: "Matheus Castiglioni"
categoria: "Android"
disqus_identifier: "consumindo-web-service-no-android-com-retrofit"
disqus_title: "Consumindo Web Service No Android Com Retrofit"
disqus_url: "https://blog.matheuscastiglioni.com.br/consumindo-web-service-no-android-com-retrofit"
date: 2017-12-12T15:54:21-02:00
draft: false
keywords: [ "Back-End", "CEP", "HTTP", "Requisição", "Retrofit", "Square", "Web Service" ]
slug: "consumindo-web-service-no-android-com-retrofit"
tag: [ "Back-End", "CEP", "HTTP", "Requisição", "Retrofit", "Square", "Web Service" ]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1549725436/consumindo-web-service-no-android-com-retrofit_cbcb0n.png"
title: "Consumindo Web Service No Android Com Retrofit"
url: "/consumindo-web-service-no-android-com-retrofit"
---

Continuando os *posts* sobre consumir *web service's* no Android, no *post*  [Consumindo Web Service no Android](http://blog.matheuscastiglioni.com.br/consumindo-web-service-no-android), não foi utilizado nenhuma biblioteca para auxiliar o consumo, realizamos a conexão, pegamos e tratamos a resposta tudo manualmente.

Porém nesse *post*, iremos melhorar o exemplo dado anteriormente, portanto, caso ainda não tenha lido o [*post* anterior](http://blog.matheuscastiglioni.com.br/consumindo-web-service-no-android) recomendo que vá até ele e faça a leitura antes de continuar o atual.

Podemos ver que consumir serviços é uma tarefa muito comum do dia a dia, pensando nisso, será que existe alguma maneira de simplificarmos essa tarefa? Sim, pensando nisso a [Square](http://square.github.io/) criou o [Retrofit](http://square.github.io/retrofit/), uma biblioteca *open source* que transforma toda aquela parte chata de consumir um simples serviço em uma facilidade tremenda.

![Gif animado minions](https://res.cloudinary.com/mahenrique94/image/upload/v1549725673/gif-animado-minions_ofx2l3.gif)

## Começando com o Retrofit

Com o Retrofit conseguimos realizar o consumo de serviços fácilmente, a unica necessidade é realizar algumas configurações, depois de prontas tudo fica tranquilo.

## Instalando o Retrofit

O primeiro passo que devemos realizar é adicionar o Retrofit como dependência de nosso projeto:

```gradle
compile 'com.squareup.retrofit2:retrofit:2.3.0'
```

Adicione em seu `build.gradle` referente a **app** e espere o Gradle baixar e sincronizar a nova dependência de nosso projeto.

## Configurando o Retrofit

O primeiro passo será criar uma classe para ser responsável em configurar e instânciar o Retrofit para podermos utilizá-lo, se trata de uma classe referente a configuração e estamos configurando Retrofit, nada melhor que `RetrofitConfig` para o nome:

```java
public class RetrofitConfig {

}
```

A configuração do Retrofit será feita durante a inicialização da classe, sendo assim, temos que configurá-lo no construtor da mesma:

```java
public RetrofitConfig() {
	// aqui vem a configuração
}
```

Mas afinal, quais configurações devemos fazer Matheus? Pois é, ainda não comentei, os passos que deveremos seguir são:

- Informar a URL base do *web service*
- Adicionar um conversor de `String`(nossa resposta é um JSON, porém, a mesma vem em formato de String) para CEP(que será nosso objeto responsável por representar o CEP).
- E finalmente criar um objeto que representa o Retrofit.

### Começando a configuração

Precisamos de um objeto do `Retrofit`, mas como podemos criá-lo? Para começarmos a configurá-lo temos o seu `Builder`, bem comum para construções de objetos:

```java
public RetrofitConfig() {
	new Retrofit.Builder();
}
```

### Configurando a URL do serviço

Para definir a URL que será utilizada no *web service* temos o método `baseUrl`:

```java
public RetrofitConfig() {
	new Retrofit.Builder().baseUrl("http://ws.matheuscastiglioni.com.br/ws/");
}
```

Aqui tem um detalhe, a URL deve sempre terminar com `/` senão iremos ter uma `Exception` ao tentar utilizá-lo.

### Setando o conversor

Como mencionado no segundo passo, precisamos converter a resposta que é um JSON em formato de `String`:

```json
{"codibge":3530706,"codestado":35,"cep":"13845-373","logradouro":"Rua Caiapós","complemento":"","bairro":"Jardim Igaçaba","cidade":"Mogi Guaçu","estado":"SP"}
```

Para um objeto do tipo `CEP`, então devemos setar quem será o responsável por realizar essa conversão, afinal, não queremos ter que ficar nos preocupando em converter dados de resposta, queremos apenas consumir o serviço.

### Conheça o Jackson

Assim como no primeiro *post* utilizamos o [GSON](https://github.com/google/gson), aqui também iremos utilizar uma outra biblioteca responsável em realizar a nossa conversão, porém, não iremos utilizar o já mencionado GSON, mas se o mesmo já foi utilizado então porque você não o utiliza novamente Matheus? Para trabalhar junto com o Retrofit eu prefiro o [Jackson](https://github.com/FasterXML/jackson).

## Instalando o Jackson

Como já fizemos anteriormente com o Retrofit, também devemos declarar a dependência do Jackson em nosso projeto:

```gradle
compile 'com.squareup.retrofit2:converter-jackson:2.3.0'
```

Basta adicionar essa linha logo após a dependência do Retrofit, após isso, o Gradle novamente irá realizar o download e sincronizar o Jackson com o nosso projeto.

### Configurando o Jackson

Continuando o segundo passo, devemos agora configurar o Retrofit para trabalhar com o Jackson, podemos fazer isso através do método `addConverterFactory` que recebe a classe que será responsável por lidar com a conversão:

```java
public RetrofitConfig() {
	this.retrofit = new Retrofit.Builder()
			.baseUrl("http://ws.matheuscastiglioni.com.br/ws/")
			.addConverterFactory(JacksonConverterFactory.create());
}
```

### Criando o Retrofit

E por último não menos importante, devemos criar finalmente o objeto Retrofit para utilizarmos em nosso projeto, para isso temos o método `build`:

```java
public RetrofitConfig() {
	new Retrofit.Builder()
			.baseUrl("http://ws.matheuscastiglioni.com.br/ws/")
			.addConverterFactory(JacksonConverterFactory.create())
			.build();
}
```

Mas afinal, onde esta nosso objeto Retrofit? Para armazená-lo vamos criar um atributo em nossa classe, que será setado assim que a mesma for instanciada:

```java
public class RetrofitConfig {

    private final Retrofit retrofit;

    public RetrofitConfig() {
        this.retrofit = new Retrofit.Builder()
                .baseUrl("http://ws.matheuscastiglioni.com.br/ws/")
                .addConverterFactory(JacksonConverterFactory.create())
                .build();
    }

}
```

Pronto, até o momento já temos nosso Retrofit configurado, vamos agora consumir nosso *web service*

## Configurando nosso serviço

O Retrofit trabalha com serviços(*services*), para criar um serviço(*service*) precisamos configurá-lo e seguir alguns passos, assim como fizemos com o Retrofit:

- Criar o serviço
- Criar a requisição
- Definir o [verbo HTTP](https://www.devmedia.com.br/servicos-restful-verbos-http/37103)(Get, Post, Delete, Put, etc...)
- Definir a URL
- Definir os parâmetros que serão enviados na requisição
- Definir o retorno

### Criando o serviço

Para criar um serviço, precisamos apenas de uma `interface`, se o serviço trata-se de um CEP, então nada melhor do que `CEPService`:

```java
public interface CEPService {

}
```

Pronto, já temos nosso serviço criado, precisamos agora ir para o segundo passo e criar a requisição(método) que ele irá realizar.

### Criando a requisição

Como pretendemos buscar as informações desse CEP, podemos definir a requisição como `buscarCEP`:

```java
public interface CEPService {

    buscarCEP();

}
```

Beleza Matheus, mas isso é apenas uma `interface` normal do Java, onde esta toda a configuração que você mencionou anteriormente? Calma, vamos devargazinho que a gente chega no pódio kk

### Definindo o verbo

Nosso serviço irá buscar, ou seja, pegar, que seria GET em inglês, mas como podemos definir isso?

```java
public interface CEPService {

    @GET
    buscarCEP();

}
```

Pronto, agora definimos ao serviço que a requisição trata-se do verbo GET.

### Definindo a URL

Já definimos a requisição, definimos o verbo, mas para onde será realizada a requisição? Sim, o Retrofit não tem bola de cristal para adivinhar, precisamos informar para onde será feito o GET, novamente, como podemos fazer isso?

```java
public interface CEPService {

    @GET("cep/find/{cep}/json")
    buscarCEP();

}
```

Veja que informamos a URL dentro dos parenteses do GET, observe também que informamos apenas a parte relativa a URL base configurada no Retrofit `baseUrl("http://ws.matheuscastiglioni.com.br/ws/")`, sendo assim a URL final será: `"http://ws.matheuscastiglioni.com.br/ws/cep/find/{cep}/json"`.

Mas Matheus, porque você definou o CEP como `{cep}`? Eu sei, você é apressado, esta pensando em várias possibilidades e tenho certeza que acertou, é nesse trecho que vamos informar um parâmetro.

### Definindo os parâmetros

Como mencionado anteriormente, veja que em nossa URL `cep/find/{cep}/json` informamos uma lacuna `{cep}`, é nela que deve entrar o CEP informado pelo usuário, mas como vamos substituir a lacuna por um valor:

```java
public interface CEPService {

    @GET("cep/find/{cep}/json")
	buscarCEP(String cep);

}
```

Será que apenas receber o CEP como parâmetro de nosso método é suficiente? Se você achou que sim sinto muito lhe dizer mas esta errado, precisamos mapear a qual lacuna esse parâmetro pertence, realizamos esse mapeamento através do `@Path` seguido pelo nome da lacuna:

```java
public interface CEPService {

    @GET("cep/find/{cep}/json")
    buscarCEP(@Path("cep") String cep);

}
```

Pronto, agora sim, o valor passado para o parâmetro CEP será preenchido na lacuna `{cep}`, se nossa lacuna chamasse `{nome}`, então nosso `@Path` seria `nome`.

### Definindo o retorno

Até agora tenho certeza que sua classe não esta compilando, afinal não informamos o retorno do método, mas, qual será o retorno? O Retrofit trabalha com `Call's`, então precisamos apenas informá-la?

```java
public interface CEPService {

    @GET("cep/find/{cep}/json")
    Call buscarCEP(@Path("cep") String cep);

}
```

Aqui entra outro detalhe, lembra que adicionamos um conversor de nossa resposta para um objeto do tipo `CEP`, pois é, a `Call` é uma classe genérica, portanto, precisamos avisá-la qual será o retorno esperado, assim o Jackson entra em ação e tentar converter a nossa resposta automaticamente para o tipo(objeto) de retorno informado, mas como podemos falar para nossa `Call` o que ela deve retornar?

```java
public interface CEPService {

    @GET("cep/find/{cep}/json")
    Call<CEP> buscarCEP(@Path("cep") String cep);

}
```

Pronto, agora tudo esta completo.

Criamos o serviço, criamos o método(requisição), definimos o tipo de verbo, definimos o parâmetro e por último informamos o retorno.

Um detalhe que talvez para você que não leu o primeiro *post* esteja pensando é em relação a classe `CEP`, de onde ela vem? Para te ajudar, segue o código dela que também pode ser encontrado no primeiro *post*:

```java
@JsonIgnoreProperties({"codibge", "codestado"})
public class CEP {

    private String cep;
    private String logradouro;
    private String complemento;
    private String bairro;
    private String cidade;
    private String estado;

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }

    public String getLogradouro() {
        return logradouro;
    }

    public void setLogradouro(String logradouro) {
        this.logradouro = logradouro;
    }

    public String getComplemento() {
        return complemento;
    }

    public void setComplemento(String complemento) {
        this.complemento = complemento;
    }

    public String getBairro() {
        return bairro;
    }

    public void setBairro(String bairro) {
        this.bairro = bairro;
    }

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    @Override
    public String toString() {
        return "CEP: " + getCep()
                + "\nLogradouro: " + getLogradouro()
                + "\nComplemento: " + getComplemento()
                + "\nBairro: " + getBairro()
                + "\nCidade:" + getCidade()
                + "\nEstado: " + getEstado();
    }
}
```

A única diferença aqui é em relação ao `@JsonIgnoreProperties`, essa anotação serve para ignorar campos que contém em nossa resposta porém não existe em nosso modelo, com essa tag estamos falando para o Jackson: "**Olha Jackson, existe as propriedades codibge e codestado em nossa resposta, porém na hora de realizar a conversão para um objeto, pode ignorá-las**. Se essa anotação não existir ele irá tentar pegar o valor de **codibge** e **codestado** e tentar atribuir o valor para algum atributo com o mesmo nome, como ambos não existem iria dar uma `Exception`.

## Utilizando o Retrofit

Como o foco do *post* é na utilização do Retrofit irei disponibilizar o *layout* assim como foi no primeiro *post*:

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:padding="50dp"
    android:layout_width="match_parent"
    tools:context="br.com.matheuscastiglioni.blog.requisicao_http_retrofit.MainActivity">

    <EditText
        android:digits="0123456789"
        android:layout_height="wrap_content"
        android:hint="CEP"
        android:id="@+id/etMain_cep"
        android:textColor="#595959"
        android:textSize="25sp"
        android:inputType="number"
        android:layout_width="match_parent"/>

    <LinearLayout
        android:gravity="center"
        android:layout_height="wrap_content"
        android:orientation="horizontal"
        android:layout_width="match_parent">

        <Button
            android:background="@color/colorPrimary"
            android:layout_height="wrap_content"
            android:id="@+id/btnMain_buscarCep"
            android:layout_marginBottom="10dp"
            android:padding="10dp"
            android:text="Buscar CEP"
            android:textColor="#FDFDFD"
            android:textSize="22sp"
            android:layout_width="wrap_content"/>

    </LinearLayout>

    <TextView
        android:layout_height="match_parent"
        android:id="@+id/etMain_resposta"
        android:textColor="#595959"
        android:textSize="20sp"
        android:layout_width="match_parent"/>

</LinearLayout>
```

Com esse layout você já deve ter uma app parecido com:

![Layout da APP](https://res.cloudinary.com/mahenrique94/image/upload/v1549725733/buscando-cep-requisicao-http-com-retrofit_j3ivnk.png)

### Definindo o click do botão

Novamente, mais código igual, precisamos ouvir o *click* do botão, assim que o mesmo for clicado a requisição deve ser feita e uma resposta deve ser informada ao usuário, podemos fazer isso da seguinte maneira:

```java
public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        final EditText cep = findViewById(R.id.etMain_cep);
        final TextView resposta = findViewById(R.id.etMain_resposta);
        Button btnBuscarCep = findViewById(R.id.btnMain_buscarCep);
        btnBuscarCep.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                // aqui devemos utilizar o retrofit
            }
        });
    }

}
```

Para começar a usar nosso serviço, devemos falar para o Retrofit criá-lo, mas como podemos fazer isso? Através do método `create`:

```java
public CEPService getCEPService() {
	return this.retrofit.create(CEPService.class);
}
```

Nossa classe de configuração completa fica da seguinte maneira:

```java
public class RetrofitConfig {

    private final Retrofit retrofit;

    public RetrofitConfig() {
        this.retrofit = new Retrofit.Builder()
                .baseUrl("http://ws.matheuscastiglioni.com.br/ws/")
                .addConverterFactory(JacksonConverterFactory.create())
                .build();
    }

    public CEPService getCEPService() {
        return this.retrofit.create(CEPService.class);
    }

}
```

Vamos então criar e pegar o serviço do CEP criado pelo Retrofit:

```java
new RetrofitConfig().getCEPService().buscarCEP();
```

Apenas com esse código não irá funcionar, lembra que definimos um parâmetro para o método `buscarCEP`, pois é, devemos informá-lo, mas de onde iremos pegar o CEP? Se você reparar em nosso código, já temos uma referência para o `EditText` onde o usuário digita o CEP:

```java
final EditText cep = findViewById(R.id.etMain_cep);
```

Precisamos apenas pegar seu valor e passar para o método:

```java
new RetrofitConfig().getCEPService().buscarCEP(cep.getText().toString());
```

Pronto, com isso o Retrofit irá retornar uma `Call`, esta lembrado? Vamos atribuir essa `Call` para uma variável:

```java
Call<CEP> call = new RetrofitConfig().getCEPService().buscarCEP(cep.getText().toString());
```

Porém reparem que ainda não realizamos a requisição, apenas criamos e configuramos, como podemos de fato então realizar o *request* e obter a resposta(*response*)? Para isso temos o método `enqueue` que recebe uma classe anônima do tipo `CallBack`:

```java
call.enqueue(new Callback<CEP>() {
	@Override
	public void onResponse(Call<CEP> call, Response<CEP> response) {
		// pegar a resposta
	}

	@Override
	public void onFailure(Call<CEP> call, Throwable t) {
		// tratar algum erro
	}
});
```

Afinal, como podemos pegar a resposta e obter nosso objeto `CEP`, poemos fazer isso através do `body` da nossa `response`:

```java
 @Override
public void onResponse(Call<CEP> call, Response<CEP> response) {
	CEP cep = response.body();
}
```

Veja que Jackson já fez tudo para a gente, precisamos agora apenas informar a resposta ao nosso usuário:

```java
 @Override
public void onResponse(Call<CEP> call, Response<CEP> response) {
	CEP cep = response.body();
	resposta.setText(cep.toString());
}
```

Já haviamos também buscado a referência de nosso `TextView` onde informamos a resposta:

```java
final TextView resposta = findViewById(R.id.etMain_resposta);
```

O último detalhe é em relação a alguma falha, devemos logar uma mensagem para sabermos qual erro ocorreu:

```java
@Override
public void onFailure(Call<CEP> call, Throwable t) {
	Log.e("CEPService   ", "Erro ao buscar o cep:" + t.getMessage());
}
```

Caso tenha se perdido em algum passo ou esteja em dúvida, segue a classe completa:

```java
public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        final EditText cep = findViewById(R.id.etMain_cep);
        final TextView resposta = findViewById(R.id.etMain_resposta);
        Button btnBuscarCep = findViewById(R.id.btnMain_buscarCep);
        btnBuscarCep.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Call<CEP> call = new RetrofitConfig().getCEPService().buscarCEP(cep.getText().toString());
                call.enqueue(new Callback<CEP>() {
                    @Override
                    public void onResponse(Call<CEP> call, Response<CEP> response) {
                        CEP cep = response.body();
                        resposta.setText(cep.toString());
                    }

                    @Override
                    public void onFailure(Call<CEP> call, Throwable t) {
                        Log.e("CEPService   ", "Erro ao buscar o cep:" + t.getMessage());
                    }
                });
            }
        });
    }

}
```

Pronto, agora já devemos ser capazes de informar e buscar os dados de um CEP de maneira muito mais fácil.

![Galinha animada](https://res.cloudinary.com/mahenrique94/image/upload/v1549725758/gif-animado-galinha_we9mk5.gif)

Não acredita que tudo deu certo? Então veja o funcionamento abaixo:

![Exemplo com Retrofit](https://res.cloudinary.com/mahenrique94/image/upload/v1549725771/buscando-cep-requisicao-http-com-retrofit_rguxgv.gif)

Caso tenha ficado alguma dúvida não deixe de comentar, porém espero que tudo tenha dado certo \o/.

Se precisar o projeto para exemplo do *post* pode ser encontrado [aqui](https://github.com/mahenrique94/requisicao-http-retrofit).

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
