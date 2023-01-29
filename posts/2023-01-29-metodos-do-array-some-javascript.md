---
title: "Métodos do Array: some - Javascript"

date: 2023-01-29 15:40 -0300

description: "O método `some()` é bastante útil para verificar se pelo menos um elemento do _array_ atende a uma determinada condição. Esse método retorna apenas true ou false."

category: "front"
tags:
  - javascript
  - array

image: ./images/some-javascript.jpg
altImage: Imagem com o código Array.prototype.some() em Javascript.
---

Olá! Neste post vou falar sobre o método `some()`, que é bastante útil para verificar se pelo menos um elemento do _array_ atende a uma determinada condição. Esse método é potencialmente mais performático do que fazer a mesma verificação com outros métodos.

<!-- end_excerpt -->

## Por que usar o `Array.some()`

O método `some()` serve para verificarmos se algum dos itens de um _array_ corresponde a uma determinada condição. Dando um exemplo bem simples: imagine que você tem um _array_ com diversos números e você quer saber se algum desses números é par. Não importa qual é esse número ou quantos números pares existem, a única informação que você precisa saber é se existe pelo menos um número par.

A resposta para essa pergunta é bem direta: ela pode ser apenas "sim" ou "não". Por esse motivo, o método `some()` é bastante recomendado para esse tipo de problema, já que ele permite fazer essa verificação e te retorna `true` ou `false`.

## Definição

Antes de entrar nos detalhes, vou deixar a definição do método que está na [documentação MDN][doc-mdn]:

> O método `some()` testa se ao menos um dos elementos no _array_ passa no teste implementado pela função atribuída e retorna um valor `true` ou `false`.

De acordo com essa definição, podemos perceber dois pontos importantes:

- é preciso criar uma função para realizar o teste em cada item do _array_;
- o método `some()` irá retornar somente `true` ou `false`.

## Usando o método `some()`

Para ilustrar como usar o método `some()`, vou usar o exemplo que dei no começo do _post_. Vou criar um _array_ com vários números e vou descobrir se existe algum número par nesse _array_.

Como quase tudo que envolve código, sempre existe mais de uma forma de fazer. Poderíamos chegar nesse resultado usando o [filter][post-filter] ou até mesmo um [map][post-map], mas para isso, seria necessário fazer verificações ou usar variáveis adicionais.

Para esse tipo de problema, o método `some()` possui duas vantagens:

- consegue entregar o resultado com apenas uma chamada, sem precisar de verificações extras;
- tem o potencial de ser mais performática, já que ela retorna `true` assim que encontra um valor que satisfaz a condição e não percorre todos os itens do _array_.

Vamos então ver o funcionamento desse método na prática. A primeira coisa que precisamos fazer é criar um _array_ com números aleatórios:

```javascript
const randomNumbers = [1, 3, 7, 24, 12, 11, 8]
```

Agora, vamos usar o `some()`:

```javascript
const randomNumbers = [1, 3, 7, 24, 12, 11, 8]

randomNumbers.some(/* função que irá verificar a condição */)
```

Precisamos criar uma função que irá verificar a condição que estamos buscando. Nesse nosso exemplo, queremos saber se existe algum número par. Podemos fazer isso de duas formas, a primeira é criar uma função e passar ela como parâmetro:

```javascript
const randomNumbers = [1, 3, 7, 24, 12, 11, 8]

function isEven(element) {
  return element % 2 === 0
}

randomNumbers.some(isEven)
```

A segunda forma é criar uma [arrow function][post-arrow] diretamente na chamada do método:

```javascript
const randomNumbers = [1, 3, 7, 24, 12, 11, 8]

randomNumbers.some(element => element % 2 === 0)
```

Repare que as duas formas funcionam do mesmo jeito, você pode escolher qual forma se encaixe melhor no seu código. Para esse exemplo, vou continuar usando a primeira forma.

Chamamos o método `some()`, mas não usamos o seu resultado. Vamos armazenar o seu retorno em uma variável e exibir ela através de um `console.log`:

```javascript
const randomNumbers = [1, 3, 7, 24, 12, 11, 8]

function isEven(element) {
  return element % 2 === 0
}

const hasSomeEvenNumber = randomNumbers.some(isEven)

console.log(hasSomeEvenNumber) //true
```

Indo além do exemplo inicial, podemos usar o mesmo _array_ e verificar se algum dos números é negativo:

```javascript
const randomNumbers = [1, 3, 7, 24, 12, 11, 8]

function isEven(element) {
  return element % 2 === 0
}

function isNegative(element) {
  return element < 0
}

const hasSomeEvenNumber = randomNumbers.some(isEven)
const hasSomeNegativeNumber = randomNumbers.some(isNegative)

console.log(hasSomeEvenNumber) //true
console.log(hasSomeNegativeNumber) //false
```

Agora, vamos adicionar um `console.log` dentro das funções `isEven` e `isNegative` e verificar o que é exibido:

```javascript
const randomNumbers = [1, 3, 7, 24, 12, 11, 8]

function isEven(element) {
  console.log(`Checking if ${element} is even`)
  return element % 2 === 0
}

function isNegative(element) {
  console.log(`Checking if ${element} is negative`)
  return element < 0
}

const hasSomeEvenNumber = randomNumbers.some(isEven)
const hasSomeNegativeNumber = randomNumbers.some(isNegative)

console.log(hasSomeEvenNumber) //true
console.log(hasSomeNegativeNumber) //false

/* console:
  Checking if 1 is even
  Checking if 3 is even
  Checking if 7 is even
  Checking if 24 is even
  
  Checking if 1 is negative
  Checking if 3 is negative
  Checking if 7 is negative
  Checking if 24 is negative
  Checking if 12 is negative
  Checking if 11 is negative
  Checking if 8 is negative
*/
```

É interessante verificar que a iteração termina quando algum elemento satisfaz a condição.

A função `isEven` é chamada até o número `24`, que é o primeiro número par do _array_. Depois dele, o método `some()` não passa pelos outros elementos do _array_ e retorna `true`.

A função `isNegative` é chamada para todos os elementos do _array_, já que nenhum número é negativo o método `some()` passa por todos os número e, como nenhum satisfaz a condição, ele retorna `false`.

## Desafio

Vou deixar aqui um desafio para você testar se você entendeu bem o funcionamento do método `some()`. Esse é um problema um pouco diferente do exemplo dado acima, mas a lógica para resolvê-lo é bem parecida.

Então, vamos ao problema: você tem um _array_ com vários objetos que representam vários produtos. Em cada objeto existe a propriedade `available`, que representa se o produto está disponível ou não.

Exiba a frase `Todos os produtos estão disponíveis` se todos os produtos estiverem disponíveis ou `Nem todos os produtos estão disponíveis` se houver pelo menos um produto que não esteja disponível.

```javascript
const products = [
  { id: 23, name: "Keyboard", available: true },
  { id: 55, name: "Mouse", available: true },
  { id: 23, name: "Headphone", available: false },
  { id: 23, name: "HDMI Cable", available: true },
]
```

Vou deixar a resposta "escondida" para você tentar responder primeiro. Quando quiser ver a forma como resolvi o problema (lembre-se de que sempre há mais de uma forma de resolver o mesmo problema), clique em **Resposta do desafio** abaixo.

 <details>
  <summary><strong>Resposta do desafio</strong></summary>

```javascript
const products = [
  { id: 23, name: "Keyboard", available: true },
  { id: 55, name: "Mouse", available: true },
  { id: 23, name: "Headphone", available: false },
  { id: 23, name: "HDMI Cable", available: true },
]

// Usando uma arrow function para verificar se existe algum produto indisponível
const hasSomeUnavailable = products.some(product => !product.available)

// Usando o valor retornado pelo some() para exibir o texto correto
console.log(
  hasSomeUnavailable
    ? "Nem todos os produtos estão disponíveis"
    : "Todos os produtos estão disponíveis"
)
```

</details>

## Conclusão

O método `some()` é uma opção para situações onde você precise identificar se pelo menos um elemento do _array_ atende a determinada condição. Como ele não itera sobre todos os itens caso encontre algum que satisfaça a condição, ele representa uma maneira bastante eficiente de fazer esse tipo de verificação.

[doc-mdn]: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/some
[post-filter]: /metodos-do-array-filter-javascript
[post-map]: /metodos-do-array-map-javascript
[post-arrow]: /falando-um-pouco-sobre-arrow-functions
