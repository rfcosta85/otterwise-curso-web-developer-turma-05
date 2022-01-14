/*
3 - [REFATORAÇÃO] Dado um array de números, faça um programa que
imprima na tela somente os números positivos.
OBS: Para melhorar a resolução desse problema, crie funções que também
imprima os números negativos, os pares, os ímpares e realize a contagem de
cada um deles.
*/

const array = [1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127]

const isPositive = array.filter((positives) => {
  return positives > 0
})

const isNegative = array.filter((negatives) => {
  return negatives < 0
})

const isPair = array.filter((pair) => {
  return pair % 2 == 0
})

const isOdd = array.filter((odd) => {
  return odd % 2 != 0
})

const arrayPositives = isPositive
const lengthArrayPositives = isPositive.length

const arrayNegatives = isNegative
const lengthArrayNegatives = isNegative.length

const arrayPair = isPair
const lengthArrayPair = isPair.length

const arrayOdd = isOdd
const lengthArrayOdd = isOdd.length

console.log(`
Positivos: ${arrayPositives}
Total de números positivos: ${lengthArrayPositives}`)

console.log(`
Negativos: ${isNegative}
Total de números negativos: ${lengthArrayNegatives}`)

console.log(`
Pares: ${isPair}
Total de números pares: ${lengthArrayPair}`)

console.log(`
Ímpares: ${isOdd}
Total de números ímpares: ${lengthArrayOdd}
`)
