---
autor: "Matheus Castiglioni"
categoria: "Arquitetura"
disqus_identifier: "caracteristicas-de-uma-arquitetura-de-software"
disqus_title: "Características de uma Arquitetura de Software"
disqus_url: "https://blog.matheuscastiglioni.com.br/caracteristicas-de-uma-arquitetura-de-software"
date: 2021-07-20T21:16:09-03:00
draft: false
keywords: ["análise", "características", "requisitos"]
slug: "caracteristicas-de-uma-arquitetura-de-software"
tag: ["análise", "características", "requisitos"]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1626826919/5133062_vwc9l9.jpg"
title: "Características de uma Arquitetura de Software"
url: "/caracteristicas-de-uma-arquitetura-de-software"
---

Quando falamos sobre desenvolvimento de _software_ (sistemas) acabamos focando muito em funcionalidades (_features_), ou seja:

- O sistema faz o que deveria fazer?
- O sistema está resolvendo os problemas do(a)s clientes?
- O sistema está atendendo as necessidades do(a)s clientes?
- etc...

O(a) cliente ser o foco é muito comum, afinal, sem cliente, sem sistema para manter.

Mas, além de funcionalidades, para que um projeto seja bem sucedido o mesmo precisa ser bem construído, atendendo algumas peculiaridades técnicas que muitas vezes são imperceptíveis para quem usa o mesmo.

Precisamos dar foco nas características da arquitetura (as famosas _-ilities_) do sistema, ou seja, para cada sistema haverá X caraterísticas (não existe certas ou erradas) e para que o mesma tenha sucesso é muito importante garantir que tais características são levadas em consideração e atendidas durante o planejamento e construção do sistema.

Abaixo uma lista (parcial) de possíveis características para dar atenção:

### Características operacionais

- **Disponibilidade**: Quanto o sistema precisará ficar disponível para uso?
- **Continuidade**: Capacidade para recuperar de disastres.
- **Performance**: Análise da frequência de funções usadas, capacidade computacional utilizada e tempos de resposta.
- **Recuperabilidade**: Requisitos de continuidade de negócios (no caso de um desastre, quão rapidamente é obrigatório o sistema estar no ar novamente?).
- **Confiabilidade**: Avaliar se o sistema precisa ser seguro à falhas.
- **Robustez**: Habilidade para lidar com erro enquanto o funcionamento perde conexão de internet ou há uma interrupção de energia ou falha de _hardware_.
- **Escalabilidade**: Habilidade para o sistema performar e operar quando o numério de usuário(a)s ou requisições aumentam.

### Características estruturais

- **Configurabilidade**: Habilidade para usuário(a)s finais mudar aspectos da configuração do sistema.
- **Extensibilidade**: Quanto importante é plugar novas funcionalidades.
- **Instalabilidade**: Facilidade de instalação em todas as plataformas necessárias.
- **Aproveitabilidade/Reuso**: Habilidade para aproveitar componentes comuns através de múltiplos produtos.
- **Localização**: Suporte para multi idiomas.
- **Manutenabilidade**: Quanto fácil é para aplicar mudanças e melhorias no sistema.
- **Portabilidade**: O sistema precisa rodar em mais de uma plataforma?
- **Atualizabilidade**: Habilidade para facilmente e rapidamente atualizar da versão anterior para a mais novas em servidores e clientes.

### Características cross-cuttting

- **Acessibilidade**: Acesso para todo(a)s o(a)s usuário(a)s, incluindo aquele(a)s que possuem algumas limitações.
- **Arquivabilidade**: Informações precisam ser arquivadas ou deletadas depois de um período?.
- **Autenticação**: Requisitos para garantir que usuário(a)s são quem ele(a)s dizem ser.
- **Autorização**: Requisitos para garantir que usuário(a)s podem acessar ou performar o que estão acessando ou performando.
- **Jurídico**: Quais são as restrições legislativas no qual o sistema esta operando?
- **Privacidade**: Habilidade para esconder transações de pessoas internas da empresa.
- **Segurança**: As informações precisam ser encriptadas no banco de dados ou durante a comunicação entre sistemas?
- **Suportabilidade**: Qual o nível técnico necessário para o suporte do sistema? Qual o nível de _logging_ e outras funcionalidades necessárias para debugar erros do sistema?
- **Usabilidade**: Níveis de treinamento necessários para usuário(a)s atingir seus objetivos com o uso do sistema.

Essas são algumas ideias (das N possíveis) para você ficar atento durante a etapa de planejamento de um novo sistema. Muitas vezes você não vai e nem deve focar em garantir e atendar todas essas caraterísticas, no caso, dado o seu sistema você precisa priorizar o que é mais importante para o sucesso do mesmo.

Mas como saber quais características sua arquitetura deve atender? Aqui vem o famoso "**depende**", para cada problema vai haver seus pontos de atenção e cuidados, nesse momento vale analisar e pensar quais fazem sentido.

Muitas vezes tais características não estarão explicitas, isso porque existem dois tipos delas: Implicitas e explicitas, ou seja, algumas você conhece e estará claro a necessidade, porém, outras dado um contexto você vai lembrar dela de forma implicita.

![Nuvem de possívevis características](https://res.cloudinary.com/mahenrique94/image/upload/v1626874402/wordcloud_hlk147.svg)

## Conclusão

Nesse *post* vimos possíveis sugestões e ideias de características arquiteturas para ficar atento durante o planejamento e construção de sistemas.

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

