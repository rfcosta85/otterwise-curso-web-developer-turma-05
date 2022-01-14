/*
4 - [REFATORAÇÃO] Crie um algoritmo que tem como entrada um array de notas,
e imprime no console a média aritmética dessas notas.
OBS: Para melhorar a resolução desse problema, monte um programa que
retorna a média aritmética independente do tamanho do array.
*/

const grades = [6, 8, 7]

const some = (accumulator, grade) => accumulator + grade

const totalGrades = grades.reduce(some)

const average = (totalGrades / grades.length).toFixed(2)

console.log(average)
