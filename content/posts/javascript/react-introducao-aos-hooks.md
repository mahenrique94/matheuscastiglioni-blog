---
autor: "Matheus Castiglioni"
categoria: "JavaScript"
disqus_identifier: "react-introducao-aos-hooks"
disqus_title: "React: Introdução Aos Hooks"
disqus_url: "https://blog.matheuscastiglioni.com.br/react-introducao-aos-hooks"
date: 2019-02-18T08:31:49-02:00
draft: false
keywords: [ "Front-End", "Hooks", "React", "ReactJS" ]
slug: "react-introducao-aos-hooks"
tag: [ "Front-End", "Hooks", "React", "ReactJS" ]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1550353490/react-introducao-aos-hooks_yuzvyy.png"
title: "React: Introdução Aos Hooks"
url: "/react-introducao-aos-hooks"
---

A nova versão do React (**16.8**) foi liberada, o que veio de bom? Finalmente o lançamento dos Hooks! Mas afinal, o que são esses *hooks* que tanto falam? Os hooks vieram para facilitar nosso desenvolvimento e criação de componentes em React, a ideia é não precisar mais ficar criando classes e mais classes, fazendo heranças, escrevendo construtores e chamadas `super`. Mas, como tudo isso funciona?

Com os *hooks* não vamos ser obrigados a criar classes para ter `state` e componentes *statefull*, também não precisaremos de classes para executar determinadas funções em determinado ciclo de vida dos componentes (`componentDidMound`, `componentDidUpdate`, etc...).

Agora podemos escrever apenas componentes funcionais e tudo que os componentes de classe tinham, os funcionais também terão.

Chega de conversa e vamos aos *hooks*, atualmente (até a data da escrita desse *post*), os *hooks* oficiais do React são:

- `useState`
- `useEffect`
- `useContext`
- `useReducer`
- `useCallback`
- `useMemo`
- `useRef`
- `useImperativeHandle`
- `useLayoutEffect`
- `useDebugValue`

Além dos *hooks* oficiais também podemos criar os nossos *hooks* (assunto para um próximo *post*) ou utilizar *hooks* feitos pela comunidade.

Vamos ver o que cada um desses *hooks* faz, quando e porque devemos utilizá-los?

![Comemorando explicação dos hooks](https://res.cloudinary.com/mahenrique94/image/upload/v1550355793/ezgif.com-optimize_b3quol.gif)

## Começando com os hooks

Para que você comece a utilizar os *hooks* é necessário que a versão do `react` e `react-dom` seja superior ou pelo menos á **16.8.x**. Na versão **2.1.5** do `create-react-app` por padrão ao criar novos projetos as versões dos dois *packages* (pacotes) já são compatíveis com React Hooks.

Caso a versão que você esteja utilizando é inferior á **16.8.x** sugiro que faça a atualização dos mesmos.

## useState

Usado para adicionarmos estado (*state*) para nossos componentes funcionais, para usá-lo temos a seguinte sintaxe:

```javascript
const [ NOME_DO_ESTADO, FUNCAO_PARA_ATUALIZAR ] = useState(VALOR_INICIAL)
```

Usamos a sintaxe `[ NOME_DO_ESTADO, FUNCAO_PARA_ATUALIZAR ]` para realizar a desconstrução do `array` de forma simplificada, isso porque a função `useState` irá devolver um `array` com duas posições, a primeira será o valor do estado e a segunda uma função para atualizar o seu valor, da forma mais longa ficaria:

```javascript
const estadoEmArray = useState(VALOR_INICIAL)
const valorDoEstado = estadoEmArray[0]
const funcaoParaAtualizar = estadoEmArray[1]
```

Portanto, conseguimos criar um componente de contador da seguinte maneira:

```javascript
const Counter = () => {

    const [ counter, updateCounter ] = useState(0)

    const decrement = () => updateCounter(counter - 1)
    const increment = () => updateCounter(counter + 1)

    return (
        <>
            <h1>Score: { counter }</h1>
            <button onClick={ decrement } type="button">Decrement</button>
            <button onClick={ increment } type="button">Increment</button>
        </>
    )

}
```

O valor inicial será `0` e temos duas funções, uma para incrementar (*increment*) e outra para decrementar (*decrement*), ambas apenas pegam o valor atual do contador e soma ou subtraí mais um.

Caso o próximo valor dependa do valor atual do estado, assim como fazíamos com o `setState` também podemos passar uma função como parâmetro, onde o primeiro parâmetro será o valor atual, dessa maneira conseguimos realizar as mesmas operações de forma diferente:

```javascript
const decrement = () => updateCounter(prevCounter => --prevCounter)
const increment = () => updateCounter(prevCounter => ++prevCounter)
```

Simplesmente recebemos o valor anterior do contador e antes de retorná-lo fazemos adição ou subtração do mesmo.

**Observação**: Diferente do `setState` tradicional, a atualização de estado com `useState` não realiza o merge das informações automáticamente, caso isso seja necessário devemos fazer de forma manual e explicíta. Vamos ao seguinte exemplo:

```javascript
const MyName = () => {

    const [ fullName, updateFullName ] = useState({
        name: 'Matheus',
        lastName: null
    })
    const { name, lastName } = fullName

    const updateLastName = () => updateFullName({ lastName: 'Castiglioni' })

    return (
        <>
            <h1>My name is: { `${name} ${lastName}` }</h1>
            <button onClick={ updateLastName } type="button">Update lastName</button>
        </>
    )

}
```

Ao testar a atualização do sobrenome, podemos ver:

![Atualizando um estado sem merge](https://res.cloudinary.com/mahenrique94/image/upload/v1550405585/ezgif.com-optimize_ih3y1e.gif)

Repare que o valor inicial do sobrenome era `null`, pois, definimos o `lastName` como `null`. Mas, ao tentar atualizá-lo, o `name` recebe o valor de `undefined`, isso porque na atualização do sobrenome passamos apenas o `lastName`, então ao desconstruir o `fullName` não existe a chave `name`, por isso, a variável recebe o valor de `undefined`. Como podemos resolver esse problema? Podemos utilizar os recursos de desconstrução:

```javascript
const updateLastName = () => updateFullName(prevFullName => ({
    ...prevFullName,
    lastName: 'Castiglioni'
}))
```

Simplesmente desconstruímos o `fullName` e modificamos o valor de `lastName`, se realizarmos o teste novamente:

![Atualizando estado com merge](https://res.cloudinary.com/mahenrique94/image/upload/v1550405926/ezgif.com-optimize_1_eit91i.gif)

## useEffect

Basicamente usamos para substituir o `componentDidMount` e `componentDidUpdate`, o `useEffect` recebe uma função como parâmetro que será executado em determinadas vezes, vamos a sintaxe:

```javascript
useEffect(FUNCAO_PARA_EXECUTAR, [ CAMPOS_OBSERVAVEIS ])
```

Calma, ao longo irei explicar os detalhes.

Para chamar a função apenas uma vez, podemos fazer da seguinte maneira:

```javascript
useEffect(() => {
    console.log('Chamando ao montar')
}, [])
```

Repare que passamos como segundo parâmetro um `array` vazio, isso diz para o `useEffect` ser disparado apenas uma única vez.

Podemos também, dizer para o `useEffect` chamar a função após montar o componente e quando X estado ou propriedade mudar, da seguinta maneira:

```javascript
useEffect(() => {
    console.log('Chamando a cada mudança do score')
}, [ score ])
```

No caso `score` é um estado interno do componente, mas, também poderia ser uma propriedade ou ambos:

```javascript
useEffect(() => {
    console.log('Chamando a cada mudança do estado ou propriedade')
}, [ MEU_ESTADO, MINHA_PROPRIEDADE ])
```

Mas, imagine que realizamos a inscrição em um evento utilizando a biblioteca [PubSub](https://github.com/mroderick/PubSubJS):

```javascript
useEffect(() => {
    PubSub.subscribe(SOME_EVENT)
}, [])
```

Como podemos dizer para o `useEffect` remover a inscrição caso o componente seja desmontado (retirado) do DOM? Para isso, podemos retornar uma função que será executada durante esse tempo:

```javascript
useEffect(() => {
    PubSub.subscribe(SOME_EVENT)
    return () => PubSub.unsubscribe(SOME_EVENT)
}, [])
```

Seria mais ou menos o que faríamos no `componentWillUnmount`.

## useContext

Usado para facilitar a utilização da **Context API**, apenas passamos um contexto para o *hook* como parâmetro e ele irá devolver o seu respectivo valor:

```javascript
const pokemon = useContext(PokemonContext)
```

O nosso `PokemonContext`:

```javascript
const PokemonContext = createContext('Pikachu')
```

Também poderíamos criar uma função para atualizar o valor do contexto (assunto para um próximo *post*), assim que esse valor for atualizado, o mesmo irá ser refletido no `useContext`.

## useReducer

No começo do *post* fizemos um contador utilizando apenas o estado interno do componente, mas, podemos fazer algo mais avançado utilizando o `useReducer`, poderíamos criar um contador da seguinte maneira:

```javascript
const initialState = {
    counter: 0
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'decrement':
            return { ...state, counter: --state.counter }
        case 'increment':
            return { ...state, counter: ++state.counter }
        default:
            return state
    }
}

const Counter() = () => {

    const [ state, dispatch ] = useReducer(reducer, initialState)

    return (
        <>
            <h1>Counter: { state.counter }</h1>
            <button onClick={ () => dispatch({ type: 'decrement' }) } type="button">Decrement</button>
            <button onClick={ () => dispatch({ type: 'increment' }) } type="button">Increment</button>
        </>
    )

}
```

Temos o mesmo resultado. Alguns motivos para usarmos o `useReducer`:

1. Quando temos estados com lógicas complexas.
2. Necessidade de algum componente filho atualizar o estado, assim não precisamos ficar passando funções de *callback*, passamos apenas o `dispatch` e quando o mesmo for invocado o `reducer` será atualizado.
3. Novo estado depende do estado anterior.
4. etc...

Se você já usou [Redux](https://redux.js.org/) deve ter notado que é bem parecido, mas, diferente da convenção do Redux onde fazemos:

```javascript
const reducer = (state = initialState, action) => {}
```

Com *hooks* isso não é usado, isso porque algumas vezes o valor inicial do `reducer` pode vim de alguma propriedade do componente. Se você quiser seguir a convenção do Redux, pode mudar seu `useReducer` para:

```javascript
useReducer(reducer, undefined, reducer)
```

O que não é recomendado.

## useCallback

Usado para retornar *memoized callback's*, resumindo irá retornar uma função um pouco mais "inteligente" que só será executada novamente caso um de seus parâmetros mudem, com isso conseguimos evitar renderizações desnecessárias em nossos componentes, otimizando a performance da aplicação (similar ao `shouldComponentUpdate`).

```javascript
const Counter = () => {

    const [ score, updateScore ] = useState(0)

    const callback = useCallback(() => updateScore(1), [ 1 ])

    return (
        <>
            <h1>Counter: { score }</h1>
            <button onClick={ callback }>Update score</button>
        </>
    )

}
```

Nesse exemplo nosso `Counter` irá ser atualizado apenas uma vez (na primeira chamada), depois, como sempre estamos passando o valor `1` o `useCallback` é inteligente e memorizou esse parâmetro, assim, enquanto o mesmo não mudar, a função `updateScore` não será chamada:

![Componente atualizando apenas uma vez](https://res.cloudinary.com/mahenrique94/image/upload/v1550409487/ezgif.com-optimize_1_cphrve.gif)

Repare que apenas uma vez o valor foi atualizado, os demais *clicks* foram ignorados.

## useMemo

Similar ao funcionamento do `useCallback` a diferença está no retorno:

```javascript
useCallback(FUNCAO, PARAMETROS) // retorna uma função
useMemo(() => FUNCAO, PARAMETROS) // retorna um valor
```

Repare que o `useMemo` retorna uma valor, ao contrário do `useCallback` que retorna uma função.

```javascript
const Counter = () => {

    const memoizedValue = useMemo(() => sum(1, 1), [ 1, 1 ]) // 1 + 1 = 2

    return (
        <>
            <h1>Counter: { memoizedValue }</h1>
        </>
    )

}
```

## useRef

Similar ao `createRef`, utilizado para referenciarmos elementos ou componentes:

```javascript
const Title = () => {

    const title = useRef()

    const logTitle = () => console.log(title.current.textContent)

    return (
        <>
            <h1 ref={ title }>My Title</h1>
            <button onClick={ logTitle } type="button">Log title</button>
        </>
    )

}
```

Repare no exemplo, estamos apenas logando o valor da *tag* `h1`, nossa referência tem uma propriedade chamada `.current` que refere-se ao elemento no DOM.

## useImperativeHandle

Customiza as propriedades do objeto que retorna para o componente pai quando usamos o `ref`.

```javascript
const Title = forwardRef(({ children }, ref) => {

    const title = useRef()

    useImperativeHandle(ref, () => ({
        focus: () => {
            console.log('focando...')
            title.current.focus()
        }
    }))

    return <h1 ref={ title }>{ children }</h1>

})

const Page = () => {

    const title = useRef()

    const logTitle = () => title.current.focus()

    return (
        <>
            <Title ref={ title }>My Title</Title>
            <button onClick={ logTitle } type="button">Log title</button>
        </>
    )

}
```

Agora, o valor de `title.current` não será mais uma referência do DOM, será um objeto com a propriedade `focus`, valor retornado pelo `useImperativeHandle`.

## useLayoutEffect

Funciona do mesmo jeito que o `useEffect` explicado anteriormente, porém, é disparado apenas quando todas as alteraçãos e mutações no DOM são feitas. Geralmente ele é utilizado para lermos algo no DOM ou fazer renderizações síncronas.

## useDebugValue

Usado para logar informações dentro dos nossos *custom hooks*.

```javascript
const MyHook = () => {
  useDebugValue('SOME LABEL/INFO')
  return 'My hook'
}
```

## Conclusão

Nesse *post* expliquei um pouco sobre os Hooks do React, passamos por todos eles (oficiais) e vimos alguns exemplos.

E aí, você já conhecia os *hooks*? Não deixe de comentar. Caso tenha gostado, pode estar assinando a [newsletter](http://eepurl.com/ggP7Rv) e receba novidades por email.

Até a próxima.
