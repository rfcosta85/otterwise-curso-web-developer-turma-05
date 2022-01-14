/*
    11 - Crie um algoritmo que tem como entrada um array de notas, e imprime no
    console a média aritmética dessas notas.

*/

const graduate = [6, 8, 7]
let some = 0
let average

for (let i = 0; i < graduate.length; i++) {
  some += graduate[i]
}

average = some / graduate.length

console.log(`A média será de ${average}`)
