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

// Abaixo está um exemplo de uso do operador lógico E (&&) para verificar se o aluno pode dirigir com base na idade e na posse da carteira de motorista:

const idade = 25;
const possuiCarteira = true;

if (idade >= 18 && possuiCarteira) {
    console.log("Pode dirigir, possui idade suficiente e carteira de motorista.");
} else {
    console.log("Não pode dirigir.");
}

// Abaixo está um exemplo de uso do operador lógico OU (||) para verificar se o candidato pode se candidatar a um emprego com base na experiência ou na posse de um diploma:
const temExperiencia = true;
const temDiploma = false;

if (temExperiencia || temDiploma) {
    console.log("Pode se candidatar ao emprego, pois possui experiência ou diploma.");
} else {
    console.log("Não pode se candidatar ao emprego.");
}

// Abaixo está um exemplo de uso do operador lógico NOT (!) para verificar se está chovendo e decidir se deve sair de casa ou não:
const chuva = false;

if (!chuva) {
    console.log("Não está chovendo. Pode sair de casa.");
} else {
    console.log("Está chovendo. Melhor ficar em casa.");
}