/*
    6 - [REFATORAÇÃO] Dado um array de números, faça um programa que imprima
    na tela somente os números positivos.
    OBS: Para melhorar a resolução desse problema, crie funções que também
    imprimem os números negativos, os pares, os ímpares e realize a contagem de
    cada um deles.
*/

const numbers = [1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127]

const positives = function (numbers) {
  let positiveNumbers = []
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 0) {
      positiveNumbers += [numbers[i]]
    }
  }
  return positiveNumbers
}

const negatives = function (numbers) {
  let negativesNumbers = []
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      negativesNumbers += [numbers[i]]
    }
  }
  return negativesNumbers
}

let positiveResults = positives(numbers)
let negativeResults = negatives(numbers)

const [first, second, third, fourth, fifth] = positiveResults

const [
  firstNegativeNumber,
  secondNegativeNumber,
  thirdNegativeNumber,
  fourthNegativeNumber,
  fifthNegativeNumber,
] = negativeResults

console.log(
  `Os números positivos foram: ${first}, ${second}, ${third}, ${fourth}, ${fifth}`
)
console.log(
  `Os números negativos foram: ${firstNegativeNumber}, ${secondNegativeNumber}, ${thirdNegativeNumber}, ${fourthNegativeNumber}, ${fifthNegativeNumber}`
)
