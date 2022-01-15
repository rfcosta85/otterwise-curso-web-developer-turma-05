/*
7 - Dado um array de entrada com o nome e as notas de avaliações dos alunos,
retorne uma lista com os alunos que tiraram 0 em todas as provas.
*/

const students = [
  { name: 'Gustavo', grade: [10, 9, 9.5] },
  { name: 'Alessandro', grade: [8, 6, 7] },
  { name: 'Victor', grade: [6, 8, 7.5] },
  { name: 'Mari', grade: [10, 10, 10] },
  { name: 'Rodrigo', grade: [0, 0, 0] },
]

// const arrayOfName = (studentName) => studentName.name
// const arrayOfGrades = (studentGrade) => studentGrade.grade

// // const result = students.map(arrayOfName)
// const result2 = students.map(arrayOfGrades)
// const finalResult = result2.reduce((acc, atual) => {
//   return acc + atual.grade
// })
// console.log(result)
// console.log(finalResult)

// const resultado = students
//   .map((a) => a.grade)
//   .reduce(function (acc, atual) {
//     console.log(acc, atual)
//     return acc + atual
//   })

// console.log(resultado)
