---
autor: "Matheus Castiglioni"
categoria: "Java"
disqus_identifier: "trabalhando-com-diferentes-perfis-no-maven"
disqus_title: "Trabalhando Com Diferentes Perfis No Maven"
disqus_url: "https://blog.matheuscastiglioni.com.br/trabalhando-com-diferentes-perfis-no-maven"
date: 2018-01-23T19:59:24-02:00
draft: false
keywords: [ "Back-End", "Dependência", "JAR", "Maven", "Repositório" ]
slug: "trabalhando-com-diferentes-perfis-no-maven"
tag: [ "Back-End", "Dependência", "JAR", "Maven", "Repositório" ]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1549720017/trabalhando-com-diferentes-perfis-no-maven_l8mvbg.jpg"
title: "Trabalhando Com Diferentes Perfis No Maven"
url: "/trabalhando-com-diferentes-perfis-no-maven"
---

Recentemente precisei implementar uma [integração contínua](https://www.4linux.com.br/diferencas-entre-integracao-deploy-e-entrega-continua) ou como muitos chamam CI (*Continuous Integration*) em um projeto que estava trabalhando, no *post* [Adicionando JAR's de Terceiros no Maven](http://blog.matheuscastiglioni.com.br/adicionando-jars-de-terceiros-no-maven) expliquei como trabalhar com bibliotecas de terceiros, em outras palavras, bibliotecas que não estão hospedadas no [Mvn Repository](https://mvnrepository.com/).

Nesse *post* irei explicar como utilizar diferentes perfis no Maven, acredito que você já deva estar se perguntando:

> Porque eu teria a necessidade de trabalhar com diferentes perfis?

Uma simples resposta: Durante o ambiente de desenvolvimento (*development*) precisamos conectar no banco de dados de nossa máquina, porém, ao realizar o *deploy* da aplicação, essa configuração do banco de dados deve ser diferente, agora a mesma precisará estar em ambiente de produção (*production*), então como podemos resolver essa necessidade?

## Criando o persistence.xml

Para exemplo do *post* vou utilizar um projeto feito em [Java](https://www.java.com/pt_BR/) com [VRaptor](http://www.vraptor.org/pt/), [Hibernate](http://hibernate.org/) e [JPA](https://pt.wikipedia.org/wiki/Java_Persistence_API). Nosso arquivo responsável por realizar as configurações do banco de dados é o `persistence.xml`, nele encontra-se informações como: URL, usuário, senha, etc...

Até o momento nosso arquivo se encontra da seguinte maneira:

```xml
<persistence xmlns="http://java.sun.com/xml/ns/persistence" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://java.sun.com/xml/ns/persistence http://java.sun.com/xml/ns/persistence/persistence_2_0.xsd" version="2.0">
    <persistence-unit name="default">
        <provider>org.hibernate.ejb.HibernatePersistence</provider>
        <properties>
            <property name="javax.persistence.jdbc.driver" value="com.mysql.jdbc.Driver"/>
            <property name="javax.persistence.jdbc.url" value="jdbc:mysql://localhost:3306/mhc"/>
            <property name="javax.persistence.jdbc.user" value="root"/>
            <property name="javax.persistence.jdbc.password" value="root"/>
            <property name="hibernate.dialect" value="org.hibernate.dialect.MySQL5InnoDBDialect"/>
            <property name="hibernate.show_sql" value="true"/>
            <property name="hibernate.format_sql" value="true"/>
        </properties>
    </persistence-unit>
</persistence>
```

Como podemos ver, nossa configuração está fixa para a nossa máquina, será que em ambiente de produção também iremos utilizar as mesmas configurações? Muito provavelmente não, então, como podemos resolver nosso problema?

## Variáveis no persistence.xml

Se você já pensou em adicionar variáveis em nosso arquivo, pensou certo, esse é o passo que iremos realizar.

Como estamos trabalhando com o Maven, vamos utilizar as variáveis dele e quando realizarmos o empacotamento (*package*) da nossa aplicação o mesmo irá substituir as variáveis pelos seus respectivos valores, respeitando o ambiente em que estamos trabalhando.

O primeiro passo será definir onde iremos informar as variáveis, para exemplo do *post* vou definir a **URL** e **senha do banco** com variáveis, sendo assim, nosso arquivo ficará da seguinte maneira:

```xml
<persistence xmlns="http://java.sun.com/xml/ns/persistence" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://java.sun.com/xml/ns/persistence http://java.sun.com/xml/ns/persistence/persistence_2_0.xsd" version="2.0">
    <persistence-unit name="default">
        <provider>org.hibernate.ejb.HibernatePersistence</provider>
        <properties>
            <property name="javax.persistence.jdbc.driver" value="com.mysql.jdbc.Driver"/>
            <property name="javax.persistence.jdbc.url" value="jdbc:mysql://${db.url}:3306/mhc"/>
            <property name="javax.persistence.jdbc.user" value="root"/>
            <property name="javax.persistence.jdbc.password" value="${db.senha}"/>
            <property name="hibernate.dialect" value="org.hibernate.dialect.MySQL5InnoDBDialect"/>
            <property name="hibernate.show_sql" value="true"/>
            <property name="hibernate.format_sql" value="true"/>
        </properties>
    </persistence-unit>
</persistence>
```

Vejam que no local onde informamos a URL e senha, agora estamos passando nossas variáveis, para declará-las precisamos informá-las dentro de `${NOME_VARIAVEL}`, onde o `NOME_VARIAVEL` pode ser qualquer nome de sua escolha. Mas afinal, como iremos passar o valor para nossas variáveis?

![GIf dos batutinhas pensativo](https://res.cloudinary.com/mahenrique94/image/upload/v1549720076/gif-batutinhas-pensativo_atiuai.gif)

## Criando nossos perfis

Respondendo a pergunta anterior:

> Mas afinal, como iremos passr o valor para nossas variáveis?

As variáveis serão criadas dentro de nosso `pom.xml`, é nele que fica todas as configurações do Maven, sendo assim, nossos perfils e variáveis serão todas criadas e definidas no mesmo.

O primeiro passo será criar o perfil (*profile*) de desenvolvimento (*dev*), para isso temos a tag `profiles` onde dentro dela podemos definir nossos `profile`:

```xml
<profiles>
	<profile>
		<id>dev</id>
	</profile>
</profiles>
```

Como podemos ver, agora já temos nosso perfil de desenvolvimento criado, para criá-lo foi necessário informar a tag `id` onde definimos o nome do perfi, para o nosso caso, foi informado `dev` para uma abreviatura de *development*.

Mas Matheus, onde estão nossas variáveis? Calma, dando um passo de cada vez a gente chega lá.

## Informando as variáveis do perfil

Para informar as variáveis podemos utilizar a tag `properties`, dentro dela, informamos quantas variáveis quisermos:

```xml
<profiles>
	<profile>
		<id>dev</id>
		<properties>
			<db.senha>root</db.senha>
			<db.url>localhost</db.url>
		</properties>
	</profile>
</profiles>
```

Novamente, como resultado, temos o código acima. Aqui devemos fazer uma observação, para criar as variáveis devemos seguir a seguinte sintaxe:

```xml
<NOME_VARIAVEL>VALOR_VARIAVEL</NOME_VARIAVEL>
```

Sendo assim, se nossa variável chamasse Pikachu, dentro do `pom.xml` deveremos informar:

```xml
<Pikachu>Um pokemon</Pikachu>
```

## Informando o perfil padrão

Uma boa prática que podemos seguir é definir um perfil como padrão (*default*), ou seja, sempre que não informarmos nenhum perfil manualmente, o perfil padrão será utilizado (se ficou confuso, logo a seguir, você entenderá melhor), mas como podemos fazer isso?

Para isso temos a tag `activation` que recebe uma outra tag chamada `activeByDefault` onde devemos informar um valor booleano:

```xml
<profiles>
	<profile>
		<id>dev</id>
		<activation>
			<activeByDefault>true</activeByDefault>
		</activation>
		<properties>
			<db.senha>root</db.senha>
			<db.url>localhost</db.url>
		</properties>
	</profile>
</profiles>
```

Pronto, agora quando realizarmos o empacotamento da nossa aplicação:

```bash
mvn package
```

O maven irá utilizar o perfil *dev* como padrão, sendo assim, os valores de `db.senha` e `db.url` serão `root` e `localhost` respectivamente.

## Adicionando o perfil de produção

Até o momento já devemos ter o perfil de desenvolvimento totalmente configurado, agora precisamos configurar o perfil para produção, os passos serão os mesmos, apenas não informaremos a tag `activation` porque nosso perfil `dev` já está como padrão, sendo assim, nossa configuração fica da seguinte maneira:

```xml
<profiles>
	<profile>
		<id>dev</id>
		<activation>
			<activeByDefault>true</activeByDefault>
		</activation>
		<properties>
			<db.senha>root</db.senha>
			<db.url>localhost</db.url>
		</properties>
	</profile>
	<profile>
		<id>prod</id>
		<properties>
			<db.senha>uma_senha_dificil</db.senha>
			<db.url>uma_url_diferente</db.url>
		</properties>
	</profile>
</profiles>
```

Vejam que para produção, nossas variáveis `db.senha` e `db.url` terão os respectivos valores `uma_senha_dificil` e `uma_url_diferente`.

Pronto, tudo funcionamento e mil maravilhas \o/, certo? Errado, ainda precisamos fazer uma simples configuração para que tudo funcione 100%.

![Gif do Bob Esponja triste](https://res.cloudinary.com/mahenrique94/image/upload/v1549720096/gif-bob-esponja-triste_oiab6a.gif)

## Configurando os arquivos

Em algum momento dizemos para o Maven onde ele deve procurar por nossas variáveis e trocá-las para os valores que definirmos? Não, e como devem estar imaginando, o Maven não tem curso de mãe de ná para adivinhar tudo sozinho.

Para isso devemos utilizar a tag `resources`, onde dentro dela iremos informar nossa `resource`, ou seja, o caminho onde o Maven deve ler os arquivos e procurar por nossas variáveis e substituí-las:

```xml
<resources>
	<resource>
		<directory>${basedir}/src/main/resources</directory>
		<filtering>true</filtering>
	</resource>
</resources>
```

Sendo assim, estamos dizendo para o Maven:

> Olha Maven, á partir do diretório atual (basedir) ou diretório onde encontra-se o pom.xml, navegue até "src/main/resources" e leia todos os arquivos contidos lá dentro, se encontrar alguma de nossas variáveis, troque-as pelo seus respectivos valores.

Uma observação, a tag `resource` deve ser informada **dentro da tag build**.

Nosso arquivo `pom.xml` completo fica da seguinte maneira:

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>

	<groupId>br.com.mhc</groupId>
	<artifactId>mhc</artifactId>
	<version>1.0.0</version>
	<packaging>jar</packaging>
	<name>mhc</name>
	<url>http://maven.apache.org</url>

	<properties>
		<project.build.sourceEncoding>ISO-8859-1</project.build.sourceEncoding>
	</properties>

    <profiles>
        <profile>
            <id>dev</id>
            <activation>
                <activeByDefault>true</activeByDefault>
            </activation>
            <properties>
                <db.senha>root</db.senha>
                <db.url>localhost</db.url>
            </properties>
        </profile>
        <profile>
            <id>prod</id>
            <properties>
                <db.senha>s3g6h9l0</db.senha>
                <db.url>postgresql</db.url>
            </properties>
        </profile>
    </profiles>


    <dependencies>

		<dependency>
		    <groupId>junit</groupId>
		    <artifactId>junit</artifactId>
		    <version>4.12</version>
		</dependency>

		<dependency>
			<groupId>org.hibernate</groupId>
			<artifactId>hibernate-validator</artifactId>
			<version>5.3.4.Final</version>
		</dependency>

		<dependency>
			<groupId>javax.validation</groupId>
			<artifactId>validation-api</artifactId>
			<version>1.1.0.Final</version>
		</dependency>

		<dependency>
		    <groupId>org.hibernate</groupId>
		    <artifactId>hibernate-entitymanager</artifactId>
		    <version>4.3.11.Final</version>
		</dependency>

		<dependency>
			<groupId>mysql</groupId>
			<artifactId>mysql-connector-java</artifactId>
			<version>6.0.5</version>
		</dependency>

		<dependency>
			<groupId>javax.el</groupId>
			<artifactId>javax.el-api</artifactId>
			<version>3.0.0</version>
			<scope>provided</scope>
		</dependency>

		<dependency>
			<groupId>net.sf.jasperreports</groupId>
			<artifactId>jasperreports</artifactId>
			<version>6.3.1</version>
		</dependency>

		<dependency>
		    <groupId>javax.mail</groupId>
		    <artifactId>mail</artifactId>
		    <version>1.4.7</version>
		</dependency>

		<dependency>
		    <groupId>com.google.code.gson</groupId>
		    <artifactId>gson</artifactId>
		    <version>2.2.4</version>
		</dependency>

		<dependency>
		    <groupId>com.thoughtworks.xstream</groupId>
		    <artifactId>xstream</artifactId>
		    <version>1.4.4</version>
		</dependency>

	</dependencies>

	<build>
		<finalName>mhc</finalName>
		<outputDirectory>/Users/matheus/workspace/Java/mhc/target/classes</outputDirectory>
        <resources>
            <resource>
                <directory>${basedir}/src/main/resources</directory>
                <filtering>true</filtering>
            </resource>
        </resources>
        <plugins>
			<plugin>
				<groupId>org.apache.maven.plugins</groupId>
				<artifactId>maven-compiler-plugin</artifactId>
				<version>3.1</version>
				<configuration>
					<source>1.8</source>
					<target>1.8</target>
				</configuration>
			</plugin>
			<plugin>
				<groupId>org.apache.tomcat.maven</groupId>
				<artifactId>tomcat7-maven-plugin</artifactId>
				<version>2.1</version>
				<configuration>
					<path>/</path>
				</configuration>
			</plugin>
		</plugins>
	</build>

</project>
```

Pronto, agora sim, tudo deve estar pronto e funcionando corretamente.

## Testando os perfils

### Testando o perfil de desenvolvimento

Para testar o perfil de desenvolvimento, podemos simplemente executar:

```bash
mvn package
```

Assim o Maven irá utilizar o perfil padrão, no nosso caso, o perfil `dev`.

### Testando o perfil de produção

Para testar o perfil de desenvolvimento, podemos executar o mesmo comando acima, passando o perfil como parâmetro `-P` seguido pelo perfil sem espaço:

```bash
mvn package -Pprod
```

Assim o Maven irá utilizar o perfil `prod`.

E ai, gostou? Você já conhecia os perfis do Maven? Não deixe de comentar.
