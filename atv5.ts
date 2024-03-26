/* Nome 1: Tiago Daniel de Souza Filho
   Nome 2: Pedro Henrique Mendes de Jesus 
   Nome 3: Vinicius Eduardo Correia
   Nome 4: Augusto Lopes

5 -O IMC (índice de massa corpórea) indica o grau de obesidade de uma pessoa. 
Este índice é obtido pelo peso (em Kg) dividido pelo quadrado da altura 
(em metros). A tabela a seguir apresenta as faixas deste índice: 
 __________________________________________
|====== IMC ======= |===== Avaliação ===== |
| Menor que 18,5    | Baixo peso           |
| De 18,5 a 24,99   | Normal               |
| De 25 a 29,99     | Sobrepeso            |
| Maior que 30      | Obesidade            |
|___________________|______________________|

(25 pontos)
*/
console.clear();

const teclado = require(`prompt-sync`)();

let peso = parseFloat(teclado(`Digite peso: `));
let altura = parseFloat(teclado(`Digite altura: `));

let imc = peso / (altura * altura);

console.log(        `Tabela do IMC e seu numero ${imc}`      );
console.log('+------------------+--------------------------+');
console.log('|   IMC            |        Classificação     |');
console.log('+------------------+--------------------------+');
console.log('| Menor  -  18.4 |   Baixo Peso               |');
console.log('| De 18.5 - 24.9 |   Normal                   |');
console.log('| De 25.0 - 29.9 |   Sobrepeso                |');
console.log('| Maior que 30   |   Obesidade                |');
console.log('+------------------+--------------------------+');

if (imc <= 18.4) {
    console.log('Baixo Peso');
} else if (imc <= 24.9 && imc > 18.5) {
    console.log(`Normal`);
} else if (imc <= 29.9 && imc > 25.0) {
    console.log('Sobrepeso');
} else if (imc > 30) {
    console.log(`Obesidade`);
}else {
    console.log(`IMC Invalido`)
}