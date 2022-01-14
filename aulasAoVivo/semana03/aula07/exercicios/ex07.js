/*
    7 - [REFATORAÇÃO] Dado um array de números como entrada, faça um
    programa que multiplique todos os valores por 10.
    OBS: Para melhorar a resolução desse problema, monte um programa que
    recebe como parâmetro o valor pelo qual os valores do array devem ser
    multiplicados.
*/

const array = [1, 8, 6, 13, 7, 9, 15, 22, 356, 4, 3]
let operator = 10

function multiply(array, operator) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${array[i] * operator}`)
  }
}

let functionResult = multiply(array, operator)
