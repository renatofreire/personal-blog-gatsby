---
title: "Métodos do Array: reduce - Javascript"
date: 2019-10-12 12:00 -0300

description: "Neste post vou explicar sobre o método reduce do Array em Javascript."

category: front
tags:
  - javascript
  - ES6
  - array

image: ./images/reduce-javascript.jpg
altImage: Imagem com o código Array.prototype.reduce() em Javascript.
---

Olá! Neste post vou falar sobre o método `reduce` para manipulação de _arrays_ em _Javascript_. Esse método é bastante útil quando precisamos extrair um único valor baseado no valor de todos os itens do _array_.

<!-- end_excerpt -->

## Um contexto geral

O método `reduce` (junto com o [map][post-map] e o [filter][post-filter]) faz parte dos métodos de _array_ que seguem os conceitos de programação funcional, sendo muito útil para extrair um resultado a partir de um conjunto de dados. Por isso o `reduce` é muito útil e poderoso para, por exemplo, lidar com banco de dados _NoSQL_ ou tratar um retorno de _API_.

Diferentemente do `map` e do `filter` que retornam um _array_ com vários resultados, o `reduce` retorna um único resultado.

Na tabela abaixo temos um resumo com a principal diferença do funcionamento de cada método:

| método   | descrição                                                                                                          |
| -------- | ------------------------------------------------------------------------------------------------------------------ |
| `map`    | retorna um _array_ do mesmo tamanho do original, com um valor processado pela função passada para cada item        |
| `filter` | retorna um _array_ apenas com os valores do _array_ original que sejam selecionados pela função de filtro passada  |
| `reduce` | retorna retorna apenas um único valor, combiando todos os itens do _array_ original de acordo com a função passada |

## Definição de `reduce()`

Antes de mostrar exemplos, vou deixar a deifinição da [documentação da MDN][doc-mdn]. Recomendo que você visite essa documentação caso queira se aprofundar mais nos detalhes desse método.

> O método `reduce()` executa uma função reducer (provida por você) para cada membro do array, resultando num único valor de retorno.

## Sintaxe

O método `reduce` recebe dois parâmetros, o primeiro é o **callback** e o segundo é o **valor incial**.

### Callback

_Callback_ é a função que vai ser aplicada para cada item do _array_, e seu retorno será passado para a próxima iteração. No final, valor retornado pelo `reduce` será o valor retornado pelo _callback_ na última iteração.

A função de _callback_ recebe quatro argumentos: **acumulador**, **valor atual**, **índice** e **array**.

#### Acumulador:

Armazena o valor que será passado em cada iteração. Seu valor é o valor que foi retornado pela execução do _callback_ da iteração anterior.

Na primeira iteração, o _acumulador_ tem duas possibilidades de valor:

- se o _valor inicial_ tiver sido passado para o `reduce`, esse será o valor do _acumulador_;
- se o _valor inicial_ **não** tiver sido passado, o valor do _acumulador_ será o primeiro item do _array_.

#### Valor atual

É o valor do item do _array_ que está sendo iterado.

Na primeira iteração, o _valor atual_ tem duas possibilidades de valor:

- se o _valor inicial_ tiver sido passado para o `reduce`, o _valor atual_ será o primeiro item do _array_;
- se o _valor inicial_ **não** tiver sido passado, o _valor atual_ será o segundo item do _array_.

#### Índice

É o índice do item do _array_ na iteração atual. Por exemplo, `0` na primeira iteração, `1` na segunda e assim por diante.

#### Array

É o próprio _array_ em que a função `reduce` foi chamada.

### Valor inicial

Este é o valor que será usado como `acumulador` na primeira iteração. É importante lembrar que esse é um parâmetro opicional.

## Retorno

O método `reduce` irá retornar o valor que for retornado pela função de `callback` na última iteração.

## Exemplo

### Exemplo 1: sem valor incial

Nesse primeiro exemplo, nosso objetivo é retornar a somatória de todos os itens de um _array_.

{% highlight js linenos %}

const numbersToSum = [0, 1, 2, 3, 4];

const callbackFunction = (acc, cur, idx, arr) => acc + cur

const sum = numbersToSum.reduce(callbackFunction); // sum = 10

{% endhighlight %}

A função `callbackFunction` é chamada para cada item do _array_ `numbersToSum` e o retorno dela é passado para a próxima iteração.
Os parâmetros da `callbackFunction` são:

- `acc` é o _acumulador_;
- `cur` é o _valor atual_;
- `idx` é o _índice_;
- `arr` é o _array_, nesse caso o `numbersToSum`;

No final, a constante `sum` tem o valor de `10`, pois `0 + 1 + 2 + 3 + 4 = 10`.
A tabela abaixo mostra o processo a cada iteração:

| iteração | acc | cur | idx | arr           | retorno |
| -------- | --- | --- | --- | ------------- | ------- |
| 1        | 0   | 1   | 1   | `[0,1,2,3,4]` | 1       |
| 2        | 1   | 2   | 2   | `[0,1,2,3,4]` | 3       |
| 3        | 3   | 3   | 3   | `[0,1,2,3,4]` | 6       |
| 4        | 6   | 4   | 4   | `[0,1,2,3,4]` | 10      |

Repare que o `retorno` da última linha é o que é retornado pelo `reduce` ao final do processo.

### Exemplo 2: com valor incial

Nesse segundo exemplo, vamos ter o mesmo objetivo do exemplo anterior, mas dessa vez vamos passar um valor inicial para `reduce`.

{% highlight js linenos %}

const numbersToSum = [0, 1, 2, 3, 4];

const callbackFunction = (acc, cur, idx, arr) => acc + cur

const initialValue = 5;

const sum = numbersToSum.reduce(callbackFunction, initialValue); // sum = 15

{% endhighlight %}

A função `callbackFunction` é chamada para cada item do _array_ `numbersToSum` e o retorno dela é passado para a próxima iteração, porém na primeira iteração, o parâmetro `acc` tem o valor de `initialValue`, que nesse caso é `5`.

Os parâmetros da `callbackFunction` são:

- `acc` é o _acumulador_;
- `cur` é o _valor atual_;
- `idx` é o _índice_;
- `arr` é o _array_, nesse caso o `numbersToSum`;

O `initialValue` representa o _valor inicial_ que é passado para o `reduce`.

No final, a constante `sum` tem o valor de `15`, pois `5 + 0 + 1 + 2 + 3 + 4 = 15`.
A tabela abaixo mostra o processo a cada iteração:

| iteração | acc | cur | idx | arr           | retorno |
| -------- | --- | --- | --- | ------------- | ------- |
| 1        | 5   | 0   | 0   | `[0,1,2,3,4]` | 5       |
| 2        | 5   | 1   | 1   | `[0,1,2,3,4]` | 6       |
| 3        | 6   | 2   | 2   | `[0,1,2,3,4]` | 8       |
| 4        | 8   | 3   | 3   | `[0,1,2,3,4]` | 11      |
| 5        | 11  | 4   | 4   | `[0,1,2,3,4]` | 15      |

Repare que o `retorno` da última linha é o que é retornado pelo `reduce` ao final do processo.

## Conclusão

O método `reduce` segue os seguintes passos:

1. É feita uma iteração para cada elemento do _array_;
2. Em cada iteração, uma função (o _callback_) é executado tendo quatro parâmetros: acumulador, valor atual, índice e array;
3. O retorno dessa função de _callback_ é passado para a próxima iteração através do acumulador;
4. Ao final de todas as iterações, o valor do acumulador é retornado.

Lembrando que se for passado um valor inicial, na primeira iteração esse valor será usado no acumulador.

Em geral usamos o `reduce` quando queremos processar ou combinar um conjunto de dados em um _array_ e obter um resultado com um único valor no final.

Espero que esse post tenha te ajudado a entender um pouco melhor sobre o método `reduce`.
Novamente, recomendo a leitura da [documentação da MDN][doc-mdn] para se aprofundar no assunto.
Se tiver alguma dúvida ou sugestão de melhoria, é só deixar um comentário ou falar comigo nas redes sociais ;)

[post-map]: https://renatofreire.dev/metodos-do-array-map-javascript
[post-filter]: https://renatofreire.dev/metodos-do-array-filter-javascript
[doc-mdn]: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
