// 1. Faça um programa que some todos os elementos do array abaixo e imprima na tela o somatório:
// [10, 2, 78, 1, 92, 24, 13]

const array = [10, 2, 78, 1, 92, 24, 13]

const sum = array.reduce((acc, number) => {
  return acc + number
}, 0)

console.log(sum)
