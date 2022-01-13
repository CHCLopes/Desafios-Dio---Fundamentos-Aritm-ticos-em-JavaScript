/*
Desafio
Você deve fazer a leitura de 5 valores inteiros. 
Em seguida mostre quantos valores informados são 
pares, quantos valores informados são ímpares, 
quantos valores informados são positivos e quantos
valores informados são negativos. Considere que o 
número zero é positivo, mas não pode ser considerado 
como positivo ou negativo.

Entrada
Você receberá 5 valores inteiros.

Saída
Exiba a mensagem conforme o exemplo de saída abaixo, 
sendo uma mensagem por linha e não esquecendo o final 
de linha após cada uma.
 
Exemplo de Entrada  | Exemplo de Saída
____________________|_____________________
-5                  | 3 par(es)
0                   | 2 impar(es)
-3                  | 1 positivo(s)
-4                  | 3 negativo(s)
12                  | 

*/

let c = par = imp = pos = neg = 0;

while (c < 5) {
let  n = parseInt(gets());
  if (n % 2 == 0){
    par ++ } else{
    imp ++ };
  if (n > 0) {
    pos ++ };
  if (n < 0) {
    neg ++ };
  c ++
};

console.log(" " + par + " par(es)");
console.log(" " + imp + " impar(es)");
console.log(" " + pos + " positivo(s)");
console.log(" " + neg + " negativo(s)");