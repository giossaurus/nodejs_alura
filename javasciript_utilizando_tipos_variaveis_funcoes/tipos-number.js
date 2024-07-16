const notaPrimeiroBi = 8;
const notaSegundoBi = 6.3;
const notaTerceiroBi = -2;
const notaQuartoBi = '5';

const total = (notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi)/4;

console.log('A média é: ', total.toFixed(2));

const nome = 'Giovanni';
console.log('Meu nome é ' + nome);

Number("1"); // retorna o número 1 
Number("Alura"); // retorna NaN
Number(undefined); // retorna NaN
Number(null); // retorna 0

parseInt(‘4’); // retorna o número 4
parseInt(‘4.5’); // retorna o número 4

parseFloat(‘4’); // retorna o número 4
parseFloat(‘4.5’); // retorna o número 4.5
parseFloat(‘4.5abc’); // retorna o número 4.5

+’45’ // retorna o número 45
+true // retorna o número 1

console.log(typeof +’45’); // retorna ‘number’
console.log(typeof +true); // retorna ‘number’

//s funções parseInt() e parseFloat() funcionam de forma similar a Number(), porém convertem apenas strings, enquanto Number() é capaz de converter outros tipos de dados conforme os exemplos acima.

String(2); // retorna '2'
String(undefined); // retorna 'undefined'
String(true); // retorna 'true'