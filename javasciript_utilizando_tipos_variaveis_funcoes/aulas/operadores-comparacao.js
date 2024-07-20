const estaAprovado = true;

if (estaAprovado === true){
    console.log('Aprovado');
}


// Abaixo está um exemplo de uso do operador de comparação de igualdade (==) para verificar se o valor de uma variável é igual a 0:

if ('0' == 0){
    console.log('Passou na comparação');
} else {
    console.log('Não passou na comparação');
}

// Abaixo está um exemplo de uso do operador de comparação de igualdade estrita (===) para verificar se o valor de uma variável é igual a 0:

if ('0' === 0){
    console.log('Passou na comparação');
} else {
    console.log('Não passou na comparação');
}

// A diferença entre os operadores de comparação de igualdade (==) e de igualdade estrita (===) é que o operador de igualdade (==) faz a comparação dos valores das variáveis, enquanto o operador de igualdade estrita (===) faz a comparação dos valores e dos tipos das variáveis. Portanto, o operador de igualdade estrita (===) é mais recomendado para evitar erros de comparação de tipos de dados.