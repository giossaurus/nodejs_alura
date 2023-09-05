//Tipo Strings, tudo que não for booleano nem numero, armazena caracter, pontuacao, etc
const texto1 = "Hello world";

//Para criar string usar aspas duplas, mas reconhece simples tambem
const texto2 = 'Hello world';
const senha = "senhaSuperSegura456!";

//Tudo que for colocado entre aspas vai ser considerado uma string pelo Javascript, incluindo números
const stringDeNumeros = "34567";

// O uso de aspas duplas e simples pode ser feito no caso de uma citação por exemplo onde um texto tem uma citação dentro dele, pode ser feito o contrário também
// const citacao = 'O Leo disse "Oi, pessoal"';
const citacao = "Meu nome é:";
const meuNome = "Leonardo";

//Concatenação (+)
console.log(citacao + meuNome)


//Template String ou Template Literal