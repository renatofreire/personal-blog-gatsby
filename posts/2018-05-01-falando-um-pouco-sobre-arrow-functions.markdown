---
title: "Falando um pouco sobre Arrow Functions"
date: "2018-05-01 18:00 -0300"

description: "Neste post vou falar um pouco sobre Arrow Function. Uma feature que veio junto com as atualizações do ES6, e está facilitando muito a vida dos desenvolvedores Javascript."

category: front
tags:
  - javascript
  - ES6
  - arrow functions

image: ./images/arrow-function.jpg
altImage: Arrow functions
---

Olá! Seja bem vindo(a) ao post sobre **Arrow Functions**, vou falar um pouco sobre essa _feature_ que veio com o ES6. Eu sei que esse assunto já não é mais uma “novidade”, pois esse tipo de função já vem sendo usada largamente, mas mesmo assim decidi falar sobre isso nessa minha primeira postagem com o tema _JavaScript_, pois apesar de as **Arrow Functions** ajudarem muito na produtividade, em alguns momentos seu funcionamento ainda pode gerar dúvidas.

<!-- end_excerpt -->

Primeiramente vou começar citando esse [resumo da MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions):

> Uma expressão arrow function possui uma síntaxe mais curta quando comparada com expressões de função (function expressions) e não faz o bind do `this`. Arrow functions sempre são anônimas.

Esse resumo define exatamente as principais vantagens da _Arrow Function_: sintaxe mais curta e não fazer bind do `this` (o famoso escopo léxico). Mas o que isso significa na prática? Vou falar um pouco mais sobre cada um.

## Sintaxe mais curta

{:.subtitulo}

Traduzindo para uma frase mais completa, tornar a sintaxe mais curta significa digitar menos comandos e ter o mesmo resultado de um comando originalmente maior. Resumindo: digitar menos. Tem gente que chama isso de tornar a linguagem menos verbosa, ou prefere usar o termo syntax sugar (ou até açúcar sintático).
Para podermos comparar, vou usar um exemplo simples, uma função que recebe dois números e retorna a soma deles.

Na versão clássica:
{% highlight js linenos %}
function somaClassica(a,b){
return a+b;
}
console.log(somaClassica(1,5)); //6
{% endhighlight %}

Agora a versão mais curta possível com Arrow Function:
{% highlight js linenos %}
const somaArrow = (a,b) => a+b;

console.log(somaArrow(a,b)); //6
{% endhighlight %}

Repare que eu disse “versão mais curta possível”, por que existem algumas maneira diferentes de usarmos a Arrow Function, dependendo da quantidade de parâmetros e do código que estará dentro da função.

**Funções sem parâmetros**
{% highlight js linenos %}
function oi(){
return 'Oi';
}

console.log(oi()); //'Oi'
{% endhighlight %}

<p></p>
{% highlight js linenos %}
const oiArrow = () => 'Oi';

console.log(oiArrow()); //'Oi'
{% endhighlight %}

Para funções sem parâmetros, passamos os parênteses vazios.

**Funções com apenas 1 parâmetro**
{% highlight js linenos %}
function oi(nome){
return 'Oi, '+nome;
}

console.log(oi('Renato')); //'Oi, Renato'
{% endhighlight %}

<p></p>
{% highlight js linenos %}
const oiArrow = nome => 'Oi, '+nome;

console.log(oiArrow('Renato')); //'Oi, Renato'
{% endhighlight %}

**Funções com vários parâmetros**
{% highlight js linenos %}
function oi(nome, sobrenome){
return 'Oi, '+nome+' '+sobrenome;
}

console.log(oi('Renato', 'Freire')); //'Oi, Renato Freire'
{% endhighlight %}

<p></p>
{% highlight js linenos %}
const oiArrow = (nome, sobrenome) => 'Oi, '+nome+' '+sobrenome;

console.log(oiArrow('Renato')); //'Oi, Renato Freire'
{% endhighlight %}
Quando a função recebe dois ou mais parâmetros os parênteses são obrigatórios.

**Quando a função possui apenas uma expressão:**
{% highlight js linenos %}
function quadrado(n){
return n\*n;
}

console.log(quadrado(3)); //9
{% endhighlight %}

<p></p>
{% highlight js linenos %}
const quadradoArrow = n => n*n;

console.log(quadradoArrow(3)); //9
{% endhighlight %}

Como o corpo da função é uma expressão simples, não foi necessário usar as chaves “{}” e o valor da expressão é automaticamente retornado, sem a necessidade de usar o “_return_”.

**Quando a função possui um bloco de código:**
{% highlight js linenos %}
function quadrado(n){
let q = n\*n;
return 'O quadrado de '+n+' é '+q;
}

console.log(quadrado(3)); //'O quadrado de 3 é 9'
{% endhighlight %}

<p></p>
{% highlight js linenos %}
const quadradoArrow = n => {
  let q = n*n;
	return 'O quadrado de '+n+' é '+q;
};

console.log(quadradoArrow(3)); //O quadrado de 3 é 9
{% endhighlight %}
Nesse caso, o corpo da função é um bloco de código, então o uso das chaves “{}” é obrigatório. Também não podemos esquecer de que precisamos usar o “_return_” se quisermos retornar algum valor.

**Resumindo a questão de parâmetros e corpo da função:**
Função sem parâmetros, parênteses vazios:
{% highlight js linenos %}
const arrow1 = () => 'Oi';
{% endhighlight %}

<p></p>
Função com um parâmetro, parênteses não são necessários:
{% highlight js linenos %}
const arrow2 = a => a*a; 
{% endhighlight %}

<p></p>
Função com vários parâmetros, os parênteses são obrigatórios
{% highlight js linenos %}
const arrow3 = (a,b) => a+b;
{% endhighlight %}

<p></p>
Corpo da função com um bloco de código, obrigatório o uso de chaves “{}” e de *return* se algum valor precisar ser retornado
{% highlight js linenos %}
const arrow4 = a => {
    let q = a*a;
    return 'O resultado é: '+q;
}
{% endhighlight %}

<p></p>
Corpo da função é uma única expressão, não é obrigatório o uso de chaves e o resultado da expressão é retornado automaticamente.
{% highlight js linenos %}
const arrow5 = a => a * a;
{% endhighlight %}

<p></p>
Apenas para deixar claro, mesmo que o corpo da função seja uma única expressão, se as chaves forem usadas, o resultado não é retornado automaticamente.
{% highlight js linenos %}
const arrow6 = a => {return a * a};
{% endhighlight %}

**Mais uma observação sobre as Arrow Functions:** elas são sempre anônimas, isso significa que você não pode dar nomes à uma função desse tipo. Contudo, no _Javascript_ é possível salvar uma função dentro de uma variável, e esse comportamento se aplica as _Arrow Functions_ também.

## O escopo léxico

{:.subtitulo}

Apesar do nome incomum, o conceito é relativamente simples. Bem resumidamente, o `this` da _Arrow Function_ é baseado em onde a função foi declarada.
Não vou entrar em muitos detalhes sobre essa questão, pois seria necessário explicar alguns outros conceitos, mas geralmente temos problemas com o `this` em funções usadas como _callback_ e funções assíncronas em geral.
Para corrigir esses problemas, são usados alguns artifícios, como `.bind` ou criar uma variável para salvar o `this` e passar como parâmetro.

Vou criar um exemplo bem básico, com um `setTimeout` para ilustrar:

{% highlight js linenos %}
let pessoa = {
camisa : 'vermelha',
calca : 'azul',
sapato : 'preto',

    vestuario : function(){
        console.log('Eu estou vestindo uma camisa ' + this.camisa +', uma calça ' + this.calca + ' e um sapato '+ this.sapato);
    }

};
{% endhighlight %}

Se chamarmos a função `pessoa.vestuario()` o retorno será: _Eu estou vestindo uma camisa vermelha, uma calça azul e um sapato preto_

Tudo funcionou certinho até agora. Mas se adicionarmos o `setTimeout` na função `pessoa.vestuario()`:
{% highlight js linenos %}
let pessoa = {
camisa : 'vermelha',
calca : 'azul',
sapato : 'preto',

    vestuario : function(){
        setTimeout(function(){
            console.log('Eu estou vestindo uma camisa ' + this.camisa +', uma calça ' + this.calca + ' e um sapato '+ this.sapato);
        }, 150)
    }

};
{% endhighlight %}

E novamente chamamos a função `pessoa.vestuario()`, teremos o seguinte resultado após 150 milisegundos: _Eu estou vestindo uma camisa `undefined`, uma calça `undefined` e um sapato `undefined`_
Isso acontece por que a função é executada em um escopo diferente do objeto “Pessoa”.

Mas se usarmos uma Arrow Function no setTimeout, temos a função mantendo seu escopo:
{% highlight js linenos %}
let pessoa = {
camisa : 'vermelha',
calca : 'azul',
sapato : 'preto',

    vestuario : function(){
        setTimeout( () =>
            { console.log('Eu estou vestindo uma camisa ' + this.camisa +', uma calça ' + this.calca + ' e um sapato '+ this.sapato)}
        , 150);
    }

};
{% endhighlight %}

Executando o `pessoa.vestuario()`, dessa vez temos o resultado esperado: _Eu estou vestindo uma camisa vermelha, uma calça azul e um sapato preto_

**Mas como tudo na vida, existem exceções**<br>
As _Arrow Functions_ são muito úteis e ajudam muito na hora de desenvolver, mas é importante saber como elas funcionam e entender que em determinadas situações elas não devem ser aplicadas, como por exemplo em funções que são usadas como _handlers_ de eventos (quando usamos o `addEventListener` por exemplo).

**Concluindo…**
{: .subtitulo}

Apesar de serem bem simples de compreender, no começo as _Arrow Functions_ podem confundir um pouco, principalmente na questão do escopo do `this`.<br>
Pode até parecer que a síntaxe reduzida dela não ajude tanto, mas na prática é muito útil, pois não se trata apenas de reduzir a quantidade de caracteres digitados, elas dão mais fluidez na hora de transformar o que está no pensamento em código.<br>
Depois de se acostumar esse tipo de função a leitura do código também fica bastante simplificada e até mais fácil de entender.

Então é isso pessoal. Esse é um pequeno resumo sobre Arrow Functions, vou deixar aqui alguns links que usei para aprender mais sobre elas antes de fazer esse post. Recomendo a leitura de todos eles:

[Documentação da Mozilla](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

[ES6: arrow functions em 5 minutos](http://www.raphaelfabeni.com.br/es6-arrow-functions/)

[Quando não usar Arrow Functions](https://udgwebdev.com/quando-nao-usar-arrow-functions/)

[Arrow Functions — Declaração, funcionamento, escopos e o valor de this](https://medium.com/@raphalima8/arrow-functions-declara%C3%A7%C3%A3o-funcionamento-escopos-e-o-valor-de-this-9cb6449bca31)

[E esta página do livro Exploring ES6 publicado no Exploring JS](http://exploringjs.com/es6/ch_arrow-functions.html)

Se encontrar algum erro ou tiver alguma dúvida ou quiser acrescentar algum conhecimento neste post, por favor deixe um comentário :)

**Um grande abraço e até o próximo post.**