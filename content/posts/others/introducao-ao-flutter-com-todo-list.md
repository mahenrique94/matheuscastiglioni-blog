---
autor: "Matheus Castiglioni"
categoria: "Outros"
disqus_identifier: "introducao-ao-flutter-com-todo-list"
disqus_title: "Introdução Ao Flutter Com Todo List"
disqus_url: "https://blog.matheuscastiglioni.com.br/introducao-ao-flutter-com-todo-list"
date: 2019-11-22T07:37:45-03:00
draft: false
keywords: ["Flutter", "Mobile", "App", "Todo", "Hibrido"]
slug: "introducao-ao-flutter-com-todo-list"
tag: ["Flutter", "Mobile", "App", "Todo", "Hibrido"]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1574422100/1_73IgUxPfyXUKZAaIXgutrw_yazws1.png"
title: "Introdução Ao Flutter Com Todo List"
url: "/introducao-ao-flutter-com-todo-list"
---

Atualmente o uso de aplicativos móveis vem aumentando dia após dia, isso porque nossos celulares estão cada vez mais potentes.

Mas, como podemos desenvolver um aplicativo que funcione tanto para a plataforma Android e iOS (mais famosas)?

Isso pode ser feito de algumas maneiras, sendo uma delas:

Podemos aprender a arquitetura Android e descobrir qual sua linguagem de programação, no caso, hoje poderíamos utilizar Kotlin ou Java.

Já para o iOS, poderíamos utilizar as linguagens Swift ou Objective-C.

Mas, vamos precisar aprender duas linguagens diferentes, entender duas plataformas e arquiteturas diferentes, escrever dois códigos diferentes (na maioria das vezes será repetido), ou seja, vamos precisar fazer várias coisas iguais duas vezes.

Para resolver esses problemas a galera pensou:

> Será que a gente não consegue de alguma maneira possuir um código fonte que irá compilar nativamente para as duas plataformas?

E sim, isso é possível, uma das motivações para a criação e nascimento do Flutter foi justamente esse. Com ele a gente pode escrever apenas um código fonte, no caso a linguagem usada será a Dart e pedir para ela compilar para as duas plataformas.

Esse método de escrever uma vez e compilar para as duas plataformas é também conhecido como desenvolvimento de aplicações híbridas ou desenvolvimento híbrido.

## Instalando o Flutter

O primeiro passo será realizar a instalação do Flutter em nossa máquina de desenvolvimento, esse processo vai variar de acordo com o S.O (Sistema Operacional), mas, o Flutter tem uma ótima documentação e passo à passo para esse processo:

- https://flutter.dev/docs/get-started/install

Uma vez que o Flutter está instalado, podemos rodar o comando `flutter doctor`, onde o próprio Flutter irá ser responsável por escanear a nossa máquina e verificar se as dependências para começar o desenvolvimento estão instaladas.

```bash
Doctor summary (to see all details, run flutter doctor -v):
[✓] Flutter (Channel stable, v1.9.1+hotfix.6, on Mac OS X 10.14.6 18G87, locale en-BR)

[✓] Android toolchain - develop for Android devices (Android SDK version 29.0.1)
[✓] Xcode - develop for iOS and macOS (Xcode 10.3)
[!] Android Studio (version 3.4)
    ✗ Flutter plugin not installed; this adds Flutter specific functionality.
    ✗ Dart plugin not installed; this adds Dart specific functionality.
[✓] VS Code (version 1.39.2)
[!] Connected device
    ! No devices available

! Doctor found issues in 2 categories.
```

Nesse processo o Flutter irá verificar se o `Xcode` ou `Android Studio` estão instalados, vai verificar se o SDK do Android está instalado, vai verificar se o VSCode está instalado e se possuí algum *device* disponível para uso.

Caso você esteja em ambientes Linux ou Windows, sugiro realizar a instalação do Android Studio para gerenciar os emuladores do Android através do AVD Manager (*Android Virtual Device*).

Porém, caso esteja em ambientes mac, sugiro realizar a instalação do XCode e também do Android Studio, assim conseguimos utilizar o simulador do iOS e emulador do Android.

## Criando o projeto

Com todos os requisitos prontos já podemos começar a criação do nosso aplicativo que nesse primeiro momento de introdução será um simples To-Do List.

Para criar um novo projeto podemos usar o comando `flutter create` seguido pelo nome do projeto:

```bash
flutter create video_todo_list_flutter
```

**Obs**: Uma observação interessante é que caso seja necessário separar o nome do projeto, o ideal é usarmos *underscore* (*underline*) ao contrário de hífens.

```bash
Run "flutter doctor" for information about installing additional components.

In order to run your application, type:

    $ cd video_todo_list_flutter
    $ flutter run

Your application code is in video_todo_list_flutter/lib/main.dart.
```

Caso tudo tenha dado certo, uma nova pasta com o nome do projeto deve ter sido criada no diretório onde o comando `create` foi executado.

## Subindo o projeto

Agora que o projeto foi criado com sucesso, podemos navegar até a pasta do mesmo:

```bash
cd video_todo_list_flutter
```

Para realizar navegação entre pastas pelo terminal utilizamos o comando `cd` (*change directory*) seguido pelo caminho que pretendemos acessar.

Uma vez dentro do projeto, podemos rodar o comando `run` para executar e subir nosso projeto:

```bash
flutter run
```

Caso nenhum *device* esteja disponível para uso, podemos ver uma mensagem como essa:

```bash
No supported devices connected.
```

Sendo assim, será necessário ter pelo menos um *device* para rodar o projeto, instalar o aplicativo e executar o aplicativo.

E esse *device* pode ser um emulador do Android, um simulador do iOS ou um *device* conectado via USB na máquina.

Para o exemplo do vídeo, vou utilizar um simulador do iOS.

O primeiro passo será subir o simulador, isso pode ser feito através do comando `open`:

```bash
open -a Simulator
```

O comando `open` é usado para abrir arquivos via linha de comando, quando passamos o parâmetro `-a` estamos dizendo para abrir com um aplicativo em específico e o `Simulator` é o aplicativo que pretendemos abrir.

Sendo assim, estamos dizendo:

> Abra o simulador

Uma vez que o comando foi executado, um novo simulador deve estar rodando em nossa máquina local.

![Simulador rodando](https://paper-attachments.dropbox.com/s_E86486993D33CB9FD6887CD1ECB4A2B03EC26B84A784901C450B65C186D187F6_1572394452122_Screen+Shot+2019-10-29+at+21.13.56.png)

Uma vez com o simulador rodando, podemos executar o `run` novamente:

```bash
flutter run
```

Caso tudo tenha dado certo, devemos ver uma mensagem parecido com:

```bash
Launching lib/main.dart on iPhone X in debug mode...
Running Xcode build...

    ├─Assembling Flutter resources...                           7.1s
    └─Compiling, linking and signing...                         8.9s
Xcode build done.                                           18.5s
Syncing files to device iPhone X...
    2,137ms (!)

🔥  To hot reload changes while running, press "r". To hot restart (and rebuild state), press "R".
An Observatory debugger and profiler on iPhone X is available at: http://127.0.0.1:63219/-0PX5xp3AMU=/
For a more detailed help message, press "h". To detach, press "d"; to quit, press "q".
```

Nesse momento o aplicativo deve estar instalado e executando no simulador.

![Aplicativo padrão do Flutter](https://paper-attachments.dropbox.com/s_E86486993D33CB9FD6887CD1ECB4A2B03EC26B84A784901C450B65C186D187F6_1572394661192_Screen+Shot+2019-10-29+at+21.17.27.png)

Por padrão o Flutter vem com um simples contador de exemplo.

## Integrando o Flutter com o VSCode

Mas, se toda hora tivermos que ficar rodando os comandos do Flutter manualmente em nosso terminal, isso não será nada produtivo.

Para isso, podemos integrar o Flutter em nosso VSCode, podemos realizar a instalação da extensão do Flutter para o VSCode:

- https://marketplace.visualstudio.com/items?itemName=Dart-Code.flutter

Assim será possível utilizarmos o *debug* do VSCode para rodar as aplicações Flutter, dessa maneira, qualquer mudança em nossos códigos será refletida automaticamente em nosso aplicativo.

## Alterando o aplicativo padrão

Agora que temos todas as configurações necessárias, vamos começar a personalizar nosso aplicativo.

O primeiro passo será acessar o arquivo `lib/main.dart` e apagar todos os códigos por completo.

```dart
```

Agora, vamos criar o ponto de entrada do nosso aplicativo, isso pode ser feito definindo a função `main` dentro do `lib/main.dart`.

```dart
void main() => runApp(MyApp());
```

Basicamente criamos uma função chamada `main` que terá como retorno o tipo `void`, ou seja, a função não irá retornar nada. Repare que a função está usando a *arrow notation*, ela é usada para funções ou métodos com apenas uma linha de código.

A função `main` será chamada quando o aplicativo for executado, a partir dela iremos montar toda estrutura e arvore de `Widgets` do aplicativo.

Já a função `runApp` irá receber um `Widget` e anexá-lo na tela, ou seja, ela irá receber o `Widget` que deve ser renderizado na tela.

Ao tentar rodar esse código, o mesmo irá ter alguns problemas:

1. O primeiro será porque não existe o `Widget` chamado `MyApp`
2. O segundo é que precisamos importar o pacote `flutter/material.dart` para utilizarmos a função `runApp`.

Vamos começar a corrigir esses pequenos pontos:

O primeiro passo será importar o pacote `flutter/material.dart`:

```dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());
```

O segundo passo será criar a classe `MyApp` que será nosso primeiro `Widget`:

```dart
class MyApp {}
```

Mas, até esse momento, trata-se apenas de uma classe qualquer em Flutter, precisamos transformá-la e dizer que ela é um `Widget`. Para fazer isso, vamos extender da classe `StatelessWidget`:

```dart
class MyApp extends StatelessWidget {}
```

Agora estamos dizendo que a classe `MyApp` é um `Widget` sem estado (*stateless*).

Com isso, seremos obrigados a sobrescrever o método `build`:

```dart
class MyApp extends StatelessWidget {
    @override
    Widget build(BuildContext context) {}
}
```

Esse é o método que irá ser chamado durante o processo de renderização, é ele que irá representar e descrever a interface do `Widget`.

Como parâmetro do método `build` podemos receber o contexto do aplicativo, mas, o que é esse tal de `context`? Basicamente o contexto contém informações sobre a localização na árvore que o `Widget` está sendo renderizado. Essa classe lida com a localização do `Widget` na árvore (além claro de outras funcionalidades que não vamos entrar em detalhes no momento).

Perfeito, agora precisamos retornar algum `Widget` na tela, poderíamos criar algo na mão do zero, porém, vamos começar a fazer uso do Flutter. O primeiro `Widget` que vamos usar será o `MaterialApp`:

```dart
class MyApp extends StatelessWidget {
    @override
    Widget build(BuildContext context) {
        return MaterialApp();
    }
}
```

Esse `Widget` é bem comum e encapsula vários outros `Widgets` que são comumente utilizados em aplicações que fazem uso do *Material Design*.

Podemos passar algumas propriedades para nosso `Widget`, sendo:

- `home`: Nesse parâmetro vamos informar o `Widget` para a rota padrão do aplicativo, ou seja, qual `Widget` devemos renderizar na rota raiz ( `/`).
- `title`: O título do aplicativo, ele será utilizado pelos *devices* para identificar o nosso aplicativo ao usuário, por exemplo: No Android o título irá aparecer vinculado ao nosso aplicativo quando o usuário abrir os aplicativo recentes.

Sabendo disso, vamos finalizar a criação do nosso `MyApp`:

```dart
class MyApp extends StatelessWidget {
    @override
    Widget build(BuildContext context) {
        return MaterialApp(
            title: 'Todo List',
            home: MyHome(),
        );
    }
}
```

Agora, precisamos criar o `Widget` `MyHome`:

```dart
class MyHome {}
```

Porém, para esse `Widget` vamos utilizar o `StatefulWidget` ao contrário do `StatelessWidget`. Isso porque vamos precisar criar um estado para nossos `Widget's`, ou seja, vamos precisar das informações do To-Do List.

```dart
class MyHome extends StatefulWidget {}
```

Quando utilizamos o `StatefulWidget` precisamos sobrescrever e implementar o método `createState`:

```dart
class MyHome extends StatefulWidget {
    @override
    State<StatefulWidget> createState() {
        return MyHomeState();
    }
}
```

Ele basicamente vai precisar criar um novo estado para nosso `Widget`.

Agora, precisamos criar a classe que irá representar nosso estado, no caso a `MyHomeState`:

```dart
class MyHomeState {}
```

Como estamos utilizando ela para gerenciar o estado do nosso `Widget` a mesma precisa herdar da classe `State`.

```dart
class MyHomeState extends State<MyHome> {}
```

A classe `State` irá representar a lógica e o estado interno do nosso `Widget`.

Repare que precisamos informar em qual `Widget` o estado será mantido, em nosso caso será no `MyHome`. E como de costume, precisamos sobrescrever e implementar o método `build`:

```dart
class MyHomeState extends State<MyHome> {
    @override
    Widget build(BuildContext context) {}
}
```

Mas, porque o `build` ficou dentro do estado e não do `Widget`? A ideia de adicionar o `build` dentro do estado foi por questões de arquitetura, caso o `build` fosse adicionado no `StatefulWidget` o método `build` deveria receber o estado, algo parecido com:

```dart
class MyHome extends StatefulWidget {
    @override
    Widget build(BuildContext context, State state) {}
}
```

Agora vamos logar as informações do `State`:

```dart
class MyHome extends StatefulWidget {
    @override
    Widget build(BuildContext context, State state) {
       print("Message => ${state}");
    }
}
```

Agora imagine que o pai de `MyHome` buildou o `Widget` com a `state` igual à `Home`, então, a função `build` irá printar `Message => Home` como experado. Porém, imagine que o `MyHome` foi rebuildado com o `state` igual à `Atualizei`, então, esperamos que o `build` printe `Message => Atualizei`.

Mas, isso não acontece, porque? O problema é que no primeiro `build` foi criado um *closure* e ele ainda referencia os valores antigos do `Widget`.

Porém quando o método `build` está dentro do estado, o *closure* criado durante o `build` irá capturar o objeto de estado e não o `Widget`.

Sim, isso é um pouco confuso, mas, foi a maneira que a Google optou em criar sua arquitetura.

### Saiba mais

E afinal de contas, o que é esse tal de *closure*? De uma maneira simplista, é uma função que consegue lembrar o ambiente ou escopo em que ela foi criada. Vamos imaginar o seguinte exemplo:

```javascript
const init = () => {
    const name = 'MyApp'
    return () => {
        console.log('Running app...')
        console.log(name)
    }
}

const app = init()
app()
```

Nesse exemplo, repare que criamos uma função `init` onde dentro dela declaramos uma variável `name` e retornamos uma função. Essa função de retorno nada mais é do que um *closure,* isso porque ela irá lembrar seu ambiente de execução e irá conseguir obter o valor da variável `name`.

## Criando o layout do aplicativo

Agora que já entendemos um pouco mais a arquitetura do Flutter e vimos o que são os *closure's,* vamos continuar a implementação do nosso estado.

Normalmente existe alguns *layouts* que são bem comum quando falamos de aplicativos, no caso, normalmente os aplicativos vão possuir uma barra com título da tela e um corpo contendo as informações da tela.

Pensando isso, a Google deixou um `Widget` pronto para utilizarmos chamado `Scaffold`, com ele já temos uma estrutura padrão de um aplicativo, sendo assim, vamos começar a utilizá-lo em nosso estado:

```dart
class MyHomeState extends State<MyHome> {
    @override
    Widget build(BuildContext context) {
       return Scaffold();
    }
}
```

Após realizar a modificação, podemos ver o que aplicativo ficou em branco, isso porque não pedidos para ele renderizar nada tela.

![Aplicativo renderizando em branco](https://paper-attachments.dropbox.com/s_E86486993D33CB9FD6887CD1ECB4A2B03EC26B84A784901C450B65C186D187F6_1574019531830_Simulator+Screen+Shot+-+iPhone+11+Pro+Max+-+2019-11-17+at+16.38.26.png)

Então, o primeiro passo será pedir para ele renderizar a barra do aplicativo, podemos fazer isso através do parâmetro `appBar` onde vamos utilizar um `Widget` pronto para trabalhar como barra de telas, que será o `AppBar`:

```dart
class MyHomeState extends State<MyHome> {
    @override
    Widget build(BuildContext context) {
        return Scaffold(
            appBar: AppBar()
        );
    }
}
```

![Aplicativo com barra](https://paper-attachments.dropbox.com/s_E86486993D33CB9FD6887CD1ECB4A2B03EC26B84A784901C450B65C186D187F6_1574019544753_Simulator+Screen+Shot+-+iPhone+11+Pro+Max+-+2019-11-17+at+16.38.37.png)

Agora, temos a barra de navegação, porém, faltou informarmos nosso título, podemos utilizar o parâmetro `title` do `AppBar` que deve receber um `Text`:

```dart
class MyHomeState extends State<MyHome> {
    @override
    Widget build(BuildContext context) {
        return Scaffold(
            appBar: AppBar(
                title: Text('To-Do List'),
            )
        );
    }
}
```

![Aplicativo com barra e título](https://paper-attachments.dropbox.com/s_E86486993D33CB9FD6887CD1ECB4A2B03EC26B84A784901C450B65C186D187F6_1574019555826_Simulator+Screen+Shot+-+iPhone+11+Pro+Max+-+2019-11-17+at+16.38.40.png)

Agora sim, temos nosso título e barra renderizados.

Vamos começar a criação do corpo da tela onde vamos ter o nosso formulário com um campo para digitar a nova tarefa e um botão para adicioná-la na lista.

Para criarmos o corpo da tela podemos utilizar o `body` do `Scaffold`:

```dart
class MyHomeState extends State<MyHome> {
    @override
    Widget build(BuildContext context) {
        return Scaffold(
            appBar: AppBar(
                title: Text('To-Do List'),
            ),
            body: Container(),
        );
    }
}
```

Vamos utilizar o `Widget` chamado `Container` para englobar o conteúdo da tela.

Para ele, assim como nos demais `Widget's` normalmente é passado a propriedade `child` para informar seu `Widget` filho:

```dart
class MyHomeState extends State<MyHome> {
    @override
    Widget build(BuildContext context) {
        return Scaffold(
            appBar: AppBar(
                title: Text('To-Do List'),
            ),
            body: Container(
                child: Column(),
            ),
        );
    }
}
```

Como o filho do `Container` estamos usando o `Column`, o `Column` é um `Widget` responsável por renderizar itens de forma vertical, ou seja, um embaixo do outro. A renderização vertical para a gente é importante, assim, conseguimos renderizar o formulário e em baixo do mesmo a lista de tarefas.

Diferente do `Container` onde passamos apenas um filho para a propriedade `child`, para o `Column` vamos utilizar a propriedade `children` onde podemos passar uma lista de filhos. O primeiro filho será nosso formulário.

```dart
class MyHomeState extends State<MyHome> {
    @override
    Widget build(BuildContext context) {
        return Scaffold(
            appBar: AppBar(
                title: Text('To-Do List'),
            ),
            body: Container(
                child: Column(
                    children: <Widget>[
                        Form()
                    ],
                ),
            ),
        );
    }
}
```

Ao salvar o aplicativo vai quebrar.

![Aplicativo quebrando](https://paper-attachments.dropbox.com/s_E86486993D33CB9FD6887CD1ECB4A2B03EC26B84A784901C450B65C186D187F6_1574019949463_Simulator+Screen+Shot+-+iPhone+11+Pro+Max+-+2019-11-17+at+16.45.44.png)

Isso porque não informamos a propriedade `child` do `Form`, pois, o `child` trata-se de uma propriedade obrigatória.

Vamos começar informando o filho do formulário:

```dart
class MyHomeState extends State<MyHome> {
    @override
    Widget build(BuildContext context) {
        return Scaffold(
            appBar: AppBar(
                title: Text('To-Do List'),
            ),
            body: Container(
                child: Column(
                    children: <Widget>[
                        Form(
                            child: Row(),
                        )
                    ],
                ),
            ),
        );
    }
}
```

Após realizar a modificação e salvar podemos ver que o aplicativo voltou a funcionar.

![Aplicatio funcionando novamente](https://paper-attachments.dropbox.com/s_E86486993D33CB9FD6887CD1ECB4A2B03EC26B84A784901C450B65C186D187F6_1574020023242_Simulator+Screen+Shot+-+iPhone+11+Pro+Max+-+2019-11-17+at+16.46.57.png)

Repare que estamos utilizando o `Row`, a ideia dele basicamente é similar ao `Column` uma simples diferença é na direção em que os filhos são renderizados. No `Row` os filhos são renderizados de forma horizontal, ou seja, um ao lado do outro.

Precisamos desse *layout* horizontal para deixarmos o botão ao lado do campo de digitação.

Vamos começar renderizando o nosso campo:

```dart
class MyHomeState extends State<MyHome> {
    @override
    Widget build(BuildContext context) {
        return Scaffold(
            appBar: AppBar(
                title: Text('To-Do List'),
            ),
            body: Container(
                child: Column(
                    children: <Widget>[
                        Form(
                            child: Row(
                                children: <Widget>[
                                    TextFormField()
                                ],
                            ),
                        )
                    ],
                ),
            ),
        );
    }
}
```

Após a definição do `TextFormField` nosso aplicativo novamente dá erro:

```bash
    flutter:     input: RenderRepaintBoundary#295df NEEDS-LAYOUT NEEDS-PAINT NEEDS-COMPOSITING-BITS-UPDATE
    flutter:       child: RenderPointerListener#2ce7b NEEDS-LAYOUT NEEDS-PAINT NEEDS-COMPOSITING-BITS-UPDATE
    flutter:         child: RenderPointerListener#4a7ca NEEDS-LAYOUT NEEDS-PAINT NEEDS-COMPOSITING-BITS-UPDATE
    flutter:           child: RenderSemanticsAnnotations#c9e44 NEEDS-LAYOUT NEEDS-PAINT NEEDS-COMPOSITING-BITS-UPDATE
    flutter:             child: RenderIgnorePointer#2509b NEEDS-LAYOUT NEEDS-PAINT NEEDS-COMPOSITING-BITS-UPDATE
    flutter:     helperError: RenderConstrainedBox#b58e9 NEEDS-LAYOUT NEEDS-PAINT
    flutter:     container: RenderCustomPaint#07d5b NEEDS-LAYOUT NEEDS-PAINT
    flutter: ════════════════════════════════════════════════════════════════════════════════════════════════════
```

Isso porque precisamos definir o tamanho do nosso campo e não fizemos isso em lugar nenhum, então o mesmo não sabe como renderizar na tela.

Para resolver o problema, vamos utilizar o `Expanded`:

```dart
class MyHomeState extends State<MyHome> {
    @override
    Widget build(BuildContext context) {
        return Scaffold(
            appBar: AppBar(
                title: Text('To-Do List'),
            ),
            body: Container(
                child: Column(
                    children: <Widget>[
                        Form(
                            child: Row(
                                children: <Widget>[
                                    Expanded(
                                        child: TextFormField(),
                                    )
                                ],
                            ),
                        )
                    ],
                ),
            ),
        );
    }
}
```

Com o `Expanded` pedimos para o Flutter renderizar algum `Widget` ocupando todo espaço de sobra na tela, assim, conseguimos deixar o campo com largura total, pois, todo espaço estava sobrando.


![Aplicativo renderizando o campo](https://paper-attachments.dropbox.com/s_E86486993D33CB9FD6887CD1ECB4A2B03EC26B84A784901C450B65C186D187F6_1574020645028_Simulator+Screen+Shot+-+iPhone+11+Pro+Max+-+2019-11-17+at+16.57.10.png)

Agora, vamos adicionar um botão ao lado do campo.

Sabemos que nosso `Row` pode receber mais de um filho, então vamos passar o `RaisedButton` para ele também:

```dart
class MyHomeState extends State<MyHome> {
    @override
    Widget build(BuildContext context) {
        return Scaffold(
            appBar: AppBar(
                title: Text('To-Do List'),
            ),
            body: Container(
                child: Column(
                    children: <Widget>[
                        Form(
                            child: Row(
                                children: <Widget>[
                                    Expanded(
                                        child: TextFormField(),
                                    ),
                                    RaisedButton()
                                ],
                            ),
                        )
                    ],
                ),
            ),
        );
    }
}
```

![Aplicativo com campo e botão](https://paper-attachments.dropbox.com/s_E86486993D33CB9FD6887CD1ECB4A2B03EC26B84A784901C450B65C186D187F6_1574020655260_Simulator+Screen+Shot+-+iPhone+11+Pro+Max+-+2019-11-17+at+16.57.13.png)

Temos nosso botão, mas, o mesmo não possuí texto, isso porque não definimos nenhum conteúdo para ele. Para adicionar um texto aos nossos botões podemos utilizar o `Text` e passá-lo como `child` do `RaisedButton`:

```dart
class MyHomeState extends State<MyHome> {
    @override
    Widget build(BuildContext context) {
        return Scaffold(
            appBar: AppBar(
                title: Text('To-Do List'),
            ),
            body: Container(
                child: Column(
                    children: <Widget>[
                        Form(
                            child: Row(
                                children: <Widget>[
                                    Expanded(
                                        child: TextFormField(),
                                    ),
                                    RaisedButton(
                                        child: Text('Add'),
                                    )
                                ],
                            ),
                        )
                    ],
                ),
            ),
        );
    }
}
```

![Aplicativo com botão e texto](https://paper-attachments.dropbox.com/s_E86486993D33CB9FD6887CD1ECB4A2B03EC26B84A784901C450B65C186D187F6_1574020747497_Simulator+Screen+Shot+-+iPhone+11+Pro+Max+-+2019-11-17+at+16.59.02.png)

Repare que o mesmo agora tem o texto `Add`, mas, está meio escuro, isso porque o botão está desabilitando, se tentarmos clicar nele não será possível.

Por padrão o `RaisedButton` vem desabilitado, para tornar o mesmo clicável precisamos passar uma propriedade chamada `onPressed` para ele, essa propriedade vai receber uma função que será chamado quando o mesmo receber algum clique.

```dart
class MyHomeState extends State<MyHome> {
    @override
    Widget build(BuildContext context) {
        return Scaffold(
            appBar: AppBar(
                title: Text('To-Do List'),
            ),
            body: Container(
                child: Column(
                    children: <Widget>[
                        Form(
                            child: Row(
                                children: <Widget>[
                                    Expanded(
                                        child: TextFormField(),
                                    ),
                                    RaisedButton(
                                        child: Text('Add'),
                                        onPressed: () {
                                            print('CLIQUEI...');
                                        },
                                    )
                                ],
                            ),
                        )
                    ],
                ),
            ),
        );
    }
}
```

Agora o clique do botão está habilitado e quando o mesmo for realizado estamos apenas logando uma mensagem no console do *debug*.


![Logando mensagem de clique](https://paper-attachments.dropbox.com/s_E86486993D33CB9FD6887CD1ECB4A2B03EC26B84A784901C450B65C186D187F6_1574020921182_Simulator+Screen+Shot+-+iPhone+11+Pro+Max+-+2019-11-17+at+17.01.55.png)

Agora que já temos nossos elementos na tela vamos começar a estilizá-los, pois, até então ambos estão com seus estilos padrão.

Em nosso `TextFormField` vamos adicionar as propriedades `style`, `decoration` e `keyboardType`, onde:

- `style`: Será responsável por estilizar o texto do campo.
- `decoration`: Será responsável por decorar o campo.
- `keyboardType`: Será responsável por definir o tipo do campo, assim, conseguimos otimizar o *layout* do teclado.

Vamos começar estilizando o texto, para isso vamos utilizar o `TextStyle` seguido por algumas propriedades:

```dart
style: TextStyle(
    fontSize: 32,
    color: Colors.black87,
),
```

Agora, vamos estilizar nosso campo:

```dart
decoration: InputDecoration(
    hintText: 'Type a new task here...',
    hintStyle: TextStyle(
        fontSize: 20
    )
)
```

E por fim vamos definir o tipo do nosso campo, ou seja, o que ele aceitará como preenchimento:

```dart
keyboardType: TextInputType.text,
```

Agora que estilizamos nosso campo, vamos estilizar o botão, para isso, vamos encapsular o `RaisedButton` dentro de um `Container` (logo vocês vão entender o motivo):

```dart
Container(
    child: RaisedButton(
        child: Text('Add'),
        onPressed: () {
            print('CLIQUEI...');
        },
    )
)
```

O primeiro passo será adicionar um `background` para o botão, isso pode ser feito utilizando a propriedade `color` para o `RaisedButton` e junto ao fundo vamos também mudar a cor da fonte:

```dart
Container(
    child: RaisedButton(
        child: Text('Add'),
        onPressed: () {
            print('CLIQUEI...');
        },
        textColor: Colors.white,
        color: Colors.green,
    )
)
```

Por fim, se você reparou o botão ficou encostado ao campo, vamos adicionar um espaçamento entre eles, para isso que adicionamos o `Container` como pai do botão, é nele que iremos aplicar o espaçamento:

```dart
Container(
    margin: EdgeInsets.only(left: 20),
    child: RaisedButton(
        child: Text('Add'),
        onPressed: () {
            print('CLIQUEI...');
        },
        textColor: Colors.white,
        color: Colors.green,
    )
)
```

O `Container` possuí uma propriedade chamada `margin` para definir espaçamentos externos e através do `EdgeInsets` definimos onde esse espaçamento será aplicado, no caso do nosso botão, queremos aplicar apenas à sua esquerda.

Para isso usamos o `EdgeInsets.only` onde informamos apenas `20` *pixels* à sua esquerda.

Agora para finalizar, vamos aumentar um pouco o texto do nosso botão:

```dart
child: Text('Add', style: TextStyle(fontSize: 20),),
```

Agora, nosso formulário está muito colado nas dimensões da tela, precisamos definir um espaçamento interno para o mesmo.

Isso pode ser feito utilizando o `Padding`:

```dart
class MyHomeState extends State<MyHome> {
    @override
    Widget build(BuildContext context) {
        return Scaffold(
            appBar: AppBar(
                title: Text('To-Do List'),
            ),
            body: Container(
                padding: EdgeInsets.symmetric(horizontal: 20, vertical: 10),
                child: Column(
                    children: <Widget>[
                        Form(
                            child: Row(
                                children: <Widget>[
                                    Expanded(
                                        child: TextFormField(
                                            decoration: InputDecoration(
                                                hintText: 'Type a new task here...',
                                                hintStyle: TextStyle(
                                                    fontSize: 20
                                                )
                                            ),
                                            style: TextStyle(
                                                fontSize: 32,
                                                color: Colors.black87,
                                            ),
                                            keyboardType: TextInputType.text,
                                        ),
                                    ),
                                    Container(
                                        margin: EdgeInsets.only(left: 20),
                                        child: RaisedButton(
                                            child: Text('Add'),
                                            onPressed: () {
                                                print('CLIQUEI...');
                                            },
                                            textColor: Colors.white,
                                            color: Colors.green,
                                        )
                                    )
                                ],
                            ),
                        )
                    ],
                ),
            ),
        );
    }
}
```

Assim como o `margin` o `padding` é utilizado da mesma maneira, a diferença basicamente está onde será aplicado o espaçamento.

- `margin`: Será aplicado de forma externa.
- `padding`: Será aplicado de forma interna.

## Adicionando lógica no formulário

Agora que nosso formulário está estilizado, vamos começar a lógica do mesmo, ou seja, precisamos validar o campo quando o botão for acionado e em caso de sucesso adicionar a tarefa na lista.

O primeiro passo será definir um controlador para nosso campo, isso pode ser feito através do `TextEditingController`:

```dart
final TextEditingController taskController = TextEditingController();
```

E precisamos vincular o nosso controlador com o campo:

```dart
controller: taskController,
```

Nosso `TextFormField` tem uma propriedade chamada `controller` que deve receber nosso `TextEditingController`.

Com essa alteração seremos capazes de obter o valor do campo.

Vamos modificar o `print` dentro da função `onPressed` do botão:

```dart
print(taskController.text);
```

Para fazer o teste, adicione alguma informação no campo, clique no botão e abra o *console* do *debug*, provavelmente você irá ver a mensagem do campo.

Acabamos de utilizar a função `print` para logar uma mensagem de *debug*, mas, por padrão o `print` possuí um limite de caracteres o que algumas vezes pode acabar trazendo problemas para nossos *log's*.

Sendo assim, vamos trocar para a função `debugPrint`.

```dart
debugPrint(taskController.text);
```

Ao testar o resultado será o mesmo, porém, agora podemos logar textos maiores sem nos preocupar com o limite.

Precisamos agora adicionar uma validação no formulário, ou seja, o mesmo só pode ser submetido caso esteja válido. Para o nosso exemplo a única validação que vamos fazer é verificar se o campo possuí algum texto.

Vamos adicionar uma validação em nosso campo:

```dart
validator: (value) {
    if (value.trim().isEmpty) {
        return 'Task field it\'s required';
    }
    return null;
}
```

A validação está sendo feita através da propriedade `validator`, a mesma irá receber uma função e como parâmetro teremos acesso ao valor atual do campo.

Para adicionar a validação estamos removendo os espaços em branco do campo e verificando se o campo não é vazio, assim, caso o usuário digite apenas espaços iremos conseguir validar.

Caso a função do `validator` retorne alguma mensagem, isso quer dizer que o campo está inválido, porém, caso ela retorne `null` o mesmo está válido.

Ao realizarmos o teste e clicarmos no botão sem digitar nada no campo o nosso *log* é printado, mas, porque?

A gente apenas adicionou a validação, mas, não pedimos para executá-la.

Para de fato verificarmos a validação vamos fazer através do formulário, o primeiro passo será definir uma `key` para ele.

```dart
key: _formKey,
```

Agora, precisamos criá-la:

```dart
    final GlobalKey<FormState> _formKey = GlobalKey<FormState>();
```

E por fim, dentro da função `onPressed` vamos chamar a função para validar o formulário:

```dart
onPressed: () {
    if (_formKey.currentState.validate()) {
        debugPrint(taskController.text);
    }
},
```

Ao testarmos novamente, agora caso o botão seja clicado e não exista nenhum valor em nosso campo o mesmo irá mostrar uma mensagem de erro.

### Saiba mais

Mas, afinal, o que é esse `GlobalKey` e `FormState`? O `GlobalKey` é uma chave que será única por todo aplicativo, assim conseguimos identificar os elementos de forma exclusiva, com ele conseguimos ao definir o `key` para o formulário será possível identificá-lo posteriormente.

O `FormState` é um objeto que pode ser usado para salvar, resetar e validar todo campo que é filho do nosso formulário.

Então quando fizemos `_formKey.currentState` estamos acessando o estado do nosso formulário e com o `validate` vamos realizar a validação dos seus campos.

Agora precisamos remover o `debugPrint` e adicionar a tarefa em uma lista.

Para isso vamos primeiramente criar uma lista que irá representar nossas atividades do aplicaito:

```dart
List<String> _tasks = List();
```

Repare que o nome do atributo foi `_tasks`, ou seja, o mesmo está começando com `_`, o *underline* basicamente está dizendo que o atributo é privado e só pode ser acessado pela própria classe.

Agora, vamos adicionar uma nova tarefa na lista:

```dart
if (_formKey.currentState.validate()) {
    _tasks.add(taskController.text);
}
```

E após adicionar a tarefa na lista, vamos limpar o campo:

```dart
if (_formKey.currentState.validate()) {
    _tasks.add(taskController.text);
    taskController.clear();
}
```

Agora, precisamos listar as tarefas.

## Listando as tarefas

Para trabalhar com listas, vamos utilizar o `ListView.builder` que será o responsável por criar uma lista:

```dart
ListView.builder()
```

A lista será um irmão do `Form` e ambos serão filhos do `Column`.

Nosso `builder` precisa receber duas propriedades, sendo:

- `itemBuilder`: Uma função irá receber o contexto e indice da lista e deve retornar o `Widget` à ser renderizado para cada item.
- `itemCount`: O número total de itens.

A quantidade é fácil, podemos pegar o tamanho da nossa lista através do  `length`:

```dart
itemCount: _tasks.length,
```

A renderização de cada item pode ser feita através do `ListTile`:

```dart
itemBuilder: (context, index) {
    return ListTile(
        title: Text(_tasks[index]),
    );
},
```

Ao tentarmos executar o aplicativo, um erro deve estar ocorrendo:

```bash
flutter:     _PointerListener ← Listener ← _ScrollableScope ← _ScrollSemantics-[GlobalKey#45266] ← Scrollable ←
flutter:     ⋯
flutter:   parentData: <none> (can use size)
flutter:   constraints: BoxConstraints(0.0<=w<=374.0, 0.0<=h<=Infinity)
flutter:   size: MISSING
flutter:   axisDirection: down
flutter:   crossAxisDirection: right
flutter:   offset: ScrollPositionWithSingleContext#71d43(offset: 0.0, range: null..null, viewport: null,
flutter:     ScrollableState, AlwaysScrollableScrollPhysics -> BouncingScrollPhysics, IdleScrollActivity#8576d,
flutter:     ScrollDirection.idle)
flutter:   anchor: 0.0
flutter: This RenderObject had the following descendants (showing up to depth 5):
flutter:     center child: RenderSliverPadding#734a8 NEEDS-LAYOUT NEEDS-PAINT NEEDS-COMPOSITING-BITS-UPDATE
flutter:       child: RenderSliverList#2dbce NEEDS-LAYOUT NEEDS-PAINT
flutter: ════════════════════════════════════════════════════════════════════════════════════════════════════
```

Mas, porque está dando esse erro? O problema é porque não definimos o tamanho da nossa lista, para isso, podemos dizer para o Flutter renderizá-la por todo espaço em branco na tela, sabemos que podemos fazer isso usando o `Expanded`:

```dart
Expanded(
    child: ListView.builder(
        itemBuilder: (context, index) {
            return ListTile(
                title: Text(_tasks[index]),
            );
        },
        itemCount: _tasks.length,
    ),
)
```

Agora o problema deve ter sido resolvido, portanto, vamos testar o aplicativo.

Ao informamos algum texto no campo e clicarmos no botão para adição, o campo é limpado porém nada na lista é mostrado. Isso aconteceu porque provavelmente o Flutter adicionou o item na lista depois de executar o método `build`.

Para garantir que o método será executado depois da lista ter sido modificada podemos utilizar o método `setState` que recebe uma função de *callback* como parâmetro:

```dart
if (_formKey.currentState.validate()) {
    setState(() {
        _tasks.add(taskController.text);
    });
    taskController.clear();
}
```

O método `setState` irá notificar o aplicativo que o estado interno do objeto mudou, ocasionando uma nova chamada do método `build`. Assim que o `setState` for executado o *callback* também será chamado de forma síncrona e um agendamento do `build` será realizado.

Para finalizarmos, vamos modificar os itens da lista, apenas vamos adicionar um `Card` como pai do `ListTile`:

```dart
return Card(
    child: ListTile(
        title: Text(_tasks[index]),
    ),
);
```

Isso irá tornar nossa lista de tarefas mais bonita.

E finalmente temos o aplicativo funcionando corretamente.

# Conclusão

Artigo de introdução ao Flutter, vamos entender o que é Flutter, qual a motivação para usá-lo em nosso dia a dia. Vamos criar um aplicativo de To-Do (lista de tarefas), durante o desenvolvimento vamos entender o que são os Widget's, como utilizar estado, qual a diferença entre Stateless e Stateful, validar formulários e entender algumas curiosidades da arquitetura do Flutter.

Caso prefira o conteúdo em vídeo:

<iframe height="500" src="https://www.youtube.com/embed/6BwQ3UMZLoo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Abraços até a próxima

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
