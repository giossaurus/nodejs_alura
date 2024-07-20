const valor = 50;
const texto = valor < 50 ? 'valor insuficiente' : 'valor suficiente';

console.log(texto); // retorna 'valor suficiente'

// O operador ternário é normalmente utilizado em substituição ao if…else em que as condições têm apenas uma linha de retorno.
// O operador ternário é composto por três partes: a condição, o operador de interrogação (?) e o operador de dois pontos (:).

//Abaixo exemplo de bloco if que pode utilizar operador ternario
let matriculaAtiva = true;

function verificaMatriculaAtiva() {
 if (matriculaAtiva === true) {
   return 'matrícula ativa no sistema';
 } else {
   return 'matrícula não está ativa';
 }
}

console.log(verificaMatriculaAtiva());
// retorna 'matrícula ativa no sistema'

//Agora, o mesmo bloco if convertido para operador ternário:
let matriculaAtiva = true;

function verificaMatriculaAtiva() {
 return matriculaAtiva ? 'matrícula ativa no sistema' : 'matrícula não está ativa';
}

console.log(verificaMatriculaAtiva());
// retorna 'matrícula ativa no sistema'

//Ao invés de retornos (return) diferentes para if e else, tem apenas um retorno, que é o resultado da condicional feita pelo operador ternário.

//Podemos interpretar a linha do return em português, da seguinte forma: “A matrícula está ativa? Em caso positivo (true), retorne o texto ’matrícula ativa no sistema’. Em caso negativo (false), retorne o texto ’matrícula não está ativa’.

let idadeEstudante = 16;
let precisaDeAutorizacao;

if (idadeEstudante < 18) {
 precisaDeAutorizacao = true;
} else {
 precisaDeAutorizacao = false;
}

console.log(precisaDeAutorizacao);

//Agora, o mesmo bloco if convertido para operador ternário:

let idadeEstudante = 16;
const precisaDeAutorizacao = idadeEstudante < 18 ? true : false;
console.log(precisaDeAutorizacao); // true