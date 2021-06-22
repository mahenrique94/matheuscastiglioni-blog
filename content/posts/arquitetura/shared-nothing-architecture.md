---
autor: "Matheus Castiglioni"
categoria: "Arquitetura"
disqus_identifier: "shared-nothing-architecture"
disqus_title: "Shared Nothing Architecture"
disqus_url: "https://blog.matheuscastiglioni.com.br/shared-nothing-architecture"
date: 2021-06-22T20:22:27-03:00
draft: false
keywords: ["desacoplamento", "escalabilidade", "hardware", "infraestrutura"]
slug: "shared-nothing-architecture"
tag: ["desacoplamento", "escalabilidade", "hardware", "infraestrutura"]
thumbnail: "https://res.cloudinary.com/mahenrique94/image/upload/v1624404490/4576_1_fxeogh.jpg"
title: "Shared Nothing Architecture"
url: "/shared-nothing-architecture"
---

Hoje em dia quando estamos entregando _software_ podem surgir varias questões, por exemplo:

- Onde o sistema vai viver? (em termos de nuvem e hospedagem)
- Como o sistema será distribuído? (em termos de acesso público)
- Qual será a infraestrutura? (em termos de tecnologia)
- Como o sistema será publicado? (em termos de pacote e _pipeline_)
- etc...

Antigamente era muito comum que nossos sistemas fossem configurados e publicados em máquinas fisicas e através de algumas configurações o mesmo fosse publicamente acessível na _internet_ através de algum endereço (comumente o tal do [DNS (_domain name system_)](https://canaltech.com.br/internet/o-que-e-dns/)).

Dessa forma sempre que havia uma nova versão do sistema à ser publicada a gente precisava parar o serviço da máquina, atualizar o pacote e depois subir o serviço novamente.

Muitas vezes nosso sistema era um grande pacote que continua toda a fonte da aplicação como um único entregável rodando tudo no mesmo processo.

O problema é que nessa única máquina em alguns momentos eram publicados e hospedados varios outros sistemas que também compartilham os recursos computacionais entre si (_hardware_).

Depois surgiram as famosas máquinas virtuais (VM's), que ajudaram no processo e necessidade de configurar várias máquinas físicas (começamos automatizar tais provisionamentos de máquinas com códigos versionados (infraestrutura como código)), mas, em uma mesma máquina física ainda podiam rodar (e muitas vezes rodavam) vários sistemas distintos (compartilhando o mesmo _hardware_).

Mas, será que atualmente não podemos ter alguma forma de isolar tais sistemas em seus próprios processos consumindo e utilizando seus próprios recursos (que também podem ser limitados)? Sim, isso é possível.

## Shared nothing architecture

A ideia dessa arquitetura é que cada sistema rode em seu próprio nó, através do seu próprio processo e que esse processo tenha seus próprios recursos computacionais (memória, disco, rede, CPU, etc...).

Podemos atingir tal objetivo utilizando tecnologias de _container_ e orquestração de _container_, tais como: Docker e Kubernetes.

Cada sistema também pode ser dividido em múltiplos nós formando um _cluster_ que distribuí a carga entre os mesmos e cada nó pode ser comunicar através de uma rede.

Alguns pontos positivos:

- Desacoplamento
- Autonomia dos sistemas
- Unidades de deploys separadas
- Separação de custos
- Escalabilidade necessária
- Distribuição de carga (_load balance_)
- Troca de infraestrutura menos complexa
- Custos menores
- Limitação de recursos por sistemas

Alguns pontos negativos:

- Alta complexidade
- _Tracing_ e observabilidade distribuída
- Compartilhamento de tecnologias (o que pode gerar um alto acoplamento): _Frameworks_, bibliotecas, _logging_, monitoramento, _service discovery_, etc...
- Coordenar processos distribuídos que atingem múltiplos nós

## Conclusão

Nesse *post* vimos como construir arquitetura que seja desacoplada e isole recursos computacionais entre contextos.

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
