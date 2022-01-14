const person = {
  name: 'joao',
  age: 27,
  address: {
    street: 'minha rua',
    number: 102,
  },
}

const {
  name,
  age,
  address: { street, number },
  address,
} = person

console.log(name)
console.log(age)
console.log(street)
console.log(number)
console.log(address)

const names = ['Joao', 'Pedro']
const numbers = [1, 2]

const [firstName, secondName] = names
const [, numberTwo] = numbers

console.log(firstName)
console.log(secondName)

console.log(numberTwo)

const users = ['joao', 'Rodrigo', 'christian', 'sidemar']

const getFirstElement = ([FirstElement]) => {
  return FirstElement
}

console.log('getFirsElement', getFirstElement(users))
