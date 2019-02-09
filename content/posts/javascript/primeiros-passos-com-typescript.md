---
autor: "Matheus Castiglioni"
categoria: "JavaScript"
disqus_identifier: "primeiros-passos-com-typescript"
disqus_title: "Primeiros Passos Com Typescript"
disqus_url: "https://matheuscastiglioni-blog.netlify.com/primeiros-passos-com-typescript"
date: 2018-06-15T08:33:49-02:00
draft: false
keywords: [ "Front-End", "TypeScript", "Web" ]
slug: "primeiros-passos-com-typescript"
tag: [ "Front-End", "TypeScript", "Web" ]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1549707815/primeiros-passos-com-typescript_5b23a58308f0b_bg_ja6rce.png"
title: "Primeiros Passos Com Typescript"
url: "/primeiros-passos-com-typescript"
---

Se você já programou ou utilizou a linguagem JavaScript deve ter notado que podemos fazer muita coisa, porém, ela poderia ser ainda melhor, poderíamos adicionar mais funções e recursos a ela, mas será que ninguém já não pensou nisso? Sim, a Microsoft pensou exatamente a mesma coisa e melhorou o JavaScript, dando mais recursos e funcionalidades a ele, essa nova "linguagem" é chamada de [TypeScript](https://www.typescriptlang.org/).

## Conhecendo o TypeScript

Conforme dito anteriormente o TypeScript veio para dar mais poderes ao JavaScript, como a Microsoft o chama, ele é um *superset* (super conjunto) para a linguagem JavaScript, algumas pessoas o chamam de linguagem, mas, não seria bem uma linguagem.

Para escrevermos códigos utilizando o TypeScript devemos saber JavaScript, pois toda a base dele é referente a essa linguagem, dessa maneira, aconselho você antes estudar e aprender JavaScript, para depois, partir para o aprendizado desse *superset*.

## Testando o TypeScript

Se você quiser testar e acompanhar os códigos feito no *post*, sugiro utilizar o [playground](https://www.typescriptlang.org/play/index.html), também criado pela Microsoft, o *playground* é um ambiente *online*, ou seja, na *web* que podemos escrever e compilar nossos códigos TypeScript para JavaScript.

## Vantagens do TypeScript

Abaixo, vou listar algumas melhorias e funcionalidades adicionadas ao TypeScript, sendo elas:

1. Tipagem
2. Orientação a objetos com mais recursos
3. Decorators (decoradores)
4. Módulos
5. Namespaces
6. Símbolos
7. Interface
8. Enums
9. Mixin
10. etc...

Veja que é bastante coisa, para esse *post* vou mostrar como deixar nossos códigos um pouco mais tipados, ou seja, tudo terá tipos.

## Tipando nosso código

Não entrarei em detalhes sobre uma linguagem ser tipada ou não, tem pessoas que preferem e outras não, eu particularmente acredito que um código tipado tem suas vantagens e desvantagens, assim como um código não tipado, análise e veja o que mais você gosta ou prefere.

### Tipando parâmetros

Vamos criar uma simples função para dizer `ola`:

```typescript
function ola(nome) {
    console.log(`Ola ${nome}`);
}
```

Uma função bem simples, apenas será logado no `console` do navegador uma mensagem dizendo olá para um determinado nome que foi passado como parâmetro para a função.

Mas, e se por acaso alguém passar um número para a função? Será que existe um nome com número? Seria muito estranho, mas, podemos restringir o parâmetro `nome` á receber apenas `strings` da seguinte maneira:

```typescript
function ola(nome : string) {
    console.log(`Ola ${nome}`);
}
```

Apenas adicione o `:` seguido pelo tipo que o parâmetro deve ser. Dessa maneira a seguinte chamada:

```typescript
ola(123);
```

Não será compilado, pois existe um erro referente ao tipo do parâmetro, precisamos passar uma `String`, mas, com certeza você deve estar pensando:

> Eu simplesmente posso passar o número como uma String

Realmente, você está certo, para melhorarmos o código, vamos adicionar uma pequena [expressão regular](https://pt.wikipedia.org/wiki/Express%C3%A3o_regular) para aceitar apenas letras e espaços:

```typescript
function ola(nome: string) {
    if (/^([aA-zZ\s]+)$/.test(nome)) {
        console.log(`Ola ${nome}`)
    }
}
```

Pronto, agora estamos verificando se o `nome` realmente é um nome.

### Tipando retorno de função

Assim como tipamos parâmetros, também podemos definir tipos para os retornos de nossas funções, a sintaxe é basicamente a mesma, seguida de `:` pelo tipo de retorno.

Nossa função não retorna nada, então vamos definir um retorno do tipo `void` para ela:

```typescript
function ola(nome: string) : void {
    if (/^([aA-zZ\s]+)$/.test(nome)) {
        console.log(`Ola ${nome}`)
    }
}
```

O tipo `void` é referente ao vázio.

### Tipando variáveis

Também podemos definir tipos para nossas variáveis, seguindo a mesma sintaxe:

```typescript
const versao: number = 1;
```

## Convertendo um tipo em outro

Podemos converter um tipo para outro, isso também é chamado de `casting`, para convertermos um número (*number*) para uma `string`, poderíamos fazer:

```typescript
const frase: any = "Convertendo tipos"
const quantidadeDeLetras : number = (<string> frase).length
```

Veja que criei uma variável do tipo `any`, ou seja, ele pode ser e receber qualquer tipo.

Converti ele para `string` através de `<` e `>`, passando o tipo para qual deve ser convertido, após realizar a conversão utilizei a função `length` para pegar a quantidade de palavras da frase.

## Saiba mais

Uma das vantagens em utilizar linguagem tipada é que o editor ou IDE ficam mais inteligentes com seu *auto complete* (dicas de código), sabendo o tipo, ele sabe o que pode ser ou não feito para ele.

Se você não quiser utilizar o *playground* da Microsoft será necessário instalar o TypeScript em sua máquina, a instalação pode ser feita de forma muito simples através do `npm` ou `yarn`:

Instalando com `npm`:

```bash
npm i -g typescript
```

Ou, instalando com `yarn`:

```bash
yarn global add typescript
```

Aguarde o *download* e instalação ser finalizado, para compilar um arquivo TypeScript, o mesmo deve ser salvo utilizando a extensão `.ts` e executar o comando `tsc` seguido pelo nome do arquivo que pretende compilar, por exemplo:

```bash
tsc NOME_ARQUIVO.ts
```

Se preferir pode pedir para o TypeScript ficar verificando por modificações (*watching*) no arquivo, passe o parâmetro `-w` para ele:

```bash
tsc -w NOME_ARQUIVO.ts
```

## Conclusão

Essa foi uma primeira impressão do que podemos fazer com TypeScript, além de tipagem, temos outras funcionalidades e recursos, ao longo dos *post's* vou mostrando aos poucos e ir avançando no assunto.

E aí, você já conhecia o TypeScript? Não deixe de comentar e assinar a [*newsletter*](http://eepurl.com/ggP7Rv) para receber as novidades por email.

Se quiser nos ajuder, você também pode fazer doação apoiando o blog, através do [apoia-se](https://apoia.se/mahenrique94).
