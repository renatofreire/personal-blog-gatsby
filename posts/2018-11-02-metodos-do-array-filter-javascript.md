---
title: "Métodos do Array: Filter - Javascript"
date: 2018-11-02 10:35 -0300

description: "Neste post vou explicar sobre o método filter em Javascript."

category: front
tags:
  - javascript
  - ES6
  - array

image: ./images/filter-javascript.jpg
altImage: Imagem com o código Array.prototype.filter() em Javascript.
---

Olá! No post de hoje vou continuar falando sobre os métodos de manipulação de _arrays_ em _Javascript_. Desta vez vou falar sobre o método `filter`, que pode ser bastante usado no dia a dia quando precisamos (como o próprio nome sugere) filtrar itens em um _array_.

<!-- end_excerpt -->

## Um contexto geral

O método `filter` é um dos métodos de manipulação de _arrays_ que segue o conceito da programação funcional. Seria possível alcançar o mesmo resultado obtido pelo `filter` usando um laço `for`, mas como citei em meu [post anterior][metodo-map], um laço desse tipo adiciona uma complexidade maior no código, como variáveis de controles e acesso ao _array_ através de index. Neste post vou mostar as duas abordagens para podermos compará-las.

Não podemos esquecer de que **o método `filter` não altera o _array_ original**, ele gera um _array_ novo, de acordo com os
itens do _array_ original e a função passada como _callback_.

Lembrando que nos exemplos vou usar _Arrow Functions_, se você tiver alguma dúvida nesse assunto, dê uma olhada [neste post sobre _Arrow Functions_][arrow-functions].

## Definição de `filter()`

Como de costume, vou deixar aqui a definição da [documentação da MDN][filter-mdn]:

> O método `filter()` cria um novo _array_ com todos os elementos que passaram no teste implementado pela função fornecida.

E o que isso significa? Basicamente o que vai acontecer é o seguinte: vamos passar por cada item do _array_ e vamos aplicar uma função nele (essa função é chamada de _callback_). Essa função deverá retornar `true` ou `false`, se o retorno for `true` este item estará no novo _array_ gerado. Se for _false_ o item não estará no novo _array_.

Bom, teoria é importante, mas geralmente fica mais fácil de entender vendo o código. Então vamos lá :D

De maneira bem resumida, o _callback_ é uma função. E essa função será executada para cada item do _array_. Vamos usar como exemplo uma função que retorna `true` se um número é par e `false` caso não seja par:

```javascript
const par = x => x % 2 === 0

par(0) // true
par(1) // false
par(2) // true
par(3) // false
```

Vamos usar essa função nos exemplos a seguir.

## Começando usando o `for`

Vamos realizar a missão de pegar um _array_ com vários números e selecionar somente os números pares, começando usando o `for()`:

```javascript
const par = x => x % 2 === 0

const numeros = [1, 2, 3, 4, 20, 22, 38, 41]

let pares = []

for (i = 0; i < numeros.length; i++) {
  if (par(numeros[i])) {
    pares.push(numeros[i])
  }
}
console.log(pares)
//Array(5)[ 2, 4, 20, 22, 38 ]
```

No final a gente conseguiu atingir nosso objetivo: obtivemos um _array_ somente com os número pares. Porém o `for` tem alguns pontos negativos, como a complexidade do código. Temos que instanciar o _array_ `pares` antes de inciar o laço, além disso temos que iniciar uma variável de controle `i` e acessar o _array_ `numeros` através do index. Também temos de fazer um `if` para aí sim fazer um `.push()` no _array_ `pares`.

Agora vamos usar uma abordagem diferente para resolver o mesmo problema.

## Usando `filter`

Nosso objetivo será o mesmo, vamos obter somente os números pares de um array com números:

```javascript
const par = x => x % 2 === 0

const numeros = [1, 2, 3, 4, 20, 22, 38, 41]

const pares = numeros.filter(par)

console.log(pares)
//Array(5)[ 2, 4, 20, 22, 38 ]
```

Vamos entender o que aconteceu. O método `filter` faz uma iteração para cada item do _array_ (nesse caso `numeros`). Cada item será passada como parâmetro para a função que foi passada como _callback_ para o filter (nesse caso `par()`). Se a função retornar `true` o item será retornado no novo _array_ gerado (nesse caso `pares`).

Dessa forma conseguimos obter o mesmo resultado com um código mais simples.
Podemos deixar esse código um pouco mais enxuto se, ao invés de criarmos a função `par` passarmos ela diretamente para o `filter`:

```javascript
const numeros = [1, 2, 3, 4, 20, 22, 38, 41]

const pares = numeros.filter(x => x % 2 === 0)

console.log(pares)
//Array(5)[ 2, 4, 20, 22, 38 ]
```

Se não precisarmos reutilizar a função `par` em outras partes do código, essa abordagem é bastante útil.

## Algumas considerações

O método `filter` com certeza é muito útil e prático para o uso no dia a dia, porém tem alguns pontos que precisam ser considerados. Por exemplo se quisessemos obter dois _array_, um com números pares e outro com os números ímpares, teríamos que fazer o `filter` duas vezes, com duas funções diferentes. Já usando o `for` poderíamos fazer em um único laço.

Usando `for`:

```javascript
const numeros = [1, 2, 3, 4, 20, 22, 38, 41]

let pares = []
let impares = []

for (i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    pares.push(numeros[i])
  } else {
    impares.push(numeros[i])
  }
}

console.log(pares)
//Array(5) [ 2, 4, 20, 22, 38 ]

console.log(impares)
//Array(3) [ 1, 3, 41 ]
```

Com `filter`:

```javascript
const numeros = [1, 2, 3, 4, 20, 22, 38, 41]

const pares = numeros.filter(x => x % 2 === 0)

const impares = numeros.filter(x => x % 2 !== 0)

console.log(pares)
//Array(5) [ 2, 4, 20, 22, 38 ]

console.log(impares)
//Array(3) [ 1, 3, 41 ]
```

Nesses casos precisamos fazer uma escolha entre um código mais "limpo" e um código mais performático. Não existe uma resposta certa. As duas abordagens alcançam o mesmo resultado e cada uma possui suas vantagens e desvantagens.

## Mais alguns exemplos

Como todos nossos exemplos até agora foram bastante simples, vou deixar aqui mais alguns exemplos em situações diferentes. Nesses exemplos vou mostrar apenas a aplicação do `filter`, sem levar em consideração a implementação com o `for`.

### Filtrando um _array_ de objetos

Vamos supor que temos um _array_ com vários objetos que representam pessoas, com seus nomes e idade. Vamos obter um _array_ com as pessoas que ainda não estejam na maioridade (com menos de 18 anos) e outro _array_ com as pessoas idosas (com 60 anos ou mais).

```javascript
const pessoas = [
  {
    nome: "João",
    idade: 50,
  },
  {
    nome: "Andrea",
    idade: 10,
  },
  {
    nome: "Marcos",
    idade: 70,
  },
  {
    nome: "Geovana",
    idade: 65,
  },
  {
    nome: "Everton",
    idade: 36,
  },
  {
    nome: "Roberta",
    idade: 47,
  },
  {
    nome: "André",
    idade: 9,
  },
  {
    nome: "Raquel",
    idade: 83,
  },
  {
    nome: "Valdir",
    idade: 29,
  },
  {
    nome: "Helena",
    idade: 30,
  },
]

const menosDe18Anos = pessoas.filter(pessoa => pessoa.idade < 18)
const maisDe60Anos = pessoas.filter(pessoa => pessoa.idade >= 60)

console.log(menosDe18Anos)
/*
[
{ nome: 'Andrea', idade: 10 },
{ nome: 'André', idade: 9 }
]
*/
console.log(maisDe60Anos)
/*
[
{ nome: 'Marcos', idade: 70 },
{ nome: 'Geovana', idade: 65 },
{ nome: 'Raquel', idade: 83 },
]
*/
```

### Filtrando _strings_

Usando o mesmo _array_ `pessoas` do exemplo anterior, vamos filtrar as pessoas que tem a letra "r" no nome (em qualquer parte, não apenas no começo). Para isso vamos usar os métodos `toLowerCase()` (pois "R" é difente de "r") e `includes()` da classe _String_. Se tiver dúvidas, você pode conferir a documentação do [toLowerCase][lowercase-mdn] e do [includes][includes-mdn].

```javascript
//o mesmo array pessoas usado no exemplo anterior

const pessoasComRNoNome = pessoas.filter(pessoa =>
  pessoa.nome.toLowerCase().includes("r")
)

console.log(pessoasComRNoNome)
/*
[
{ nome: "Andrea", idade: 10 },
{ nome: "Marcos", idade: 70 },
{ nome: "Everton", idade: 36 },
{ nome: "Roberta", idade: 47 },
{ nome: "André", idade: 9 },
{ nome: "Raquel", idade: 83 },
{ nome: "Valdir", idade: 29 }
]
*/
```

### Filtrando com base em outro _array_

Para esse exemplo vamos considerar dois _arrays_. Um deles terá a lista com as capitais dos estados brasileiros. O segundo _array_, será uma lista com as 30 cidades mais populosas do Brasil. Nosso objetivo aqui é descobrir quais são as capitais que estão entre as 30 cidades mais populosas do país.

```javascript
const capitais = [
  "Rio Branco",
  "Maceió",
  "Macapá",
  "Manaus",
  "Salvador",
  "Fortaleza",
  "Brasília",
  "Vitória",
  "Goiânia",
  "São Luís",
  "Cuiabá",
  "Campo Grande",
  "Belo Horizonte",
  "Belém",
  "João Pessoa",
  "Curitiba",
  "Recife",
  "Teresina",
  "Rio de Janeiro",
  "Natal",
  "Porto Alegre",
  "Porto Velho",
  "Boa Vista",
  "Florianópolis",
  "São Paulo",
  "Aracaju",
  "Palmas",
]

const cidadesMaisPopulosas = [
  "São Paulo",
  "Rio de Janeiro",
  "Salvador",
  "Brasília",
  "Fortaleza",
  "Belo Horizonte",
  "Manaus",
  "Curitiba",
  "Recife",
  "Porto Alegre",
  "Belém",
  "Goiânia",
  "Guarulhos",
  "Campinas",
  "São Luís",
  "São Gonçalo",
  "Maceió",
  "Duque de Caxias",
  "Natal",
  "Campo Grande",
  "Teresina",
  "São Bernardo do Campo",
  "Nova Iguaçu",
  "João Pessoa",
  "Santo André",
  "Osasco",
  "São José dos Campos",
  "Jaboatão dos Guararapes",
  "Ribeirão Preto",
  "Uberlândia",
]

const capitiaisMaisPopulosas = capitais.filter(capital =>
  cidadesMaisPopulosas.includes(capital)
)

console.log(capitiaisMaisPopulosas)
/*
Array(18) [
"Maceió",
"Manaus",
"Salvador",
"Fortaleza",
"Brasília",
"Goiânia",
"São Luís",
"Campo Grande",
"Belo Horizonte",
"Belém",
"João Pessoa",
"Curitiba",
"Recife",
"Teresina",
"Rio de Janeiro",
"Natal",
"Porto Alegre",
"São Paulo"
]
*/
```

## Resumindo

O método `filter` segue os seguintes passos:

1. É feita uma iteração para cada item do _array_;
2. Em cada iteração, uma função (o _callback_) é executado passando o item da iteração como parâmetro;
3. O item da iteração é armazenado somente se a função de _callback_ retornar `true`;
4. Ao final de todas as iterações, um novo _array_ é retornado com os elementos armazenados no passo 3.

Basicamente, usamos o `filter` para obtermos apenas os itens de um _array_ que satisfaçam uma condição que é determinada pela função de _callback_.

Espero que esse post tenha te ajudado a entender um pouco melhor sobre o método `filter`. Se tiver alguma dúvida ou sugestão de melhoria, é só deixar um comentário ou falar comigo nas redes sociais ;)

[metodo-map]: https://renatofreire.dev/metodos-do-array-map-javascript
[arrow-functions]: https://renatofreire.dev/falando-um-pouco-sobre-arrow-functions
[filter-mdn]: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filtro
[lowercase-mdn]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
[includes-mdn]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
