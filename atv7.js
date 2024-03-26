/* Nome 1: Tiago Daniel de Souza Filho
   Nome 2: Pedro Henrique Mendes de Jesus
   Nome 3: Vinicius Eduardo Correia
   Nome 4: Augusto Lopes

7- Faça um aplicativo que ao pedir dois números efetue a soma,
   e pergunte se ele quer continuar calculando, caso sim volte
   a perguntar os números a ser somados, caso não o aplicativo
   é finalizado.  (10 pontos)
*/
var opcao = 0;
do {
    var teclado = require("prompt-sync")();
    var num1 = parseFloat(teclado("Digite numero 1"));
    var num2 = parseFloat(teclado("Digite numero 2"));
    var somadonum = num1 + num2;
    console.log(somadonum);
    opcao = parseFloat(teclado("Para continuar digite:"));
    console.log("1 - Continuar");
    console.log("0 - Sair");
    if (opcao == 1) {
        console.log("-------------------------");
        console.log("|voc\u00EA escolheu continuar|");
        console.log("-------------------------");
    }
    else {
        console.log("-------------------------");
        console.log("|voc\u00EA escolheu sair     |");
        console.log("-------------------------");
    }
} while (opcao == 1);
