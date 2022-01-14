const name = 'João'
const age = 27
const updateDate = 'data de atualização'

const person = {
  name: 'joao',
  age: 27,
  address: {
    street: 'Nome da minha rua',
    Number: 19023,
  },
  'data-de-criacao': '14/12/2021', // Quando temos uma propriedade que esta em "" devemos colocar o colchete
  [updateDate]: '14/12/2021',
  competencias: ['javascript', 'css', 'html'],
}

console.log(person.name)
console.log(person.age)
console.log(person.address)
console.log(person['data-de-criacao'])
console.log(person[updateDate])
console.log(person.competencias[0])
