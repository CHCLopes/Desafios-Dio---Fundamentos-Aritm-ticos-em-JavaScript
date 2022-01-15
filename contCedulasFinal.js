/*
Desafio
Faça a leitura de um valor inteiro. Em seguida, 
calcule o menor número de notas possíveis (cédulas)
onde o valor pode ser decomposto. As notas que você 
deve considerar são de 100, 50, 20, 10, 5, 2 e 1. 
Na sequência mostre o valor lido e a relação de 
notas necessárias.

Entrada
Você receberá um valor inteiro N (0 < N < 1000000).

Saída
Exiba o valor lido e a quantidade mínima de notas
de cada tipo necessárias, seguindo o exemplo de saída
abaixo. Após cada linha deve ser imprimido o fim de linha.
 
Ex. Entr.   | Ex. Saída
_____________________________________
576         | 576
            | 5 nota(s) de R$ 100,00
            | 1 nota(s) de R$ 50,00
            | 1 nota(s) de R$ 20,00
            | 0 nota(s) de R$ 10,00
            | 1 nota(s) de R$ 5,00
            | 0 nota(s) de R$ 2,00
            | 1 nota(s) de R$ 1,00
_____________________________________
11257 	    | 11257
            | 112 nota(s) de R$ 100,00
            | 1 nota(s) de R$ 50,00
            | 0 nota(s) de R$ 20,00
            | 0 nota(s) de R$ 10,00
            | 1 nota(s) de R$ 5,00
            | 1 nota(s) de R$ 2,00
            | 0 nota(s) de R$ 1,00
_____________________________________
503         | 503
            | 5 nota(s) de R$ 100,00
            | 0 nota(s) de R$ 50,00
            | 0 nota(s) de R$ 20,00
            | 0 nota(s) de R$ 10,00
            | 0 nota(s) de R$ 5,00
            | 1 nota(s) de R$ 2,00
            | 1 nota(s) de R$ 1,00
*/

let valor = parseInt(gets());
let cedula = [100,50,20,10,5,2,1];
let quantidadeDeCedulas = [];
console.log(valor);

for (let contador = 0; contador < cedula.length; contador++) {
  quantidadeDeCedulas[contador] = Math.floor(valor / cedula[contador]);
    valor = Math.floor(valor % cedula[contador]);
    console.log(quantidadeDeCedulas[contador]+" nota(s) de R$ "+cedula[contador]+",00");
    }