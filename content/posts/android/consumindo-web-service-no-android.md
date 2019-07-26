---
autor: "Matheus Castiglioni"
categoria: "Android"
disqus_identifier: "consumindo-web-service-no-android"
disqus_title: "Consumindo Web Service No Android"
disqus_url: "https://blog.matheuscastiglioni.com.br/consumindo-web-service-no-android"
date: 2017-11-14T08:41:59-02:00
draft: false
keywords: [ "Back-End", "CEP", "HTTP", "Requisição", "Web Service" ]
slug: "consumindo-web-service-no-android"
tag: [ "Back-End", "CEP", "HTTP", "Requisição", "Web Service" ]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1549725436/consumindo-web-service-no-android-com-retrofit_cbcb0n.png"
title: "Consumindo Web Service No Android"
url: "/consumindo-web-service-no-android"
---

Uma tarefa muito comúm do dia a dia seria realizar requisições [HTTP](https://pt.wikipedia.org/wiki/Hypertext_Transfer_Protocol) e consumir *[Web Services](https://pt.wikipedia.org/wiki/Web_service)*, mas as vezes pode ser um tanto quanto chata pois precisa de configurações e alguns passos a serem seguidos.

Para exemplo do post, vamos consumir um serviço para buscas de CEP, os passos que deveriamos seguir são:

- Desenhar o *layout*
- Consumir nosso serviço
- Mostrar os dados consumidos para o usuário

Após concluir todos esses passos teremos nossa app funcionando da seguinte maneira:

![Exemplo consumir serviço de CEP](https://res.cloudinary.com/mahenrique94/image/upload/v1549726135/buscando-cep-requisicao-http_jszqad.gif)

## Desenhando nossa app

O primeiro passo será criar o *layout* da nossa app, como o assunto do *post* refere-se ao *web service*, irei disponibilizar o layout:

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:padding="50dp"
    android:layout_width="match_parent"
    tools:context="br.com.matheuscastiglioni.blog.requisicao_http.MainActivity">

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

Após adicionar esse *layout* para a *activity*, devemos ter nossa app parecido com:

![App para consumir CEP](https://res.cloudinary.com/mahenrique94/image/upload/v1549726157/buscando-cep-requisicao-http_skse64.png)

## Consumindo um serviço

Agora que o *layout* esta pronto, podemos começar a consumir nosso serviço, para isso alguns passos devem ser seguidos, sendo eles:

- Adicionar um listener no botão **Buscar CEP**
- Validar se o CEP foi digitado
- Realizar a busca do CEP
- Mostrar os dados para o usuário

### Adicionando um listener no botão

Primeiro vamos começar adicionando um *listener* em nosso botão, para quando ele for **clicado** realizar alguma função, mas como podemos fazer isso ? Para trabalhar com eventos de *click* em botões podemos utilizar o `setOnClickListener`.

Vamos buscar nosso botão e atribuí-lo em uma variável:

```java
Button btnBuscarCep = findViewById(R.id.btnMain_buscarCep);
```

Agora precisamos adicionar o *listener* no botão:

```java
btnBuscarCep.setOnClickListener(new View.OnClickListener() {
	@Override
	public void onClick(View view) {
		// buscar o CEP
	}
});
```

Pronto, com isso já devemos ser capazes de escutar e emitir alguma função quando o botão for clicado.

### Criando a classe para buscar o CEP

Para realizar a busca do CEP vamos criar uma classe responsável por esse requisição HTTP:

```java
public class HttpService {

}
```

Vou chamar a classe de `HttpService` pois a mesma irá consumir um serviço HTTP. Aqui entra um detalhe, toda requisição HTTP deve ser feita em *background* pelo Android, ou seja, a mesma não pode  ser feita na *thread* principal, mas porque isso ocorre ?

#### Entendendo como uma requisição HTTP funciona

Uma requisição HTTP é feita da seguinte maneira:

- Primeiro devemos configurar a requisição(URL, cabeçalhos e resposta)
- Depois de configurada podemos realizar a requisição
- Durante o processo de requisição devemos aguardar o servidor responsável processa-la
- Após o servidor processa-la podemos pegar o retorno

Veja que no terceiro passo não sabemos quanto tempo o servidor irá levar para conseguir processar a requisição e devolver a resposta para a gente, por isso o Android exige que a requisição seja feita em *background*, assim o app não irá travar ou ficar congelado para o usuário enquanto a requisição é realizada.

Beleza Matheus, agora sabemos o motivo do Android exigir que a requisição seja feita em *background* ou em segundo plano, mas como podemos fazer isso ?

#### Adaptando nossa classe

O primeiro passo será extender a classe `AsyncTask` do Android responsável por realizar tarefas em *background*.

```java
public class HttpService extends AsyncTask<Void, Void, CEP> {

}
```

Opa, espera ae Matheus, que doidera é essa de `Void, Void, CEP` ?

#### Parâmetros do AsyncTask

Calma, vamos devagar, para tudo tem uma explicação, sempre que extendemos a `AsyncTask` devemos passar esse três parâmetros para ela, sendo eles:

- **Primeiro**: Será o tipo de parâmetro enviado para a execução da classe
- **Segundo**: Será o tipo de parâmetro recebido no método `onProgressUpdate`(não iremos utiliza-lo, o mesmo é chamado sempre que a requisição é atualizada, ideal para barras de progresso)
- **Terceiro**: Será o tipo de retorno da classe

### Criando o modelo CEP

Repare que o terceiro parâmetro da `AsyncTask` é uma classe `CEP`, mas ainda não temos ela, então vamos cria-la:

```java
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

Veja que trata apenas de uma classe para representar e armazenar as informações de nosso CEP, não tem segredo.

Bom, agora que já extendemos a classe `AsyncTask` e conseguimos entender seus parâmetros, devemos sobrescrever o método responsável pela execução em *background*:

#### Realizando a requisição em background

O único método que somos obrigados a sobrescrever quando extendemos de `AsyncTask` é o `doInBackground`, como o próprio nome já diz, será o método responsável por realizar a requisição para nosso *web service* em *background*.

```java
@Override
protected CEP doInBackground(Void... voids) {
	// realizar requisição e consumir o serviço
}
```

Para realizar a requisição precisamos de um CEP, mas em nossa classe não recebemos ele ainda, como podemos resolver o problema ? Se nossa classe `HttpService` precisa de um CEP para funcionar, porque não passar o CEP pelo construtor ? Assim garantimos que sempre ela terá um CEP ao ser instânciada(usada):

```java
private final String cep;

public HttpService(String cep) {
	this.cep = cep;
}
```

Veja que agora já possuímos um CEP para buscar os dados. O primeiro passo para nossa requisição funcionar será validar o CEP digitado e passado para nossa classe:

```java
@Override
protected CEP doInBackground(Void... voids) {
	if (this.cep != null && this.cep.length() == 8) {
		// realizar busca
	}
}
```

Repare que agora estamos validando se foi passado um CEP e se o mesmo contém oito dígitos.

#### Configurando e realizando a requisição

Vamos começar a configurar nossa requisição, o primeiro passo é termos uma `URL` para consumirmos:

```java
URL url = new URL("http://ws.matheuscastiglioni.com.br/ws/cep/find/" + this.cep + "/json/");
```

Durante a construção da `URL` pode acontecer de passarmos uma inválida ou que não existe, por isso, devemos realizar um tratamento de exceção com `try catch`:

```java
try {
	URL url = new URL("http://ws.matheuscastiglioni.com.br/ws/cep/find/" + this.cep + "/json/");
	} catch (MalformedURLException e) {
		e.printStackTrace();
	}
}
```

Agora precisamos abrir uma conexão e configurar os cabeçalhos dela(Tipo de requisição, tipo de retorno, tempo máximo de espera, etc...):

```java
try {
	URL url = new URL("http://ws.matheuscastiglioni.com.br/ws/cep/find/" + this.cep + "/json/");
	HttpURLConnection connection = (HttpURLConnection) url.openConnection();
	connection.setRequestMethod("GET");
	connection.setRequestProperty("Content-type", "application/json");
	connection.setRequestProperty("Accept", "application/json");
	connection.setDoOutput(true);
	connection.setConnectTimeout(5000);
	} catch (MalformedURLException e) {
		e.printStackTrace();
	}
}
```

Com as configurações realizadas, precisamos de fato, realizar a conexão, ou seja, conectar em nossa `url`:

```java
connection.connect();
```

Pronto, ja conseguimos conectar, mas não basta conectar e realizar a requisição, precisamos de fato pegar a resposta e salvar em alguma variável, como podemos fazer isso ?

#### Lendo a resposta da requisição

Podemos ler a resposta facilmente com a classe `Scanner ` do pacote `java.io`, ela abstrai bastante a complexidade de ler informações:

```java
Scanner scanner = new Scanner();
```

Beleza, estamos criando nosso `scanner` mas de onde ele vai ler as informações ? Para isso temos o método `openStream` em nossa `url`:

```java
Scanner scanner = new Scanner(url.openStream());
```

Como quase todas as classes do pacote `java.io`, devemos tratar a exceção para arquivos não encontrados, como já temos nosso `try catch`, precisamos apenas adicionar mais um `catch` em nosso `try`:

```java
catch (IOException e) {
	e.printStackTrace();
}
```

Agora, com as exceções tratadas e nosso `scanner` recebendo as informações, já podemos realizar a leitura da resposta:

```java
StringBuilder resposta = new StringBuilder();
// if omitido

Scanner scanner = new Scanner(url.openStream());
while (scanner.hasNext()) {
	resposta.append(scanner.next());
}
```

Beleza, tudo certo ? Errado, até o momento lemos a resposta e passamos para a classe `StringBuilder`, porém, lembra que o terceiro parâmetro de nosso `AsyncTask` era do tipo `CEP` ? Pois é, sendo assim precisaremos retornar um `CEP` em nosso método `doInBackground`, pois até agora temos um JSON lido dentro de uma String:

```json
{"codibge":3530706,"codestado":35,"cep":"13845-373","logradouro":"Rua Caiapós","complemento":"","bairro":"Jardim Igaçaba","cidade":"Mogi Guaçu","estado":"SP"}
```

Afinal, como podemos pegar esse JSON, gravar dentro de uma `String` e converte-lo para a classe `CEP` ?

#### Convertendo dados do json

Realizar a conversão de dados em Java pode ser algo trabalhoso, sabendo isso, a Google lançou uma biblioteca chamada [GSON](https://github.com/google/gson), responsável em abstrair a complexidade na hora de converter dados relacionados com JSON, para começar a usa-la, devemos declarar a dependência em nosso `build.gradle`:

```graddle
compile 'com.google.code.gson:gson:2.8.2'
```

Depois de adicionar a dependência, realize o sincronismo do Gradle.

#### Retornando um CEP

Com nosso GSON instalado, podemos converter nosso JSON para um objeto do tipo CEP da seguinte maneira:

```java
return new Gson().fromJson(resposta.toString(), CEP.class);
```

Muito simples não ?

Agora que nossa classe responsável por realizar a requisição esta pronta, podemos utilizada em *listener* de nosso botão. Caso tenha se perdido em algum passo, segue a classe completa:

```java
public class HttpService extends AsyncTask<Void, Void, CEP> {

    private final String cep;

    public HttpService(String cep) {
        this.cep = cep;
    }

    @Override
    protected CEP doInBackground(Void... voids) {
        StringBuilder resposta = new StringBuilder();

        if (this.cep != null && this.cep.length() == 8) {
            try {
                URL url = new URL("http://ws.matheuscastiglioni.com.br/ws/cep/find/" + this.cep + "/json/");

                HttpURLConnection connection = (HttpURLConnection) url.openConnection();
                connection.setRequestMethod("GET");
                connection.setRequestProperty("Content-type", "application/json");
                connection.setRequestProperty("Accept", "application/json");
                connection.setDoOutput(true);
                connection.setConnectTimeout(5000);
                connection.connect();

                Scanner scanner = new Scanner(url.openStream());
                while (scanner.hasNext()) {
                    resposta.append(scanner.next());
                }
            } catch (MalformedURLException e) {
                e.printStackTrace();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        return new Gson().fromJson(resposta.toString(), CEP.class);
    }
}
```

### Retornando os dados para o usuário

Bom, até o momento de todos os passos que deveriamos realizar:

- Adicionar um listener no botão **Buscar CEP**
- Validar se o CEP foi digitado
- Realizar a busca do CEP
- Mostrar os dados para o usuário

Ja concluímos os três primeiros, portanto, precisamos apenas retornar os dados para o usuário.

### Buscando os dados do CEP

Vamos começar buscando os dados do CEP digitado em nosso app, para isso já haviamos criado o *listener*, precisamos apenas fazer uso da nossa classe `HttpService`:

```java
final EditText cep = findViewById(R.id.etMain_cep);
final TextView resposta = findViewById(R.id.etMain_resposta);

Button btnBuscarCep = findViewById(R.id.btnMain_buscarCep);
btnBuscarCep.setOnClickListener(new View.OnClickListener() {
	@Override
	public void onClick(View view) {
		try {
			CEP retorno = new HttpService(cep.getText().toString()).execute().get();
			resposta.setText(retorno.toString());
		} catch (InterruptedException e) {
			e.printStackTrace();
		} catch (ExecutionException e) {
			e.printStackTrace();
		}
	}
});
```

Com isso iremos ter o seguinte resultado:

![App em funcionamento](https://res.cloudinary.com/mahenrique94/image/upload/v1549726135/buscando-cep-requisicao-http_jszqad.gif)

Caso tenha ficado alguma dúvida, você pode encontrar o projeto completo [aqui](https://github.com/mahenrique94/requisicao-http), também gravei um vídeo no meu canal mostrando a parte prática da implementação:

<iframe height="500" src="https://www.youtube.com/embed/_HSXZN3LZQg" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>

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
