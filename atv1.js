/* Nome 1: Tiago Daniel de Souza Filho
   Nome 2: Pedro Henrique Mendes de Jesus
   Nome 3: Vinicius Eduardo Correia
   Nome 4: Augusto Lopes

1- Faça um programa que peça um número inteiro e
determine se ele é par ou ímpar. (10 pontos)
*/
console.clear();
var teclado = require("prompt-sync")();
var num = parseFloat(teclado("Digite o n\u00FAmero "));
if ((num % 2) == 0) {
    console.log(num % 2);
    console.log("Numero \u00E9 Par");
}
else {
    console.log("Numero \u00E9 Impar");
}
