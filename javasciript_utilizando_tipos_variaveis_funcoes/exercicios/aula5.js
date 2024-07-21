//Crie uma função que receba o nome de uma pessoa como argumento e retorne uma saudação personalizada. Em seguida, chame a função e exiba a saudação no console.
function saudacaoPersonalizada (nome){
    return `Olá, ${nome}! Como você está?`;
}

console.log(saudacaoPersonalizada('Giovanni'));

//Crie uma função que receba a idade de uma pessoa e retorne se ela é maior de idade (idade >= 18). Imprima o resultado no console.
function idadeDaPessoa (idade){
    if(idade >= 18){
            return `Você tem ${idade} anos de idade.`;
    } else {
        return `Você é menor de idade.`;
    }
}

const resultado = idadeDaPessoa(18);

console.log(resultado);

//Crie uma função que receba uma string e verifique se é um palíndromo (uma palavra que é lida da mesma forma de trás para frente) utilizando o método de string reverse(). Retorne true se for um palíndromo e false caso contrário. Imprima o resultado no console.
function ehUmPalindromo (palavra){
    if(palavra === palavra.split('').reverse().join('')){
        return `A palavra ${palavra} é um palíndromo.`;
    } else {
        return `A palavra ${palavra} não é um palíndromo.`;
    }
}

console.log(ehUmPalindromo('arara'));
console.log(ehUmPalindromo('carro'));

//Crie uma função que receba três números como parâmetros e determine qual é o maior entre eles. Utilize estruturas condicionais (if, else) para comparar os valores e determinar o maior. Imprima o maior valor no console.
function comparativoNumeros (numA, numB, numC){
    if (numA > numB && numA > numC){
        return `O número ${numA} é o maior.`;
    } else {
        if(numB > numA && numB > numC){
            return `O número ${numB} é o maior.`;
        } else {
            return `O número ${numC} é o maior.`;
        }
    }
}

console.log(comparativoNumeros(10, 5, 8));
console.log(comparativoNumeros(10, 15, 8));

//Crie uma arrow function chamada calculaPotencia que receba dois parâmetros: a base e o expoente. A função deve calcular a potência da base elevada ao expoente e retornar o resultado.
const calculaPotencia = (base, expoente) => {
    return base ** expoente;
}

console.log(calculaPotencia(2, 3));