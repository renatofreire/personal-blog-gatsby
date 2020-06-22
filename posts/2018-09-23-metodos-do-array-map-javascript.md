---
title: "Métodos do Array: map - Javascript"
date: 2018-09-23 14:12 -0300

description: "Neste post vou explicar sobre o método map Javascript."

category: front
tags:
  - javascript
  - ES6
  - array

image: ./images/map-javascript.jpg
altImage: Imagem com o código Array.prototype.map() em Javascript.
---

Olá! Este é o primeiro post de uma série onde pretendo falar sobre os métodos que podemos usar para manipulação de _arrays_ em _Javascript_. Para começar, vou explicar sobre o método `map`, um método muito útil que vem sendo cada vez mais usado, principalmente por ser inspirado em métodos de programação funcional para subtituir o clássico laço `for`.

<!-- end_excerpt -->

## Um contexto geral

O método `map` vem sendo cada vez mais usado em _Javascript_ devido ao crescimento do uso de programação funcional. Esse método é usado como alternativa ao tradicional laço `for`, pois vai iterar em cada elemento do _array_ e aplicar uma função sobre esse elemento, armazenar esse valor e retornar um array com todos os valores.

Uma grande vantagem do `map` é que você não precisa instanciar nenhuma variável de controle e nem acessar diretamente o _array_ através de um index usando essa variável. Dessa forma o código fica bem mais enxuto e legível.  
Também é importante destacar que **o `map` não modifica o array original**. Ele retorna um _array_ baseado nos elementos do _array_ original.

Parece complexo e confuso, não é mesmo? Não se preocupe, vou explicar esse método e dar alguns exemplos e você vai ver que o `map` é simples mas muito poderoso.

Obs: vou usar bastante `Arrow Functions` para facilitar os exemplos, caso você tenha alguma dúvida, você pode ver [este post][arrow-functions] para saber mais sobre esse assunto :)

## Definição de `map()`

Para começar, vou deixar aqui a definição dada na [documentação da MDN][map-mdn]:

> O método `map()` invoca a função _callback_ passada por argumento para cada elemento do _Array_ e devolve um novo _Array_ como resultado.

O _callback_ nada mais é do que uma função. Ou seja, vamos passar para o método `map` uma função que será aplicada em cada item do _Array_. No final o `map` retornará outro _Array_ com os resultados.

Para os exemplos desse post, vamos usar uma função bem simples como _callback_. Vamos pensar em uma função que receba um número e retorne o dobro desse número:

{% highlight js linenos %}
const dobro = x => x\*2; //usando arrow function

dobro(1); //2
dobro(2); //4
dobro(3); //6
{% endhighlight %}

## Fazendo da maneira clássica: `for`

Se tivermos um _array_ com números e quisermos obter o dobro de cada número do _array_ usando a função que criamos acima, poderíamos fazer algo assim:

{% highlight js linenos %}
const dobro = x => x\*2;

var numeros = [1, 2, 3];
var dobros = [];

for(i=0; i < numeros.length; i++){
dobros[i] = dobro(numeros[i]);
}

console.log(dobros) //[2, 4, 6]
{% endhighlight %}

Nesse caso, até conseguiremos atingir o resultado final, mas temos alguns problemas práticos e conceituais.

Primeiramente, temos que lidar com a variável `i`, que é o contador do laço e que usamos como index para poder acessar as posições dos _arrays_. Nosso exemplo é bem pequeno e temos algumas linhas de código, mas mesmo assim temos pontos onde podemos errar: esquecer de iniciar o contador, confundir `i++` com `i--`. O correto nesse caso seria `i < numeros.length` ou `i <= numeros.length`? E o maior problema conhecido em _Javascript_: como é mesmo que se escreve `lenght`? `lenhgt`? Aahh é `length`! (Ok, talvez nem todo mundo tenha esse problema, mas eu nunca lembro como se escreve rsrsrs).

Conceitualmente falando, temos o problema da imutabilidade. Um conceito muito forte da programação funcional que diz, de maneira beeeeem resumida, que não devemos alterar os valores das variáveis. Em nossa abodagem com o `for` somos obrigados a primeiro declarar `dobros` e depois ir inserindo os valores para cara iteração do laço. Repare também que o laço `for` não retorna nada, ele apenas manipula variáveis declaradas fora dele.

Então como podemos fazer essa mesma tarefa de maneira mais robusta e menos complexa? Vocẽ acertou pensou em usar o `map`!

## Utilizando `map`

Relembrando: o método `map` recebe uma função, que será aplicada em cada item do _array_ e no final o `map` retornará um novo array com os resultados.
Colocando isso em código fica:

{% highlight js linenos %}
const dobro = x => x \* 2;

const numeros = [1, 2 ,3];

const dobros = numeros.map(dobro);

console.log(dobros); //[2 , 4, 6]
{% endhighlight %}

Um pouco mais limpo, certo? Não precisamos lidar com variáveis de controle, não precisamos acessar nenhum _array_ usando índices e definimos o valor de `dobros` diretamente em sua inicialização.

Repare que na linha 5 não usamos os parênteses `()` na função `dobro`, pois não estamos chamando a função. Estamos passando ela como _callback_ para o `map` e ele irá chamar a função e passar cada item do _array_ como parâmetro e irá armazenar cada retorno da função dentro de um _array_, no final do processo esse _array_ será retornado.

Tentando traduzir de uma maneira mais visual, o map funciona da seguinte forma:
![imagem representando map][map-img]

Também é bastante comum no dia a dia passarmos a função que queremos direto para o método `map`, sem a necessidade de declarar essa função previamente. Seguindo essa abordagem, nosso exemplo fica assim:

{% highlight js linenos %}
const numeros = [1,2,3];
const dobros = numeros.map(x => x \* 2);

console.log(dobros); //[2, 4, 6]
{% endhighlight %}

Dessa forma, temos a desvantagem de a função não ser reaproveitável em outras partes do código, mas ganhamos um código mais enxuto.

## Resumindo

O método `map` segue os seguintes passos:

1. É feita uma iteração para cada elemento do _array_;
2. Em cada iteração, uma função (o _callback_) é executado passando o elemento como parâmetro;
3. O retorno dessa função de _callback_ é armazenado;
4. Ao final de todas as iterações, um novo _array_ é retornado com todos os valores armazenados.

Ná pratica, podemos usar o `map` onde normalmente usaríamos um laço `for`, porém mantendo um código mais limpo e menos complexo.

Espero que esse post tenha te ajudado a entender um pouco melhor sobre o método `map`. Se tiver alguma dúvida ou sugestão de melhoria, é só deixar um comentário ou falar comigo nas redes sociais ;)

[arrow-functions]: https://renatofreire.dev/falando-um-pouco-sobre-arrow-functions
[map-mdn]: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map
[map-img]: /assets/imgs/posts/map.jpg
