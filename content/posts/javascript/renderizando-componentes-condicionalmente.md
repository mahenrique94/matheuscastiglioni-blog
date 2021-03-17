---
autor: "Matheus Castiglioni"
categoria: "JavaScript"
disqus_identifier: "renderizando-componentes-condicionalmente-em-react"
disqus_title: "Renderizando Componentes Condicionalmente em React"
disqus_url: "https://blog.matheuscastiglioni.com.br/renderizando-componentes-condicionalmente-em-react"
date: 2020-04-02T21:47:07-03:00
draft: false
keywords: ["React", "ReactJS", "Componentes", "Web", "Front-End"]
slug: "renderizando-componentes-condicionalmente-em-react"
tag: ["React", "ReactJS", "Componentes", "Web", "Front-End"]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1585875034/code-944499_1280_ukzzfs.jpg"
title: "Renderizando Componentes Condicionalmente em React"
url: "/renderizando-componentes-condicionalmente-em-react"
---

Quando estamos trabalhando com React é muito comum renderizar nossos componentes através de alguma condicional, ou seja, dado uma condição renderizamos o componente A senão renderizamos o componente B, e por ai vai...

Podemos fazer isso de N maneiras, para exemplo do *post* vamos imaginar que estamos construindo um componente chamado `Field` que será responsável por renderizar algum elemento referente ao nosso formulário, sendo assim, ele vai receber uma propriedade *type* e através dela vai decidir qual componente deve ser renderizado.

Atualmente a aplicação utiliza os seguintes tipos:

- `text` => Renderiza um `input` com o `type` igual à `text`.
- `number` => Renderiza um `input` com o `type` igual à `number`.
- `select` => Renderiza um `select` com opções.
- `date` => Renderiza um *datepicker*.
- `check` => Renderiza um `input` com o `type` igual à `checkbox`.
- `radio` => Renderiza um `input` com o `type` igual à `radio`.

O primeiro passo será criar cada um desses componentes. Para isso, vamos criar uma pasta `components` dentro de `src` e dentro da pasta `components` vamos criar mais uma para o nosso contexto de formulário, no caso `form`, por fim, para agrupar todos os possíveis tipos de campos vamos criar uma pasta `fields`.

Agora que temos as pastas criadas é hora de começar a criação dos componentes:

```javascript
// /src/components/form/fields/Text.js
import React from 'react'

const Text = ({ name, value, onChange }) => (
    <input
        name={name}
        value={value}
        onChange={onChange}
        type="text"
    />
)

export default Text
```

```javascript
// /src/components/form/fields/Radio.js
import React from 'react'

const Radio = ({ name, value, onChange }) => (
    <input
        name={name}
        value={value}
        onChange={onChange}
        type="radio"
    />
)

export default Radio
```

```javascript
// /src/components/form/fields/Check.js
import React from 'react'

const Check = ({ name, value, onChange }) => (
    <input
        name={name}
        value={value}
        onChange={onChange}
        type="checkbox"
    />
)

export default Check
```

```javascript
// src/components/form/fields/Date.js
import React from 'react'

const Date = () => <div>Some DatePicker</div>

export default Date
```

```javascript
// /src/components/form/fields/Number.js
import React from 'react'

const Number = ({ name, value, onChange }) => (
    <input
        name={name}
        value={value}
        onChange={onChange}
        type="number"
    />
)

export default Number
```

```javascript
// /src/components/form/fields/Select.js
import React from 'react'

const Select = ({ name, value, options }) => (
    <select name={name} value={value}>
        {options.map(option => (
            <option key={option.id} value={option.value}>
                {option.text}
            </option>
        ))}
    </select>
)

export default Select
```

Lembrando que são apenas exemplos, em um cenário real pode ser que os mesmos sejam diferentes, ou seja, sejam mais complexos, recebam mais propriedades, etc... Mas, por questões de simplicidade vamos pensar que para nosso contexto eles estão atendendo nossa necessidade.

O próximo passo será criar o componente `Field`, do qual será responsável por decidir qual tipo de campo deve ser renderizado, demais maneira, podemos pensar em algo mais ou menos assim:

```javascript
// /src/components/form/Field.js
import React from 'react'

import Check from './fields/Check'
import Date from './fields/Date'
import Number from './fields/Number'
import Radio from './fields/Radio'
import Select from './fields/Select'
import Text from './fields/Text'

const Field = ({ type, ...props }) => {
    if (type === 'check') {
        return <Check {...props} />
    } else if (type === 'date') {
        return <Date {...props} />
    } else if (type === 'number') {
        return <Number {...props} />
    } else if (type === 'radio') {
        return <Radio {...props} />
    } else if (type === 'select') {
        return <Select {...props} />
    } else if (type === 'text') {
        return <Text {...props} />
    } else {
        throw new Error("Field type it's  invalid")
    }
}

export default Field;
```

Repare que ele recebe varias propriedades e através da propriedade `type` com varios `if's` encadeados ele está decidindo qual componente deve ser renderizado. Caso um tipo inválido seja passado, um erro será lançado.

Agora dentro do nosso `App.js` podemos fazer o uso do componente `Field`:

```javascript
// /src/App.js
import React from 'react'

import Field from './components/form/Field'

const App = () => (
    <>
        <Field type="text" />
        <Field type="number" />
        <Field type="date" />
        <Field type="select" options={[]} />
        <Field type="radio" />
        <Field type="check" />
    </>
)

export default App
```

Muito bom, temos nosso formulário funcionando e renderizando os diversos tipos de campos de acordo com nossa necessidade.

Mas, o componente `Field` está com várias condições e é um tipo de componente que tem de a crescer para sempre, ou seja, sempre que um novo tipo de campo for adicionado, vamos ter que adicionar um novo `if`. Além disso, ele está precisando conhecer todos os possíveis campos e como renderizá-los.

Será que podemos fazer algo diferente? O primeiro passo será criar um arquivo `index.js` dentro da pasta `/src/components/form/fields`:

```javascript
// /src/components/form/fields/index.js
import Check from './Check'
import Date from './Date'
import Number from './Number'
import Radio from './Radio'
import Select from './Select'
import Text from './Text'

const fields = new Map()
fields.set('check', Check)
fields.set('date', Date)
fields.set('number', Number)
fields.set('radio', Radio)
fields.set('select', Select)
fields.set('text', Text)

export { fields }
```

Basicamente ele está criando um mapa (`Map`) de campos à serem utilizados pelo nosso `Field`.

Agora no `Field` podemos importar esse mapa e através do `createElement` realizamos a criação dos componentes dinâmicamente:

```javascript
// /src/components/form/Field.js
import React, { createElement } from 'react'

import { fields } from './fields'

const Field = ({ type, ...props }) => createElement(fields.get(type), props)

export default Field;
```

Dessa maneira nosso `Field` não precisa conhecer quais e como os componentes devem renderizar, ele apenas pede para nosso `Map` o componente e passa as propriedades.

Caso amanhã ou depois seja necessário adicionar mais um tipo de campo, podemos simplesmente ir no nosso `Map` e adicioná-lo, sem a necessidade de alterar algo no `Field.js`.

Também poderíamos ter criado uma variável para armazenar todos os possíveis tipos de campo, mas, isso seria apenas uma melhoria. E caso essa variável fosse um `array` poderíamos percorrê-la e importar os componentes dinâmicamente com o *dynamic import* (assunto para um próximo *post*).

Se você reparou, não estamos mais lançando um erro quando o tipo do campo é inválido, isso não é mais necessário porque caso o tipo seja inválido, nosso `Map` vai retornar `undefined` e ao chamar a função `createElement` passando `undefined` o próprio React vai se encarregar de lançar uma exceção.

## Conclusão

Nesse *post* vimos como podemos renderizar componentes condicionalmente através de `Map` e da função `createElement`, trocamos nosso componente com varios `if's` encadeados para um código bem mais simples (pelo menos para mim).

E ai, você já conhecia essa abordagem? O que achou? Não deixe de comentar e caso tenha outras ideias por favor compartilhe.

Abraços, até a próxima.

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
