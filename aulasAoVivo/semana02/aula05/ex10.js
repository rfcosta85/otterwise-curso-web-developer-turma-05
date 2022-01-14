/*
    10 - Dado um número, faça um algoritmo que imprime no console a soma de
    todos os números de 1 até o número escolhido. Ex: Ao ter como entrada o valor
    5, devem ser somados todos os números de 1 até 5 (1+2+3+4+5).
*/

const number = 5
let operator
let some = 0

for (let i = 1; i <= number; i++) {
  some += i
}

console.log(some)
