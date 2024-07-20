let valor1 = '5';
let valor2 = 5;

let resultado1 = valor1 + valor2;
let resultado2;

if (valor1 === valor2) {
 resultado2 = 'Os valores são iguais.';
} else {
 resultado2 = 'Os valores são diferentes.';
}

console.log('Resultado 1:', resultado1);
console.log('Resultado 2:', resultado2);

//Quando um operador de adição (+) é usado com uma string (’5’) e um número (5), ocorre a concatenação, resultando em "55" para resultado1. Como valor1 é uma string e valor2 é um número, eles são de tipos diferentes e, portanto, valor1 === valor2 é falso, fazendo resultado2 indicar "Os valores são diferentes".

const numero = 10;
const resultado1 = (numero > 5 && numero < 15);
const resultado2 = (numero === 10 || numero > 20);
const resultado3 = !(numero < 5);

console.log("Resultado 1:", resultado1);
console.log("Resultado 2:", resultado2);
console.log("Resultado 3:", resultado3);

//O resultado1 será true pois a expressão numero > 5 && numero < 15 verifica se numero é maior que 5 e menor que 15, o que é verdadeiro para numero = 10. O resultado2 será true pois a expressão numero === 10 || numero > 20 verifica se numero é igual a 10 ou maior que 20, o que é verdadeiro para numero = 10. O resultado3 será true pois a expressão !(numero < 5) nega o resultado de numero < 5. Esse resultado é false para numero = 10, assim a negação de false se torna true.