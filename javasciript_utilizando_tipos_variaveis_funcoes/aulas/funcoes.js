//Parametros ou argumentos
//Retorno
function exibeInfosEstudante (nome, nota){
    return `O estudante ${nome} obteve a nota ${nota}`; 
}

console.log(exibeInfosEstudante('Caroline', 10));
console.log(exibeInfosEstudante('Ana' , 7));

// declaração da função
function somarDoisNumeros(numA, numB) {
    return numA + numB;
   }
   
// execução (ou chamada) da função
somarDoisNumeros(2, 2);
   
// atribuindo o retorno de uma função a uma variável
const resultado = somarDoisNumeros(2, 2);
console.log(resultado);

//Os parâmetros servem como “inputs” da função, é por onde uma função recebe os valores que precisa para executar corretamente. Já o retorno é o “output” da função, ou seja, o valor que a função devolve após a execução.

//Outro exemplo:
function dividir(dividendo, divisor) {
    return dividendo / divisor;
   }
   
   const resultado = dividir(10, 2);
   console.log(`o resultado é ${resultado}`); // o resultado é 5

//Exemplo de função com mais de um parâmetro:
function dividir(dividendo, divisor) {
    if (divisor !== 0) {
      return dividendo / divisor;
    } else {
      return 'favor não dividir por zero';
    }
   }
   
   const resultado = dividir(10, 5);
   console.log(resultado); // 2
   const resultadoZero = dividir(10, 0);
   console.log(resultadoZero); // 'favor não dividir por zero'
   //É possível que uma função tenha mais de um return, pois estão em blocos diferentes e excludentes: de acordo com a nossa lógica, a função obrigatoriamente vai executar ou o if ou ou else, e cada um dos blocos {} contém seu próprio return sendo a última instrução.