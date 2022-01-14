/*
    8 - [REFATORAÇÃO] Crie um algoritmo que tem como entrada um array de notas,
    e imprime no console a média aritmética dessas notas.
    OBS: Para melhorar a resolução desse problema, monte um programa que
    retorna a média aritmética independente do tamanho do array.
*/

const grades = [6, 8, 7]
const exames = 3

const average = function(grades) {
    let totalGrades = 0
    for(let i= 0; i < grades.length; i++) {
        totalGrades += grades[i]
    }

    let finalResult = totalGrades/exames

    return finalResult
}

let result = average(grades) 

console.log(`A média aritmética foi de: ${result}`)

