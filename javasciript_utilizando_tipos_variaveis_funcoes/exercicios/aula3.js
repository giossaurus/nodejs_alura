//Crie uma variável contendo uma frase. Em seguida, exiba no console o comprimento da frase e a mesma frase com letras maiúsculas.
const fraseExemplo = 'Olá, mundo!';
const comprimento = fraseExemplo.length;

console.log(comprimento);
console.log(fraseExemplo.toUpperCase());

//Declare duas variáveis, uma inicializada com valor null e outra que não recebe atribuição (resultando em undefined). Exiba os valores no console.
const valorNulo = null;
let valorSemAtribuicao;

console.log(valorNulo);
console.log(valorSemAtribuicao);

//Crie 3 variáveis de tipos diferentes, utilize template strings para combinar os diferentes tipos de dados (number, string, boolean) em uma única string e exiba o resultado no console.
const personagem = 'Daemon Targaryen';
const nivel = 12;
const estaVivo = true;

console.log(`O meu personagem se chama ${personagem}, ele está no nível ${nivel} e ${estaVivo }.`);

//Crie uma variável numérica e uma string. Faça a conversão da variável numérica para string e da string para número. Exiba os tipos de dados resultantes no console.
const numero = 10;
const texto = '100';
const numeroParaString = numero.toString;
const textoParaNumero = parseInt(texto);

console.log(typeof numeroParaString);
console.log(typeof textoParaNumero);

//Crie uma variável com uma string e utilize métodos de manipulação de strings, como toUpperCase, toLowerCase, slice ou outros, para modificar a string original. Exiba os resultados finais no console.
const tituloDoLivro = 'O Senhor dos Anéis';
const autor = 'J.R.R. Tolkien';
const volumeDoLivro = 1;

console.log(autor.toUpperCase() + ' - ' + tituloDoLivro + ' - Volume ' + volumeDoLivro);