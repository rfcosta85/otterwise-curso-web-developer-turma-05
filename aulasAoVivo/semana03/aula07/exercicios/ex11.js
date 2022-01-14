/*
    11 - [REFATORAÇÃO] Em uma empresa de tecnologia a área de Recursos
    Humanos precisava organizar algumas informações a respeito dos funcionários.
    Para que isso fosse possível, ele precisava criar um programa que entregasse a
    lista de funcionalidades abaixo.
*/

const employers = [
  { nome: 'João', idade: 30, salario: 15000, senioridade: 'senior' },
  { nome: 'Pedro', idade: 22, salario: 10000, senioridade: 'pleno' },
  { nome: 'Carla', idade: 27, salario: 1500, senioridade: 'estagio' },
  { nome: 'Lucas', idade: 35, salario: 15000, senioridade: 'senior' },
  { nome: 'Roberta', idade: 45, salario: 5000, senioridade: 'junior' },
  { nome: 'Patrícia', idade: 19, salario: 10000, senioridade: 'pleno' },
  { nome: 'Joana', idade: 23, salario: 5000, senioridade: 'junior' },
]

//Função de idade descrescente

function descendingAgeFunction(arrayDescending) {
  let temporary
  let min_age = employers[0]
  for (let i = 0; i < arrayDescending.length; i++) {
    //min_age = i
    for (let j = i + 1; j < arrayDescending.length; j++) {
      if (arrayDescending[j].idade < arrayDescending[i].idade) {
        min_age = employers[j]
        temporary = arrayDescending[i]
        arrayDescending[i] = arrayDescending[j]
        arrayDescending[j] = temporary
      }
    }
  }
  return arrayDescending
}

// Função de idade Crescente

function growingAgeFunction(arrayGrowing) {
  let temporary
  let min_age = employers[0]
  for (let i = 0; i < arrayGrowing.length; i++) {
    //min_age = i
    for (let j = i + 1; j < arrayGrowing.length; j++) {
      if (arrayGrowing[j].idade > arrayGrowing[i].idade) {
        min_age = employers[j]
        temporary = arrayGrowing[i]
        arrayGrowing[i] = arrayGrowing[j]
        arrayGrowing[j] = temporary
      }
    }
  }
  return arrayGrowing
}

// Função de salário Descrescente

function descendingSalaryFunction(arrayDescending) {
  let temporary
  let min_salary = employers[0]
  for (let i = 0; i < arrayDescending.length; i++) {
    //min_age = i
    for (let j = i + 1; j < arrayDescending.length; j++) {
      if (arrayDescending[j].salario < arrayDescending[i].salario) {
        min_salary = employers[j]
        temporary = arrayDescending[i]
        arrayDescending[i] = arrayDescending[j]
        arrayDescending[j] = temporary
      }
    }
  }
  return arrayDescending
}

// Função de salário Crescente

function growingSalaryFunction(arrayGrowing) {
  let temporary
  let min_salary = employers[0]
  for (let i = 0; i < arrayGrowing.length; i++) {
    //min_age = i
    for (let j = i + 1; j < arrayGrowing.length; j++) {
      if (arrayGrowing[j].salario > arrayGrowing[i].salario) {
        min_salary = employers[j]
        temporary = arrayGrowing[i]
        arrayGrowing[i] = arrayGrowing[j]
        arrayGrowing[j] = temporary
      }
    }
  }
  return arrayGrowing
}

// Função de Seniridade decrescente

function descendingSeniorityFunction(arrayDescending) {
  let temporary
  let min_senior = employers[0]
  for (let i = 0; i < arrayDescending.length; i++) {
    //min_age = i
    for (let j = i + 1; j < arrayDescending.length; j++) {
      if (arrayDescending[j].senioridade < arrayDescending[i].senioridade) {
        min_senior = employers[j]
        temporary = arrayDescending[i]
        arrayDescending[i] = arrayDescending[j]
        arrayDescending[j] = temporary
      }
    }
  }
  return arrayDescending
}

// Função de senioridade crescente

function growingSeniorityFunction(arrayGrowing) {
  let temporary
  let min_senior = employers[0]
  for (let i = 0; i < arrayGrowing.length; i++) {
    //min_age = i
    for (let j = i + 1; j < arrayGrowing.length; j++) {
      if (arrayGrowing[j].senioridade > arrayGrowing[i].senioridade) {
        min_senior = employers[j]
        temporary = arrayGrowing[i]
        arrayGrowing[i] = arrayGrowing[j]
        arrayGrowing[j] = temporary
      }
    }
  }
  return arrayGrowing
}

console.log('\n------------------------------------')
console.log('Array em Ordem Crescente por idade')
console.log('------------------------------------')
console.log(descendingAgeFunction(employers))
console.log('------------------------------------')

console.log('Array em Ordem Decrescente por idade')
console.log('------------------------------------')
console.log(growingAgeFunction(employers))
console.log('\n------------------------------------')

console.log('Array em Ordem Crescente por salário')
console.log('------------------------------------')
console.log(descendingSalaryFunction(employers))
console.log('\n------------------------------------')

console.log('Array em Ordem Descrescente por salário')
console.log('------------------------------------')
console.log(growingSalaryFunction(employers))

console.log('\n------------------------------------')
console.log('Array em Ordem Crescente por Senioridade')
console.log('------------------------------------')
console.log(descendingSeniorityFunction(employers))

console.log('\n------------------------------------')
console.log('Array em Ordem deCrescente por Senioridade')
console.log('------------------------------------')
console.log(growingSeniorityFunction(employers))

// Obs abaixo deixarei como comentário as tentativas que eu tive que fazer até pensar em buscar no google como funciona um algoritmo de ordenação

/*
let lessElement = employers[0]
let aux
let lessElementJ

function DescendingFunction(ageList) {
  for (let i = 0; i < employers.length; i++) {
    if (employers[i].idade < lessElement.idade) {
      lessElement = employers[i]
    }
    for (let j = 0; j < i; j++) {
      if (employers[j].idade < lessElement.idade) {
        aux = employers[j]
        lessElementJ = employers[i]
        lessElement = aux
      }
    }
  }
  return lessElement
}

console.log(DescendingFunction(employers))

*/

/*

  let lessElement = employers[0]

    for (let i = 0; i < employers.length; i++) {
    if (employers[i].idade < lessElement.idade) {
    lessElement = employers[i]
  }
}

console.log(lessElement)

*/

/*
let valor1 = 1
let valor2 = 2
let controle

for (let i = 0; i < 3; i++) {
  if (valor2 > valor1) {
    controle = valor1
    valor1 = valor2
    valor2 = controle
  }
}

console.log(valor1)
console.log(valor2)
*/

/*
for (let i = 0; i < employers.length; i++) {
  if (employers[i].idade < firstPosition) {
    firstPosition = employers[i]
  } else {
    array += employers[i].idade
  }
}
*/

/*
for (let people in employers) {
  console.log(employers[people])
}
*/

/*let first
let firstName
let firstSalary
let firstSeniority

let second
let secondName
let secondSalary
let secondSeniority

let third
let fourth
let fifth
let sixth
let seventh

for (let i = 0; i < employers.length; i++) {
  if (i === 0) {
    first = employers[0].idade
    firstName = employers[0].nome
    firstSalary = employers[0].salario
    firstSeniority = employers[0].senioridade
  } else if (first > employers[i].idade) {
    first = employers[i].idade
    firstName = employers[i].nome
    firstSalary = employers[i].salario
    firstSeniority = employers[i].senioridade
  }
}

console.log(
  firstName + ', ' + first + ', ' + firstSalary + ', ' + firstSeniority
)
console.log(second)
*/
