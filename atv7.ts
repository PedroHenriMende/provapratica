/* Nome 1: Tiago Daniel de Souza Filho
   Nome 2: Pedro Henrique Mendes de Jesus 
   Nome 3: Vinicius Eduardo Correia
   Nome 4: Augusto Lopes

7- Faça um aplicativo que ao pedir dois números efetue a soma,
   e pergunte se ele quer continuar calculando, caso sim volte
   a perguntar os números a ser somados, caso não o aplicativo
   é finalizado.  (10 pontos) 
*/
let opcao: number = 0;

do {
    const teclado = require (`prompt-sync`)();
    
    let num1: number = parseFloat(teclado(`Digite numero 1`));
    let num2: number = parseFloat(teclado(`Digite numero 2`));
    let somadonum: number = num1 + num2;

    console.log(somadonum);
    
    console.log(`1 - Continuar`);
    console.log(`0 - Sair`);
    opcao = parseFloat(teclado(`Para continuar digite:`));

    if(opcao == 1){
    console.log(`-------------------------`);
    console.log(`|você escolheu continuar|`);
    console.log(`-------------------------`);
    }else{
    console.log(`-------------------------`);
    console.log(`|você escolheu sair     |`);
    console.log(`-------------------------`);   
    }
} while(opcao == 1);
 


