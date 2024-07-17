# Aula 1

O JavaScript é case-sensitive, ou seja, diferencia maiúsculas e minúsculas. Isso significa que tudo o que escrevemos, sejam instruções próprias da linguagem (como console.log) ou quando damos nome a uma variável, tem que ser feito em um mesmo padrão, o que inclui a questão de maiúsculas e minúsculas.

Existem várias convenções para nomes e cada linguagem de programação tem o seu. Seguem alguns deles:

- camelCase: Inicia com letra minúscula e a primeira letra de cada palavra em seguida é escrita com letra maiúscula. Por exemplo: minhaVar ou senhaDoUsuario. Esta é a convenção utilizada pelo JavaScript para variáveis e funções.

- snake_case: Os espaços são substituídos pelo caractere _ (underline), com todas as palavras em letra minúscula. Por exemplo: minha_variavel ou senha_do_usuario.

- kebab-case: Similar ao anterior, porém com os espaços substituídos por hífens. Por exemplo: minha-var ou senha-do-usuario. Esta convenção não pode ser utilizada no JavaScript para variáveis e funções.

- PascalCase: Similar ao CamelCase, porém neste caso todas as palavras começam com letra maiúscula. Por exemplo: MinhaVar ou SenhaDoCliente.

*Importante: Nunca utilize espaço nem caracteres especiais, nem inicie os nomes das variáveis com números.*

No caso de números, é possível salvar em uma variável não somente o número em si, como em *const num = 5;*, mas também o resultado de uma operação (ou mais):

```javascript
const soma = 10 + 10;

const multiplicacao = 10 * 10;

const operacao = (soma + multiplicacao) + 10;
````

# Aula 2

Variáveis do Javascript são *var, let e const* quando o JavaScript foi criado nos anos 90, só existia a *var*, a *let* e a *const* foram introduzidas na versão 2015 especificamente para resolver esses problemas.

Como o *var* pode ser declarada, usada, substituída, sem muitas regras, isso pode causar um comportamento inesperado no código, ou seja, um bug.

Não é interessante termos uma variável cujo valor possa ser alterado nos blocos. Como o *var* não tem muitas regras, podemos acabar também reutilizando o nome dessa variável. Sendo assim, por segurança, é melhor mantermos o *let*.

A *let* ainda é um pouco mais maleável, podemos fazer mais reatribuições e alteração de valores. Diferente do terceiro tipo de variável que é a *const*.

Usamos geralmente o *let* quando sabemos que o valor da variável precisará ser alterado ou reatribuído. Para todos os outros casos usamos *const*

Além dos valores *true* e *false*, que sempre são escritas com letra minuscula no JavaScript, existem outros valores que não são estritamente booleanos, mas podem se comportar como se fossem, como *truthy* ou *falsy*.

O *null* é um tipo de dado que representa vazio. Geralmente, quando inicializamos uma variável com let minhaVar e não atribuímos nenhum valor, ela é automaticamente atribuída pelo JavaScript o valor de *undefined*, ou seja, ela não foi definida, mas pode ser utilizada.

Também podemos atribuir o *null*, passando let varNull = null, ou seja, vazio. Tanto o *null* quanto o *undefined* são similares e podem ser usados alternadamente sem problema nenhum.

Com a *conversão implícita* permite que convertamos um tipo de dado em outro. Por exemplo, podemos converter um número em uma string, uma string em um número, entre outras possibilidades. Então, trabalharemos principalmente com esses dois nesta aula, que são os dois principais. No entanto, o JavaScript também nos ajuda com a conversão implícita. Para isso, ao invés de usar três iguais usaremos apenas dois. Um sinal de igual para atribuir valor a uma variável. Dois sinais de igual servem para fazer uma comparação baseada apenas no valor.

Já a *conversão explicita*, usaremos duas funções do JavaScript a *Number()*, com N maiúsculo no início e a função *String()*. Se tentarmos converter uma string que além de números também tem, por exemplo, algarismos, como retorno teremos um *Not a Number*, como tivemos antes, quando tentávamos multiplicar duas strings. Então, além de garantir o tipo, também temos que garantir que quando o tipo é número, não há nenhum caractere que não seja um ero solto no meio do valor.

Vamos fazer alguns exemplos de *conversão de números e booleanos através de String()*:

```javascript
let telefone = 12341234;

console.log("O telefone é " + String(telefone)); 
//Com isso teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings.
````

Outra opção para *transformarmos um valor em String é usar o toString()*:

```javascript
let telefone = 12341234;

console.log("O telefone é " + telefone.toString());
//É uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.

let usuarioConectado = false;

console.log(String(usuarioConectado)); 
//Teremos a conversão da *booleana para string*, nesse caso teremos uma *string “false”*.
usuarioConectado = true;

console.log(String(usuarioConectado)); 
//Agora teremos uma *string “true”*.
````

Vamos fazer alguns exemplos de *conversão de textos e booleanos através de Number()*:

```javascript
// Vamos calcular a área de um retângulo

let largura = "10";

let altura = "5";

console.log(Number(largura) * Number(altura)); // Teremos a conversão de String para números, possibilitando a realização da multiplicação
````

Podemos usar o operador de soma + para fazer a conversão de textos para números, colocando-os antes das variáveis:

```javascript
let largura = "10";

let altura = "5";

console.log( + largura * + altura); // Teremos a conversão de String para números realizado usando o + antes das variáveis

let meuNome = "leonardo";

console.log(Number(meuNome)); // Como a variável meuNome não contém apenas números ele retorna o erro NaN (Not a Number, não é número);

console.log( + meuNome); // A conversão também retornará NaN

let meuNome = "leonardo";

console.log(Number(meuNome)); // Como a variável meuNome não contém apenas números ele retorna o erro NaN (Not a Number, não é número);

console.log( + meuNome); // A conversão também retornará NaN
```
Sobre *palavras reservadas*:
A melhor prática, nesse caso, é não utilizar nenhum dos termos da lista abaixo como identificadores, seja de variáveis, funções, classes ou qualquer outro bloco que precise de um nome. As únicas exceções são *from, set e target*, que são seguras e comumente utilizadas.
- arguments
- as
- async
- await
- break
- case
- catch
- class
- const
- continue
- debugger
- default
- delete
- do
- else
- eval
- export
- extends
- false
- finally
- for
- from
- function
- get
- if
- import
- in
- instanceof
- let
- of
- new
- null
- return
- set
- static
- super
- switch
- target
- this
- throw
- true
- try
- typeof
- var
- void
- while
- with
- yield

Como as linguagens estão em constante desenvolvimento, o JavaScript também restringe o uso de mais algumas palavras que podem ser utilizadas nas próximas versões:

- enum
- implements
- interface
- package
- private
- protected
- public

*Sobre variáveis constantes:*
Pode parecer estranho quando utilizamos a palavra *variável* (ou *variable*, em inglês) mas ao mesmo tempo o JavaScript moderno tem uma opção, a chamada *const*, que justamente não pode ser variável — não podemos alterar o valor dela. Ou seja, a declaração *const numero = 1*; não pode receber nenhum outro valor, e aparentemente esse é um comportamento esperado, e também uma boa prática. 

# Aula 3

*Coerção de Tipos em JavaScript*
A coerção de tipos em JavaScript refere-se à conversão automática e implícita de um tipo de dado para outro durante operações. Isso pode acontecer em operações matemáticas, comparações ou concatenações de strings. Exemplo de Coerção de Tipos:

```javascript
let valorString = '10';
let valorNumero = 5;

let resultado = valorString + valorNumero;
console.log(resultado);
```

Saída: '105' (o número 5 foi convertido para string e concatenado com a string ‘10’)

Neste exemplo, a operação de adição entre uma string e um número resultou em uma concatenação de strings, pois o JavaScript coage (converte) o número para uma string para realizar a operação.

*Conversão de Tipos em JavaScript*
A conversão de tipos é a transformação explícita de um tipo de dado em outro. Isso pode ser feito de várias maneiras, como utilizando funções ou operadores específicos para converter um tipo em outro.

Exemplo de Conversão de Tipos:

```javascript
let valorString = '20';
let valorNumero = parseInt(valorString);

console.log(valorNumero); 
````

Saída: 20 (valor convertido para número usando parseInt)

Neste exemplo, utilizamos a função *parseInt()* para converter a string '20' em um número inteiro.

Além do *parseInt()*, existem outras funções como *parseFloat()* para converter strings em números de ponto flutuante, Number() para converter valores em números, String() para converter valores em strings, entre outros métodos e operadores que permitem a conversão explícita de tipos em JavaScript.

*Exemplo de uso do Tipo Symbol:*
```javascript
// Criando um símbolo
const meuSimbolo = Symbol();

// Símbolos podem receber uma descrição (opcional)
const simboloComDescricao = Symbol('descricao_do_simbolo');

// Símbolos são únicos
const outroSimbolo = Symbol();
console.log(meuSimbolo === outroSimbolo); // Saída: false

// Símbolos podem ser usados como chaves de propriedades de objetos
const obj = {
  [meuSimbolo]: 'valor_do_simbolo'
};

// Acessando a propriedade usando o símbolo como chave
console.log(obj[meuSimbolo]); // Saída: 'valor_do_simbolo'
````

O tipo Symbol é um dos tipos primitivos em JavaScript, introduzido no ES6 (ECMAScript 2015), e representa um identificador único e imutável. Símbolos são frequentemente utilizados para criar propriedades de objeto que são únicas e não interferem com outras propriedades existentes.

*Exemplo de tipagem dinâmica em JavaScript*
```javascript
let exemplo = 10; // exemplo é do tipo número (Number)
console.log(exemplo); // Saída: 10

exemplo = 'Olá, mundo!'; // agora exemplo é uma string (String)
console.log(exemplo); // Saída: Olá, mundo!

exemplo = true; // exemplo agora é um booleano (Boolean)
console.log(exemplo); // Saída: true
````

*Conversão para números*
Number()
Esta função converte qualquer outro tipo de dado em um tipo Number. Caso o valor não possa ser convertido, retornará NaN.
```javascript
Number("1"); // retorna o número 1 
Number("Alura"); // retorna NaN
Number(undefined); // retorna NaN
Number(null); // retorna 0
````
Number.parseInt() e Number.parseFloat(). Ambos funcionam de forma parecida, porém, 'parseIntvai tentar converter o valor em um número inteiro eparseFloat`, em um número de ponto flutuante.

```javascript
parseInt(‘4’); // retorna o número 4
parseInt(‘4.5’); // retorna o número 4

parseFloat(‘4’); // retorna o número 4
parseFloat(‘4.5’); // retorna o número 4.5
parseFloat(‘4.5abc’); // retorna o número 4.5
```

Uma outra forma de fazer a coerção de tipos (quando o JavaScript tenta “forçar” de forma implícita a conversão de um valor de um tipo para outro) é utilizando o operador unário +. Por exemplo:

```javascript
+’45’ // retorna o número 45
+true // retorna o número 1

console.log(typeof +’45’); // retorna ‘number’
console.log(typeof +true); // retorna ‘number’
```

As funções parseInt() e parseFloat() funcionam de forma similar a Number(), porém convertem apenas strings, enquanto Number() é capaz de converter outros tipos de dados conforme os exemplos acima.

*Conversão para strings*
Assim como Number(), o JavaScript também disponibiliza a função global String() quando é necessário converter outros tipos de dado em formato de texto.

```javascript
String(2); // retorna '2'
String(undefined); // retorna 'undefined'
String(true); // retorna 'true'
```

É possível utilizar diversos métodos do JavaScript para modificar strings. Confira abaixo alguns dos mais comuns:

- includes()

Determina se um conjunto de caracteres pode ser encontrado dentro de uma string, retornando true ou false:

```javascript
'estudando JavaScript'.includes('Java'); // retorna true
```

É sempre possível passar o valor a ser convertido a partir de uma variável:

```javascript
const texto = 'estudando JavaScript';
texto.includes('Java'); // retorna true
```

- toLowerCase()

Converte todos os caracteres da string para letras minúsculas.

```javascript
'POR FAVOR, NÃO GRITE'.toLowerCase(); // retorna 'por favor, não grite'

const texto = 'POR FAVOR, NÃO GRITE';
texto.toLowerCase(); // retorna 'por favor, não grite'
```

Assim como no exemplo anterior, a string que será convertida pode estar em uma variável. Da mesma forma que existe um método para transformar textos em minúsculas, também é possível usar texto.toUpperCase() para converter em maiúsculas.

# Aula 4


















