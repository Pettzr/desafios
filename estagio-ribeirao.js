// Desafio 1

let numeroInserido = 13

function isInFibonacci (numeroInserido) {

    let numero1 = 0
    let numero2 = 1

    while(numero1 <= numeroInserido) {
        if (numero1 === numeroInserido){
            return true
        }
        const proximaIteracao = numero1 + numero2
        numero1 = numero2
        numero2 = proximaIteracao 
    }

    return false

}

console.log(isInFibonacci(numeroInserido))


// Desafio 2


let INDICE = 12
let SOMA = 0
let K = 1

while(K < INDICE){
    K = K + 1
    SOMA = SOMA + K
    console.log(SOMA)
}



// Desafio 3

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

function isInString (stringInserida) {
    let a = 0
    let A = 0

    stringInserida.split('').forEach(element => {
        element === "a" ? a++ : element === "A" ? A++ : null
    });

    return(console.log(`Letra 'a' encontrada: ${a} vezes. Letra 'A' encontrada: ${A} vezes.`))
}

rl.question('Insira uma string para verificar: ', (input) => {
    isInString(input); 
    rl.close();
  });


// Desafio 4


// a) 1, 3, 5, 7, 9
// b) 2, 4, 8, 16, 32, 64, 128
// c) 0, 1, 4, 9, 16, 25, 36, 49
// d) 4, 16, 36, 64, 100
// e) 1, 1, 2, 3, 5, 8, 13
// f) 2,10, 12, 16, 17, 18, 19, 200


// Desafio 5

/*
Para solucionar esse problema eu primeiro eu primeiro ligaria 2 interruptores e esperaria 10 minutos para visitar a primeira sala.

Diante desse cenário há duas possibilidades. 

Primeiro cenário:

A primeira é a luz da sala esta apagada (o que significa que o 3 interruptor, o que não foi ligado, é desta sala).

Dessa forma eu voltaria, apagaria um dos interruptores e iria em uma outra sala. Caso a luz estivesse acesa o interruptor apagado é da outra sala, caso a luz estivesse apagada significa que o interruptor que acabei de apagar é desta sala, sendo o ultimo da sala que ainda não visitei. Dessa forma conseguindo descobrir qual interruptor é de cada sala.

Segundo cenário:

O segundo cenário é a luz da sala esta acesa. Eu então, voltaria e apagaria um interruptor, acenderia o último e iria visitar uma segunda sala instantaneamente.

Caso a luz estivesse apagada, significa que é do interruptor que eu acabei de apagar, sendo o outro interruptor que sempre esteve ligado da primeira sala e o ultimo que eu acabei de ligar da sala que não visitei.

Caso a luz estivesse acesa, eu tocaria a lampada. Se a lâmpada tivesse quente, isso significa que essa lâmpada pertece ao interruptor que esteve sempre ligado, sendo o interruptor que desliguei pertencente a primeira sala, e o que eu acabei de ligar da sala que não visitei ainda.
*/