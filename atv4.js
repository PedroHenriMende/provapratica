/* Nome 1: Tiago Daniel de Souza Filho
   Nome 2: Pedro Henrique Mendes de Jesus
   Nome 3: Vinicius Eduardo Correia
   Nome 4: Augusto Lopes

4 - Escreva um programa que leia as medidas dos lados de um triângulo e
escreva se ele é Equilátero, isósceles ou Escaleno. Sendo que:
− Triângulo Equilátero: possui os 3 lados iguais.
− Triângulo Isóscele: possui 2 lados iguais.
− Triângulo Escaleno: possui 3 lados diferentes.

(10 pontos)
*/
console.clear();
var teclado = require("prompt-sync")();
var lado1 = parseFloat(teclado("Digite o lado1 "));
var lado2 = parseFloat(teclado("Digite o lado2 "));
var lado3 = parseFloat(teclado("Digite o lado3 "));
if ((lado1 == lado2) && (lado1 == lado3)) {
    console.log('Triângulo Equilátero');
}
else if ((lado1 == lado2) && (lado1 != lado3) || (lado1 == lado3) && (lado1 != lado2) || (lado2 == lado3) && (lado1 != lado2)) {
    console.log('Triângulo Isósceles');
}
else {
    console.log('Triângulo Escaleno');
}
