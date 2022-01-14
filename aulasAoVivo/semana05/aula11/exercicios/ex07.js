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

const someGrades = (accumulator, grade) => accumulator + grade

const totalGrades = students.grade(someGrades)

console.log(totalGrades)
