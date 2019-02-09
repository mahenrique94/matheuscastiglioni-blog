---
autor: "Matheus Castiglioni"
categoria: "JavaScript"
disqus_identifier: "criptografando-e-descriptografando-com-nodejs"
disqus_title: "Criptografando E Descriptografando Com Nodejs"
disqus_url: "https://blog.matheuscastiglioni.com.br/criptografando-e-descriptografando-com-nodejs"
date: 2018-01-03T16:47:20-02:00
draft: false
keywords: [ "Back-End", "HTTP", "MongoDB", "NodeJS", "Requisição", "Web Service" ]
slug: "criptografando-e-descriptografando-com-nodejs"
tag: [ "Back-End", "HTTP", "MongoDB", "NodeJS", "Requisição", "Web Service" ]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1549720384/criptografando-e-descriptografando-com-nodejs_ykafr7.jpg"
title: "Criptografando E Descriptografando Com Nodejs"
url: "/criptografando-e-descriptografando-com-nodejs"
---

Temos um sistema em produção, porém, temos a necessidade de uma nova *feature* (funcionalidade), precisamos implementar um cadastro de usuários, onde cada usuário terá um email e senha para futuramente implementarmos um sistema de *login* (autenticação).

Para exemplo do *post* vou utilizar a linguagem [Node](https://nodejs.org/en/) junto com [MongoDB](https://www.mongodb.com/).

Como temos um time muito eficiênte, a nova *feature* já foi criada e disponibilizada para testes.

![Gif alegria com a nova *feature*](https://res.cloudinary.com/mahenrique94/image/upload/v1549720457/gif-animado-elevador_davll3.gif)

## Testando a nova feature

Os passos que iremos seguir para realizar os testes são:

1. Verificar se já existe algum usuário cadastrado
2. Caso não exista, cadastrar um novo usuário
3. Verificar como os dados do novo usuário foram cadastrados

### Buscando usuários já cadastrados

Para realizar a busca dos usuários existentes em nosso banco de dados, foi nos informado que devemos realizar uma requisição do tipo `GET` para o seguinte endereço: `http://localhost:3000/anboo/api/usuarios`.

![Verificando usuários já existentes](https://res.cloudinary.com/mahenrique94/image/upload/v1549720481/verificando-usuarios-cadastrados_shu85k.png)

Como podemos ver, ainda não possuímos nenhum usuário cadastrado em nosso banco de dados, então vamos incluir o primeiro.

### Cadastrando novo usuário

Como ainda não temos nenhum usuário em nosso banco de dados devemos começar incluindo um novo, assim poderemos verificar se nossa *feature* está funcionando de forma correta, para testar um novo cadastro devemos passar o email e senha à serem cadastrados para a requisiçào do tipo `POST` informando o mesmo endereço: `http://localhost:3000/anboo/api/usuarios`.

```json
{
	"email" : "matheushcastiglioni@gmail.com",
	"senha" : "123456"
}
```

E como resposta:

![Criando novo usuário](https://res.cloudinary.com/mahenrique94/image/upload/v1549720510/criando-novo-usuario_gaukqj.png)

### Verificando dados cadastrados

Ué, tem algo estranho, recebemos como resposta os dados do usuário que foram salvos? Para confirmar vamos novamente realizar a busca e verificar os usuários existentes em nosso banco de dados:

![Verificando dados cadastrados](https://res.cloudinary.com/mahenrique94/image/upload/v1549720510/criando-novo-usuario_gaukqj.png)

Realmente, a senha foi salva como "**123456**" em nosso banco de dados, mas será que isso é uma boa prática?

![Gif pensativo sobre cadastro de senha](https://res.cloudinary.com/mahenrique94/image/upload/v1549720568/gif-pensativo-simpsons_bd9lhd.gif)

Com toda certeza não, dessa forma qualquer pessoa que tenha acesso ao nosso banco de dados é capaz de ver a senha de todos os usuários existentes, tornando nossa api nenhum pouco segura, mas como podemos resolver isso?

## Criptografia

Pois é, se você pensou em [Criptografia](https://pt.wikipedia.org/wiki/Criptografia) fico feliz em dizer que acertou, para você que não acertou não tem problema e para você que não conhece esse termo não tenha pressa, vou explicar logo a seguir.

### O que é criptografia?

Lembra na época da escola quando brincávamos com a língua do **P**? Para falar "**Casa**" a gente falava: "**Pca**", "**Psa**", em outras palavras, transformávamos a palavra **casa** em **pcapsa**, pois é, estavamos realizando uma criptografia sem saber, basicamente o conceito é esse.

Podemos dizer e reduzir criptografia como transformar algo que todo mundo sabe o significado em algo que poucas ou quase nenhuma pessoa sabe o que significa. Nesse caso é exatamente isso que devemos fazer com nosso banco de dados, ao salvar o usuário, sua senha deve ser transformada em algo que ninguém consegue ler, mas como podemos fazer isso em Node?

### Criptografando a senha

Para criptografar uma senha com Node podemos utilizar o módulo `Crypto` onde é possível realizar várias operações em relação a criptografia, principalmente com os objetos `Cipher` e `Decipher`.

### Criando objeto responsável pela criptografia

Para começar a criptografar uma senha devemos criar um objeto `Cipher`, o mesmo é responsável por criptografar dados, para criá-lo temos um método auxiliar dentro do módulo `crypto` chamado `createCipher`:

```javascript
const crypto = require("crypto");
const cipher = crypto.createCipher();
```

Apenas isso não é suficiente, devemos passar alguns parâmetros para a criação do objeto, sendo eles: **algoritmo utilizado para realizar a criptografia** e **segredo utilizado para criptografar**. Então vamos começar criando um objeto responsável por armazenar essas configurações:

```javascript
const DADOS_CRIPTOGRAFAR = {
    algoritmo : "aes256",
    segredo : "chaves"
};
```

Assim podemos passá-los para o método `createCipher` e reaproveitarmos em outros pedaços de nosso código(se necessário), com isso, qualquer mudança necessária será feita em apenas um lugar.

```javascript
const crypto = require("crypto");
const cipher = crypto.createCipher(DADOS_CRIPTOGRAFAR.algoritmo, DADOS_CRIPTOGRAFAR.segredo);
```

### Criptografando dados

Após realizar o passo anterior já devemos ter nosso objeto `Cipher` criado, precisamos agora dizer para ele qual será a nossa informação à ser criptografada.

```javascript
// código anterior omitido
cipher.update(senha);
```

Como podem ver, podemos fazer isso através do método `update`. Por último devemos de fato realizar a criptografia dos dados:

```javascript
// código anterior omitido
cipher.final(DADOS_CRIPTOGRAFAR.tipo);
```

Aqui precisamos passar o tipo de criptografia que será utilizada, então como trata-se de um parâmetro vamos adicioná-lo em nosso objeto de configuração:

```javascript
const DADOS_CRIPTOGRAFAR = {
    algoritmo : "aes256",
    segredo : "chaves",
    tipo : "hex"
};
```

Assim nossa função e objeto fica da seguinte maneira:

```javascript
const DADOS_CRIPTOGRAFAR = {
    algoritmo : "aes256",
    segredo : "chaves",
    tipo : "hex"
};

function criptografar(senha) {
	const cipher = crypto.createCipher(DADOS_CRIPTOGRAFAR.algoritmo, DADOS_CRIPTOGRAFAR.segredo);
	cipher.update(senha);
	return cipher.final(DADOS_CRIPTOGRAFAR.tipo);
};
```

## Testando a criptografia

Com a nossa função responsável por criptografar dados pronta, podemos testá-la ao cadastrar o mesmo usuário, porém fazendo uso dela antes de realmente persisitir os dados:

```json
{
	"email" : "matheushcastiglioni@gmail.com",
	"senha" : "123456"
}
```

E como resposta temos:

![Resposta criptografia](https://res.cloudinary.com/mahenrique94/image/upload/v1549720602/resposta-criptografia_p6laic.png)

Como podemos ver, agora nossa senha foi transformada de **123456** para **a75959730e9d4f4fd26c1f0c8d73b1ac**, assim quando uma pessoa qualquer acessar nosso banco de dados não saberá o que significado essa `String` cheia de numeros e letras misturados.

## Descriptografia

Agora você deve estar pensando, como podemos obter novamente o valor da senha, equivalente aos **123456**, como tudo que vai, tudo pode voltar, para isso usamos a descriptografia, como podem observar, é o inverso da criptografia, aqui pegamos em algo que ninguém sabe e transformamos algo em que todo mundo sabe.

Em outras palavras transformamos **a75959730e9d4f4fd26c1f0c8d73b1ac** novamente em **123456**.

### Descriptografando a senha

O processo para descriptografar é basicamente o mesmo da criptografia, mudando apenas os parâmetros passado para os métodos `update` e `final`, além claro, do nosso objeto.

```javascript
const DADOS_CRIPTOGRAFAR = {
    algoritmo : "aes256",
    codificacao : "utf8",
    segredo : "chaves",
    tipo : "hex"
};

function descriptografar(senha) {
	const decipher = crypto.createDecipher(DADOS_CRIPTOGRAFAR.algoritmo, DADOS_CRIPTOGRAFAR.segredo);
	decipher.update(senha, DADOS_CRIPTOGRAFAR.tipo);
	return decipher.final();
};
```

Veja que reaproveitamos alguns parâmetros existentes em nosso objeto de configuração, mudamos o objeto de `Cipher` para `Decipher` e como já mencionado antes, trocamos alguns parâmetros dos métodos `update` e `final`. Com isso já podemos ter nossa senha visível de forma legível:

![Resposta descriptografia](https://res.cloudinary.com/mahenrique94/image/upload/v1549720674/resposta-descriptografia_o8ad0p.png)

E voalá \o/, a senha esta visível novamente.

![Comemorando fim do post](https://res.cloudinary.com/mahenrique94/image/upload/v1549720706/ezgifcom-optimize_sjfvuv.gif)
