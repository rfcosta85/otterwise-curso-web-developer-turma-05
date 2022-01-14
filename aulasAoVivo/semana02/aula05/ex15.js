/*
 15 - Dado o array de objetos abaixo, faça um programa que calcule a média
    aritmética dos estudantes e imprima no console os nomes dos estudantes
    aprovados. A média de aprovação é 7.0.
*/

let students = [
  { nome: 'Marcos', notas: [10, 7, 2] },
  { nome: 'Michele', notas: [10, 10, 10] },
  { nome: 'Pedro', notas: [3, 10, 9] },
  { nome: 'Andressa', notas: [6, 6, 8] },
  { nome: 'Cristiana', notas: [7, 9, 2] },
]

let studentGrade1 = 0
let studentGrade2 = 0
let studentGrade3 = 0
let studentGrade4 = 0
let studentGrade5 = 0

for (let i = 0; i < students[0].notas.length; i++) {
  studentGrade1 += students[0].notas[i]
}

for (let i = 0; i < students[1].notas.length; i++) {
  studentGrade2 += students[1].notas[i]
}

for (let i = 0; i < students[2].notas.length; i++) {
  studentGrade3 += students[2].notas[i]
}

for (let i = 0; i < students[3].notas.length; i++) {
  studentGrade4 += students[3].notas[i]
}

for (let i = 0; i < students[4].notas.length; i++) {
  studentGrade5 += students[4].notas[i]
}

let average1 = studentGrade1 / students[0].notas.length
let average2 = studentGrade2 / students[1].notas.length
let average3 = studentGrade3 / students[2].notas.length
let average4 = studentGrade4 / students[3].notas.length
let average5 = studentGrade5 / students[4].notas.length

if (average1 >= 7) {
  console.log(`${students[0].nome} está aprovado com média de: ${average1}`)
} else {
  console.log(
    `Com média de ${average1} o aluno ${students[0].nome} não está aprovado`
  )
}

if (average2 >= 7) {
  console.log(`${students[1].nome} está aprovado com média de: ${average2}`)
} else {
  console.log(
    `Com média de ${average2} o aluno ${students[1].nome} não está aprovado`
  )
}

if (average3 >= 7) {
  console.log(`${students[2].nome} está aprovado com média de: ${average3}`)
} else {
  console.log(
    `Com média de ${average3} o aluno ${students[2].nome} não está aprovado`
  )
}

if (average4 >= 7) {
  console.log(`${students[3].nome} está aprovado com média de: ${average4}`)
} else {
  console.log(
    `Com média de ${average4} o aluno ${students[3].nome} não está aprovado`
  )
}

if (average5 >= 7) {
  console.log(`${students[4].nome} está aprovado com média de: ${average5}`)
} else {
  console.log(
    `Com média de ${average5} o aluno ${students[4].nome} não está aprovado`
  )
}
