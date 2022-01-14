// 14 - Uma empresa gostaria de organizar seu quadro de funcionários, para isso
// contratou o estagiário Juquinha para criar um software. O CEO da empresa fez
// uma lista de pedidos para o Juquinha.

// Pedidos:
// ● A - Função para retornar apenas o funcionário com o id informado:
// ● B - Função para filtrar apenas os funcionários ativos na empresa:
// ● C - Função para filtrar apenas funcionários clt
// ● D - Função para criar uma nova estrutura onde cada funcionário receberá
// uma nova informação de base salarial
// ● E - Função onde separa em 2 grupos os funcionários pj e clt
// ● F - Função que retorna apenas funcionários ativos ordenados por ordem
// de idade

const employees = [
  {
    id: 1,
    name: 'Carlos',
    age: 35,
    active: false,
    birth_date: '13/05/1986',
    contract_date: '20/07/2015',
    job: 'front-end',
    type: 'clt',
  },
  {
    id: 2,
    name: 'Matheus',
    age: 30,
    active: true,
    birth_date: '03/07/1991',
    contract_date: '01/03/2020',
    job: 'front-end',
    type: 'clt',
  },
  {
    id: 3,
    name: 'Pamela',
    age: 23,
    active: true,
    birth_date: '20/09/1998',
    contract_date: '19/06/2021',
    job: 'back-end',
    type: 'pj',
  },
  {
    id: 4,
    name: 'Fabiana',
    age: 32,
    active: false,
    birth_date: '08/12/1989',
    contract_date: '13/04/2018',
    job: 'front-end',
    type: 'pj',
  },
  {
    id: 5,
    name: 'João',
    age: 37,
    active: true,
    birth_date: '08/12/1984',
    contract_date: '03/08/2014',
    job: 'front-end',
    type: 'clt',
  },
  {
    id: 6,
    name: 'Miguel',
    age: 29,
    active: true,
    birth_date: '08/12/1992',
    contract_date: '26/02/2015',
    job: 'fullstack',
    type: 'clt',
  },
  {
    id: 7,
    name: 'Francine',
    age: 27,
    active: false,
    birth_date: '27/01/1994',
    contract_date: '23/05/2019',
    job: 'designer',
    type: 'pj',
  },
  {
    id: 8,
    name: 'Matheus',
    age: 31,
    active: true,
    birth_date: '10/11/1990',
    contract_date: '18/09/2017',
    job: 'marketing',
    type: 'clt',
  },
  {
    id: 9,
    name: 'Gabriel',
    age: 28,
    active: true,
    birth_date: '08/12/1993',
    contract_date: '14/11/2020',
    job: 'financeiro',
    type: 'clt',
  },
]

const findId = 6
const idEmployee = employees.find((worker) => {
  return worker.id === findId
})

function hasEmployee() {
  if (idEmployee) {
    console.log(idEmployee)
  } else {
    console.log(`Nenhum usuário identificado com o id ${findId} informado`)
  }
}

hasEmployee()

let usersActives = []
const findActivesEmployees = employees.map((activeWorker) => {
  if (activeWorker.active) {
    usersActives = activeWorker.name
  }
  return usersActives
})

console.log(findActivesEmployees)

let cltWorkers = []
const findCltEmployees = employees.map((cltWorker) => {
  if (cltWorker.type === 'clt') {
    cltWorkers = cltWorker.name
  }
  return cltWorkers
})

console.log(findActivesEmployees)
