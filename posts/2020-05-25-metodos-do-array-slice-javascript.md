---
title: "Métodos do Array: slice - Javascript"
date: 2020-05-25 12:00 -0300

description: "Neste post vou explicar sobre o método slice do Array em Javascript."

category: front
tags:
  - javascript
  - array

image: ./images/slice-javascript.jpg
altImage: Imagem com o código Array.prototype.slice() em Javascript.
---

Olá! Neste post vou falar sobre o método `slice`. Este é um método que é bastante útil quando precisamos copiar apenas uma parte de um array. Com o `slice` conseguimos determinar exatamente onde queremos começar e terminar a cópia. É importante lembrar que esse método retorna outro array e não altera o array original.

<!-- end_excerpt -->

## Definição

Como de costume aqui no blog, vou deixar a definição tirada da [documentação da MDN][doc-mdn]. Recomendo visitar essa documentação para ter informações mais detalhadas sobre o método `slice`.

> O método `slice()` retorna uma cópia de parte de um array a partir de um subarray criado entre as posições `início(begin)` e `fim(end)(fim não é necessário)` de um array original.  
> O Array original não é modificado.

## Sintaxe

O método `slice` recebe dois parâmetros: o primeiro é o `begin`, que como o nome sugere, é o índice onde a cópia irá começar e o segundo é o `end`, que é o indíce onde a cópia irá terminar.
É importante ressaltar que os dois parâmetros são opcionais e que se você não passar nenhum parâmetro, o array retornado será uma cópia do array original.

### `begin` (início)

Parâmetro opcional. É a posição de onde o array começará a ser copiado. A posição é baseada no índice do array, ou seja, se quisermos começar a cópia no primeiro elemento do array devemos passar como parâmetro `0`, se quisermos começar do segundo elemento devemos passar `1` e assim por diante.

Também é possível passar um valor negativo para o `begin`, nesse caso a cópia dos elementos irá começar a partir do último elemento do array. Isso significa que se quisermos copiar os dois últimos elementos do array devemos passar `-2` como parâmetro, se quisermos pegar os três últimos elementos devemos passar `-3` e assim por diante.

Se não for passado nenhum parâmetro, o valor _default_ é `0`.

### `end` (final)

Parâmetro opcional. É a posição onde a cópia do array irá terminar. Aqui é importante observar que o elemento na posição `end` não é incluído na cópia. Pode parecer um pouco confuso, mas acredito que com os exemplos abaixo fique mais claro :D
Se quisermos que a cópia termine no último elemento do array devemos passar como parâmetro o comprimento do array (`array.length`). Se quisermos que a cópia termine no penúltimo elemento devemos passar `array.length - 1`. Para a cópiar terminar no antepenúltimo elemento, devemos passar `array.length -2` e assim por diante.

O `end` também aceita receber valores negativos e nesse caso, a contagem dos elementos começa do último elemento do array.

Se não for passado nenhum parâmetro, o valor _default_ é o tamanho do array (`array.length`).

## Retorno

O valor retornado é um novo array contendo os elementos extraídos do array original de acordo com os índices passados.
Reforçando mais uma vez que **o array original não é modificado**.

## Exemplos

Até agora vimos a parte mais teórica, agora vamos para alguns exemplos de como o método `slice` funciona na prática.

### Passando `begin` e `end` com números positivos

Vamos começar com o caso de uso mais comum, que é passar dois números positivos como parâmetro.

O nosso desafio é o seguinte: a partir de um array com dez elementos, vamos gerar dois arrays, um com os cinco primeiros elementos e outro com os cinco últimos:

```javascript
const originalArray = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

const firstHalf = originalArray.slice(0, 5)
console.log(firstHalf) //[2, 4, 6, 8, 10]

const lastHalf = originalArray.slice(5, 10)
console.log(lastHalf) //[12, 14, 16, 18, 20];
```

Para gerarmos o `firstHalf` passamos os parâmetros `0` e `5`, ou seja, estamos começando nossa cópia no elemento de índice `0`(2) e indo até o elemento de índice `4`(10). Lembrando que o elemento na posição `5`(12) não é incluído na cópia.

### Omitindo o parâmetro `end`

Quando omitimos o segundo parâmetro, o método `slice` considera ele como sendo o comprimento do array.

Vamos usar o mesmo array usado no exemplo anterior:

```javascript
const originalArray = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

const lastHalf = originalArray.slice(5)
console.log(lastHalf) //[12, 14, 16, 18, 20];
```

Como não passamos o último parâmetro, o valor _default_ dele foi usado. Na prática, podemos dizer que quando `end` não é passado a cópia vai até o final do array.

### Omitindo os dois parâmetros

De forma prática, podemos dizer que se não passarmos nenhum parâmetro o método `slice` irá retornar uma cópia igual ao array original.

```javascript
const originalArray = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

const copiedArray = originalArray.slice()
console.log(copiedArray) //[2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
```

Isso acontece porquê o valor _default_ de `begin` é `0` e o valor _default_ de `end` é o comprimento do array. Nesse exemplo seria o mesmo que `originalArray.slice(0, 10)`.
Apesar de ser uma forma fácil de copiar um array, precisamos tomar cuidado, pois se o array original tiver objetos ou outros arrays em seus elementos, a cópia irá conter apenas a referências desses objetos e não uma cópia do objeto. Ainda vamos falar mais sobre isso nesse post.

### Índices negativos

Também temos a possibilidade de passar números negativos para o método `slice`, nesse caso o ponto inicial para contar as posições a serem copiadas é o último elemento do array e não mais o primeiro elemento.

```javascript
const originalArray = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

const negativeIndexes = originalArray.slice(-5, -2)
console.log(negativeIndexes) //[12, 14, 16];

const positiveIndexes = originalArray.slice(5, 8)
console.log(positiveIndexes) //[12, 14, 16];
```

### Mais um exemplo :)

Imagine agora que temos um array com os meses do ano, e queremos dividir esse array em quatro partes, ou seja, dividir o ano em trimestres:

```javascript
const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
]

const firstQuarter = months.slice(0, 3)
console.log(firstQuarter) //["Janeiro", "Fevereiro"le, "Março"]

const secondQuarter = months.slice(3, 6)
console.log(secondQuarter) //["Abril", "Maio", "Junho"]

const thirdQuarter = months.slice(6, 9)
console.log(thirdQuarter) //["Julho", "Agosto", "Setembro"]

const fourthQuarter = months.slice(9)
console.log(fourthQuarter) //["Outubro", "Novembro", "Dezembro"]
```

## Cuidado quando o array possuir objetos

Apesar de o método `slice` não modificar o array original, caso o elemento do array seja um objeto, no array retornado haverá um referência para esse objeto e não uma cópia do objeto.

Na prática isso significa que se modificarmos esse objeto no novo array retornado, essa modificação será refletida no array original. Veja no exemplo abaixo:

```javascript
const avengers = [
  { ironMan: "Tony Stark" },
  { captainAmerica: "Steve Rogers" },
  { blackWidow: "Natasha Romanoff" },
]

const cap = avengers.slice(1, 2)
cap[0]["captainamerica"] = "Sam Wilson"

console.log(avengers)
/* 
  [
    {ironMan: "Tony Stark"}, 
    {captainAmerica: "Sam Wilson"}, 
    {blackWidow: "Natasha Romanoff"}
  ]
*/
```

## Conclusão

O método `slice` é bastante útil para pegarmos uma determinada parte de um array sem modificar o array original. Também é possível usar esse método para copiar o array inteiro, mas em todos os casos devemos sempre lembrar de tomar cuidado caso o array original tenha objetos em seus elementos.

[doc-mdn]: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
