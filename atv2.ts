/* Nome 1: Tiago Daniel de Souza Filho
   Nome 2: Pedro Henrique Mendes de Jesus 
   Nome 3: Vinicius Eduardo Correia
   Nome 4: Augusto Lopes
2 - Escreva um programa que receba três números inteiros 
e mostre eles em ordem DECRESCENTE. (10 pontos)
*/
console.clear();
const teclado = require("prompt-sync")();
let num1: number = parseFloat(teclado("Digite Numero 1"));
let num2: number = parseFloat(teclado("Digite Numero 2"));
let num3: number  = parseFloat(teclado("Digite Numero 3"));
if (num1 <= num2 && num1 <= num3) {
    if (num2 <= num3) {
        console.log("Numeros em ordem decrescente: " + num3 + ", " + num2 + ", " + num1);
    }
    else {
        console.log("Numeros em ordem decrescente: " + num3 + ", " + num1 + ", " + num2);
    }
}
else if (num2 <= num1 && num2 <= num3) {
    if (num1 <= num3) {
        console.log("Numeros em ordem decrescente: " + num1 + ", " + num2 + ", " + num3);
    }
    else {
        console.log("Numeros em ordem decrescente: " + num2 + ", " + num1 + ", " + num3);
    }
}
else {
    if (num1 <= num2) {
        console.log("Numeros em ordem decrescente: " + num3 + ", " + num2 + ", " + num1);
    }
    else {
        console.log("Numeros em ordem decrescente: " + num3 + ", " + num1 + ", " + num2);
    }
}
