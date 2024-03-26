/* Nome 1: Tiago Daniel de Souza Filho
   Nome 2: Pedro Henrique Mendes de Jesus 
   Nome 3: Vinicius Eduardo Correia
   Nome 4: Augusto Lopes

1- Faça um programa que peça um número inteiro e 
determine se ele é par ou ímpar. (10 pontos)
*/
console.clear();

const teclado = require("prompt-sync")();
let num: number = parseFloat(teclado(`Digite o número `));


if ((num % 2) == 0) {
    console.log(num % 2);
    console.log(`Numero é Par`)
}else{
    console.log(`Numero é Impar`)
}