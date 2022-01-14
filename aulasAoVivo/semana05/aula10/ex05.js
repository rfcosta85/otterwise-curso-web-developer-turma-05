/*2. Levando em consideração o array de usuários abaixo: [{id: 3, name: “joao”, active: false}, {id: 2, name: “gabriel” active: false}, {id: 1, name: “mari”, active: true}, {id: 0, name: “miguel”, active: false}]
Escreva um programa que imprime na tela o nome de todos os usuários ativos
Escreva um programa que imprime na tela quantos usuários não estão ativos
Escreva um programa que imprime na tela se existe algum usuário ativo
Escreva um programa que imprime na tela o array ordenado por id em ordem crescente*/

const array = [
  { id: 3, name: 'joao', active: false },
  { id: 2, name: 'gabriel', active: false },
  { id: 1, name: 'mari', active: true },
  { id: 0, name: 'miguel', active: false },
]

let TotalInactive = 0

const filterActives = array.filter((actives) => {
  return actives.active === true
})

const filterInactive = array.filter((inactive) => {
  return inactive.active === false
})

const isAnyUserActivity = array.find((active) => {
  return active.active === true
})

const isActive = isAnyUserActivity

const ascendingOrdering = array.sort((larger, smaller) => {
  return larger.id - smaller.id
})

console.log('\n')
console.log(filterActives)
console.log('\n')
console.log(filterInactive.length)
console.log('\n')
if (isActive) {
  console.log('Existe um usuário ativo')
} else {
  console.log('Não existe usuário ativo')
}
console.log('\n')
console.log(ascendingOrdering)
console.log('\n')
