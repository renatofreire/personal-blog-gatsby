---
title: "Métodos do Array: includes - Javascript"
date: 2020-06-02 12:00 -0300

description: "Neste post vou explicar sobre o método includes do Array em Javascript."

category: front
tags:
  - javascript
  - array

image: ./images/includes-javascript.jpg
altImage: Imagem com o código Array.prototype.includes() em Javascript.
---

Olá! Neste post vou falar sobre o método `includes`, que serve para descobrirmos se o array contém ou não um determinado elemento. O uso desse método é simples, mas muito útil e pode nos ajudar bastante no dia a dia.

<!-- end_excerpt -->

## Definição

Antes de mais nada, vamos para definição do método, tirada da [documentação da MDN][doc-mdn]:

> O método `includes()` determina se um array contém um determinado elemento, retornando true ou false apropriadamente.

## Sintaxe

O método `includes` pode receber dois parâmetros: o primeiro é o `searchElement` que é o elemento que vamos procurar dentro do array. O segundo é o `fromIndex` que é usado para definir a partir de qual posição vamos começar a buscar o elemento procurado.

### `searchElement` (elemento procurado)

É o elemento que vamos procurar no array.

### `fromIndex` (posição inicial)

Parâmetro opcional. É a posição de onde vamos começar a procurar no array. Se não for passado, o valor padrão é `0`.
Esse parâmetro é útil se não quisermos buscar a partir de uma determinada posição ao invés de buscar no array inteiro.

## Retorno

Retorna `true` (verdadeiro) se o elemento buscado existir no array ou `false` (falso) se o elemento buscado não existir no array.

## Exemplos

### Procurando por um elemento

O funcionamento é relativamente simples. Para descobrir se um elemento existe no array, usamos o método `includes` passando o elemento que estamos procurando.

{% highlight js linenos %}
const numbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

numbers.includes(4); // returns true
numbers.includes(5); // returns false

const fruits = ['apple', 'pear', 'raspberries', 'blueberries', 'avocado'];
const tropicalFruit = 'avocado';
const notFruit = 'cheese';
fruits.includes(tropicalFruit); // returns true
fruits.includes(notFruit); // returns false
{% endhighlight %}

### Passando um índice para iniciar a busca

Se passarmos o segundo parâmetro, a busca irá começar a partir desse índice.

{% highlight js linenos %}
const numbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

numbers.includes(4); // returns true
numbers.includes(4, 3); // returns false

{% endhighlight %}

### Cuidado com arrays que contém objetos

Comparação entre objetos em javascript é uma tarefa complexa, e no caso do `includes` pode gerar confusão. Isso acontece porquê, por mais que dois objetos tenham as mesmas propriedades e os mesmos valores, se eles não apontarem para mesmo referencia de memória eles não são considerados iguais. E como o `includes` se baseia em uma igualdade para poder definir se o elemento existe no array, isso é algo que devemos levar em consideração.

{% highlight js linenos %}

const batman = {name: 'Bruce Wayne'};
const superman = {name: 'Clark Kent'};
const heroes = [batman, superman];

heroes.includes(superman); // returns true

const doppelganger = {name: 'Clark Kent'};
heroes.includes(doppelganger); // returns false
{% endhighlight %}

### Curiosidade

O primeiro parâmetro do método `includes` não é obrigatório, ou seja, se não passarmos o `searchElement` o nosso código não irá retornar um erro.
Se chamarmos o método sem passar nenhum parâmetro, o valor de `searchElement` é `undefined`.
Talvez não seja correto afirmar que o valor padrão do primeiro parâmeto é `undefined`, pois imagino que isso aconteça simplesmente porque o valor não é definido.
É interessante notar que se algum elemento do array for `undefined`, chamar o método `includes` sem parâmetro irá retornar `true`.

{% highlight js linenos %}

const numbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
numbers.includes(); // returns false

const arrayWithUndefined = [2, 4, undefined, 8];
arrayWithUndefined.includes(); //retruns true
{% endhighlight %}

## Conclusão

O método `includes` é um método simples, porém muito poderoso e que existe muitos casos onde ele pode facilitar nossa vida ao tentar descobrir se um elemento existe dentro de um array.
Como sempre, se estamos tratando de comparações, temos que tomar cuidado se estivermos trabalhando com objetos, mas tendo isso em mente, o método `includes` é muito útil e irá nos ajudar a economizar algumas linhas de código.

[doc-mdn]: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/contains
