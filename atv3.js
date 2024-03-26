/* Nome 1: Tiago Daniel de Souza Filho
   Nome 2: Pedro Henrique Mendes de Jesus
   Nome 3: Vinicius Eduardo Correia
   Nome 4: Augusto Lopes

3- Faça um programa que pergunte em que turno você estuda.
Peça para digitar M-matutino ou V-Vespertino ou N- Noturno.
Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou
"Boa Noite!" ou "Valor Inválido!", conforme o caso. (10 pontos)
*/
console.clear();
var teclado = require("prompt-sync")();
console.log("Em qual per\u00EDodo voc\u00EA estuda?");
console.log("M para Matutino | V para Vespertino | N para Noturno");
var period = (teclado("Digite o per\u00EDodo aqui: "));
if (period == "M" || period == "m") {
    console.log("Bom dia!");
}
else if (period == "V" || period == "v") {
    console.log("Boa tarde!");
}
else if (period == "N" || period == "n") {
    console.log("Boa noite!");
}
else
    console.log("Valor inv\u00E1lido!");
