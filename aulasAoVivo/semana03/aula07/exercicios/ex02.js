/*
    2 - [REFATORAÇÃO] Tendo como informação dois valores, valor1 e valor2, faça
    um programa que imprima os dois valores no console. Após imprimir, troque a
    informação de valor1 pela informação do valor2 e imprima no console
    novamente.

*/

let firtsValue
let secondValue
let controlVariable

function change(valueOne, valueTwo) {
  for (let index = 0; index < 2; index++) {
    firtsValue = valueOne
    secondValue = valueTwo
  }

  console.log(firtsValue)
  console.log(secondValue)

  for (let index2 = 0; index2 < 4; index2++) {
    firtsValue = valueOne
    secondValue = valueTwo
    controlVariable = valueTwo
    secondValue = valueOne
    firtsValue = controlVariable
  }

  console.log(firtsValue)
  console.log(secondValue)
}

let result = change(10, 12)
