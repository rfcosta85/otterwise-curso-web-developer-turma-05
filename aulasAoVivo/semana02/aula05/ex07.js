/*
    7 - Dado um array de números, mostre quantos valores são pares, quantos são
    ímpares, quantos são positivos e quantos são negativos.
*/

let positve = 0
let negative = 0
let even = 0
let odd = 0
const array = [-5, 0, -3, -4, 12]

for (let i = 0; i < array.length; i++) {
  if (array[i] >= 0) {
    positve += 1
  } else {
    negative += 1
  }
  if (array[i] % 2 === 0) {
    even += 1
  } else {
    odd += 1
  }
}

console.log(`${positve} valores positivos 
${negative} valores negativos
${even} valores pares 
${odd} valores ímpares`)
