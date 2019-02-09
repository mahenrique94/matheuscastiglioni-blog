---
autor: "Matheus Castiglioni"
categoria: "JavaScript"
disqus_identifier: "mockando-dados-com-fakerjs"
disqus_title: "Mockando Dados Com Fakerjs"
disqus_url: "https://matheuscastiglioni-blog.netlify.com/mockando-dados-com-fakerjs"
date: 2019-01-15T10:34:05-02:00
draft: false
keywords: [ "Back-End", "Biblioteca", "Faker", "Faker.js", "Front-End", "Lib", "Mock", "Web" ]
slug: "mockando-dados-com-fakerjs"
tag: [ "Back-End", "Biblioteca", "Faker", "Faker.js", "Front-End", "Lib", "Mock", "Web" ]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1549585223/mockando-dados-com-fakerjs_5c3d1f74e4b65_bg_rseqch.jpg"
title: "Mockando Dados Com Fakerjs"
url: "/mockando-dados-com-fakerjs"
---

Comumente chega um momento onde precisamos criar nossas telas, seja para um site ou sistema *web*, em alguns desses momentos nossa API (*back-end*) ainda não estará pronta, dessa maneira o desenvolvimento das telas (*front-end*) poderá se atrasar. Para que isso não ocorra, podemos criar dados não reais (*fake data*), assim, conseguimos dar andamento nas telas sem precisar da API ou a API consegue retornar esses dados mockados para que o desenvolvimento das telas seja iniciado.

Porém, ficar mockando os dados não é uma tarefa muita legal, exige um certo tempo e criatividade, pensando nisso, foi criado a *lib* [Faker.js](https://github.com/marak/Faker.js/). Com ela todo o trabalho de *mock* e criatividade para pensar nas informações ficam abstraídas, dessa maneira conseguimos focar apenas no desenvolvimento das telas.

## Começando a usá-la

Podemos começar a utilizar a Faker.js de N maneiras, seja via `npm`:

```
npm i faker
```

Ou com o `yarn`:

```
yarn add faker
```

Além da instalação via gerenciadores de pacote (*package managers*) também é possível baixar o arquivo minificado (`.min.js`) da biblioteca, o mesmo pode ser encontrado em: https://github.com/Marak/faker.js/blob/master/build/build/faker.min.js

Dessa maneira, podemos baixá-lo e salvá-lo dentro do nosso projeto, depois, simplesmente realizamos a importação do mesmo em nosso `html` através da *tag* `script`:

```markup
<script src="./assets/js/faker.min.js"></script>
```

Para conseguimos utilizá-lo através do Node em nossa API ou *back-end*, após instalá-la via `npm` ou `yarn`, precisamos apenas realizar a importação, seja com `require`:

```javascript
const faker = require('faker')
```

Ou com JavaScript *modules*:

```javascript
import faker from 'faker'
```

## Preparando o ambiente

Bom, com toda instalação feita, já podemos começar a utilizá-la, para exemplo do *post* vamos criar um objeto do tipo pessoa e gerar cem registros do mesmo, o primeiro passo será criar nosso `array`:

```javascript
const people = []
```

Agora, podemos criar um `for` realizando cem interações:

```javascript
for (let i = 0; i < 100; i++) {
	const person = {
		firstName: null,
		lastName: null,
		address: {
			city: null,
			country: null,
			phone: null,
			state: null,
			street: null,
			zipCode: null
		},
		birthDay: null,
		image: null,
		email: null,
		userName: null,
		password: null,
		ip: null,
	}
	people.push(person)
}
```

E no fim, podemos realizar o *log* final do nosso `array`:

```
console.log(people)
```

## Conhecendo a Faker.js

Com toda preparação pronta, podemos de fato começar a utilizar os dados falsos da Faker.js, a ideia será trocar todos os `null's` por dados mockados. Todas as funções para obtenções dos dados podem ser chamadas atraves do `faker.grupo.informacao`, onde:

- `grupo`: Está relacionado ao contexto que precisamos simular. Ex: endereço, nome, sistema, internet, etc...
- `informacao`: O que precisamos mockar em relação ao grupo. Ex: primeiro nome, sobrenome, IP, usuário, senha, rua, cidade, estado, etc...


Dessa maneira, para obtermos informções referente a nome podemos utilizar `faker.name.`, onde:

- `faker`: Objeto `Faker` contendo as demais funções.
- `name`: Grupo referente a nome.

### Informações pessoais

Assim, podemos pegar o primeiro nome com:

```javascript
firstName: faker.name.firstName()
```

E para o sobrenome:

```javascript
faker.name.lastName()
```

Pegando a data de nascimento:

```javascript
birthDay: faker.date.past(),
```

### Informações de localização

Agora, podemos partir para as informações do endereço através de `faker.address.`

Pegando o nome de uma cidade:

```javascript
city: faker.address.city()
```

Pegando o nome de um país:

```javascript
country: faker.address.country()
```

Pegando o valor de um número de telefone:

```javascript
phone: faker.phone.phoneNumber()
```

Pegando o nome de um estado:

```javascript
state: faker.address.stateAbbr()
```

Pegando o nome de uma rua:

```javascript
street: faker.address.streetName()
```

Pegando o valor de um CEP:

```javascript
zipCode: faker.address.zipCode()
```

### Informações de internet

Legal, já temos as informações pessoais e de localização do nosso objeto pessoal, agora, nos resta as informações referentes a *internet*, podemos acessá-las e mocká-las através do `faker.internet.`:

Pegando uma imagem de perfil:

```javascript
image: faker.image.avatar()
```

Pegando um email:

```javascript
email: faker.internet.email()
```

Pegando um usuário:

```javascript
userName: faker.internet.userName()
```

e senha:

```javascript
password: faker.internet.password()
```

Por fim, nos resta mockar o valor do IP:

```javascript
ip: faker.internet.ip()
```

Com isso, finalizamos nosso objeto pessoa, já adicionamos ele no nosso `array` e mockamos 100 informações no mesmo, tudo certo?

![Pensando se tudo está certo ou não](https://res.cloudinary.com/mahenrique94/image/upload/v1549585446/gif-caveira-pensativa_zvoddi.gif)

Errado, nossas informações foram mockadas no formato americano, mas, precisamos que estejam no formato brasileiro, como podemos fazer isso? Para trocar as informações de americanas para brasileiras, podemos simplesmente setar um `locale` brasileiro:

```javascript
faker.locale = 'pt_BR'
```

Agora as mesmas estão no formato brasileiro.

Nosso código completo fica com a seguinte estrutura:

```javascript
faker.locale = 'pt_BR'
const people = []
for (let i = 0; i < 100; i++) {
	const person = {
		firstName: faker.name.firstName(),
		lastName: faker.name.lastName(),
		address: {
			city: faker.address.city(),
			country: faker.address.country(),
			phone: faker.phone.phoneNumber(),
			state: faker.address.stateAbbr(),
			street: faker.address.streetName(),
			zipCode: faker.address.zipCode()
		},
		birthDay: faker.date.past(),
		image: faker.image.avatar(),
		email: faker.internet.email(),
		userName: faker.internet.userName(),
		password: faker.internet.password(),
		ip: faker.internet.ip(),
	}
	people.push(person)
}
console.log(people)
```

## Conclusão

Nesse *post* expliquei como e porque utilizar a biblioteca [Faker.js](https://github.com/marak/Faker.js/), com ela conseguimos criar dados mockados para nossas API's, sites ou sistemas na *web*. Sua documentação completa pode ser encontrada [aqui](https://github.com/marak/Faker.js/).

E aí, você já conhecia a Faker? Não deixe de comentar, se você gostou desse *post* e pretende receber novas postagens por email, assine a [*newsletter*](http://eepurl.com/ggP7Rv), assim todo novo *post* será enviado para você automaticamente via email.

Até a próxima
