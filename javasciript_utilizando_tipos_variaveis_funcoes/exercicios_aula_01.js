//1. Declare três variáveis diferentes (uma para cada tipo: string, número e booleano) e atribua valores a elas. Em seguida, exiba o tipo de cada variável no console.
const palavra = 'amor';
var livro = 'duna';
let textos = 'resenhas';

console.log(typeof palavra);
console.log(typeof livro);
console.log(typeof textos);

//2. Crie duas variáveis, uma contendo seu primeiro nome e outra contendo seu último nome. Em seguida, combine-as em uma terceira variável usando o operador + e em uma quarta variável usando template strings. Por fim, imprima os resultados obtidos no console.
const primeiroNome = 'Giovanni';
const ultimoNome = 'Lopes Oliveira Castro Della Déa';
const meuNome = primeiroNome + ' ' + ultimoNome;

console.log('Usando operador +:' ,meuNome);

const meuNomeCompleto = `${primeiroNome} ${ultimoNome}`;
console.log(`Usando template string: ${meuNomeCompleto}`);

//3. Declare duas variáveis, uma contendo um número e outra contendo uma string. Em seguida, combine-as em uma terceira variável usando template strings para montar uma frase e exiba o resultado no console.
const numero = 139;
const string = 'Lisan Al Gaib'

const texto = `${numero} de vezes que o ${string} bebeu o proprio mijo na armadura fremen`;
console.log(texto);

//4. Crie uma variável inicializada com um valor de qualquer tipo e, em seguida, reatribua um novo valor a essa variável. Imprima ambos os valores no console após atribuí-los.
let minhaVariavel = 13;
console.log(minhaVariavel);

minhaVariavel = 97;
console.log(minhaVariavel);

//5. Declare uma variável usando var fora de um bloco de código (por exemplo, if) e outra dentro desse bloco. Tente acessar essas variáveis dentro do bloc e fora dele utilizando console.log e analise os resultados. Faça o mesmo processo utilizando let e compare com os resultados anteriores.

//Utilizando var
var foraBloco = 'Arrakis';

if(true) {
    var dentroBloco = 'Harkonnen'
    console.log(dentroBloco);
    console.log(foraBloco);
}

console.log(foraBloco);
console.log(dentroBloco);

// Utilizando let 
let foraBlocoLet = 'Paul Atreides';

if(true) {
    let dentroBlocoLet = 'Sietch Tabr';
    console.log(dentroBlocoLet);
    //console.log(foraBlocoLet);
    // A variável let não é acessível fora do bloco
}

console.log(foraBlocoLet);
//console.log(dentroBlocoLet);
// A variável let não é acessível fora do bloco
// Ao executar este código, você notará que a variável declarada com var dentro do bloco é acessível fora do bloco, enquanto a variável declarada com let dentro do bloco não é acessível fora dele. Isso demonstra a diferença de escopo entre var e let em JavaScript. O uso de let oferece um escopo de bloco mais restrito, o que é muitas vezes desejável para evitar problemas de poluição de escopo.

//6. Declare uma variável booleana que informa se está chovendo e utilize-a em uma estrutura condicional (if) para exibir uma mensagem informando se é preciso levar um guarda-chuva ou não dependendo do valor da variável.

let estaChovendo = false;

if (estaChovendo) {
    console.log('Corre pra pegar a roupa do varal!');
} else{
    console.log('Ufa, sem cair a energia por hoje.');
}