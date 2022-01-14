// 13 - [REFATORAÇÃO] Em uma empresa de tecnologia a área de Recursos
// Humanos precisava organizar algumas informações a respeito dos funcionários.
// Para que isso fosse possível, ele precisava criar um programa que entregasse a
// lista de funcionalidades abaixo.

// Tendo como entrada um array de objetos crie funções que realizam as seguintes
// operações:
// ● Ordena o Array em ordem crescente por idade;
// ● Ordena o Array em ordem decrescente por idade;
// ● Ordena o Array em ordem crescente por salário;
// ● Ordena o Array em ordem decrescente por salário;
// ● Ordena o Array em ordem crescente por senioridade;
// ● Ordena o Array em ordem decrescente por senioridade;

const employers = [
  { nome: 'João', idade: 30, salario: 15000, senioridade: 'senior' },
  { nome: 'Pedro', idade: 22, salario: 10000, senioridade: 'pleno' },
  { nome: 'Carla', idade: 27, salario: 1500, senioridade: 'estagio' },
  { nome: 'Lucas', idade: 35, salario: 15000, senioridade: 'senior' },
  { nome: 'Roberta', idade: 45, salario: 5000, senioridade: 'junior' },
  { nome: 'Patrícia', idade: 19, salario: 10000, senioridade: 'pleno' },
  { nome: 'Joana', idade: 23, salario: 5000, senioridade: 'junior' },
]

const sortByAgeGrowing = employers.sort((a, b) => {
  return a.idade - b.idade
})

console.log('Ordem Crescente por idade \n')
console.log(sortByAgeGrowing)

const sortByAgeDescending = employers.sort((c, d) => {
  return d.idade - c.idade
})

console.log('Ordem Decrescente por idade \n')
console.log(sortByAgeDescending)

const sortByGrowingWage = employers.sort((a, b) => {
  return a.salario - b.salario
})

console.log('Ordem Crescente de Salário\n')
console.log(sortByGrowingWage)

const sortByDescendingWage = employers.sort((a, b) => {
  return b.salario - a.salario
})

console.log('Ordem Decrescente de Salário\n')
console.log(sortByDescendingWage)

const sortByGrowingSeniority = employers.sort((a, b) => {
  return a.senioridade - b.senioridade
})

console.log('Ordem Crescente por senioridade\n')
console.log(sortByGrowingSeniority)

const sortByDescendingSeniority = employers.sort((a, b) => {
  return b.senioridade - a.senioridade
})

console.log('Ordem Decrescente por senioridade\n')
console.log(sortByDescendingSeniority)
