let num = 0

let numArray = [10, 20, 30, 40]

console.log(numArray)
console.log(numArray[1] + numArray[0])

let fruits = ['banana', 'maçã', 'laranja']

console.log(fruits[2])

function hello() {
  console.log('Hello world')
}

let fruitsAndNumbers = ['banana', 2, 'maçã', 4, null, undefined, true, hello]

console.log(fruitsAndNumbers[7]())

fruitsAndNumbers[0] = 'laranja'

console.log(fruitsAndNumbers)
