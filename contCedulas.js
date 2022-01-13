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

let valor = n = parseInt(gets());
let ced = [100,50,20,10,5,2,1];
let ced100 = ced50 = ced20 = ced10 = ced5 = ced2 = ced1 = 0;

while (n != 0) {
  if(n != 0) {ced100 = Math.floor(n / ced[0]);
  n = (n % ced[0])
  };
  if(n != 0) {ced50 = Math.floor(n / ced[1]);
  n = (n % ced[1])
  };
  if(n != 0) {ced20 = Math.floor(n / ced[2]);
  n = (n % ced[2])
  };
  if(n != 0) {ced10 = Math.floor(n / ced[3]);
  n = (n % ced[3])
  };
  if(n != 0) {ced5 = Math.floor(n / ced[4]);
  n = (n % ced[4])
  };
  if(n != 0) {ced2 = Math.floor(n / ced[5]);
  n = (n % ced[5])
  };
  if(n != 0) {ced1 = Math.floor(n / ced[6]);
  n = (n % ced[6])
  };
};
console.log(" " + valor);
console.log(" " + ced100 + " nota(s) de R$ 100,00");
console.log(" " + ced50 + " nota(s) de R$ 50,00");
console.log(" " + ced20 + " nota(s) de R$ 20,00");
console.log(" " + ced10 + " nota(s) de R$ 10,00");
console.log(" " + ced5 + " nota(s) de R$ 5,00");
console.log(" " + ced2 + " nota(s) de R$ 2,00");
console.log(" " + ced1 + " nota(s) de R$ 1,00");