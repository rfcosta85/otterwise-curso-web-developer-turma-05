// Métodos de iteração

// const users = ['joao', 'Gustavo', 'Ermesson', 'Wallace']

// // foreach

// users.forEach((user, index, array) => {
//   console.log(user)
//   console.log(index)
//   console.log(array)
// })

// // map - é necessário mudar os valores de um array

// const newUsers = users.map((user, index) => {
//   return {
//     name: user,
//   }
// })

// console.log(newUsers)

// console.log([1, 2, 3].map((el) => el * 10))

// // filter - encontrar uma lista de elementos

// const numbers = [20, 1, 5, 30, 76]

// const filteredArray = numbers.filter((number) => {
//   return number > 10
// })

// console.log(filteredArray)

// find - encontrar O elemento

const studentsAndTeachers = [
  { name: 'João', role: 'Professor', id: 1 },
  { name: 'Juca', role: 'Estudante', id: 3 },
  { name: 'Márcia', role: 'Estudante', id: 4 },
  { name: 'Pedro', role: 'Estudante', id: 5 },
  { name: 'Matheus', role: 'Professor', id: 2 },
  { name: 'Júlia', role: 'Estudante', id: 6 },
]
// const student = studentsAndTeachers.find((user) => {
//   return user.role === 'Estudante'
// })

// console.log(student)

// every

// const isEveryStudent = studentsAndTeachers.every((user) => {
//   return user.role === 'Estudante'
// })

// console.log(isEveryStudent)

// some

const hasTeacher = studentsAndTeachers.some((user) => {
  return user.role === 'Professor'
})

console.log(hasTeacher)

// sort

// console.log([10, 4, 1, 7, 3].sort((a, b) => a - b))

// const orderedArray = studentsAndTeachers.sort((a, b) => {
//   return a.id - b.id
// })

// console.log(orderedArray)
