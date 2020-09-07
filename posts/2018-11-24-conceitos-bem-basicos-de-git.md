---
title: Conceitos bem básicos de git
date: 2018-11-24 20:25 -0300

description: "Neste post vou deixar anotado alguns dos conceitos básicos que vi durante alguns estudos sobre git. Vou falar sobre commit, branch, merge e rebase."

category: dev
tags:
  - git
  - conceitos
  - referências

image: ./images/git.jpg
altImage: Imagem com o comando git commit.
---

Olá! Hoje vou deixar aqui algumas anotações que fiz enquanto estava estudando `git`. Não vou fazer uma explicação sobre o que é _git_ (talvez eu faça um _post_ sobre isso e volto aqui para deixar o _link_) e também não vou colocar nenhum exemplo de comando neste _post_. A ideia aqui é somente ter os conceitos, coisa bem básica mesmo, para primeiro entender como funciona e depois poder mostrar na prática.

<!-- end_excerpt -->

As anotações que fiz para este post foi enquanto estava estudando _git_ no site [Learn Git Branching][tutorial-git]. Recomendo a todos que estejam estudando sobre esse assunto a dar uma olhada nesse _link_, ele explica de uma maneira muito didática os conceitos e comandos necessários para entender _git_.

## Commit

O `commit` é o conceito mais básico quando estamos aprendendo sobre _git_. O _commit_ registra uma fotografia do estado do respositório (também chamada de _snapshot_). Fazendo uma analogia com um jogo de _video-game_, o _commit_ seria como um _check-point_, onde você salva todo o progresso do jogo até o momento. Cada _commit_ registra um determinado estado do repositório em um determinado momento.

Cada _commit_ registra também qual é o seu _commit_ "pai", ou seja, qual o estado do repositório antes desse _commit_ atual. Isso possibilita saber todo o histórico de alterações do repositório.

O _commit_ não gera uma cópia de todos os arquivos do repositório, pois se fosse assim, um repositório _git_ ocuparia muito espaço em disco. O que acontece é que é salvo apenas o conjunto de mudanças entre os _commits_, também chamado de "delta".

## Branch

De maneira bem simples, um `branch` é apenas uma refrência para um _commit_. A vantagem disso é que a criação de um novo _branch_ não gera sobrecarga de armazenamento no repositório.

O _branch_ é, basicamente, uma separação lógica do trabalho feito no repositório. Todos os _commits_ que forem feitos dentro de um _branch_ estarão separados do outros _branches_ (depois será necessário juntar esses _branches_, vou falar disso no próximo tópico). Por isso é necessário "avisar" o _git_ qual _branch_ que estamos trabalhando no momento.

## Merge

Como podemos ter vários _branches_ no repositório, vamos precisar juntar eles em um único _branch_. O `merge` irá se encarregar de fazer isso. Com o _merge_ é criado um novo _commit_ que terá como referência dois "pais", que são os dois últimos _commits_ dos dois _branches_ que foram fundidos.

Esse _commit_ será a junção de dois _branches_ que foram _mergeados_. É importante lembrar que estamos fazendo o _merge_ do `branch a` no `branch b`, sendo assim, o `branch b` conterá todas as alterações dos dois _branches_, enquanto o `branch a` não será alterado.

## Rebase

O `rebase` tem um resultado final semelhante ao _merge_, porém seu funcionamento é diferente. Ao invés de criar um _commit_ que junta duas _branches_, ele "copia" os _commits_ do `branch a` para dentro do `branch b`.

A vantagem desse procedimento é que o histórico de _commits_ do reposotório fica mais "limpo", sem ter um _commit_ específico só para o _merge_. A desvantagem é que o histórico não fica tão fiel ao que aconteceu exatamente no repositório, sem o registro de qual foi o ponto onde os _branches_ se fundiram. Ao final do _rebase_ vai parecer que todos os _commits_ feitos em paralelo nos dois _branches_ foram feitos em sequência em apenas um _branch_.

## Finalizando...

Bom, por enquanto é isso. São apenas algumas anotações. Mais uma vez, sugiro que você também faça o tutorial deste link do [Learn Git Branching][tutorial-git] para aprender esse conceitos de forma mais interativa.

Obrigado por ler este post e qualquer dúvida ou sugestão é só mandar aqui nos comentários, ou falar comigo pelas redes sociais.

[tutorial-git]: https://learngitbranching.js.org/
