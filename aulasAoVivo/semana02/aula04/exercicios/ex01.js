/*
    1. Crie um algoritmo que tem como entrada um array de números e imprime no console a soma dos elementos sendo cada um deles multiplicado pelo seu índice.
    Exemplo entrada: [5, 9, 10, 6]
    Exemplo Saída: 47

*/
let arrayOfNumber = [5, 9, 10, 6]
let some = 0
let multiply

for (let i = 0; i < arrayOfNumber.length; i++) {
  multiply = i * arrayOfNumber[i]
  some += multiply
}

console.log(some)
