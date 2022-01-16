/*
7 - Dado um array de entrada com o nome e as notas de avaliações dos alunos,
retorne uma lista com os alunos que tiraram 0 em todas as provas.
*/

const students = [
  { name: 'Ingrid', grade: [10, 9, 9.5] },
  { name: 'Antônio', grade: [8, 6, 7] },
  { name: 'Rodrigo', grade: [0, 0, 0] },
  { name: 'Mara', grade: [6, 8, 7.5] },
  { name: 'Aline', grade: [10, 10, 10] },
  { name: 'Tony Stark', grade: [0, 10, 10] },
  { name: 'Joaquim', grade: [0, 0, 0] },
]

const gradesZero = (arrayNota) => {
  let controlArray = []
  let method = (valor) => valor === 0
  arrayNota.forEach((element) => {
    if (element.grade.every(method)) {
      controlArray.push(element.name)
    }
  })
  return controlArray
}

console.log(gradesZero(students))
