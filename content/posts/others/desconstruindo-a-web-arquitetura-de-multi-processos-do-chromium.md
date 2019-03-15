---
autor: "Matheus Castiglioni"
categoria: "Outros"
disqus_identifier: "desconstruindo-a-web-arquitetura-de-multi-processos-do-chromium"
disqus_title: "Desconstruindo a Web: Arquitetura De Multi Processos Do Chromium"
disqus_url: "https://blog.matheuscastiglioni.com.br/desconstruindo-a-web-arquitetura-de-multi-processos-do-chromium"
date: 2019-03-15T09:14:36-03:00
draft: false
keywords: [ "Arquitetura", "Browser", "Chromium", "Navegador", "Web" ]
slug: "desconstruindo-a-web-arquitetura-de-multi-processos-do-chromium"
tag: [ "Arquitetura", "Browser", "Chromium", "Navegador", "Web" ]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1552609194/353612-PAPQHP-44_v4nuwi.jpg"
title: "Desconstruindo a Web: Arquitetura De Multi Processos Do Chromium"
url: "/desconstruindo-a-web-arquitetura-de-multi-processos-do-chromium"
---

É quase impossível construir um motor de renderização que não falha, trava ou perfeitamente seguro. Em navegadores (*browsers*) por volta de 2006 havía poucos usuários, então, não existia uma grande preocupação com processamento, consumo de memória e acessos simultâneos.

Porém, na época, um comportamento inesperado poderia levar o navegador á baixo (não só o navegador) e algumas vezes afetar a integridade do sistema operacional, com isso, todas as abas seriam fechadas ou dariam erros.

Esse problema acontecia por conta da arquitetura ser multí tarefa, mas, como resolver o problema? Precisávamos ter navegadores rodando e independe do erro, o mesmo não poderia impactar outras janelas e abas. Resumindo, era necessário ter algo rodando em processos separados.

Em sistemas operacionais mais modernos e robustos, eles colocam as aplicações para rodarem em processos diferentes, onde existe uma parede entre eles. Dessa maneira, quando uma aplicação falhar, geralmente não vai impactar outras aplicações ou a integridade do sistema operacional.

No [Chromium](https://www.chromium.org) não poderia ser diferente, cada aba roda em um processo separado, assim, é possível proteger outras aplicações de bugs e falhas no motor de renderização. Também é restrito o acesso entre os processos de motores de renderização e o sistema operacional. Em outras palavras, isso trás o benefício de proteger o acesso a memória, pois, cada processo irá ter sua alocação de memória que não poderá ser escrita ou alterada por outros.

O processo principal que roda a interface e gerencia abas e plugins é chamado de **Browser Process** ou **Browser**. Os processos específicos das abas são chamados de **Render Processes** ou **Renderers**.

![Desenha da arquitetura do Chromium](https://res.cloudinary.com/mahenrique94/image/upload/v1552610439/arch_tpk0nj.png)

A ideia é mais ou menos essa.

## Gerenciando processo de renderização

Cada **Render Process** (Processo de Renderização) tem um objeto global chamado `RenderProcess` que gerencia a comunicação com o **browser process** (processo do navegador) pai e mantém o estado global. O navegador cria um `RenderProcessHost` para cada *render process* que gerencia o estado e a comunicação para o *renderer*. O navegador e os processos de renderização se comunicam usando o [IPC System](https://www.chromium.org/developers/design-documents/inter-process-communication).

## Gerenciando visualizações

Cada processo de renderização tem um ou mais `RenderView` objeto, que são gerenciados pelo `RenderProcess`, que corresponde ao conteúdo das abas. Cada aba possuí um ID único dentro de um processo, não do navegador. Portanto, a identificação de uma aba precisa de um `RenderProcessHost` e um ID.

No geral, cada nova janela ou aba cria um novo processo, caso o número de processos seja muito grande existe uma estratégia para anexar novas abas para processos existentes.

## Detectando falha ou comportamento inesperado

Cada conexão IPC de um navegador, observa os processos. Se esses processos são sinalisados, ou seja, se ocorreu uma falha, as abas são notificadas através desses observadores e mostram uma aba ou mensagem de erro, informando ao usuário que ocorreu uma falha. A página pode ser recarregada e caso isso aconteça, um novo processo é criado.

## Devolvendo a memória

Como os renderizadores rodam em processos separados, torna-se simples tratar as abas ocultas (minimizadas ou escondidas) como baixa prioridade. Geralmente esses processos ocultos ou minimizados tem suas memórias adicionadas em uma piscina de "memórias disponíveis".

## Plugins e extensões

Os plugins e extensões rodam de forma separada dos renderizados, nos próprios processos deles. Então, para cada plugin ou extensão, haverá também um novo processo.

## Conclusão

Nesse *post* falamos um pouco sobre como é gerenciado os processos e a memória pelo Chromium. Claro que por trás de tudo isso tem muito mais assuntos e termos técnicos, tentei simplificar ao máximo para um melhor entendimento sobre como os navegadores funcionam.

E aí, você já conhecia esse gerenciamento? Não deixe de comentar, se você gostou desse *post* e quer acompanhar a série "**Desconstruindo a Web**", não deixe de assinar a [*newsletter*](http://eepurl.com/ggP7Rv) e receber as novidades por email.

Até a próxima.
