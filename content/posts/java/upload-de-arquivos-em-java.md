---
autor: "Matheus Castiglioni"
categoria: "Java"
disqus_identifier: "upload-de-arquivos-em-java"
disqus_title: "Upload De Arquivos Em Java"
disqus_url: "https://blog.matheuscastiglioni.com.br/upload-de-arquivos-em-java"
date: 2017-08-24T11:44:42-02:00
draft: false
keywords: [ "HTTP", "Requisição", "Upload", "Web" ]
slug: "upload-de-arquivos-em-java"
tag: [ "HTTP", "Requisição", "Upload", "Web" ]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1549727243/upload-de-arquivos-em-java_y881k3.jpg"
title: "Upload De Arquivos Em Java"
url: "/upload-de-arquivos-em-java"
---

Após realizar a entrega de um projeto web para nosso cliente, surgiu a necessidade de implementar uma funcionalidade de envio de arquivos para o servidor, mas como podemos implementar o recurso de *upload* em nosso sistema ? Para o exemplo iremos fazer uso da linguagem Java.

## Criando a classe Arquivo

Nosso primeiro passo será criar uma classe para representar qualquer tipo de arquivo, logo podemos ver que um bom nome para a mesma seria `Arquivo`:

```java
public class Arquivo {

}
```

## Criando o método upload

Após criar e definir o nome de nossa classe estamos pronto para o próximo passo, vamos começar a implementação do método `upload`:

```java
public class Arquivo {
	public void upload() {
		// implementar o upload
	}
}
```

Bacana, temos o nosso método para realizar o upload, mas por onde podemos começar ? Inicialmente sabemos que um arquivo possui o nome e o lugar ao qual ele será gravado, portanto, podemos receber esses 2 parâmetros no nosso método:

```java
public void upload(String pasta, String nomeDoArquivo) {
	// implementar o upload
}
```

Quando fazemos *upload* de um arquivo, além de pegar o nome e o local, precisamos também pegar o próprio arquivo em si, ou melhor, precisamos pegar os seus bytes que o representa de verdade dentro do computador. Sendo assim, veremos passo a passo como podemos fazer isso.

## Implementando o método Upload

Temos o caminho e nome do nosso arquivo, porém, como podemos representar um arquivo em Java ? Fazemos isso por meio classe [File](https://docs.oracle.com/javase/7/docs/api/java/io/File.html) passando o nome do arquivo completo em sua construção.

```java
public void upload(String pasta, String nomeDoArquivo) {
	String caminhoArquivo = pasta + "/" + nomeDoArquivo;
	File novoArquivo = new File(caminhoArquivo);
}
```

Agora já temos também a representação do nosso arquivo, portanto, o nosso próximo passo é entender como realmente funciona o upload de arquivos.

## Transferindo arquivos em Java

No processo de *upload* é realizado a transferência do arquivo local em nossa máquina para o navegador, assim que o navegador termina de carregá-lo já somos capazes de pegar uma "representação" desse arquivo, com a representação desse arquivo precisamos agora de fato salvá-lo em nosso servidor.

Nesse momento você deve estar imaginando:

> "Basta apenas pegar o arquivo passado pelo navegador e de uma forma mágica salvá-lo no servidor."

Mas as coisas não são tão simples assim, o que realmente é feito durante o processo de um upload é a leitura *byte* a *byte* do arquivo carregado e depois criado um novo arquivo passando os bytes lidos.

## Copiando um arquivo byte a byte

Para realizar a cópia do arquivo enviado pelo usuário e posteriormante carregado pelo navegador devemos seguir alguns passos, o primeiro nada mais é do que criar nosso método responsável por tal operação:

```java
private void copiar() {

}
```

Beleza, já temos nosso método declarado, mas por onde devemos começar sua implementação ? Como mencionado anteriormente sabemos que para realizar uma cópia precisamos de **origem** e **destino**, logo são dois fortes candidatos á serem parâmetros para nosso método:

```java
private void copiar(InputStream origem, OutputStream destino) {

}
```

Repare que declaramos a origem do tipo [InputStream](https://docs.oracle.com/javase/7/docs/api/java/io/InputStream.html) pois é o objeto responsável por leituras de arquivos em Java, logo podemos ver que [OutputStream](https://docs.oracle.com/javase/7/docs/api/java/io/OutputStream.html) é o responsável pela escrita, ambos pertencem ao pacote `java.io`.

Sabemos também que iremos ter que ler os bytes do arquivo origem para escrevê-lo no arquivo destino, podemos fazer isso através de uma variável:

```java
private void copiar(InputStream origem, OutputStream destino) {
	int bite = 0;
}
```

Como a palavra `byte` é reservada da linguagem Java criei a variável como `bite`, também precisamos definir um tamanho máximo do arquivo, fazemos isso através de um `array`:

```java
private void copiar(InputStream origem, OutputStream destino) {
	int bite = 0;
	byte[] tamanhoMaximo = new byte[1024 * 8]; // 8KB
}
```

Agora precisamos ler os bytes da origem um por um e ir copiando para o arquivo destino, enquanto os mesmos forem existentes, logo vemos a necessidade de realizar um loop:

```java
private void copiar(InputStream origem, OutputStream destino) {
	int bite = 0;
	byte[] tamanhoMaximo = new byte[1024 * 8]; // 8KB
	// enquanto bytes forem sendo lidos
	while((bite = origem.read(tamanhoMaximo)) >= 0) {
		// pegue o byte lido e escreva no destino
		destino.write(tamanhoMaximo, 0, bite);
	}
}
```

Quando estamos trabalhando com operações de leitura e escrita devemos tratar algumas possíveis exceções, podemos fazer isso através de um `try catch`:

```java
private void copiar(InputStream origem, OutputStream destino) {
	int bite = 0;
	byte[] tamanhoMaximo = new byte[1024 * 8]; // 8KB
	try {
		// enquanto bytes forem sendo lidos
		while((bite = origem.read(tamanhoMaximo)) >= 0) {
			// pegue o byte lido e escreva no destino
			destino.write(tamanhoMaximo, 0, bite);
		}
	} catch (IOException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
}
```

Agora que já sabemos como é feito realmente um *upload* de arquivo e já criamos o método para realizar a leitura e cópia do mesmo, devemos utilizá-lo no momento de realizar o upload para de fato copiar o arquivo carregado pelo navegador para nosso servidor.

Mas até agora não temos uma forma de ler o arquivo carregado pelo navegador, como resolver o problema ? Podemos passar o arquivo via parâmetro para nosso método `upload`:

```java
public void upload(String pasta, String nomeDoArquivo, InputStream arquivoCarregado) {
	String caminhoArquivo = pasta + "/" + nomeDoArquivo;
	File novoArquivo = new File(caminhoArquivo);
}
```

Definimos o parâmetro do tipo `InputStream` pois sabemos que o mesmo trata-se de uma leitura, além disso também sabemos que nosso método `copiar` precisa de um segundo parâmetro, onde será gravado o arquivo. Já temos a representação do nosso arquivo, precisamos apenas criar um `OutputStream` para realizar a escrita:

```java
public void upload(String pasta, String nomeDoArquivo, InputStream arquivoCarregado) {
	String caminhoArquivo = pasta + "/" + nomeDoArquivo;
	File novoArquivo = new File(caminhoArquivo);
	FileOutputStream saida = new FileOutputStream(novoArquivo);
}
```

Com isso já temos tudo o que é preciso para de fato chamar nosso método `copiar`:

```java
public void upload(String pasta, String nomeDoArquivo, InputStream arquivoCarregado) {
	String caminhoArquivo = pasta + "/" + nomeDoArquivo;
	File novoArquivo = new File(caminhoArquivo);
	FileOutputStream saida = new FileOutputStream(novoArquivo);
	copiar(arquivoCarregado, saida);
}
```

Com a nossa classe `Arquivo` pronta, já devemos ser capazes de realizar o upload do arquivo, o próximo passo será mexer em nosso *front-end*, ou seja, criar um formulário para enviar o arquivo para nosso *back-end*:

## Buscando arquivos com HTML

O primeiro passo seria criarmos um form, para que sejamos capazes de realizar a busca do arquivo em nossa máquina:

```markup
<form action="URL" type="get">

</form>
```

Mas somente a tag form não é capaz de realizar tal necessidade sozinha, precisamos de alguma forma conseguir buscar um arquivo em nossa máquina e enviá-lo ao navegador, mas como podemos criar tal recurso ?

### Conhecendo o input file

Entre os vários tipos de input's existentes para nosso formulário, um deles é do tipo **file**, com ele conseguimos buscar e carregar arquivos locais de nossa máquina para a web:

```markup
<form action="URL" type="get">
	<input name="upload" type="file">
</form>
```

Para finalizar, devemos criar um botão para conseguirmos realizar a submissão do form:

```markup
<form action="URL" type="get">
	<input name="upload" type="file">
	<button type="submit">Enviar</button>
</form>
```

Com isso, teremos o seguinte resultado:

<form action="URL" type="get">
	<input name="upload" type="file">
	<button type="submit">Enviar</button>
</form>

Porém se tentarmos realizar o upload do arquivo ainda não iremos ser capazes de lê-lo em nosso código Java, por que isso está acontecendo ?

Por padrão todas as informações são decodificadas ao serem submetidas por um formulário, isso é definido através da tag [enctype](https://www.w3schools.com/tags/att_form_enctype.asp) que, quando não definida, tem seu valor padrão como `application/x-www-form-urlencoded`.

Para mudarmos esse comportamente padrão precisamos deixar explícito o valor do enctype para `multipart/form-data`:

```markup
<form action="URL" enctype="multipart/form-data" type="post">
// código omitido...
```

## Enviando arquivo do navegador para o servidor

Para fazer o uso da nossa classe `Arquivo`, precisamos de alguma forma realizar uma requisição para nosso código Java, pegar a representação do arquivo e posteriormente fazer uso de nossos métodos,

Para maior facilidade no exemplo irei utilizar o framework [VRaptor](vraptor.org/pt/), capaz de realizar a comunicação web e Java, você pode estar utilizando o framework de sua preferência:

```java
@Controller
@Path("arquivo")
public class ArquivoController {

	@Post
	public void upload(UploadedFile upload) {
		Arquivo arquivo = new Arquivo();
		arquivo.upload("/home/matheus/arquivos", upload.getFileName(), upload.getFile());
	}

}
```

Com isso já devemos ser capazes de carregar e enviar nosso arquivo para o servidor.
