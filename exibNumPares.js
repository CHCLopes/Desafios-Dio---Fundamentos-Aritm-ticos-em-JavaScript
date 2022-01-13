/*
Desafios
Crie um programa que leia um número 
e mostre os números pares até esse 
número, inclusive ele mesmo.

Entrada
Você receberá 1 valor inteiro N, 
onde N > 0.

Saída
Exiba todos os números pares até 
o valor de entrada, sendo um em cada linha. 
 
Exemplo de Entrada  | Exemplo de Saída
______________________________________
6 	                | 2
                    | 4
                    | 6
______________________________________
*/

let n = parseInt(gets()), c = 1;

while (c <= n) {
  if (c % 2 == 0) {
    console.log(c)
  };
  c ++
}