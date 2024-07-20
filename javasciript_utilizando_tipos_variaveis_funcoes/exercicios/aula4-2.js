//Crie variáveis que armazenem o valor do saldo, de depósito e de um saque de uma conta bancária, depois realize operações de adição e subtração entre eles utilizando uma variável chamada operacao, considerando a função de cada variável criada anteriormente. Exiba os resultados finais no console. 
let valorSaldo = 30;
let valorDeposito = 20;
let valorSaque = 10;

let operacao;

operacao = valorSaldo + valorDeposito;
console.log("O saldo após o depósito é:", operacao);

operacao = operacao - valorSaque;
console.log("O saldo após o saque é:", operacao);

//Crie uma variável numérica com um valor. Utilize um operador ternário para verificar se esse valor é par ou ímpar. Exiba o resultado no console.
const numero = 136;

function ehPar(numero) {
    return numero % 2 === 0;
}

const resultado = ehPar(numero) ? "O número é par" : "O número é ímpar";

console.log(resultado);

//Considere uma situação em que você está verificando se um usuário está logado e tem permissão de administrador para acessar determinada funcionalidade. Utilize variáveis booleanas para simular essas condições e use o operador AND para verificar se ambas são verdadeiras.
const usuarioLogado = true;
const permissaoAdmin = true;

const resultadoUsuario = usuarioLogado && permissaoAdmin ? "Pode acessar" : "Não pode acessar";

console.log(resultadoUsuario);

//Declare duas variáveis booleanas e use o operador OR para verificar se pelo menos uma delas é verdadeira. Exiba o resultado no console.
const possuiVPN = true;
const possuiAntivirus = false;

const autorizacaoDoBanco = possuiVPN || possuiAntivirus ? "Pode acessar o site do banco" : "Não pode acessar, reforce sua segurança online";

console.log(autorizacaoDoBanco);

//Imagine um sistema que determina se um usuário tem idade suficiente para comprar o ingresso para um show. Declare duas variáveis que determinem a idade mínima e qual a idade do usuário e utilize estruturas condicionais (if, else) para determinar se o usuário pode realizar a compra.
const idadeDoUsuario = 5;
const idadeParaIngresso = 16;

const compraDoIngresso = idadeDoUsuario >= idadeParaIngresso ? "Pode comprar o ingresso, bom show" : "Não pode comprar o ingresso, volte para casa";

console.log(compraDoIngresso);

