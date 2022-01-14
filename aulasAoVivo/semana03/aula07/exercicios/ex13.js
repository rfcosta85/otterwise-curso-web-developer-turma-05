/*
    13 - Faça um programa que recebe um array e uma função como parâmetro e
    percorre todo o array aplicando a função em cada um dos elementos do array.

*/

const array = [1, 8, 6, 13, 7, 9, 15, 22, 356, 4, 3]
const multiply = 10

function multiplyByTen(array, multiplyParamater) {
  for (let i = 0; i < array.length; i++) {
    console.log(
      `${array[i]} * ${multiplyParamater} = ${array[i] * multiplyParamater}`
    )
  }
}

multiplyByTen(array, multiply)
