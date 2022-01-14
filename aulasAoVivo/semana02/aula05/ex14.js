/*
    14 - Dado um array de números, faça um programa que encontre o menor
    elemento deste array e sua posição. Mostre as informações encontradas no
    console.

*/

const numbers = [1, 2, 3, 4, -5, 6, 7, 8, 9, 10]
let smaller = numbers[0]
let position

for (let i = 0; i < numbers.length; i++) {
  if (smaller > numbers[i]) {
    smaller = numbers[i]
    position = i
  }
}

console.log(`Menor valor: ${smaller}
Posição: ${position}`)

function nameCodeCategory(array) {}
