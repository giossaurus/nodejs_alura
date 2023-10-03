// É a primeira variável que surgiu: var

var altura = 5;
var comprimento = 7;

area = altura * comprimento;
console.log(area);
var area;

//Uma boa prática é declarar a variável, no caso área não foi declarada na linha 6 mas na linha 8 podemos declarar var area

let forma = 'retângulo';
let altura = 5;
let comprimento =7;
let area;

if (forma === 'retângulo') {
    area = altura * comprimento;
} else {
    area = (altura * largura) / 2;
}

area = altura * comprimento;
console.log(area);

//Dentro do programa temos vários blocos de código definidos pelas chaves, como no caso do if(). Não é interessante termos uma variável cujo valor possa ser alterado nos blocos. Como o var não tem muitas regras, podemos acabar também reutilizando o nome dessa variável. Sendo assim, por segurança, é melhor mantermos o let.

const forma = 'quadrado';
const altura = 5;
const comprimento = 7;
let area;

if (forma === 'quadrado') {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}

console.log(area);

//A solução é substituir const por let. Portanto, este é um exemplo prático de quando se deve utilizar let e quando não se pode utilizar const.