/* Nome 1: Tiago Daniel de Souza Filho
   Nome 2: Pedro Henrique Mendes de Jesus 
   Nome 3: Vinicius Eduardo Correia
   Nome 4: Augusto Lopes

6- Um posto está vendendo combustíveis com a seguinte tabela de descontos:
    Álcool: até 20 litros, desconto de 3% por litro
    acima de 20 litros, desconto de 5% por litro
    Gasolina:
    até 20 litros, desconto de 4% por litro
    acima de 20 litros, desconto de 6% por litro

Escreva um algoritmo que leia o número de litros vendidos, 
o tipo de combustível (codificado da seguinte forma: E-etanol, G-gasolina), 
calcule e imprima o valor a ser pago pelo cliente sabendo-se que 
o preço do litro da gasolina é R$ 5,58 o preço do litro do 
etanol é R$ 3,42.

(25 pontos)
*/
console.clear();

const teclado = require(`prompt-sync`)();

let e: number = 3.42;
let g: number = 5.58;
console.log(`Opções de combustível disponível:`);
console.log(`digite E para etanol: R$3,42/L | digite G para gasolina: R$5,58/L`);
let tipo: string = (teclado(`Digite o tipo de combustível: `));
let lit: number = (teclado(`Digite a quantidade de litros desejada: `));
let desce: number = (lit * 0.03);
let descE: number = (lit * 0.05);
let descg: number = (lit * 0.04);
let descG: number = (lit * 0.06);

if (tipo == `E` || tipo == `e` ){
    if (lit <= 20) {
        console.log(`Valor: R$${lit * e - desce}`);
    } else { if (lit > 20) {
        console.log(`Valor: R$${lit * e - descE}`);
    }
  }
} 

if (tipo == `G` || tipo == `g` ){
    if (lit <= 20) {
        console.log(`Valor: R$${lit * e - descg}`);
    } else { if (lit > 20) {
        console.log(`Valor: R$${lit * e - descG}`);
    }
  }
} 
