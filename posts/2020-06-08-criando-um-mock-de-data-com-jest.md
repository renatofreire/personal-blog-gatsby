---
title: "Criando um mock de data com Jest"
date: 2020-06-08 12:00 -0300

description: "Neste post vou mostrar como fazer um mock de data usando Jest."

category: front
tags:
  - javascript
  - jest

image: ./images/date.now-javascript.jpg
altImage: Imagem com o código Date.now() em Javascript..
---

Olá! Neste post vou mostrar como fazer um mock usando Jest. Esse mock servirá para "congelar" a data atual, evitando que testes de funções que usem a data atual através do método `Date.now` comecem a dar erro com o passar do tempo.

Acho legal destacar que, neste post, não vou abordar temas mais teóricos sobre testes e nem sobre a utilização/configuração do [Jest][jest-doc]. Vou focar somente no mock proposto.

<!-- end_excerpt -->

## Entendendo o que é um mock

Antes de começar a falar sobre como fazer, quero falar um pouco sobre o que é um mock. Primeiramente, vou deixar essa definição que achei bem bacana na página da [Wikipedia][mock-wiki]:

> Objetos Mock, objetos simulados ou simplesmente Mock (do inglês Mock object) em desenvolvimento de software são objetos que simulam o comportamento de objetos reais de forma controlada. São normalmente criados para testar o comportamento de outros objetos. Em outras palavras, os objetos mock são objetos “falsos” que simulam o comportamento de uma classe ou objeto “real” para que possamos focar o teste na unidade a ser testada.

Ou seja, criar um mock é uma técnica usada para simular algum recurso, mas de forma que a gente consiga ter previsibilidade no comportamento. Ás vezes os mocks também são usados para facilitar o teste e evitar conexões com ambientes externos, o que pode ser lento e complexo.

Algumas situações onde um mock é bastante útil:

- simular um banco de dados, evitando a necessidade de se criar uma instância de um banco toda vez que o teste rodar.

- simular a resposta de alguma API externa, evitando requisições desnecessárias para essa API e também evitando que algum erro externo ao teste faça o mesmo falhar.

- simular algum estado específico do sistema, como por exemplo o momento atual.

## Explicando o problema

Vamos imaginar um ambiente de uma loja online. Dentro da página de um determinado pedido pendente existe uma informação que mostra há quantos dias o pedido foi feito.
Para saber essa informação precisamos de outras duas informações: qual o dia que o pedido foi realizado e que dia é hoje. Subtraindo as duas datas conseguimos obter o valor necessário.

Para facilitar nosso exemplo, vamo usar uma implementação bastante simples, a ideia é pegar o time stamp das duas datas e subtrair. O resultado será dividido pela quantidade de milisegundos que existem em um dia:

`milissegundosEmUmDia = (1000 * 60 * 60 * 24) //86.400.000`  
`(dataAtual - dataDoPedido) / milissegundosEmUmDia`

### Implementando a função

Uma implementação possível seria (para facilitar, vamos considerar que o parâmetro já chegue como timestamp):

```javascript
function pendingDays(initialDate) {
  return Math.trunc((Date.now() - initialDate) / (1000 _ 60 _ 60 \* 24));
}
```

Considerando que hoje seja dia 08 de junho de 2020, se usarmos essa função passando como parâmetro a data do dia 03 de junho de 2020, devemos receber `5` como resposta:

```javascript
const initialDate = new Date("06/03/2020")
pendingDays(initialDate.getTime()) // returns 5
```

### Testando a função

Como falei no começo do post, não vou focar na parte de configuração do Jest, vamos apenas focar no caso de teste específico dessa função:

```javascript

describe("pendingDays", () => {
  it("returns the number of days pending", () => {
    const initialDate = new Date("06/03/2020");
    const pendingDaysNumber = pendingDays(initialDate.getTime());

    expect(pendingDaysNumber).toEqual(5);
});
```

Depois de rodar todos os testes e tudo passar certinho, podemos seguir com nosso fluxo de desenvolvimento até mandar o código pra produção e considerar a tarefa concluída.

Porém no dia seguinte, esse teste começa a falhar, mesmo a implementação da função estando totalmente correta. É aqui que percebemos que nosso teste tinha um grande problema: ele testa uma resposta estática para uma função que é dinâmica. Precisamos garantir que essa função vai retornar sempre o resultado esperado.

## Alterando o comportamento do `Date.now`

Como pudemos perceber, nossa função está correta e o que precisamos alterar é a forma como escrevemos nosso teste.
Nossa função utiliza o `Date.now`, que podemos considerar que sempre irá retornar um valor diferente quando for chamado.

Para resolver isso, precisamos fazer com que o funcionamento do `Date.now` seja previsível, por isso vamos fazer um mock para ele.

A ideia é: vamos sobrescrever o método `Date.now` dentro do ambiente do Jest, para que ele retorne sempre o valor que a gente definir. Dessa forma podemos fazer com que sempre seja retornado o timestamp do dia 08 de junho de 2020.

Para fazer isso, vamos adicionar uma linha em nosso teste:

```javascript

describe("pendingDays", () => {
  it("returns the number of days pending", () => {
    global.Date.now = jest.fn(() => new Date('06/08/2020').getTime());

    const initialDate = new Date("06/03/2020");
    const pendingDaysNumber = pendingDays(initialDate.getTime());

    expect(pendingDaysNumber).toEqual(5);

})
```

### Impedindo efeitos colaterais

A forma como implementamos nosso mock resolve o problema para o teste que estava quebrando, mas como alteramos a variável `global` que é usada por todos os outros testes, isso pode fazer com que eles comecem a quebrar por causa da nossa alteração.

Para resolver isso, temos que fazer com que depois do nosso teste o `Date.now` volte ao normal. Por isso vamos adicionar um salvar o valor original do `global.Date` antes de alterá-lo e fazer com que essa variável seja restaurada antes de cada teste:

```javascript
describe("pendingDays", () => {

  const originalDate = global.Date;

  beforeEach(() => {
    global.Date = originalDate;
  });

  it("returns the number of days pending", () => {
    global.Date.now = jest.fn(() => new Date('06/08/2020').getTime());

    const initialDate = new Date("06/03/2020");
    const pendingDaysNumber = pendingDays(initialDate.getTime());

    expect(pendingDaysNumber).toEqual(5);
});
```

## Conclusão

Ás vezes nosso código depende de variáveis externas ou muito dinâmicas, o que torna muito difícil de conseguirmos escrever testes eficientes para ele. Para esse tipo de situação, geralmente um mock deve ajudar a tornar esses comportamentos previsíveis e dessa forma testarmos se nosso código responde da maneira esperada.

É importante lembrar que é necessário desfazermos nosso mock após usá-lo para garantir que ele não vai atrapalhar outros testes que não são relacionados com o problema que estávamos resolvendo inicialmente.

[jest-doc]: https://jestjs.io/
[mock-wiki]: https://pt.wikipedia.org/wiki/Objeto_Mock
