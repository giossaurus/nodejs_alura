const notaFinal = 6;
const faltas = 5;
const advertencia = 0;

if (notaFinal < 7 && faltas > 4){
    console.log('Reprovado');
} else{
    console.log('Aprovado');
}

// Abaixo está um exemplo de uso do operador lógico OU (||) para verificar se o aluno foi aprovado ou reprovado com base na nota final e no número de faltas:

if (notaFinal < 7 || faltas > 4){
    console.log('Reprovado');
} else{
    console.log('Aprovado');
}

if(faltas >= 2 && !advertencia){
    console.log('Bônus de 2 pontos na nota final');
}else{
    console.log('Sem bônus');
}