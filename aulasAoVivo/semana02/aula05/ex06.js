/*
    6 - Dado um array de números, faça um programa que imprima na tela somente
    os números positivos.
*/

const numbers = [1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127]

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] >= 0) {
    console.log(numbers[i])
  }
}
